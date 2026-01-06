/**
 * SCRIPT.JS - CÓ HỘP THOẠI THOÁT ĐẸP (NO ALERT)
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
const QUESTIONS_PER_PAGE = 20;
let currentQuizData = [];
let activeQuestions = [];
let shuffledQuestions = [];
let userAnswers = {};
let currentPage = 0;
let isExamMode = false;
let isReviewMode = false;
let timerInterval;

// --- DOM ELEMENTS ---
const homeScreen = document.getElementById('home-screen');
const quizApp = document.getElementById('quiz-app');
const modeSelection = document.getElementById('mode-selection');
const chapterSelection = document.getElementById('chapter-selection');
const chapterList = document.getElementById('chapter-list');
const quizArea = document.getElementById('quiz-area');
const sidebarArea = document.getElementById('sidebar-area');

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
const exitModal = document.getElementById('exit-modal');

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
    currentQuizData = subject.questions;
    currentSubjectName.innerText = subject.name;
    homeScreen.classList.add('hidden');
    quizApp.classList.remove('hidden');
    showModeSelection();
}

function showModeSelection() {
    modeSelection.classList.remove('hidden');
    chapterSelection.classList.add('hidden');
    quizArea.classList.add('hidden');
    sidebarArea.classList.add('hidden');
}

function selectMode(mode) {
    modeSelection.classList.add('hidden');
    if (mode === 'exam') startExamMode();
    else showChapterSelection();
}

function showChapterSelection() {
    isExamMode = false;
    chapterSelection.classList.remove('hidden');
    quizArea.classList.add('hidden');
    sidebarArea.classList.remove('hidden'); 
    timerBox.classList.add('hidden');
    submitNowBtn.classList.add('hidden');

    const categories = [...new Set(currentQuizData.map(q => q.category).filter(Boolean))];
    chapterList.innerHTML = '';
    createChapterButton("🔥 Luyện tập tổng hợp (Tất cả)", currentQuizData.length, () => startPracticeMode(currentQuizData));
    categories.forEach(cat => {
        const count = currentQuizData.filter(q => q.category === cat).length;
        createChapterButton(cat, count, () => startPracticeMode(currentQuizData.filter(q => q.category === cat)));
    });
}

function createChapterButton(title, count, onClick) {
    const btn = document.createElement('div');
    btn.classList.add('chapter-card');
    btn.innerHTML = `<span class="chapter-title">${title}</span><span class="chapter-count">${count} câu</span>`;
    btn.addEventListener('click', onClick);
    chapterList.appendChild(btn);
}

function backToModeSelect() {
    chapterSelection.classList.add('hidden');
    showModeSelection();
}

// --- LOGIC THOÁT VỀ HOME (MỚI) ---
function showExitModal() {
    exitModal.classList.remove('hidden');
}
function closeExitModal() {
    exitModal.classList.add('hidden');
}
function confirmExit() {
    closeExitModal();
    goHome();
}
// Thay thế sự kiện cũ bằng sự kiện hiện Modal
document.getElementById('back-home-btn').removeEventListener('click', () => {}); // Reset
document.getElementById('back-home-btn').onclick = showExitModal; 

function goHome() {
    clearInterval(timerInterval);
    quizApp.classList.add('hidden');
    document.getElementById('result-modal').classList.add('hidden');
    homeScreen.classList.remove('hidden');
}

// --- CÁC CHẾ ĐỘ ---
function startPracticeMode(data) {
    isExamMode = false; isReviewMode = false; activeQuestions = [...data];
    chapterSelection.classList.add('hidden');
    quizArea.classList.remove('hidden');
    sidebarArea.classList.remove('hidden');
    currentSubjectName.innerText = currentSubjectName.innerText.replace(" (THI THỬ)", "");
    startQuizLogic(activeQuestions);
}

function startExamMode() {
    isExamMode = true; isReviewMode = false;
    let fullList = [...currentQuizData];
    shuffleArray(fullList);
    activeQuestions = fullList.slice(0, Math.min(100, fullList.length));
    quizArea.classList.remove('hidden');
    sidebarArea.classList.remove('hidden');
    timerBox.classList.remove('hidden');
    submitNowBtn.classList.remove('hidden');
    if(!currentSubjectName.innerText.includes("(THI THỬ)")) currentSubjectName.innerText += " (THI THỬ)";
    startQuizLogic(activeQuestions);
    startTimer(50 * 60);
}

function startQuizLogic(data) {
    userAnswers = {}; currentPage = 0; shuffledQuestions = data; 
    document.getElementById('result-modal').classList.add('hidden');
    renderPalette(); loadPage();
}

function restartQuiz() {
    isExamMode ? startExamMode() : startQuizLogic(activeQuestions);
}

// --- TIMER & RENDER ---
function startTimer(duration) {
    let timer = duration, m, s;
    clearInterval(timerInterval);
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

function loadPage() {
    quizListContainer.innerHTML = ''; window.scrollTo(0, 0); 
    const startIndex = currentPage * QUESTIONS_PER_PAGE;
    const endIndex = Math.min(startIndex + QUESTIONS_PER_PAGE, shuffledQuestions.length);
    const totalPages = Math.ceil(shuffledQuestions.length / QUESTIONS_PER_PAGE);

    pageIndicator.innerText = `Trang ${currentPage + 1}/${totalPages}`;
    scoreDisplay.innerText = isExamMode ? "Thi thử" : (isReviewMode ? "Xem lại" : "Luyện tập");

    for (let i = startIndex; i < endIndex; i++) {
        const q = shuffledQuestions[i];
        const card = document.createElement('div'); card.classList.add('question-card');
        const categoryHtml = q.category ? `<span class="q-tag">${q.category}</span>` : '';
        card.innerHTML = `<div class="question-title"><span style="color:#4F46E5">Câu ${i + 1}:</span> ${categoryHtml} ${q.question}</div>`;
        const optsDiv = document.createElement('div');
        for (const [key, value] of Object.entries(q.options)) {
            const optDiv = document.createElement('div'); optDiv.classList.add('option-item'); optDiv.innerText = `${key}. ${value}`;
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
            const aiBtn = document.createElement('button'); aiBtn.classList.add('btn-ai-small'); aiBtn.innerText = "✨ Giải thích";
            aiBtn.onclick = () => callGroqExplanation(i); card.appendChild(aiBtn);
        }
        quizListContainer.appendChild(card);
    }
    prevPageBtn.classList.toggle('hidden', currentPage === 0);
    if (currentPage === totalPages - 1) {
        if (isExamMode && !isReviewMode) { nextPageBtn.innerText = "NỘP BÀI 📝"; nextPageBtn.style.background = "#DC2626"; }
        else { nextPageBtn.classList.add('hidden'); }
    } else {
        nextPageBtn.innerText = "Trang sau ➡️"; nextPageBtn.style.background = "#4F46E5"; nextPageBtn.classList.remove('hidden');
    }
    updatePalette();
}

function handleOptionClick(index, selectedKey, el, questionData, container) {
    if (isReviewMode) return;
    Array.from(container.children).forEach(op => {
        op.classList.remove('selected', 'correct', 'wrong');
        if(!isExamMode) op.classList.add('disabled');
    });
    userAnswers[index] = selectedKey;
    if (isExamMode) el.classList.add('selected');
    else {
        if (selectedKey === questionData.answer) el.classList.add('correct');
        else { el.classList.add('wrong'); Array.from(container.children).find(op => op.innerText.startsWith(questionData.answer)).classList.add('correct'); }
    }
    updatePalette();
}

nextPageBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(shuffledQuestions.length / QUESTIONS_PER_PAGE);
    if (currentPage < totalPages - 1) { currentPage++; loadPage(); }
    else if (isExamMode && !isReviewMode) { if(confirm("Nộp bài?")) submitExam(); }
});
prevPageBtn.addEventListener('click', () => { if (currentPage > 0) { currentPage--; loadPage(); } });

function renderPalette() {
    questionPalette.innerHTML = '';
    shuffledQuestions.forEach((_, index) => {
        const item = document.createElement('div'); item.classList.add('palette-item'); item.innerText = index + 1; item.id = `palette-${index}`;
        item.addEventListener('click', () => { currentPage = Math.floor(index / QUESTIONS_PER_PAGE); loadPage(); });
        questionPalette.appendChild(item);
    });
}
function updatePalette() {
    const startIndex = currentPage * QUESTIONS_PER_PAGE; const endIndex = startIndex + QUESTIONS_PER_PAGE;
    shuffledQuestions.forEach((_, index) => {
        const item = document.getElementById(`palette-${index}`); if (!item) return;
        item.className = 'palette-item'; 
        if (userAnswers[index] !== undefined) item.classList.add('done');
        if (index >= startIndex && index < endIndex) item.classList.add('in-page');
        if (isReviewMode) {
            if (userAnswers[index] === shuffledQuestions[index].answer) { item.style.backgroundColor = "#D1FAE5"; item.style.borderColor = "#10B981"; }
            else { item.style.backgroundColor = "#FEE2E2"; item.style.borderColor = "#EF4444"; }
        } else { item.style.backgroundColor = ""; item.style.borderColor = ""; }
    });
}

submitNowBtn.addEventListener('click', () => {
    let un = shuffledQuestions.length - Object.keys(userAnswers).length;
    if (confirm(un > 0 ? `Còn ${un} câu. Nộp luôn?` : "Nộp bài?")) submitExam();
});

function submitExam() {
    clearInterval(timerInterval); isReviewMode = true; let score = 0;
    shuffledQuestions.forEach((q, index) => { if (userAnswers[index] === q.answer) score++; });
    document.getElementById('result-modal').classList.remove('hidden');
    const finalScoreEl = document.getElementById('final-score');
    if (isExamMode) {
        let scaleScore = Math.round((score / shuffledQuestions.length) * 10 * 10) / 10;
        document.getElementById('final-score-text').innerText = "Điểm hệ 10"; finalScoreEl.innerText = scaleScore;
        document.getElementById('exam-feedback').innerText = `Đúng ${score}/${shuffledQuestions.length} câu.`;
    } else {
        finalScoreEl.innerText = `${score}/${shuffledQuestions.length}`; document.getElementById('final-score-text').innerText = "Số câu đúng";
    }
}

async function callGroqExplanation(index) {
    if (!AI_API_KEY) { alert("Thiếu Key"); return; }
    const q = shuffledQuestions[index]; aiModal.classList.remove('hidden'); aiModalContent.innerText = "AI đang phân tích...";
    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${AI_API_KEY}` },
            body: JSON.stringify({ model: "llama-3.3-70b-versatile", messages: [{role:"user", content:`Giải thích ngắn gọn tại sao đáp án đúng là ${q.answer} cho câu hỏi: ${q.question}`}] })
        });
        const data = await res.json(); aiModalContent.innerText = data.choices?.[0]?.message?.content || "Lỗi AI.";
    } catch (e) { aiModalContent.innerText = "Lỗi: " + e.message; }
}

// Global scope
window.selectMode = selectMode; window.backToModeSelect = backToModeSelect; window.restartQuiz = restartQuiz; window.goHome = goHome;
window.showExitModal = showExitModal; window.closeExitModal = closeExitModal; window.confirmExit = confirmExit;

initHome();