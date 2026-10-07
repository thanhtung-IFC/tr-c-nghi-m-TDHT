(() => {
    const QUESTIONS_PER_PAGE = 10;

    // ─── DOM Cache ───────────────────────────────────────────────────────────────
    const els = {
        homeScreen:         document.getElementById('home-screen'),
        quizApp:            document.getElementById('quiz-app'),
        subjectList:        document.getElementById('subject-list'),
        partSelection:      document.getElementById('part-selection'),
        partList:           document.getElementById('part-list'),
        modeSelection:      document.getElementById('mode-selection'),
        chapterSelection:   document.getElementById('chapter-selection'),
        chapterList:        document.getElementById('chapter-list'),
        quizArea:           document.getElementById('quiz-area'),
        quizList:           document.getElementById('quiz-list'),
        nextBtn:            document.getElementById('next-page-btn'),
        prevBtn:            document.getElementById('prev-page-btn'),
        sidebarArea:        document.getElementById('sidebar-area'),
        timerBox:           document.getElementById('timer-box'),
        timerText:          document.getElementById('timer-text'),
        submitBtn:          document.getElementById('submit-now-btn'),
        shuffleBtn:         document.getElementById('shuffle-btn'),
        currentSubjectName: document.getElementById('current-subject-name'),
        pageIndicator:      document.getElementById('page-indicator'),
        scoreDisplay:       document.getElementById('score-display'),
        palette:            document.getElementById('question-palette'),
        paletteNote:        document.getElementById('palette-note'),
        progressBar:        document.getElementById('progress-bar'),
        // Progress tracker
        progressTracker:    document.getElementById('progress-tracker'),
        trackerStats:       document.getElementById('tracker-stats'),
        trackerFillCorrect: document.getElementById('tracker-fill-correct'),
        trackerFillWrong:   document.getElementById('tracker-fill-wrong'),
        summaryBtn:         document.getElementById('summary-btn'),
        // Result
        resultModal:        document.getElementById('result-modal'),
        resultContent:      document.getElementById('result-content'),
        exitModal:          document.getElementById('exit-modal'),
    };

    // ─── State ───────────────────────────────────────────────────────────────────
    let currentSubjectCode = '';
    let currentQuestions   = [];
    let activeQuestions    = [];
    let userAnswers        = {};
    let currentPage        = 0;
    let isExamMode         = false;
    let isReviewMode       = false;
    let timerInterval      = null;

    // ─── Utilities ───────────────────────────────────────────────────────────────
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    function showConfirm(message) {
        return new Promise(resolve => {
            const overlay = document.createElement('div');
            overlay.className = 'result-modal confirm-overlay';
            overlay.innerHTML = `
                <div class="result-content small-modal">
                    <p class="exit-message" style="margin-top:0">${message}</p>
                    <div class="modal-buttons">
                        <button class="btn-secondary confirm-cancel" type="button">Hủy</button>
                        <button class="btn-primary confirm-ok" type="button">Đồng ý</button>
                    </div>
                </div>`;
            document.body.appendChild(overlay);
            overlay.querySelector('.confirm-ok').addEventListener('click', () => { overlay.remove(); resolve(true); });
            overlay.querySelector('.confirm-cancel').addEventListener('click', () => { overlay.remove(); resolve(false); });
        });
    }

    function showAlert(message) {
        return new Promise(resolve => {
            const overlay = document.createElement('div');
            overlay.className = 'result-modal confirm-overlay';
            overlay.innerHTML = `
                <div class="result-content small-modal">
                    <p class="exit-message" style="margin-top:0">${message}</p>
                    <div class="modal-buttons">
                        <button class="btn-primary confirm-ok" type="button">OK</button>
                    </div>
                </div>`;
            document.body.appendChild(overlay);
            overlay.querySelector('.confirm-ok').addEventListener('click', () => { overlay.remove(); resolve(); });
        });
    }

    function scrollTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ─── Stats helper ────────────────────────────────────────────────────────────
    function getStats() {
        let correct = 0, wrong = 0, unanswered = 0;
        activeQuestions.forEach((q, i) => {
            if (userAnswers[i] === undefined) unanswered++;
            else if (userAnswers[i] === q.answer) correct++;
            else wrong++;
        });
        return { correct, wrong, unanswered, total: activeQuestions.length };
    }

    // ─── Visibility helpers ──────────────────────────────────────────────────────
    function hideAll() {
        els.partSelection.classList.add('hidden');
        els.modeSelection.classList.add('hidden');
        els.chapterSelection.classList.add('hidden');
        els.quizArea.classList.add('hidden');
        els.sidebarArea.classList.add('hidden');
        els.shuffleBtn.classList.add('hidden');
        els.timerBox.classList.add('hidden');
        els.submitBtn.classList.add('hidden');
        els.resultModal.classList.add('hidden');
        els.summaryBtn.classList.add('hidden');
    }

    // ─── Render subjects ─────────────────────────────────────────────────────────
    function renderSubjects() {
        const fragment = document.createDocumentFragment();
        Object.entries(subjectsData).forEach(([code, subject]) => {
            const totalQuestions = Array.isArray(subject?.questions) ? subject.questions.length : 0;
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'subject-card';
            card.innerHTML = `
                <span class="subject-icon">${subject.icon}</span>
                <span class="subject-name">${subject.name || code}</span>
                <span class="subject-count">${totalQuestions} câu hỏi</span>
            `;
            card.addEventListener('click', () => openSubject(code));
            fragment.appendChild(card);
        });
        els.subjectList.innerHTML = '';
        els.subjectList.appendChild(fragment);
    }

    // ─── Open subject ────────────────────────────────────────────────────────────
    function openSubject(code) {
        currentSubjectCode = code;
        currentQuestions = [...(subjectsData[code]?.questions || [])];
        els.currentSubjectName.textContent = subjectsData[code].name;
        els.homeScreen.classList.add('hidden');
        els.quizApp.classList.remove('hidden');
        startPracticeMode(currentQuestions);
        scrollTop();
    }

    // ─── Mode selection ──────────────────────────────────────────────────────────
    function showModeSelection() {
        hideAll();
        els.modeSelection.classList.remove('hidden');
        clearInterval(timerInterval);
        scrollTop();
    }

    function showChapterSelection() {
        const categories = [...new Set(currentQuestions.map(q => q.category).filter(Boolean))];
        const fragment = document.createDocumentFragment();

        const allBtn = document.createElement('div');
        allBtn.className = 'chapter-card';
        allBtn.innerHTML = `<span class="chapter-title">🔥 Tất cả</span><span class="chapter-count">${currentQuestions.length} câu</span>`;
        allBtn.addEventListener('click', () => startPracticeMode(currentQuestions));
        fragment.appendChild(allBtn);

        categories.forEach(category => {
            const filtered = currentQuestions.filter(q => q.category === category);
            const card = document.createElement('div');
            card.className = 'chapter-card';
            card.innerHTML = `<span class="chapter-title">${category}</span><span class="chapter-count">${filtered.length} câu</span>`;
            card.addEventListener('click', () => startPracticeMode(filtered));
            fragment.appendChild(card);
        });

        els.chapterList.innerHTML = '';
        els.chapterList.appendChild(fragment);

        hideAll();
        els.chapterSelection.classList.remove('hidden');
        els.sidebarArea.classList.remove('hidden');
        scrollTop();
    }

    // ─── Start modes ─────────────────────────────────────────────────────────────
    function startPracticeMode(data) {
        isExamMode = false;
        isReviewMode = false;
        hideAll();
        els.quizArea.classList.remove('hidden');
        els.sidebarArea.classList.remove('hidden');
        els.shuffleBtn.classList.remove('hidden');
        clearInterval(timerInterval);
        startSession([...data]);
        scrollTop();
    }

    function startExamMode() {
        isExamMode = true;
        isReviewMode = false;
        const examSet = [...currentQuestions];
        shuffleArray(examSet);
        examSet.splice(Math.min(100, examSet.length));

        hideAll();
        els.quizArea.classList.remove('hidden');
        els.sidebarArea.classList.remove('hidden');
        els.timerBox.classList.remove('hidden');
        els.submitBtn.classList.remove('hidden');

        startTimer(50 * 60);
        startSession(examSet);
        scrollTop();
    }

    // ─── Session ─────────────────────────────────────────────────────────────────
    function startSession(data) {
        activeQuestions = data;
        userAnswers = {};
        currentPage = 0;
        isReviewMode = false;
        els.resultModal.classList.add('hidden');
        els.summaryBtn.classList.add('hidden');
        updatePaletteNote();
        renderPalette();
        renderPage();
    }

    // ─── Update palette legend ───────────────────────────────────────────────────
    function updatePaletteNote() {
        if (!isExamMode || isReviewMode) {
            els.paletteNote.innerHTML = `
                <span class="note-item"><span class="dot dot-correct"></span>Đúng</span>
                <span class="note-item"><span class="dot dot-wrong"></span>Sai</span>
                <span class="note-item"><span class="dot current"></span>Trang này</span>
            `;
        } else {
            els.paletteNote.innerHTML = `
                <span class="note-item"><span class="dot done"></span>Đã làm</span>
                <span class="note-item"><span class="dot current"></span>Trang này</span>
            `;
        }
    }

    // ─── Render page ─────────────────────────────────────────────────────────────
    function renderPage() {
        const totalPages = Math.max(1, Math.ceil(activeQuestions.length / QUESTIONS_PER_PAGE));
        const startIndex = currentPage * QUESTIONS_PER_PAGE;
        const endIndex   = Math.min(startIndex + QUESTIONS_PER_PAGE, activeQuestions.length);

        els.pageIndicator.textContent = `Trang ${currentPage + 1}/${totalPages}`;

        // Score display text
        if (isReviewMode) {
            els.scoreDisplay.textContent = 'Xem lại';
        } else if (isExamMode) {
            els.scoreDisplay.textContent = 'Thi thử';
        } else {
            const stats = getStats();
            els.scoreDisplay.textContent = `Đã làm: ${stats.correct + stats.wrong}/${stats.total}`;
        }

        const progressPercent = ((currentPage + 1) / totalPages) * 100;
        els.progressBar.style.width = `${progressPercent}%`;

        const fragment = document.createDocumentFragment();

        for (let i = startIndex; i < endIndex; i++) {
            const q    = activeQuestions[i];
            const card = document.createElement('div');
            card.className = 'question-card';

            const tagHtml = q.category ? `<span class="q-tag">${q.category}</span>` : '';
            card.innerHTML = `<div class="question-title"><span class="q-number">Câu ${i + 1}:</span> ${tagHtml} ${q.question}</div>`;

            const optionsWrap = document.createElement('div');
            Object.entries(q.options).forEach(([key, value]) => {
                const option = document.createElement('div');
                option.className = 'option-item';
                option.textContent = `${key}. ${value}`;

                if (isReviewMode) {
                    option.classList.add('disabled');
                    if (key === q.answer) option.classList.add('correct');
                    else if (userAnswers[i] === key) option.classList.add('wrong');
                } else if (isExamMode) {
                    if (userAnswers[i] === key) option.classList.add('selected');
                } else {
                    // Practice mode
                    if (userAnswers[i] !== undefined) {
                        option.classList.add('disabled');
                        if (key === q.answer) option.classList.add('correct');
                        else if (userAnswers[i] === key) option.classList.add('wrong');
                    }
                }

                option.addEventListener('click', () => handleOptionClick(i, key, option, q, optionsWrap));
                optionsWrap.appendChild(option);
            });

            card.appendChild(optionsWrap);
            fragment.appendChild(card);
        }

        els.quizList.innerHTML = '';
        els.quizList.appendChild(fragment);

        // Navigation buttons
        els.prevBtn.classList.toggle('hidden', currentPage === 0);
        const isLastPage = currentPage === totalPages - 1;

        if (isLastPage && isExamMode && !isReviewMode) {
            els.nextBtn.textContent = 'NỘP BÀI 📝';
            els.nextBtn.classList.remove('hidden');
        } else if (isLastPage && !isExamMode && !isReviewMode) {
            const stats = getStats();
            if (stats.unanswered === 0) {
                els.nextBtn.textContent = '📊 Xem tổng hợp';
                els.nextBtn.classList.remove('hidden');
            } else {
                els.nextBtn.classList.add('hidden');
            }
        } else if (isLastPage) {
            els.nextBtn.classList.add('hidden');
        } else {
            els.nextBtn.textContent = 'Sau ➡️';
            els.nextBtn.classList.remove('hidden');
        }

        updatePalette();
        scrollTop();
    }

    // ─── Option click ────────────────────────────────────────────────────────────
    function handleOptionClick(index, selectedKey, optionEl, question, container) {
        if (isReviewMode) return;

        if (isExamMode) {
            userAnswers[index] = selectedKey;
            Array.from(container.children).forEach(item => item.classList.remove('selected'));
            optionEl.classList.add('selected');
            updatePalette();
            return;
        }

        // Practice mode: lock after first answer
        if (userAnswers[index] !== undefined) return;
        userAnswers[index] = selectedKey;

        Array.from(container.children).forEach(item => {
            item.classList.add('disabled');
            item.classList.remove('selected');
            if (item.textContent.startsWith(`${question.answer}.`)) item.classList.add('correct');
        });

        if (selectedKey !== question.answer) optionEl.classList.add('wrong');

        updatePalette();

        // Check if all questions answered → update next button on last page
        const totalPages = Math.ceil(activeQuestions.length / QUESTIONS_PER_PAGE);
        const isLastPage = currentPage === totalPages - 1;
        if (isLastPage && !isExamMode) {
            const stats = getStats();
            if (stats.unanswered === 0) {
                els.nextBtn.textContent = '📊 Xem tổng hợp';
                els.nextBtn.classList.remove('hidden');
            }
        }
    }

    // ─── Palette ─────────────────────────────────────────────────────────────────
    function renderPalette() {
        const fragment = document.createDocumentFragment();
        activeQuestions.forEach((_, index) => {
            const item = document.createElement('button');
            item.type = 'button';
            item.className = 'palette-item';
            item.textContent = index + 1;
            item.addEventListener('click', () => {
                currentPage = Math.floor(index / QUESTIONS_PER_PAGE);
                renderPage();
            });
            fragment.appendChild(item);
        });
        els.palette.innerHTML = '';
        els.palette.appendChild(fragment);
    }

    function updatePalette() {
        const start = currentPage * QUESTIONS_PER_PAGE;
        const end   = start + QUESTIONS_PER_PAGE;

        Array.from(els.palette.children).forEach((item, index) => {
            // Reset all state classes
            item.classList.remove('done', 'in-page', 'palette-correct', 'palette-wrong', 'palette-skip');

            if (index >= start && index < end) item.classList.add('in-page');

            if (userAnswers[index] !== undefined) {
                if (!isExamMode || isReviewMode) {
                    // Practice or review: show correct/wrong
                    if (userAnswers[index] === activeQuestions[index].answer) {
                        item.classList.add('palette-correct');
                    } else {
                        item.classList.add('palette-wrong');
                    }
                } else {
                    // Exam mode (before submit): just show as answered
                    item.classList.add('done');
                }
            } else if (isReviewMode) {
                // Unanswered in review
                item.classList.add('palette-skip');
            }
        });

        updateProgressTracker();
    }

    // ─── Progress Tracker ────────────────────────────────────────────────────────
    function updateProgressTracker() {
        const stats = getStats();
        const total = stats.total || 1;
        const correctPct = (stats.correct / total) * 100;
        const wrongPct   = (stats.wrong / total) * 100;

        els.trackerFillCorrect.style.width = `${correctPct}%`;
        els.trackerFillWrong.style.width   = `${wrongPct}%`;

        if (!isExamMode || isReviewMode) {
            // Practice / Review: show detailed breakdown
            els.trackerStats.innerHTML = `
                <div class="tracker-stat-item">
                    <span class="stat-dot stat-dot-correct"></span>
                    <span>${stats.correct} đúng</span>
                </div>
                <div class="tracker-stat-item">
                    <span class="stat-dot stat-dot-wrong"></span>
                    <span>${stats.wrong} sai</span>
                </div>
                <div class="tracker-stat-item">
                    <span class="stat-dot stat-dot-skip"></span>
                    <span>${stats.unanswered} chưa làm</span>
                </div>
            `;
        } else {
            // Exam mode (before submit): only show answered count
            const answered = stats.correct + stats.wrong;
            els.trackerStats.innerHTML = `
                <div class="tracker-stat-item">
                    <span>${answered}/${total} đã làm</span>
                </div>
            `;
        }

        // Show summary button in practice mode when at least 1 question answered
        if (!isExamMode && !isReviewMode && (stats.correct + stats.wrong) > 0) {
            els.summaryBtn.classList.remove('hidden');
        } else {
            els.summaryBtn.classList.add('hidden');
        }
    }

    // ─── Timer ───────────────────────────────────────────────────────────────────
    function startTimer(duration) {
        clearInterval(timerInterval);
        let remaining = duration;

        function tick() {
            const m = String(Math.floor(remaining / 60)).padStart(2, '0');
            const s = String(remaining % 60).padStart(2, '0');
            els.timerText.textContent = `${m}:${s}`;

            if (remaining <= 0) {
                clearInterval(timerInterval);
                showAlert('⏰ Hết giờ! Bài thi sẽ được nộp tự động.').then(() => showResults());
                return;
            }
            remaining--;
        }

        tick();
        timerInterval = setInterval(tick, 1000);
    }

    // ─── Show comprehensive results ──────────────────────────────────────────────
    function showResults() {
        clearInterval(timerInterval);
        isReviewMode = true;

        const stats       = getStats();
        const total       = stats.total || 1;
        const scaledScore = Number(((stats.correct / total) * 10).toFixed(1));
        const correctPct  = Math.round((stats.correct / total) * 100);
        const wrongPct    = Math.round((stats.wrong / total) * 100);
        const skipPct     = 100 - correctPct - wrongPct;

        // Categorize questions
        const wrongQuestions   = [];
        const skippedQuestions = [];
        activeQuestions.forEach((q, i) => {
            if (userAnswers[i] === undefined) {
                skippedQuestions.push({ index: i, question: q });
            } else if (userAnswers[i] !== q.answer) {
                wrongQuestions.push({ index: i, question: q, selected: userAnswers[i] });
            }
        });

        // Score color
        let scoreColorClass = 'score-low';
        if (scaledScore >= 8) scoreColorClass = 'score-high';
        else if (scaledScore >= 5) scoreColorClass = 'score-mid';

        // Feedback
        let feedbackText;
        if (scaledScore >= 9)      feedbackText = '🎉 Xuất sắc! Bạn nắm vững kiến thức rồi!';
        else if (scaledScore >= 7) feedbackText = '👍 Tốt lắm! Cố gắng thêm nhé!';
        else if (scaledScore >= 5) feedbackText = '💪 Khá ổn! Ôn lại những phần yếu nhé.';
        else                       feedbackText = '📚 Cần ôn tập thêm! Đừng nản, cố lên!';

        // Wrong questions list HTML
        let wrongListHtml = '';
        if (wrongQuestions.length > 0) {
            const items = wrongQuestions.map(wq => `
                <div class="detail-item" data-goto="${wq.index}">
                    <div class="detail-q-header">
                        <strong>Câu ${wq.index + 1}:</strong>
                        ${wq.question.category ? `<span class="q-tag">${wq.question.category}</span>` : ''}
                    </div>
                    <div class="detail-q-text">${wq.question.question}</div>
                    <div class="detail-answers">
                        <span class="answer-badge wrong-badge">Bạn chọn: ${wq.selected}. ${wq.question.options[wq.selected]}</span>
                        <span class="answer-badge correct-badge">Đáp án: ${wq.question.answer}. ${wq.question.options[wq.question.answer]}</span>
                    </div>
                </div>
            `).join('');

            wrongListHtml = `
                <details class="result-detail-group" open>
                    <summary class="detail-summary wrong-summary">
                        ❌ Câu trả lời sai (${wrongQuestions.length} câu)
                    </summary>
                    <div class="detail-list">${items}</div>
                </details>
            `;
        }

        // Skipped questions list HTML
        let skipListHtml = '';
        if (skippedQuestions.length > 0) {
            const items = skippedQuestions.map(sq => `
                <div class="detail-item" data-goto="${sq.index}">
                    <div class="detail-q-header">
                        <strong>Câu ${sq.index + 1}:</strong>
                        ${sq.question.category ? `<span class="q-tag">${sq.question.category}</span>` : ''}
                    </div>
                    <div class="detail-q-text">${sq.question.question}</div>
                    <div class="detail-answers">
                        <span class="answer-badge correct-badge">Đáp án: ${sq.question.answer}. ${sq.question.options[sq.question.answer]}</span>
                    </div>
                </div>
            `).join('');

            skipListHtml = `
                <details class="result-detail-group">
                    <summary class="detail-summary skip-summary">
                        ⏭️ Câu chưa làm (${skippedQuestions.length} câu)
                    </summary>
                    <div class="detail-list">${items}</div>
                </details>
            `;
        }

        // Correct questions list (collapsed)
        let correctListHtml = '';
        const correctQuestions = [];
        activeQuestions.forEach((q, i) => {
            if (userAnswers[i] !== undefined && userAnswers[i] === q.answer) {
                correctQuestions.push({ index: i, question: q });
            }
        });
        if (correctQuestions.length > 0) {
            const items = correctQuestions.map(cq => `
                <div class="detail-item" data-goto="${cq.index}">
                    <div class="detail-q-header">
                        <strong>Câu ${cq.index + 1}:</strong>
                        ${cq.question.category ? `<span class="q-tag">${cq.question.category}</span>` : ''}
                    </div>
                    <div class="detail-q-text">${cq.question.question}</div>
                </div>
            `).join('');

            correctListHtml = `
                <details class="result-detail-group">
                    <summary class="detail-summary" style="background:#f0fdf4; color:#065f46;">
                        ✅ Câu trả lời đúng (${correctQuestions.length} câu)
                    </summary>
                    <div class="detail-list">${items}</div>
                </details>
            `;
        }

        // Build full result HTML
        els.resultContent.innerHTML = `
            <h3 class="result-title-text">📊 Tổng hợp kết quả</h3>

            <div class="score-ring-wrap">
                <div class="score-ring ${scoreColorClass}" style="--correct-pct:${correctPct}%;--wrong-pct:${wrongPct}%;">
                    <div class="score-ring-inner">
                        <span class="score-ring-value">${scaledScore}</span>
                        <span class="score-ring-label">điểm</span>
                    </div>
                </div>
            </div>

            <p class="result-feedback">${feedbackText}</p>

            <div class="result-stats-row">
                <div class="stat-card stat-card-correct">
                    <span class="stat-card-num">${stats.correct}</span>
                    <span class="stat-card-label">✅ Đúng</span>
                    <span class="stat-card-pct">${correctPct}%</span>
                </div>
                <div class="stat-card stat-card-wrong">
                    <span class="stat-card-num">${stats.wrong}</span>
                    <span class="stat-card-label">❌ Sai</span>
                    <span class="stat-card-pct">${wrongPct}%</span>
                </div>
                <div class="stat-card stat-card-skip">
                    <span class="stat-card-num">${stats.unanswered}</span>
                    <span class="stat-card-label">⏭️ Bỏ qua</span>
                    <span class="stat-card-pct">${skipPct}%</span>
                </div>
            </div>

            <div class="result-details-section">
                ${wrongListHtml}
                ${skipListHtml}
                ${correctListHtml}
            </div>

            <div class="modal-buttons result-actions">
                <button class="btn-secondary" id="review-btn" type="button">🔍 Xem lại bài</button>
                <button class="btn-primary" id="restart-result-btn" type="button">🔄 Làm lại</button>
                <button class="btn-secondary" id="home-result-btn2" type="button">🏠 Trang chủ</button>
            </div>
        `;

        els.resultModal.classList.remove('hidden');

        // Bind result modal events
        document.getElementById('review-btn').addEventListener('click', () => {
            els.resultModal.classList.add('hidden');
            updatePaletteNote();
            currentPage = 0;
            renderPage();
        });

        document.getElementById('restart-result-btn').addEventListener('click', () => {
            els.resultModal.classList.add('hidden');
            if (isExamMode) startExamMode();
            else {
                isReviewMode = false;
                startSession([...activeQuestions]);
            }
        });

        document.getElementById('home-result-btn2').addEventListener('click', goHome);

        // Bind "go to question" clicks in detail items
        els.resultContent.querySelectorAll('.detail-item[data-goto]').forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', () => {
                const qIndex = parseInt(item.dataset.goto);
                els.resultModal.classList.add('hidden');
                updatePaletteNote();
                currentPage = Math.floor(qIndex / QUESTIONS_PER_PAGE);
                renderPage();
            });
        });

        // Update palette to show correct/wrong/skip
        updatePaletteNote();
        updatePalette();
        scrollTop();
    }

    // ─── Go home ─────────────────────────────────────────────────────────────────
    function goHome() {
        clearInterval(timerInterval);
        els.quizApp.classList.add('hidden');
        els.homeScreen.classList.remove('hidden');
        els.resultModal.classList.add('hidden');
        els.exitModal.classList.add('hidden');
        isExamMode   = false;
        isReviewMode = false;
        scrollTop();
    }

    // ─── Event listeners ─────────────────────────────────────────────────────────
    document.getElementById('back-home-btn').addEventListener('click', () => {
        els.exitModal.classList.remove('hidden');
    });

    document.getElementById('close-exit-btn').addEventListener('click', () => {
        els.exitModal.classList.add('hidden');
    });

    document.getElementById('confirm-exit-btn').addEventListener('click', goHome);

    document.getElementById('back-mode-btn').addEventListener('click', showModeSelection);

    document.querySelectorAll('[data-mode]').forEach(card => {
        card.addEventListener('click', () => {
            card.dataset.mode === 'exam' ? startExamMode() : showChapterSelection();
        });
    });

    els.nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(activeQuestions.length / QUESTIONS_PER_PAGE);

        // Not on last page → go next
        if (currentPage < totalPages - 1) {
            currentPage++;
            renderPage();
            return;
        }

        // Last page in exam mode → submit
        if (isExamMode && !isReviewMode) {
            const unanswered = activeQuestions.length - Object.keys(userAnswers).length;
            const msg = unanswered > 0
                ? `Còn <strong>${unanswered}</strong> câu chưa làm. Bạn có chắc muốn nộp bài?`
                : 'Xác nhận nộp bài?';
            showConfirm(msg).then(ok => { if (ok) showResults(); });
            return;
        }

        // Last page in practice mode (all answered) → show summary
        if (!isExamMode && !isReviewMode) {
            showResults();
        }
    });

    els.prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            renderPage();
        }
    });

    els.shuffleBtn.addEventListener('click', () => {
        showConfirm('Trộn lại câu hỏi và làm lại từ đầu?').then(ok => {
            if (ok) {
                const shuffled = [...activeQuestions];
                shuffleArray(shuffled);
                startSession(shuffled);
            }
        });
    });

    els.submitBtn.addEventListener('click', () => {
        const unanswered = activeQuestions.length - Object.keys(userAnswers).length;
        const msg = unanswered > 0
            ? `Còn <strong>${unanswered}</strong> câu chưa làm. Nộp luôn?`
            : 'Xác nhận nộp bài?';
        showConfirm(msg).then(ok => { if (ok) showResults(); });
    });

    // Summary button in sidebar
    els.summaryBtn.addEventListener('click', () => showResults());

    // ─── Init ────────────────────────────────────────────────────────────────────
    renderSubjects();
})();
