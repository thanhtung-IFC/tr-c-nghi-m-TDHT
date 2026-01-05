/**
 * SCRIPT.JS - PHIÊN BẢN AN TOÀN (Lưu Key trong trình duyệt)
 */

// --- CẤU HÌNH API AN TOÀN ---
// Bước 1: Kiểm tra xem trình duyệt đã lưu Key chưa
let AI_API_KEY = localStorage.getItem("user_groq_key");

// Bước 2: Nếu chưa có, hiện khung bắt nhập (Chỉ hiện 1 lần đầu tiên)
if (!AI_API_KEY) {
    let inputKey = prompt("Vui lòng dán Groq API Key của bạn vào đây (Bắt đầu bằng gsk_...):");
    // Kiểm tra nếu người dùng chịu nhập
    if (inputKey && inputKey.trim() !== "") {
        AI_API_KEY = inputKey.trim();
        // Lưu vào bộ nhớ trình duyệt để lần sau không phải nhập lại
        localStorage.setItem("user_groq_key", AI_API_KEY); 
    } else {
        alert("⚠️ Bạn chưa nhập Key! Tính năng giải thích sẽ không hoạt động. Hãy F5 để nhập lại.");
    }
}

// --- BIẾN TOÀN CỤC ---
let currentQuizData = [];
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// --- DOM ELEMENTS ---
const homeScreen = document.getElementById('home-screen');
const quizApp = document.getElementById('quiz-app');
const subjectList = document.getElementById('subject-list');
const currentSubjectName = document.getElementById('current-subject-name');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const explainBtn = document.getElementById('explain-btn');
const aiBox = document.getElementById('ai-explanation');
const aiContent = document.getElementById('ai-content');

// --- QUẢN LÝ MÔN HỌC ---
function initHome() {
    subjectList.innerHTML = '';
    if (typeof subjectsData === 'undefined') {
        subjectList.innerHTML = '<p style="color:red; text-align:center;">⚠️ Lỗi: Không tìm thấy dữ liệu! Hãy kiểm tra file data.js</p>';
        return;
    }

    for (const [key, subject] of Object.entries(subjectsData)) {
        const card = document.createElement('div');
        card.classList.add('subject-card');
        card.innerHTML = `
            <span class="subject-icon">${subject.icon}</span>
            <span class="subject-name">${subject.name}</span>
            <span class="subject-desc">${subject.description}</span>
            <span class="subject-desc" style="color:var(--primary-color); font-weight:bold; margin-top:5px; display:block">
                ${subject.questions.length} câu hỏi
            </span>
        `;
        card.addEventListener('click', () => loadSubject(key));
        subjectList.appendChild(card);
    }
}

function loadSubject(subjectKey) {
    const subject = subjectsData[subjectKey];
    if (!subject) return;
    currentQuizData = subject.questions;
    currentSubjectName.innerText = subject.name;
    homeScreen.classList.add('hidden');
    quizApp.classList.remove('hidden');
    startQuiz();
}

function goHome() {
    quizApp.classList.add('hidden');
    document.getElementById('result-modal').classList.add('hidden');
    homeScreen.classList.remove('hidden');
}

document.getElementById('back-home-btn').addEventListener('click', () => {
    if(confirm("Về trang chủ?")) goHome();
});

// --- LOGIC TRẮC NGHIỆM ---
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-modal').classList.add('hidden');
    shuffledQuestions = [...currentQuizData];
    shuffleArray(shuffledQuestions);
    loadQuestion();
}

window.restartQuiz = startQuiz;
window.goHome = goHome;

