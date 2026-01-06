/**
 * SCRIPT.JS - ĐÃ SỬA LỖI HIỂN THỊ DANH SÁCH SỐ CÂU
 */

// --- CẤU HÌNH API ---
let AI_API_KEY = localStorage.getItem("user_groq_key");
if (!AI_API_KEY) {
    let inputKey = prompt("Nhập Groq API Key (gsk_...) để dùng tính năng AI:");
    if (inputKey && inputKey.trim() !== "") {
        AI_API_KEY = inputKey.trim();
        localStorage.setItem("user_groq_key", AI_API_KEY); 
    }
}

// --- BIẾN TOÀN CỤC ---
const QUESTIONS_PER_PAGE = 20; // Số câu mỗi trang
let currentQuizData = [];
let shuffledQuestions = [];
let userAnswers = {}; // { index: "A" }
let currentPage = 0; // Trang hiện tại
let isExamMode = false;
let isReviewMode = false;
let timerInterval;

// --- DOM ELEMENTS ---
const homeScreen = document.getElementById('home-screen');
const quizApp = document.getElementById('quiz-app');
const subjectList = document.getElementById('subject-list');
const currentSubjectName = document.getElementById('current-subject-name');
const quizListContainer = document.getElementById('quiz-list');
const nextPageBtn = document.getElementById('next-page-btn');
const prevPageBtn = document.getElementById('prev-page-btn');
const timerBox = document.getElementById('timer-box');
const timerText = document.getElementById('timer-text');
const submitNowBtn = document.getElementById('submit-now-btn');
const questionPalette = document.getElementById('question-palette');
const pageIndicator = document.getElementById('page-indicator');
const scoreDisplay = document.getElementById('score-display');
const aiModal = document.getElementById('ai-modal');
const aiModalContent = document.getElementById('ai-modal-content');

