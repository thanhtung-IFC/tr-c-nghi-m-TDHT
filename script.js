(() => {
    const QUESTIONS_PER_PAGE   = 10;
    const EXAM_QUESTION_COUNT  = 60;
    const EXAM_DURATION_SECONDS = 50 * 60; // 50 phút = 3000 giây

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
        changeModeBtn:      document.getElementById('change-mode-btn'),
        backHomeModeBtn:    document.getElementById('back-home-mode-btn'),
        modeSubjectDesc:    document.getElementById('mode-subject-desc'),
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
        // Lock screen
        lockScreen:         document.getElementById('lock-screen'),
        lockForm:           document.getElementById('lock-form'),
        lockInput:          document.getElementById('lock-password-input'),
        lockTogglePwd:      document.getElementById('lock-toggle-pwd'),
        lockError:          document.getElementById('lock-error'),
    };

    // ─── State ───────────────────────────────────────────────────────────────────
    let currentSubjectCode  = '';
    let currentQuestions    = [];
    let activeQuestions     = [];
    let userAnswers         = {};
    let currentPage         = 0;
    let isExamMode          = false;
    let isReviewMode        = false;
    let currentSessionMode  = 'practice'; // 'practice', 'exam', 'retry-wrong', 'retry-pinned'
    let pinnedQuestionIds   = new Set();
    let timerInterval       = null;
    let timerRemaining      = 0; // seconds left (for exam mode persistence)

    // ─── Pinned Questions Storage ────────────────────────────────────────────────
    function getQuestionKey(q) {
        if (!q) return '';
        return q.id !== undefined && q.id !== null ? String(q.id) : (q.question || '').trim();
    }

    function loadPinnedQuestions(subjectCode) {
        try {
            const raw = localStorage.getItem(`pinned_questions_${subjectCode}`);
            if (raw) {
                return new Set(JSON.parse(raw));
            }
        } catch (e) {
            console.error('Lỗi khi đọc danh sách câu ghim:', e);
        }
        return new Set();
    }

    function savePinnedQuestions(subjectCode, set) {
        try {
            localStorage.setItem(`pinned_questions_${subjectCode}`, JSON.stringify([...set]));
        } catch (e) {
            console.error('Lỗi khi lưu danh sách câu ghim:', e);
        }
    }

    function togglePinQuestion(q) {
        const key = getQuestionKey(q);
        if (!key) return;
        if (pinnedQuestionIds.has(key)) {
            pinnedQuestionIds.delete(key);
        } else {
            pinnedQuestionIds.add(key);
        }
        savePinnedQuestions(currentSubjectCode, pinnedQuestionIds);
        updateProgressTracker();
        updatePalette();
    }

    // ─── Cryptographically Secure Random & Shuffling ──────────────────────────────
    function getRandomFloat() {
        if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
            const buf = new Uint32Array(1);
            crypto.getRandomValues(buf);
            return buf[0] / (0xffffffff + 1);
        }
        return Math.random();
    }

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(getRandomFloat() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    /**
     * Xáo trộn ngẫu nhiên các lựa chọn (A, B, C, D) của một câu hỏi,
     * đảm bảo không bị lặp lại thứ tự cũ và tự động cập nhật lại nhãn đáp án đúng (answer).
     */
    function shuffleQuestionOptions(q) {
        if (!q || !q.options) return { ...q };

        const keys = Object.keys(q.options);
        if (keys.length <= 1) return { ...q };

        // 1. Kiểm tra các câu có phương án chỉ rõ ký tự như "Cả A và B", "Cả B và C"
        // Với các câu này, giữ nguyên vị trí để không phá vỡ tính logic của câu hỏi
        const hasLetterRef = keys.some(k => /cả\s+[A-D]\s+và\s+[A-D]/i.test(q.options[k]));
        if (hasLetterRef) {
            return { ...q, options: { ...q.options } };
        }

        // 2. Kiểm tra phương án cuối dạng "Tất cả các phương án trên", "Cả ba phương án trên"
        const lastKey = keys[keys.length - 1];
        const lastText = q.options[lastKey] || '';
        const isAboveRef = /(phương án|đáp án|câu|ý|cả ba|cả 3).*(trên|dưới)/i.test(lastText)
            || /(tất cả|các phương án trên|cả ba)/i.test(lastText);

        if (isAboveRef) {
            // Giữ nguyên phương án cuối (D), đảo ngẫu nhiên các phương án phía trước (A, B, C)
            const prefixKeys = keys.slice(0, keys.length - 1);
            const prefixEntries = prefixKeys.map(k => ({
                text: q.options[k],
                isCorrect: k === q.answer
            }));

            let attempts = 0;
            const originalTexts = prefixEntries.map(e => e.text);
            while (attempts < 8) {
                shuffleArray(prefixEntries);
                if (prefixEntries.some((e, idx) => e.text !== originalTexts[idx])) break;
                attempts++;
            }

            const newOptions = {};
            let newAnswer = q.answer;

            prefixKeys.forEach((key, idx) => {
                newOptions[key] = prefixEntries[idx].text;
                if (prefixEntries[idx].isCorrect) newAnswer = key;
            });
            newOptions[lastKey] = lastText;
            if (q.answer === lastKey) newAnswer = lastKey;

            return {
                ...q,
                options: newOptions,
                answer: newAnswer
            };
        }

        // 3. Trường hợp thông thường: Đảo toàn bộ các lựa chọn (A, B, C, D...)
        const entries = keys.map(k => ({
            origKey: k,
            text: q.options[k],
            isCorrect: k === q.answer
        }));

        const originalOrder = entries.map(e => e.origKey);
        let attempts = 0;

        // Đảm bảo không trùng lại thứ tự cũ (không bị lặp lại)
        while (attempts < 12) {
            shuffleArray(entries);
            const isDifferent = entries.some((e, idx) => e.origKey !== originalOrder[idx]);
            if (isDifferent) {
                // Ưu tiên lần đảo mà đáp án đúng cũng di chuyển sang vị trí khác
                if (keys.length >= 3 && attempts < 6) {
                    const movedAnswer = entries.some((e, idx) => e.isCorrect && keys[idx] !== q.answer);
                    if (movedAnswer) break;
                } else {
                    break;
                }
            }
            attempts++;
        }

        const newOptions = {};
        let newAnswer = q.answer;

        keys.forEach((key, idx) => {
            newOptions[key] = entries[idx].text;
            if (entries[idx].isCorrect) {
                newAnswer = key;
            }
        });

        return {
            ...q,
            options: newOptions,
            answer: newAnswer
        };
    }

    /**
     * Trộn đề toàn diện & không bị lặp lại:
     * 1. Xáo trộn vị trí các đáp án (options) của từng câu hỏi.
     * 2. Xáo trộn thứ tự toàn bộ câu hỏi.
     * 3. Cơ chế chống lặp: Đảm bảo câu đầu và thứ tự không trùng với lần làm trước.
     */
    function shuffleQuestions(list) {
        if (!Array.isArray(list) || list.length === 0) return [];

        // 1. Tạo bản sao và đảo đáp án của từng câu hỏi
        let copy = list.map(q => shuffleQuestionOptions(q));

        if (copy.length <= 1) return copy;

        // 2. Xáo trộn danh sách câu hỏi bằng Fisher-Yates CSPRNG
        shuffleArray(copy);

        // 3. Cơ chế chống lặp lại với lần làm gần nhất
        try {
            const storageKey = `last_q_seq_${currentSubjectCode || 'default'}`;
            const rawPrev = sessionStorage.getItem(storageKey);
            let prevFirstKeys = [];
            if (rawPrev) {
                prevFirstKeys = JSON.parse(rawPrev);
            }

            // Nếu câu đầu tiên trùng với câu đầu lần làm trước -> hoán đổi với vị trí khác
            const newFirstKey = getQuestionKey(copy[0]);
            if (prevFirstKeys.length > 0 && copy.length > 2 && newFirstKey === prevFirstKeys[0]) {
                const swapIdx = 1 + Math.floor(getRandomFloat() * (copy.length - 1));
                [copy[0], copy[swapIdx]] = [copy[swapIdx], copy[0]];
            }

            // Lưu 5 câu đầu tiên vào sessionStorage để so sánh lần tiếp theo
            const currentFirstKeys = copy.slice(0, Math.min(5, copy.length)).map(q => getQuestionKey(q));
            sessionStorage.setItem(storageKey, JSON.stringify(currentFirstKeys));
        } catch (e) {
            // Không ảnh hưởng nếu sessionStorage không khả dụng
        }

        return copy;
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

    // ─── Session Persistence ─────────────────────────────────────────────────────
    const SESSION_KEY = 'quiz_session';
    const SESSION_MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours

    function saveSession() {
        if (isReviewMode || activeQuestions.length === 0) return;
        try {
            const session = {
                subjectCode: currentSubjectCode,
                activeQuestions,
                userAnswers,
                currentPage,
                isExamMode,
                currentSessionMode,
                timerRemaining: isExamMode ? timerRemaining : null,
                savedAt: Date.now()
            };
            localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        } catch (e) { console.error('Lỗi lưu phiên:', e); }
    }

    function clearSession() {
        try { localStorage.removeItem(SESSION_KEY); } catch (e) {}
    }

    function restoreSession(session) {
        // Restore state
        currentSubjectCode = session.subjectCode;
        currentQuestions   = [...(subjectsData[session.subjectCode]?.questions || [])];
        activeQuestions    = session.activeQuestions;
        userAnswers        = session.userAnswers || {};
        currentPage        = session.currentPage || 0;
        isExamMode         = !!session.isExamMode;
        isReviewMode       = false;
        currentSessionMode = session.currentSessionMode || 'practice';
        pinnedQuestionIds  = loadPinnedQuestions(session.subjectCode);

        els.currentSubjectName.textContent = subjectsData[session.subjectCode]?.name || session.subjectCode;
        els.homeScreen.classList.add('hidden');
        els.quizApp.classList.remove('hidden');

        hideAll();
        els.quizArea.classList.remove('hidden');
        els.sidebarArea.classList.remove('hidden');

        if (isExamMode) {
            els.timerBox.classList.remove('hidden');
            els.submitBtn.classList.remove('hidden');
            const remaining = (typeof session.timerRemaining === 'number' && session.timerRemaining > 0)
                ? session.timerRemaining : 50 * 60;
            startTimer(remaining);
        } else {
            els.shuffleBtn.classList.remove('hidden');
        }

        updatePaletteNote();
        renderPalette();
        renderPage();
        scrollTop();
    }


    function hideAll() {
        els.partSelection.classList.add('hidden');
        els.modeSelection.classList.add('hidden');
        els.chapterSelection.classList.add('hidden');
        els.quizArea.classList.add('hidden');
        els.sidebarArea.classList.add('hidden');
        els.shuffleBtn.classList.add('hidden');
        if (els.changeModeBtn) els.changeModeBtn.classList.add('hidden');
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
            const card = document.createElement('div');
            card.className = 'subject-card';
            card.innerHTML = `
                <span class="subject-icon">${subject.icon}</span>
                <span class="subject-name">${subject.name || code}</span>
                <span class="subject-count">${totalQuestions} câu hỏi ôn tập</span>
                <div class="subject-card-actions">
                    <button class="btn-subject-action btn-sub-practice" type="button" title="Ôn tập luyện tập theo chương hoặc tất cả">
                        📚 Luyện tập
                    </button>
                    <button class="btn-subject-action btn-sub-exam" type="button" title="Thi thử 60 câu ngẫu nhiên trong 50 phút">
                        ⏱️ Thi thử (60 câu)
                    </button>
                </div>
            `;

            // Bấm trực tiếp vào nút "Luyện tập"
            card.querySelector('.btn-sub-practice').addEventListener('click', (e) => {
                e.stopPropagation();
                openSubject(code, 'practice');
            });

            // Bấm trực tiếp vào nút "Thi thử (60 câu)"
            card.querySelector('.btn-sub-exam').addEventListener('click', (e) => {
                e.stopPropagation();
                openSubject(code, 'exam');
            });

            // Bấm vào thân thẻ môn học -> mở bảng chọn chế độ
            card.addEventListener('click', () => openSubject(code));
            fragment.appendChild(card);
        });
        els.subjectList.innerHTML = '';
        els.subjectList.appendChild(fragment);
    }

    // ─── Open subject ────────────────────────────────────────────────────────────
    function openSubject(code, autoMode = null) {
        currentSubjectCode = code;
        pinnedQuestionIds  = loadPinnedQuestions(code);
        currentQuestions   = [...(subjectsData[code]?.questions || [])];
        const subjectName  = subjectsData[code]?.name || code;
        els.currentSubjectName.textContent = subjectName;

        if (els.modeSubjectDesc) {
            els.modeSubjectDesc.textContent = `${subjectName} — Tổng cộng ${currentQuestions.length} câu hỏi`;
        }

        els.homeScreen.classList.add('hidden');
        els.quizApp.classList.remove('hidden');

        if (autoMode === 'exam') {
            startExamMode();
        } else if (autoMode === 'practice') {
            showChapterSelection();
        } else {
            showModeSelection();
        }
        scrollTop();
    }

    // ─── Mode selection ──────────────────────────────────────────────────────────
    function showModeSelection() {
        hideAll();
        els.modeSelection.classList.remove('hidden');
        clearInterval(timerInterval);
        const subjectName = subjectsData[currentSubjectCode]?.name || currentSubjectCode;
        if (els.modeSubjectDesc) {
            els.modeSubjectDesc.textContent = `${subjectName} — Tổng cộng ${currentQuestions.length} câu hỏi`;
        }
        scrollTop();
    }

    function showChapterSelection() {
        const categories = [...new Set(currentQuestions.map(q => q.category).filter(Boolean))];
        const fragment = document.createDocumentFragment();

        const allBtn = document.createElement('div');
        allBtn.className = 'chapter-card';
        allBtn.innerHTML = `<span class="chapter-title">🔥 Tất cả (${currentQuestions.length} câu)</span><span class="chapter-count">Toàn bộ đề</span>`;
        allBtn.addEventListener('click', () => startPracticeMode(currentQuestions, 'practice'));
        fragment.appendChild(allBtn);

        categories.forEach(category => {
            const filtered = currentQuestions.filter(q => q.category === category);
            const card = document.createElement('div');
            card.className = 'chapter-card';
            card.innerHTML = `<span class="chapter-title">${category}</span><span class="chapter-count">${filtered.length} câu</span>`;
            card.addEventListener('click', () => startPracticeMode(filtered, 'practice'));
            fragment.appendChild(card);
        });

        els.chapterList.innerHTML = '';
        els.chapterList.appendChild(fragment);

        hideAll();
        els.chapterSelection.classList.remove('hidden');
        if (els.changeModeBtn) els.changeModeBtn.classList.remove('hidden');
        els.sidebarArea.classList.remove('hidden');
        scrollTop();
    }

    // ─── Start modes ─────────────────────────────────────────────────────────────
    function startPracticeMode(data, mode = 'practice') {
        isExamMode = false;
        isReviewMode = false;
        currentSessionMode = mode;
        hideAll();
        els.quizArea.classList.remove('hidden');
        els.sidebarArea.classList.remove('hidden');
        els.shuffleBtn.classList.remove('hidden');
        if (els.changeModeBtn) els.changeModeBtn.classList.remove('hidden');
        clearInterval(timerInterval);
        const shuffled = shuffleQuestions(data);
        startSession(shuffled);
        scrollTop();
    }

    function startExamMode() {
        isExamMode = true;
        isReviewMode = false;
        currentSessionMode = 'exam';
        const count = Math.min(EXAM_QUESTION_COUNT, currentQuestions.length);
        const examSet = shuffleQuestions(currentQuestions).slice(0, count);

        hideAll();
        els.quizArea.classList.remove('hidden');
        els.sidebarArea.classList.remove('hidden');
        els.timerBox.classList.remove('hidden');
        els.submitBtn.classList.remove('hidden');
        if (els.changeModeBtn) els.changeModeBtn.classList.remove('hidden');

        startTimer(EXAM_DURATION_SECONDS);
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
        saveSession();
    }

    // ─── Update palette legend ───────────────────────────────────────────────────
    function updatePaletteNote() {
        if (!isExamMode || isReviewMode) {
            els.paletteNote.innerHTML = `
                <span class="note-item"><span class="dot dot-correct"></span>Đúng</span>
                <span class="note-item"><span class="dot dot-wrong"></span>Sai</span>
                <span class="note-item"><span class="dot current"></span>Trang này</span>
                <span class="note-item">📌 Đã ghim</span>
            `;
        } else {
            els.paletteNote.innerHTML = `
                <span class="note-item"><span class="dot done"></span>Đã làm</span>
                <span class="note-item"><span class="dot current"></span>Trang này</span>
                <span class="note-item">📌 Đã ghim</span>
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
            els.scoreDisplay.textContent = 'Xem lại bài thi';
        } else if (isExamMode) {
            const answered = Object.keys(userAnswers).length;
            els.scoreDisplay.textContent = `Thi thử: ${answered}/${activeQuestions.length} câu`;
        } else if (currentSessionMode === 'retry-wrong') {
            const stats = getStats();
            els.scoreDisplay.textContent = `Ôn câu sai: ${stats.correct + stats.wrong}/${stats.total}`;
        } else if (currentSessionMode === 'retry-pinned') {
            const stats = getStats();
            els.scoreDisplay.textContent = `Ôn câu ghim: ${stats.correct + stats.wrong}/${stats.total}`;
        } else {
            const stats = getStats();
            els.scoreDisplay.textContent = `Đã làm: ${stats.correct + stats.wrong}/${stats.total}`;
        }

        const progressPercent = ((currentPage + 1) / totalPages) * 100;
        els.progressBar.style.width = `${progressPercent}%`;

        const fragment = document.createDocumentFragment();

        for (let i = startIndex; i < endIndex; i++) {
            const q = activeQuestions[i];
            const key = getQuestionKey(q);
            const isPinned = pinnedQuestionIds.has(key);

            const card = document.createElement('div');
            card.className = 'question-card';

            // Top Header: Title & Pin Button
            const topWrap = document.createElement('div');
            topWrap.className = 'question-top';

            const titleDiv = document.createElement('div');
            titleDiv.className = 'question-title';
            const tagHtml = q.category ? `<span class="q-tag">${q.category}</span>` : '';
            titleDiv.innerHTML = `<span class="q-number">Câu ${i + 1}:</span> ${tagHtml} ${q.question}`;

            const pinBtn = document.createElement('button');
            pinBtn.type = 'button';
            pinBtn.className = `btn-pin ${isPinned ? 'pinned' : ''}`;
            pinBtn.title = isPinned ? 'Bỏ ghim câu này' : 'Ghim câu này để chú ý';
            pinBtn.innerHTML = `<span class="pin-icon">📌</span><span class="pin-text">${isPinned ? 'Đã ghim' : 'Ghim'}</span>`;

            pinBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePinQuestion(q);
                const nowPinned = pinnedQuestionIds.has(key);
                pinBtn.className = `btn-pin ${nowPinned ? 'pinned' : ''}`;
                pinBtn.title = nowPinned ? 'Bỏ ghim câu này' : 'Ghim câu này để chú ý';
                pinBtn.innerHTML = `<span class="pin-icon">📌</span><span class="pin-text">${nowPinned ? 'Đã ghim' : 'Ghim'}</span>`;
            });

            topWrap.appendChild(titleDiv);
            topWrap.appendChild(pinBtn);
            card.appendChild(topWrap);

            // Options
            const optionsWrap = document.createElement('div');
            Object.entries(q.options).forEach(([optKey, value]) => {
                const option = document.createElement('div');
                option.className = 'option-item';
                option.textContent = `${optKey}. ${value}`;

                if (isReviewMode) {
                    option.classList.add('disabled');
                    if (optKey === q.answer) option.classList.add('correct');
                    else if (userAnswers[i] === optKey) option.classList.add('wrong');
                } else if (isExamMode) {
                    if (userAnswers[i] === optKey) option.classList.add('selected');
                } else {
                    // Practice mode
                    if (userAnswers[i] !== undefined) {
                        option.classList.add('disabled');
                        if (optKey === q.answer) option.classList.add('correct');
                        else if (userAnswers[i] === optKey) option.classList.add('wrong');
                    }
                }

                option.addEventListener('click', () => handleOptionClick(i, optKey, option, q, optionsWrap));
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
            saveSession();
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
        saveSession();

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
            item.classList.remove('done', 'in-page', 'palette-correct', 'palette-wrong', 'palette-skip', 'is-pinned');

            if (index >= start && index < end) item.classList.add('in-page');

            const q = activeQuestions[index];
            if (q && pinnedQuestionIds.has(getQuestionKey(q))) {
                item.classList.add('is-pinned');
            }

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

        const pinnedCount = activeQuestions.filter(q => pinnedQuestionIds.has(getQuestionKey(q))).length;

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
                <div class="tracker-stat-item">
                    <span>📌 ${pinnedCount} đã ghim</span>
                </div>
            `;
        } else {
            // Exam mode (before submit): only show answered count
            const answered = stats.correct + stats.wrong;
            els.trackerStats.innerHTML = `
                <div class="tracker-stat-item">
                    <span>${answered}/${total} đã làm</span>
                </div>
                <div class="tracker-stat-item">
                    <span>📌 ${pinnedCount} đã ghim</span>
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
        timerRemaining = duration;

        function tick() {
            const m = String(Math.floor(timerRemaining / 60)).padStart(2, '0');
            const s = String(timerRemaining % 60).padStart(2, '0');
            els.timerText.textContent = `${m}:${s}`;

            if (timerRemaining <= 0) {
                clearInterval(timerInterval);
                showAlert('⏰ Hết giờ! Bài thi sẽ được nộp tự động.').then(() => showResults());
                return;
            }
            timerRemaining--;
            // Save session every 30 seconds to keep timer in sync
            if (timerRemaining % 30 === 0) saveSession();
        }

        tick();
        timerInterval = setInterval(tick, 1000);
    }

    // ─── Show comprehensive results ──────────────────────────────────────────────
    function showResults() {
        clearSession();
        clearInterval(timerInterval);
        isReviewMode = true;

        const stats       = getStats();
        const total       = stats.total || 1;
        const rawScore    = (stats.correct / total) * 10;
        const scaledScore = Number(rawScore.toFixed(rawScore % 1 === 0 ? 1 : (Number.isInteger(rawScore * 10) ? 1 : 2)));
        const correctPct  = Math.round((stats.correct / total) * 100);
        const wrongPct    = Math.round((stats.wrong / total) * 100);
        const skipPct     = Math.max(0, 100 - correctPct - wrongPct);

        // Categorize questions
        const wrongQuestions   = [];
        const skippedQuestions = [];
        const pinnedQuestions  = [];
        const correctQuestions = [];

        activeQuestions.forEach((q, i) => {
            const isPinned = pinnedQuestionIds.has(getQuestionKey(q));
            if (isPinned) {
                pinnedQuestions.push({ index: i, question: q, selected: userAnswers[i] });
            }
            if (userAnswers[i] === undefined) {
                skippedQuestions.push({ index: i, question: q });
            } else if (userAnswers[i] !== q.answer) {
                wrongQuestions.push({ index: i, question: q, selected: userAnswers[i] });
            } else {
                correctQuestions.push({ index: i, question: q });
            }
        });

        const pinPct = Math.round((pinnedQuestions.length / total) * 100);

        // Score color
        let scoreColorClass = 'score-low';
        if (scaledScore >= 8) scoreColorClass = 'score-high';
        else if (scaledScore >= 5) scoreColorClass = 'score-mid';

        // Feedback
        let feedbackText;
        if (isExamMode) {
            if (scaledScore >= 9.0)      feedbackText = '🏆 Xuất sắc! Bạn nắm rất vững toàn bộ kiến thức đề thi!';
            else if (scaledScore >= 8.0) feedbackText = '🎉 Giỏi! Kết quả thi thử rất tốt, tự tin bước vào kỳ thi thật!';
            else if (scaledScore >= 6.5) feedbackText = '👍 Khá! Bạn đã vượt qua bài thi, hãy ôn thêm các câu sai để bứt phá điểm số.';
            else if (scaledScore >= 5.0) feedbackText = '💪 Trung bình (Đạt)! Bạn vừa đủ điểm qua môn, hãy luyện thêm để chắc chắn.';
            else                        feedbackText = '⚠️ Chưa đạt (Dưới 5.0)! Hãy xem lại các câu bị sai và thi thử lại ngay nhé.';
        } else {
            if (scaledScore >= 9.0)      feedbackText = '🎉 Xuất sắc! Bạn nắm rất vững kiến thức!';
            else if (scaledScore >= 7.0) feedbackText = '👍 Rất tốt! Hãy phát huy ở các phần tiếp theo!';
            else if (scaledScore >= 5.0) feedbackText = '💪 Khá ổn! Hãy luyện lại các câu bị sai để nhớ sâu hơn nhé.';
            else                        feedbackText = '📚 Cần ôn tập kỹ hơn! Hãy luyện lại các câu sai và câu đã ghim ngay.';
        }

        // Wrong questions list HTML
        let wrongListHtml = '';
        if (wrongQuestions.length > 0) {
            const items = wrongQuestions.map(wq => `
                <div class="detail-item" data-goto="${wq.index}">
                    <div class="detail-q-header">
                        <strong>Câu ${wq.index + 1}:</strong>
                        ${wq.question.category ? `<span class="q-tag">${wq.question.category}</span>` : ''}
                        ${pinnedQuestionIds.has(getQuestionKey(wq.question)) ? '<span class="badge-pin-tag">📌 Đang ghim</span>' : ''}
                    </div>
                    <div class="detail-q-text">${wq.question.question}</div>
                    <div class="detail-answers">
                        <span class="answer-badge wrong-badge">❌ Bạn chọn: ${wq.selected}. ${wq.question.options[wq.selected] || ''}</span>
                        <span class="answer-badge correct-badge">✅ Đáp án: ${wq.question.answer}. ${wq.question.options[wq.question.answer] || ''}</span>
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

        // Pinned questions list HTML
        let pinnedListHtml = '';
        if (pinnedQuestions.length > 0) {
            const items = pinnedQuestions.map(pq => {
                let answerBadgeHtml = '';
                if (pq.selected === undefined) {
                    answerBadgeHtml = `
                        <span class="answer-badge skip-badge">⏭️ Chưa làm</span>
                        <span class="answer-badge correct-badge">✅ Đáp án: ${pq.question.answer}. ${pq.question.options[pq.question.answer] || ''}</span>
                    `;
                } else if (pq.selected === pq.question.answer) {
                    answerBadgeHtml = `
                        <span class="answer-badge correct-badge">✅ Bạn chọn đúng: ${pq.selected}. ${pq.question.options[pq.selected] || ''}</span>
                    `;
                } else {
                    answerBadgeHtml = `
                        <span class="answer-badge wrong-badge">❌ Bạn chọn: ${pq.selected}. ${pq.question.options[pq.selected] || ''}</span>
                        <span class="answer-badge correct-badge">✅ Đáp án: ${pq.question.answer}. ${pq.question.options[pq.question.answer] || ''}</span>
                    `;
                }

                return `
                    <div class="detail-item" data-goto="${pq.index}">
                        <div class="detail-q-header">
                            <strong>Câu ${pq.index + 1}:</strong>
                            ${pq.question.category ? `<span class="q-tag">${pq.question.category}</span>` : ''}
                            <span class="badge-pin-tag">📌 Đang ghim</span>
                        </div>
                        <div class="detail-q-text">${pq.question.question}</div>
                        <div class="detail-answers">
                            ${answerBadgeHtml}
                        </div>
                    </div>
                `;
            }).join('');

            pinnedListHtml = `
                <details class="result-detail-group" ${wrongQuestions.length === 0 ? 'open' : ''}>
                    <summary class="detail-summary pin-summary">
                        📌 Câu đã ghim cần chú ý (${pinnedQuestions.length} câu)
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
                        ${pinnedQuestionIds.has(getQuestionKey(sq.question)) ? '<span class="badge-pin-tag">📌 Đang ghim</span>' : ''}
                    </div>
                    <div class="detail-q-text">${sq.question.question}</div>
                    <div class="detail-answers">
                        <span class="answer-badge correct-badge">✅ Đáp án: ${sq.question.answer}. ${sq.question.options[sq.question.answer] || ''}</span>
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
        if (correctQuestions.length > 0) {
            const items = correctQuestions.map(cq => `
                <div class="detail-item" data-goto="${cq.index}">
                    <div class="detail-q-header">
                        <strong>Câu ${cq.index + 1}:</strong>
                        ${cq.question.category ? `<span class="q-tag">${cq.question.category}</span>` : ''}
                        ${pinnedQuestionIds.has(getQuestionKey(cq.question)) ? '<span class="badge-pin-tag">📌 Đang ghim</span>' : ''}
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
        const subjectTitle = subjectsData[currentSubjectCode]?.name || currentSubjectCode;
        const resultTitle = isExamMode ? '⏱️ Kết quả bài thi thử' : '📊 Tổng hợp kết quả';
        const resultSubtitleHtml = isExamMode
            ? `<p class="result-subtitle-mode">${subjectTitle} — Đề thi ${activeQuestions.length} câu ngẫu nhiên (50 phút)</p>`
            : '';
        const restartLabel = isExamMode ? '🔄 Thi lại đề 60 câu mới' : '🔄 Làm lại toàn bộ';

        els.resultContent.innerHTML = `
            <h3 class="result-title-text">${resultTitle}</h3>
            ${resultSubtitleHtml}

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
                    <span class="stat-card-label">⏭️ Chưa làm</span>
                    <span class="stat-card-pct">${skipPct}%</span>
                </div>
                <div class="stat-card stat-card-pin">
                    <span class="stat-card-num">${pinnedQuestions.length}</span>
                    <span class="stat-card-label">📌 Đã ghim</span>
                    <span class="stat-card-pct">${pinPct}%</span>
                </div>
            </div>

            <div class="result-details-section">
                ${wrongListHtml}
                ${pinnedListHtml}
                ${skipListHtml}
                ${correctListHtml}
            </div>

            <div class="modal-buttons result-actions">
                ${wrongQuestions.length > 0 ? `
                    <button class="btn-primary danger-btn" id="retry-wrong-btn" type="button">
                        ❌ Làm lại ${wrongQuestions.length} câu sai
                    </button>
                ` : ''}
                ${pinnedQuestions.length > 0 ? `
                    <button class="btn-primary warning-btn" id="retry-pinned-btn" type="button">
                        📌 Làm lại ${pinnedQuestions.length} câu đã ghim
                    </button>
                ` : ''}
                <button class="btn-secondary" id="review-btn" type="button">🔍 Xem lại bài</button>
                <button class="btn-secondary" id="restart-result-btn" type="button">${restartLabel}</button>
                <button class="btn-secondary" id="home-result-btn2" type="button">🏠 Trang chủ</button>
            </div>
        `;

        els.resultModal.classList.remove('hidden');

        // Bind event nút "Làm lại câu sai"
        const retryWrongBtn = document.getElementById('retry-wrong-btn');
        if (retryWrongBtn) {
            retryWrongBtn.addEventListener('click', () => {
                els.resultModal.classList.add('hidden');
                const wrongPristine = wrongQuestions.map(w => {
                    const orig = currentQuestions.find(cq => getQuestionKey(cq) === getQuestionKey(w.question));
                    return orig || w.question;
                });
                startPracticeMode(wrongPristine, 'retry-wrong');
            });
        }

        // Bind event nút "Làm lại câu đã ghim"
        const retryPinnedBtn = document.getElementById('retry-pinned-btn');
        if (retryPinnedBtn) {
            retryPinnedBtn.addEventListener('click', () => {
                els.resultModal.classList.add('hidden');
                const pinnedPristine = pinnedQuestions.map(p => {
                    const orig = currentQuestions.find(cq => getQuestionKey(cq) === getQuestionKey(p.question));
                    return orig || p.question;
                });
                startPracticeMode(pinnedPristine, 'retry-pinned');
            });
        }

        // Bind result modal events
        document.getElementById('review-btn').addEventListener('click', () => {
            els.resultModal.classList.add('hidden');
            updatePaletteNote();
            currentPage = 0;
            renderPage();
        });

        document.getElementById('restart-result-btn').addEventListener('click', () => {
            els.resultModal.classList.add('hidden');
            if (isExamMode) {
                startExamMode();
            } else {
                isReviewMode = false;
                const pristineList = activeQuestions.map(aq => {
                    const orig = currentQuestions.find(cq => getQuestionKey(cq) === getQuestionKey(aq));
                    return orig || aq;
                });
                startPracticeMode(pristineList, currentSessionMode);
            }
        });

        document.getElementById('home-result-btn2').addEventListener('click', goHome);

        // Bind "go to question" clicks in detail items
        els.resultContent.querySelectorAll('.detail-item[data-goto]').forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', () => {
                const qIndex = parseInt(item.dataset.goto, 10);
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
        clearSession();
        clearInterval(timerInterval);
        els.quizApp.classList.add('hidden');
        els.homeScreen.classList.remove('hidden');
        els.resultModal.classList.add('hidden');
        els.exitModal.classList.add('hidden');
        isExamMode   = false;
        isReviewMode = false;
        currentSessionMode = 'practice';
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

    if (els.backHomeModeBtn) {
        els.backHomeModeBtn.addEventListener('click', goHome);
    }

    if (els.changeModeBtn) {
        els.changeModeBtn.addEventListener('click', () => {
            if (isExamMode && !isReviewMode) {
                showConfirm('Bạn đang trong bài thi thử. Chuyển chế độ sẽ hủy bài thi hiện tại. Bạn có chắc chắn không?').then(ok => {
                    if (ok) showModeSelection();
                });
            } else {
                showModeSelection();
            }
        });
    }

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
            saveSession();
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
            saveSession();
        }
    });

    els.shuffleBtn.addEventListener('click', () => {
        showConfirm('Trộn lại câu hỏi & xáo trộn toàn bộ vị trí các đáp án?').then(ok => {
            if (ok) {
                const pristineList = activeQuestions.map(aq => {
                    const orig = currentQuestions.find(cq => getQuestionKey(cq) === getQuestionKey(aq));
                    return orig || aq;
                });
                const shuffled = shuffleQuestions(pristineList);
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

    // ─── Theme Toggle (Light / Dark Mode) ─────────────────────────────────────────
    const themeBtn  = document.getElementById('theme-toggle');
    const themeIcon = themeBtn ? themeBtn.querySelector('.theme-icon') : null;
    const themeText = themeBtn ? themeBtn.querySelector('.theme-text') : null;

    function applyTheme(theme) {
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeIcon) themeIcon.textContent = '☀️';
            if (themeText) themeText.textContent = 'Giao diện sáng';
            if (metaTheme) metaTheme.setAttribute('content', '#09090b');
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeIcon) themeIcon.textContent = '🌙';
            if (themeText) themeText.textContent = 'Giao diện tối';
            if (metaTheme) metaTheme.setAttribute('content', '#f4f4f6');
        }
        try {
            localStorage.setItem('app_theme', theme);
        } catch (e) {
            console.error('Lỗi lưu theme:', e);
        }
    }

    try {
        const savedTheme = localStorage.getItem('app_theme');
        if (savedTheme) {
            applyTheme(savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    } catch (e) {
        applyTheme('light');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            applyTheme(isDark ? 'light' : 'dark');
        });
    }

    // ─── Security Lock Screen & Init ──────────────────────────────────────────────
    const APP_PASSWORD = '203001';
    let isUnlocked = false;

    function checkSessionRestore() {
        try {
            const raw = localStorage.getItem(SESSION_KEY);
            if (raw) {
                const saved = JSON.parse(raw);
                const age = Date.now() - (saved.savedAt || 0);
                const answeredCount = Object.keys(saved.userAnswers || {}).length;
                const isValid = saved.subjectCode
                    && subjectsData[saved.subjectCode]
                    && Array.isArray(saved.activeQuestions)
                    && saved.activeQuestions.length > 0
                    && answeredCount > 0
                    && age < SESSION_MAX_AGE_MS;

                if (isValid) {
                    const subjectName = subjectsData[saved.subjectCode]?.name || saved.subjectCode;
                    const modeLabel = saved.isExamMode ? 'thi thử' : (saved.currentSessionMode === 'retry-wrong' ? 'ôn câu sai' : (saved.currentSessionMode === 'retry-pinned' ? 'ôn câu ghim' : 'luyện tập'));
                    const totalCount = saved.activeQuestions.length;
                    const minutesAgo = Math.round(age / 60000);
                    const timeLabel = minutesAgo < 1 ? 'vừa xong' : `${minutesAgo} phút trước`;

                    // Show restore modal
                    const overlay = document.createElement('div');
                    overlay.className = 'result-modal confirm-overlay';
                    overlay.innerHTML = `
                        <div class="result-content small-modal">
                            <div class="restore-icon">🔄</div>
                            <p class="exit-message" style="margin-top:0.5rem;">
                                Bạn có <strong>phiên làm bài chưa hoàn thành</strong> (<em>${timeLabel}</em>).<br>
                                <span style="font-size:0.85em;opacity:0.8;">
                                    ${subjectName} — Chế độ ${modeLabel} — ${answeredCount}/${totalCount} câu đã làm
                                </span>
                            </p>
                            <div class="modal-buttons">
                                <button class="btn-secondary restore-new" type="button">Bắt đầu mới</button>
                                <button class="btn-primary restore-continue" type="button">▶️ Tiếp tục</button>
                            </div>
                        </div>`;
                    document.body.appendChild(overlay);

                    overlay.querySelector('.restore-continue').addEventListener('click', () => {
                        overlay.remove();
                        restoreSession(saved);
                    });
                    overlay.querySelector('.restore-new').addEventListener('click', () => {
                        overlay.remove();
                        clearSession();
                    });
                }
            }
        } catch (e) {
            console.error('Lỗi kiểm tra phiên đã lưu:', e);
        }
    }

    function initApp() {
        renderSubjects();
        checkSessionRestore();
    }

    function unlockApp() {
        isUnlocked = true;
        if (els.lockScreen) {
            els.lockScreen.classList.add('unlocking');
            setTimeout(() => {
                els.lockScreen.classList.add('hidden');
                els.lockScreen.classList.remove('unlocking');
            }, 300);
        }
        initApp();
    }

    function checkPassword() {
        if (!els.lockInput) return;
        const val = els.lockInput.value.trim();
        if (val === APP_PASSWORD) {
            if (els.lockError) els.lockError.classList.add('hidden');
            unlockApp();
        } else {
            if (els.lockError) els.lockError.classList.remove('hidden');
            els.lockInput.classList.remove('shake');
            void els.lockInput.offsetWidth;
            els.lockInput.classList.add('shake');
            els.lockInput.select();
        }
    }

    if (els.lockForm) {
        els.lockForm.addEventListener('submit', (e) => {
            e.preventDefault();
            checkPassword();
        });
    }

    if (els.lockTogglePwd && els.lockInput) {
        els.lockTogglePwd.addEventListener('click', () => {
            const isPassword = els.lockInput.type === 'password';
            els.lockInput.type = isPassword ? 'text' : 'password';
            els.lockTogglePwd.textContent = isPassword ? '🙈' : '👁️';
            els.lockInput.focus();
        });
    }

    if (els.lockInput) {
        els.lockInput.addEventListener('input', () => {
            if (els.lockError) els.lockError.classList.add('hidden');
            els.lockInput.classList.remove('shake');
        });
        setTimeout(() => els.lockInput.focus(), 150);
    }
})();
