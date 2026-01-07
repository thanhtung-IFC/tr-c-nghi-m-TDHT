/**
 * SCRIPT.JS - PHIÊN BẢN TỐI ƯU HÓA (CLEAN VERSION)
 */

// --- CẤU HÌNH API KEY ---
let AI_API_KEY = localStorage.getItem("user_groq_key");
if (!AI_API_KEY) {
    let inputKey = prompt("Nhập Groq API Key (gsk_...) để dùng tính năng AI:");
    if (inputKey && inputKey.trim() !== "") {
        AI_API_KEY = inputKey.trim();
        localStorage.setItem("user_groq_key", AI_API_KEY); 
    }
}

// --- BIẾN TOÀN CỤC ---
const QUESTIONS_PER_PAGE = 20;
let currentQuizData = [];   // Data gốc của môn
let activeQuestions = [];   // Data đang sử dụng (sau khi lọc/trộn)
let shuffledQuestions = []; // Data hiển thị hiện tại
let userAnswers = {};
let currentPage = 0;
let isExamMode = false;
let isReviewMode = false;
let timerInterval;

// --- DOM ELEMENTS (Lấy 1 lần dùng mãi mãi) ---
const els = {
    home: document.getElementById('home-screen'),
    quizApp: document.getElementById('quiz-app'),
    modeSelect: document.getElementById('mode-selection'),
    chapterSelect: document.getElementById('chapter-selection'),
    chapterList: document.getElementById('chapter-list'),
    quizArea: document.getElementById('quiz-area'),
    sidebar: document.getElementById('sidebar-area'),
    subjectList: document.getElementById('subject-list'),
    currentSubjectName: document.getElementById('current-subject-name'),
    quizList: document.getElementById('quiz-list'),
    nextBtn: document.getElementById('next-page-btn'),
    prevBtn: document.getElementById('prev-page-btn'),
    timerBox: document.getElementById('timer-box'),
    timerText: document.getElementById('timer-text'),
    submitBtn: document.getElementById('submit-now-btn'),
    palette: document.getElementById('question-palette'),
    pageIndicator: document.getElementById('page-indicator'),
    scoreDisplay: document.getElementById('score-display'),
    aiModal: document.getElementById('ai-modal'),
    aiContent: document.getElementById('ai-modal-content'),
    exitModal: document.getElementById('exit-modal'),
    resultModal: document.getElementById('result-modal'),
    shuffleBtn: document.getElementById('shuffle-btn')
};

// --- 1. KHỞI TẠO TRANG CHỦ ---
function initHome() {
    els.subjectList.innerHTML = '';
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
        els.subjectList.appendChild(card);
    }
}

// --- 2. LOAD MÔN HỌC & HIỆN CHỌN CHẾ ĐỘ ---
function loadSubject(key) {
    const subject = subjectsData[key];
    if (!subject) return;
    currentQuizData = subject.questions;
    els.currentSubjectName.innerText = subject.name;
    
    // Chuyển màn hình
    els.home.classList.add('hidden');
    els.quizApp.classList.remove('hidden');
    showModeSelection();
}

function showModeSelection() {
    els.modeSelect.classList.remove('hidden');
    els.chapterSelect.classList.add('hidden');
    els.quizArea.classList.add('hidden');
    els.sidebar.classList.add('hidden');
    els.shuffleBtn.classList.add('hidden');
}

// --- 3. XỬ LÝ CHỌN CHẾ ĐỘ ---
window.selectMode = (mode) => {
    els.modeSelect.classList.add('hidden');
    if (mode === 'exam') startExamMode();
    else showChapterSelection();
};

function showChapterSelection() {
    isExamMode = false;
    els.chapterSelect.classList.remove('hidden');
    els.sidebar.classList.remove('hidden'); // Hiện sidebar để xem palette
    els.timerBox.classList.add('hidden');
    els.submitBtn.classList.add('hidden');
    els.shuffleBtn.classList.add('hidden');

    // Lọc danh sách chương
    const categories = [...new Set(currentQuizData.map(q => q.category).filter(Boolean))];
    els.chapterList.innerHTML = '';

    // Nút "Tất cả"
    createChapterBtn("🔥 Luyện tập tổng hợp (Tất cả)", currentQuizData.length, () => startPracticeMode(currentQuizData));

    // Nút từng chương
    categories.forEach(cat => {
        const filtered = currentQuizData.filter(q => q.category === cat);
        createChapterBtn(cat, filtered.length, () => startPracticeMode(filtered));
    });
}

function createChapterBtn(title, count, onClick) {
    const btn = document.createElement('div');
    btn.classList.add('chapter-card');
    btn.innerHTML = `<span class="chapter-title">${title}</span><span class="chapter-count">${count} câu</span>`;
    btn.addEventListener('click', onClick);
    els.chapterList.appendChild(btn);
}

window.backToModeSelect = () => {
    els.chapterSelect.classList.add('hidden');
    showModeSelection();
};

// --- 4. BẮT ĐẦU QUIZ (CHUNG) ---
function startQuizLogic(data) {
    userAnswers = {};
    currentPage = 0;
    shuffledQuestions = data;
    els.resultModal.classList.add('hidden');
    renderPalette();
    loadPage();
}

