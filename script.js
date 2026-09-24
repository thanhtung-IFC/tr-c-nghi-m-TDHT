(() => {
    const QUESTIONS_PER_PAGE = 10;
    const els = {
        homeScreen: document.getElementById('home-screen'),
        quizApp: document.getElementById('quiz-app'),
        subjectList: document.getElementById('subject-list'),
        partSelection: document.getElementById('part-selection'),
        partList: document.getElementById('part-list'),
        modeSelection: document.getElementById('mode-selection'),
        chapterSelection: document.getElementById('chapter-selection'),
        chapterList: document.getElementById('chapter-list'),
        quizArea: document.getElementById('quiz-area'),
        quizList: document.getElementById('quiz-list'),
        nextBtn: document.getElementById('next-page-btn'),
        prevBtn: document.getElementById('prev-page-btn'),
        sidebarArea: document.getElementById('sidebar-area'),
        timerBox: document.getElementById('timer-box'),
        timerText: document.getElementById('timer-text'),
        submitBtn: document.getElementById('submit-now-btn'),
        shuffleBtn: document.getElementById('shuffle-btn'),
        currentSubjectName: document.getElementById('current-subject-name'),
        pageIndicator: document.getElementById('page-indicator'),
        scoreDisplay: document.getElementById('score-display'),
        palette: document.getElementById('question-palette'),
        resultModal: document.getElementById('result-modal'),
        finalScore: document.getElementById('final-score'),
        finalScoreText: document.getElementById('final-score-text'),
        examFeedback: document.getElementById('exam-feedback'),
        resultTitle: document.getElementById('result-title'),
        modalButtons: document.getElementById('modal-buttons'),
        exitModal: document.getElementById('exit-modal')
    };

    let currentSubjectCode = 'TDHT';
    let currentQuestions = [];
    let currentSubjectParts = [];
    let activeQuestions = [];
    let userAnswers = {};
    let currentPage = 0;
    let isExamMode = false;
    let isReviewMode = false;
    let timerInterval = null;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function getSubjectParts(subject) {
        if (Array.isArray(subject?.parts) && subject.parts.length > 0) {
            return subject.parts.map(part => ({
                ...part,
                questions: Array.isArray(part.questions) ? [...part.questions] : []
            }));
        }

        const allQuestions = Array.isArray(subject?.questions) ? [...subject.questions] : [];
        return [
            { id: 'part-1', name: 'Phần 1', questions: allQuestions },
            { id: 'part-2', name: 'Phần 2', questions: [] }
        ];
    }

    function renderSubjects() {
        els.subjectList.innerHTML = '';
        Object.entries(subjectsData).forEach(([code, subject]) => {
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'subject-card';
            const totalQuestions = Array.isArray(subject?.questions) ? subject.questions.length : 0;
            card.innerHTML = `
                <span class="subject-icon">${subject.icon}</span>
                <span class="subject-name">${subject.name || code}</span>
                <span class="subject-count">${totalQuestions} câu hỏi</span>
            `;
            card.addEventListener('click', () => openSubject(code));
            els.subjectList.appendChild(card);
        });
    }

    function openSubject(code) {
        currentSubjectCode = code;
        currentQuestions = [...(subjectsData[code]?.questions || [])];
        currentSubjectParts = [{
            id: 'hp-current',
            name: subjectsData[code]?.name || code,
            questions: currentQuestions
        }];
        els.currentSubjectName.textContent = subjectsData[code].name;
        els.homeScreen.classList.add('hidden');
        els.quizApp.classList.remove('hidden');
        showModeSelection();
    }

    function showPartSelection() {
        els.partList.innerHTML = '';
        els.partSelection.classList.remove('hidden');
        els.modeSelection.classList.add('hidden');
        els.chapterSelection.classList.add('hidden');
        els.quizArea.classList.add('hidden');
        els.sidebarArea.classList.add('hidden');
        els.shuffleBtn.classList.add('hidden');
        els.timerBox.classList.add('hidden');
        els.submitBtn.classList.add('hidden');
        els.resultModal.classList.add('hidden');
        clearInterval(timerInterval);

        currentSubjectParts.forEach((part, index) => {
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'chapter-card';
            const isLocked = !Array.isArray(part.questions) || part.questions.length === 0;

            if (isLocked) {
                card.classList.add('locked');
            }

            card.innerHTML = `
                <span class="chapter-title">${part.name}</span>
                <span class="chapter-count">${part.questions.length} câu</span>
            `;

            card.addEventListener('click', () => {
                if (isLocked) {
                    alert('Phần học này đang trống. Bạn có thể thêm dữ liệu mới cho phần 2 sau.');
                    return;
                }

                currentQuestions = [...part.questions];
                showModeSelection();
            });

            els.partList.appendChild(card);
        });
    }

    function showModeSelection() {
        els.partSelection.classList.add('hidden');
        els.modeSelection.classList.remove('hidden');
        els.chapterSelection.classList.add('hidden');
        els.quizArea.classList.add('hidden');
        els.sidebarArea.classList.add('hidden');
        els.shuffleBtn.classList.add('hidden');
        els.timerBox.classList.add('hidden');
        els.submitBtn.classList.add('hidden');
        els.resultModal.classList.add('hidden');
        clearInterval(timerInterval);
    }

    function showChapterSelection() {
        const categories = [...new Set(currentQuestions.map(q => q.category).filter(Boolean))];
        els.chapterList.innerHTML = '';

        const allBtn = document.createElement('div');
        allBtn.className = 'chapter-card';
        allBtn.innerHTML = `<span class="chapter-title">🔥 Tất cả</span><span class="chapter-count">${currentQuestions.length} câu</span>`;
        allBtn.addEventListener('click', () => startPracticeMode(currentQuestions));
        els.chapterList.appendChild(allBtn);

        categories.forEach(category => {
            const filtered = currentQuestions.filter(q => q.category === category);
            const card = document.createElement('div');
            card.className = 'chapter-card';
            card.innerHTML = `<span class="chapter-title">${category}</span><span class="chapter-count">${filtered.length} câu</span>`;
            card.addEventListener('click', () => startPracticeMode(filtered));
            els.chapterList.appendChild(card);
        });

        els.modeSelection.classList.add('hidden');
        els.chapterSelection.classList.remove('hidden');
        els.sidebarArea.classList.remove('hidden');
        els.timerBox.classList.add('hidden');
        els.submitBtn.classList.add('hidden');
        els.shuffleBtn.classList.add('hidden');
    }

    function startPracticeMode(data) {
        isExamMode = false;
        isReviewMode = false;
        els.chapterSelection.classList.add('hidden');
        els.quizArea.classList.remove('hidden');
        els.sidebarArea.classList.remove('hidden');
        els.shuffleBtn.classList.remove('hidden');
        startSession([...data]);
    }

    function startExamMode() {
        isExamMode = true;
        isReviewMode = false;
        const allQuestions = [...currentQuestions];
        shuffleArray(allQuestions);
        const examSet = allQuestions.slice(0, Math.min(100, allQuestions.length));
        els.modeSelection.classList.add('hidden');
        els.quizArea.classList.remove('hidden');
        els.sidebarArea.classList.remove('hidden');
        els.timerBox.classList.remove('hidden');
        els.submitBtn.classList.remove('hidden');
        els.shuffleBtn.classList.add('hidden');
        startTimer(50 * 60);
        startSession(examSet);
    }

    function startSession(data) {
        activeQuestions = data;
        userAnswers = {};
        currentPage = 0;
        els.resultModal.classList.add('hidden');
        renderPalette();
        renderPage();
    }

    function renderPage() {
        const startIndex = currentPage * QUESTIONS_PER_PAGE;
        const endIndex = Math.min(startIndex + QUESTIONS_PER_PAGE, activeQuestions.length);
        const totalPages = Math.max(1, Math.ceil(activeQuestions.length / QUESTIONS_PER_PAGE));

        els.quizList.innerHTML = '';
        els.pageIndicator.textContent = `Trang ${currentPage + 1}/${totalPages}`;
        els.scoreDisplay.textContent = isReviewMode ? 'Xem lại' : 'Luyện tập';

        for (let i = startIndex; i < endIndex; i++) {
            const q = activeQuestions[i];
            const card = document.createElement('div');
            card.className = 'question-card';
            card.innerHTML = `<div class="question-title"><span class="q-number">Câu ${i + 1}:</span> ${q.category ? `<span class="q-tag">${q.category}</span>` : ''} ${q.question}</div>`;

            const optionsWrap = document.createElement('div');
            Object.entries(q.options).forEach(([key, value]) => {
                const option = document.createElement('div');
                option.className = 'option-item';
                option.textContent = `${key}. ${value}`;

                if (isReviewMode) {
                    option.classList.add('disabled');
                    if (key === q.answer) option.classList.add('correct');
                    if (userAnswers[i] === key && key !== q.answer) option.classList.add('wrong');
                } else if (isExamMode) {
                    if (userAnswers[i] === key) option.classList.add('selected');
                } else {
                    if (userAnswers[i] === key) option.classList.add('selected');
                    if (userAnswers[i] !== undefined) {
                        if (key === q.answer) option.classList.add('correct');
                        else if (userAnswers[i] === key) option.classList.add('wrong');
                    }
                }

                option.addEventListener('click', () => handleOptionClick(i, key, option, q, optionsWrap));
                optionsWrap.appendChild(option);
            });

            card.appendChild(optionsWrap);
            els.quizList.appendChild(card);
        }

        els.prevBtn.classList.toggle('hidden', currentPage === 0);
        if (currentPage === totalPages - 1) {
            if (isExamMode && !isReviewMode) {
                els.nextBtn.textContent = 'NỘP BÀI 📝';
                els.nextBtn.classList.remove('hidden');
            } else {
                els.nextBtn.classList.add('hidden');
            }
        } else {
            els.nextBtn.textContent = 'Sau ➡️';
            els.nextBtn.classList.remove('hidden');
        }

        const progressPercent = ((currentPage + 1) / totalPages) * 100;
        document.getElementById('progress-bar').style.width = `${progressPercent}%`;
        updatePalette();
    }

    function handleOptionClick(index, selectedKey, optionEl, question, container) {
        if (isReviewMode) return;

        if (isExamMode) {
            userAnswers[index] = selectedKey;
            Array.from(container.children).forEach(item => item.classList.remove('selected'));
            optionEl.classList.add('selected');
            updatePalette();
            return;
        }

        if (userAnswers[index] !== undefined) return;
        userAnswers[index] = selectedKey;

        Array.from(container.children).forEach(item => {
            item.classList.add('disabled');
            item.classList.remove('selected');
        });

        if (selectedKey === question.answer) {
            optionEl.classList.add('correct');
        } else {
            optionEl.classList.add('wrong');
            const correctOption = Array.from(container.children).find(item => item.textContent.startsWith(`${question.answer}.`));
            if (correctOption) correctOption.classList.add('correct');
        }

        updatePalette();
    }

    function renderPalette() {
        els.palette.innerHTML = '';
        activeQuestions.forEach((_, index) => {
            const item = document.createElement('button');
            item.type = 'button';
            item.className = 'palette-item';
            item.textContent = index + 1;
            item.addEventListener('click', () => {
                currentPage = Math.floor(index / QUESTIONS_PER_PAGE);
                renderPage();
            });
            els.palette.appendChild(item);
        });
    }

    function updatePalette() {
        const start = currentPage * QUESTIONS_PER_PAGE;
        const end = start + QUESTIONS_PER_PAGE;
        const items = Array.from(els.palette.children);

        items.forEach((item, index) => {
            item.classList.remove('done', 'in-page');
            if (userAnswers[index] !== undefined) item.classList.add('done');
            if (index >= start && index < end) item.classList.add('in-page');
        });
    }

    function startTimer(duration) {
        clearInterval(timerInterval);
        let remaining = duration;

        timerInterval = setInterval(() => {
            const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
            const seconds = String(remaining % 60).padStart(2, '0');
            els.timerText.textContent = `${minutes}:${seconds}`;

            if (remaining <= 0) {
                clearInterval(timerInterval);
                alert('Hết giờ! Bài thi sẽ được nộp tự động.');
                submitExam();
                return;
            }

            remaining -= 1;
        }, 1000);
    }

    function submitExam() {
        clearInterval(timerInterval);
        isReviewMode = true;

        let score = 0;
        activeQuestions.forEach((question, index) => {
            if (userAnswers[index] === question.answer) score += 1;
        });

        const total = activeQuestions.length || 1;
        const scaledScore = Number(((score / total) * 10).toFixed(1));

        els.resultTitle.textContent = 'Kết quả';
        els.finalScoreText.textContent = 'Điểm số';
        els.finalScore.textContent = scaledScore;
        els.examFeedback.textContent = `Đúng ${score}/${total} câu.`;
        els.resultModal.classList.remove('hidden');

        els.modalButtons.innerHTML = `
            <button id="review-btn" class="btn-secondary" type="button">🔍 Xem lại</button>
            <button id="restart-btn" class="btn-primary" type="button">Làm lại</button>
        `;

        document.getElementById('review-btn').addEventListener('click', () => {
            els.resultModal.classList.add('hidden');
            currentPage = 0;
            renderPage();
        });

        document.getElementById('restart-btn').addEventListener('click', () => {
            if (isExamMode) {
                startExamMode();
            } else {
                startSession(activeQuestions);
            }
        });
    }

    function goHome() {
        clearInterval(timerInterval);
        els.quizApp.classList.add('hidden');
        els.homeScreen.classList.remove('hidden');
        els.resultModal.classList.add('hidden');
        els.exitModal.classList.add('hidden');
        isExamMode = false;
        isReviewMode = false;
    }

    document.getElementById('back-home-btn').addEventListener('click', () => {
        els.exitModal.classList.remove('hidden');
    });

    document.getElementById('close-exit-btn').addEventListener('click', () => {
        els.exitModal.classList.add('hidden');
    });

    document.getElementById('confirm-exit-btn').addEventListener('click', () => {
        goHome();
    });

    document.getElementById('home-result-btn').addEventListener('click', () => {
        goHome();
    });

    document.getElementById('restart-btn').addEventListener('click', () => {
        if (isExamMode) startExamMode();
        else startSession(activeQuestions);
    });

    document.getElementById('back-mode-btn').addEventListener('click', () => showModeSelection());

    document.querySelectorAll('[data-mode]').forEach(card => {
        card.addEventListener('click', () => {
            const mode = card.dataset.mode;
            if (mode === 'exam') startExamMode();
            else showChapterSelection();
        });
    });

    els.nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(activeQuestions.length / QUESTIONS_PER_PAGE);
        if (currentPage < totalPages - 1) {
            currentPage += 1;
            renderPage();
            return;
        }

        if (isExamMode && !isReviewMode) {
            const unanswered = activeQuestions.length - Object.keys(userAnswers).length;
            if (confirm(unanswered > 0 ? `Còn ${unanswered} câu chưa làm. Xác nhận nộp bài?` : 'Xác nhận nộp bài?')) {
                submitExam();
            }
        }
    });

    els.prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage -= 1;
            renderPage();
        }
    });

    els.shuffleBtn.addEventListener('click', () => {
        if (confirm('Trộn lại câu hỏi và làm lại từ đầu?')) {
            const shuffled = [...activeQuestions];
            shuffleArray(shuffled);
            startSession(shuffled);
        }
    });

    els.submitBtn.addEventListener('click', () => {
        const unanswered = activeQuestions.length - Object.keys(userAnswers).length;
        if (confirm(unanswered > 0 ? `Còn ${unanswered} câu chưa làm. Nộp luôn?` : 'Xác nhận nộp bài?')) {
            submitExam();
        }
    });

    renderSubjects();
})();