// --- QUẢN LÝ MÔN HỌC ---
function initHome() {
    subjectList.innerHTML = '';
    if (typeof subjectsData === 'undefined') return;
    for (const [key, subject] of Object.entries(subjectsData)) {
        const card = document.createElement('div');
        card.classList.add('subject-card');
        card.innerHTML = `
            <span class="subject-icon">${subject.icon}</span>
            <span class="subject-name">${subject.name}</span>
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
    isExamMode = false; isReviewMode = false;
    currentQuizData = subject.questions;
    currentSubjectName.innerText = subject.name;

    if (subjectKey === "TDHT") {
        let userChoice = confirm("🔥 CHẾ ĐỘ THI THỬ 100 CÂU 🔥\n\nOK: Vào thi thử (Có đồng hồ, nộp bài mới biết điểm)\nCancel: Luyện tập thường");
        if (userChoice) {
            isExamMode = true;
            currentSubjectName.innerText = subject.name + " (THI THỬ)";
        }
    }
    homeScreen.classList.add('hidden');
    quizApp.classList.remove('hidden');
    startQuiz();
}

function goHome() {
    clearInterval(timerInterval);
    quizApp.classList.add('hidden');
    document.getElementById('result-modal').classList.add('hidden');
    homeScreen.classList.remove('hidden');
}

document.getElementById('back-home-btn').addEventListener('click', () => { if(confirm("Thoát?")) goHome(); });

// --- LOGIC TRẮC NGHIỆM ---
function startQuiz() {
    userAnswers = {}; isReviewMode = false; currentPage = 0;
    document.getElementById('result-modal').classList.add('hidden');
    clearInterval(timerInterval);
    
    let fullList = [...currentQuizData];
    shuffleArray(fullList);

    if (isExamMode) {
        let examSize = Math.min(100, fullList.length);
        shuffledQuestions = fullList.slice(0, examSize);
        startTimer(50 * 60);
        timerBox.classList.remove('hidden');
        submitNowBtn.classList.remove('hidden');
    } else {
        shuffledQuestions = fullList;
        timerBox.classList.add('hidden');
        submitNowBtn.classList.add('hidden');
    }
    
    // 👇👇👇 QUAN TRỌNG: PHẢI VẼ BẢNG SỐ TRƯỚC KHI LOAD TRANG 👇👇👇
    renderPalette(); 
    loadPage(); 
}

function startTimer(duration) {
    let timer = duration, m, s;
    timerInterval = setInterval(() => {
        m = parseInt(timer / 60, 10); s = parseInt(timer % 60, 10);
        m = m < 10 ? "0" + m : m; s = s < 10 ? "0" + s : s;
        timerText.textContent = m + ":" + s;
        if (--timer < 0) { clearInterval(timerInterval); alert("Hết giờ!"); submitExam(); }
    }, 1000);
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// --- HÀM LOAD TRANG ---
function loadPage() {
    quizListContainer.innerHTML = ''; 
    window.scrollTo(0, 0); 

    const startIndex = currentPage * QUESTIONS_PER_PAGE;
    const endIndex = Math.min(startIndex + QUESTIONS_PER_PAGE, shuffledQuestions.length);
    const totalPages = Math.ceil(shuffledQuestions.length / QUESTIONS_PER_PAGE);

    pageIndicator.innerText = `Trang ${currentPage + 1}/${totalPages}`;
    scoreDisplay.innerText = isExamMode ? "Thi thử" : (isReviewMode ? "Xem lại" : "Luyện tập");

    for (let i = startIndex; i < endIndex; i++) {
        const q = shuffledQuestions[i];
        const card = document.createElement('div');
        card.classList.add('question-card');
        
        const qTitle = document.createElement('div');
        qTitle.classList.add('question-title');
        const categoryHtml = q.category ? `<span class="q-tag">${q.category}</span>` : '';
        qTitle.innerHTML = `<span style="color:#4F46E5">Câu ${i + 1}:</span> ${categoryHtml} ${q.question}`;
        card.appendChild(qTitle);

        const optsDiv = document.createElement('div');
        for (const [key, value] of Object.entries(q.options)) {
            const optDiv = document.createElement('div');
            optDiv.classList.add('option-item');
            optDiv.innerText = `${key}. ${value}`;
            
            if (isReviewMode) {
                optDiv.classList.add('disabled');
                if (key === q.answer) optDiv.classList.add('correct');
                if (userAnswers[i] === key && key !== q.answer) optDiv.classList.add('wrong');
            } else if (isExamMode || userAnswers[i]) {
                if (userAnswers[i] === key) optDiv.classList.add('selected');
            }

            optDiv.addEventListener('click', () => handleOptionClick(i, key, optDiv, q, optsDiv));
            optsDiv.appendChild(optDiv);
        }
        card.appendChild(optsDiv);

        if (!isExamMode || isReviewMode) {
            const aiBtn = document.createElement('button');
            aiBtn.classList.add('btn-ai-small');
            aiBtn.innerText = "✨ Giải thích";
            aiBtn.onclick = () => callGroqExplanation(i);
            card.appendChild(aiBtn);
        }

        quizListContainer.appendChild(card);
    }

    prevPageBtn.classList.toggle('hidden', currentPage === 0);
    
    if (currentPage === totalPages - 1) {
        if (isExamMode && !isReviewMode) {
            nextPageBtn.innerText = "NỘP BÀI 📝";
            nextPageBtn.style.background = "#DC2626";
        } else {
            nextPageBtn.classList.add('hidden');
        }
    } else {
        nextPageBtn.innerText = "Trang sau ➡️";
        nextPageBtn.style.background = "#4F46E5";
        nextPageBtn.classList.remove('hidden');
    }

    updatePalette(); // Cập nhật màu sắc ô số
}

function handleOptionClick(index, selectedKey, el, questionData, container) {
    if (isReviewMode) return;

    Array.from(container.children).forEach(op => {
        op.classList.remove('selected', 'correct', 'wrong');
        if(!isExamMode) op.classList.add('disabled');
    });

    userAnswers[index] = selectedKey;

    if (isExamMode) {
        el.classList.add('selected');
    } else {
        if (selectedKey === questionData.answer) {
            el.classList.add('correct');
        } else {
            el.classList.add('wrong');
            Array.from(container.children).find(op => op.innerText.startsWith(questionData.answer)).classList.add('correct');
        }
    }
    updatePalette();
}

nextPageBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(shuffledQuestions.length / QUESTIONS_PER_PAGE);
    if (currentPage < totalPages - 1) {
        currentPage++;
        loadPage();
    } else if (isExamMode && !isReviewMode) {
        if(confirm("Bạn có chắc chắn muốn nộp bài?")) submitExam();
    }
});

prevPageBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        loadPage();
    }
});

// --- SIDEBAR PALETTE ---
function renderPalette() {
    questionPalette.innerHTML = '';
    shuffledQuestions.forEach((_, index) => {
        const item = document.createElement('div');
        item.classList.add('palette-item');
        item.innerText = index + 1;
        item.id = `palette-${index}`;
        item.addEventListener('click', () => {
            currentPage = Math.floor(index / QUESTIONS_PER_PAGE);
            loadPage();
        });
        questionPalette.appendChild(item);
    });
}

function updatePalette() {
    const startIndex = currentPage * QUESTIONS_PER_PAGE;
    const endIndex = startIndex + QUESTIONS_PER_PAGE;

    shuffledQuestions.forEach((_, index) => {
        const item = document.getElementById(`palette-${index}`);
        if (!item) return; // Bảo vệ nếu chưa vẽ xong

        item.className = 'palette-item'; 
        if (userAnswers[index] !== undefined) item.classList.add('done');
        if (index >= startIndex && index < endIndex) item.classList.add('in-page');

        if (isReviewMode) {
            if (userAnswers[index] === shuffledQuestions[index].answer) {
                item.style.backgroundColor = "#D1FAE5"; item.style.borderColor = "#10B981";
            } else {
                item.style.backgroundColor = "#FEE2E2"; item.style.borderColor = "#EF4444";
            }
        } else {
             item.style.backgroundColor = ""; item.style.borderColor = "";
        }
    });
}

submitNowBtn.addEventListener('click', () => {
    let answeredCount = Object.keys(userAnswers).length;
    let unAnswered = shuffledQuestions.length - answeredCount;
    let msg = unAnswered > 0 ? `Còn ${unAnswered} câu chưa làm. Nộp luôn?` : "Nộp bài?";
    if (confirm(msg)) submitExam();
});

function submitExam() {
    clearInterval(timerInterval);
    isReviewMode = true;
    let score = 0;
    shuffledQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.answer) score++;
    });

    document.getElementById('result-modal').classList.remove('hidden');
    const finalScoreEl = document.getElementById('final-score');
    const feedbackEl = document.getElementById('exam-feedback');
    const modalButtons = document.querySelector('.modal-buttons');
    const oldReviewBtn = document.getElementById('review-exam-btn');
    if(oldReviewBtn) oldReviewBtn.remove();

    if (isExamMode) {
        let scaleScore = Math.round((score / shuffledQuestions.length) * 10 * 10) / 10;
        document.getElementById('final-score-text').innerText = "Điểm hệ 10";
        finalScoreEl.innerText = scaleScore;
        feedbackEl.innerText = `Đúng ${score}/${shuffledQuestions.length} câu.`;

        const reviewBtn = document.createElement('button');
        reviewBtn.id = 'review-exam-btn';
        reviewBtn.className = 'btn-secondary';
        reviewBtn.innerText = '🔍 Xem lại bài làm';
        reviewBtn.onclick = () => {
            document.getElementById('result-modal').classList.add('hidden');
            currentPage = 0; loadPage();
        };
        modalButtons.insertBefore(reviewBtn, modalButtons.firstChild);
    } else {
        finalScoreEl.innerText = `${score}/${shuffledQuestions.length}`;
    }
}

async function callGroqExplanation(index) {
    if (!AI_API_KEY) { alert("Thiếu Key"); return; }
    const q = shuffledQuestions[index];
    aiModal.classList.remove('hidden');
    aiModalContent.innerText = "AI đang phân tích...";

    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${AI_API_KEY}` },
            body: JSON.stringify({ 
                model: "llama-3.3-70b-versatile", 
                messages: [{role:"user", content:`Giải thích ngắn gọn tại sao đáp án đúng là ${q.answer} cho câu hỏi: ${q.question}`}] 
            })
        });
        const data = await res.json();
        aiModalContent.innerText = data.choices?.[0]?.message?.content || "Lỗi AI.";
    } catch (e) { aiModalContent.innerText = "Lỗi: " + e.message; }
}

window.restartQuiz = startQuiz;
window.goHome = goHome;
initHome();