function startPracticeMode(data) {
    isExamMode = false; isReviewMode = false; activeQuestions = [...data];
    els.chapterSelect.classList.add('hidden');
    els.quizArea.classList.remove('hidden');
    els.sidebar.classList.remove('hidden');
    els.shuffleBtn.classList.remove('hidden'); // Hiện nút trộn
    els.currentSubjectName.innerText = els.currentSubjectName.innerText.replace(" (THI THỬ)", "");
    startQuizLogic(activeQuestions);
}

function startExamMode() {
    isExamMode = true; isReviewMode = false;
    // Trộn và lấy 100 câu
    let fullList = [...currentQuizData];
    shuffleArray(fullList);
    activeQuestions = fullList.slice(0, Math.min(100, fullList.length));
    
    els.quizArea.classList.remove('hidden');
    els.sidebar.classList.remove('hidden');
    els.timerBox.classList.remove('hidden');
    els.submitBtn.classList.remove('hidden');
    els.shuffleBtn.classList.add('hidden'); // Ẩn nút trộn khi thi
    
    if(!els.currentSubjectName.innerText.includes("(THI THỬ)")) 
        els.currentSubjectName.innerText += " (THI THỬ)";
        
    startQuizLogic(activeQuestions);
    startTimer(50 * 60);
}