function loadQuestion() {
    optionsContainer.innerHTML = '';
    nextBtn.disabled = true;
    explainBtn.classList.add('hidden');
    aiBox.classList.add('hidden');
    aiContent.innerText = "";
    
    const currentData = shuffledQuestions[currentQuestionIndex];
    const categoryHtml = currentData.category ? `<span style="font-size:0.8rem; color:#6366f1; font-weight:bold; display:block; margin-bottom:5px; text-transform:uppercase">${currentData.category}</span>` : '';
    questionText.innerHTML = categoryHtml + currentData.question;
    
    document.getElementById('question-number').innerText = `Câu ${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
    document.getElementById('score-display').innerText = `Điểm: ${score}`;
    document.getElementById('progress-bar').style.width = `${((currentQuestionIndex)/shuffledQuestions.length)*100}%`;

    for (const [key, value] of Object.entries(currentData.options)) {
        const div = document.createElement('div');
        div.classList.add('option-item');
        div.innerText = `${key}. ${value}`;
        div.addEventListener('click', () => checkAnswer(key, div, currentData.answer));
        optionsContainer.appendChild(div);
    }
}

function checkAnswer(selectedKey, el, correctKey) {
    const all = optionsContainer.children;
    for (let op of all) {
        op.classList.add('disabled');
        if (op.innerText.startsWith(correctKey + ".")) op.classList.add('correct');
    }
    if (selectedKey === correctKey) {
        score++;
        document.getElementById('score-display').innerText = `Điểm: ${score}`;
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 }, colors: ['#10B981'] });
    } else {
        el.classList.add('wrong');
        el.classList.add('shake');
    }
    nextBtn.disabled = false;
    explainBtn.classList.remove('hidden');
}

// --- LOGIC GỌI AI (GROQ API - LLAMA 3.3) ---
async function callGroqExplanation() {
    // Kiểm tra lại key lần nữa
    if (!AI_API_KEY) {
        alert("Bạn chưa nhập API Key. Hãy tải lại trang (F5) để nhập.");
        return;
    }

    const q = shuffledQuestions[currentQuestionIndex];
    explainBtn.disabled = true; 
    explainBtn.innerText = "Đang kết nối...";
    aiBox.classList.remove('hidden');
    aiContent.innerText = "AI đang suy nghĩ...";

    const messages = [
        {
            role: "system",
            content: "Bạn là một gia sư vui tính. Hãy giải thích ngắn gọn (dưới 50 từ) tại sao đáp án đúng lại đúng bằng Tiếng Việt."
        },
        {
            role: "user",
            content: `Câu hỏi: "${q.question}".\nCác lựa chọn: A.${q.options.A}, B.${q.options.B}, C.${q.options.C}, D.${q.options.D}.\nĐáp án đúng là: ${q.answer}. Hãy giải thích tại sao.`
        }
    ];

    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${AI_API_KEY}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile", 
                messages: messages,
                temperature: 0.7,
                max_tokens: 200
            })
        });

        if (!res.ok) {
            const errData = await res.json();
            // Nếu lỗi 401 (Sai key), xóa key cũ đi để người dùng nhập lại
            if (res.status === 401) {
                localStorage.removeItem("user_groq_key");
                alert("Key của bạn bị sai hoặc hết hạn. Vui lòng F5 để nhập Key mới.");
            }
            throw new Error(errData.error?.message || `Lỗi ${res.status}`);
        }

        const data = await res.json();
        const text = data.choices[0]?.message?.content || "AI không trả lời được.";
        
        aiContent.innerHTML = "";
        let i = 0;
        function type() { if(i<text.length){ aiContent.innerHTML += text.charAt(i); i++; setTimeout(type, 10); } }
        type();

    } catch (e) {
        console.error(e);
        aiContent.innerText = "⚠️ Lỗi: " + e.message;
        alert("Lỗi kết nối Groq: " + e.message);
    } finally {
        explainBtn.disabled = false;
        explainBtn.innerText = "✨ Giải thích lại";
    }
}

explainBtn.addEventListener('click', callGroqExplanation);

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) loadQuestion();
    else showResult();
});

document.getElementById('shuffle-btn').addEventListener('click', () => {
    if(confirm("Trộn lại đề?")) startQuiz();
});

function showResult() {
    document.getElementById('result-modal').classList.remove('hidden');
    document.getElementById('final-score').innerText = `${score}/${shuffledQuestions.length}`;
    const end = Date.now() + 3000;
    (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}

initHome();