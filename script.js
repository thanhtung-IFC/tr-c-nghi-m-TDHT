// DỮ LIỆU GIẢ ĐỊNH (MOCK DATA) ĐỂ TEST GIAO DIỆN
const quizData = [
    {
        id: 1,
        question: "Đây là câu hỏi test số 1: Web này chạy có mượt không?",
        options: {
            A: "Rất mượt",
            B: "Bình thường",
            C: "Hơi lag",
            D: "Không chạy được"
        },
        answer: "A"
    },
    {
        id: 2,
        question: "Đây là câu hỏi test số 2: Bạn đã sẵn sàng nạp dữ liệu thật chưa?",
        options: {
            A: "Chưa, đợi chút",
            B: "Rồi, chiến thôi!",
            C: "Đang suy nghĩ",
            D: "Hỏi khó thế"
        },
        answer: "B"
    }
];

// CÁC BIẾN QUẢN LÝ TRẠNG THÁI
let currentQuestionIndex = 0;
let score = 0;

// LẤY CÁC PHẦN TỬ DOM
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const questionNumberSpan = document.getElementById('question-number');
const scoreSpan = document.getElementById('score-display');
const progressBar = document.getElementById('progress-bar');
const resultModal = document.getElementById('result-modal');
const finalScoreSpan = document.getElementById('final-score');

// HÀM KHỞI TẠO
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultModal.classList.add('hidden');
    loadQuestion();
}

// HÀM TẢI CÂU HỎI
function loadQuestion() {
    // Reset trạng thái cũ
    optionsContainer.innerHTML = '';
    nextBtn.disabled = true; // Khóa nút tiếp theo khi chưa chọn
    
    // Lấy dữ liệu câu hiện tại
    const currentData = quizData[currentQuestionIndex];

    // Hiển thị text câu hỏi
    questionText.innerText = currentData.question;
    
    // Cập nhật thông số (Câu số mấy, điểm số)
    questionNumberSpan.innerText = `Câu ${currentQuestionIndex + 1}/${quizData.length}`;
    scoreSpan.innerText = `Điểm: ${score}`;
    
    // Cập nhật thanh tiến trình
    const progressPercent = ((currentQuestionIndex) / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Tạo danh sách đáp án
    for (const [key, value] of Object.entries(currentData.options)) {
        const div = document.createElement('div');
        div.classList.add('option-item');
        div.innerText = `${key}. ${value}`;
        
        // Gắn sự kiện click
        div.addEventListener('click', () => checkAnswer(key, div, currentData.answer));
        
        optionsContainer.appendChild(div);
    }
}

// HÀM KIỂM TRA ĐÁP ÁN
function checkAnswer(selectedKey, selectedElement, correctKey) {
    // Ngăn người dùng chọn lại
    const allOptions = optionsContainer.children;
    for (let option of allOptions) {
        option.classList.add('disabled');
        // Hiển thị đáp án đúng (nếu người dùng chọn sai thì vẫn hiện cái đúng để học)
        if (option.innerText.startsWith(correctKey)) {
            option.classList.add('correct');
        }
    }

    // Xử lý đúng/sai cho lựa chọn của người dùng
    if (selectedKey === correctKey) {
        // selectedElement.classList.add('correct'); // Đã xử lý ở vòng lặp trên
        score++;
        scoreSpan.innerText = `Điểm: ${score}`;
    } else {
        selectedElement.classList.add('wrong');
    }

    // Mở khóa nút tiếp theo
    nextBtn.disabled = false;
}

// SỰ KIỆN NÚT TIẾP THEO
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// HÀM HIỂN THỊ KẾT QUẢ
function showResult() {
    resultModal.classList.remove('hidden');
    finalScoreSpan.innerText = `${score}/${quizData.length}`;
    progressBar.style.width = '100%';
}

// CHẠY CHƯƠNG TRÌNH
startQuiz();