// --- 5. RENDER TRANG & CÂU HỎI ---
function loadPage() {
    els.quizList.innerHTML = '';
    window.scrollTo(0, 0);

    const startIndex = currentPage * QUESTIONS_PER_PAGE;
    const endIndex = Math.min(startIndex + QUESTIONS_PER_PAGE, shuffledQuestions.length);
    const totalPages = Math.ceil(shuffledQuestions.length / QUESTIONS_PER_PAGE);

    els.pageIndicator.innerText = `Trang ${currentPage + 1}/${totalPages}`;
    els.scoreDisplay.innerText = isExamMode ? "Thi thử" : (isReviewMode ? "Xem lại" : "Luyện tập");

    for (let i = startIndex; i < endIndex; i++) {
        const q = shuffledQuestions[i];
        const card = document.createElement('div'); card.classList.add('question-card');
        const categoryHtml = q.category ? `<span class="q-tag">${q.category}</span>` : '';
        card.innerHTML = `<div class="question-title"><span style="color:#4F46E5">Câu ${i + 1}:</span> ${categoryHtml} ${q.question}</div>`;
        
        const optsDiv = document.createElement('div');
        for (const [key, value] of Object.entries(q.options)) {
            const optDiv = document.createElement('div'); 
            optDiv.classList.add('option-item'); 
            optDiv.innerText = `${key}. ${value}`;
            
            // Logic Style (Tô màu)
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

        // Nút AI
        if (!isExamMode || isReviewMode) {
            const aiBtn = document.createElement('button'); 
            aiBtn.classList.add('btn-ai-small'); 
            aiBtn.innerText = "✨ Giải thích";
            aiBtn.onclick = () => callGroqExplanation(i); 
            card.appendChild(aiBtn);
        }
        els.quizList.appendChild(card);
    }

    // Nút phân trang
    els.prevBtn.classList.toggle('hidden', currentPage === 0);
    if (currentPage === totalPages - 1) {
        if (isExamMode && !isReviewMode) { 
            els.nextBtn.innerText = "NỘP BÀI 📝"; 
            els.nextBtn.style.background = "#DC2626"; 
        } else { 
            els.nextBtn.classList.add('hidden'); 
        }
    } else {
        els.nextBtn.innerText = "Trang sau ➡️"; 
        els.nextBtn.style.background = "#4F46E5"; 
        els.nextBtn.classList.remove('hidden');
    }
    updatePalette();
}

function handleOptionClick(index, selectedKey, el, qData, container) {
    if (isReviewMode) return;
    Array.from(container.children).forEach(op => {
        op.classList.remove('selected', 'correct', 'wrong');
        if(!isExamMode) op.classList.add('disabled');
    });
    
    userAnswers[index] = selectedKey;

    if (isExamMode) {
        el.classList.add('selected');
    } else {
        if (selectedKey === qData.answer) el.classList.add('correct');
        else {
            el.classList.add('wrong');
            Array.from(container.children).find(op => op.innerText.startsWith(qData.answer)).classList.add('correct');
        }
    }
    updatePalette();
}

// --- 6. CÁC NÚT ĐIỀU HƯỚNG & CHỨC NĂNG ---
els.nextBtn.onclick = () => {
    const totalPages = Math.ceil(shuffledQuestions.length / QUESTIONS_PER_PAGE);
    if (currentPage < totalPages - 1) {
        currentPage++; loadPage();
    } else if (isExamMode && !isReviewMode) {
        if(confirm("Xác nhận nộp bài?")) submitExam();
    }
};
els.prevBtn.onclick = () => { if (currentPage > 0) { currentPage--; loadPage(); } };

els.shuffleBtn.onclick = () => {
    if(confirm("Trộn lại câu hỏi và làm lại từ đầu?")) {
        let newShuffled = [...shuffledQuestions];
        shuffleArray(newShuffled);
        startQuizLogic(newShuffled);
    }
};

els.submitBtn.onclick = () => {
    let un = shuffledQuestions.length - Object.keys(userAnswers).length;
    if (confirm(un > 0 ? `Còn ${un} câu chưa làm. Nộp luôn?` : "Xác nhận nộp bài?")) submitExam();
};

function submitExam() {
    clearInterval(timerInterval);
    isReviewMode = true;
    let score = 0;
    shuffledQuestions.forEach((q, index) => { if (userAnswers[index] === q.answer) score++; });
    
    els.resultModal.classList.remove('hidden');
    const finalScoreEl = document.getElementById('final-score');
    const modalButtons = document.querySelector('.modal-buttons');
    const oldReviewBtn = document.getElementById('review-exam-btn');
    if(oldReviewBtn) oldReviewBtn.remove();

    if (isExamMode) {
        let scaleScore = Math.round((score / shuffledQuestions.length) * 10 * 10) / 10;
        document.getElementById('final-score-text').innerText = "Điểm hệ 10"; 
        finalScoreEl.innerText = scaleScore;
        document.getElementById('exam-feedback').innerText = `Đúng ${score}/${shuffledQuestions.length} câu.`;
        
        const reviewBtn = document.createElement('button');
        reviewBtn.id = 'review-exam-btn';
        reviewBtn.className = 'btn-secondary';
        reviewBtn.innerText = '🔍 Xem lại bài làm';
        reviewBtn.onclick = () => {
            els.resultModal.classList.add('hidden');
            currentPage = 0; loadPage();
        };
        modalButtons.insertBefore(reviewBtn, modalButtons.firstChild);
    } else {
        finalScoreEl.innerText = `${score}/${shuffledQuestions.length}`;
        document.getElementById('final-score-text').innerText = "Số câu đúng";
    }
}

// --- 7. HỆ THỐNG PALETTE ---
function renderPalette() {
    els.palette.innerHTML = '';
    shuffledQuestions.forEach((_, index) => {
        const item = document.createElement('div');
        item.classList.add('palette-item');
        item.innerText = index + 1;
        item.id = `palette-${index}`;
        item.addEventListener('click', () => {
            currentPage = Math.floor(index / QUESTIONS_PER_PAGE);
            loadPage();
        });
        els.palette.appendChild(item);
    });
}
function updatePalette() {
    const start = currentPage * QUESTIONS_PER_PAGE;
    const end = start + QUESTIONS_PER_PAGE;
    shuffledQuestions.forEach((_, index) => {
        const item = document.getElementById(`palette-${index}`);
        if (!item) return;
        item.className = 'palette-item';
        if (userAnswers[index] !== undefined) item.classList.add('done');
        if (index >= start && index < end) item.classList.add('in-page');
        if (isReviewMode) {
            if (userAnswers[index] === shuffledQuestions[index].answer) { item.style.backgroundColor = "#D1FAE5"; item.style.borderColor = "#10B981"; }
            else { item.style.backgroundColor = "#FEE2E2"; item.style.borderColor = "#EF4444"; }
        } else { item.style.backgroundColor = ""; item.style.borderColor = ""; }
    });
}

// --- 8. MODAL THOÁT ---
window.showExitModal = () => els.exitModal.classList.remove('hidden');
window.closeExitModal = () => els.exitModal.classList.add('hidden');
window.confirmExit = () => { closeExitModal(); goHome(); };
document.getElementById('back-home-btn').onclick = showExitModal;

window.goHome = () => {
    clearInterval(timerInterval);
    els.quizApp.classList.add('hidden');
    els.resultModal.classList.add('hidden');
    els.home.classList.remove('hidden');
};
window.restartQuiz = () => isExamMode ? startExamMode() : startQuizLogic(activeQuestions);

// --- 9. UTILS ---
function startTimer(duration) {
    let timer = duration, m, s;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        m = parseInt(timer / 60, 10); s = parseInt(timer % 60, 10);
        m = m < 10 ? "0" + m : m; s = s < 10 ? "0" + s : s;
        els.timerText.textContent = m + ":" + s;
        if (--timer < 0) { clearInterval(timerInterval); alert("Hết giờ!"); submitExam(); }
    }, 1000);
}
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
async function callGroqExplanation(index) {
    if (!AI_API_KEY) { alert("Thiếu Key"); return; }
    const q = shuffledQuestions[index]; els.aiModal.classList.remove('hidden'); els.aiContent.innerText = "AI đang phân tích...";
    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${AI_API_KEY}` },
            body: JSON.stringify({ model: "llama-3.3-70b-versatile", messages: [{role:"user", content:`Giải thích ngắn gọn tại sao đáp án đúng là ${q.answer} cho câu hỏi: ${q.question}`}] })
        });
        const data = await res.json(); els.aiContent.innerText = data.choices?.[0]?.message?.content || "Lỗi AI.";
    } catch (e) { els.aiContent.innerText = "Lỗi: " + e.message; }
}

initHome();