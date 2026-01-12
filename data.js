/**
 * DATA.JS - KHO DỮ LIỆU CHUẨN (Đã sửa lỗi hiển thị)
 */

const subjectsData = {
    // --- MÔN 1: TƯ DUY HỆ THỐNG ---
    "TDHT": {
        name: "Tư duy Hệ thống",
        icon: "🧠",
        description: "335 câu hỏi trắc nghiệm tư duy & kỹ thuật.",
        questions: [
            // ======================================================
            // 👇 BƯỚC QUAN TRỌNG: DÁN 335 CÂU CŨ CỦA BẠN VÀO ĐÂY 👇
            // const quizData = [
  {
    "id": 1,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Khi xem xét một trường đại học như một hệ thống, yếu tố nào sau đây đóng vai trò là \"môi trường\" của hệ thống đó?",
    "options": {
      "A": "Giảng viên và sinh viên.",
      "B": "Cơ sở vật chất (phòng học, thư viện).",
      "C": "Quy chế đào tạo và chương trình học.",
      "D": "Xã hội, thị trường lao động và các trường khác."
    },
    "answer": "D"
  },
  {
    "id": 2,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Mục đích chính của việc phân loại hệ thống (ví dụ: hệ thống mở/đóng, tự nhiên/nhân tạo) là gì?",
    "options": {
      "A": "Để làm cho việc nghiên cứu trở nên phức tạp hơn.",
      "B": "Để giúp hiểu rõ hơn đặc điểm của từng loại hệ thống.",
      "C": "Để chứng minh rằng mọi hệ thống đều giống nhau.",
      "D": "Để xác định hệ thống nào là quan trọng nhất."
    },
    "answer": "B"
  },
  {
    "id": 3,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Trong các bước phát triển một hệ thống phần mềm quản lý thư viện, việc \"phỏng vấn thủ thư và sinh viên về nhu cầu sử dụng\" thuộc giai đoạn nào?",
    "options": {
      "A": "Thiết kế chi tiết.",
      "B": "Kiểm thử hệ thống.",
      "C": "Phân tích yêu cầu.",
      "D": "Bảo trì hệ thống."
    },
    "answer": "C"
  },
  {
    "id": 4,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Khi xem xét một chiếc xe đạp như một hệ thống, bộ phận nào thể hiện rõ nhất sự \"tương tác\" giữa các thành phần để tạo ra chuyển động?",
    "options": {
      "A": "Yên xe và tay lái.",
      "B": "Bàn đạp, xích và bánh xe sau.",
      "C": "Khung xe và bánh xe trước.",
      "D": "Chuông xe và đèn xe."
    },
    "answer": "B"
  },
  {
    "id": 5,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Việc mô tả một hệ thống bằng sơ đồ khối (block diagram) giúp ích chủ yếu cho việc gì?",
    "options": {
      "A": "Làm cho hệ thống trông phức tạp hơn.",
      "B": "Che giấu các thành phần quan trọng của hệ thống.",
      "C": "Trực quan hóa các thành phần chính và mối liên kết giữa chúng.",
      "D": "Tính toán chi phí vận hành hệ thống."
    },
    "answer": "C"
  },
  {
    "id": 6,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Giai đoạn \"Kiểm thử\" (Testing) trong quá trình phát triển một hệ thống phần mềm nhằm mục đích gì?",
    "options": {
      "A": "Thu thập yêu cầu từ người dùng.",
      "B": "Thiết kế giao diện đồ họa.",
      "C": "Viết mã lập trình cho các chức năng.",
      "D": "Phát hiện lỗi và đảm bảo hệ thống hoạt động đúng yêu cầu."
    },
    "answer": "D"
  },
  {
    "id": 7,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Khi xem xét cơ thể con người như một hệ thống, hệ tiêu hóa (dạ dày, ruột,...) có thể được coi là gì?",
    "options": {
      "A": "Môi trường của hệ thống.",
      "B": "Một hệ thống con (subsystem).",
      "C": "Ranh giới của hệ thống.",
      "D": "Mục tiêu duy nhất của hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 8,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Đặc tính \"nổi trội\" (emergence) của một hệ thống có nghĩa là gì?",
    "options": {
      "A": "Hệ thống luôn hoạt động hiệu quả hơn mong đợi.",
      "B": "Các thành phần riêng lẻ có thể dự đoán được hành vi của toàn hệ thống.",
      "C": "Hệ thống có những đặc tính hoặc hành vi tổng thể mà các thành phần riêng lẻ không có.",
      "D": "Hệ thống có khả năng tự sửa chữa khi gặp lỗi."
    },
    "answer": "C"
  },
  {
    "id": 9,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Trong các bước phát triển hệ thống, giai đoạn \"Thiết kế\" (Design) thường tạo ra sản phẩm đầu ra là gì?",
    "options": {
      "A": "Danh sách các yêu cầu chi tiết từ người dùng.",
      "B": "Bản mô tả kiến trúc, các module, giao diện và dữ liệu của hệ thống.",
      "C": "Hệ thống hoàn chỉnh đã được cài đặt và chạy thử.",
      "D": "Kế hoạch bảo trì và nâng cấp hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 10,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Một đội bóng đá bao gồm các cầu thủ, huấn luyện viên, chiến thuật thi đấu và lịch tập luyện. \"Chiến thuật thi đấu\" đóng vai trò gì trong hệ thống này?",
    "options": {
      "A": "Thành phần vật lý.",
      "B": "Môi trường bên ngoài.",
      "C": "Quy tắc tương tác và phối hợp giữa các thành phần.",
      "D": "Ranh giới của đội bóng."
    },
    "answer": "C"
  },
  {
    "id": 11,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Tại sao việc hiểu rõ \"mục đích\" của một hệ thống lại quan trọng khi phân tích nó?",
    "options": {
      "A": "Vì mục đích giúp xác định các thành phần không cần thiết.",
      "B": "Vì mục đích là tiêu chuẩn để đánh giá hiệu quả hoạt động của hệ thống.",
      "C": "Vì mục đích luôn cố định và không bao giờ thay đổi.",
      "D": "Vì mục đích cho biết hệ thống đó thuộc loại đóng hay mở."
    },
    "answer": "B"
  },
  {
    "id": 12,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Giai đoạn \"Bảo trì\" (Maintenance) trong vòng đời hệ thống thường bao gồm hoạt động nào?",
    "options": {
      "A": "Phỏng vấn người dùng để lấy yêu cầu.",
      "B": "Viết đặc tả thiết kế chi tiết.",
      "C": "Sửa lỗi, cập nhật và cải tiến hệ thống sau khi đã triển khai.",
      "D": "Lập kế hoạch tổng thể cho dự án."
    },
    "answer": "C"
  },
  {
    "id": 13,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Yếu tố nào giúp phân biệt một \"hệ thống\" với một \"tập hợp\" các đối tượng rời rạc?",
    "options": {
      "A": "Số lượng các đối tượng.",
      "B": "Kích thước của các đối tượng.",
      "C": "Sự tương tác và mối liên hệ vì một mục đích chung giữa các đối tượng.",
      "D": "Nguồn gốc hình thành của các đối tượng (tự nhiên hay nhân tạo)."
    },
    "answer": "C"
  },
  {
    "id": 14,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Trong một hệ thống quản lý bán hàng, \"dữ liệu về khách hàng và đơn hàng\" được xem là gì?",
    "options": {
      "A": "Ranh giới của hệ thống.",
      "B": "Môi trường hoạt động.",
      "C": "Đầu vào hoặc tài nguyên của hệ thống.",
      "D": "Mục tiêu cuối cùng của hệ thống."
    },
    "answer": "C"
  },
  {
    "id": 15,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Kết quả đầu ra (output) chính của hệ thống \"Trường Đại học\" là gì?",
    "options": {
      "A": "Số lượng giảng viên và nhân viên.",
      "B": "Cơ sở vật chất và trang thiết bị.",
      "C": "Sinh viên tốt nghiệp có kiến thức, kỹ năng và các công trình nghiên cứu.",
      "D": "Học phí thu được từ sinh viên."
    },
    "answer": "C"
  },
  {
    "id": 16,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Khi xem xét một dòng sông như một hệ thống, yếu tố nào sau đây thuộc về \"môi trường\" của nó?",
    "options": {
      "A": "Nước sông, cá, tôm.",
      "B": "Lòng sông, bờ sông.",
      "C": "Khí hậu khu vực, lượng mưa, hoạt động của con người xung quanh.",
      "D": "Dòng chảy của nước."
    },
    "answer": "C"
  },
  {
    "id": 17,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Việc cập nhật phần mềm diệt virus trên máy tính là một ví dụ về hoạt động nào trong vòng đời của hệ thống?",
    "options": {
      "A": "Phân tích.",
      "B": "Thiết kế.",
      "C": "Triển khai.",
      "D": "Bảo trì và vận hành."
    },
    "answer": "D"
  },
  {
    "id": 18,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Khi một công ty quyết định nâng cấp toàn bộ hệ thống máy tính đã lỗi thời, đây là ví dụ về hoạt động nào trong vòng đời hệ thống?",
    "options": {
      "A": "Phân tích yêu cầu ban đầu.",
      "B": "Vận hành hàng ngày.",
      "C": "Phát triển hoặc thay thế hệ thống.",
      "D": "Nghiên cứu thị trường."
    },
    "answer": "C"
  },
  {
    "id": 19,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Việc thay đổi cách xác định \"ranh giới\" của một hệ thống đang phân tích (ví dụ: chỉ xem xét phòng ban A hay xem xét cả sự tương tác của phòng A với phòng B) có thể dẫn đến điều gì?",
    "options": {
      "A": "Không thay đổi gì trong kết quả phân tích.",
      "B": "Có thể làm thay đổi cách hiểu vấn đề và các giải pháp tiềm năng.",
      "C": "Luôn làm cho việc phân tích trở nên đơn giản hơn.",
      "D": "Chỉ làm tăng chi phí phân tích."
    },
    "answer": "B"
  },
  {
    "id": 20,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Hệ thống cấp bậc (hierarchy) trong các hệ thống có nghĩa là gì?",
    "options": {
      "A": "Mọi hệ thống đều có cùng một cấp độ quan trọng.",
      "B": "Các hệ thống thường được tổ chức thành các cấp độ, với các hệ thống con nằm trong các hệ thống lớn hơn.",
      "C": "Chỉ có hệ thống nhân tạo mới có cấp bậc.",
      "D": "Hệ thống cấp bậc cao hơn luôn kiểm soát hoàn toàn hệ thống cấp thấp hơn"
    },
    "answer": "B"
  },
  {
    "id": 21,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "\"Ranh giới\" của một hệ thống là gì?",
    "options": {
      "A": "Là các thành phần cấu tạo nên hệ thống.",
      "B": "Là mục tiêu mà hệ thống hướng tới.",
      "C": "Là giới hạn phân định giữa hệ thống và môi trường bên ngoài.",
      "D": "Là các quy tắc vận hành bên trong hệ thống."
    },
    "answer": "C"
  },
  {
    "id": 22,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "\"Mục tiêu\" (Purpose/Goal) của một hệ thống là gì?",
    "options": {
      "A": "Là tập hợp các thành phần của nó.",
      "B": "Là lý do tồn tại, chức năng mà hệ thống được tạo ra để thực hiện.",
      "C": "Là môi trường mà hệ thống hoạt động.",
      "D": "Là các quy tắc tương tác giữa các thành phần."
    },
    "answer": "B"
  },
  {
    "id": 23,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Hệ thống nào sau đây là ví dụ điển hình của một \"hệ thống nhân tạo\"?",
    "options": {
      "A": "Một khu rừng nhiệt đới.",
      "B": "Hệ thống sông ngòi.",
      "C": "Một chiếc máy tính.",
      "D": "Một đàn kiến."
    },
    "answer": "C"
  },
  {
    "id": 24,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Yếu tố nào giúp phân biệt một \"hệ thống động\" (dynamic system) với một \"hệ thống tĩnh\" (static system)?",
    "options": {
      "A": "Số lượng thành phần.",
      "B": "Kích thước của hệ thống.",
      "C": "Trạng thái của hệ thống thay đổi theo thời gian.",
      "D": "Nguồn gốc tự nhiên hay nhân tạo."
    },
    "answer": "C"
  },
  {
    "id": 25,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Theo định nghĩa, yếu tố nào KHÔNG phải là một trong ba yếu tố chính hình thành nên một hệ thống?",
    "options": {
      "A": "Tập hợp các phần tử.",
      "B": "Mối quan hệ giữa các phần tử.",
      "C": "Kích thước của các phần tử.",
      "D": "Thể thống nhất có chức năng, mục tiêu riêng."
    },
    "answer": "C"
  },
  {
    "id": 26,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Đặc điểm nào của hệ thống nói lên rằng hệ thống luôn biến đổi, phát triển theo thời gian để thích nghi với môi trường?",
    "options": {
      "A": "Tính tổng thể.",
      "B": "Tính mục đích.",
      "C": "Tính động.",
      "D": "Tính cấu trúc."
    },
    "answer": "C"
  },
  {
    "id": 27,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Khi nói \"con người không thể chia nhỏ hơn phần tử đó\" trong việc xác định phần tử của hệ thống, điều này có nghĩa là gì?",
    "options": {
      "A": "Phần tử đó là đơn giản nhất trong tự nhiên.",
      "B": "Phần tử là đơn vị nhỏ nhất có ý nghĩa trong bối cảnh phân tích hệ thống đó.",
      "C": "Phần tử đó không có cấu tạo bên trong.",
      "D": "Phần tử đó phải có kích thước rất nhỏ."
    },
    "answer": "B"
  },
  {
    "id": 28,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Hiện tượng \"tính trội\" của hệ thống có nghĩa là:",
    "options": {
      "A": "Hệ thống luôn lớn hơn tổng các bộ phận riêng lẻ cộng lại một cách đơn thuần.",
      "B": "Mỗi phần tử trong hệ thống đều có tính năng vượt trội.",
      "C": "Hệ thống có khả năng tự sao chép.",
      "D": "Hệ thống luôn hoạt động mà không cần năng lượng đầu vào."
    },
    "answer": "A"
  },
  {
    "id": 29,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Nếu một hệ thống lớn bắt buộc các hệ thống con và các phần tử của mình hoạt động theo một quy chế không hợp lý trong thời gian dài, điều gì có thể xảy ra?",
    "options": {
      "A": "Tính trội của hệ thống ngày càng tăng.",
      "B": "Hệ thống trở nên linh hoạt hơn.",
      "C": "Hệ thống trở thành \"hệ thống bị cưỡng bức\" và tính trội dần bị triệt tiêu.",
      "D": "Hệ thống sẽ tự động điều chỉnh quy chế cho hợp lý."
    },
    "answer": "C"
  },
  {
    "id": 30,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Trong các đặc trưng của hệ thống, \"tính nhất thể\" thể hiện qua khía cạnh nào sau đây?",
    "options": {
      "A": "Hệ thống chỉ bao gồm các phần tử giống hệt nhau.",
      "B": "Hệ thống luôn tách biệt hoàn toàn với môi trường.",
      "C": "Sự thống nhất của các yếu tố tạo nên hệ thống và mối quan hệ mật thiết với môi trường.",
      "D": "Hệ thống có khả năng thay đổi mục tiêu một cách ngẫu nhiên."
    },
    "answer": "C"
  },
  {
    "id": 31,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Trong cấu trúc phân lớp của hệ thống (Phần tử → Module → Phân hệ → Hệ thống), \"Module\" được hiểu là gì?",
    "options": {
      "A": "Là tế bào nhỏ nhất của hệ thống.",
      "B": "Là tập hợp các phần tử liên kết cận kề để tạo thành một thao tác xác định.",
      "C": "Là tập hợp của một số module nhằm thực hiện một mục tiêu con.",
      "D": "Là một tập hợp các phần tử, sắp xếp, liên hệ theo quy luật và thực hiện chức năng nhất định."
    },
    "answer": "B"
  },
  {
    "id": 32,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "\"Đầu vào\" (Input) của một hệ thống là gì?",
    "options": {
      "A": "Là kết quả cuối cùng mà hệ thống tạo ra.",
      "B": "Là bất kỳ những gì mà môi trường có thể tác động vào hệ thống.",
      "C": "Là trạng thái mong đợi của hệ thống.",
      "D": "Là hình thức cấu tạo bên trong của hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 33,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Một công thức toán học (ví dụ: E=mc2) được phân loại là loại hệ thống nào?",
    "options": {
      "A": "Hệ thống cụ thể.",
      "B": "Hệ thống hỗn hợp.",
      "C": "Hệ thống tự nhiên.",
      "D": "Hệ thống trừu tượng."
    },
    "answer": "D"
  },
  {
    "id": 34,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Hệ thống nào sau đây được coi là một \"hệ thống đóng\" (trong lý thuyết)?",
    "options": {
      "A": "Một cơ thể sống.",
      "B": "Một doanh nghiệp.",
      "C": "Một hệ thống không có bất kỳ tương tác nào với môi trường xung quanh nó.",
      "D": "Một hệ sinh thái."
    },
    "answer": "C"
  },
  {
    "id": 35,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Sự khác biệt cơ bản giữa \"hệ thống tất định\" và \"hệ thống xác suất\" là gì?",
    "options": {
      "A": "Hệ thống tất định luôn do con người tạo ra, còn hệ thống xác suất là tự nhiên.",
      "B": "Hệ thống tất định có kết quả đầu ra luôn giống nhau với cùng một đầu vào, còn hệ thống xác suất thì không.",
      "C": "Hệ thống tất định luôn đơn giản, còn hệ thống xác suất luôn phức tạp.",
      "D": "Hệ thống tất định không có mục tiêu, còn hệ thống xác suất luôn có mục tiêu."
    },
    "answer": "B"
  },
  {
    "id": 36,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Một \"hệ thống tự tổ chức\" có đặc điểm nổi bật nào?",
    "options": {
      "A": "Luôn cần sự điều khiển từ bên ngoài để hoạt động.",
      "B": "Tự thay đổi và hoàn chỉnh cơ cấu của mình trong quá trình hoạt động.",
      "C": "Có cấu trúc cố định và không bao giờ thay đổi.",
      "D": "Chỉ tồn tại trong môi trường nhân tạo."
    },
    "answer": "B"
  },
  {
    "id": 37,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Mục tiêu chính của một \"dự án phát triển hệ thống\" là gì?",
    "options": {
      "A": "Tiêu tốn càng nhiều nguồn lực càng tốt.",
      "B": "Kéo dài thời gian thực hiện dự án.",
      "C": "Đạt được một tình huống hoặc trạng thái mong muốn trong tương lai thông qua việc tạo ra một thực thể mới.",
      "D": "Sao chép y hệt một hệ thống đã có sẵn."
    },
    "answer": "C"
  },
  {
    "id": 38,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Trong câu chuyện giữa Microsoft Zune và Apple iPod, yếu tố quan trọng giúp iPod thành công hơn là gì (theo quan điểm tư duy hệ thống)?",
    "options": {
      "A": "Zune có thiết kế đẹp hơn.",
      "B": "Microsoft không có đủ nguồn lực tài chính.",
      "C": "Apple đã phát triển một hệ thống hỗ trợ hoàn chỉnh (iTunes) giúp người dùng dễ dàng sử dụng sản phẩm.",
      "D": "Zune có nhiều tính năng kỹ thuật hơn iPod."
    },
    "answer": "C"
  },
  {
    "id": 39,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Trong 7 giai đoạn phát triển hệ thống phần mềm, giai đoạn nào tập trung vào việc thiết kế giao diện người dùng (GUI) dựa trên góc nhìn của người sử dụng?",
    "options": {
      "A": "Định nghĩa yêu cầu.",
      "B": "Thiết kế cơ bản.",
      "C": "Thiết kế chi tiết.",
      "D": "Lập trình."
    },
    "answer": "C"
  },
  {
    "id": 40,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Mục đích của \"Kiểm thử đơn vị\" (Unit test) trong phát triển phần mềm là gì?",
    "options": {
      "A": "Kiểm tra toàn bộ hệ thống sau khi tích hợp.",
      "B": "Đảm bảo phần mềm đáp ứng yêu cầu của người dùng cuối.",
      "C": "Kiểm tra từng chức năng riêng lẻ của chương trình để đảm bảo nó chạy đúng như thiết kế.",
      "D": "Kiểm tra khả năng tương tác giữa các module đã được tích hợp."
    },
    "answer": "C"
  },
  {
    "id": 41,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Bước đầu tiên và quan trọng nhất trong 5 bước để hình thành tư duy logic là gì?",
    "options": {
      "A": "Giai đoạn ứng dụng.",
      "B": "Giai đoạn phân tích – đánh giá.",
      "C": "Tăng khả năng ghi nhớ.",
      "D": "Giai đoạn sáng tạo."
    },
    "answer": "C"
  },
  {
    "id": 42,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Mục tiêu cuối cùng của việc \"phân tích hệ thống\" là gì?",
    "options": {
      "A": "Làm cho hệ thống trở nên phức tạp hơn.",
      "B": "Tối ưu hóa hiệu suất của hệ thống để đáp ứng tốt hơn nhu cầu người dùng và tổ chức.",
      "C": "Thay thế hoàn toàn hệ thống cũ bằng một hệ thống mới.",
      "D": "Giảm thiểu sự tương tác giữa các thành phần trong hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 43,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Trong các bước phân tích hệ thống, việc \"đánh giá các khía cạnh từ kỹ thuật, vận hành đến tài chính để xác định tính khả thi của giải pháp\" thuộc bước nào?",
    "options": {
      "A": "Xác định vấn đề.",
      "B": "Thu thập yêu cầu.",
      "C": "Nghiên cứu tính khả thi của hệ thống.",
      "D": "Xác định phạm vi của hệ thống."
    },
    "answer": "C"
  },
  {
    "id": 44,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Yêu cầu nào sau đây thuộc nhóm \"yêu cầu phi chức năng\" khi thiết kế hệ thống?",
    "options": {
      "A": "Hệ thống phải cho phép người dùng đăng ký tài khoản.",
      "B": "Hệ thống phải có khả năng tính toán tổng doanh thu.",
      "C": "Hệ thống phải đảm bảo thời gian phản hồi dưới 2 giây.",
      "D": "Hệ thống phải có chức năng tìm kiếm sản phẩm."
    },
    "answer": "C"
  },
  {
    "id": 45,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Quan điểm hệ thống xuất phát từ nhu cầu nào?",
    "options": {
      "A": "Nghiên cứu các hiện tượng đơn giản, dễ hiểu.",
      "B": "Nghiên cứu các hiện tượng phức tạp mà phương pháp phân tích truyền thống không giải quyết hiệu quả.",
      "C": "Giảm thiểu sự tương tác giữa các nhà khoa học.",
      "D": "Chứng minh rằng mọi thứ đều hoạt động độc lập."
    },
    "answer": "B"
  },
  {
    "id": 46,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Bước đầu tiên và quan trọng nhất của phương pháp nghiên cứu hệ thống là gì?",
    "options": {
      "A": "Mô hình hóa hệ thống.",
      "B": "Triển khai giải pháp.",
      "C": "Xác định vấn đề một cách chính xác.",
      "D": "Đánh giá và kiểm tra kết quả."
    },
    "answer": "C"
  },
  {
    "id": 47,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Việc sử dụng \"Sơ đồ luồng dữ liệu\" (Data Flow Diagram) trong mô hình hóa hệ thống nhằm mục đích gì?",
    "options": {
      "A": "Miêu tả chi phí phát triển hệ thống.",
      "B": "Miêu tả luồng thông tin giữa các thành phần trong hệ thống.",
      "C": "Hiển thị cấu trúc phân cấp nhân sự trong tổ chức.",
      "D": "Dự đoán các rủi ro tiềm ẩn của dự án."
    },
    "answer": "B"
  },
  {
    "id": 48,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Tính \"cấu trúc\" của hệ thống thể hiện điều gì?",
    "options": {
      "A": "Hệ thống luôn thay đổi không theo quy luật.",
      "B": "Hệ thống có các thành phần và các cấp bậc được tổ chức rõ ràng.",
      "C": "Hệ thống không tương tác với môi trường bên ngoài.",
      "D": "Hệ thống chỉ có một mục đích duy nhất."
    },
    "answer": "B"
  },
  {
    "id": 49,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "Điều gì xảy ra khi các quy chế trong một hệ thống lớn không hợp lý và các hệ thống con buộc phải tuân theo trong thời gian dài?",
    "options": {
      "A": "Tính trội của hệ thống được củng cố và phát triển mạnh mẽ hơn.",
      "B": "Hệ thống trở nên linh hoạt hơn trong việc thích ứng với môi trường.",
      "C": "Tính trội của hệ thống dần bị triệt tiêu và hệ thống có nguy cơ trở thành \"hệ thống bị cưỡng bức\".",
      "D": "Các hệ thống con sẽ tự động tách ra khỏi hệ thống lớn để hoạt động độc lập."
    },
    "answer": "C"
  },
  {
    "id": 50,
    "category": "Phần 1: Tổng quan về Hệ thống",
    "question": "\"Tính nhất thể\" của hệ thống KHÔNG thể hiện qua khía cạnh nào sau đây?",
    "options": {
      "A": "Sự thống nhất của các yếu tố tạo nên hệ thống.",
      "B": "Mối quan hệ mật thiết của hệ thống với những yếu tố thuộc về môi trường.",
      "C": "Khả năng hệ thống tự thay đổi mục tiêu một cách ngẫu nhiên để thích ứng.",
      "D": "Tính nhất thể của hệ thống có được là nhờ quản lý, tổ chức và liên kết các bộ phận."
    },
    "answer": "C"
  },
  {
    "id": 51,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Trong cấu trúc phân lớp của hệ thống (Phần tử → Module → Phân hệ → Hệ thống), \"Phân hệ\" (Subsystem) được hiểu là gì?",
    "options": {
      "A": "Là đơn vị nhỏ nhất không thể chia nhỏ hơn nữa trong hệ thống.",
      "B": "Là tập hợp các phần tử liên kết cận kề để tạo thành một thao tác xác định.",
      "C": "Là tập hợp của một số module nhằm hướng tới thực hiện một công việc, một mục tiêu con được xác định trong hệ thống.",
      "D": "Là toàn bộ tập hợp các phần tử và mối liên kết thực hiện chức năng chính của hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 52,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Môi trường của một hệ thống KHÔNG bao gồm yếu tố nào sau đây?",
    "options": {
      "A": "Các yếu tố nằm ngoài hệ thống và có ảnh hưởng đến kết quả hoạt động của hệ thống.",
      "B": "Các yếu tố mà hệ thống có thể tác động trở lại.",
      "C": "Các thành phần cấu trúc bên trong và các mối liên kết giữa chúng.",
      "D": "Người dùng tin và môi trường thông tin của tổ chức (đối với hệ thống thông tin)."
    },
    "answer": "C"
  },
  {
    "id": 53,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Sự khác biệt cơ bản giữa \"hệ thống tự nhiên\" và \"hệ thống nhân tạo\" là gì?",
    "options": {
      "A": "Hệ thống tự nhiên luôn đơn giản hơn hệ thống nhân tạo.",
      "B": "Hệ thống nhân tạo luôn có mục tiêu rõ ràng, còn hệ thống tự nhiên thì không.",
      "C": "Hệ thống tự nhiên hình thành qua quá trình tiến hóa tự nhiên, còn hệ thống nhân tạo do con người tạo ra.",
      "D": "Hệ thống nhân tạo không tương tác với môi trường, còn hệ thống tự nhiên thì có."
    },
    "answer": "C"
  },
  {
    "id": 54,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Một hệ thống được coi là \"hệ thống hỗn hợp\" khi nào?",
    "options": {
      "A": "Chỉ bao gồm các khái niệm liên hệ với nhau.",
      "B": "Chỉ bao gồm các phần tử vật chất.",
      "C": "Bao gồm cả các phần tử trừu tượng, vật chất và có thể cả con người.",
      "D": "Là hệ thống có kích thước rất lớn và phức tạp."
    },
    "answer": "C"
  },
  {
    "id": 55,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Tại sao việc xác định các \"phần tử\" của hệ thống một cách hợp lý lại quan trọng trong nghiên cứu hệ thống?",
    "options": {
      "A": "Vì phần tử luôn là đơn vị phức tạp nhất của hệ thống.",
      "B": "Vì giúp làm cho vấn đề nghiên cứu trở nên rõ ràng, tránh mất thời gian và nguồn lực không cần thiết.",
      "C": "Vì một hệ thống chỉ cần một phần tử duy nhất để hoạt động.",
      "D": "Vì các phần tử không bao giờ tương tác với nhau."
    },
    "answer": "B"
  },
  {
    "id": 56,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "\"Tính hướng đích\" của một hệ thống có nghĩa là gì?",
    "options": {
      "A": "Hệ thống luôn đạt được mục tiêu một cách dễ dàng.",
      "B": "Hệ thống luôn có xu hướng tìm đến một mục tiêu và một trạng thái cân bằng nào đó.",
      "C": "Hệ thống có nhiều mục tiêu mâu thuẫn nhau.",
      "D": "Mục tiêu của hệ thống luôn do môi trường bên ngoài áp đặt."
    },
    "answer": "B"
  },
  {
    "id": 57,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Trong quy trình phát triển một hệ thống, giai đoạn \"Đánh giá rủi ro\" nhằm mục đích gì?",
    "options": {
      "A": "Chỉ để xác định các nguồn lực cần thiết cho dự án.",
      "B": "Để xác định, phân tích các nguy cơ có thể ảnh hưởng đến sự thành công của hệ thống và đưa ra biện pháp phòng ngừa.",
      "C": "Chỉ thực hiện sau khi hệ thống đã được triển khai hoàn toàn.",
      "D": "Để đào tạo lực lượng thực hiện dự án."
    },
    "answer": "B"
  },
  {
    "id": 58,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "\"Tính trội\" của một hệ thống phần mềm quản lý thư viện có thể được thể hiện qua việc nào sau đây?",
    "options": {
      "A": "Giao diện người dùng được thiết kế đẹp mắt.",
      "B": "Khả năng tìm kiếm sách nhanh chóng, quản lý mượn trả hiệu quả, tạo báo cáo thống kê tự động – những điều mà việc quản lý thủ công riêng lẻ khó đạt được.",
      "C": "Số lượng dòng code của phần mềm.",
      "D": "Ngôn ngữ lập trình được sử dụng để phát triển."
    },
    "answer": "B"
  },
  {
    "id": 59,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Trong các bước phân tích hệ thống, việc \"phân chia hệ thống thành các hệ con, phân tích vị trí, chức năng của chúng\" giúp ích gì?",
    "options": {
      "A": "Làm cho hệ thống trở nên phức tạp hơn để nghiên cứu.",
      "B": "Đơn giản hóa việc nghiên cứu bằng cách bỏ qua các hệ con.",
      "C": "Hiểu rõ hơn cấu trúc, vai trò và sự tương tác của từng bộ phận trong tổng thể hệ thống.",
      "D": "Chỉ để xác định các yếu tố đầu vào và đầu ra của hệ thống."
    },
    "answer": "C"
  },
  {
    "id": 60,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Mục tiêu của giai đoạn \"Thiết kế cơ bản\" trong phát triển hệ thống phần mềm là gì?",
    "options": {
      "A": "Viết mã nguồn chi tiết cho từng chức năng của hệ thống.",
      "B": "Kiểm thử toàn bộ hệ thống để đảm bảo không còn lỗi.",
      "C": "Thiết kế giao diện người dùng (UI) dựa trên yêu cầu đã định nghĩa, xác định ngôn ngữ lập trình và các thành phần kỹ thuật chính.",
      "D": "Bảo trì và sửa lỗi cho hệ thống sau khi phát hành."
    },
    "answer": "C"
  },
  {
    "id": 61,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Một \"hệ thống tự điều chỉnh\" có khả năng gì khi đối mặt với tác động từ môi trường?",
    "options": {
      "A": "Hoàn toàn không bị ảnh hưởng bởi môi trường.",
      "B": "Thay đổi toàn bộ cấu trúc cơ bản của mình để thích nghi.",
      "C": "Giữ được đặc trưng chủ yếu của cơ cấu bằng cách tự biến đổi trong giới hạn cho phép hoặc tác động trở lại để điều chỉnh môi trường.",
      "D": "Luôn cần sự can thiệp từ bên ngoài để duy trì hoạt động."
    },
    "answer": "C"
  },
  {
    "id": 62,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Khi nói \"Hệ thống thì lớn hơn tổng cộng các bộ phận cấu tạo nên nó\", điều này ám chỉ đến đặc tính nào của hệ thống?",
    "options": {
      "A": "Tính phức tạp.",
      "B": "Tính mục đích.",
      "C": "Tính trội, là sản phẩm của sự tương tác giữa các bộ phận.",
      "D": "Tính cấu trúc."
    },
    "answer": "C"
  },
  {
    "id": 63,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Trong việc phát triển một hệ thống tư duy logic, giai đoạn \"ứng dụng\" (biết vận dụng vào thực tế) có vai trò gì?",
    "options": {
      "A": "Chỉ để ghi nhớ các khái niệm lý thuyết.",
      "B": "Để kiểm tra tính đúng đắn của các giả thuyết một cách trừu tượng.",
      "C": "Để củng cố kiến thức và phát triển kỹ năng thông qua trải nghiệm thực tế và giải quyết vấn đề cụ thể.",
      "D": "Là giai đoạn cuối cùng, không cần thiết sau khi đã hiểu lý thuyết."
    },
    "answer": "C"
  },
  {
    "id": 64,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Yêu cầu nào sau đây được xem là \"yêu cầu phi chức năng\" khi thiết kế một hệ thống website bán hàng?",
    "options": {
      "A": "Hệ thống cho phép người dùng thêm sản phẩm vào giỏ hàng.",
      "B": "Hệ thống phải xử lý thanh toán trực tuyến an toàn.",
      "C": "Hệ thống phải có khả năng tải trang trong vòng 3 giây ngay cả khi có 1000 người truy cập đồng thời.",
      "D": "Hệ thống cho phép quản trị viên quản lý danh mục sản phẩm."
    },
    "answer": "C"
  },
  {
    "id": 65,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Khi phân tích hệ thống giao thông đô thị, việc xem xét mối quan hệ giữa mật độ phương tiện, hạ tầng đường sá, ý thức người tham gia giao thông và chính sách quản lý là thể hiện quan điểm nghiên cứu nào?",
    "options": {
      "A": "Quan điểm tập trung vào từng yếu tố riêng lẻ.",
      "B": "Quan điểm hệ thống, xem xét tổng thể và tương tác.",
      "C": "Quan điểm lịch sử, chỉ tập trung vào quá khứ.",
      "D": "Quan điểm kinh tế, chỉ xem xét chi phí và lợi ích."
    },
    "answer": "B"
  },
  {
    "id": 66,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Khi xem xét hệ thống \"Quản lý chuỗi cung ứng\" của một siêu thị, việc phân tích dòng chảy hàng hóa từ nhà cung cấp đến kho, đến kệ hàng và tới tay người tiêu dùng là tập trung vào khía cạnh nào?",
    "options": {
      "A": "Chỉ các thành phần tĩnh (nhà kho, cửa hàng).",
      "B": "Các mối liên kết và luồng (flow) hoạt động trong hệ thống.",
      "C": "Chỉ yếu tố con người (nhân viên, khách hàng).",
      "D": "Chỉ chi phí tồn kho."
    },
    "answer": "B"
  },
  {
    "id": 67,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Khi phân tích hệ thống \"Quản lý một bệnh viện\", việc xem xét luồng thông tin bệnh án giữa các khoa phòng, lịch trình làm việc của bác sĩ, và quy trình tiếp nhận bệnh nhân là tập trung vào loại mối liên kết nào?",
    "options": {
      "A": "Chỉ các mối liên kết vật lý (thiết bị y tế).",
      "B": "Các mối liên kết thông tin và quy trình công việc.",
      "C": "Chỉ các mối liên kết tài chính (viện phí).",
      "D": "Chỉ mối liên kết giữa bệnh viện và môi trường bên ngoài (Bộ Y tế)."
    },
    "answer": "B"
  },
  {
    "id": 68,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Khi mô hình hóa một hệ thống phức tạp như nền kinh tế, việc lựa chọn đưa yếu tố nào vào mô hình và bỏ qua yếu tố nào là một ví dụ của việc xác định:",
    "options": {
      "A": "Mục đích của hệ thống.",
      "B": "Ranh giới của mô hình (model boundary).",
      "C": "Các hệ thống con.",
      "D": "Môi trường hoàn toàn tách biệt."
    },
    "answer": "B"
  },
  {
    "id": 69,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Một hệ thống \"mở\" khác với hệ thống \"đóng\" ở đặc điểm cơ bản nào?",
    "options": {
      "A": "Hệ thống mở có mục tiêu rõ ràng hơn hệ thống đóng.",
      "B": "Hệ thống mở không có ranh giới với môi trường.",
      "C": "Hệ thống mở có sự trao đổi vật chất, năng lượng hoặc thông tin với môi trường bên ngoài.",
      "D": "Hệ thống đóng luôn phức tạp hơn hệ thống mở."
    },
    "answer": "C"
  },
  {
    "id": 70,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Hệ thống điều khiển nhiệt độ (thermostat) trong máy lạnh là một ví dụ điển hình của hệ thống có đặc tính gì?",
    "options": {
      "A": "Hệ thống hoàn toàn mở, không có điều khiển.",
      "B": "Hệ thống có vòng lặp phản hồi (feedback loop) để tự điều chỉnh.",
      "C": "Hệ thống chỉ bao gồm các thành phần vật lý, không có thông tin.",
      "D": "Hệ thống chỉ hoạt động theo một chiều, không có phản hồi."
    },
    "answer": "B"
  },
  {
    "id": 71,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Tại sao việc phân biệt rõ ràng giữa \"hệ thống\" và \"môi trường\" lại quan trọng khi phân tích?",
    "options": {
      "A": "Vì môi trường không bao giờ tác động đến hệ thống.",
      "B": "Giúp xác định phạm vi phân tích, những yếu tố nào có thể kiểm soát (bên trong) và những yếu tố nào là ngữ cảnh (bên ngoài).",
      "C": "Để chứng minh rằng mọi hệ thống đều là hệ thống đóng.",
      "D": "Vì hệ thống luôn lớn hơn môi trường của nó."
    },
    "answer": "B"
  },
  {
    "id": 72,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Sự khác biệt giữa \"phân tích hệ thống\" (systems analysis) và \"thiết kế hệ thống\" (systems design) là gì?",
    "options": {
      "A": "Phân tích tập trung vào việc tạo ra cái mới, thiết kế tập trung vào việc hiểu cái cũ.",
      "B": "Phân tích tập trung vào việc hiểu hệ thống hiện tại hoặc vấn đề cần giải quyết, thiết kế tập trung vào việc xác định giải pháp hoặc hệ thống mới sẽ như thế nào.",
      "C": "Không có sự khác biệt nào đáng kể.",
      "D": "Phân tích do người kinh doanh làm, thiết kế do kỹ sư làm."
    },
    "answer": "C"
  },
  {
    "id": 73,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Khi phân tích một hệ sinh thái hồ nước, việc xem xét mối quan hệ giữa tảo, cá nhỏ, cá lớn, vi sinh vật, ánh sáng mặt trời và chất dinh dưỡng là áp dụng khái niệm nào?",
    "options": {
      "A": "Phân loại hệ thống thành phần.",
      "B": "Xác định ranh giới hệ thống.",
      "C": "Phân tích cấu trúc và sự tương tác giữa các thành phần.",
      "D": "Mô tả lịch sử hình thành hồ nước."
    },
    "answer": "C"
  },
  {
    "id": 74,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Việc xây dựng thêm nhiều đường sá để giải quyết tắc nghẽn giao thông có thể dẫn đến \"nhu cầu phát sinh\" (induced demand), tức là càng có nhiều đường thì càng thu hút nhiều xe hơn, cuối cùng vẫn dẫn đến tắc nghẽn. Đây là ví dụ về việc không xem xét vấn đề dưới góc độ nào trong tư duy hệ thống?",
    "options": {
      "A": "Góc độ chi phí xây dựng.",
      "B": "Góc độ kỹ thuật liên quan đến vật liệu xây dựng đường.",
      "C": "Góc độ tư duy hệ thống, bao gồm tính tổng thể và các mối quan hệ tương tác giữa các phần tử trong hệ thống giao thông.",
      "D": "Góc độ quản lý nhân sự và tổ chức thi công hạ tầng."
    },
    "answer": "C"
  },
  {
    "id": 75,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Một trang trại nuôi cá thâm canh, mật độ cao có thể cho năng suất cao ban đầu. Nhưng nếu không quản lý tốt, chất thải sẽ tích tụ, gây ô nhiễm nước, làm cá bệnh và chết hàng loạt. Điều này minh họa khái niệm nào trong hệ thống?",
    "options": {
      "A": "Ranh giới của hệ thống là cố định.",
      "B": "Hệ thống luôn tự cân bằng một cách hoàn hảo.",
      "C": "Sự tồn tại của các giới hạn tăng trưởng (Limits to Growth) và phản hồi tiêu cực khi vượt ngưỡng.",
      "D": "Môi trường không ảnh hưởng đến hệ thống nuôi trồng."
    },
    "answer": "C"
  },
  {
    "id": 76,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Một thành phố gặp thiên tai lớn nhưng nhanh chóng phục hồi dịch vụ điện, nước và y tế, đồng thời thích nghi với điều kiện mới để duy trì cuộc sống cho người dân. Mô tả này phản ánh đặc điểm nào của hệ thống?",
    "options": {
      "A": "Hệ thống luôn duy trì trạng thái ổn định.",
      "B": "Hệ thống có khả năng thích ứng và phục hồi để duy trì chức năng cốt lõi.",
      "C": "Hệ thống chỉ hoạt động hiệu quả khi môi trường không thay đổi.",
      "D": "Hệ thống ưu tiên tối đa hiệu quả trong ngắn hạn."
    },
    "answer": "B"
  },
  {
    "id": 77,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Phương pháp \"Phân tích và thiết kế có cấu trúc\" (Structured Analysis and Design) tập trung chủ yếu vào khía cạnh nào của hệ thống?",
    "options": {
      "A": "Các đối tượng và lớp.",
      "B": "Dòng chảy dữ liệu (data flow) và các quy trình xử lý dữ liệu.",
      "C": "Giao diện người dùng đồ họa.",
      "D": "Các vòng lặp phản hồi trong hệ thống."
    },
    "answer": "A"
  },
  {
    "id": 78,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Khi thiết kế một hệ thống quản lý giao thông thông minh (Intelligent Transportation System - ITS), việc chỉ tập trung vào việc lắp đặt thêm camera giám sát mà không xem xét hành vi của người lái xe và mật độ giao thông có thể dẫn đến hiệu quả thấp. Đây là ví dụ về việc thiếu cách tiếp cận nào trong tư duy hệ thống?",
    "options": {
      "A": "Tập trung vào các giải pháp kỹ thuật độc lập mà không xem xét các yếu tố bên ngoài.",
      "B": "Xem hệ thống như một tập hợp các phần tử tương tác với nhau, trong đó mỗi phần tử có vai trò và ảnh hưởng đến mục tiêu chung của hệ thống.",
      "C": "Loại bỏ hoàn toàn giai đoạn thu thập dữ liệu về hệ thống giao thông.",
      "D": "Chỉ áp dụng cho các hệ thống không cần sự can thiệp của con người."
    },
    "answer": "B"
  },
  {
    "id": 79,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Việc xây đập thủy điện mang lại lợi ích về năng lượng và kiểm soát lũ lụt, nhưng lại gây tác động tiêu cực đến hệ sinh thái hạ lưu, di cư của cá và đời sống người dân phải tái định cư. Việc đánh giá đầy đủ các tác động này đòi hỏi phải áp dụng quan điểm nào?",
    "options": {
      "A": "Chỉ tập trung vào lợi ích kinh tế trước mắt.",
      "B": "Xem xét vấn đề một cách cục bộ, chỉ trong phạm vi nhà máy thủy điện.",
      "C": "Áp dụng tư duy hệ thống để nhìn nhận các mối liên kết và hậu quả đa chiều, cả tích cực và tiêu cực, trong dài hạn.",
      "D": "Chỉ dựa vào các báo cáo kỹ thuật về độ an toàn của đập."
    },
    "answer": "C"
  },
  {
    "id": 80,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Việc phân tích một doanh nghiệp không chỉ dựa trên báo cáo tài chính (lợi nhuận, doanh thu) mà còn xem xét sự hài lòng của nhân viên, mức độ gắn kết của khách hàng, mối quan hệ với nhà cung cấp và tác động đến cộng đồng, là thể hiện rõ nhất quan điểm nào?",
    "options": {
      "A": "Quan điểm vi mô, chỉ tập trung vào từng giao dịch.",
      "B": "Quan điểm hệ thống, nhìn nhận doanh nghiệp như một tổng thể tương tác với nhiều yếu tố bên trong và bên ngoài.",
      "C": "Quan điểm kỹ thuật, chỉ tập trung vào quy trình sản xuất.",
      "D": "Quan điểm ngắn hạn, chỉ quan tâm đến kết quả quý gần nhất."
    },
    "answer": "B"
  },
  {
    "id": 81,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Việc áp dụng \"Tư duy vòng đời sản phẩm\" (Product Lifecycle Thinking) trong kinh doanh, xem xét từ giai đoạn nghiên cứu, thiết kế, sản xuất, sử dụng đến thải bỏ và tái chế, là một ứng dụng thực tế của quan điểm nào?",
    "options": {
      "A": "Quan điểm chỉ tập trung vào giai đoạn bán hàng.",
      "B": "Quan điểm hệ thống, nhìn nhận sản phẩm trong một chu trình khép kín và tương tác với môi trường, kinh tế, xã hội qua nhiều giai đoạn.",
      "C": "Quan điểm tài chính ngắn hạn.",
      "D": "Quan điểm kỹ thuật thuần túy, chỉ quan tâm đến tính năng sản phẩm"
    },
    "answer": "B"
  },
  {
    "id": 82,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Khi đánh giá tác động của một dự án phát triển lớn (ví dụ: xây khu công nghiệp), việc xem xét không chỉ lợi ích kinh tế (việc làm, thu nhập) mà còn cả chi phí xã hội (ô nhiễm, tắc nghẽn giao thông, mất đất nông nghiệp) và chi phí môi trường dài hạn, là áp dụng nguyên tắc nào?",
    "options": {
      "A": "Chỉ tối đa hóa lợi ích kinh tế trước mắt.",
      "B": "Tư duy hệ thống, cố gắng nhìn nhận bức tranh toàn cảnh với các chi phí và lợi ích đa dạng, ngắn hạn và dài hạn.",
      "C": "Đổ lỗi cho các quy định của chính phủ.",
      "D": "Tin rằng công nghệ sẽ giải quyết mọi vấn đề phát sinh"
    },
    "answer": "B"
  },
  {
    "id": 83,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Một công ty công nghệ phát triển một \"hệ sinh thái\" sản phẩm bao gồm điện thoại, máy tính bảng, đồng hồ thông minh và dịch vụ đám mây, tất cả đều tương tác chặt chẽ và đồng bộ dữ liệu. Sự thành công của hệ sinh thái này, vượt trội hơn so với việc bán các sản phẩm riêng lẻ, chủ yếu là nhờ vào đặc tính nào của hệ thống?",
    "options": {
      "A": "Tính mục đích rõ ràng của từng sản phẩm riêng lẻ.",
      "B": "Tính cấu trúc phân cấp đơn giản giữa các sản phẩm.",
      "C": "Tính trội (emergence) phát sinh từ sự tương tác và liên kết chặt chẽ giữa các thành phần, tạo ra giá trị lớn hơn tổng giá trị các phần.",
      "D": "Tính đóng của hệ sinh thái, ngăn cản sự tương tác với các sản phẩm của đối thủ."
    },
    "answer": "C"
  },
  {
    "id": 84,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Khi phân tích một hệ thống kinh tế - xã hội phức tạp như một quốc gia, việc một nhà phân tích chỉ tập trung vào các chỉ số kinh tế vĩ mô (GDP, lạm phát) mà bỏ qua các yếu tố văn hóa, lịch sử, và thể chế chính trị có thể dẫn đến sai lầm nào trong việc nhận định \"tính phức tạp\" và \"tính động\" của hệ thống?",
    "options": {
      "A": "Đánh giá quá cao tính ổn định và khả năng dự đoán của hệ thống.",
      "B": "Bỏ qua các yếu tố môi trường không thuộc hệ thống nên không ảnh hưởng đến phân tích.",
      "C": "Đơn giản hóa quá mức các mối quan hệ nhân quả, dẫn đến việc không nhận diện được các vòng phản hồi tiềm ẩn và các điểm bẩy quan trọng.",
      "D": "Cho rằng hệ thống là một hệ thống đóng, không chịu tác động từ các yếu tố phi kinh tế."
    },
    "answer": "C"
  },
  {
    "id": 85,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Một dự án xây dựng cầu đường bộ quy mô lớn được chia thành nhiều hệ thống con (khảo sát, thiết kế, thi công móng, thi công trụ, thi công mặt cầu, hệ thống chiếu sáng...). Việc đảm bảo các hệ thống con này hoạt động đồng bộ, đúng tiến độ và chất lượng để đạt được mục tiêu chung của dự án (\"tính trội\" của cây cầu hoàn chỉnh) đòi hỏi yếu tố nào là then chốt trong \"quy trình phát triển hệ thống\"?",
    "options": {
      "A": "Mỗi hệ thống con phải có mục tiêu tài chính riêng biệt và tối đa hóa lợi nhuận cục bộ.",
      "B": "Sự độc lập hoàn toàn của các hệ thống con để tăng tính chuyên môn hóa.",
      "C": "Một cơ chế điều khiển, phối hợp, giao tiếp và quản lý thông tin hiệu quả giữa các hệ thống con và với tổng thể dự án.",
      "D": "Ưu tiên tốc độ thi công của từng hệ thống con mà không cần quan tâm đến sự tương thích."
    },
    "answer": "C"
  },
  {
    "id": 86,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Một \"hệ thống tự tổ chức\" (self-organizing system) như một đàn kiến hoặc một thị trường tự do có khả năng thích ứng và tạo ra trật tự mà không cần một cơ quan điều khiển trung ương. Đặc điểm này thách thức quan điểm nào trong quản lý hệ thống truyền thống?",
    "options": {
      "A": "Quan điểm cho rằng mọi hệ thống đều cần có mục tiêu rõ ràng do con người đặt ra.",
      "B": "Quan điểm cho rằng sự ổn định của hệ thống chỉ có thể đạt được thông qua sự kiểm soát chặt chẽ từ trên xuống.",
      "C": "Quan điểm về sự cần thiết của việc phân cấp rạch ròi trong mọi loại hệ thống.",
      "D": "Quan điểm cho rằng các hệ thống tự nhiên luôn đơn giản hơn hệ thống nhân tạo."
    },
    "answer": "B"
  },
  {
    "id": 87,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Khi xem xét một bệnh viện là một \"hệ thống mở\", việc bệnh viện phải liên tục cập nhật các phác đồ điều trị mới từ các nghiên cứu y khoa quốc tế, đối phó với các dịch bệnh mới nổi, và đáp ứng các quy định thay đổi của Bộ Y tế, thể hiện rõ nhất khía cạnh nào của \"tính mở\"?",
    "options": {
      "A": "Chỉ sự trao đổi bệnh nhân với các bệnh viện khác.",
      "B": "Sự phụ thuộc vào nguồn cung cấp thuốc men và trang thiết bị từ bên ngoài.",
      "C": "Sự tương tác năng động và liên tục với môi trường bên ngoài (bao gồm thông tin, công nghệ, quy định, và các yếu tố xã hội) để duy trì sự tồn tại và phát triển.",
      "D": "Khả năng tự điều chỉnh nhiệt độ bên trong các phòng bệnh."
    },
    "answer": "C"
  },
  {
    "id": 88,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Sự khác biệt giữa \"tính cưỡng bức\" phát sinh từ quy chế hợp lý và \"hệ thống bị cưỡng bức\" do quy chế không hợp lý, ảnh hưởng như thế nào đến \"tính trội\" của hệ thống?",
    "options": {
      "A": "Cả hai đều làm gia tăng tính trội của hệ thống như nhau.",
      "B": "Tính cưỡng bức từ quy chế hợp lý là nguồn gốc của tính trội, trong khi hệ thống bị cưỡng bức do quy chế không hợp lý sẽ làm triệt tiêu dần tính trội.",
      "C": "Tính trội không phụ thuộc vào tính hợp lý của quy chế, mà chỉ phụ thuộc vào số lượng phần tử.",
      "D": "Hệ thống bị cưỡng bức luôn có tính trội cao hơn do sự tuân thủ tuyệt đối."
    },
    "answer": "B"
  },
  {
    "id": 89,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Trong giai đoạn \"Thiết kế chi tiết\" một hệ thống phần mềm quản lý kho, việc xác định \"cách các module lưu trữ và truy xuất dữ liệu tồn kho cụ thể, các thuật toán tối ưu hóa vị trí lưu trữ\" thuộc về việc định hình khía cạnh nào của hệ thống?",
    "options": {
      "A": "Chỉ giao diện người dùng và trải nghiệm khách hàng.",
      "B": "Các hoạt động bên trong, cấu trúc dữ liệu và logic xử lý cụ thể của các chức năng mà người dùng có thể không trực tiếp nhìn thấy.",
      "C": "Chỉ các yêu cầu về phần cứng và mạng máy tính.",
      "D": "Chỉ kế hoạch bảo trì và nâng cấp hệ thống sau này."
    },
    "answer": "B"
  },
  {
    "id": 90,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Việc một người luôn rập khuôn giải quyết vấn đề theo cách cũ, ngay cả khi nó không còn hiệu quả, thể hiện rõ nhất yếu tố nào ảnh hưởng đến tư duy?",
    "options": {
      "A": "Thiếu kiến thức chuyên môn.",
      "B": "Thói quen hoặc lối mòn tư duy.",
      "C": "Áp lực từ môi trường xung quanh.",
      "D": "Cảm xúc tiêu cực (sợ hãi, lo lắng)."
    },
    "answer": "B"
  },
  {
    "id": 91,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "\"Tư duy kỹ thuật\" nhấn mạnh điều gì nhất khi giải quyết một vấn đề?",
    "options": {
      "A": "Tìm ra giải pháp nhanh nhất có thể, bất kể hậu quả.",
      "B": "Áp dụng các nguyên lý khoa học và toán học một cách có hệ thống.",
      "C": "Chỉ dựa vào kinh nghiệm cá nhân đã có.",
      "D": "Ưu tiên các giải pháp mang lại lợi ích kinh tế tức thì."
    },
    "answer": "B"
  },
  {
    "id": 92,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Việc một người dễ dàng chấp nhận thông tin từ người có uy tín mà không cần kiểm chứng thể hiện ảnh hưởng của yếu tố nào đến tư duy?",
    "options": {
      "A": "Kinh nghiệm cá nhân.",
      "B": "Áp lực từ đám đông hoặc quyền lực.",
      "C": "Tư duy logic yếu.",
      "D": "Thiếu kiến thức nền tảng."
    },
    "answer": "B"
  },
  {
    "id": 93,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Một sinh viên kỹ thuật khi làm đồ án không chỉ quan tâm đến việc mạch điện chạy đúng, mà còn tối ưu hóa để tiết kiệm năng lượng. Điều này thể hiện đặc điểm nào của \"Tư duy kỹ thuật\"?",
    "options": {
      "A": "Chỉ tập trung vào lý thuyết suông.",
      "B": "Tìm kiếm giải pháp hiệu quả và tối ưu.",
      "C": "Làm việc độc lập, không cần tham khảo.",
      "D": "Ưu tiên tốc độ hoàn thành hơn chất lượng."
    },
    "answer": "B"
  },
  {
    "id": 94,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Tại sao việc xác định rõ \"ràng buộc\" (constraints) như thời gian, chi phí, vật liệu lại quan trọng trong tư duy kỹ thuật?",
    "options": {
      "A": "Để làm cho vấn đề trở nên khó khăn hơn.",
      "B": "Vì ràng buộc giúp định hình không gian giải pháp khả thi và thực tế.",
      "C": "Để có lý do trì hoãn dự án.",
      "D": "Vì ràng buộc thường không ảnh hưởng đến giải pháp cuối cùng."
    },
    "answer": "B"
  },
  {
    "id": 95,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Việc một người có xu hướng đánh giá quá cao khả năng của bản thân và đánh giá thấp các rủi ro tiềm ẩn là biểu hiện của thiên kiến nào?",
    "options": {
      "A": "Thiên kiến xác nhận (Confirmation bias).",
      "B": "Thiên kiến lạc quan quá mức (Optimism bias).",
      "C": "Hiệu ứng mỏ neo (Anchoring effect).",
      "D": "Tư duy theo lối mòn (Mental set)."
    },
    "answer": "B"
  },
  {
    "id": 96,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Trong giải quyết vấn đề kỹ thuật, việc sử dụng \"mô hình hóa\" (modeling) hoặc \"mô phỏng\" (simulation) giúp ích gì?",
    "options": {
      "A": "Làm cho vấn đề trở nên khó hiểu hơn.",
      "B": "Thay thế hoàn toàn việc thử nghiệm thực tế.",
      "C": "Giúp hiểu rõ hơn hành vi của hệ thống, dự đoán kết quả và thử nghiệm các giải pháp một cách an toàn, tiết kiệm.",
      "D": "Chỉ để trình bày kết quả cuối cùng."
    },
    "answer": "C"
  },
  {
    "id": 97,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Việc đặt câu hỏi \"Tại sao?\", \"Làm thế nào?\", \"Nếu... thì sao?\" thể hiện khía cạnh nào của việc rèn luyện tư duy?",
    "options": {
      "A": "Ghi nhớ thông tin.",
      "B": "Tư duy phản biện và khám phá.",
      "C": "Chấp nhận thông tin một cách thụ động.",
      "D": "Tránh né các vấn đề phức tạp."
    },
    "answer": "B"
  },
  {
    "id": 98,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Việc sẵn sàng xem xét lại quan điểm của mình khi có bằng chứng mới thuyết phục thể hiện phẩm chất nào của người có tư duy tốt?",
    "options": {
      "A": "Bảo thủ, kiên định.",
      "B": "Cởi mở và linh hoạt.",
      "C": "Thiếu chính kiến.",
      "D": "Luôn nghi ngờ mọi thứ."
    },
    "answer": "B"
  },
  {
    "id": 99,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Quá trình thiết kế kỹ thuật thường không đi theo một đường thẳng mà có sự lặp lại (iteration) - quay lại các bước trước đó để điều chỉnh dựa trên thông tin mới hoặc kết quả thử nghiệm. Điều này cho thấy tư duy kỹ thuật là một quá trình:",
    "options": {
      "A": "Cứng nhắc và cố định.",
      "B": "Luôn luôn thành công ngay lần đầu.",
      "C": "Đòi hỏi sự kiên nhẫn và khả năng học hỏi từ sai sót.",
      "D": "Chỉ dành cho những người có khả năng tiên tri"
    },
    "answer": "C"
  },
  {
    "id": 100,
    "category": "Phần 2: Đặc tính & Tư duy Kỹ thuật",
    "question": "Kỹ năng \"đặt câu hỏi đúng\" đóng vai trò gì trong quá trình tư duy và giải quyết vấn đề?",
    "options": {
      "A": "Làm chậm quá trình giải quyết vấn đề.",
      "B": "Giúp định hướng suy nghĩ, làm rõ vấn đề, khám phá các khía cạnh mới và tìm kiếm thông tin cần thiết.",
      "C": "Chỉ cần thiết khi không biết câu trả lời.",
      "D": "Thể hiện sự thiếu hiểu biết của người hỏi."
    },
    "answer": "B"
  },
  {
    "id": 101,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Trong giải quyết vấn đề kỹ thuật, việc xem xét các yếu tố như chi phí, an toàn, và tác động môi trường thể hiện điều gì?",
    "options": {
      "A": "Sự thiếu tập trung vào vấn đề chính.",
      "B": "Việc tuân thủ các quy định bắt buộc.",
      "C": "Một cách tiếp cận toàn diện và có trách nhiệm.",
      "D": "Sự chậm trễ không cần thiết trong quá trình giải quyết."
    },
    "answer": "C"
  },
  {
    "id": 102,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Việc nhận diện các giả định ngầm (underlying assumptions) trong một lập luận là một kỹ năng quan trọng của:",
    "options": {
      "A": "Ghi nhớ máy móc.",
      "B": "Tư duy phản biện.",
      "C": "Sao chép thông tin.",
      "D": "Đưa ra quyết định vội vàng."
    },
    "answer": "B"
  },
  {
    "id": 103,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Việc xem xét các khía cạnh đạo đức và trách nhiệm xã hội khi đề xuất một giải pháp kỹ thuật (ví dụ: tác động môi trường, ảnh hưởng cộng đồng) là một phần của:",
    "options": {
      "A": "Tư duy tập trung thuần túy vào lợi nhuận.",
      "B": "Tư duy kỹ thuật một cách toàn diện và có trách nhiệm.",
      "C": "Việc làm phức tạp hóa vấn đề không cần thiết.",
      "D": "Sự thiếu quyết đoán trong kỹ thuật."
    },
    "answer": "B"
  },
  {
    "id": 104,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "\"Tư duy hội tụ\" (Convergent Thinking) là quá trình tư duy nhằm mục đích gì?",
    "options": {
      "A": "Tạo ra càng nhiều ý tưởng càng tốt.",
      "B": "Phân tích, đánh giá và lựa chọn ra giải pháp tốt nhất từ các phương án đã có.",
      "C": "Khám phá các mối liên hệ ngẫu nhiên.",
      "D": "Nhìn nhận vấn đề từ nhiều góc độ khác nhau."
    },
    "answer": "B"
  },
  {
    "id": 105,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Đặc điểm nào của tư duy cho thấy nó không trực tiếp \"chạm\" vào sự vật, hiện tượng mà thông qua các khâu trung gian để phản ánh bản chất?",
    "options": {
      "A": "Tính có vấn đề.",
      "B": "Tính gián tiếp.",
      "C": "Tính khái quát.",
      "D": "Tính logic."
    },
    "answer": "B"
  },
  {
    "id": 106,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Theo lịch sử hình thành và mức độ phát triển, hình thức tư duy nào được xem là nguyên thủy nhất, gắn liền với hành động thực tiễn?",
    "options": {
      "A": "Tư duy trừu tượng.",
      "B": "Tư duy trực quan hình ảnh.",
      "C": "Tư duy trực quan hành động.",
      "D": "Tư duy lý luận."
    },
    "answer": "C"
  },
  {
    "id": 107,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Yếu tố nào sau đây KHÔNG phải là một trong những yếu tố chính ảnh hưởng trực tiếp đến tư duy được nêu trong chương?",
    "options": {
      "A": "Hệ thống phản xạ.",
      "B": "Môi trường văn hóa và xã hội.",
      "C": "Trình độ học vấn của cha mẹ.",
      "D": "Cấu trúc của hệ thống tư duy."
    },
    "answer": "C"
  },
  {
    "id": 108,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một trong những lợi ích quan trọng của việc rèn luyện tư duy là gì?",
    "options": {
      "A": "Giảm thiểu nhu cầu học hỏi kiến thức mới.",
      "B": "Tăng cường khả năng sáng tạo và giải quyết vấn đề.",
      "C": "Luôn đưa ra quyết định một cách nhanh chóng nhất.",
      "D": "Loại bỏ hoàn toàn cảm xúc khi ra quyết định."
    },
    "answer": "B"
  },
  {
    "id": 109,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Khi rèn luyện tính khách quan trong tư duy, tại sao việc xem xét cả thông tin \"nghịch\" (trái chiều) lại quan trọng?",
    "options": {
      "A": "Để chứng minh quan điểm của mình luôn đúng.",
      "B": "Để làm phức tạp thêm vấn đề.",
      "C": "Vì thông tin trái chiều thường không đáng tin cậy.",
      "D": "Vì nó có thể là \"gợi mở\" cho cách nhìn mới và phản biện hiệu quả."
    },
    "answer": "D"
  },
  {
    "id": 110,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Tư duy kỹ thuật là loại tư duy xuất hiện trong lĩnh vực nào?",
    "options": {
      "A": "Lĩnh vực nghệ thuật và văn học.",
      "B": "Lĩnh vực lao động kỹ thuật nhằm giải quyết bài toán kỹ thuật.",
      "C": "Lĩnh vực triết học và tôn giáo.",
      "D": "Lĩnh vực thể thao và giải trí."
    },
    "answer": "B"
  },
  {
    "id": 111,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Đặc điểm nào của tư duy kỹ thuật thể hiện qua việc nó gắn liền với bản vẽ kỹ thuật, quy trình công nghệ, thuật ngữ và ký hiệu kỹ thuật?",
    "options": {
      "A": "Tính tích hợp, liên ngành cao.",
      "B": "Gắn với ngôn ngữ khoa học kỹ thuật - công nghệ.",
      "C": "Tính khách quan và định lượng cao.",
      "D": "Tính chất lý thuyết thực hành."
    },
    "answer": "B"
  },
  {
    "id": 112,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Trong cấu trúc của tư duy kỹ thuật, \"đối tượng tư duy\" KHÔNG bao gồm yếu tố nào sau đây?",
    "options": {
      "A": "Các vấn đề, hiện tượng kỹ thuật.",
      "B": "Các quy trình công nghệ.",
      "C": "Các cảm xúc cá nhân không liên quan đến kỹ thuật.",
      "D": "Các hệ thống kỹ thuật."
    },
    "answer": "C"
  },
  {
    "id": 113,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Bước đầu tiên và quan trọng nhất trong tư duy giải quyết vấn đề là gì?",
    "options": {
      "A": "Lựa chọn giải pháp tốt nhất.",
      "B": "Đánh giá các phương án.",
      "C": "Phân tích vấn đề.",
      "D": "Thu thập thông tin."
    },
    "answer": "C"
  },
  {
    "id": 114,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Tư duy logic KHÔNG bao gồm đặc điểm nào sau đây?",
    "options": {
      "A": "Suy nghĩ và giải quyết vấn đề một cách có hệ thống.",
      "B": "Luôn dựa vào cảm tính và trực giác chủ quan.",
      "C": "Sử dụng các quy tắc và nguyên tắc để đưa ra suy luận đúng đắn.",
      "D": "Đưa ra quyết định thông minh và hiệu quả dựa trên suy nghĩ có hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 115,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Trong tư duy phản biện, việc \"nhìn vấn đề một cách hoài nghi tích cực, nhiều chiều, lật lại vấn đề\" nhằm mục đích gì?",
    "options": {
      "A": "Để luôn phản đối ý kiến của người khác.",
      "B": "Để phân tích độ tin cậy và nhìn nhận vấn đề một cách hợp lý.",
      "C": "Để tìm ra lỗi sai trong mọi lập luận.",
      "D": "Để kéo dài thời gian tranh luận."
    },
    "answer": "B"
  },
  {
    "id": 116,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Phương pháp tư duy nào tập trung vào việc tiếp cận vấn đề theo hướng đi ngược lại so với cách tư duy thông thường, ví dụ như suy nghĩ xem phải làm gì để KHÔNG đạt được mục tiêu?",
    "options": {
      "A": "Tư duy đơn giản hóa vấn đề.",
      "B": "Tư duy lật ngược vấn đề.",
      "C": "Tư duy mở.",
      "D": "Tư duy tích cực."
    },
    "answer": "B"
  },
  {
    "id": 117,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Lợi ích nào sau đây KHÔNG phải là lợi ích chính của \"Tư duy mở\"?",
    "options": {
      "A": "Học tập và tiếp thu kiến thức hiệu quả hơn.",
      "B": "Luôn bảo vệ quan điểm cố hữu của bản thân.",
      "C": "Nâng cao khả năng giải quyết vấn đề.",
      "D": "Thích nghi nhanh chóng với môi trường mới."
    },
    "answer": "B"
  },
  {
    "id": 118,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Yếu tố nào KHÔNG phải là một trong ba yếu tố chính thúc đẩy đổi mới sáng tạo trong tư duy kỹ thuật được nêu trong chương?",
    "options": {
      "A": "Nghiên cứu và phát triển (R&D).",
      "B": "Tinh thần khởi nghiệp.",
      "C": "Việc duy trì các quy trình truyền thống một cách nghiêm ngặt.",
      "D": "Văn hóa sáng tạo trong tổ chức."
    },
    "answer": "C"
  },
  {
    "id": 119,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Trong quy trình đổi mới sáng tạo, giai đoạn \"Phát triển nguyên mẫu\" thuộc bước nào?",
    "options": {
      "A": "Tìm kiếm ý tưởng mới.",
      "B": "Thử nghiệm và đánh giá.",
      "C": "Thực hiện và triển khai.",
      "D": "Nghiên cứu thị trường."
    },
    "answer": "B"
  },
  {
    "id": 120,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một trong những thách thức khi kết hợp tư duy kỹ thuật và đổi mới sáng tạo là gì?",
    "options": {
      "A": "Tư duy kỹ thuật luôn cản trở việc tìm ra giải pháp logic.",
      "B": "Đổi mới sáng tạo không cần đến cơ sở hạ tầng công nghệ.",
      "C": "Khó khăn trong việc cân bằng giữa tư duy logic chặt chẽ và sự linh hoạt, sáng tạo.",
      "D": "Kỹ thuật viên luôn dễ dàng thích ứng với mọi sự thay đổi."
    },
    "answer": "C"
  },
  {
    "id": 121,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "\"Tính có vấn đề\" của tư duy ngụ ý rằng tư duy chỉ thực sự được khởi động khi nào?",
    "options": {
      "A": "Khi con người có đủ mọi thông tin cần thiết về một sự vật.",
      "B": "Khi con người đối mặt với một tình huống chứa đựng mâu thuẫn nhận thức, đòi hỏi sự khám phá để đạt mục tiêu mới.",
      "C": "Khi ngôn ngữ đã phát triển đến một mức độ đủ để diễn đạt các khái niệm phức tạp.",
      "D": "Khi nhận thức cảm tính đã cung cấp đầy đủ hình ảnh trực quan về đối tượng."
    },
    "answer": "B"
  },
  {
    "id": 122,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Việc một nhà khoa học sử dụng các công thức toán học và mô hình lý thuyết để giải thích một hiện tượng vật lý mà không thể quan sát trực tiếp bằng giác quan, thể hiện đặc điểm nào của tư duy?",
    "options": {
      "A": "Tính khái quát.",
      "B": "Tính có vấn đề.",
      "C": "Tính gián tiếp.",
      "D": "Mối quan hệ chặt chẽ với nhận thức cảm tính."
    },
    "answer": "C"
  },
  {
    "id": 123,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Phân loại tư duy theo mức độ sáng tạo thành \"tư duy thuật toán\" và \"tư duy heuristic\". Sự khác biệt căn bản giữa chúng là gì?",
    "options": {
      "A": "Tư duy thuật toán luôn hiệu quả hơn tư duy heuristic trong mọi tình huống.",
      "B": "Tư duy heuristic giải quyết vấn đề theo một quy trình có sẵn, còn tư duy thuật toán thì linh hoạt.",
      "C": "Tư duy thuật toán giải quyết vấn đề theo khuôn mẫu, quy trình định sẵn; tư duy heuristic giải quyết vấn đề một cách linh hoạt, sáng tạo, không theo khuôn mẫu.",
      "D": "Tư duy heuristic chỉ áp dụng cho các vấn đề đơn giản, còn tư duy thuật toán dùng cho vấn đề phức tạp."
    },
    "answer": "C"
  },
  {
    "id": 124,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Khi rèn luyện \"tính toàn diện\" trong phân tích vấn đề, việc sử dụng công cụ 5W1H (What, When, Who, Where, Why, How) nhằm mục đích chính là gì?",
    "options": {
      "A": "Để chứng minh quan điểm của bản thân là duy nhất đúng.",
      "B": "Để nhanh chóng tìm ra giải pháp đơn giản nhất cho vấn đề.",
      "C": "Để khám phá và xác định đầy đủ các khía cạnh, mối liên hệ của vấn đề, từ đó có cái nhìn bao quát.",
      "D": "Để tập trung vào những điểm mạnh và cơ hội của vấn đề."
    },
    "answer": "C"
  },
  {
    "id": 125,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Đặc trưng \"tính chất lý thuyết thực hành\" của tư duy kỹ thuật thể hiện rõ nhất ở việc nào sau đây?",
    "options": {
      "A": "Chỉ tập trung vào việc xây dựng các mô hình lý thuyết trừu tượng.",
      "B": "Chỉ dựa vào kinh nghiệm thực hành mà không cần đến kiến thức lý thuyết.",
      "C": "Kết hợp việc vận dụng kiến thức kỹ thuật đã có với các hành động thực hành như thử nghiệm, kiểm tra, điều chỉnh.",
      "D": "Ưu tiên giải quyết vấn đề bằng các thuật toán có sẵn."
    },
    "answer": "C"
  },
  {
    "id": 126,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Quá trình tư duy kỹ thuật trong nhiệm vụ \"khảo sát - thiết kế kỹ thuật\" thường KHÔNG bao gồm hoạt động nào sau đây ở giai đoạn đầu?",
    "options": {
      "A": "Khảo sát, thu thập, phân tích dữ liệu về nhiệm vụ, đối tượng thiết kế.",
      "B": "Nghiên cứu phân tích nhiệm vụ và hình thành ý tưởng thiết kế.",
      "C": "Đóng gói và chuyển giao kết quả thiết kế cho khách hàng.",
      "D": "Đề xuất giải pháp, phác họa các phương án thiết kế."
    },
    "answer": "C"
  },
  {
    "id": 127,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Tại sao tư duy phản biện được coi là một kỹ năng quan trọng trong thời đại thông tin bùng nổ với nhiều tin giả và dữ liệu trái chiều?",
    "options": {
      "A": "Vì nó giúp người ta chấp nhận nhanh chóng mọi thông tin mới.",
      "B": "Vì nó cho phép đưa ra quyết định dựa trên cảm xúc và trực giác.",
      "C": "Vì nó giúp phân tích, đánh giá độ tin cậy của thông tin, phát hiện giả định, lỗi logic để đưa ra nhận định chính xác.",
      "D": "Vì nó khuyến khích việc tìm kiếm sự đồng thuận tuyệt đối."
    },
    "answer": "C"
  },
  {
    "id": 128,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Lợi ích của \"Tư duy lật ngược vấn đề\" (Reverse Thinking) trong giải quyết vấn đề là gì?",
    "options": {
      "A": "Luôn đảm bảo tìm ra giải pháp nhanh nhất và ít tốn kém nhất.",
      "B": "Giúp nhìn nhận vấn đề từ nhiều chiều, thoát khỏi khuôn khổ cũ để tìm ra ý tưởng mới lạ, đột phá.",
      "C": "Chỉ phù hợp với những người có tư duy cứng nhắc, không sáng tạo.",
      "D": "Luôn dẫn đến hệ quả tiêu cực nếu áp dụng không đúng cách."
    },
    "answer": "B"
  },
  {
    "id": 129,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Khi một người có \"tư duy mở\", họ thường có thái độ như thế nào trước những ý kiến trái chiều?",
    "options": {
      "A": "Hoàn toàn bác bỏ và bảo vệ quan điểm cá nhân bằng mọi giá.",
      "B": "Chỉ chấp nhận những ý kiến tương đồng với quan điểm của mình.",
      "C": "Sẵn sàng lắng nghe, thậm chí chấp nhận ý kiến trái chiều để mở rộng góc nhìn và trau dồi kiến thức.",
      "D": "Cảm thấy bị tấn công và trở nên phòng thủ."
    },
    "answer": "C"
  },
  {
    "id": 130,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Mục đích chính của việc rèn luyện \"tính nhạy bén và linh hoạt\" trong tư duy là gì?",
    "options": {
      "A": "Để luôn tuân thủ nghiêm ngặt các quy trình và kinh nghiệm đã có.",
      "B": "Để có khả năng phát hiện vấn đề kịp thời, nhìn nhận đầy đủ, sâu sắc và đưa ra nhiều phương án giải quyết.",
      "C": "Để luôn đánh giá vấn đề theo hai hướng đối lập tuyệt đối (đúng-sai, trắng-đen).",
      "D": "Để chỉ tin cậy vào những tri thức đã được mặc định trong tư duy."
    },
    "answer": "B"
  },
  {
    "id": 131,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Yếu tố nào sau đây có thể cản trở việc áp dụng tư duy kỹ thuật một cách hiệu quả trong đổi mới sáng tạo?",
    "options": {
      "A": "Việc khuyến khích đặt câu hỏi và thử nghiệm các ý tưởng mới.",
      "B": "Sự hợp tác và chia sẻ kiến thức giữa các thành viên trong nhóm.",
      "C": "Việc quá tuân thủ logic chặt chẽ, quy trình và các tiêu chuẩn đã được thiết lập mà thiếu đi sự linh hoạt.",
      "D": "Việc liên tục cập nhật kiến thức chuyên môn và các xu hướng công nghệ mới."
    },
    "answer": "C"
  },
  {
    "id": 132,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Trong cấu trúc của tư duy kỹ thuật, \"sản phẩm của quá trình tư duy\" có thể là gì?",
    "options": {
      "A": "Chỉ bao gồm các đối tượng kỹ thuật vật chất.",
      "B": "Chỉ bao gồm các thao tác tư duy như phân tích, tổng hợp.",
      "C": "Các giải pháp, ý tưởng, khái niệm mới, hoặc nhận định về một vấn đề kỹ thuật.",
      "D": "Chỉ bao gồm mục đích ban đầu của việc tư duy."
    },
    "answer": "C"
  },
  {
    "id": 133,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một trong những điều kiện quan trọng để tư duy nảy sinh khi đối mặt với \"tình huống có vấn đề\" là gì?",
    "options": {
      "A": "Vấn đề phải cực kỳ đơn giản để có thể giải quyết ngay.",
      "B": "Chủ thể phải có nhu cầu, động lực muốn giải quyết tình huống đó.",
      "C": "Chủ thể không cần có bất kỳ kiến thức nền tảng nào liên quan đến vấn đề.",
      "D": "Vấn đề phải hoàn toàn nằm ngoài khả năng nhận thức của chủ thể."
    },
    "answer": "B"
  },
  {
    "id": 134,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Tại sao việc \"phản biện chính mình\" lại được xem là một khía cạnh quan trọng của rèn luyện tính khách quan trong tư duy?",
    "options": {
      "A": "Vì nó giúp khẳng định rằng niềm tin và ý tưởng của bản thân luôn đúng.",
      "B": "Vì nó là cách để kiểm soát và chế ngự \"bản ngã\", sẵn sàng từ bỏ niềm tin cố hữu để tiếp nhận tri thức mới.",
      "C": "Vì nó chỉ cần thiết khi niềm tin của người khác mâu thuẫn với mình.",
      "D": "Vì nó làm giảm sự tự tin vào khả năng của bản thân."
    },
    "answer": "B"
  },
  {
    "id": 135,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Khi nói \"Tư duy kỹ thuật có tính tích hợp, liên ngành cao\", điều này có nghĩa là gì?",
    "options": {
      "A": "Tư duy kỹ thuật chỉ tập trung vào một chuyên ngành hẹp duy nhất.",
      "B": "Việc giải quyết vấn đề kỹ thuật thường đòi hỏi vận dụng kiến thức từ nhiều ngành, nhiều lĩnh vực khác nhau.",
      "C": "Tư duy kỹ thuật hoàn toàn tách biệt với các loại hình tư duy khác.",
      "D": "Tư duy kỹ thuật không cần đến ngôn ngữ khoa học kỹ thuật."
    },
    "answer": "B"
  },
  {
    "id": 136,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Để thúc đẩy đổi mới sáng tạo trong một tổ chức, văn hóa sáng tạo cần tạo ra môi trường như thế nào?",
    "options": {
      "A": "Môi trường mà mọi ý tưởng đều bị đánh giá khắt khe ngay từ đầu.",
      "B": "Môi trường khuyến khích sự cạnh tranh cá nhân hơn là hợp tác.",
      "C": "Môi trường nơi các ý tưởng mới được đón nhận, khuyến khích, tôn trọng và có không gian cho thử nghiệm.",
      "D": "Môi trường chỉ tập trung vào việc duy trì các quy trình hiện có."
    },
    "answer": "C"
  },
  {
    "id": 137,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một doanh nghiệp đang thiết kế sản phẩm mới. Thay vì chỉ tập trung vào chi phí sản xuất, nhóm thiết kế còn cân nhắc đến trải nghiệm khách hàng, độ bền sản phẩm, bảo trì sau bán hàng và hình thức bên ngoài. Đây là ví dụ cho:",
    "options": {
      "A": "Tư duy theo chi phí truyền thống.",
      "B": "Tư duy kỹ thuật một cách toàn diện.",
      "C": "Tư duy đơn ngành.",
      "D": "Tư duy sao chép sản phẩm cũ."
    },
    "answer": "B"
  },
  {
    "id": 138,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Tại sao việc \"Thử nghiệm và chấp nhận sai lầm\" (Trial and Error) được coi là một phần quan trọng trong rèn luyện tư duy, đặc biệt là tư duy kỹ thuật và sáng tạo?",
    "options": {
      "A": "Vì nó cho thấy sự thiếu chuẩn bị.",
      "B": "Vì nó giúp khám phá giới hạn, học hỏi từ thất bại và tìm ra giải pháp mới.",
      "C": "Vì nó tốn nhiều thời gian và nguồn lực nhất.",
      "D": "Vì nó chứng tỏ người thực hiện không có năng lực."
    },
    "answer": "B"
  },
  {
    "id": 139,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một kỹ sư nhận thấy giải pháp thiết kế ban đầu của mình không đáp ứng được yêu cầu về hiệu suất sau khi thử nghiệm. Thay vì từ bỏ, anh ấy quay lại bước phân tích và điều chỉnh thiết kế. Hành động này thể hiện rõ nhất phẩm chất nào cần có trong tư duy kỹ thuật?",
    "options": {
      "A": "Sự cứng nhắc, bảo thủ.",
      "B": "Khả năng thích ứng, học hỏi và lặp lại để cải tiến.",
      "C": "Thiếu kiên nhẫn.",
      "D": "Chỉ làm theo đúng kế hoạch ban đầu."
    },
    "answer": "B"
  },
  {
    "id": 140,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Giao tiếp hiệu quả giữa các thành viên trong nhóm kỹ sư là cực kỳ quan trọng vì lý do chính nào sau đây?",
    "options": {
      "A": "Để kéo dài thời gian dự án.",
      "B": "Giúp chia sẻ thông tin, phối hợp công việc, phát hiện và giải quyết vấn đề sớm hơn.",
      "C": "Để xác định ai là người giỏi nhất nhóm.",
      "D": "Chỉ để báo cáo tiến độ cho cấp trên."
    },
    "answer": "B"
  },
  {
    "id": 141,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Việc liên tục học hỏi, cập nhật kiến thức mới và thử nghiệm các phương pháp khác nhau là cách để vượt qua rào cản nào trong tư duy?",
    "options": {
      "A": "Thiếu tự tin.",
      "B": "Lối mòn tư duy và định kiến.",
      "C": "Áp lực thời gian.",
      "D": "Thiếu động lực."
    },
    "answer": "B"
  },
  {
    "id": 142,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Khi đối mặt với một vấn đề phức tạp, người có tư duy kỹ thuật tốt thường làm gì đầu tiên?",
    "options": {
      "A": "Bắt tay vào thử ngay giải pháp đầu tiên nghĩ ra.",
      "B": "Tìm kiếm một người khác để đổ lỗi.",
      "C": "Phân tích, xác định rõ vấn đề, các ràng buộc và tiêu chí của giải pháp.",
      "D": "Bỏ qua vấn đề và hy vọng nó tự biến mất."
    },
    "answer": "C"
  },
  {
    "id": 143,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Tại sao việc xác định đúng \"vấn đề cần giải quyết\" (problem finding/definition) lại là bước cực kỳ quan trọng trước khi bắt tay vào tìm giải pháp?",
    "options": {
      "A": "Vì việc này tốn nhiều thời gian nhất.",
      "B": "Để đảm bảo rằng nỗ lực giải quyết được tập trung vào đúng chỗ, tránh lãng phí nguồn lực vào việc giải quyết sai vấn đề hoặc chỉ giải quyết triệu chứng.",
      "C": "Vì luôn có một định nghĩa vấn đề duy nhất đúng.",
      "D": "Để có thể đổ lỗi nếu giải pháp thất bại"
    },
    "answer": "B"
  },
  {
    "id": 144,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một nhóm sinh viên gặp khó khăn trong việc tìm đề tài nghiên cứu khoa học. Giảng viên gợi ý họ thử áp dụng kỹ thuật \"Brainstorming\" kết hợp với \"Sơ đồ tư duy\". Mục đích của sự kết hợp này là gì?",
    "options": {
      "A": "Vừa tạo ra nhiều ý tưởng, vừa hệ thống hóa và khám phá sâu các ý tưởng đó.",
      "B": "Chỉ để kéo dài thời gian làm việc nhóm.",
      "C": "Để chọn ra người có ý tưởng hay nhất trong nhóm.",
      "D": "Để đánh giá tính khả thi về mặt tài chính của các đề tài."
    },
    "answer": "A"
  },
  {
    "id": 145,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một nhà thiết kế thời trang muốn tạo ra bộ sưu tập mới lạ. Cô ấy thử kết hợp các yếu tố của trang phục truyền thống Việt Nam với phong cách hiện đại phương Tây. Đây là ví dụ về việc áp dụng kỹ thuật sáng tạo nào trong tư duy?",
    "options": {
      "A": "Phân tích SWOT.",
      "B": "Kết hợp (Combine) hoặc Biến đổi (Adapt/Modify) ý tưởng/yếu tố có sẵn.",
      "C": "Phương pháp 5W1H để xác định khách hàng mục tiêu.",
      "D": "Biểu đồ nhân quả để tìm lỗi trong thiết kế cũ."
    },
    "answer": "B"
  },
  {
    "id": 146,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một đội ngũ R&D muốn tạo ra một loại vật liệu mới siêu nhẹ và siêu bền. Họ bắt đầu bằng việc nghiên cứu cấu trúc của mạng nhện và xương chim. Đây là việc áp dụng phương pháp tư duy nào?",
    "options": {
      "A": "Phỏng sinh học (Biomimicry) kết hợp tư duy tương tự (Analogical Thinking).",
      "B": "Chỉ đơn thuần là sao chép tự nhiên.",
      "C": "Phương pháp 5W1H.",
      "D": "Phân tích SWOT."
    },
    "answer": "A"
  },
  {
    "id": 147,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Khi một nhóm sử dụng kỹ thuật \"Brainstorming\" để tạo ý tưởng (tư duy phân kỳ - divergent thinking), bước tiếp theo hợp lý thường là gì?",
    "options": {
      "A": "Tiếp tục tạo thêm ý tưởng mới vô thời hạn.",
      "B": "Áp dụng \"tư duy hội tụ\" (convergent thinking) để đánh giá, nhóm lại và lựa chọn những ý tưởng khả thi nhất.",
      "C": "Bỏ qua tất cả các ý tưởng đã tạo ra.",
      "D": "Yêu cầu một nhóm khác thực hiện lại Brainstorming"
    },
    "answer": "B"
  },
  {
    "id": 148,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một kỹ sư khi đối mặt với một sự cố kỹ thuật phức tạp, thay vì chỉ dựa vào kinh nghiệm trước đó, đã chủ động tìm kiếm các bài báo khoa học mới, tham khảo ý kiến từ chuyên gia các lĩnh vực liên quan và xem xét vấn đề từ nhiều góc độ (kỹ thuật, kinh tế, an toàn). Hành động này thể hiện việc rèn luyện yếu tố nào của tư duy hiệu quả nhất?",
    "options": {
      "A": "Chỉ rèn luyện tính khách quan trong việc thu thập thông tin.",
      "B": "Rèn luyện tính toàn diện, tính nhạy bén, linh hoạt và kỹ năng tư duy độc lập, vượt ra ngoài khuôn khổ kinh nghiệm cá nhân.",
      "C": "Chỉ tập trung vào việc nắm vững và vận dụng kiến thức tư duy logic.",
      "D": "Chỉ rèn luyện kỹ năng tranh luận để bảo vệ quan điểm ban đầu."
    },
    "answer": "B"
  },
  {
    "id": 149,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "\"Tư duy heuristic\" được mô tả là giải quyết vấn đề một cách linh hoạt, sáng tạo, không gò bó theo khuôn mẫu có sẵn. Trong lĩnh vực kỹ thuật, điều này thường cần thiết nhất khi nào?",
    "options": {
      "A": "Khi thực hiện các công việc bảo trì định kỳ theo quy trình chuẩn.",
      "B": "Khi đối mặt với các vấn đề hoàn toàn mới, chưa có tiền lệ hoặc các giải pháp thuật toán hiện tại không còn hiệu quả.",
      "C": "Khi cần áp dụng một công thức toán học đã được chứng minh để tính toán thiết kế.",
      "D": "Khi cần tuân thủ tuyệt đối các tiêu chuẩn an toàn đã được quy định."
    },
    "answer": "B"
  },
  {
    "id": 150,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một nhà quản lý dự án nhận thấy đội ngũ của mình thường xuyên gặp khó khăn trong việc đưa ra các giải pháp sáng tạo cho các vấn đề phát sinh. Để cải thiện tình hình, nhà quản lý quyết định tổ chức các buổi \"phản biện chính mình\" cho từng thành viên, nơi họ phải tự đặt câu hỏi chất vấn các giả định và niềm tin cố hữu của bản thân về vấn đề. Mục đích chính của hoạt động này là gì?",
    "options": {
      "A": "Để tìm ra người có nhiều sai sót nhất trong đội ngũ.",
      "B": "Để củng cố niềm tin cố hữu của mỗi cá nhân.",
      "C": "Để rèn luyện khả năng kiểm soát \"bản ngã\", từ bỏ các định kiến và sẵn sàng tiếp nhận các tri thức, góc nhìn mới, từ đó mở đường cho tư duy sáng tạo.",
      "D": "Để tăng cường sự cạnh tranh và áp lực trong đội ngũ."
    },
    "answer": "C"
  },
  {
    "id": 151,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Trong quá trình phát triển tư duy kỹ thuật, việc một sinh viên không chỉ học thuộc lòng các công thức mà còn cố gắng hiểu \"tại sao\" công thức đó lại có dạng như vậy, \"khi nào\" thì áp dụng được và \"giới hạn\" của nó là gì, thể hiện sự phát triển của khía cạnh nào trong tư duy?",
    "options": {
      "A": "Chỉ là sự tăng cường khả năng ghi nhớ thông tin.",
      "B": "Sự phát triển tư duy lý luận, khả năng phân tích bản chất và mối liên hệ của các khái niệm kỹ thuật.",
      "C": "Chỉ là sự hình thành tư duy trực quan hành động.",
      "D": "Chỉ là việc rèn luyện kỹ năng thực hành thao tác."
    },
    "answer": "B"
  },
  {
    "id": 152,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một trong những thách thức khi kết hợp tư duy logic chặt chẽ của kỹ thuật với yêu cầu đổi mới sáng tạo là \"khó khăn trong việc thích ứng với sự thay đổi\". Điều này xảy ra do đâu?",
    "options": {
      "A": "Kỹ thuật viên thường thiếu kiến thức chuyên môn cần thiết.",
      "B": "Tư duy logic luôn đối lập và triệt tiêu hoàn toàn khả năng sáng tạo.",
      "C": "Việc quen với các quy trình, tiêu chuẩn đã được thiết lập có thể tạo ra sức ì, cản trở việc chấp nhận và thử nghiệm những ý tưởng mới lạ, chưa được kiểm chứng.",
      "D": "Cơ sở hạ tầng và công nghệ luôn đủ linh hoạt để hỗ trợ mọi ý tưởng mới."
    },
    "answer": "C"
  },
  {
    "id": 153,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Khi một đội ngũ kỹ sư áp dụng \"tư duy lật ngược vấn đề\" để thiết kế một giải pháp tiết kiệm năng lượng cho tòa nhà, thay vì hỏi \"Làm thế nào để giảm tiêu thụ năng lượng?\", họ hỏi \"Làm thế nào để tòa nhà này tiêu thụ năng lượng nhiều nhất có thể?\". Mục đích của cách đặt vấn đề ngược này là gì?",
    "options": {
      "A": "Để tìm ra các giải pháp gây lãng phí năng lượng và tránh chúng.",
      "B": "Để xác định các yếu tố gây lãng phí năng lượng một cách rõ ràng hơn, từ đó tập trung vào việc loại bỏ hoặc giảm thiểu chúng, mở ra những hướng tiếp cận mới.",
      "C": "Để chứng minh rằng việc tiết kiệm năng lượng là không khả thi.",
      "D": "Để làm cho vấn đề trở nên phức tạp và khó giải quyết hơn."
    },
    "answer": "B"
  },
  {
    "id": 154,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Để rèn luyện \"tính khách quan\" trong tư duy, tại sao việc \"tuyệt đối tránh việc chỉ tiếp nhận những dữ liệu phù hợp với quan điểm sẵn có của bản thân, loại bỏ những dữ liệu không phù hợp\" lại quan trọng?",
    "options": {
      "A": "Vì những dữ liệu không phù hợp thường không chính xác và không đáng tin cậy.",
      "B": "Vì việc này giúp tiết kiệm thời gian phân tích và đưa ra quyết định nhanh hơn.",
      "C": "Vì việc chỉ chọn lọc thông tin \"thuận\" sẽ dẫn đến cái nhìn thiên lệch, phiến diện, bỏ qua các khía cạnh quan trọng khác của vấn đề và có thể dẫn đến kết luận sai lầm.",
      "D": "Vì quan điểm sẵn có của bản thân luôn là đúng đắn nhất."
    },
    "answer": "C"
  },
  {
    "id": 155,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Để thúc đẩy \"đổi mới sáng tạo\" trong một nhóm kỹ sư đang phát triển sản phẩm mới, người quản lý nên khuyến khích điều gì nhất?",
    "options": {
      "A": "Tuân thủ nghiêm ngặt các quy trình đã có và tránh mọi rủi ro.",
      "B": "Tập trung vào việc cải tiến nhỏ các tính năng hiện có của đối thủ.",
      "C": "Tạo môi trường an toàn để thử nghiệm ý tưởng mới, chấp nhận thất bại như một phần  của quá trình học hỏi, và áp dụng các kỹ thuật tư duy sáng tạo.",
      "D": "Chỉ tuyển những người đã có kinh nghiệm thành công trong quá khứ."
    },
    "answer": "C"
  },
  {
    "id": 156,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Để giải quyết một vấn đề kỹ thuật nan giải mà các phương pháp thông thường đều thất bại, một nhóm kỹ sư quyết định sử dụng kỹ thuật \"Đối tượng tiêu điểm\" bằng cách liên hệ vấn đề của họ với cấu trúc của một tổ ong. Mục đích của việc này là gì?",
    "options": {
      "A": "Để chứng minh rằng vấn đề kỹ thuật tương tự như vấn đề của loài ong.",
      "B": "Để tìm ra giải pháp chính xác từ cấu trúc tổ ong.",
      "C": "Để kích thích các liên tưởng mới, phá vỡ lối mòn tư duy và hy vọng tìm ra hướng tiếp cận độc đáo cho vấn đề kỹ thuật.",
      "D": "Để chuyển hướng sang nghiên cứu về loài ong thay vì vấn đề kỹ thuật."
    },
    "answer": "C"
  },
  {
    "id": 157,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một nhóm kỹ sư đang cố gắng giảm tiếng ồn cho động cơ. Thay vì chỉ tập trung vào việc thêm vật liệu cách âm (giải pháp thông thường), họ đặt câu hỏi \"Làm thế nào để ngăn chặn tiếng ồn được tạo ra ngay từ nguồn?\" và \"Liệu có thể biến đổi tiếng ồn thành năng lượng hữu ích?\". Cách tiếp cận này thể hiện sự kết hợp giữa tư duy kỹ thuật và kỹ năng nào?",
    "options": {
      "A": "Sao chép giải pháp của đối thủ cạnh tranh.",
      "B": "Tuân thủ nghiêm ngặt các tiêu chuẩn hiện hành.",
      "C": "Tư duy sáng tạo và đặt lại vấn đề (problem reframing).",
      "D": "Chỉ tập trung vào việc giảm chi phí sản xuất."
    },
    "answer": "C"
  },
  {
    "id": 158,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Một nhóm quản lý nhà hàng nhận thấy tình trạng lãng phí thực phẩm nghiêm trọng. Thay vì tập trung xử lý phần thực phẩm dư thừa, họ đặt lại câu hỏi: “Vì sao thực phẩm bị thừa ngay từ đầu?” và “Có thể thay đổi hành vi khách hàng/nhân viên như thế nào?”. Cách tiếp cận này thể hiện dạng tư duy nào?",
    "options": {
      "A": "Tư duy hướng kết quả – tối ưu hóa đầu ra trong điều kiện hiện tại.",
      "B": "Tư duy hệ thống và phản biện – truy nguyên nguyên nhân và định hình lại vấn đề.",
      "C": "Tư duy cải tiến liên tục – cải thiện các quy trình nhỏ để giảm lãng phí.",
      "D": "Tư duy thích ứng – chấp nhận thực trạng và phản ứng linh hoạt với biến động."
    },
    "answer": "B"
  },
  {
    "id": 159,
    "category": "Phần 3: Tư duy Sáng tạo",
    "question": "Quan điểm nào sau đây thể hiện rõ nhất \"Tư duy hệ thống\"?",
    "options": {
      "A": "Chia nhỏ vấn đề thành các phần riêng biệt để giải quyết từng phần.",
      "B": "Tập trung vào mối liên hệ và tương tác giữa các bộ phận trong một tổng thể.",
      "C": "Chỉ quan tâm đến các yếu tố có thể đo lường được bằng con số.",
      "D": "Tìm ra một nguyên nhân duy nhất cho mọi vấn đề phức tạp."
    },
    "answer": "B"
  },
  {
    "id": 160,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Ví dụ nào sau đây minh họa rõ nhất cho một \"vòng lặp phản hồi tăng cường\" (positive feedback loop)?",
    "options": {
      "A": "Máy điều hòa tự bật khi nhiệt độ phòng tăng và tắt khi đủ lạnh.",
      "B": "Càng nhiều người mua một loại điện thoại mới, càng nhiều người khác muốn mua theo.",
      "C": "Khi bạn ăn quá no, cảm giác thèm ăn giảm đi.",
      "D": "Hệ thống phanh xe giúp xe dừng lại khi có vật cản.  D. Ưu tiên tốc độ hoàn thành hơn chất lượng."
    },
    "answer": "B"
  },
  {
    "id": 161,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Khái niệm \"toàn thể lớn hơn tổng các bộ phận\" (The whole is greater than the sum of its parts) là cốt lõi của:",
    "options": {
      "A": "Phương pháp phân tích chi tiết.",
      "B": "Tư duy tuyến tính.",
      "C": "Tư duy hệ thống.",
      "D": "Việc liệt kê các thành phần."
    },
    "answer": "C"
  },
  {
    "id": 162,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Ví dụ nào sau đây minh họa rõ nhất cho một \"vòng lặp phản hồi cân bằng\" (balancing feedback loop) giúp duy trì sự ổn định?",
    "options": {
      "A": "Lãi suất kép trong tài khoản tiết kiệm.",
      "B": "Tin đồn lan truyền trên mạng xã hội.",
      "C": "Cơ thể tự điều chỉnh nhiệt độ khi trời nóng hoặc lạnh.",
      "D": "Dân số tăng trưởng theo cấp số nhân khi có nguồn lực dồi dào."
    },
    "answer": "C"
  },
  {
    "id": 163,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Yếu tố nào sau đây KHÔNG phải là một thành phần cơ bản của tư duy hệ thống theo định nghĩa thông thường?",
    "options": {
      "A": "Các yếu tố (Elements).",
      "B": "Các mối liên kết (Interconnections).",
      "C": "Mục đích hoặc chức năng (Purpose/Function).",
      "D": "Các giải pháp tức thời (Immediate solutions)."
    },
    "answer": "D"
  },
  {
    "id": 164,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Khi một quốc gia tăng cường đầu tư vào giáo dục (hành động), phải mất nhiều năm sau mới thấy được sự cải thiện rõ rệt về chất lượng nguồn nhân lực (kết quả). Khoảng thời gian này gọi là gì trong hệ thống?",
    "options": {
      "A": "Vòng lặp phản hồi.",
      "B": "Điểm đòn bẩy.",
      "C": "Độ trễ (Delay).",
      "D": "Ranh giới hệ thống."
    },
    "answer": "C"
  },
  {
    "id": 165,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Nhận định nào sau đây phản ánh đúng nhất tinh thần của Tư duy hệ thống?",
    "options": {
      "A": "\"Hãy chia để trị\" - tập trung giải quyết từng phần riêng lẻ.",
      "B": "\"Mọi thứ đều liên quan đến nhau\" - tập trung vào mối liên kết và tổng thể.",
      "C": "\"Kết quả trước mắt là quan trọng nhất\" - tập trung vào hiệu quả ngắn hạn.",
      "D": "\"Chỉ có một cách giải quyết đúng duy nhất\" - tìm kiếm giải pháp đơn lẻ."
    },
    "answer": "B"
  },
  {
    "id": 166,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Trong hệ thống dân số của một loài vật, khi nguồn thức ăn dồi dào, tỷ lệ sinh tăng làm dân số tăng. Khi dân số tăng quá cao, nguồn thức ăn cạn kiệt, tỷ lệ tử vong tăng làm dân số giảm. Đây là ví dụ về sự tương tác của các vòng lặp nào?",
    "options": {
      "A": "Chỉ có vòng lặp tăng cường (positive feedback).",
      "B": "Chỉ có vòng lặp cân bằng (balancing feedback).",
      "C": "Sự kết hợp và tương tác giữa vòng lặp tăng cường (sinh sản) và vòng lặp cân bằng (giới hạn tài nguyên).",
      "D": "Không có vòng lặp nào cả."
    },
    "answer": "C"
  },
  {
    "id": 167,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "\"Nhìn thấy bức tranh toàn cảnh\" thay vì chỉ tập trung vào các sự kiện riêng lẻ là một đặc điểm quan trọng của:",
    "options": {
      "A": "Tư duy cơ giới.",
      "B": "Tư duy logic thuần túy.",
      "C": "Tư duy hệ thống.",
      "D": "Tư duy ngắn hạn."
    },
    "answer": "C"
  },
  {
    "id": 168,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tư duy hệ thống giúp chúng ta nhận ra rằng các vấn đề phức tạp thường:",
    "options": {
      "A": "Chỉ có một nguyên nhân duy nhất.",
      "B": "Không thể giải quyết được.",
      "C": "Là kết quả của nhiều yếu tố tương tác với nhau.",
      "D": "Luôn có giải pháp đơn giản, rõ ràng."
    },
    "answer": "C"
  },
  {
    "id": 169,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "\"Mô hình tư duy\" (Mental Model) của một người ảnh hưởng đến việc áp dụng tư duy hệ thống như thế nào?",
    "options": {
      "A": "Không có ảnh hưởng gì.",
      "B": "Giúp loại bỏ hoàn toàn các sai sót trong nhận thức.",
      "C": "Định hình cách người đó nhìn nhận vấn đề, xác định các yếu tố và mối liên hệ quan trọng (hoặc bỏ sót chúng).",
      "D": "Chỉ ảnh hưởng đến cảm xúc, không ảnh hưởng đến phân tích."
    },
    "answer": "C"
  },
  {
    "id": 170,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Trong tư duy hệ thống, tại sao việc phân tích các xu hướng hành vi theo thời gian lại quan trọng hơn so với chỉ phản ứng với từng sự kiện đơn lẻ?",
    "options": {
      "A": "Vì sự kiện thường không quan trọng.",
      "B": "Vì mô hình giúp hiểu xu hướng và nguyên nhân sâu xa của hệ thống.",
      "C": "Vì mô hình dễ thấy hơn sự kiện.",
      "D": "Vì chỉ mô hình mới thay đổi được hệ thống"
    },
    "answer": "B"
  },
  {
    "id": 171,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Khi một công ty chỉ tập trung tăng doanh số bán hàng mà không quan tâm đến khả năng sản xuất và dịch vụ khách hàng, dẫn đến quá tải và mất khách, điều này cho thấy họ thiếu:",
    "options": {
      "A": "Mục tiêu kinh doanh rõ ràng.",
      "B": "Nhân viên bán hàng giỏi.",
      "C": "Tư duy hệ thống trong quản lý.",
      "D": "Công nghệ sản xuất hiện đại."
    },
    "answer": "C"
  },
  {
    "id": 172,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Một người nông dân chỉ sử dụng một loại thuốc trừ sâu duy nhất với liều lượng ngày càng tăng. Ban đầu hiệu quả, nhưng sau đó sâu bệnh kháng thuốc và bùng phát mạnh hơn. Đây là ví dụ về việc bỏ qua khía cạnh nào của hệ thống nông nghiệp?",
    "options": {
      "A": "Chi phí mua thuốc trừ sâu.",
      "B": "Ảnh hưởng của thời tiết.",
      "C": "Các vòng lặp phản hồi và sự thích nghi của sâu bệnh.",
      "D": "Giống cây trồng đang sử dụng."
    },
    "answer": "C"
  },
  {
    "id": 173,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Hiện tượng \"Fixes that Fail\" (Giải pháp vá lỗi gây thêm lỗi) xảy ra khi nào?",
    "options": {
      "A": "Khi giải pháp ban đầu quá tốn kém.",
      "B": "Khi giải pháp ngắn hạn giải quyết triệu chứng nhưng lại gây ra hậu quả không mong muốn ở nơi khác hoặc trong dài hạn.",
      "C": "Khi không có đủ người để thực hiện giải pháp.",
      "D": "Khi vấn đề quá đơn giản để cần giải pháp."
    },
    "answer": "B"
  },
  {
    "id": 174,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Việc nhận ra rằng một can thiệp vào một phần của hệ thống có thể gây ra những hậu quả không lường trước ở những phần khác là hiểu về đặc tính nào của hệ thống?",
    "options": {
      "A": "Tính mục đích.",
      "B": "Tính ổn định.",
      "C": "Tính kết nối và các tác động lan tỏa (interconnectedness and ripple effects).",
      "D": "Tính đơn giản"
    },
    "answer": "C"
  },
  {
    "id": 175,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Hiện tượng một thay đổi nhỏ trong một phần tử của hệ thống có thể gây ra ảnh hưởng lớn đến toàn bộ hệ thống liên quan đến đặc điểm nào của hệ thống?",
    "options": {
      "A": "Tính cấu trúc cố định của hệ thống.",
      "B": "Tính tổng thể và mối quan hệ giữa các phần tử.",
      "C": "Tính độc lập và ổn định của các phần tử.",
      "D": "Tính đơn giản và dễ dự đoán của hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 176,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Việc hiểu rằng hành động của bạn hôm nay có thể gây ra kết quả không mong muốn vào tuần sau hoặc tháng sau liên quan đến khái niệm nào trong tư duy hệ thống?",
    "options": {
      "A": "Ranh giới hệ thống.",
      "B": "Độ trễ (Delay).",
      "C": "Thành phần hệ thống.",
      "D": "Phân loại hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 177,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Sự khác biệt cơ bản giữa một chuỗi nhân quả đơn giản (A gây ra B) và một vòng lặp phản hồi (A gây ra B, B lại tác động ngược lại A) là gì?",
    "options": {
      "A": "Chuỗi nhân quả luôn phức tạp hơn vòng lặp.",
      "B": "Vòng lặp phản hồi thể hiện sự tác động hai chiều hoặc khép kín, còn chuỗi nhân quả chỉ có một chiều.",
      "C": "Chỉ có vòng lặp phản hồi mới xuất hiện trong các hệ thống tự nhiên.",
      "D": "Chuỗi nhân quả không bao giờ có độ trễ."
    },
    "answer": "B"
  },
  {
    "id": 178,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Khái niệm \"Điểm đòn bẩy\" (Leverage Point) gợi ý điều gì khi muốn thay đổi một hệ thống?",
    "options": {
      "A": "Nên tác động vào tất cả các thành phần cùng một lúc.",
      "B": "Nên tìm những điểm can thiệp nhỏ nhưng có thể tạo ra sự thay đổi lớn và hiệu quả.",
      "C": "Nên tránh mọi sự thay đổi vì hệ thống rất phức tạp.",
      "D": "Chỉ có thể thay đổi hệ thống bằng cách thay đổi mục đích của nó"
    },
    "answer": "B"
  },
  {
    "id": 179,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Nguyên tắc nào sau đây KHÔNG thuộc về tư duy cơ giới (khoa học cổ điển)?",
    "options": {
      "A": "Quy giản luận (chia nhỏ để nghiên cứu).",
      "B": "Tất định luận (một nguyên nhân, một kết quả).",
      "C": "Nhị nguyên luận (phân chia rạch ròi).",
      "D": "Chấp nhận tính bất định và ngẫu nhiên."
    },
    "answer": "D"
  },
  {
    "id": 180,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tư duy hệ thống khác biệt cơ bản với tư duy cơ giới ở điểm nào?",
    "options": {
      "A": "Tư duy hệ thống tập trung vào các chi tiết riêng lẻ.",
      "B": "Tư duy hệ thống xem xét đối tượng trong sự cô lập.",
      "C": "Tư duy hệ thống nhìn nhận các mối liên hệ và tương tác trong một tổng thể.",
      "D": "Tư duy hệ thống luôn tìm kiếm một nguyên nhân duy nhất cho mọi vấn đề."
    },
    "answer": "C"
  },
  {
    "id": 181,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Đặc điểm \"cách nhìn tổng thể\" trong tư duy hệ thống KHÔNG nhằm mục đích gì?",
    "options": {
      "A": "Nhận diện những thuộc tính hợp trội của hệ thống.",
      "B": "Nắm bắt mối quan hệ tương tác giữa các yếu tố.",
      "C": "Chia nhỏ vấn đề thành các phần độc lập hoàn toàn.",
      "D": "Xác định những yếu tố then chốt ảnh hưởng đến hệ thống."
    },
    "answer": "C"
  },
  {
    "id": 182,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "\"Tính đa dạng nhiều chiều\" (đa thứ nguyên) của tư duy hệ thống có nghĩa là gì?",
    "options": {
      "A": "Chỉ xem xét vấn đề theo một chiều duy nhất.",
      "B": "Xem xét vấn đề từ nhiều góc độ khác nhau (thời gian, không gian, con người, kỹ thuật,...).",
      "C": "Tập trung vào các yếu tố kỹ thuật mà bỏ qua yếu tố con người.",
      "D": "Luôn tìm kiếm giải pháp đơn giản nhất."
    },
    "answer": "B"
  },
  {
    "id": 183,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Đặc điểm \"phản biện\" trong tư duy hệ thống thể hiện qua hành động nào?",
    "options": {
      "A": "Chấp nhận mọi thông tin mà không cần kiểm chứng.",
      "B": "Luôn đặt câu hỏi về những điều được cho là hiển nhiên, tìm kiếm bằng chứng.",
      "C": "Chỉ tập trung vào những mặt tích cực của vấn đề.",
      "D": "Tránh né việc xem xét các tác động lâu dài."
    },
    "answer": "B"
  },
  {
    "id": 184,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Thành phần nào của tư duy hệ thống tập trung vào việc sử dụng các mô hình để mô phỏng vấn đề thực tế và cách các yếu tố tương tác?",
    "options": {
      "A": "Tư duy theo tương quan.",
      "B": "Tư duy hệ thống động.",
      "C": "Tư duy theo mô hình (mô phỏng).",
      "D": "Tư duy chỉ đạo hệ thống."
    },
    "answer": "C"
  },
  {
    "id": 185,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": ": \"Tư duy hệ thống động\" chú trọng vào khía cạnh nào của hệ thống?",
    "options": {
      "A": "Cấu trúc tĩnh của hệ thống tại một thời điểm.",
      "B": "Sự thay đổi của hệ thống và các yếu tố theo thời gian.",
      "C": "Các thành phần riêng lẻ của hệ thống.",
      "D": "Mục tiêu ngắn hạn của hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 186,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Phương pháp \"Liên kết\" (Interconnectedness) trong tư duy hệ thống nhấn mạnh điều gì?",
    "options": {
      "A": "Mọi thứ tồn tại độc lập và không ảnh hưởng lẫn nhau.",
      "B": "Mọi thứ đều được kết nối và phụ thuộc vào nhau để tồn tại.",
      "C": "Chỉ các yếu tố hữu hình mới có sự liên kết.",
      "D": "Sự liên kết chỉ tồn tại trong các hệ thống nhân tạo."
    },
    "answer": "B"
  },
  {
    "id": 187,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Mục tiêu của phương pháp \"Tổng hợp\" (Synthesis) trong tư duy hệ thống là gì?",
    "options": {
      "A": "Chia nhỏ độ phức tạp thành các thành phần có thể quản lý được.",
      "B": "Hiểu toàn bộ và các bộ phận cùng một lúc, cùng với các mối quan hệ và kết nối.",
      "C": "Chỉ tập trung vào các bộ phận riêng lẻ của hệ thống.",
      "D": "Loại bỏ các yếu tố không quan trọng ra khỏi hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 188,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Hiện tượng \"một bông tuyết được hình thành từ các yếu tố môi trường và sinh học\" là ví dụ minh họa cho phương pháp nào của tư duy hệ thống?",
    "options": {
      "A": "Vòng phản hồi.",
      "B": "Quan hệ nhân quả.",
      "C": "Kết hợp tạo yếu tố mới (Emergence).",
      "D": "Bản đồ hệ thống."
    },
    "answer": "C"
  },
  {
    "id": 189,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Trong các loại vòng phản hồi, \"vòng phản hồi củng cố\" (reinforcing feedback loop) thường dẫn đến điều gì?",
    "options": {
      "A": "Hệ thống luôn duy trì trạng thái cân bằng.",
      "B": "Sự phong phú của một yếu tố liên tục tự tinh chỉnh, thường gây ảnh hưởng xấu tới yếu tố khác.",
      "C": "Các yếu tố trong hệ thống cân bằng lẫn nhau.",
      "D": "Hệ thống luôn phát triển một cách bền vững."
    },
    "answer": "B"
  },
  {
    "id": 190,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Theo tính chất thành phần của phương pháp tư duy hệ thống, yếu tố nào là quan trọng nhất vì khi nó thay đổi, toàn bộ hệ thống sẽ thay đổi theo?",
    "options": {
      "A": "Các phần tử.",
      "B": "Các liên kết.",
      "C": "Chức năng/mục đích.",
      "D": "Nguồn dự trữ."
    },
    "answer": "C"
  },
  {
    "id": 191,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Trong ví dụ về trường học, \"học sinh vào trường\" được xem là gì?",
    "options": {
      "A": "Nguồn dự trữ (Stock).",
      "B": "Dòng chảy ra (Outflow).",
      "C": "Dòng chảy vào (Inflow).",
      "D": "Vòng lặp phản hồi."
    },
    "answer": "C"
  },
  {
    "id": 192,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Nguyên tắc nào của tư duy hệ thống nhấn mạnh việc không nên chỉ giải quyết triệu chứng bề mặt mà cần tìm những can thiệp nhỏ có thể tạo ra thay đổi lớn?",
    "options": {
      "A": "Nhìn vào tổng thể thay vì từng phần riêng lẻ.",
      "B": "Hiểu các vòng phản hồi.",
      "C": "Tìm kiếm các điểm bẩy (Leverage Points).",
      "D": "Dự đoán hậu quả không mong muốn."
    },
    "answer": "C"
  },
  {
    "id": 193,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Việc một công ty áp dụng chính sách thưởng doanh số cao (hành động A), nhưng sau một thời gian mới thấy chất lượng dịch vụ giảm sút (kết quả B) là ví dụ về nguyên tắc nào?",
    "options": {
      "A": "Nhận biết và quản lý độ trễ (Delays).",
      "B": "Học hỏi và điều chỉnh dựa trên phản hồi.",
      "C": "Giữ tư duy linh hoạt.",
      "D": "Tìm kiếm các điểm bẩy."
    },
    "answer": "A"
  },
  {
    "id": 194,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Theo sơ đồ dòng chảy mô tả vòng phản hồi trong mô hình hệ thống, \"Sự khác biệt (Discrepancy)\" là gì?",
    "options": {
      "A": "Là trạng thái mong muốn của hệ thống.",
      "B": "Là các yếu tố làm tăng trạng thái của hệ thống.",
      "C": "Là sự chênh lệch giữa trạng thái được nhận thức và mục tiêu của hệ thống.",
      "D": "Là cách trạng thái của hệ thống được đo lường."
    },
    "answer": "C"
  },
  {
    "id": 195,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Một trong những giới hạn của tư duy hệ thống là \"khó khăn trong việc bao quát toàn bộ hệ thống phức tạp\" vì lý do nào sau đây?",
    "options": {
      "A": "Hệ thống luôn đơn giản và dễ hiểu.",
      "B": "Số lượng yếu tố và mối quan hệ trong hệ thống phức tạp thường rất lớn và khó nắm bắt hết.",
      "C": "Các khung tư duy hiện có luôn đủ để phân tích mọi hệ thống.",
      "D": "Hệ thống phức tạp không bao giờ có yếu tố động."
    },
    "answer": "C"
  },
  {
    "id": 196,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "\"Vấn đề tư duy phân mảnh\" thường xảy ra khi nào trong phân tích hệ thống?",
    "options": {
      "A": "Khi chỉ có một người duy nhất phân tích hệ thống.",
      "B": "Khi hệ thống quá đơn giản.",
      "C": "Khi có nhiều người hoặc nhóm cùng tham gia phân tích mà thiếu sự phối hợp, dẫn đến mất tính nhất quán.",
      "D": "Khi tất cả các hệ thống con đều có cùng một mục tiêu."
    },
    "answer": "C"
  },
  {
    "id": 197,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Việc một phòng ban trong công ty tập trung tối đa hóa lợi ích riêng của mình mà gây ảnh hưởng tiêu cực đến mục tiêu chung của công ty là ví dụ về hạn chế nào của tư duy hệ thống?",
    "options": {
      "A": "Khó khăn bao quát toàn bộ hệ thống phức tạp.",
      "B": "Giới hạn bởi các khung tư duy hiện có.",
      "C": "Vấn đề tư duy phân mảnh.",
      "D": "Hạn chế trong tính liên kết và xung đột mục tiêu giữa các hệ thống con."
    },
    "answer": "D"
  },
  {
    "id": 198,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tư duy hệ thống được mô tả là \"tư duy động\" vì sao?",
    "options": {
      "A": "Vì nó chỉ áp dụng cho các hệ thống cơ học chuyển động.",
      "B": "Vì nó nhận thức rằng các hệ thống và mối quan hệ trong đó luôn thay đổi và phát triển.",
      "C": "Vì nó không cần sử dụng các mô hình tĩnh.",
      "D": "Vì nó luôn đưa ra giải pháp cố định cho mọi vấn đề."
    },
    "answer": "B"
  },
  {
    "id": 199,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "\"Độ trễ\" (Delay) trong hệ thống là gì và tại sao nó quan trọng trong tư duy hệ thống?",
    "options": {
      "A": "Là khoảng thời gian hệ thống ngừng hoạt động; không quan trọng lắm.",
      "B": "Là khoảng thời gian giữa hành động và kết quả của nó; quan trọng vì nó có thể gây ra phản ứng thái quá hoặc sai lầm.",
      "C": "Là tốc độ xử lý thông tin của hệ thống; chỉ quan trọng với hệ thống máy tính.",
      "D": "Là thời gian cần để thiết kế hệ thống; chỉ quan trọng ở giai đoạn đầu."
    },
    "answer": "B"
  },
  {
    "id": 200,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Hiện tượng 'Bi kịch của mảnh đất công' (Tragedy of the Commons), nơi mỗi cá nhân khai thác tài nguyên chung quá mức vì lợi ích riêng, dẫn đến cạn kiệt tài nguyên, minh họa cho điều gì trong tư duy hệ thống?",
    "options": {
      "A": "Tính hiệu quả của việc tối ưu hóa lợi ích cá nhân trong hệ thống.",
      "B": "Hậu quả của việc thiếu tư duy tổng thể và không nhận diện được các mối quan hệ tương tác giữa các phần tử trong hệ thống.",
      "C": "Lợi ích của việc không có quy tắc quản lý.",
      "D": "Tính ổn định tự nhiên của các hệ thống tài nguyên khi không có sự can thiệp."
    },
    "answer": "B"
  },
  {
    "id": 201,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Archetype (mẫu hình hệ thống) \"Shifting the Burden\" (Chuyển gánh nặng) mô tả tình huống nào?",
    "options": {
      "A": "Giải quyết tận gốc vấn đề bằng giải pháp dài hạn.",
      "B": "Vấn đề tự biến mất theo thời gian.",
      "C": "Sử dụng giải pháp triệu chứng ngắn hạn, làm giảm áp lực tìm giải pháp gốc rễ, dẫn đến sự phụ thuộc vào giải pháp triệu chứng.",
      "D": "Hai bên cùng cạnh tranh và làm cạn kiệt nguồn lực chung"
    },
    "answer": "C"
  },
  {
    "id": 202,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Hiện tượng \"leo thang\" (Escalation archetype), ví dụ như cuộc chạy đua vũ trang giữa hai quốc gia, xảy ra khi nào?",
    "options": {
      "A": "Cả hai bên cùng hợp tác để đạt mục tiêu chung.",
      "B": "Một bên hành động, bên kia coi đó là mối đe dọa và phản ứng lại, hành động phản ứng đó lại bị bên đầu tiên coi là mối đe dọa, tạo ra vòng xoáy tăng cường.",
      "C": "Một bên tự nguyện giảm hành động của mình.",
      "D": "Hệ thống đạt đến trạng thái cân bằng ổn định."
    },
    "answer": "B"
  },
  {
    "id": 203,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tại sao việc chỉ tập trung vào tối ưu hóa từng bộ phận riêng lẻ (ví dụ: phòng marketing cố gắng tăng quảng cáo, phòng sản xuất cố gắng giảm chi phí tối đa) có thể không dẫn đến kết quả tốt nhất cho toàn bộ công ty?",
    "options": {
      "A": "Vì các bộ phận không đủ năng lực chuyên môn.",
      "B": "Vì thiếu sự phối hợp và có thể gây mâu thuẫn mục tiêu giữa các bộ phận (Tối ưu cục bộ không dẫn đến tối ưu toàn cục).",
      "C": "Vì công ty thiếu nguồn lực tài chính.",
      "D": "Vì thị trường cạnh tranh quá khốc liệt."
    },
    "answer": "B"
  },
  {
    "id": 204,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tại sao việc xác định đúng \"đòn bẩy\" (leverage point) trong một hệ thống lại quan trọng?",
    "options": {
      "A": "Vì đó là điểm yếu nhất của hệ thống.",
      "B": "Vì đó là nơi có thể tạo ra thay đổi lớn nhất với nỗ lực nhỏ nhất.",
      "C": "Vì đó là thành phần tốn kém nhất trong hệ thống.",
      "D": "Vì đó là nơi dễ dàng thay đổi nhất nhưng ít tác dụng nhất."
    },
    "answer": "B"
  },
  {
    "id": 205,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Một công ty liên tục cắt giảm chi phí đào tạo nhân viên để tăng lợi nhuận ngắn hạn. Hậu quả là kỹ năng nhân viên giảm sút, năng suất và khả năng đổi mới kém đi, ảnh hưởng xấu đến lợi nhuận dài hạn. Đây là ví dụ về việc không nhận ra điều gì?",
    "options": {
      "A": "Tầm quan trọng của marketing.",
      "B": "Sự cần thiết phải có văn phòng đẹp.",
      "C": "Các vòng lặp phản hồi dài hạn và tác động của việc cắt giảm chi phí lên năng lực cốt lõi.",
      "D": "Vai trò của công nghệ thông tin."
    },
    "answer": "C"
  },
  {
    "id": 206,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Khái niệm \"Stocks\" (lượng tích trữ) và \"Flows\" (luồng chảy) trong mô hình hóa hệ thống động lực là gì? (Ví dụ: nước trong bồn và vòi nước chảy vào/ra)",
    "options": {
      "A": "Stocks là tốc độ thay đổi, Flows là lượng tích lũy.",
      "B": "Stocks đại diện cho sự tích lũy theo thời gian, Flows là tốc độ làm thay đổi Stocks đó.",
      "C": "Cả hai đều chỉ tốc độ thay đổi.",
      "D": "Stocks là đầu vào, Flows là đầu ra của hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 207,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Một chính sách giảm thuế để kích thích kinh tế có thể hiệu quả trong ngắn hạn, nhưng nếu không tính đến khả năng lạm phát gia tăng sau đó, thì người ra chính sách đã bỏ qua yếu tố nào của tư duy hệ thống?",
    "options": {
      "A": "Ranh giới của hệ thống kinh tế.",
      "B": "Các vòng lặp phản hồi và độ trễ trong hệ thống.",
      "C": "Các thành phần chính của hệ thống (người dân, doanh nghiệp).",
      "D": "Mục tiêu ban đầu của chính sách."
    },
    "answer": "B"
  },
  {
    "id": 208,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "\"Tư duy cơ giới\" (Mechanistic Thinking) thường có xu hướng xem xét các vấn đề như thế nào?",
    "options": {
      "A": "Như một mạng lưới phức tạp của các mối quan hệ.",
      "B": "Tập trung vào các mô hình và vòng lặp.",
      "C": "Chia nhỏ thành các phần độc lập và tìm quan hệ nhân quả trực tiếp, tuyến tính.",
      "D": "Luôn xem xét bối cảnh và môi trường xung quanh."
    },
    "answer": "C"
  },
  {
    "id": 209,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Việc chỉ nhìn vào các sự kiện riêng lẻ (ví dụ: hôm nay doanh số giảm) thay vì các mô hình hành vi theo thời gian (ví dụ: doanh số thường giảm vào đầu quý và tăng vào cuối quý) là đặc điểm của lối tư duy nào?",
    "options": {
      "A": "Tư duy hệ thống.",
      "B": "Tư duy tập trung vào sự kiện (event-oriented thinking), trái ngược với tư duy hệ thống.",
      "C": "Tư duy chiến lược dài hạn.",
      "D": "Tư duy phân tích cấu trúc."
    },
    "answer": "B"
  },
  {
    "id": 210,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Hiện tượng \"dao động\" (oscillation) trong một hệ thống (ví dụ: dân số thú săn mồi và con mồi biến động lên xuống) thường là kết quả của yếu tố nào?",
    "options": {
      "A": "Sự thiếu hụt các thành phần trong hệ thống.",
      "B": "Các vòng lặp phản hồi (đặc biệt là cân bằng) kết hợp với độ trễ đáng kể.",
      "C": "Hệ thống hoàn toàn ngẫu nhiên và không thể đoán trước.",
      "D": "Mục đích của hệ thống thay đổi liên tục."
    },
    "answer": "B"
  },
  {
    "id": 211,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Nhận định nào sau đây KHÔNG phải là một nguyên tắc cơ bản của phương pháp tư duy hệ thống?",
    "options": {
      "A": "Tìm kiếm các mô hình và cấu trúc lặp lại.",
      "B": "Hiểu rằng hành vi của hệ thống là kết quả của cấu trúc của nó.",
      "C": "Tập trung giải quyết các triệu chứng bề mặt của vấn đề.",
      "D": "Nhận thức được sự tồn tại của các độ trễ và vòng lặp phản hồi."
    },
    "answer": "C"
  },
  {
    "id": 212,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Việc nhận ra rằng các giải pháp \"nhanh gọn\" cho các vấn đề hệ thống phức tạp thường chỉ giải quyết được triệu chứng tạm thời và có thể làm vấn đề tồi tệ hơn trong dài hạn là một bài học quan trọng của:",
    "options": {
      "A": "Tư duy logic cơ bản.",
      "B": "Phân tích chi phí - lợi ích.",
      "C": "Tư duy hệ thống.",
      "D": "Quản lý dự án truyền thống."
    },
    "answer": "C"
  },
  {
    "id": 213,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Một trong những hạn chế tiềm ẩn của việc áp dụng tư duy hệ thống là gì?",
    "options": {
      "A": "Luôn đưa ra giải pháp đơn giản và dễ thực hiện.",
      "B": "Có thể trở nên quá phức tạp, khó mô hình hóa và khó xác định ranh giới hệ thống một cách chính xác.",
      "C": "Không xem xét đến các mối liên hệ giữa các thành phần.",
      "D": "Chỉ phù hợp với các vấn đề khoa học tự nhiên."
    },
    "answer": "B"
  },
  {
    "id": 214,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tại sao việc hiểu các \"quan điểm\" (perspectives) khác nhau của các bên liên quan (stakeholders) lại quan trọng khi phân tích một hệ thống xã hội hoặc tổ chức?",
    "options": {
      "A": "Vì chỉ có một quan điểm duy nhất là đúng.",
      "B": "Để làm cho việc phân tích phức tạp hơn.",
      "C": "Vì mỗi bên liên quan có thể có mục tiêu, mô hình tư duy và định nghĩa vấn đề khác nhau, ảnh hưởng đến hành vi và sự tương tác trong hệ thống.",
      "D": "Để có thể bỏ qua những quan điểm không quan trọng."
    },
    "answer": "C"
  },
  {
    "id": 215,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tư duy cơ giới (mechanistic thinking) thường xem xét thế giới và các hệ thống dựa trên nguyên tắc nào, dẫn đến việc Edgar Morin gọi là \"tư duy manh mún\"?",
    "options": {
      "A": "Tính phức hợp, tính bất định và tính toàn thể.",
      "B": "Quy giản luận, tất định luận và nhị nguyên luận.",
      "C": "Tư duy động, tư duy theo mô hình và tư duy tương quan.",
      "D": "Liên kết, tổng hợp và kết hợp tạo yếu tố mới."
    },
    "answer": "B"
  },
  {
    "id": 216,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Peter Senge định nghĩa tư duy hệ thống là một khuôn khổ để nhìn thấy điều gì hơn là những \"bức ảnh chụp nhanh tĩnh\"?",
    "options": {
      "A": "Các sự vật riêng lẻ.",
      "B": "Các chi tiết kỹ thuật cụ thể.",
      "C": "Các khuôn mẫu (patterns) và mối quan hệ qua lại.",
      "D": "Các giải pháp tức thời cho vấn đề."
    },
    "answer": "C"
  },
  {
    "id": 217,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Đặc điểm \"có tính mục tiêu\" của tư duy hệ thống khi áp dụng vào giải quyết vấn đề đòi hỏi điều gì đầu tiên?",
    "options": {
      "A": "Phải có nhiều mục tiêu khác nhau để lựa chọn.",
      "B": "Mục tiêu phải luôn hướng đến lợi ích kinh tế tối đa.",
      "C": "Phải xác định rõ ràng mục tiêu cụ thể muốn đạt được để định hướng giải pháp.",
      "D": "Mục tiêu phải được giữ bí mật với các thành viên khác trong hệ thống."
    },
    "answer": "C"
  },
  {
    "id": 218,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "\"Tư duy theo tương quan\" trong tư duy hệ thống tập trung vào việc gì?",
    "options": {
      "A": "Chỉ phân tích các yếu tố riêng lẻ mà không xem xét mối liên hệ.",
      "B": "Nhận diện và hiểu rõ các mối liên kết, sự phụ thuộc, và cách một yếu tố thay đổi ảnh hưởng đến các yếu tố khác.",
      "C": "Chỉ xem xét các mối quan hệ trực tiếp và ngắn hạn.",
      "D": "Xây dựng các mô hình tĩnh của hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 219,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Phương pháp \"Tổng hợp\" (Synthesis) trong tư duy hệ thống đối lập với phương pháp nào của tư duy cơ giới?",
    "options": {
      "A": "Phân tích (Analysis) - chia nhỏ đối tượng thành các phần để nghiên cứu.",
      "B": "Quy nạp (Induction) - đi từ cụ thể đến tổng quát.",
      "C": "Diễn dịch (Deduction) - đi từ tổng quát đến cụ thể.",
      "D": "Mô hình hóa (Modeling) - tạo ra các mô hình đơn giản hóa."
    },
    "answer": "A"
  },
  {
    "id": 220,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Hiện tượng \"tảo nở hoa\" (algal bloom) trong một cái ao, nơi sự phong phú của một yếu tố (tảo) liên tục tự gia tăng và gây ảnh hưởng xấu đến các yếu tố khác, là ví dụ minh họa cho loại vòng phản hồi nào?",
    "options": {
      "A": "Vòng phản hồi cân bằng (Balancing feedback loop).",
      "B": "Vòng phản hồi củng cố/tăng cường (Reinforcing/Positive feedback loop) không có lợi.",
      "C": "Vòng phản hồi hỗn hợp.",
      "D": "Không có vòng phản hồi nào."
    },
    "answer": "B"
  },
  {
    "id": 221,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tại sao \"chức năng/mục đích\" được coi là thành phần quan trọng nhất của một hệ thống theo quan điểm tư duy hệ thống?",
    "options": {
      "A": "Vì nó là thành phần dễ thay đổi nhất trong hệ thống.",
      "B": "Vì khi chức năng/mục đích thay đổi, toàn bộ hệ thống thường sẽ thay đổi theo, ngay cả khi các phần tử và liên kết giữ nguyên.",
      "C": "Vì nó quyết định số lượng phần tử có trong hệ thống.",
      "D": "Vì nó không bao giờ bị ảnh hưởng bởi môi trường bên ngoài."
    },
    "answer": "B"
  },
  {
    "id": 222,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Nguyên tắc \"Nhìn vào tổng thể thay vì từng phần riêng lẻ\" trong tư duy hệ thống giúp tránh được điều gì khi đưa ra giải pháp?",
    "options": {
      "A": "Tránh việc phải xem xét các mối quan hệ phức tạp.",
      "B": "Tránh đưa ra các giải pháp chỉ mang tính tạm thời, giải quyết triệu chứng mà không giải quyết gốc rễ.",
      "C": "Tránh việc phải thay đổi các quy tắc chi phối hệ thống.",
      "D": "Tránh việc phải dự đoán các hậu quả không mong muốn."
    },
    "answer": "B"
  },
  {
    "id": 223,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Việc một nhà quản lý liên tục tăng cường kiểm soát đối với nhân viên khi thấy hiệu suất giảm (hành động A), nhưng sự kiểm soát quá mức lại làm giảm động lực và sự sáng tạo của nhân viên (kết quả B), dẫn đến hiệu suất tiếp tục giảm (kết quả C), là một ví dụ về điều gì?",
    "options": {
      "A": "Một vòng phản hồi âm hiệu quả giúp ổn định hệ thống.",
      "B": "Hậu quả không mong muốn phát sinh từ việc không hiểu rõ các vòng phản hồi và độ trễ.",
      "C": "Một điểm bẩy được áp dụng thành công.",
      "D": "Sự cần thiết của tư duy phân mảnh trong quản lý."
    },
    "answer": "B"
  },
  {
    "id": 224,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Theo Donella H. Meadows, việc thay đổi \"các mô hình tư duy (paradigms)\" của những người trong hệ thống được xem là loại điểm bẩy nào?",
    "options": {
      "A": "Điểm bẩy có hiệu quả thấp, chỉ mang tính điều chỉnh nhỏ.",
      "B": "Điểm bẩy không có tác động thực tế đến hành vi hệ thống.",
      "C": "Điểm bẩy có hiệu quả cao, có khả năng tạo ra những thay đổi sâu sắc và đáng kể.",
      "D": "Điểm bẩy chỉ áp dụng được cho các hệ thống tự nhiên."
    },
    "answer": "C"
  },
  {
    "id": 225,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tại sao nguyên tắc \"Học hỏi và điều chỉnh dựa trên phản hồi\" lại quan trọng để một hệ thống duy trì sự linh hoạt và khả năng thích nghi?",
    "options": {
      "A": "Vì nó giúp hệ thống bỏ qua các thông tin từ môi trường.",
      "B": "Vì nó cho phép hệ thống duy trì một trạng thái cố định, không thay đổi.",
      "C": "Vì nó giúp hệ thống thu thập thông tin về hành vi của mình, đánh giá hiệu quả và điều chỉnh để đạt mục tiêu tốt hơn khi môi trường thay đổi.",
      "D": "Vì nó chỉ tập trung vào việc điều chỉnh các dòng chảy vào (inflows)."
    },
    "answer": "C"
  },
  {
    "id": 226,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Trong sơ đồ dòng chảy của hệ thống minh họa vòng phản hồi, \"Trạng thái được nhận thức (Perceived State)\" đóng vai trò gì?",
    "options": {
      "A": "Là mục tiêu cuối cùng mà hệ thống hướng tới.",
      "B": "Là các yếu tố hoặc hành động làm giảm trạng thái của hệ thống.",
      "C": "Là cách trạng thái thực của hệ thống được đo lường và nhận biết, dùng làm tín hiệu để so sánh với mục tiêu.",
      "D": "Là sự chênh lệch giữa trạng thái hiện tại và mục tiêu."
    },
    "answer": "C"
  },
  {
    "id": 227,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Một trong những lý do chính gây ra \"Khó khăn trong việc bao quát toàn bộ hệ thống phức tạp\" khi áp dụng tư duy hệ thống là gì?",
    "options": {
      "A": "Các hệ thống phức tạp luôn có ít yếu tố và mối quan hệ.",
      "B": "Các yếu tố trong hệ thống phức tạp luôn tĩnh và không thay đổi.",
      "C": "Số lượng lớn các yếu tố tương tác và khả năng biến đổi, tạo ra các tác động không lường trước.",
      "D": "Tư duy hệ thống chỉ phù hợp với các hệ thống đơn giản."
    },
    "answer": "C"
  },
  {
    "id": 228,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Giới hạn của tư duy hệ thống \"bị giới hạn bởi các khung tư duy hiện có\" ngụ ý điều gì?",
    "options": {
      "A": "Các mô hình tư duy hiện có luôn đủ linh hoạt để giải quyết mọi vấn đề mới.",
      "B": "Việc quá dựa dẫm vào các mô hình, lý thuyết quen thuộc có thể cản trở việc nhìn nhận vấn đề theo cách mới hoặc tìm ra giải pháp sáng tạo.",
      "C": "Khung tư duy hiện có luôn giúp bao quát toàn bộ hệ thống một cách dễ dàng.",
      "D": "Không cần thiết phải cập nhật hay thay đổi các khung tư duy đã được thiết lập."
    },
    "answer": "B"
  },
  {
    "id": 229,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "\"Vấn đề tư duy phân mảnh\" trong các dự án lớn, có nhiều nhóm tham gia, thường dẫn đến hậu quả gì?",
    "options": {
      "A": "Tăng cường sự phối hợp và đồng nhất mục tiêu giữa các nhóm.",
      "B": "Các nhóm luôn có cái nhìn toàn cảnh về dự án.",
      "C": "Dễ mất tính nhất quán, toàn diện và khó khăn trong việc ghép nối các kết quả phân tích riêng lẻ.",
      "D": "Luôn dẫn đến việc hoàn thành dự án nhanh hơn dự kiến."
    },
    "answer": "C"
  },
  {
    "id": 230,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "\"Hạn chế trong tính liên kết giữa các hệ thống con\" có thể biểu hiện như thế nào trong một tổ chức?",
    "options": {
      "A": "Các hệ thống con luôn có mục tiêu hoàn toàn thống nhất với mục tiêu chung.",
      "B": "Luôn có sự hỗ trợ tối đa và phối hợp nhịp nhàng giữa các hệ thống con.",
      "C": "Có thể xảy ra xung đột mục tiêu giữa các hệ thống con, hoặc một hệ thống con hoạt động tốt nhưng không đóng góp tối đa cho hệ thống chung.",
      "D": "Các hệ thống con luôn chia sẻ dữ liệu và thông tin một cách hiệu quả."
    },
    "answer": "C"
  },
  {
    "id": 231,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Nguyên lý bất định Heisenberg và Nguyên lý bổ sung Bohr, được đề cập trong bối cảnh chuyển từ tư duy cơ giới sang tư duy hệ thống, cho thấy điều gì về bản chất của thế giới vi mô?",
    "options": {
      "A": "Mọi hiện tượng trong thế giới vi mô đều hoàn toàn tất định và có thể dự đoán chính xác.",
      "B": "Khách thể tồn tại tuyệt đối và khoa học có thể đạt được sự khách quan trọn vẹn.",
      "C": "Các \"hạt\" vi mô có thể biểu hiện cả tính sóng và tính hạt, và có những giới hạn trong việc xác định đồng thời một số cặp tính chất.",
      "D": "Các định luật của Newton hoàn toàn áp dụng được cho thế giới vi mô."
    },
    "answer": "C"
  },
  {
    "id": 232,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Việc một doanh nghiệp chỉ tập trung vào việc giảm chi phí sản xuất (tối ưu hóa một phần) mà không xem xét đến ảnh hưởng của nó lên chất lượng sản phẩm, sự hài lòng của nhân viên, và mối quan hệ với nhà cung cấp (các phần khác và tổng thể) là biểu hiện của việc thiếu áp dụng nguyên tắc nào của tư duy hệ thống?",
    "options": {
      "A": "Hiểu các vòng phản hồi.",
      "B": "Nhìn vào tổng thể thay vì từng phần riêng lẻ.",
      "C": "Tìm kiếm các điểm bẩy.",
      "D": "Học hỏi và điều chỉnh dựa trên phản hồi."
    },
    "answer": "B"
  },
  {
    "id": 233,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tại sao việc sử dụng \"Bản đồ hệ thống (Systems Mapping)\" lại là một công cụ quan trọng cho người thực hành tư duy hệ thống?",
    "options": {
      "A": "Để chứng minh rằng tất cả các yếu tố trong hệ thống đều hoạt động độc lập.",
      "B": "Để đơn giản hóa hệ thống bằng cách loại bỏ các mối liên kết phức tạp.",
      "C": "Để trực quan hóa các yếu tố, mối liên kết, vòng phản hồi và động lực học trong một hệ thống phức tạp, từ đó phát triển các can thiệp hiệu quả.",
      "D": "Để tập trung vào các giải pháp tuyến tính, một nguyên nhân - một kết quả."
    },
    "answer": "C"
  },
  {
    "id": 234,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tư duy hệ thống nhấn mạnh rằng hành vi của một hệ thống chủ yếu được quyết định bởi yếu tố nào?",
    "options": {
      "A": "Chỉ bởi các yếu tố bên ngoài tác động vào hệ thống.",
      "B": "Chỉ bởi ý chí chủ quan của các cá nhân trong hệ thống.",
      "C": "Cấu trúc của hệ thống, bao gồm các phần tử và mối liên kết giữa chúng.",
      "D": "Số lượng các phần tử trong hệ thống."
    },
    "answer": "C"
  },
  {
    "id": 235,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Một công ty áp dụng chính sách thưởng theo doanh số cá nhân rất cao cho nhân viên bán hàng. Điều này thúc đẩy doanh số tăng mạnh (vòng lặp tăng cường). Tuy nhiên, nó cũng dẫn đến việc nhân viên cạnh tranh không lành mạnh, giảm chia sẻ thông tin và tập trung vào khách hàng ngắn hạn, làm giảm chất lượng dịch vụ và uy tín công ty (vòng lặp cân bằng/giới hạn). Điểm \"đòn bẩy\" (leverage point) để cải thiện tình hình một cách bền vững có thể là gì?",
    "options": {
      "A": "Tăng gấp đôi tiền thưởng để cạnh tranh mạnh hơn nữa.",
      "B": "Sa thải những nhân viên bán hàng kém nhất.",
      "C": "Thay đổi cơ chế thưởng, kết hợp cả chỉ tiêu cá nhân và chỉ tiêu hợp tác, chất lượng dịch vụ.",
      "D": "Yêu cầu nhân viên làm việc nhiều giờ hơn."
    },
    "answer": "C"
  },
  {
    "id": 236,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Một thành phố đang đối mặt với vấn đề ô nhiễm không khí nghiêm trọng do giao thông. Giải pháp ngắn hạn là cấm xe theo ngày chẵn/lẻ. Tuy nhiên, về lâu dài, người dân có thể mua thêm xe thứ hai hoặc chuyển sang các phương tiện khác không bị cấm, làm giảm hiệu quả của chính sách. Để tìm giải pháp bền vững hơn (ví dụ: phát triển giao thông công cộng, quy hoạch đô thị), nhà quản lý cần áp dụng tư duy gì?",
    "options": {
      "A": "Tư duy tập trung vào việc thực thi lệnh cấm thật nghiêm khắc.",
      "B": "Tư duy chờ đợi công nghệ mới tự giải quyết vấn đề.",
      "C": "Tư duy hệ thống, xem xét các tác động lan tỏa, vòng lặp phản hồi và tìm kiếm các điểm đòn bẩy sâu hơn.",
      "D": "Tư duy đổ lỗi cho ý thức người dân kém."
    },
    "answer": "C"
  },
  {
    "id": 237,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Hiện tượng \"Success to the Successful\" (Thành công nuôi dưỡng thành công) mô tả một vòng lặp tăng cường nơi những người/bộ phận ban đầu có lợi thế nhỏ sẽ nhận được nhiều nguồn lực hơn, từ đó càng thành công hơn và bỏ xa những người/bộ phận khác. Việc nhận diện và can thiệp vào archetype này đòi hỏi nhà quản lý phải làm gì?",
    "options": {
      "A": "Cung cấp thêm nguồn lực cho những người đã thành công nhất.",
      "B": "Loại bỏ hoàn toàn cạnh tranh trong tổ chức.",
      "C": "Tìm cách phân bổ lại nguồn lực một cách công bằng hơn hoặc tạo cơ chế hỗ trợ cho những người/bộ phận yếu thế hơn để phá vỡ vòng lặp.",
      "D": "Đơn giản là chấp nhận sự bất bình đẳng đó."
    },
    "answer": "C"
  },
  {
    "id": 238,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Một công ty đầu tư mạnh vào công nghệ mới để cải thiện hiệu suất vận hành, nhưng không chú trọng đến việc đào tạo nhân viên để sử dụng công nghệ này. Kết quả là hiệu quả không tăng đáng kể, và công ty tiếp tục tập trung vào việc nâng cấp công nghệ mà không xem xét các yếu tố khác. Đây là ví dụ của vấn đề nào trong tư duy hệ thống?",
    "options": {
      "A": "Không bao quát được toàn bộ hệ thống phức tạp.",
      "B": "Tư duy phân mảnh, chỉ tập trung vào một phần của hệ thống",
      "C": "Thiếu liên kết giữa các thành phần của hệ thống",
      "D": "Bỏ qua các nguyên tắc cơ bản của tư duy hệ thống"
    },
    "answer": "C"
  },
  {
    "id": 239,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Một vấn đề phức tạp như \"nghèo đói ở một vùng nông thôn\" thường có nhiều nguyên nhân gốc rễ liên quan đến nhau (giáo dục, y tế, hạ tầng, chính sách, văn hóa...). Việc cố gắng giải quyết bằng một giải pháp đơn lẻ (ví dụ: chỉ cho tiền trợ cấp) thường không hiệu quả lâu dài. Điều này minh họa giới hạn nào của cách tiếp cận phi hệ thống?",
    "options": {
      "A": "Bỏ qua các vòng lặp phản hồi và sự tương tác phức tạp giữa các yếu tố.",
      "B": "Hệ thống quá đơn giản để phân tích.",
      "C": "Vấn đề không có nguyên nhân rõ ràng.",
      "D": "Thiếu dữ liệu thống kê chính xác."
    },
    "answer": "A"
  },
  {
    "id": 240,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tại sao việc hiểu rõ \"cấu trúc\" của hệ thống (các thành phần và cách chúng kết nối, các vòng lặp phản hồi) lại quan trọng để giải thích và dự đoán \"hành vi\" của hệ thống đó?",
    "options": {
      "A": "Vì cấu trúc và hành vi hoàn toàn không liên quan đến nhau.",
      "B": "Vì hành vi của hệ thống chủ yếu do các yếu tố bên ngoài quyết định.",
      "C": "Vì cấu trúc tạo ra các ràng buộc và động lực dẫn đến các kiểu hành vi lặp đi lặp lại của hệ thống (hành vi là hệ quả của cấu trúc).",
      "D": "Vì chỉ cần thay đổi một thành phần nhỏ là có thể thay đổi hoàn toàn hành vi hệ thống một cách dễ dàng."
    },
    "answer": "C"
  },
  {
    "id": 241,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tại sao việc chỉ dựa vào dữ liệu quá khứ để dự đoán tương lai của một hệ thống phức tạp (như thị trường chứng khoán, thời tiết) thường không chính xác?",
    "options": {
      "A": "Vì dữ liệu quá khứ luôn luôn sai.",
      "B": "Vì các hệ thống phức tạp thường có tính phi tuyến (non-linear), nhạy cảm với điều kiện ban đầu và có thể thay đổi cấu trúc hoặc hành vi đột ngột.",
      "C": "Vì không ai có đủ khả năng phân tích dữ liệu.",
      "D": "Vì tương lai luôn lặp lại chính xác quá khứ."
    },
    "answer": "B"
  },
  {
    "id": 242,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tại sao việc can thiệp vào các \"điểm đòn bẩy\" cấp cao hơn trong một hệ thống (ví dụ: thay đổi mục tiêu, thay đổi mô hình tư duy, thay đổi cấu trúc thông tin) thường khó hơn nhưng lại có tiềm năng tạo ra sự thay đổi bền vững hơn so với việc can thiệp ở cấp thấp (ví dụ: điều chỉnh các thông số, thay đổi lượng tồn kho)?",
    "options": {
      "A": "Vì các điểm cấp thấp dễ thay đổi hơn và hiệu quả hơn.",
      "B": "Vì các điểm cấp cao đòi hỏi sự thay đổi sâu sắc hơn về cách nhìn nhận và vận hành hệ thống, nhưng chúng định hình các hành vi ở cấp thấp hơn.",
      "C": "Vì không ai biết các điểm đòn bẩy cấp cao nằm ở đâu.",
      "D": "Vì thay đổi ở cấp cao luôn gây ra sự phản kháng mạnh mẽ hơn."
    },
    "answer": "B"
  },
  {
    "id": 243,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Khái niệm \"tính bất toàn của mọi giả thuyết khoa học\" mà Godel chỉ ra, và được chấp nhận rộng rãi trong tư duy hệ thống, có ý nghĩa như thế nào đối với việc giải quyết các vấn đề phức tạp?",
    "options": {
      "A": "Mọi vấn đề phức tạp đều không thể giải quyết được bằng khoa học.",
      "B": "Chúng ta nên ngừng việc xây dựng các giả thuyết khoa học.",
      "C": "Cần nhận thức rằng không có mô hình hay lý thuyết nào là hoàn hảo tuyệt đối và có thể giải thích mọi thứ; do đó cần sự linh hoạt, sẵn sàng điều chỉnh và kết hợp nhiều góc nhìn.",
      "D": "Chỉ những giả thuyết được chứng minh bằng toán học mới có giá trị."
    },
    "answer": "C"
  },
  {
    "id": 244,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Khi phân tích một hệ thống xã hội phức tạp bằng tư duy hệ thống, việc xác định \"nguồn dự trữ (stocks)\" và \"dòng chảy (flows)\" (ví dụ: dân số là stock, tỷ lệ sinh/tử là flow) giúp ích gì nhất?",
    "options": {
      "A": "Chỉ để mô tả trạng thái tĩnh của hệ thống tại một thời điểm.",
      "B": "Để hiểu được động lực học của hệ thống, cách các lượng tích lũy thay đổi theo thời gian dưới tác động của các yếu tố làm tăng hoặc giảm chúng, và cách chúng tạo ra các vòng lặp phản hồi.",
      "C": "Để chứng minh rằng mọi hệ thống đều có xu hướng tiến tới suy giảm.",
      "D": "Chỉ để xác định các phần tử riêng lẻ của hệ thống."
    },
    "answer": "B"
  },
  {
    "id": 245,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Nguyên tắc \"Tìm kiếm các điểm bẩy (Leverage Points)\" trong tư duy hệ thống cho rằng không phải mọi can thiệp vào hệ thống đều có tác động như nhau. Một can thiệp hiệu quả thường nhắm vào đâu?",
    "options": {
      "A": "Những yếu tố dễ thay đổi nhất nhưng ít ảnh hưởng nhất đến hành vi tổng thể của hệ thống.",
      "B": "Những vị trí hoặc quy tắc cốt lõi trong cấu trúc hệ thống mà một thay đổi nhỏ ở đó có thể tạo ra những biến đổi lớn và tích cực cho toàn hệ thống.",
      "C": "Chỉ các dòng chảy vào (inflows) của hệ thống.",
      "D": "Bất kỳ phần tử nào của hệ thống mà không cần phân tích kỹ lưỡng."
    },
    "answer": "B"
  },
  {
    "id": 246,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Giới hạn \"Vấn đề tư duy phân mảnh\" khi áp dụng tư duy hệ thống thường xảy ra trong các tổ chức lớn có nhiều phòng ban. Điều này có thể dẫn đến hậu quả tiêu cực nào sau đây, ngay cả khi mỗi phòng ban đều hoạt động hiệu quả theo cách riêng?",
    "options": {
      "A": "Sự phối hợp giữa các phòng ban trở nên quá chặt chẽ, làm giảm tính linh hoạt.",
      "B": "Mục tiêu chung của tổ chức luôn được ưu tiên hàng đầu bởi tất cả các phòng ban.",
      "C": "Các phòng ban có thể đưa ra các quyết định tối ưu cho riêng mình nhưng lại mâu thuẫn hoặc gây hại cho mục tiêu tổng thể của tổ chức do thiếu cái nhìn toàn cục và sự đồng bộ.",
      "D": "Dữ liệu từ các phòng ban luôn được tổng hợp một cách dễ dàng và nhất quán."
    },
    "answer": "C"
  },
  {
    "id": 247,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Việc áp dụng một chính sách mới (ví dụ: trợ cấp nông nghiệp) có thể mang lại lợi ích ngắn hạn, nhưng về lâu dài lại gây ra các hậu quả không mong muốn (ví dụ: phụ thuộc vào trợ cấp, méo mó thị trường). Điều này minh họa sự cần thiết phải chú trọng đến nguyên tắc nào của tư duy hệ thống khi ra quyết định?",
    "options": {
      "A": "Chỉ tập trung vào việc đạt được mục tiêu ngắn hạn.",
      "B": "Bỏ qua các vòng phản hồi và độ trễ vì chúng quá phức tạp.",
      "C": "Dự đoán các hậu quả không mong muốn và xem xét các tác động dài hạn, đa chiều của một can thiệp.",
      "D": "Luôn giữ nguyên các mô hình tư duy và chiến lược đã thành công trong quá khứ."
    },
    "answer": "C"
  },
  {
    "id": 248,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Tại sao việc hiểu và quản lý \"độ trễ\" (delays) trong một hệ thống lại cực kỳ quan trọng, ví dụ như trong việc điều hành chính sách kinh tế hoặc quản lý chuỗi cung ứng?",
    "options": {
      "A": "Vì độ trễ luôn giúp hệ thống phản ứng nhanh hơn và chính xác hơn.",
      "B": "Vì việc không nhận diện hoặc đánh giá thấp độ trễ có thể khiến các nhà quản lý đưa ra hành động can thiệp không kịp thời, phản ứng thái quá, hoặc gây ra các chu kỳ dao động không mong muốn trong hệ thống.",
      "C": "Vì độ trễ chỉ xảy ra trong các hệ thống đơn giản, dễ quản lý.",
      "D": "Vì độ trễ luôn là một yếu tố tích cực, giúp hệ thống có thêm thời gian để chuẩn bị."
    },
    "answer": "B"
  },
  {
    "id": 249,
    "category": "Phần 4: Tư duy Hệ thống Nâng cao",
    "question": "Trong sơ đồ dòng chảy minh họa vòng phản hồi của một hệ thống, yếu tố \"Sự khác biệt (Discrepancy)\" giữa \"Trạng thái được nhận thức (Perceived State)\" và \"Mục tiêu (Goal)\" có vai trò then chốt như thế nào?",
    "options": {
      "A": "Nó luôn làm cho hệ thống trở nên mất ổn định hơn.",
      "B": "Nó là tín hiệu kích hoạt các hành động điều chỉnh (thay đổi dòng chảy vào/ra) nhằm đưa hệ thống về gần hơn với mục tiêu, tạo nên cơ chế tự điều chỉnh.",
      "C": "Nó chỉ ra rằng mục tiêu của hệ thống đã được hoàn thành.",
      "D": "Nó đại diện cho các yếu tố bên ngoài không thể kiểm soát được."
    },
    "answer": "B"
  },
  {
    "id": 250,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật \"Brainstorming\" (Công não) hiệu quả nhất cho mục đích nào sau đây?",
    "options": {
      "A": "Phân tích chi tiết nguyên nhân gốc rễ của một vấn đề.",
      "B": "Đánh giá các lựa chọn giải pháp một cách khách quan.",
      "C": "Tạo ra càng nhiều ý tưởng càng tốt trong thời gian ngắn.",
      "D": "Lập kế hoạch chi tiết cho việc thực hiện một dự án."
    },
    "answer": "C"
  },
  {
    "id": 251,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Khi sử dụng \"Sơ đồ tư duy\" (Mind Mapping), bạn thường bắt đầu từ đâu?",
    "options": {
      "A": "Liệt kê các ý tưởng theo danh sách từ trên xuống dưới.",
      "B": "Vẽ một hình ảnh hoặc viết từ khóa trung tâm ở giữa trang giấy.",
      "C": "Viết ra kết luận cuối cùng trước tiên.",
      "D": "Chia trang giấy thành nhiều ô vuông bằng nhau"
    },
    "answer": "B"
  },
  {
    "id": 252,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Mục đích chính của việc sử dụng \"Biểu đồ nhân quả\" (Fishbone Diagram) là gì?",
    "options": {
      "A": "Tạo ra danh sách các giải pháp tiềm năng.",
      "B": "Sắp xếp các ý tưởng theo chủ đề liên quan.",
      "C": "Xác định và phân loại các nguyên nhân gốc rễ của một vấn đề.",
      "D": "Đánh giá mức độ ưu tiên của các công việc."
    },
    "answer": "C"
  },
  {
    "id": 253,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Khi sử dụng kỹ thuật \"5W và 1H\", câu hỏi nào thường giúp khám phá sâu nhất về nguyên nhân của vấn đề?",
    "options": {
      "A": "What?",
      "B": "Where?",
      "C": "When?",
      "D": "Why?"
    },
    "answer": "D"
  },
  {
    "id": 254,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Nguyên tắc \"Hoãn phán xét\" (Defer judgment) trong kỹ thuật Brainstorming có nghĩa là gì?",
    "options": {
      "A": "Chỉ những người có chuyên môn cao mới được phán xét ý tưởng.",
      "B": "Không đưa ra bất kỳ lời khen chê, đánh giá nào đối với các ý tưởng trong giai đoạn tạo ý tưởng.",
      "C": "Phán xét ý tưởng của người khác nhưng không phán xét ý tưởng của mình.",
      "D": "Chỉ phán xét những ý tưởng có vẻ điên rồ nhất."
    },
    "answer": "B"
  },
  {
    "id": 255,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật \"Sơ đồ tư duy\" (Mind Mapping) đặc biệt hữu ích cho việc nào sau đây ngoài việc hệ thống hóa kiến thức?",
    "options": {
      "A": "Viết một báo cáo chi tiết theo trình tự tuyến tính.",
      "B": "Lập kế hoạch cho một dự án hoặc bài thuyết trình.",
      "C": "Thực hiện các phép tính toán phức tạp.",
      "D": "Đánh giá rủi ro tài chính của một ý tưởng."
    },
    "answer": "B"
  },
  {
    "id": 256,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Môi trường lý tưởng để tiến hành một buổi \"Brainstorming\" hiệu quả nên như thế nào?",
    "options": {
      "A": "Nghiêm túc, trang trọng, chỉ quản lý cấp cao được phát biểu.",
      "B": "Cạnh tranh gay gắt, mọi người cố gắng bác bỏ ý kiến của nhau.",
      "C": "Thoải mái, cởi mở, khuyến khích sự tham gia và không phán xét.",
      "D": "Yên tĩnh tuyệt đối, mỗi người tự suy nghĩ riêng."
    },
    "answer": "C"
  },
  {
    "id": 257,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật \"SCAMPER\" yêu cầu xem xét việc \"Thích ứng\" (Adapt). Điều này có nghĩa là gì khi áp dụng để cải tiến một sản phẩm?",
    "options": {
      "A": "Loại bỏ một phần của sản phẩm.",
      "B": "Kết hợp sản phẩm với một sản phẩm khác.",
      "C": "Điều chỉnh sản phẩm để phù hợp với một mục đích hoặc bối cảnh sử dụng khác.",
      "D": "Thay thế một bộ phận của sản phẩm bằng bộ phận khác"
    },
    "answer": "C"
  },
  {
    "id": 258,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Phương pháp \"5W và 1H\" (Who, What, Where, When, Why, How) thường được dùng để làm gì?",
    "options": {
      "A": "Đưa ra quyết định cuối cùng một cách nhanh chóng.",
      "B": "Thu thập thông tin và làm rõ vấn đề một cách toàn diện.",
      "C": "Tạo ra các ý tưởng hoàn toàn mới lạ.",
      "D": "Phân loại các ý tưởng đã có."
    },
    "answer": "B"
  },
  {
    "id": 259,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật nào phù hợp nhất để một người tự hệ thống hóa kiến thức về một chủ đề phức tạp, bắt đầu từ ý chính và phát triển ra các ý phụ?",
    "options": {
      "A": "Brainstorming.",
      "B": "Sơ đồ tư duy.",
      "C": "Sáu chiếc mũ tư duy.",
      "D": "Phương pháp 5W1H."
    },
    "answer": "B"
  },
  {
    "id": 260,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong kỹ thuật \"Sáu chiếc mũ tư duy\", chiếc mũ nào tập trung vào cảm xúc, trực giác và linh cảm về một vấn đề hoặc ý tưởng?",
    "options": {
      "A": "Mũ Trắng.",
      "B": "Mũ Đen.",
      "C": "Mũ Vàng.",
      "D": "Mũ Đỏ."
    },
    "answer": "D"
  },
  {
    "id": 261,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong kỹ thuật \"Sáu chiếc mũ tư duy\", chiếc mũ nào đại diện cho tư duy logic, khách quan, dựa trên dữ kiện và thông tin?",
    "options": {
      "A": "Mũ Đỏ",
      "B": "Mũ Vàng",
      "C": "Mũ Đen",
      "D": "Mũ Trắng"
    },
    "answer": "D"
  },
  {
    "id": 262,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật \"Sáu chiếc mũ tư duy\" (Six Thinking Hats) giúp một nhóm làm việc hiệu quả hơn bằng cách nào?",
    "options": {
      "A": "Khuyến khích mọi người chỉ trích ý tưởng của nhau.",
      "B": "Buộc mọi người phải đồng ý với người lãnh đạo.",
      "C": "Giúp mọi người cùng tập trung vào một khía cạnh của vấn đề tại một thời điểm.",
      "D": "Loại bỏ hoàn toàn cảm xúc ra khỏi quá trình ra quyết định."
    },
    "answer": "C"
  },
  {
    "id": 263,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong kỹ thuật \"Sáu chiếc mũ tư duy\", chiếc mũ nào đóng vai trò điều phối, quản lý quy trình tư duy của cả nhóm?",
    "options": {
      "A": "Mũ Đỏ.",
      "B": "Mũ Trắng.",
      "C": "Mũ Xanh Dương.",
      "D": "Mũ Xanh Lá Cây."
    },
    "answer": "C"
  },
  {
    "id": 264,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật SCAMPER yêu cầu bạn xem xét việc \"Loại bỏ\" (Eliminate). Ví dụ nào sau đây thể hiện việc áp dụng yếu tố này để cải tiến điện thoại di động?",
    "options": {
      "A": "Thêm chức năng chụp ảnh tốt hơn.",
      "B": "Kết hợp điện thoại với máy nghe nhạc.",
      "C": "Bỏ bớt các nút bấm vật lý để dùng màn hình cảm ứng hoàn toàn.",
      "D": "Sử dụng vật liệu vỏ mới bền hơn."
    },
    "answer": "C"
  },
  {
    "id": 265,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật nào sau đây phù hợp nhất để nhanh chóng tạo ra một lượng lớn các ý tưởng ban đầu cho một vấn đề, mà không cần quan tâm đến chất lượng hay tính khả thi ngay lập tức?",
    "options": {
      "A": "Phân tích SWOT.",
      "B": "Biểu đồ nhân quả.",
      "C": "Brainstorming.",
      "D": "Sáu chiếc mũ tư duy"
    },
    "answer": "C"
  },
  {
    "id": 266,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật SCAMPER (Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse) là một công cụ hữu ích cho việc:",
    "options": {
      "A": "Phân tích tài chính dự án.",
      "B": "Quản lý rủi ro.",
      "C": "Cải tiến và phát triển ý tưởng mới từ cái cũ.",
      "D": "Lập kế hoạch tiến độ công việc."
    },
    "answer": "C"
  },
  {
    "id": 267,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật DOIT (Define, Open, Identify, Transform) là một quy trình có cấu trúc nhằm mục đích gì?",
    "options": {
      "A": "Chỉ để xác định vấn đề.",
      "B": "Phân tích rủi ro tài chính.",
      "C": "Giải quyết vấn đề một cách sáng tạo từ đầu đến cuối.",
      "D": "Lập kế hoạch truyền thông dự án."
    },
    "answer": "C"
  },
  {
    "id": 268,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong kỹ thuật DOIT, bước \"Transform\" (Chuyển đổi) liên quan đến việc gì?",
    "options": {
      "A": "Xác định lại vấn đề một lần nữa.",
      "B": "Mở rộng tư duy để tìm ý tưởng.",
      "C": "Xác định giải pháp tốt nhất.",
      "D": "Biến giải pháp đã chọn thành hành động cụ thể, lập kế hoạch thực hiện."
    },
    "answer": "D"
  },
  {
    "id": 269,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Phương pháp 5W1H giúp thu thập thông tin về một vấn đề. Câu hỏi \"Who?\" (Ai?) nhằm xác định điều gì?",
    "options": {
      "A": "Nguyên nhân của vấn đề.",
      "B": "Thời gian xảy ra vấn đề.",
      "C": "Những người hoặc nhóm người có liên quan đến vấn đề.",
      "D": "Cách thức vấn đề xảy ra."
    },
    "answer": "C"
  },
  {
    "id": 270,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong Biểu đồ nhân quả (Fishbone Diagram), vấn đề chính cần phân tích thường được đặt ở vị trí nào?",
    "options": {
      "A": "Ở phần đuôi cá.",
      "B": "Ở các xương nhánh.",
      "C": "Ở phần đầu cá.",
      "D": "Ở bất kỳ vị trí nào trên biểu đồ."
    },
    "answer": "C"
  },
  {
    "id": 271,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Chữ \"H\" trong phương pháp 5W1H KHÔNG bao gồm ý nghĩa nào sau đây?",
    "options": {
      "A": "How.",
      "B": "How many.",
      "C": "How long.",
      "D": "Hope."
    },
    "answer": "D"
  },
  {
    "id": 272,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Bước đầu tiên trong việc vận dụng Phương pháp đối tượng tiêu điểm là gì?",
    "options": {
      "A": "Chọn ngẫu nhiên 3,4 đối tượng khác.",
      "B": "Liệt kê các đặc điểm của đối tượng ngẫu nhiên.",
      "C": "Chọn đối tượng tiêu điểm cần cải tiến.",
      "D": "Đánh giá và lựa chọn những ý tưởng khả thi."
    },
    "answer": "C"
  },
  {
    "id": 273,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong kỹ thuật 6 chiếc mũ tư duy, chiếc mũ nào đại diện cho việc nhìn nhận các mặt tích cực, lạc quan và lợi ích của một vấn đề?",
    "options": {
      "A": "Mũ Đen.",
      "B": "Mũ Vàng.",
      "C": "Mũ Đỏ.",
      "D": "Mũ Trắng."
    },
    "answer": "B"
  },
  {
    "id": 274,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Bước thứ hai (O - Open Mind and Apply Creative Techniques) trong kỹ thuật DOIT nhấn mạnh điều gì?",
    "options": {
      "A": "Chỉ tập trung vào các ý tưởng đã được chứng minh.",
      "B": "Cởi mở ý tưởng, ghi chú lại cả những ý tưởng có vẻ \"điên rồ\".",
      "C": "Xác định ngay giải pháp tốt nhất.",
      "D": "Bắt đầu thực hiện ngay giải pháp."
    },
    "answer": "B"
  },
  {
    "id": 275,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Yếu tố \"S\" (Substitute) trong mô hình SCAMPER gợi ý hành động nào?",
    "options": {
      "A": "Kết hợp các phần lại với nhau.",
      "B": "Thay thế một phần, vật liệu hoặc quy trình của sản phẩm/dịch vụ.",
      "C": "Phóng to hoặc thu nhỏ một khía cạnh nào đó.",
      "D": "Loại bỏ một số thành phần."
    },
    "answer": "B"
  },
  {
    "id": 276,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Mục đích chính của việc sử dụng màu sắc và hình ảnh trong Sơ đồ tư duy là gì?",
    "options": {
      "A": "Làm cho sơ đồ trông phức tạp hơn.",
      "B": "Chỉ để trang trí cho đẹp mắt.",
      "C": "Giúp kích thích não bộ và tăng khả năng ghi nhớ thông tin.",
      "D": "Để phân loại các ý tưởng theo mức độ quan trọng."
    },
    "answer": "C"
  },
  {
    "id": 277,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Nguyên nhân nào sau đây thuộc nhóm \"Machine\" (Máy móc, thiết bị) trong Biểu đồ nhân quả?",
    "options": {
      "A": "Nhân viên thiếu kinh nghiệm.",
      "B": "Vật liệu đầu vào không đạt chuẩn.",
      "C": "Thiết bị hỏng hóc do không được bảo trì định kỳ.",
      "D": "Nhiệt độ môi trường làm việc quá cao."
    },
    "answer": "C"
  },
  {
    "id": 278,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong kỹ thuật 6 chiếc mũ tư duy, nếu một thành viên nói: \"Tôi có linh cảm không tốt về giải pháp này\", họ đang ẩn dụ đội chiếc mũ màu gì?",
    "options": {
      "A": "Mũ Trắng.",
      "B": "Mũ Xanh Lá Cây.",
      "C": "Mũ Đỏ.",
      "D": "Mũ Đen."
    },
    "answer": "C"
  },
  {
    "id": 279,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật \"Brainwriting\" là một biến thể của Brainstorming, trong đó các ý tưởng chủ yếu được:",
    "options": {
      "A": "Trình bày bằng lời nói trực tiếp.",
      "B": "Viết ra giấy và trao đổi giữa các thành viên.",
      "C": "Vẽ thành sơ đồ phức tạp.",
      "D": "Đánh giá ngay lập tức bởi trưởng nhóm."
    },
    "answer": "B"
  },
  {
    "id": 280,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Yếu tố \"P\" (Put to Other Uses) trong mô hình SCAMPER khuyến khích điều gì?",
    "options": {
      "A": "Sửa đổi một phần của sản phẩm.",
      "B": "Tìm kiếm những ứng dụng hoặc mục đích sử dụng mới cho sản phẩm/dịch vụ hiện có.",
      "C": "Kết hợp sản phẩm với một sản phẩm khác.",
      "D": "Đảo ngược quy trình sử dụng sản phẩm."
    },
    "answer": "B"
  },
  {
    "id": 281,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Bước đầu tiên trong việc xây dựng Biểu đồ nhân quả là gì?",
    "options": {
      "A": "Liệt kê tất cả các nguyên nhân nhỏ.",
      "B": "Vẽ các nhánh xương cá chính.",
      "C": "Xác định rõ ràng vấn đề hoặc hậu quả cần phân tích (phần đầu cá).",
      "D": "Phân tích các giải pháp tiềm năng."
    },
    "answer": "C"
  },
  {
    "id": 282,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật nào tập trung vào việc chuyển giao các đặc điểm từ những đối tượng ngẫu nhiên sang đối tượng cần cải tiến?",
    "options": {
      "A": "Sơ đồ tư duy.",
      "B": "Phương pháp đối tượng tiêu điểm.",
      "C": "6 chiếc mũ tư duy.",
      "D": "SCAMPER."
    },
    "answer": "B"
  },
  {
    "id": 283,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong kỹ thuật DOIT, bước \"Identify the Best Solution\" (Xác định lời giải hay nhất) KHÔNG bao gồm hoạt động nào sau đây?",
    "options": {
      "A": "Lựa chọn các phương án bám sát vấn đề cần giải quyết.",
      "B": "Tổng hợp tất cả ưu nhược điểm của từng phương án.",
      "C": "Bắt đầu triển khai ngay ý tưởng đầu tiên nghĩ ra.",
      "D": "Xem xét những hậu quả hoặc những điều bất khả kháng."
    },
    "answer": "C"
  },
  {
    "id": 284,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Nguyên tắc nào của Brainstorming nhấn mạnh việc không đưa ra bất kỳ lời bình luận hay phê phán nào đối với các ý tưởng trong giai đoạn thu thập?",
    "options": {
      "A": "Số lượng tạo ra chất lượng.",
      "B": "Nói không với việc chỉ trích.",
      "C": "Khuyến khích các ý tưởng táo bạo.",
      "D": "Kết hợp và cải thiện những ý tưởng."
    },
    "answer": "B"
  },
  {
    "id": 285,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong kỹ thuật SCAMPER, yếu tố \"E\" (Eliminate) nhằm mục đích gì?",
    "options": {
      "A": "Thêm vào các tính năng mới cho sản phẩm.",
      "B": "Phóng đại một đặc điểm nào đó của sản phẩm.",
      "C": "Loại bỏ những thành phần, tính năng hoặc quy trình không cần thiết để làm sản phẩm đơn giản, hiệu quả hơn.",
      "D": "Thay đổi thứ tự các bước trong quy trình."
    },
    "answer": "C"
  },
  {
    "id": 286,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "So với Brainstorming, kỹ thuật 6 chiếc mũ tư duy có điểm khác biệt chính nào về mục đích?",
    "options": {
      "A": "6 chiếc mũ chỉ tập trung vào việc tạo ra càng nhiều ý tưởng càng tốt.",
      "B": "Brainstorming tập trung vào việc phân tích vấn đề từ nhiều khía cạnh cố định.",
      "C": "6 chiếc mũ tư duy nhằm nắm bắt và đánh giá vấn đề từ nhiều góc nhìn khác nhau một cách có cấu trúc.",
      "D": "Brainstorming luôn đòi hỏi thời gian thực hiện dài hơn."
    },
    "answer": "C"
  },
  {
    "id": 287,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Bạn muốn tìm hiểu TẤT CẢ các nguyên nhân có thể gây ra lỗi \"màn hình xanh\" trên máy tính. Kỹ thuật nào sau đây phù hợp nhất để hệ thống hóa các nguyên nhân theo từng nhóm (phần cứng, phần mềm, người dùng,...)?",
    "options": {
      "A": "Brainstorming.",
      "B": "Sơ đồ tư duy (Mind Mapping).",
      "C": "Biểu đồ nhân quả (Fishbone Diagram).",
      "D": "Kỹ thuật DOIT."
    },
    "answer": "C"
  },
  {
    "id": 288,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Một nhóm đang gặp bế tắc vì quá tập trung vào các hạn chế và rủi ro của một ý tưởng mới. Để thay đổi góc nhìn, người điều phối đề nghị cả nhóm cùng sử dụng \"Chiếc mũ Vàng\" (Yellow Hat). Mục đích là gì?",
    "options": {
      "A": "Để liệt kê tất cả các dữ kiện khách quan.",
      "B": "Để chỉ trích ý tưởng một cách triệt để.",
      "C": "Để khám phá những lợi ích và giá trị tiềm năng của ý tưởng.",
      "D": "Để bộc lộ cảm xúc tiêu cực về ý tưởng."
    },
    "answer": "C"
  },
  {
    "id": 289,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật nào phù hợp nhất khi mục tiêu là đánh giá một ý tưởng hoặc một tình huống từ nhiều góc độ khác nhau một cách có hệ thống và tránh việc mọi người cùng tranh cãi một lúc?",
    "options": {
      "A": "Brainstorming tự do.",
      "B": "Sơ đồ tư duy.",
      "C": "Sáu chiếc mũ tư duy.",
      "D": "Phương pháp đối tượng tiêu điểm."
    },
    "answer": "C"
  },
  {
    "id": 290,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong kỹ thuật \"Sáu chiếc mũ tư duy\", việc sử dụng \"Mũ Đen\" (Black Hat) một cách hiệu quả đòi hỏi điều gì?",
    "options": {
      "A": "Chỉ tập trung vào cảm xúc tiêu cực.",
      "B": "Đưa ra những lời chỉ trích, cảnh báo rủi ro và khó khăn một cách logic và có cơ sở, chứ không phải chỉ trích cảm tính.",
      "C": "Bác bỏ mọi ý tưởng mới ngay lập tức.",
      "D": "Luôn tìm cách trì hoãn việc ra quyết định."
    },
    "answer": "B"
  },
  {
    "id": 291,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong kỹ thuật \"Sáu chiếc mũ tư duy\", chiếc mũ nào đại diện cho việc nhìn vào mặt tích cực và lợi ích của một ý tưởng?",
    "options": {
      "A": "Mũ Trắng.",
      "B": "Mũ Đen.",
      "C": "Mũ Vàng.",
      "D": "Mũ Đỏ."
    },
    "answer": "C"
  },
  {
    "id": 292,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật nào sau đây đặc biệt hữu ích khi bạn muốn cải tiến một sản phẩm hoặc quy trình hiện có bằng cách đặt câu hỏi về việc thay thế, kết hợp, điều chỉnh các yếu tố của nó?",
    "options": {
      "A": "Sơ đồ tư duy.",
      "B": "Biểu đồ nhân quả.",
      "C": "Kỹ thuật SCAMPER.",
      "D": "Brainstorming."
    },
    "answer": "C"
  },
  {
    "id": 293,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật SCAMPER yêu cầu xem xét việc \"Đảo ngược\" (Reverse). Ví dụ nào sau đây thể hiện việc áp dụng yếu tố này?",
    "options": {
      "A": "Làm cho chiếc ô tô bay được (thay đổi chức năng).",
      "B": "Thiết kế nhà hàng mà khách hàng tự phục vụ và dọn dẹp (đảo ngược vai trò).",
      "C": "Làm cho điện thoại nhỏ hơn (điều chỉnh kích thước).",
      "D": "Kết hợp máy ảnh vào điện thoại (kết hợp)."
    },
    "answer": "B"
  },
  {
    "id": 294,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Khi gặp một vấn đề khó, có người không giải quyết theo cách thông thường mà cố tình suy nghĩ theo hướng khác lạ, không theo trình tự logic để tìm ra giải pháp bất ngờ. Đây là ví dụ của kiểu tư duy nào?",
    "options": {
      "A": "Tư duy logic",
      "B": "Tư duy sáng tạo phá cách",
      "C": "Tư duy phê phán",
      "D": "Tư duy sao chép theo khuôn mẫu."
    },
    "answer": "B"
  },
  {
    "id": 295,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật \"Đối tượng tiêu điểm\" (Focal Object) giúp kích thích sự sáng tạo bằng cách nào?",
    "options": {
      "A": "Phân tích chi tiết đặc điểm của đối tượng cần cải tiến.",
      "B": "Tập trung vào việc loại bỏ các yếu tố không cần thiết của đối tượng.",
      "C": "Liên kết ngẫu nhiên đặc điểm của một đối tượng khác với đối tượng cần cải tiến để tạo  ý tưởng mới.",
      "D": "So sánh đối tượng cần cải tiến với các đối thủ cạnh tranh."
    },
    "answer": "C"
  },
  {
    "id": 296,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Một trong những nguyên tắc quan trọng nhất để \"Brainstorming\" hiệu quả là gì?",
    "options": {
      "A": "Chỉ chấp nhận những ý tưởng thực tế, khả thi.",
      "B": "Đánh giá và phê bình ý tưởng ngay khi chúng được nêu ra.",
      "C": "Khuyến khích số lượng và sự đa dạng của ý tưởng, không phán xét ban đầu.",
      "D": "Chỉ cho phép người lãnh đạo nhóm đưa ra ý tưởng."
    },
    "answer": "C"
  },
  {
    "id": 297,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "So với Brainstorming, kỹ thuật \"Brainwriting\" (ví dụ: 6-3-5) có ưu điểm gì?",
    "options": {
      "A": "Khuyến khích sự tranh luận trực tiếp giữa các thành viên.",
      "B": "Chỉ phù hợp cho các vấn đề rất đơn giản.",
      "C": "Giúp những người ít nói hoặc ngại phát biểu có cơ hội đóng góp ý tưởng bình đẳng hơn.",
      "D": "Luôn tạo ra ít ý tưởng hơn Brainstorming."
    },
    "answer": "C"
  },
  {
    "id": 298,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Hạn chế tiềm ẩn của việc sử dụng \"Sơ đồ tư duy\" (Mind Mapping) là gì?",
    "options": {
      "A": "Khó thể hiện các mối quan hệ phi tuyến tính.",
      "B": "Không phù hợp để ghi lại ý tưởng một cách nhanh chóng.",
      "C": "Có thể trở nên phức tạp và khó theo dõi nếu chủ đề quá lớn hoặc cấu trúc không rõ ràng.",
      "D": "Chỉ hữu ích cho những người có năng khiếu nghệ thuật."
    },
    "answer": "C"
  },
  {
    "id": 299,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Khi sử dụng kỹ thuật SCAMPER để cải tiến một chiếc ghế, câu hỏi \"Làm thế nào để kết hợp ghế với bàn làm việc?\" thuộc về yếu tố nào?",
    "options": {
      "A": "Substitute.",
      "B": "Combine .",
      "C": "Adapt.",
      "D": "Modify."
    },
    "answer": "B"
  },
  {
    "id": 300,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Khi sử dụng \"Biểu đồ nhân quả\", các nhánh chính (xương cá lớn) thường đại diện cho điều gì?",
    "options": {
      "A": "Các giải pháp tiềm năng.",
      "B": "Các nhóm nguyên nhân chính (ví dụ: Con người, Quy trình, Máy móc, Nguyên vật liệu...).",
      "C": "Các bước thực hiện giải pháp.",
      "D": "Mức độ nghiêm trọng của vấn đề."
    },
    "answer": "B"
  },
  {
    "id": 301,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Mục đích chính của việc sử dụng câu hỏi \"How?\" (Như thế nào?) trong phương pháp 5W1H là gì?",
    "options": {
      "A": "Xác định nguyên nhân gốc rễ của vấn đề.",
      "B": "Làm rõ quy trình, cách thức thực hiện hoặc cơ chế hoạt động.",
      "C": "Xác định thời điểm xảy ra sự việc.",
      "D": "Liệt kê những người liên quan."
    },
    "answer": "B"
  },
  {
    "id": 302,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật SCAMPER yêu cầu xem xét việc \"Thay thế\" (Substitute). Ví dụ nào sau đây thể hiện việc áp dụng yếu tố này?",
    "options": {
      "A": "Kết hợp điện thoại với máy tính bảng.",
      "B": "Sử dụng năng lượng mặt trời thay vì pin cho một thiết bị.",
      "C": "Thêm bánh xe vào vali.",
      "D": "Làm cho một sản phẩm nhỏ gọn hơn."
    },
    "answer": "B"
  },
  {
    "id": 303,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Điểm khác biệt chính trong cách tiếp cận vấn đề giữa \"Sơ đồ tư duy\" (Mind Mapping) và \"Biểu đồ nhân quả\" (Fishbone Diagram) là gì?",
    "options": {
      "A": "Sơ đồ tư duy tập trung vào liệt kê giải pháp, Biểu đồ nhân quả tập trung vào liệt kê vấn đề.",
      "B": "Sơ đồ tư duy thể hiện cấu trúc ý tưởng tỏa ra từ trung tâm, Biểu đồ nhân quả tập trung tìm nguyên nhân gốc rễ của một vấn đề cụ thể.",
      "C": "Sơ đồ tư duy luôn sử dụng 6 màu sắc chính, Biểu đồ nhân quả không quy định màu sắc.",
      "D": "Sơ đồ tư duy chỉ dùng cho cá nhân, Biểu đồ nhân quả chỉ dùng cho nhóm."
    },
    "answer": "B"
  },
  {
    "id": 304,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Khi áp dụng Phương pháp 5W1H, câu hỏi \"Why?\" thường được lặp lại nhiều lần (như trong kỹ thuật 5 Whys) nhằm mục đích gì?",
    "options": {
      "A": "Để xác định tất cả những người liên quan đến vấn đề.",
      "B": "Để tìm hiểu sâu hơn về các nguyên nhân gốc rễ, thay vì chỉ dừng lại ở các triệu chứng bề mặt.",
      "C": "Để xác định thời gian và địa điểm xảy ra vấn đề một cách chính xác nhất.",
      "D": "Để liệt kê tất cả các giải pháp có thể có cho vấn đề."
    },
    "answer": "B"
  },
  {
    "id": 305,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật \"Đối tượng tiêu điểm\" (Focal Object) kích thích sáng tạo bằng cách nào khi cải tiến một \"chiếc bút bi\"?",
    "options": {
      "A": "Phân tích chi phí sản xuất và tìm cách giảm giá thành chiếc bút bi.",
      "B": "Liệt kê tất cả các tính năng hiện có của chiếc bút bi và cố gắng cải thiện từng tính năng.",
      "C": "Chọn ngẫu nhiên \"đèn pin\" và \"USB\", sau đó gán các đặc điểm của chúng (chiếu sáng, lưu trữ dữ liệu) cho \"chiếc bút bi\" để tạo ra ý tưởng \"bút bi có đèn\" hoặc \"bút bi kiêm USB\".",
      "D": "So sánh chiếc bút bi với các loại bút khác trên thị trường để tìm ra ưu thế cạnh tranh."
    },
    "answer": "C"
  },
  {
    "id": 306,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong Kỹ thuật 6 chiếc mũ tư duy, \"Mũ Xanh Dương\" (Blue Hat) có vai trò đặc biệt quan trọng nào sau đây?",
    "options": {
      "A": "Chỉ tập trung vào việc đưa ra thật nhiều ý tưởng sáng tạo mới lạ.",
      "B": "Chỉ đưa ra các nhận định dựa trên cảm xúc và trực giác.",
      "C": "Điều phối, tổ chức tiến trình tư duy, kiểm soát việc sử dụng các mũ khác và tổng kết kết quả.",
      "D": "Chỉ tập trung vào việc tìm kiếm các dữ liệu và thông tin khách quan."
    },
    "answer": "C"
  },
  {
    "id": 307,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Bước \"O – OPEN MIND AND APPLY CREATIVE TECHNIQUES\" trong kỹ thuật DOIT nhấn mạnh điều gì khi tìm kiếm ý tưởng?",
    "options": {
      "A": "Chỉ chấp nhận những ý tưởng đã được chứng minh là thành công trong quá khứ.",
      "B": "Tập trung làm rõ và lôi kéo càng nhiều ý tưởng càng tốt, kể cả những ý tưởng có vẻ \"điên rồ\" hoặc mâu thuẫn.",
      "C": "Nhanh chóng loại bỏ những ý tưởng không phù hợp với mục tiêu ban đầu.",
      "D": "Ưu tiên những ý tưởng có tính khả thi cao nhất về mặt kỹ thuật."
    },
    "answer": "B"
  },
  {
    "id": 308,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Nguyên tắc \"Số lượng tạo ra chất lượng\" trong Brainstorming ngụ ý rằng:",
    "options": {
      "A": "Một vài ý tưởng chất lượng cao ban đầu là đủ để giải quyết vấn đề.",
      "B": "Việc tạo ra một lượng lớn các ý tưởng, dù có vẻ không khả thi ban đầu, sẽ tăng cơ hội tìm thấy một giải pháp đột phá.",
      "C": "Các ý tưởng cần được đánh giá chất lượng ngay khi được nêu ra.",
      "D": "Chỉ những người có kinh nghiệm mới nên đóng góp ý tưởng để đảm bảo chất lượng."
    },
    "answer": "B"
  },
  {
    "id": 309,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Yếu tố \"A - Adapt\" (Thích nghi) trong kỹ thuật SCAMPER gợi ý điều gì khi một công ty muốn cải tiến dịch vụ khách hàng của mình?",
    "options": {
      "A": "Loại bỏ hoàn toàn một kênh hỗ trợ khách hàng không hiệu quả.",
      "B": "Kết hợp dịch vụ khách hàng với một dịch vụ hoàn toàn mới như tư vấn tài chính.",
      "C": "Điều chỉnh và áp dụng những phương pháp chăm sóc khách hàng thành công từ một ngành khác (ví dụ: ngành khách sạn) vào dịch vụ của mình.",
      "D": "Thay thế nhân viên hỗ trợ bằng chatbot hoàn toàn."
    },
    "answer": "C"
  },
  {
    "id": 310,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Một lợi ích quan trọng của việc sử dụng Sơ đồ tư duy (Mind Mapping) trong việc lập kế hoạch cho một dự án là gì?",
    "options": {
      "A": "Giúp tính toán chính xác chi phí và thời gian hoàn thành dự án.",
      "B": "Cung cấp một cái nhìn tổng thể về các hạng mục công việc, mối liên hệ giữa chúng và giúp tổ chức ý tưởng một cách logic.",
      "C": "Thay thế hoàn toàn nhu cầu sử dụng các công cụ quản lý dự án khác.",
      "D": "Chỉ phù hợp với các dự án có quy mô rất nhỏ và đơn giản."
    },
    "answer": "B"
  },
  {
    "id": 311,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong Biểu đồ nhân quả, việc phân loại các nguyên nhân thành các nhóm như \"Con người\", \"Phương pháp\", \"Máy móc\" giúp ích gì cho quá trình phân tích?",
    "options": {
      "A": "Làm cho biểu đồ trở nên phức tạp và khó hiểu hơn.",
      "B": "Đảm bảo rằng mọi vấn đề đều có đúng 6 nhóm nguyên nhân.",
      "C": "Giúp hệ thống hóa việc tìm kiếm nguyên nhân, đảm bảo không bỏ sót các khía cạnh quan trọng và dễ dàng xác định các lĩnh vực cần cải thiện.",
      "D": "Chỉ để trình bày cho đẹp mắt, không có ý nghĩa phân tích."
    },
    "answer": "C"
  },
  {
    "id": 312,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật \"Tư duy ngược\" (Reserve Brainstorming) hữu ích trong tình huống nào?",
    "options": {
      "A": "Khi cần nhanh chóng tạo ra nhiều ý tưởng mới lạ và đột phá.",
      "B": "Khi muốn tìm hiểu sâu về các rủi ro tiềm ẩn, các yếu tố có thể gây thất bại cho một dự án hoặc mục tiêu.",
      "C": "Khi cần đánh giá các mặt tích cực và lợi ích của một giải pháp.",
      "D": "Khi tất cả các thành viên trong nhóm đều đồng thuận về một giải pháp duy nhất."
    },
    "answer": "B"
  },
  {
    "id": 313,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Sự khác biệt chính giữa bước \"Define Problem\" và \"Identify The Best Solution\" trong kỹ thuật DOIT là gì?",
    "options": {
      "A": "\"Define Problem\" tạo ra ý tưởng, \"Identify The Best Solution\" thực hiện ý tưởng.",
      "B": "\"Define Problem\" tập trung làm rõ vấn đề, mục tiêu; \"Identify The Best Solution\" tập trung vào việc lựa chọn phương án tối ưu từ các ý tưởng đã có.",
      "C": "Cả hai bước đều nhằm mục đích cởi mở ý tưởng và áp dụng kỹ thuật sáng tạo.",
      "D": "\"Define Problem\" là bước cuối cùng, \"Identify The Best Solution\" là bước đầu tiên."
    },
    "answer": "B"
  },
  {
    "id": 314,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Khi một nhóm áp dụng Kỹ thuật 6 chiếc mũ tư duy, việc chuyển đổi giữa các \"mũ\" có ý nghĩa gì?",
    "options": {
      "A": "Để mỗi người chọn một chiếc mũ mình thích nhất và giữ nguyên vai trò đó.",
      "B": "Để tạo ra sự hỗn loạn và xem ai là người có khả năng thích ứng tốt nhất.",
      "C": "Để đảm bảo rằng vấn đề được xem xét một cách toàn diện từ nhiều góc độ tư duy khác nhau (khách quan, cảm xúc, tích cực, tiêu cực, sáng tạo, quy trình) một cách có trật tự.",
      "D": "Để kéo dài thời gian cuộc họp mà không cần thiết."
    },
    "answer": "C"
  },
  {
    "id": 315,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Yếu tố \"M - Modify/Magnify/Minify\" trong SCAMPER có thể được vận dụng như thế nào để cải tiến một ứng dụng di động?",
    "options": {
      "A": "Thay thế ngôn ngữ lập trình của ứng dụng.",
      "B": "Kết hợp ứng dụng với một mạng xã hội phổ biến.",
      "C": "Phóng to (magnify) các nút bấm quan trọng cho dễ thao tác, hoặc thu nhỏ (minify) dung lượng cài đặt của ứng dụng.",
      "D": "Loại bỏ hoàn toàn chức năng thông báo đẩy."
    },
    "answer": "C"
  },
  {
    "id": 316,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật \"Starbursting\" bắt đầu bằng việc đặt một ý tưởng hoặc vấn đề vào trung tâm, sau đó nhóm sẽ làm gì tiếp theo?",
    "options": {
      "A": "Ngay lập tức đưa ra các giải pháp cho vấn đề đó.",
      "B": "Đánh giá tính khả thi của ý tưởng/vấn đề đó.",
      "C": "Liên tục đặt ra các câu hỏi xoay quanh ý tưởng/vấn đề đó theo các khía cạnh Ai, Cái gì, Khi nào, Ở đâu, Tại sao, Như thế nào.",
      "D": "So sánh ý tưởng/vấn đề đó với các đối thủ cạnh tranh."
    },
    "answer": "C"
  },
  {
    "id": 317,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Một trong những \"điều cần tránh\" khi thực hiện Brainstorming là \"Công kích ý tưởng người khác\". Tại sao điều này lại quan trọng?",
    "options": {
      "A": "Vì việc công kích giúp ý tưởng trở nên mạnh mẽ hơn.",
      "B": "Vì nó tạo ra một môi trường không an toàn, làm các thành viên e ngại chia sẻ những ý tưởng mới lạ hoặc có vẻ \"điên rồ\".",
      "C": "Vì chỉ trưởng nhóm mới có quyền công kích ý tưởng.",
      "D": "Vì các ý tưởng hay không cần được bảo vệ."
    },
    "answer": "B"
  },
  {
    "id": 318,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "So với Brainstorming nói chung, ưu điểm của kỹ thuật \"Bậc thang\" (The Stepladder Technique) là gì?",
    "options": {
      "A": "Luôn tạo ra nhiều ý tưởng hơn trong thời gian ngắn hơn.",
      "B": "Khuyến khích sự tham gia và đóng góp ý kiến độc lập của từng thành viên, đặc biệt là những người ít nói, trước khi bị ảnh hưởng bởi ý kiến số đông.",
      "C": "Chỉ phù hợp với các nhóm có quy mô rất lớn (trên 20 người).",
      "D": "Tập trung chủ yếu vào việc phê bình và loại bỏ ý tưởng."
    },
    "answer": "B"
  },
  {
    "id": 319,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật 5W1H giúp làm rõ vấn đề. Câu hỏi \"What (Cái gì)?\" khi phân tích một sự cố máy móc trong nhà máy nhằm mục đích gì?",
    "options": {
      "A": "Xác định ai là người vận hành máy khi sự cố xảy ra.",
      "B": "Mô tả cụ thể sự cố là gì, bộ phận nào bị hỏng, hiện tượng quan sát được.",
      "C": "Tìm hiểu xem sự cố xảy ra ở khu vực nào trong nhà máy.",
      "D": "Đánh giá chi phí sửa chữa máy móc."
    },
    "answer": "B"
  },
  {
    "id": 320,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Bước nào trong kỹ thuật 6 chiếc mũ tư duy thường được thực hiện sau cùng để tổng kết và đưa ra quyết định?",
    "options": {
      "A": "Mũ Trắng (thu thập dữ liệu).",
      "B": "Mũ Xanh Lá Cây (ý tưởng sáng tạo).",
      "C": "Mũ Đỏ (cảm xúc).",
      "D": "Mũ Xanh Dương (quản lý tiến trình và tổng kết)."
    },
    "answer": "D"
  },
  {
    "id": 321,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Khi áp dụng kỹ thuật SCAMPER để cải tiến một chiếc ba lô, việc xem xét \"Có thể làm cho ba lô tự gấp gọn lại được không?\" thuộc về yếu tố nào?",
    "options": {
      "A": "Substitute (Thay thế).",
      "B": "Combine (Kết hợp).",
      "C": "Modify (Sửa đổi - ở đây có thể là Minify - Thu nhỏ về hình dạng khi không dùng).",
      "D": "Eliminate (Loại bỏ)."
    },
    "answer": "C"
  },
  {
    "id": 322,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Sự khác biệt cơ bản trong mục tiêu chính giữa kỹ thuật DOIT và kỹ thuật SCAMPER là gì?",
    "options": {
      "A": "DOIT tập trung vào việc tạo ra nhiều ý tưởng ngẫu nhiên, SCAMPER tập trung vào việc xác định vấn đề.",
      "B": "DOIT là một quy trình có cấu trúc để giải quyết vấn đề từ đầu đến cuối (xác định vấn đề, tạo ý tưởng, chọn giải pháp, thực hiện), trong khi SCAMPER là bộ câu hỏi gợi ý để cải tiến hoặc phát triển ý tưởng mới từ cái cũ.",
      "C": "DOIT chỉ dùng cho cá nhân, SCAMPER chỉ dùng cho nhóm.",
      "D": "SCAMPER luôn tạo ra ít ý tưởng hơn DOIT."
    },
    "answer": "B"
  },
  {
    "id": 323,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật \"SCAMPER\" khi được áp dụng để cải tiến một chiếc ô tô hiện có, câu hỏi \"Liệu có thể loại bỏ động cơ xăng và thay thế hoàn toàn bằng động cơ điện không?\" thuộc về yếu tố nào của mô hình?",
    "options": {
      "A": "Combine (Kết hợp) - Kết hợp ô tô với công nghệ điện.",
      "B": "Substitute (Thay thế) - Thay thế một thành phần cốt lõi (động cơ xăng) bằng một thành phần khác (động cơ điện).",
      "C": "Eliminate (Loại bỏ) - Chỉ đơn thuần là loại bỏ động cơ xăng.",
      "D": "Adapt (Thích nghi) - Điều chỉnh ô tô để phù hợp với môi trường đô thị."
    },
    "answer": "B"
  },
  {
    "id": 324,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Một nhóm sử dụng kỹ thuật \"6 chiếc mũ tư duy\" để đánh giá một dự án đầu tư. Khi trưởng nhóm yêu cầu \"Hãy đội Mũ Đen và cho biết những rủi ro, khó khăn và lý do tại sao dự án này có thể thất bại\", mục đích chính là gì?",
    "options": {
      "A": "Để tìm ra người bi quan nhất trong nhóm.",
      "B": "Để khuyến khích mọi người đưa ra những cảm xúc tiêu cực một cách tự do.",
      "C": "Để phân tích một cách logic và có cơ sở các khía cạnh tiêu cực, các điểm yếu tiềm ẩn và những trở ngại có thể xảy ra với dự án, nhằm chuẩn bị phương án đối phó.",
      "D": "Để nhanh chóng bác bỏ dự án mà không cần xem xét thêm."
    },
    "answer": "C"
  },
  {
    "id": 325,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Kỹ thuật \"Brainwriting\" (ví dụ: 6-3-5 Method) được cho là có thể khắc phục một số nhược điểm của Brainstorming truyền thống bằng cách nào?",
    "options": {
      "A": "Luôn đảm bảo tất cả các ý tưởng đều có chất lượng cao ngay từ đầu.",
      "B": "Khuyến khích sự tranh luận trực tiếp và gay gắt giữa các thành viên để chọn lọc ý tưởng.",
      "C": "Giảm thiểu ảnh hưởng của \"groupthink\" (tư duy nhóm) và sự lấn át của những cá nhân nói nhiều, cho phép mọi người đóng góp ý tưởng một cách bình đẳng và có thời gian suy nghĩ.",
      "D": "Yêu cầu mỗi người chỉ được đưa ra một ý tưởng duy nhất."
    },
    "answer": "C"
  },
  {
    "id": 326,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Khi sử dụng \"Biểu đồ nhân quả\" (Fishbone Diagram) để phân tích nguyên nhân của việc \"sinh viên bỏ học giữa chừng\", việc xác định các nhánh xương chính là \"Môi trường học tập\", \"Tài chính cá nhân\", \"Động lực học tập\", \"Vấn đề cá nhân\" là một ví dụ của việc gì?",
    "options": {
      "A": "Xác định vấn đề chính (đầu cá).",
      "B": "Đưa ra các giải pháp cụ thể cho từng nguyên nhân.",
      "C": "Phân loại các nhóm nguyên nhân tiềm ẩn có thể ảnh hưởng đến vấn đề.",
      "D": "Đánh giá mức độ nghiêm trọng của việc sinh viên bỏ học."
    },
    "answer": "C"
  },
  {
    "id": 327,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Trong kỹ thuật DOIT, bước \"T – TRANSFORM\" (Chuyển bước/Thực hiện) đòi hỏi điều gì sau khi đã xác định được giải pháp tốt nhất?",
    "options": {
      "A": "Quay lại bước xác định vấn đề để kiểm tra lại.",
      "B": "Tiếp tục cởi mở ý tưởng để tìm thêm các giải pháp khác.",
      "C": "Chỉ dừng lại ở việc lựa chọn giải pháp trên lý thuyết.",
      "D": "Xây dựng kế hoạch hành động cụ thể, phân công trách nhiệm và triển khai giải pháp đã chọn vào thực tế."
    },
    "answer": "D"
  },
  {
    "id": 328,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Yếu tố \"R - Rearrange/Reverse\" trong kỹ thuật SCAMPER có thể được áp dụng như thế nào để đổi mới một quy trình dịch vụ khách hàng truyền thống tại ngân hàng?",
    "options": {
      "A": "Thay thế nhân viên giao dịch bằng máy ATM đa năng.",
      "B": "Kết hợp dịch vụ tư vấn tài chính với dịch vụ gửi tiết kiệm.",
      "C": "Đảo ngược quy trình: thay vì khách hàng đến quầy, nhân viên ngân hàng chủ động liên hệ và cung cấp dịch vụ tận nơi cho khách hàng VIP.",
      "D": "Loại bỏ các loại phí dịch vụ không cần thiết."
    },
    "answer": "C"
  },
  {
    "id": 329,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Khi một đội ngũ sử dụng kỹ thuật \"Sơ đồ tư duy\" để lên ý tưởng cho một chiến dịch marketing, việc bắt đầu với \"Tên chiến dịch\" ở trung tâm, sau đó phát triển các nhánh chính như \"Đối tượng mục tiêu\", \"Thông điệp chính\", \"Kênh truyền thông\", \"Ngân sách\" và các nhánh con chi tiết hơn cho mỗi mục, giúp ích gì nhất?",
    "options": {
      "A": "Chỉ để đảm bảo rằng mọi người đều tham gia vào quá trình.",
      "B": "Để tạo ra một bản kế hoạch phức tạp và khó theo dõi.",
      "C": "Để trực quan hóa cấu trúc của chiến dịch, khám phá các mối liên hệ giữa các yếu tố, và đảm bảo không bỏ sót các khía cạnh quan trọng một cách hệ thống.",
      "D": "Để xác định chính xác doanh thu kỳ vọng từ chiến dịch."
    },
    "answer": "C"
  },
  {
    "id": 330,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "So sánh Kỹ thuật Brainstorming và Kỹ thuật 6 chiếc mũ tư duy, điểm nào sau đây KHÔNG hoàn toàn chính xác?",
    "options": {
      "A": "Brainstorming tập trung vào việc tạo ra số lượng lớn ý tưởng, 6 chiếc mũ tập trung vào việc phân tích vấn đề từ nhiều góc độ có định hướng.",
      "B": "Brainstorming khuyến khích sự tự do tuyệt đối và không phán xét ở giai đoạn đầu, 6 chiếc mũ cũng có giai đoạn không phán xét (mũ đỏ, mũ xanh lá) nhưng cũng có giai đoạn đánh giá (mũ đen, mũ vàng).",
      "C": "Cả hai kỹ thuật đều chỉ phù hợp với các vấn đề đơn giản và không đòi hỏi chuyên môn cao.",
      "D": "6 chiếc mũ tư duy giúp điều hướng dòng suy nghĩ của nhóm một cách có trật tự hơn so với brainstorming hoàn toàn tự do."
    },
    "answer": "C"
  },
  {
    "id": 331,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Một công ty sản xuất đồ gia dụng đang muốn tạo ra một loại máy hút bụi mới. Họ áp dụng kỹ thuật \"Đối tượng tiêu điểm\" và chọn ngẫu nhiên \"con tắc kè\". Họ nhận thấy đặc điểm \"chân có khả năng bám dính siêu việt\" của tắc kè. Ý tưởng nào sau đây có khả năng nảy sinh từ việc liên kết này?",
    "options": {
      "A": "Máy hút bụi có màu sắc thay đổi như tắc kè.",
      "B": "Máy hút bụi có khả năng tự làm sạch như tắc kè lột da.",
      "C": "Máy hút bụi có đầu hút với công nghệ bám dính bề mặt siêu nhỏ, giúp làm sạch hiệu quả trên các bề mặt phức tạp hoặc thẳng đứng.",
      "D": "Máy hút bụi có khả năng phát ra âm thanh giống tiếng tắc kè kêu."
    },
    "answer": "C"
  },
  {
    "id": 332,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Một startup công nghệ đang muốn tạo ra một sản phẩm hoàn toàn đột phá, chưa từng có trên thị trường. Trong giai đoạn đầu tìm kiếm ý tưởng, kỹ thuật nào có thể phù hợp hơn để phá vỡ các lối mòn tư duy cũ, dù có thể tạo ra những ý tưởng phi thực tế ban đầu?",
    "options": {
      "A": "Biểu đồ nhân quả.",
      "B": "Phương pháp 5W1H.",
      "C": "Kỹ thuật Đối tượng tiêu điểm hoặc Brainstorming tự do.",
      "D": "Sáu chiếc mũ tư duy."
    },
    "answer": "C"
  },
  {
    "id": 333,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Một công ty muốn cải thiện văn hóa làm việc nhóm và khuyến khích sự đóng góp ý kiến đa chiều trong các cuộc họp ra quyết định. Việc áp dụng kỹ thuật \"Sáu chiếc mũ tư duy\" một cách có hệ thống có thể mang lại lợi ích gì lớn nhất so với các cuộc họp thông thường?",
    "options": {
      "A": "Rút ngắn thời gian họp xuống mức tối thiểu.",
      "B": "Đảm bảo mọi người đều đồng ý với quyết định cuối cùng.",
      "C": "Tách biệt các khía cạnh khác nhau của tư duy (logic, cảm xúc, sáng tạo, phê phán...), cho phép khám phá vấn đề toàn diện hơn và tránh xung đột cá nhân.",
      "D": "Loại bỏ hoàn toàn vai trò của người lãnh đạo cuộc họp."
    },
    "answer": "C"
  },
  {
    "id": 334,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Khi đối mặt với một vấn đề đòi hỏi sự đột phá hoàn toàn (radical innovation) thay vì chỉ cải tiến nhỏ (incremental improvement), việc kết hợp kỹ thuật nào sau đây có thể hiệu quả để phá vỡ các giả định cũ và tạo ra ý tưởng mới lạ?",
    "options": {
      "A": "5W1H và Biểu đồ nhân quả (Tập trung làm rõ và phân tích vấn đề hiện tại).",
      "B": "Brainstorming/Brainwriting kết hợp với Kỹ thuật Đối tượng tiêu điểm hoặc SCAMPER (Tạo ý tưởng mới và biến đổi cái cũ).",
      "C": "Chỉ sử dụng Sáu chiếc mũ tư duy để đánh giá các giải pháp hiện có.",
      "D": "Phân tích SWOT và lập kế hoạch dự án chi tiết."
    },
    "answer": "B"
  },
  {
    "id": 335,
    "category": "Phần 5: Các Công cụ Tư duy",
    "question": "Để thiết kế một trải nghiệm học tập trực tuyến hoàn toàn mới lạ và hấp dẫn cho sinh viên, thay vì chỉ cải tiến giao diện hiện có, phương pháp tiếp cận nào sau đây có khả năng mang lại sự đột phá cao nhất?",
    "options": {
      "A": "Chỉ sửa lỗi các chức năng hiện có của hệ thống cũ.",
      "B": "Tiến hành khảo sát chi tiết về sự hài lòng với hệ thống cũ.",
      "C": "Kết hợp việc thấu hiểu sâu sắc nhu cầu và hành vi người học (Empathy) với các kỹ thuật tạo ý tưởng gốc (như Brainstorming, SCAMPER, Tư duy tương tự) và thử nghiệm nhanh các ý tưởng mới (Prototyping).",
      "D": "Sao chép y hệt các tính năng của một nền tảng học tập phổ biến khác."
    },
    "answer": "C"
  }
]
           
           
    }, // <--- DẤU PHẨY NÀY CỰC KỲ QUAN TRỌNG (Ngăn cách 2 môn)

    // --- MÔN 2: TIẾNG ANH CƠ BẢN (Dữ liệu từ PDF Unit 1-5) ---
    "TACB": {
        name: "Tiếng Anh Cơ Bản",
        icon: "🇬🇧",
        description: "Ngữ pháp & Từ vựng (Unit 1 - Unit 5).",
        questions: [
            // UNIT 1: Present Simple & Continuous
            {
                id: 1,
                category: "Unit 1: Grammar",
                question: "Choose the correct option: I ______ coffee in the morning.",
                options: { A: "rarely drink", B: "am rarely drinking", C: "rarely drinking", D: "drink rarely" },
                answer: "A"
            },
            {
                id: 2,
                category: "Unit 1: Grammar",
                question: "Choose the correct option: ______ usually feel confident?",
                options: { A: "Are you", B: "Do you", C: "Does you", D: "Have you" },
                answer: "B"
            },
            {
                id: 3,
                category: "Unit 1: Grammar",
                question: "Manoj ______ to the gym four or five times a week.",
                options: { A: "is going", B: "go", C: "goes", D: "going" },
                answer: "C"
            },
            {
                id: 4,
                category: "Unit 1: Grammar",
                question: "What time ______ the house?",
                options: { A: "are usually leaving", B: "do you usually leave", C: "does usually leave", D: "leave you usually" },
                answer: "B"
            },

            // UNIT 2: Past Simple
            {
                id: 5,
                category: "Unit 2: Vocabulary",
                question: "I'm terrible at ______. I have to use my phone to add most bills.",
                options: { A: "geography", B: "maths", C: "history", D: "art" },
                answer: "B"
            },
            {
                id: 6,
                category: "Unit 2: Past Simple",
                question: "Tick the correct sentence:",
                options: { A: "I not slept at all last night.", B: "I didn't sleep at all last night.", C: "I didn't slept at all last night.", D: "I no sleep last night." },
                answer: "B"
            },
            {
                id: 7,
                category: "Unit 2: Past Simple",
                question: "My teacher ______ me about past tense verbs.",
                options: { A: "teached", B: "taught", C: "teaching", D: "teach" },
                answer: "B"
            },

            // UNIT 3: Past Continuous
            {
                id: 8,
                category: "Unit 3: Grammar",
                question: "She didn't check her phone while she ______ breakfast.",
                options: { A: "ate", B: "eats", C: "was eating", D: "is eating" },
                answer: "C"
            },
            {
                id: 9,
                category: "Unit 3: Grammar",
                question: "Was she working as a chef when you both ______?",
                options: { A: "met", B: "were meeting", C: "meet", D: "meeting" },
                answer: "A"
            },
            {
                id: 10,
                category: "Unit 3: Grammar",
                question: "While Christine ______ there, the food was always brilliant.",
                options: { A: "worked", B: "was working", C: "works", D: "is working" },
                answer: "B"
            },

            // UNIT 4: Future Plans
            {
                id: 11,
                category: "Unit 4: Future Plans",
                question: "Choose the correct arrangement: I ______ the doctor at 10:30.",
                options: { A: "see", B: "'m seeing", C: "will see", D: "seen" },
                answer: "B"
            },
            {
                id: 12,
                category: "Unit 4: Future Plans",
                question: "We ______ a new car next month (Plan).",
                options: { A: "are going to buy", B: "will buy", C: "buy", D: "bought" },
                answer: "A"
            },
            
            // UNIT 5: Conditionals
            {
                id: 13,
                category: "Unit 5: First Conditional",
                question: "If she tidies the house, I ______ dinner.",
                options: { A: "cook", B: "cooked", C: "'ll cook", D: "cooking" },
                answer: "C"
            },
            {
                id: 14,
                category: "Unit 5: Zero Conditional",
                question: "When the weather is good, I ______ to the beach.",
                options: { A: "go", B: "went", C: "will go", D: "going" },
                answer: "A"
            },
            {
                id: 15,
                category: "Unit 5: Zero Conditional",
                question: "If he ______ (go) for a walk, he is out all day.",
                options: { A: "go", B: "goes", C: "will go", D: "going" },
                answer: "B"
            }
        ]
    }
     ,  
         "DCL": {
        name: "Đại cương Logistics",
        icon: "🚛",
        description: "Tổng hợp 200 câu hỏi ôn tập (Chương 1 - Chương 5).",
        questions: [
            // --- CHƯƠNG 1 ---
            { id: 1, category: "Chương 1", question: "Khái niệm Logistics theo Hội đồng Các chuyên gia Quản trị Chuỗi cung ứng (CSCMP) là gì?", options: { A: "Quá trình lên kế hoạch, thực hiện và kiểm soát hiệu quả dòng lưu chuyển hàng hóa...", B: "Quá trình vận tải và kho bãi...", C: "Quá trình bán hàng và marketing...", D: "Quá trình sản xuất và đóng gói..." }, answer: "A" },
            { id: 2, category: "Chương 1", question: "Khái niệm Logistics theo Hội đồng Quản trị Logistics là gì?", options: { A: "Quá trình lập kế hoạch, thực hiện và kiểm soát luồng lưu chuyển và lưu kho...", B: "Nghệ thuật sắp xếp hàng hóa...", C: "Dịch vụ giao nhận vận tải...", D: "Quản lý nhân sự kho..." }, answer: "A" },
            { id: 3, category: "Chương 1", question: "\"Cross-docking\" nghĩa là gì?", options: { A: "Hàng hoá nhận tại kho không lưu trữ mà chuyển đi ngay.", B: "Lưu kho dài hạn.", C: "Kiểm kê hàng hóa.", D: "Đóng gói lại hàng hóa." }, answer: "A" },
            { id: 4, category: "Chương 1", question: "Outbound Logistics phát triển trong giai đoạn nào?", options: { A: "Phân phối vật chất", B: "Sản xuất", C: "Mua hàng", D: "Dịch vụ sau bán" }, answer: "A" },
            { id: 5, category: "Chương 1", question: "Dịch vụ logistics theo luật thương mại VN 2005 là?", options: { A: "Hoạt động thương mại, thương nhân tổ chức thực hiện công việc nhận hàng, vận chuyển, lưu kho...", B: "Hoạt động phi lợi nhuận...", C: "Hoạt động sản xuất...", D: "Hoạt động môi giới..." }, answer: "A" },
            { id: 6, category: "Chương 1", question: "Theo WTO, dịch vụ logistics chủ yếu KHÔNG bao gồm?", options: { A: "Dịch vụ đóng gói, tư vấn quản lý", B: "Vận tải", C: "Kho bãi", D: "Xếp dỡ" }, answer: "A" },
            { id: 7, category: "Chương 1", question: "Theo NĐ 140/2007, dịch vụ logistics chủ yếu KHÔNG bao gồm?", options: { A: "Dịch vụ liên quan đến vận tải", B: "Xếp dỡ", C: "Kho bãi", D: "Đại lý vận tải" }, answer: "A" },
            { id: 8, category: "Chương 1", question: "Logistics bên thứ 3 (3PL) là gì?", options: { A: "Người thay mặt chủ hàng quản lý và thực hiện các dịch vụ logistics...", B: "Người cung cấp đơn lẻ...", C: "Người tích hợp...", D: "Chủ hàng tự làm..." }, answer: "A" },
            { id: 9, category: "Chương 1", question: "Nguyên tắc JIT (Just in Time) nghĩa là?", options: { A: "Giao hàng đúng thời điểm cần thiết để giảm tồn kho.", B: "Giao hàng càng sớm càng tốt.", C: "Giao hàng khi kho đầy.", D: "Sản xuất dư thừa." }, answer: "A" },
            { id: 10, category: "Chương 1", question: "Thuê ngoài logistics là gì?", options: { A: "Sử dụng nhà cung cấp bên thứ 3 cho quy trình logistics.", B: "Tự xây kho.", C: "Mua xe tải.", D: "Tuyển thêm nhân viên." }, answer: "A" },
            { id: 11, category: "Chương 1", question: "Logistics ngược mô hình Open-loop là?", options: { A: "Nhà SX thuê ngoài 3PL thu hồi...", B: "Nhà SX tự thu hồi...", C: "Nhà phân phối thu hồi...", D: "Chức năng thu hồi nằm ngoài chuỗi cung ứng ban đầu (bên thứ 3 độc lập)." }, answer: "D" },
            { id: 12, category: "Chương 1", question: "Hoạt động làm hàng là gì?", options: { A: "Các hoạt động trung gian giữa vận tải và lưu kho.", B: "Sản xuất.", C: "Mua hàng.", D: "Bán hàng." }, answer: "A" },
            { id: 13, category: "Chương 1", question: "Sản phẩm thu hồi EOU (End Of Use) là gì?", options: { A: "Sản phẩm lỗi.", B: "Sản phẩm bảo hành.", C: "Sản phẩm dư thừa.", D: "Sản phẩm ở cuối vòng đời sử dụng." }, answer: "D" },
            { id: 14, category: "Chương 1", question: "Logistics quân sự tập trung vào?", options: { A: "Cung cấp quân trang, quân dụng, lương thực.", B: "Y tế.", C: "Thương mại.", D: "Sản xuất." }, answer: "A" },
            { id: 15, category: "Chương 1", question: "Logistics y tế tập trung vào?", options: { A: "Dòng hàng hóa, thông tin ngành y tế.", B: "Xây dựng bệnh viện.", C: "Đào tạo bác sĩ.", D: "Sản xuất thuốc." }, answer: "A" },
            { id: 16, category: "Chương 1", question: "Nhận định SAI về cảng cạn ICD?", options: { A: "Thuộc kết cấu hạ tầng.", B: "Là nơi tập kết hàng hóa gắn liền với cảng hàng không (thường gắn với cảng biển).", C: "Giúp giảm chi phí.", D: "Là điểm thông quan." }, answer: "B" },
            { id: 17, category: "Chương 1", question: "Nhận định KHÔNG đúng về đặc điểm logistics?", options: { A: "Logistics là quá trình lập kế hoạch (đây là khái niệm, không phải đặc điểm).", B: "Là khoa học và nghệ thuật.", C: "Tồn tại ở 2 cấp độ.", D: "Là một quá trình liên tục." }, answer: "A" },
            { id: 18, category: "Chương 1", question: "Thứ tự quy trình thuê ngoài logistics?", options: { A: "1-2-4-3-6-7-9-5-8", B: "1-2-3-4...", C: "Khác...", D: "Khác..." }, answer: "A" },
            { id: 19, category: "Chương 1", question: "Thứ tự quy trình logistics ngược?", options: { A: "Thu hồi -> Kiểm tra -> Tái chế -> Phân phối lại.", B: "Tái chế trước...", C: "Phân phối trước...", D: "Kiểm tra trước..." }, answer: "A" },
            { id: 20, category: "Chương 1", question: "Nhận định KHÔNG đúng về trung tâm logistics?", options: { A: "Kho hàng đơn thuần được coi là trung tâm logistics.", B: "Khu vực gồm mọi hoạt động...", C: "Nhiều nhà khai thác...", D: "Gồm kho bãi, văn phòng..." }, answer: "A" },
            { id: 21, category: "Chương 1", question: "Hoạt động KHÔNG phải của Logistics kinh doanh?", options: { A: "Quảng cáo.", B: "Làm hàng.", C: "Kho hàng.", D: "Vận tải." }, answer: "A" },
            { id: 22, category: "Chương 1", question: "Hoạt động có chi phí lớn nhất trong logistics?", options: { A: "Vận tải.", B: "Kho.", C: "Quản lý.", D: "Thông tin." }, answer: "A" },
            { id: 23, category: "Chương 1", question: "Yêu cầu của khách hàng về vận tải?", options: { A: "An toàn, đúng giờ, giá hợp lý.", B: "Nhanh nhất.", C: "Rẻ nhất.", D: "Xe đẹp." }, answer: "A" },
            { id: 24, category: "Chương 1", question: "Hoạt động nào KHÔNG phải làm hàng?", options: { A: "Sản xuất hàng.", B: "Xếp dỡ.", C: "Kiểm tra.", D: "Phân loại." }, answer: "A" },
            { id: 25, category: "Chương 1", question: "Hoạt động KHÔNG phải của kho hàng?", options: { A: "Sản xuất hàng hóa.", B: "Bảo quản.", C: "Lưu trữ.", D: "Nhập xuất." }, answer: "A" },
            { id: 26, category: "Chương 1", question: "Nhận định KHÔNG đúng về vai trò logistics?", options: { A: "Tạo nguồn thu cho DN sản xuất (Logistics là chi phí/dịch vụ hỗ trợ).", B: "Nâng cao hiệu quả.", C: "Giảm chi phí.", D: "Mở rộng thị trường." }, answer: "A" },
            { id: 27, category: "Chương 1", question: "Phân loại theo hình thức tổ chức gồm?", options: { A: "1PL, 2PL, 3PL, 4PL, 5PL.", B: "Xanh, đỏ...", C: "Trong, ngoài...", D: "Lớn, nhỏ..." }, answer: "A" },
            { id: 28, category: "Chương 1", question: "Hoạt động KHÔNG thuộc phân loại theo quá trình?", options: { A: "Logistics xanh.", B: "Logistics đầu vào.", C: "Logistics đầu ra.", D: "Logistics ngược." }, answer: "A" },
            { id: 29, category: "Chương 1", question: "Đặc điểm KHÔNG phải của logistics xanh?", options: { A: "Chi phí logistics tăng.", B: "Giảm CO2.", C: "Thân thiện môi trường.", D: "Hạn chế tác động tiêu cực." }, answer: "A" },
            { id: 30, category: "Chương 1", question: "Logistics đầu vào là gì?", options: { A: "Cung ứng tài nguyên đầu vào.", B: "Phân phối.", C: "Thu hồi.", D: "Sản xuất." }, answer: "A" },
            { id: 31, category: "Chương 1", question: "Vai trò hệ thống thông tin?", options: { A: "Kết nối các hoạt động.", B: "Tăng tồn kho.", C: "Giảm giá.", D: "Marketing." }, answer: "A" },
            { id: 32, category: "Chương 1", question: "Tại sao hệ thống thông tin quan trọng?", options: { A: "Kết nối các hoạt động logistics.", B: "Để in giấy tờ.", C: "Để điểm danh.", D: "Để tính lương." }, answer: "A" },
            { id: 33, category: "Chương 1", question: "Nhận định KHÔNG đúng về lợi ích thuê ngoài?", options: { A: "Tăng chi phí logistics.", B: "Nâng cao hiệu quả.", C: "Giảm rủi ro.", D: "Tập trung cốt lõi." }, answer: "A" },
            { id: 34, category: "Chương 1", question: "Lợi ích thuê ngoài?", options: { A: "Tăng chi phí.", B: "Mất kiểm soát.", C: "Tăng vốn.", D: "Giảm chi phí, tập trung cốt lõi.", }, answer: "D" },
            { id: 35, category: "Chương 1", question: "Hoạt động KHÔNG thuộc logistics ngược?", options: { A: "Sử dụng phương tiện thân thiện môi trường.", B: "Tái chế.", C: "Thu hồi.", D: "Kiểm tra phế phẩm." }, answer: "A" },
            { id: 36, category: "Chương 1", question: "Sản phẩm thu hồi KHÔNG từ phân phối?", options: { A: "Sản phẩm thừa trong quá trình sản xuất.", B: "Hư hại khi giao.", C: "Pallet.", D: "Hết date." }, answer: "A" },
            { id: 37, category: "Chương 1", question: "Sản phẩm thu hồi từ tiêu dùng?", options: { A: "Sản phẩm bảo hành.", B: "Hư khi giao.", C: "Hết date tại kho.", D: "Pallet." }, answer: "A" },
            { id: 38, category: "Chương 1", question: "Tác nhân KHÔNG tham gia logistics ngược?", options: { A: "Nhà cung cấp NVL đầu vào.", B: "Chính phủ.", C: "DN đầu chuỗi.", D: "DN tái chế." }, answer: "A" },
            { id: 39, category: "Chương 1", question: "Lợi ích CHƯA ĐÚNG của trung tâm logistics?", options: { A: "Tăng doanh thu cho nhà sản xuất.", B: "Giảm lưu lượng.", C: "Giảm ô nhiễm.", D: "Tăng hiệu quả." }, answer: "A" },
            { id: 40, category: "Chương 1", question: "KHÔNG phải hoạt động tạo giá trị gia tăng (VAL)?", options: { A: "VAL vận tải.", B: "VAL quản lý.", C: "Low-end VAL.", D: "High-end VAL." }, answer: "A" },

            // --- CHƯƠNG 2 ---
            { id: 41, category: "Chương 2", question: "Quy trình logistics là gì?", options: { A: "Trình tự phối hợp các hoạt động tối ưu hóa nguồn lực...", B: "Lập kế hoạch...", C: "Kiểm soát...", D: "Bao trùm..." }, answer: "A" },
            { id: 42, category: "Chương 2", question: "Các bước xây dựng quy trình logistics?", options: { A: "Xác định chủ chốt -> Vạch yếu tố -> Biểu đồ -> Cải tiến -> Đánh giá -> Giải pháp -> Thay đổi.", B: "Khác...", C: "Khác...", D: "Khác..." }, answer: "A" },
            { id: 43, category: "Chương 2", question: "Thứ tự xây dựng quy trình?", options: { A: "2-1-4-3-6-7-5", B: "Khác...", C: "Khác...", D: "Khác..." }, answer: "A" },
            { id: 44, category: "Chương 2", question: "Bước đầu tiên xây dựng quy trình?", options: { A: "Xác định quy trình chủ chốt.", B: "Đánh giá.", C: "Vạch yếu tố.", D: "Cải tiến." }, answer: "A" },
            { id: 45, category: "Chương 2", question: "Bước cuối cùng xây dựng quy trình?", options: { A: "Tiến hành thay đổi.", B: "Lập biểu đồ.", C: "Xây dựng.", D: "Giải pháp." }, answer: "A" },
            { id: 46, category: "Chương 2", question: "Vạch ra yếu tố chính nằm ở bước mấy?", options: { A: "Bước 2 (Sau xác định chủ chốt).", B: "Bước 3.", C: "Bước 4.", D: "Bước 5." }, answer: "A" },
            { id: 47, category: "Chương 2", question: "Điền từ: Tam giác quy trình...", options: { A: "3 / nhấn mạnh / làm nổi bật / mỗi mức phát triển.", B: "Khác...", C: "Khác...", D: "Khác..." }, answer: "A" },
            { id: 48, category: "Chương 2", question: "3 nhóm quy trình của Tam giác quy trình?", options: { A: "Cơ sở, Chuẩn, Cạnh tranh.", B: "Đầu vào, ra, ngược.", C: "NVL, Kho, Phân phối.", D: "Khác..." }, answer: "A" },
            { id: 49, category: "Chương 2", question: "Tam giác quy trình có mấy nhóm?", options: { A: "3", B: "4", C: "5", D: "6" }, answer: "A" },
            { id: 50, category: "Chương 2", question: "Khái niệm chi phí logistics?", options: { A: "Tất cả chi phí liên quan: vận tải, kho, tồn kho, dịch vụ KH, thông tin, quản lý...", B: "Chỉ vận tải...", C: "Chỉ kho...", D: "Khác..." }, answer: "A" },
            { id: 51, category: "Chương 2", question: "Mô hình Lambert chia thành mấy nhóm chi phí?", options: { A: "6", B: "7", C: "5", D: "8" }, answer: "A" },
            { id: 52, category: "Chương 2", question: "Chi phí theo mô hình Lambert gồm?", options: { A: "Vận tải, Dự trữ, SX-Thu mua, Kho, Dịch vụ KH, Đơn hàng & Thông tin.", B: "Khác...", C: "Khác...", D: "Khác..." }, answer: "A" },
            { id: 53, category: "Chương 2", question: "Công thức tính tổng chi phí?", options: { A: "∑F = Fm + Fv + Fd + Ft + Fđ + Fk", B: "Sai...", C: "Sai...", D: "Sai..." }, answer: "A" },
            { id: 54, category: "Chương 2", question: "Ý nghĩa các ký hiệu trong công thức?", options: { A: "Fm: Mua, Fv: Vận tải, Fd: Dự trữ...", B: "Khác...", C: "Khác...", D: "Khác..." }, answer: "A" },
            { id: 55, category: "Chương 2", question: "Bước 1 phân tích chi phí?", options: { A: "Liệt kê chi phí theo trình tự.", B: "Phân chia.", C: "Phân tích.", D: "Xem xét." }, answer: "A" },
            { id: 56, category: "Chương 2", question: "Bước sau 'Phân tích chi phí' là?", options: { A: "Xem xét lại toàn bộ quá trình.", B: "Phân chia.", C: "Kiểm tra.", D: "Liệt kê." }, answer: "A" },
            { id: 57, category: "Chương 2", question: "Bước sau 'Xem xét quá trình' là?", options: { A: "Kiểm tra quá trình mới.", B: "Phân chia.", C: "Phân tích.", D: "Tổng kết." }, answer: "A" },
            { id: 58, category: "Chương 2", question: "Kvar trong Kop = Kvar + Kfix là gì?", options: { A: "Chi phí biến đổi.", B: "Gián tiếp.", C: "Cố định.", D: "Thuê ngoài." }, answer: "A" },
            { id: 59, category: "Chương 2", question: "Nhận định CHƯA ĐÚNG về vai trò quy trình?", options: { A: "Giúp dự báo nhu cầu.", B: "Bao trùm.", C: "Thông suốt.", D: "Xác định vấn đề." }, answer: "A" },
            { id: 60, category: "Chương 2", question: "Ý ĐÚNG về vai trò quy trình?", options: { A: "Bao trùm...", B: "Nâng cao hiệu quả...", C: "Giảm rủi ro...", D: "Giải quyết đầu vào đầu ra hiệu quả." }, answer: "D" },
            { id: 61, category: "Chương 2", question: "Ý ĐÚNG về vai trò quy trình?", options: { A: "Giúp hoạt động SXKD thông suốt.", B: "Tăng lợi thế...", C: "Giảm rủi ro...", D: "Chỉ cho DN lớn." }, answer: "A" },
            { id: 62, category: "Chương 2", question: "Hoạt động KHÔNG thuộc quản trị NVL?", options: { A: "Quản lý kho hàng.", B: "Dự báo.", C: "Mua hàng.", D: "Kế hoạch SX." }, answer: "A" },
            { id: 63, category: "Chương 2", question: "Hoạt động thuộc quản trị NVL?", options: { A: "Mua hàng.", B: "Tồn trữ.", C: "Vận tải.", D: "Phụ tùng." }, answer: "A" },
            { id: 64, category: "Chương 2", question: "Hoạt động KHÔNG thuộc quản trị kho?", options: { A: "Dự báo nhu cầu.", B: "Quản lý.", C: "Xếp dỡ.", D: "Tồn trữ." }, answer: "A" },
            { id: 65, category: "Chương 2", question: "Hoạt động KHÔNG thuộc phân phối vật chất?", options: { A: "Lập kế hoạch mua hàng.", B: "Đơn hàng.", C: "SP mới.", D: "Thông tin." }, answer: "A" },
            { id: 66, category: "Chương 2", question: "Hoạt động thuộc phân phối vật chất?", options: { A: "Thực hiện đơn hàng.", B: "Mua hàng.", C: "Kế hoạch SX.", D: "Xếp dỡ NVL." }, answer: "A" },
            { id: 67, category: "Chương 2", question: "Quy trình quan trọng tối thiểu phải đạt?", options: { A: "Quy trình chuẩn.", B: "Cơ sở.", C: "Cạnh tranh.", D: "Phát triển." }, answer: "A" },
            { id: 68, category: "Chương 2", question: "Quy trình không cần thiết nhưng là tiên quyết?", options: { A: "Quy trình cơ sở.", B: "Chuẩn.", C: "Phát triển.", D: "Cạnh tranh." }, answer: "A" },
            { id: 69, category: "Chương 2", question: "Quy trình mang lại tính cạnh tranh?", options: { A: "Quy trình cạnh tranh.", B: "Chuẩn.", C: "Phát triển.", D: "Cơ sở." }, answer: "A" },
            { id: 70, category: "Chương 2", question: "Chi phí KHÔNG thuộc bộ phận chi phí logistics?", options: { A: "Chi phí khác.", B: "Riêng.", C: "Bổ sung.", D: "Quản lý." }, answer: "A" },
            { id: 71, category: "Chương 2", question: "Chi phí logistics riêng là?", options: { A: "Phát sinh trực tiếp từ nhiệm vụ chính: vận tải, tồn kho...", B: "Liên quan...", C: "Dịch vụ...", D: "Tất cả..." }, answer: "A" },
            { id: 72, category: "Chương 2", question: "Chi phí logistics bổ sung là?", options: { A: "Phát sinh từ hoạt động bổ sung: đóng gói, dán nhãn...", B: "Trực tiếp...", C: "Dịch vụ...", D: "Tất cả..." }, answer: "A" },
            { id: 73, category: "Chương 2", question: "Chi phí quản lý logistics là?", options: { A: "Liên quan dịch vụ quản lý: kế hoạch, kiểm soát...", B: "Trực tiếp...", C: "Bổ sung...", D: "Tất cả..." }, answer: "A" },
            { id: 74, category: "Chương 2", question: "Kiểm soát chất lượng thuộc chi phí nào?", options: { A: "Quản lý logistics.", B: "Bổ sung.", C: "Riêng.", D: "Dịch vụ." }, answer: "A" },
            { id: 75, category: "Chương 2", question: "Chi phí vận tải, xếp dỡ thuộc nhóm nào?", options: { A: "Chi phí riêng.", B: "Bổ sung.", C: "Quản lý.", D: "Dịch vụ." }, answer: "A" },
            { id: 76, category: "Chương 2", question: "Chi phí dịch vụ khách hàng thuộc nhóm nào?", options: { A: "Chi phí riêng.", B: "Bổ sung.", C: "Quản lý.", D: "Dịch vụ." }, answer: "A" },
            { id: 77, category: "Chương 2", question: "Chi phí lập kế hoạch thuộc nhóm nào?", options: { A: "Chi phí quản lý.", B: "Riêng.", C: "Bổ sung.", D: "Dịch vụ." }, answer: "A" },
            { id: 78, category: "Chương 2", question: "Chi phí KHÔNG thuộc logistics?", options: { A: "Chi phí Marketing.", B: "Vận tải.", C: "Lưu kho.", D: "Kiểm tra CL." }, answer: "A" },
            { id: 79, category: "Chương 2", question: "Chi phí thuộc logistics?", options: { A: "Lập kế hoạch logistics.", B: "Marketing.", C: "R&D.", D: "Mua hàng." }, answer: "A" },
            { id: 80, category: "Chương 2", question: "Chi phí biến đổi trong logistics?", options: { A: "Thuê phương tiện vận tải (theo chuyến).", B: "Thuê tài sản cố định.", C: "Trữ hàng.", D: "Nhân lực cố định." }, answer: "A" },

            // --- CHƯƠNG 3 ---
            { id: 81, category: "Chương 3", question: "Tổ chức logistics là gì?", options: { A: "Sơ đồ mối quan hệ chức năng.", B: "Quản lý tài chính.", C: "Marketing.", D: "Kho bãi." }, answer: "A" },
            { id: 82, category: "Chương 3", question: "Lợi ích tổ chức logistics?", options: { A: "Tăng nhân viên.", B: "Giải quyết mâu thuẫn giữa các phòng ban.", C: "Giảm nhu cầu.", D: "Hạn chế kế hoạch." }, answer: "B" },
            { id: 83, category: "Chương 3", question: "Giai đoạn 1 (trước 70s) tập trung vào?", options: { A: "Tài chính.", B: "Tính phù hợp về chi phí.", C: "Marketing.", D: "Công nghệ." }, answer: "B" },
            { id: 84, category: "Chương 3", question: "Đặc điểm tổ chức không chính tắc?", options: { A: "Thay đổi cấu trúc.", B: "Không đổi cấu trúc nhưng cần phối hợp.", C: "Cho DN lớn.", D: "Không tác động." }, answer: "B" },
            { id: 85, category: "Chương 3", question: "Đặc điểm tổ chức bán chính tắc?", options: { A: "Tách biệt.", B: "Logistics đan chéo với chức năng khác.", C: "Cho DN nhỏ.", D: "Thay đổi cấu trúc." }, answer: "B" },
            { id: 86, category: "Chương 3", question: "Trách nhiệm quản trị logistics bán chính tắc?", options: { A: "Không có vai trò.", B: "Quyết định mọi thứ.", C: "Chỉ 1 lĩnh vực.", D: "Kiểm soát nhưng không có quyền lực trực tiếp." }, answer: "D" },
            { id: 87, category: "Chương 3", question: "Đặc điểm tổ chức chính tắc?", options: { A: "Không rõ quyền lực.", B: "DN nhỏ.", C: "Tuyến quyền lực và trách nhiệm rõ ràng.", D: "Không liên quan." }, answer: "C" },
            { id: 88, category: "Chương 3", question: "Ngân sách trong tổ chức không chính tắc ảnh hưởng sao?", options: { A: "Thúc đẩy.", B: "Không ảnh hưởng.", C: "Đôi khi là cơ chế phối hợp không hiệu quả.", D: "Tăng hiệu quả." }, answer: "C" },
            { id: 89, category: "Chương 3", question: "Điều chỉnh chi phí trong bán chính tắc?", options: { A: "Nhà quản trị log.", B: "Bởi mỗi bộ phận chức năng và chương trình logistics.", C: "Không cần.", D: "Bên ngoài." }, answer: "B" },
            { id: 90, category: "Chương 3", question: "Vị trí nhà quản trị trong tổ chức chính tắc?", options: { A: "Phụ thuộc.", B: "Thấp hơn.", C: "Cấp cao, ngang bằng các chức năng khác.", D: "Chỉ kho bãi." }, answer: "C" },
            { id: 91, category: "Chương 3", question: "Kiểm soát logistics là?", options: { A: "Lập kế hoạch.", B: "So sánh kết quả với kế hoạch và điều chỉnh.", C: "Giảm chi phí.", D: "Quản lý kho." }, answer: "B" },
            { id: 92, category: "Chương 3", question: "Mô hình kiểm soát gồm hoạt động nào?", options: { A: "Đơn hàng.", B: "Dự trữ.", C: "Vận chuyển.", D: "Đơn lẻ hoặc kết hợp toàn bộ." }, answer: "D" },
            { id: 93, category: "Chương 3", question: "Đo lường kết quả (đầu ra) bằng?", options: { A: "Doanh thu.", B: "Chi phí trực tiếp/gián tiếp hoặc kết quả cung ứng.", C: "Không cần.", D: "Nhân viên." }, answer: "B" },
            { id: 94, category: "Chương 3", question: "Ai thực hiện kiểm tra?", options: { A: "Giám đốc.", B: "Nhà quản trị, cố vấn hoặc máy tính.", C: "Nhân viên kho.", D: "Không ai." }, answer: "B" },
            { id: 95, category: "Chương 3", question: "Thông tin kiểm tra lấy từ?", options: { A: "Báo cáo tài chính.", B: "Báo cáo tồn kho, chi phí, dịch vụ KH...", C: "Không cần.", D: "Cảm nhận KH." }, answer: "B" },
            { id: 96, category: "Chương 3", question: "Quyết định chiến lược là?", options: { A: "Kế hoạch tháng.", B: "Chọn xe.", C: "Gửi hàng.", D: "Vị trí nhà máy, nhà kho." }, answer: "D" },
            { id: 97, category: "Chương 3", question: "Benchmarking là?", options: { A: "So sánh với thực tiễn tốt nhất.", B: "Tối ưu hóa.", C: "Dự báo.", D: "Kiểm soát." }, answer: "A" },
            { id: 98, category: "Chương 3", question: "Công cụ đánh giá tác động trước khi đầu tư?", options: { A: "Tối ưu.", B: "Mô phỏng.", C: "Delphi.", D: "Benchmarking." }, answer: "B" },
            { id: 99, category: "Chương 3", question: "Dự báo chia thành mấy loại?", options: { A: "2", B: "5", C: "4", D: "3" }, answer: "D" },
            { id: 100, category: "Chương 3", question: "Dự báo thường làm trong thời gian nào?", options: { A: "Dài hạn.", B: "Trung hạn.", C: "Ngắn hạn.", D: "Cả 3." }, answer: "C" },
            { id: 101, category: "Chương 3", question: "Thiết lập cấu trúc giúp?", options: { A: "Tăng hiệu quả quản trị.", B: "Tăng chi phí.", C: "Giảm nhu cầu.", D: "Giảm dịch vụ." }, answer: "A" },
            { id: 102, category: "Chương 3", question: "Giai đoạn 2 tập trung vào?", options: { A: "Tập trung vào cung ứng HOẶC phân phối (không phải cả hai).", B: "Tích hợp cả hai.", C: "Loại bỏ.", D: "Marketing." }, answer: "A" },
            { id: 103, category: "Chương 3", question: "Giai đoạn 3 khác biệt gì?", options: { A: "Loại bỏ.", B: "Tích hợp hoàn toàn logistics vào cấu trúc.", C: "Cắt giảm.", D: "Phân phối." }, answer: "B" },
            { id: 104, category: "Chương 3", question: "Lợi ích tổ chức chính tắc?", options: { A: "Giảm quyền lực.", B: "Hạn chế.", C: "Tăng cường phối hợp logistics và bộ phận khác.", D: "Giảm chuyên môn." }, answer: "C" },
            { id: 105, category: "Chương 3", question: "Tổ chức chính tắc giúp?", options: { A: "Phụ thuộc.", B: "Nâng cao vị trí logistics ngang tầm chức năng khác.", C: "Giảm tầm.", D: "Loại bỏ." }, answer: "B" },
            { id: 106, category: "Chương 3", question: "Mục tiêu chiến lược quá trình?", options: { A: "Tối đa hóa hiệu quả luồng hàng từ mua đến cung ứng.", B: "Dịch vụ KH.", C: "Vận chuyển.", D: "Giảm phối hợp." }, answer: "A" },
            { id: 107, category: "Chương 3", question: "Chiến lược quá trình hợp với?", options: { A: "DN nhỏ.", B: "Công ty sản xuất/bán buôn lớn.", C: "Dịch vụ.", D: "CNTT." }, answer: "B" },
            { id: 108, category: "Chương 3", question: "Đặc điểm chiến lược thị trường?", options: { A: "Tích hợp bán hàng và logistics (tập trung Dịch vụ KH).", B: "Chi phí.", C: "Tồn kho.", D: "Không kết hợp." }, answer: "A" },
            { id: 109, category: "Chương 3", question: "Nhược điểm chiến lược thị trường?", options: { A: "Không kết hợp.", B: "Khó đạt chi phí thấp nhất.", C: "Giảm chất lượng.", D: "Không áp dụng bán lẻ." }, answer: "B" },
            { id: 110, category: "Chương 3", question: "Chiến lược thông tin hợp với?", options: { A: "SX.", B: "Không cần dữ liệu.", C: "Mạng lưới phân phối lớn, tồn kho cao.", D: "Không tích hợp." }, answer: "C" },
            { id: 111, category: "Chương 3", question: "Tiêu chuẩn kiểm soát?", options: { A: "Chung chung.", B: "Tồn kho.", C: "Ngân sách, dịch vụ KH, lợi nhuận.", D: "Không có." }, answer: "C" },
            { id: 112, category: "Chương 3", question: "Quyết định chiến lược đặc điểm?", options: { A: "Ngắn.", B: "Dài hạn, thiết kế hệ thống.", C: "Vận tải.", D: "Hàng ngày." }, answer: "B" },
            { id: 113, category: "Chương 3", question: "Chiến thuật vs Chiến lược?", options: { A: "Chiến thuật dài hơn.", B: "Chiến thuật là trung hạn (vận tải, phân phối).", C: "Dịch vụ.", D: "Giám sát viên." }, answer: "B" },
            { id: 114, category: "Chương 3", question: "Ví dụ quyết định chiến thuật?", options: { A: "Kế hoạch vận tải hàng quý.", B: "Vị trí nhà máy.", C: "Mở kho 5 năm.", D: "Đóng gói đơn hàng." }, answer: "A" },
            { id: 115, category: "Chương 3", question: "Quyết định vận hành đặc điểm?", options: { A: "Dài hạn.", B: "Hàng ngày/tuần.", C: "Không ảnh hưởng.", D: "Cấp cao." }, answer: "B" },
            { id: 116, category: "Chương 3", question: "Ví dụ quyết định vận hành?", options: { A: "Chiến lược gom hàng.", B: "Vị trí nhà máy.", C: "Gửi hàng, xếp xe trong ngày.", D: "Thiết kế mạng lưới." }, answer: "C" },
            { id: 117, category: "Chương 3", question: "Kế hoạch chiến lược cần?", options: { A: "Giảm chi phí.", B: "Không đánh giá.", C: "Vận chuyển.", D: "Cái nhìn tổng quan và mối liên hệ chức năng khác." }, answer: "D" },
            { id: 118, category: "Chương 3", question: "Cấu trúc truyền thống đặc điểm?", options: { A: "Hướng KH.", B: "Dòng SP.", C: "Chức năng và hướng nội.", D: "Một người quản lý." }, answer: "C" },
            { id: 119, category: "Chương 3", question: "Quản lý ma trận khác truyền thống?", options: { A: "Không chịu trách nhiệm.", B: "Tập trung dòng sản phẩm kết hợp chức năng.", C: "DN nhỏ.", D: "Phòng ban cố định." }, answer: "B" },
            { id: 120, category: "Chương 3", question: "Tại sao lập kế hoạch quan trọng?", options: { A: "Chuyển chiến lược thành chiến thuật và vận hành.", B: "Theo dõi kho.", C: "DN lớn.", D: "Tạm thời." }, answer: "A" },

            // --- CHƯƠNG 4 ---
            { id: 121, category: "Chương 4", question: "Chuỗi cung ứng (1997) gồm?", options: { A: "SX.", B: "Mọi nỗ lực SX và giao SP cuối cùng.", C: "Vận chuyển.", D: "Cung ứng NVL." }, answer: "B" },
            { id: 122, category: "Chương 4", question: "Quá trình cơ bản (1997)?", options: { A: "Kế hoạch, nguồn cung, SX, giao hàng.", B: "Mua, kho, bán.", C: "Nhận, gói, giao.", D: "Đơn hàng, kho." }, answer: "A" },
            { id: 123, category: "Chương 4", question: "Chuỗi cung ứng (Monczka) gồm?", options: { A: "SX.", B: "NVL.", C: "Mọi hoạt động từ khai thác đến tiêu dùng.", D: "Vận chuyển." }, answer: "C" },
            { id: 124, category: "Chương 4", question: "Luồng thông tin và NVL chảy hướng nào?", options: { A: "Xuôi.", B: "Ngược.", C: "Cả xuôi và ngược.", D: "Không chảy." }, answer: "C" },
            { id: 125, category: "Chương 4", question: "Thuật ngữ tương đương Chuỗi cung ứng?", options: { A: "Vận chuyển.", B: "Chuỗi giá trị.", C: "SX.", D: "Phân phối." }, answer: "B" },
            { id: 126, category: "Chương 4", question: "Chuỗi giá trị nhấn mạnh?", options: { A: "SX.", B: "Dòng chảy sản phẩm và giá trị cung cấp.", C: "Tồn kho.", D: "KH." }, answer: "B" },
            { id: 127, category: "Chương 4", question: "Nhà SX nguyên vật liệu thô là?", options: { A: "Nhà máy ô tô.", B: "Khai thác khoáng sản.", C: "Siêu thị.", D: "Trung tâm điện tử." }, answer: "B" },
            { id: 128, category: "Chương 4", question: "Chức năng nhà phân phối?", options: { A: "SX.", B: "Lưu trữ lớn, bán lại cho DN khác.", C: "Bán lẻ.", D: "Kết hợp." }, answer: "B" },
            { id: 129, category: "Chương 4", question: "Nhà phân phối còn gọi là?", options: { A: "SX.", B: "Bán lẻ.", C: "Bán sỉ (wholesalers).", D: "Tiêu dùng." }, answer: "C" },
            { id: 130, category: "Chương 4", question: "Khách hàng là ai?", options: { A: "Cá nhân.", B: "Doanh nghiệp.", C: "Cả A và B.", D: "Chỉ cá nhân." }, answer: "C" },
            { id: 131, category: "Chương 4", question: "Thành phần quyết định vận chuyển?", options: { A: "Định vị.", B: "Tồn kho.", C: "Vận chuyển.", D: "Sản xuất." }, answer: "C" },
            { id: 132, category: "Chương 4", question: "Thành phần quyết định SX cái gì, bao nhiêu?", options: { A: "Vận chuyển.", B: "Tồn kho.", C: "Sản xuất.", D: "Thông tin." }, answer: "C" },
            { id: 133, category: "Chương 4", question: "Hoạt động sản xuất gồm?", options: { A: "Kế hoạch tổng thể.", B: "QL chất lượng.", C: "Bảo dưỡng.", D: "Tất cả." }, answer: "D" },
            { id: 134, category: "Chương 4", question: "Mục tiêu liên kết dọc?", options: { A: "Tăng trung gian.", B: "Tối đa hóa hiệu quả (kinh tế quy mô).", C: "Rút ngắn vòng đời.", D: "Mở rộng." }, answer: "B" },
            { id: 135, category: "Chương 4", question: "Lean Supply Chain nguồn gốc?", options: { A: "Toyota (TPS).", B: "Linh hoạt.", C: "JIT.", D: "TQM." }, answer: "A" },
            { id: 136, category: "Chương 4", question: "Mô hình kéo (Pull) là?", options: { A: "Kế hoạch định trước.", B: "Dựa trên nhu cầu thực tế.", C: "Tăng sản lượng.", D: "Tồn kho lớn." }, answer: "B" },
            { id: 137, category: "Chương 4", question: "Điểm phân tách (Decoupling Point)?", options: { A: "Điểm giữ tồn kho chiến lược/Nhu cầu thâm nhập.", B: "Nhu cầu.", C: "Vị trí.", D: "Trao đổi." }, answer: "A" },
            { id: 138, category: "Chương 4", question: "Đặc điểm chuỗi nhanh nhạy?", options: { A: "Giảm chi phí.", B: "Nhạy cảm thị trường, ảo, tích hợp.", C: "Tồn kho lớn.", D: "Quy mô lớn." }, answer: "B" },
            { id: 139, category: "Chương 4", question: "Postponement là gì?", options: { A: "Dự trữ lớn.", B: "Khung chung, hoàn thiện khi có đơn.", C: "SX hàng loạt.", D: "SX trước." }, answer: "B" },
            { id: 140, category: "Chương 4", question: "Chuỗi tinh nhạy (Leagile)?", options: { A: "Kết hợp Tinh giản và Nhanh nhạy.", B: "Là Tinh giản.", C: "Bán lẻ.", D: "Không dùng CNTT." }, answer: "A" },
            { id: 141, category: "Chương 4", question: "Chức năng nhà bán lẻ?", options: { A: "Bán trực tiếp cho KH cuối cùng.", B: "Cung cấp NVL.", C: "Bán buôn.", D: "SX." }, answer: "A" },
            { id: 142, category: "Chương 4", question: "Yếu tố thu hút của bán lẻ?", options: { A: "Giá, lựa chọn, dịch vụ, tiện ích.", B: "Trước bán hàng.", C: "Giá cao.", D: "Không quan tâm." }, answer: "A" },
            { id: 143, category: "Chương 4", question: "Nhà cung cấp dịch vụ?", options: { A: "Cung cấp dịch vụ cho các tổ chức trong chuỗi.", B: "Cho KH cuối.", C: "Không tham gia.", D: "SX." }, answer: "A" },
            { id: 144, category: "Chương 4", question: "Tồn kho gồm?", options: { A: "Tại mỗi khâu.", B: "NVL.", C: "Bán thành phẩm.", D: "Tất cả." }, answer: "D" },
            { id: 145, category: "Chương 4", question: "Thành phần xác định vị trí?", options: { A: "Định vị.", B: "Vận chuyển.", C: "Thông tin.", D: "Tồn kho." }, answer: "A" },
            { id: 146, category: "Chương 4", question: "Yếu tố ảnh hưởng định vị?", options: { A: "Hiệu quả chi phí.", B: "Xây mới/cũ.", C: "Con đường.", D: "Tất cả." }, answer: "D" },
            { id: 147, category: "Chương 4", question: "Vai trò thông tin?", options: { A: "Hỗ trợ quyết định.", B: "Không ảnh hưởng.", C: "Cho nhà SX.", D: "Vận chuyển." }, answer: "A" },
            { id: 148, category: "Chương 4", question: "Hệ thống thông tin tốt giúp?", options: { A: "Hợp tác.", B: "Quyết định chính xác.", C: "Hiệu quả.", D: "Tất cả." }, answer: "D" },
            { id: 149, category: "Chương 4", question: "Mục tiêu sản xuất tinh giản?", options: { A: "Tăng tồn kho.", B: "Loại bỏ lãng phí.", C: "Mở rộng.", D: "Tồn kho lớn." }, answer: "B" },
            { id: 150, category: "Chương 4", question: "Giá trị trong Lean do ai định?", options: { A: "Nhà SX.", B: "Khách hàng.", C: "Ngành.", D: "Chính phủ." }, answer: "B" },
            { id: 151, category: "Chương 4", question: "JIT giúp?", options: { A: "Dự trữ lớn.", B: "Giảm thời gian SX và giao hàng.", C: "Tăng lỗi.", D: "SX trước." }, answer: "B" },
            { id: 152, category: "Chương 4", question: "Nhanh nhạy khác Tinh giản?", options: { A: "Nhanh nhạy: linh hoạt/đáp ứng. Tinh giản: loại bỏ lãng phí.", B: "SX vs DN.", C: "Tồn kho.", D: "CNTT." }, answer: "A" },
            { id: 153, category: "Chương 4", question: "Kanban mục đích?", options: { A: "Quản lý bổ sung liên tục.", B: "Giảm SX.", C: "Tồn kho cao.", D: "Hạn chế giao tiếp." }, answer: "A" },
            { id: 154, category: "Chương 4", question: "Lợi ích tích hợp quy trình?", options: { A: "Giảm chia sẻ.", B: "Cải thiện phản ứng nhờ hợp tác.", C: "Tăng tồn kho.", D: "Giảm phụ thuộc." }, answer: "B" },
            { id: 155, category: "Chương 4", question: "Cách tăng cường hợp tác?", options: { A: "Giữ bí mật.", B: "Chia sẻ thông tin và dữ liệu.", C: "Lô lớn.", D: "Giảm NCC." }, answer: "B" },
            { id: 156, category: "Chương 4", question: "Vai trò mạng lưới?", options: { A: "Riêng lẻ.", B: "Liên kết, tăng phản ứng.", C: "Cắt giảm.", D: "Hạn chế." }, answer: "B" },
            { id: 157, category: "Chương 4", question: "Tại sao tích hợp quan trọng?", options: { A: "Độc lập.", B: "Quyết định nhanh hơn nhờ chia sẻ.", C: "Giảm linh hoạt.", D: "Tiết kiệm." }, answer: "B" },
            { id: 158, category: "Chương 4", question: "Nguyên tắc dự báo nhất quán?", options: { A: "Chiến lược công nghệ.", B: "Lắng nghe tín hiệu thị trường.", C: "Chỉ tiêu.", D: "Giảm chi phí." }, answer: "B" },
            { id: 159, category: "Chương 4", question: "Quản lý nguồn cung chiến lược nhằm?", options: { A: "Giảm tổng chi phí NVL và dịch vụ.", B: "Tối đa hóa SX.", C: "Tồn kho cao.", D: "Giảm NCC." }, answer: "A" }, 
            { id: 160, category: "Chương 4", question: "Doanh nghiệp nên quản lý nguồn cung một cách chiến lược nhằm mục đích gì?", options: { A: "Giảm tổng chi phí nguyên vật liệu và dịch vụ", B: "Tối đa hóa sản xuất...", C: "Giữ mức tồn kho cao...", D: "Giảm số lượng nhà cung cấp..." }, answer: "A" },

            // --- CHƯƠNG 5 ---
            { id: 161, category: "Chương 5", question: "Mức độ hài lòng của khách hàng là chỉ số thuộc về?", options: { A: "Tài chính.", B: "Dịch vụ khách hàng.", C: "Nhân sự.", D: "Thị phần." }, answer: "B" },
            { id: 162, category: "Chương 5", question: "Tại sao đo lường dịch vụ khách hàng quan trọng?", options: { A: "Tuyển dụng.", B: "Công nghệ.", C: "Ảnh hưởng trải nghiệm và lòng trung thành.", D: "Thuế." }, answer: "C" },
            { id: 163, category: "Chương 5", question: "Chỉ số hiệu suất nội bộ gồm?", options: { A: "Hài lòng KH.", B: "Hiệu quả sản xuất.", C: "Chuyển đổi.", D: "Thị phần." }, answer: "B" },
            { id: 164, category: "Chương 5", question: "Chỉ số KHÔNG thuộc hiệu suất nội bộ?", options: { A: "Chu kỳ SX.", B: "Tồn kho.", C: "Chi phí vận hành.", D: "Doanh thu bán hàng." }, answer: "D" },
            { id: 165, category: "Chương 5", question: "Chu kỳ sản xuất thuộc nhóm nào?", options: { A: "Trung thành.", B: "Hiệu suất nội bộ.", C: "Quảng cáo.", D: "Tài chính." }, answer: "B" },
            { id: 166, category: "Chương 5", question: "Tại sao cần theo dõi chi phí và tồn kho?", options: { A: "Marketing.", B: "SP mới.", C: "Đánh giá hiệu suất nội bộ.", D: "Lương." }, answer: "C" },
            { id: 167, category: "Chương 5", question: "KHÔNG phải cách đo lường linh hoạt?", options: { A: "Điều chỉnh kế hoạch.", B: "SP mới.", C: "Phân phối.", D: "Tăng chi phí quảng cáo." }, answer: "D" },
            { id: 168, category: "Chương 5", question: "Hệ thống đo lường linh hoạt giúp gì?", options: { A: "Định giá.", B: "Đo phản ứng để ra quyết định.", C: "Giảm phí.", D: "Tăng nhân viên." }, answer: "B" },
            { id: 169, category: "Chương 5", question: "Biểu hiện của sự linh hoạt?", options: { A: "Giảm phí NVL.", B: "Thay đổi kế hoạch SX kịp thời.", C: "Tăng đại lý.", D: "Đào tạo." }, answer: "B" },
            { id: 170, category: "Chương 5", question: "Chỉ số KHÔNG thuộc phát triển SP?", options: { A: "Chi phí PT.", B: "Tỷ lệ thành công.", C: "Thời gian giao hàng.", D: "Tốc độ ra mắt." }, answer: "C" },
            { id: 171, category: "Chương 5", question: "Mục đích đo lường phát triển SP?", options: { A: "Đánh giá năng lực đổi mới.", B: "Tồn kho.", C: "Marketing.", D: "Vận hành." }, answer: "A" },
            { id: 172, category: "Chương 5", question: "Mức độ thành công SP mới đánh giá gì?", options: { A: "Chi phí.", B: "Năng lực đổi mới.", C: "Nhân viên.", D: "KH trung thành." }, answer: "B" },
            { id: 173, category: "Chương 5", question: "Chi phí phát triển SP đo lường gì?", options: { A: "Vận chuyển.", B: "Khả năng đổi mới.", C: "Xử lý đơn.", D: "Hài lòng." }, answer: "B" },
            { id: 174, category: "Chương 5", question: "3 cấp độ dữ liệu?", options: { A: "Tài chính, nhân sự...", B: "Vận hành, Chiến lược, Phân tích.", C: "SX, MKT...", D: "Kho, bán..." }, answer: "B" },
            { id: 175, category: "Chương 5", question: "Mỗi cấp độ dữ liệu phục vụ cho?", options: { A: "Mục tiêu quản trị khác nhau.", B: "Doanh thu.", C: "Đào tạo.", D: "Truyền thông." }, answer: "A" },
            { id: 176, category: "Chương 5", question: "Chức năng Kho dữ liệu (Data Warehouse)?", options: { A: "Lưu tin KH.", B: "Tập hợp dữ liệu để phân tích.", C: "Quản lý nhân sự.", D: "Giao dịch." }, answer: "B" },
            { id: 177, category: "Chương 5", question: "Kho dữ liệu giúp tăng cường?", options: { A: "Nhân viên.", B: "Tổng hợp và truy xuất nhanh.", C: "Doanh số.", D: "Chi phí." }, answer: "B" },
            { id: 178, category: "Chương 5", question: "Kho dữ liệu tạo ra bằng cách?", options: { A: "1 nguồn.", B: "Tập hợp nhiều nguồn.", C: "Nhân sự.", D: "Marketing." }, answer: "B" },
            { id: 179, category: "Chương 5", question: "Khám phá cơ hội tiềm năng giúp?", options: { A: "Mở rộng kinh doanh, nâng cao hiệu quả.", B: "Tăng thời gian.", C: "Giảm chất lượng.", D: "Giảm NCC." }, answer: "A" },
            { id: 180, category: "Chương 5", question: "Thông tin kế hoạch SX dùng để?", options: { A: "Lập kế hoạch và điều phối nguồn lực.", B: "Tuyển dụng.", C: "Quảng cáo.", D: "Chi phí nhân sự." }, answer: "A" },
            { id: 181, category: "Chương 5", question: "Vai trò mô hình tương quan thị trường?", options: { A: "Marketing.", B: "Doanh số.", C: "Xác định phản ứng của chuỗi cung ứng với thay đổi.", D: "Giảm giá." }, answer: "C" },
            { id: 182, category: "Chương 5", question: "Mục tiêu mô hình tương quan?", options: { A: "Dự đoán tiêu thụ.", B: "Chi phí kho.", C: "Hiệu quả SX.", D: "Hiểu và dự báo phản ứng trước biến động." }, answer: "D" },
            { id: 183, category: "Chương 5", question: "Mô hình hỗ trợ gì?", options: { A: "ERP.", B: "NCC.", C: "Đưa ra phản ứng phù hợp.", D: "Lương." }, answer: "C" },
            { id: 184, category: "Chương 5", question: "Tại sao mô hình quan trọng?", options: { A: "Giao hàng.", B: "Giúp thích nghi hiệu quả.", C: "Xuất khẩu.", D: "Nhân sự." }, answer: "B" },
            { id: 185, category: "Chương 5", question: "Đặc điểm thời trang nhanh?", options: { A: "Ổn định.", B: "Thay đổi liên tục.", C: "Nhu cầu ổn.", D: "Không cần dữ liệu." }, answer: "B" },
            { id: 186, category: "Chương 5", question: "Đo lường dịch vụ KH tập trung vào?", options: { A: "Chi phí SX.", B: "Thị phần.", C: "Thời gian giao, khả năng đáp ứng.", D: "Nhân viên." }, answer: "C" },
            { id: 187, category: "Chương 5", question: "KHÔNG phải trọng tâm dịch vụ KH?", options: { A: "Thời gian.", B: "Độ tin cậy.", C: "Đáp ứng.", D: "Chi phí Marketing." }, answer: "D" },
            { id: 188, category: "Chương 5", question: "Dịch vụ KH phản ánh?", options: { A: "SP mới.", B: "Trải nghiệm và lòng trung thành.", C: "Chi phí.", D: "Đối thủ." }, answer: "B" },
            { id: 189, category: "Chương 5", question: "Mục tiêu đo lường nội bộ?", options: { A: "Marketing.", B: "Đánh giá, tối ưu quy trình.", C: "Dịch vụ.", D: "Xu hướng." }, answer: "B" },
            { id: 190, category: "Chương 5", question: "Đo lường phản ứng linh hoạt nhằm?", options: { A: "Chi phí.", B: "Đánh giá khả năng thích ứng.", C: "Nhân viên.", D: "Thị phần." }, answer: "B" },
            { id: 191, category: "Chương 5", question: "Đo lường linh hoạt tập trung vào?", options: { A: "Mức độ linh hoạt, nhanh nhạy.", B: "Doanh số.", C: "Marketing.", D: "NCC." }, answer: "A" },
            { id: 192, category: "Chương 5", question: "Đo lường phát triển SP tập trung?", options: { A: "Tốc độ ra mắt.", B: "Hài lòng.", C: "Vận hành.", D: "Tồn kho." }, answer: "A" },
            { id: 193, category: "Chương 5", question: "Dữ liệu vận hành (Transactional) phục vụ?", options: { A: "Chiến lược.", B: "Hoạt động hàng ngày.", C: "Xu hướng.", D: "Kế hoạch." }, answer: "B" },
            { id: 194, category: "Chương 5", question: "Dữ liệu chiến lược phục vụ?", options: { A: "Quyết định dài hạn.", B: "Giao dịch.", C: "Tồn kho.", D: "SX." }, answer: "A" },
            { id: 195, category: "Chương 5", question: "Dữ liệu phân tích phục vụ?", options: { A: "Bán hàng.", B: "Phân tích, ra quyết định.", C: "Nhân sự.", D: "Marketing." }, answer: "B" },
            { id: 196, category: "Chương 5", question: "Kho dữ liệu quan trọng vì?", options: { A: "Quyết định nhanh, chính xác.", B: "Tuyển dụng.", C: "Tồn kho.", D: "Hài lòng." }, answer: "A" },
            { id: 197, category: "Chương 5", question: "Mục đích chính kho dữ liệu?", options: { A: "Phân tích.", B: "Lưu hồ sơ.", C: "Hợp đồng.", D: "Đơn hàng." }, answer: "A" },
            { id: 198, category: "Chương 5", question: "Phân tích dữ liệu giúp?", options: { A: "Nhân viên.", B: "Tìm điểm nghẽn, cơ hội.", C: "Chi phí.", D: "Sản lượng." }, answer: "B" },
            { id: 199, category: "Chương 5", question: "Lean giúp?", options: { A: "Tăng thời gian.", B: "Tăng nhân công.", C: "Tăng tồn kho.", D: "Giảm lãng phí, nâng hiệu suất." }, answer: "D" },
            { id: 200, category: "Chương 5", question: "Chỉ số đánh giá đáp ứng đơn hàng?", options: { A: "Inventory Turnover.", B: "Order Fulfillment Rate.", C: "Freight Cost.", D: "ROI." }, answer: "B" }
        ]
    }
,
"KTH": {
        name: "Kinh tế học",
        icon: "📉",
        time: 60,
        description: "Tổng hợp 164 câu trắc nghiệm Vi mô & Vĩ mô (Đầy đủ).",
        questions: [
            { id: 1, category: "Cung cầu", question: "Lượng cầu nhạy cảm hơn đối với những thay đổi trong giá khi nào?", options: { A: "Cung là không co dãn tương đối.", B: "Người tiêu dùng hợp lý.", C: "Có thông tin tốt hơn.", D: "Có nhiều hàng hóa thay thế ở mức độ cao." }, answer: "D" },
            { id: 2, category: "Lý thuyết người tiêu dùng", question: "Quy tắc phân bổ ngân sách tối ưu cho người tiêu dùng là gì?", options: { A: "MU/P của các hàng hóa bằng nhau.", B: "Lợi ích bằng 0.", C: "Lợi ích vô cùng.", D: "MU/P bằng nhau (Lợi ích cận biên trên mỗi đồng chi tiêu bằng nhau)." }, answer: "D" },
            { id: 3, category: "Vi mô", question: "Thặng dư sản xuất (PS) biểu thị điều gì?", options: { A: "Chênh lệch doanh thu và tổng chi phí.", B: "Tổng chi phí cố định.", C: "Diện tích trên đường cung dưới đường giá.", D: "Chênh lệch doanh thu và biến phí." }, answer: "C" },
            { id: 4, category: "Cung cầu", question: "Nắng hạn ảnh hưởng thế nào đến thị trường gạo?", options: { A: "Cầu tăng.", B: "Đường cung dịch chuyển sang trái và lên trên (Cung giảm).", C: "Người tiêu dùng giảm cầu.", D: "Giá hàng thay thế giảm." }, answer: "B" },
            { id: 5, category: "Sản xuất", question: "Giá trị của sản phẩm cận biên của lao động (VMPL) bằng:", options: { A: "Doanh thu biên.", B: "Lợi nhuận biên.", C: "Sản phẩm cận biên nhân với mức lương.", D: "Sản phẩm cận biên nhân với giá sản phẩm." }, answer: "D" },
            { id: 6, category: "Hành vi doanh nghiệp", question: "Doanh thu cận biên (MR) đối với hãng cạnh tranh hoàn hảo:", options: { A: "Nhỏ hơn giá.", B: "Bằng giá (P).", C: "Doanh thu từ đơn vị bán thêm.", D: "Cả B và C." }, answer: "D" },
            { id: 7, category: "Lý thuyết người tiêu dùng", question: "Ràng buộc ngân sách biểu thị điều gì?", options: { A: "Tập hợp cơ hội.", B: "Tổng chi tiêu <= Thu nhập.", C: "Lợi ích giảm dần.", D: "Cả A và B." }, answer: "D" },
            { id: 8, category: "Chi phí", question: "Khác nhau giữa ngắn hạn và dài hạn:", options: { A: "Hiệu suất không đổi.", B: "Dài hạn mọi yếu tố đều thay đổi được.", C: "3 tháng.", D: "Chi phí trung bình." }, answer: "B" },
            { id: 9, category: "Cung cầu", question: "Giá tăng, lượng cầu giảm dọc đường cầu vì:", options: { A: "Hiệu ứng thay thế.", B: "Hiệu ứng thu nhập.", C: "Cung tăng.", D: "Cả A và B." }, answer: "D" },
            { id: 10, category: "Tổng quan", question: "Kinh tế học nghiên cứu về:", options: { A: "Tiền.", B: "Phân bổ tài nguyên khan hiếm.", C: "Của cải.", D: "Kinh doanh." }, answer: "B" },
            { id: 11, category: "Cung cầu", question: "Doanh thu nông dân cao khi mất mùa vì:", options: { A: "Cầu co dãn.", B: "Cung co dãn.", C: "Cầu không co dãn (Giá tăng mạnh hơn lượng giảm).", D: "Cung không co dãn." }, answer: "C" },
            { id: 12, category: "Lý thuyết người tiêu dùng", question: "Thu nhập tăng, đường ngân sách:", options: { A: "Dịch chuyển ra ngoài song song.", B: "Dốc hơn.", C: "Thoải hơn.", D: "Vào trong." }, answer: "A" },
            { id: 13, category: "Cung cầu", question: "Hàng hóa cấp thấp là:", options: { A: "Giá tăng mua ít.", B: "Giá giảm mua nhiều.", C: "Thu nhập tăng thì mua ít đi.", D: "Thu nhập giảm mua ít." }, answer: "C" },
            { id: 14, category: "Tổng quan", question: "Phải lựa chọn vì:", options: { A: "Hiệu suất giảm.", B: "Hợp lý.", C: "Sự khan hiếm.", D: "Tất cả." }, answer: "C" },
            { id: 15, category: "Chi phí", question: "Câu nào SAI?", options: { A: "ATC < MC thì ATC tăng.", B: "ATC > MC thì MC tăng (Sai, MC có thể tăng/giảm).", C: "MC tăng thì AC tăng (Sai).", D: "MC=ATC tại cực tiểu ATC." }, answer: "C" },
            { id: 16, category: "Tổng quan", question: "Kinh tế học chuẩn tắc (lời khuyên):", options: { A: "Thâm hụt gây mất cân bằng.", B: "Suy thoái tăng thất nghiệp.", C: "Lãi suất thấp kích thích ĐT.", D: "Phải giảm lãi suất để kích thích ĐT." }, answer: "D" },
            { id: 17, category: "Tổng quan", question: "Yếu tố KHÔNG làm dịch chuyển PPF ra ngoài:", options: { A: "Máy móc mới.", B: "Dân số tăng.", C: "Công nghệ.", D: "Tiêu dùng tăng (Chỉ là cầu)." }, answer: "D" },
            { id: 18, category: "Cung cầu", question: "Đường cầu cá nhân cho biết:", options: { A: "Lượng mua ở mỗi mức giá.", B: "Giá cân bằng.", C: "Thay thế.", D: "Tất cả." }, answer: "A" },
            { id: 19, category: "Độ co dãn", question: "Co dãn cầu theo thu nhập là:", options: { A: "Lượng/Giá.", B: "Phần trăm lượng / Phần trăm thu nhập.", C: "Dương.", D: "Bằng 1." }, answer: "B" },
            { id: 20, category: "Cung cầu", question: "Hàng bổ sung, giá B tăng thì:", options: { A: "Cầu A tăng.", B: "Cầu A giảm (dịch trái), giá A giảm.", C: "Giá A tăng.", D: "Lượng A tăng." }, answer: "B" },
            { id: 21, category: "Độ co dãn", question: "Cầu co dãn (E=1.5), giá giảm thì TR:", options: { A: "Giảm.", B: "Tăng.", C: "Không đổi.", D: "Gấp đôi." }, answer: "B" },
            { id: 22, category: "Tổng quan", question: "PPF dịch chuyển do:", options: { A: "Thất nghiệp.", B: "Lạm phát.", C: "Công nghệ sản xuất.", D: "Thị hiếu." }, answer: "C" },
            { id: 23, category: "Cung cầu", question: "Đường cầu thẳng:", options: { A: "Độ dốc không đổi, co dãn thay đổi.", B: "Co dãn không đổi.", C: "Cả 2 đổi.", D: "Cả 2 không đổi." }, answer: "A" },
            { id: 24, category: "Cung cầu", question: "Cầu giảm khi thu nhập giảm:", options: { A: "Hàng bình thường.", B: "Cấp thấp.", C: "Xa xỉ.", D: "Thiết yếu." }, answer: "A" },
            { id: 25, category: "Lý thuyết người tiêu dùng", question: "Độ dốc đường ngân sách phụ thuộc:", options: { A: "Giá tương đối (-Px/Py).", B: "Thu nhập.", C: "Sở thích.", D: "Thay thế." }, answer: "A" },
            { id: 26, category: "Cung cầu", question: "Lượng mua KHÔNG phụ thuộc:", options: { A: "Giá.", B: "Thị hiếu.", C: "Thu nhập.", D: "Độ co dãn của cung." }, answer: "D" },
            { id: 27, category: "Chi phí cơ hội", question: "Chi phí cơ hội mua áo 100k trong 1h:", options: { A: "100k.", B: "1h.", C: "Phương án thay thế tốt nhất của 1h và 100k.", D: "Tổng." }, answer: "C" },
            { id: 28, category: "Sản xuất", question: "Hiệu suất tăng theo quy mô:", options: { A: "Đầu ra tăng ít hơn 2 lần.", B: "Đúng 2 lần.", C: "Nhiều hơn 2 lần.", D: "Giảm." }, answer: "C" },
            { id: 29, category: "Cung cầu", question: "Cầu thị trường tính bằng:", options: { A: "Cộng dọc.", B: "Cộng ngang (lượng).", C: "Trung bình.", D: "Không tính được." }, answer: "B" },
            { id: 30, category: "Chi phí", question: "Đường LRAC là:", options: { A: "Tổng.", B: "Đường bao (biên dưới) các đường ngắn hạn.", C: "Đi qua cực tiểu.", D: "Thẳng." }, answer: "B" },
            { id: 31, category: "Cung cầu", question: "Giá A tăng, cầu B tăng -> A, B là:", options: { A: "Bổ sung.", B: "Thay thế.", C: "Thứ cấp.", D: "Độc lập." }, answer: "B" },
            { id: 32, category: "Cung cầu", question: "Tăng cung giảm giá TRỪ KHI:", options: { A: "Cung không co dãn.", B: "Cầu co dãn hoàn toàn (nằm ngang).", C: "Cầu không co dãn.", D: "Cả 2." }, answer: "B" },
            { id: 33, category: "Cung cầu", question: "Yếu tố KHÔNG dịch chuyển cầu thịt bò:", options: { A: "Giá hàng thay thế.", B: "Giá thịt bò (di chuyển dọc).", C: "Thu nhập.", D: "Quảng cáo." }, answer: "B" },
            { id: 34, category: "Độ co dãn", question: "Tỷ trọng chi tiêu giảm khi thu nhập tăng:", options: { A: "Xa xỉ.", B: "Thiết yếu (E < 1).", C: "Cấp thấp.", D: "Không xác định." }, answer: "B" },
            { id: 35, category: "Cung cầu", question: "Yếu tố KHÔNG dịch chuyển cầu cafe:", options: { A: "Giá cafe.", B: "Giá chè.", C: "Thu nhập.", D: "Thời tiết." }, answer: "A" },
            { id: 36, category: "Cung cầu", question: "Giá cá giảm ảnh hưởng thịt (thay thế):", options: { A: "Cầu thịt tăng.", B: "Cầu thịt giảm, giá thịt giảm.", C: "Giá thịt tăng.", D: "Cầu cá giảm." }, answer: "B" },
            { id: 37, category: "Lý thuyết người tiêu dùng", question: "Giá hàng trục hoành giảm, đường ngân sách:", options: { A: "Quay ra ngoài, thoải hơn.", B: "Vào trong.", C: "Song song.", D: "Dốc hơn." }, answer: "A" },
            { id: 38, category: "Lý thuyết người tiêu dùng", question: "Cân bằng tiêu dùng:", options: { A: "Tiếp xúc đường bàng quan.", B: "MU/P bằng nhau.", C: "Chi tiêu bằng nhau.", D: "Cả A và B." }, answer: "D" },
            { id: 39, category: "Cung cầu", question: "Cung tăng, Cầu giảm mạnh:", options: { A: "Giá tăng.", B: "Giá giảm, lượng giảm (do cầu giảm mạnh hơn).", C: "Giá giảm.", D: "Không đổi." }, answer: "B" },
            { id: 40, category: "Độ co dãn", question: "Công thức co dãn giá:", options: { A: "% Lượng / % Giá.", B: "Lượng/Giá.", C: "Độ dốc.", D: "Doanh thu." }, answer: "A" },
            { id: 41, category: "Hành vi doanh nghiệp", question: "Ngắn hạn sản xuất khi:", options: { A: "P > AC.", B: "P > AVC.", C: "TR > TC.", D: "MR > MC." }, answer: "B" },
            { id: 42, category: "Tổng quan", question: "Kinh tế học thực chứng:", options: { A: "Thuế cao.", B: "Lãi suất thấp sẽ kích thích đầu tư (Sự thật).", C: "Phải giảm.", D: "Tiết kiệm thấp." }, answer: "B" },
            { id: 43, category: "Sản xuất", question: "Kinh tế theo quy mô (Economies of Scale):", options: { A: "SX nhiều rẻ hơn.", B: "AC giảm khi Q tăng.", C: "MC dốc xuống.", D: "Cả A và B." }, answer: "D" },
            { id: 44, category: "Độ co dãn", question: "E = 1/3. Giá tăng 30% -> Lượng:", options: { A: "Tăng 10%.", B: "Giảm 10%.", C: "Giảm 90%.", D: "Không đổi." }, answer: "B" },
            { id: 45, category: "Cung cầu", question: "Câu nào SAI?", options: { A: "Cung trái -> Giá tăng.", B: "Cầu trái, Cung tăng -> Giá tăng (Sai, cả 2 làm giá giảm).", C: "Cầu trái -> Giá giảm.", D: "Cầu phải -> Giá tăng." }, answer: "B" },
            { id: 46, category: "Vĩ mô", question: "KHÔNG phải chi phí nhân tố:", options: { A: "Lương.", B: "Thuê.", C: "Lợi nhuận.", D: "Trợ cấp kinh doanh." }, answer: "D" },
            { id: 47, category: "Vĩ mô", question: "VN: GDP > GNP thì:", options: { A: "NIA âm.", B: "Người nước ngoài tại VN tạo ra nhiều hơn người VN ở nước ngoài.", C: "Suy thoái.", D: "XK ròng dương." }, answer: "B" },
            { id: 48, category: "Vĩ mô", question: "AD dốc xuống vì:", options: { A: "Thay thế.", B: "Hiệu ứng của cải & lãi suất.", C: "Tỷ giá.", D: "Cả B và C." }, answer: "D" },
            { id: 49, category: "Vĩ mô", question: "Cầu tiền phụ thuộc:", options: { A: "Thu nhập.", B: "Lãi suất.", C: "Cả hai.", D: "Tỷ giá." }, answer: "C" },
            { id: 50, category: "Vĩ mô", question: "Tài khóa mở rộng:", options: { A: "Cầu tiền giảm.", B: "Cầu tiền tăng, lãi suất tăng.", C: "Lãi suất giảm.", D: "Không đổi." }, answer: "B" },
            { id: 51, category: "Vĩ mô", question: "AD dịch phải khi:", options: { A: "Thuế tăng.", B: "G tăng hoặc XK tăng.", C: "NK tăng.", D: "Cung tiền giảm." }, answer: "B" },
            { id: 52, category: "Vĩ mô", question: "Mức giá tăng gấp đôi:", options: { A: "Cầu tiền giảm.", B: "Giá trị tiền giảm một nửa.", C: "Cung tiền tăng.", D: "Thu nhập tăng." }, answer: "B" },
            { id: 53, category: "Vĩ mô", question: "Thuế nhập khẩu tăng:", options: { A: "AD trái.", B: "AD phải (chuyển sang hàng nội).", C: "AS phải.", D: "Không đổi." }, answer: "B" },
            { id: 54, category: "Vĩ mô", question: "Kinh tế đóng:", options: { A: "C=S.", B: "I = S (Đầu tư = Tiết kiệm).", C: "Ngân sách cân bằng.", D: "X=M." }, answer: "B" },
            { id: 55, category: "Vĩ mô", question: "Giảm cung tiền:", options: { A: "Mua TP.", B: "Giảm dự trữ.", C: "Bán trái phiếu, tăng dự trữ, tăng lãi suất.", D: "Giảm lãi." }, answer: "C" },
            { id: 56, category: "Vĩ mô", question: "ÍT khả năng kích thích đầu tư nhất:", options: { A: "Lãi suất giảm.", B: "Công nghệ.", C: "Nhập khẩu tăng.", D: "Tiêu dùng tăng." }, answer: "C" },
            { id: 57, category: "Vĩ mô", question: "GDP danh nghĩa KHÔNG có tính chất:", options: { A: "Giá hiện hành.", B: "SP cuối cùng.", C: "Giá cố định (Đây là GDP thực).", D: "1 năm." }, answer: "C" },
            { id: 58, category: "Vĩ mô", question: "Tăng cung tiền:", options: { A: "IS phải.", B: "LM dịch phải (xuống).", C: "Cả 2.", D: "Không đổi." }, answer: "B" },
            { id: 59, category: "Vĩ mô", question: "Tiền tệ mở rộng:", options: { A: "Mua TP, giảm dự trữ, giảm lãi suất.", B: "Bán TP.", C: "Tăng thuế.", D: "Giảm chi." }, answer: "A" },
            { id: 60, category: "Vĩ mô", question: "Tài khóa mở + Tiền tệ chặt:", options: { A: "Lãi suất chắc chắn tăng.", B: "Y tăng.", C: "Lãi giảm.", D: "Y giảm." }, answer: "A" },
            { id: 61, category: "Vĩ mô", question: "Y giảm, Ms không đổi:", options: { A: "Cầu tiền giảm, lãi suất giảm.", B: "Cầu tiền tăng.", C: "Lãi tăng.", D: "Không đổi." }, answer: "A" },
            { id: 62, category: "Vĩ mô", question: "M1 gồm:", options: { A: "Tiền mặt + Tiền gửi không kỳ hạn.", B: "Tiết kiệm.", C: "Vàng.", D: "TP." }, answer: "A" },
            { id: 63, category: "Vĩ mô", question: "Bài tập IS-LM (C=200+0.75(Y-100)...):", options: { A: "IS: Y=1700-100i; LM: Y=600+100i.", B: "IS: Y=600.", C: "LM: 1700.", D: "Khác." }, answer: "A" },
            { id: 64, category: "Vĩ mô", question: "Tăng thuế:", options: { A: "C giảm, I tăng (do i giảm), i giảm.", B: "C tăng.", C: "i tăng.", D: "I giảm." }, answer: "A" },
            { id: 65, category: "Cung cầu", question: "Khi giá tăng, lượng cầu giảm dọc đường cầu vì (Lặp lại):", options: { A: "Thay thế.", B: "Rời bỏ thị trường.", C: "Gia nhập.", D: "Cả A và B." }, answer: "D" },
            { id: 66, category: "Tổng quan", question: "Kinh tế học định nghĩa (Lặp lại):", options: { A: "Tiền.", B: "Phân bổ nguồn lực.", C: "Của cải.", D: "Kinh doanh." }, answer: "B" },
            { id: 67, category: "Cung cầu", question: "Doanh thu nông dân (Lặp lại):", options: { A: "Cầu co dãn.", B: "Cung co dãn.", C: "Cầu không co dãn.", D: "Cung không co dãn." }, answer: "C" },
            { id: 68, category: "Lý thuyết người tiêu dùng", question: "Thu nhập tăng (Lặp lại):", options: { A: "Dịch ra ngoài.", B: "Dốc hơn.", C: "Thoải hơn.", D: "Vào trong." }, answer: "A" },
            { id: 69, category: "Cung cầu", question: "Hàng cấp thấp (Lặp lại):", options: { A: "Giá tăng mua ít.", B: "Giá giảm mua nhiều.", C: "Thu nhập tăng mua ít.", D: "Thu nhập giảm mua ít." }, answer: "C" },
            { id: 70, category: "Tổng quan", question: "Lựa chọn (Lặp lại):", options: { A: "Hiệu suất.", B: "Hợp lý.", C: "Khan hiếm.", D: "Tất cả." }, answer: "C" },
            { id: 71, category: "Chi phí", question: "Câu không đúng (Lặp lại):", options: { A: "ATC < MC -> ATC tăng.", B: "ATC > MC -> MC tăng.", C: "MC tăng -> AC tăng (Sai).", D: "MC=ATC tại min." }, answer: "C" },
            { id: 72, category: "Tổng quan", question: "Chuẩn tắc (Lặp lại):", options: { A: "Thâm hụt.", B: "Suy thoái.", C: "Lãi suất.", D: "Phải giảm lãi suất." }, answer: "D" },
            { id: 73, category: "Tổng quan", question: "PPF (Lặp lại):", options: { A: "Chi tiêu nhà máy.", B: "Dân số.", C: "Phương pháp tốt hơn.", D: "Mỏ dầu.", E: "Tiêu dùng tăng (Không làm dịch chuyển)." }, answer: "E" },
            { id: 74, category: "Cung cầu", question: "Đường cầu cá nhân (Lặp lại):", options: { A: "Số lượng mua ở mỗi giá.", B: "Giá cân bằng.", C: "Thay thế.", D: "Tất cả." }, answer: "A" },
            { id: 75, category: "Cung cầu", question: "Hàng cấp thấp (Lặp lại):", options: { A: "Giá tăng mua ít.", B: "Giá giảm mua nhiều.", C: "Thu nhập tăng mua ít.", D: "Thu nhập giảm mua ít." }, answer: "C" },
            { id: 76, category: "Độ co dãn", question: "Co dãn thu nhập dương (Repeat):", options: { A: "1.", B: "Lớn hơn 0.", C: "Co dãn thu nhập.", D: "Co dãn giá." }, answer: "C" },
            { id: 77, category: "Hành vi doanh nghiệp", question: "Doanh thu biên (Lặp lại):", options: { A: "Nhỏ hơn P.", B: "Bằng P.", C: "Doanh thu thêm.", D: "Lợi nhuận thêm.", E: "B và C." }, answer: "E" },
            { id: 78, category: "Cung cầu", question: "A, B bổ sung. Giá B tăng (Lặp lại):", options: { A: "Cầu A tăng.", B: "Giá A giảm (do cầu A giảm).", C: "Giá A tăng.", D: "Lượng A tăng." }, answer: "B" },
            { id: 79, category: "Độ co dãn", question: "E=1.5, Giá giảm (Lặp lại):", options: { A: "TR giữ nguyên.", B: "Giảm.", C: "Tăng.", D: "Gấp đôi." }, answer: "C" },
            { id: 80, category: "Tổng quan", question: "PPF dịch chuyển (Lặp lại):", options: { A: "Thất nghiệp.", B: "Lạm phát.", C: "Công nghệ.", D: "Kết hợp.", E: "Thị hiếu." }, answer: "C" },
            { id: 81, category: "Cung cầu", question: "Đường cầu thẳng (Lặp lại):", options: { A: "Dốc không đổi, co dãn đổi.", B: "Co dãn không đổi.", C: "Đổi cả 2.", D: "Không đổi." }, answer: "A" },
            { id: 82, category: "Cung cầu", question: "Cầu giảm khi I giảm (Lặp lại):", options: { A: "Hàng bình thường.", B: "Cấp thấp.", C: "E < 1.", D: "0 < E < 1.", E: "B và C." }, answer: "A" },
            { id: 83, category: "Lý thuyết người tiêu dùng", question: "Độ dốc ngân sách (Lặp lại):", options: { A: "Giá tương đối.", B: "Thu nhập.", C: "Sẵn có.", D: "Loại hàng.", E: "A và B." }, answer: "A" },
            { id: 84, category: "Cung cầu", question: "Lượng mua không phụ thuộc (Lặp lại):", options: { A: "Giá.", B: "Thị hiếu.", C: "Thay thế.", D: "Thu nhập.", E: "Co dãn cung." }, answer: "E" },
            { id: 85, category: "Chi phí cơ hội", question: "Mua áo 100k trong 1h (Lặp lại):", options: { A: "1h.", B: "100k.", C: "1h + 100k.", D: "Phương án thay thế tốt nhất." }, answer: "D" },
            { id: 86, category: "Sản xuất", question: "Hiệu suất tăng (Lặp lại):", options: { A: "Tăng ít hơn 2.", B: "Trừ 1 yếu tố.", C: "Đúng 2.", D: "Nhiều hơn 2." }, answer: "D" },
            { id: 87, category: "Cung cầu", question: "Cầu thị trường (Lặp lại):", options: { A: "Cộng dọc.", B: "Cộng ngang.", C: "Trung bình.", D: "Không thể." }, answer: "B" },
            { id: 88, category: "Tổng quan", question: "Khan hiếm (Lặp lại):", options: { A: "Trả lời câu hỏi.", B: "Lựa chọn.", C: "Trừ người giàu.", D: "Chính phủ." }, answer: "B" },
            { id: 89, category: "Chi phí", question: "LRAC (Lặp lại):", options: { A: "Tổng.", B: "Bao dưới.", C: "Bao trên.", D: "Ngang." }, answer: "B" },
            { id: 90, category: "Cung cầu", question: "Giá tăng, Cầu khác tăng (Lặp lại):", options: { A: "Thứ cấp.", B: "Bổ sung.", C: "Thay thế.", D: "Bình thường." }, answer: "C" },
            { id: 91, category: "Cung cầu", question: "Nắng hạn (Lặp lại):", options: { A: "Cung giá cao.", B: "Cầu cao.", C: "Giảm cầu.", D: "Cung trái, lên trên.", E: "Giảm giá thay thế." }, answer: "D" },
            { id: 92, category: "Cung cầu", question: "Tăng cung giảm giá trừ khi (Lặp lại):", options: { A: "Cung không co dãn.", B: "Cầu co dãn hoàn toàn.", C: "Cầu tăng.", D: "Cầu không co dãn." }, answer: "B" },
            { id: 93, category: "Cung cầu", question: "KHÔNG dịch chuyển cầu thịt bò (Lặp lại):", options: { A: "Giá thay thế.", B: "Giá thịt bò (di chuyển dọc).", C: "Thu nhập.", D: "Quảng cáo.", E: "Thị hiếu." }, answer: "B" },
            { id: 94, category: "Chi phí", question: "Ngắn hạn khác dài hạn (Lặp lại):", options: { A: "Hiệu suất.", B: "Dài hạn thay đổi được hết.", C: "3 tháng.", D: "Chi phí TB." }, answer: "B" },
            { id: 95, category: "Độ co dãn", question: "% thu nhập chi tiêu giảm khi thu nhập tăng:", options: { A: "Lớn hơn 1.", B: "Giữa 0 và 1 (Hàng thiết yếu).", C: "0.", D: "Nhỏ hơn 0.", E: "Không thể nói." }, answer: "B" },
            { id: 96, category: "Cung cầu", question: "KHÔNG dịch chuyển cầu cafe (Lặp lại):", options: { A: "Giá cafe.", B: "Giá chè.", C: "Thu nhập.", D: "Thời tiết.", E: "Tất cả." }, answer: "A" },
            { id: 97, category: "Cung cầu", question: "Giảm giá cá (Lặp lại):", options: { A: "Cầu thịt phải.", B: "Cầu cá phải.", C: "Cầu cá trái.", D: "Tăng giá thịt.", E: "Giảm giá thịt (do cầu thịt giảm)." }, answer: "E" },
            { id: 98, category: "Cung cầu", question: "Lượng cầu nhạy cảm (Lặp lại):", options: { A: "Cung không co dãn.", B: "Nhiều thay thế.", C: "Hợp lý.", D: "Thông tin.", E: "Tất cả." }, answer: "E" },
            { id: 99, category: "Lý thuyết người tiêu dùng", question: "Thu nhập tăng, ngân sách (Lặp lại):", options: { A: "Ra ngoài song song.", B: "Dốc hơn.", C: "Thoải hơn.", D: "Vào trong." }, answer: "A" },
            { id: 100, category: "Tổng quan", question: "Chủ đề cơ bản vi mô:", options: { A: "Thị trường.", B: "Tiền.", C: "Lợi nhuận.", D: "Cơ chế giá.", E: "Sự khan hiếm." }, answer: "E" },
            { id: 101, category: "Cung cầu", question: "Giá giảm, cầu khác tăng (Lặp lại):", options: { A: "Thứ cấp.", B: "Bổ sung.", C: "Thay thế.", D: "Bình thường." }, answer: "B" },
            { id: 102, category: "Hành vi doanh nghiệp", question: "Max lợi nhuận khi:", options: { A: "MR giảm nhanh hơn MC.", B: "AC tăng.", C: "MC giảm.", D: "MR tăng.", E: "MR đang giảm (và cắt MC từ trên xuống)." }, answer: "E" },
            { id: 103, category: "Cung cầu", question: "Đường cung thị trường:", options: { A: "Tổng cung người lớn nhất.", B: "Dốc lên.", C: "Nhóm người bán.", D: "Chỉ khi ấn định giá.", E: "Chỉ quốc gia." }, answer: "B" },
            { id: 104, category: "Tổng quan", question: "PPF (Lặp lại):", options: { A: "Lượng SX.", B: "Không thẳng.", C: "Đánh đổi.", D: "Tất cả." }, answer: "D" },
            { id: 105, category: "Sản xuất", question: "Sản phẩm cận biên:", options: { A: "Chi phí.", B: "Sản phẩm bổ sung từ 1 đơn vị yếu tố.", C: "Chi phí thuê.", D: "Sản lượng chia yếu tố." }, answer: "B" },
            { id: 106, category: "Lý thuyết người tiêu dùng", question: "Max thỏa mãn:", options: { A: "Không mua cấp thấp.", B: "MU bằng nhau.", C: "Giá tỷ lệ lợi ích.", D: "MU/P bằng nhau." }, answer: "D" },
            { id: 107, category: "Tổng quan", question: "Chính phủ giải quyết 3 vấn đề:", options: { A: "Thị trường.", B: "Hỗn hợp.", C: "Kế hoạch hóa tập trung.", D: "Truyền thống." }, answer: "C" },
            { id: 108, category: "Cung cầu", question: "Giá tăng lượng giảm dọc (Lặp lại):", options: { A: "Thay thế.", B: "Rời bỏ.", C: "Gia nhập.", D: "Cung tăng.", E: "A và B." }, answer: "E" },
            { id: 109, category: "Cung cầu", question: "Tăng cung X do:", options: { A: "Giá khác tăng.", B: "Giá yếu tố tăng.", C: "Giảm giá yếu tố SX.", D: "Công nghệ." }, answer: "C" },
            { id: 110, category: "Lý thuyết người tiêu dùng", question: "Giá trục hoành giảm, ngân sách:", options: { A: "Thoải hơn (Quay ra ngoài).", B: "Dốc hơn.", C: "Ra ngoài song song.", D: "Vào trong." }, answer: "A" },
            { id: 111, category: "Lý thuyết người tiêu dùng", question: "Cân bằng tiêu dùng (Lặp lại):", options: { A: "Tiếp tuyến.", B: "Chi tiêu bằng.", C: "MU bằng giá.", D: "MU bằng nhau.", E: "A và C (thực ra là A và điều kiện tiếp xúc)." }, answer: "A" },
            { id: 112, category: "Cung cầu", question: "Hàng cấp thấp (Lặp lại):", options: { A: "Giá tăng mua ít.", B: "Giá giảm mua nhiều.", C: "Thu nhập tăng mua ít.", D: "Thu nhập giảm mua ít." }, answer: "C" },
            { id: 113, category: "Cung cầu", question: "Cầu trái, Cung phải:", options: { A: "Giá cũ.", B: "Lượng cũ.", C: "Giá, cung tăng.", D: "Giá, cung giảm.", E: "Giá giảm, lượng cầu tăng? (Giá chắc chắn giảm)." }, answer: "E" },
            { id: 114, category: "Độ co dãn", question: "Co dãn giá là (Lặp lại):", options: { A: "Thay đổi TR.", B: "Không đổi.", C: "Luôn co dãn.", D: "Lượng/Giá.", E: "%Lượng / %Giá." }, answer: "E" },
            { id: 115, category: "Hành vi doanh nghiệp", question: "Ngắn hạn max lợi nhuận (Lặp lại):", options: { A: "TC > MC.", B: "AR > ATC.", C: "TR > TC.", D: "P > AVC.", E: "AR > AC." }, answer: "D" },
            { id: 116, category: "Tổng quan", question: "Phân phối đề cập đến:", options: { A: "Bán lẻ.", B: "Cái gì.", C: "Như thế nào.", D: "Cho ai." }, answer: "D" },
            { id: 117, category: "Cung cầu", question: "Cầu thị trường (Lặp lại):", options: { A: "Trung bình.", B: "Cộng giá.", C: "Cộng lượng.", D: "Trung bình giá." }, answer: "C" },
            { id: 118, category: "Tổng quan", question: "Thực chứng (Lặp lại):", options: { A: "Thuế cao.", B: "Tiết kiệm thấp.", C: "Lãi suất thấp kích thích ĐT.", D: "Phải giảm.", E: "Bất bình đẳng." }, answer: "C" },
            { id: 119, category: "Sản xuất", question: "Kinh tế theo quy mô (Lặp lại):", options: { A: "SX nhiều loại.", B: "SX lớn đắt.", C: "AC giảm khi Q lớn.", D: "MC dốc xuống.", E: "C và D." }, answer: "C" },
            { id: 120, category: "Cung cầu", question: "Cầu thị trường (Lặp lại):", options: { A: "Trung bình.", B: "Cộng giá.", C: "Cộng lượng.", D: "Trung bình giá." }, answer: "C" },
            { id: 121, category: "Lý thuyết người tiêu dùng", question: "Giá trục hoành giảm (Lặp lại):", options: { A: "Thoải hơn.", B: "Dốc hơn.", C: "Ra ngoài.", D: "Vào trong." }, answer: "A" },
            { id: 122, category: "Độ co dãn", question: "E=1/3. Giá tăng 30%:", options: { A: "Lượng tăng 10%.", B: "Giảm 10%.", C: "Tăng 90%.", D: "Giảm 90%." }, answer: "B" },
            { id: 123, category: "Cung cầu", question: "Hàng bình thường, I tăng (Lặp lại):", options: { A: "Ngân sách ra ngoài.", B: "Cầu phải.", C: "Lượng tăng.", D: "Chi nhiều hơn.", E: "Tất cả." }, answer: "E" },
            { id: 124, category: "Lý thuyết người tiêu dùng", question: "Ràng buộc ngân sách (Lặp lại):", options: { A: "Cơ hội.", B: "Chi tiêu <= Thu nhập.", C: "Lợi ích.", D: "Tất cả.", E: "A và B." }, answer: "E" },
            { id: 125, category: "Cung cầu", question: "Câu SAI (Cung dốc lên):", options: { A: "Cung trái -> Giá tăng.", B: "Cầu trái, Cung tăng -> Giá tăng (Sai, giá giảm).", C: "Cầu trái, Cung phải -> Giá giảm.", D: "Cầu phải, Cung trái -> Giá tăng." }, answer: "B" },
            { id: 126, category: "Vĩ mô", question: "KHÔNG phải chi phí (Lặp lại):", options: { A: "Lương.", B: "Thu nhập chủ DN.", C: "Trợ cấp kinh doanh.", D: "Thuê.", E: "Tất cả." }, answer: "C" },
            { id: 127, category: "Vĩ mô", question: "Tổng cung dài hạn phụ thuộc:", options: { A: "Thu nhập.", B: "XK.", C: "Công nghệ.", D: "Lương." }, answer: "C" },
            { id: 128, category: "Vĩ mô", question: "VN: GDP > GNP (Lặp lại):", options: { A: "Thực > Danh nghĩa.", B: "Nước ngoài tại VN > VN tại nước ngoài.", C: "VN tại nước ngoài > Nước ngoài tại VN.", D: "GNP thực > GNP danh nghĩa." }, answer: "B" },
            { id: 129, category: "Vĩ mô", question: "AD dốc âm do (Lặp lại):", options: { A: "Thay thế.", B: "Hàng ngoại.", C: "Khá giả (Của cải).", D: "Sức mua tăng.", E: "Tất cả." }, answer: "D" },
            { id: 130, category: "Vĩ mô", question: "MPC (Lặp lại):", options: { A: "Delta C / Delta Yd.", B: "C/Delta Yd.", C: "C/Yd.", D: "Delta C / S." }, answer: "A" },
            { id: 131, category: "Vĩ mô", question: "Hàm cầu tiền (Lặp lại):", options: { A: "Thanh toán.", B: "Thu nhập.", C: "Lãi suất, thu nhập.", D: "Tất cả." }, answer: "C" },
            { id: 132, category: "Vĩ mô", question: "Tài khóa mở (Lặp lại):", options: { A: "Cầu tiền tăng, lãi suất giảm.", B: "Giảm, tăng.", C: "Tăng, tăng.", D: "Giảm, giảm." }, answer: "C" },
            { id: 133, category: "Vĩ mô", question: "AD phải (Lặp lại):", options: { A: "NK, XK tăng.", B: "Cắt trợ cấp.", C: "Tăng chi QP.", D: "Đúng.", E: "Sai." }, answer: "C" },
            { id: 134, category: "Vĩ mô", question: "Mức sống (Lặp lại):", options: { A: "GDP thực.", B: "GDP danh nghĩa/người.", C: "GDP thực/người.", D: "GDP danh nghĩa." }, answer: "C" },
            { id: 135, category: "Vĩ mô", question: "Giá tăng đôi (Lặp lại):", options: { A: "Cầu tiền giảm.", B: "Cung tiền giảm.", C: "Giá trị tiền giảm nửa.", D: "Thu nhập không đổi." }, answer: "C" },
            { id: 136, category: "Vĩ mô", question: "Tăng thuế NK (Lặp lại):", options: { A: "AD trái.", B: "AD phải.", C: "AS phải.", D: "AS trái." }, answer: "B" },
            { id: 137, category: "Vĩ mô", question: "Chỉ tiêu nhỏ nhất (Lặp lại):", options: { A: "GNP.", B: "NNP.", C: "NI.", D: "DI (Khả dụng).", E: "PI." }, answer: "D" },
            { id: 138, category: "Vĩ mô", question: "KT đóng (Lặp lại):", options: { A: "GNP < GDP.", B: "GNP = GDP.", C: "GNP > GDP.", D: "Không quan hệ." }, answer: "B" },
            { id: 139, category: "Vĩ mô", question: "Giảm cung tiền (Lặp lại):", options: { A: "Tăng dự trữ.", B: "Bán TP.", C: "Tăng lãi suất.", D: "Tất cả." }, answer: "D" },
            { id: 140, category: "Vĩ mô", question: "Kích thích đầu tư (Lặp lại):", options: { A: "Lãi suất giảm.", B: "Tiêu dùng.", C: "NK tăng.", D: "Tồn kho hết.", E: "Công nghệ." }, answer: "C" },
            { id: 141, category: "Vĩ mô", question: "Cân bằng dài hạn (Lặp lại):", options: { A: "AD cắt AS ngắn/dài.", B: "AD cắt AS.", C: "AS cắt AS dài.", D: "AD cắt AS dài.", E: "Tất cả." }, answer: "D" },
            { id: 142, category: "Vĩ mô", question: "GDP danh nghĩa KHÔNG phải (Lặp lại):", options: { A: "Hiện hành.", B: "Cố định.", C: "Cuối cùng.", D: "1 năm." }, answer: "B" },
            { id: 143, category: "Vĩ mô", question: "Đo lạm phát trừ:", options: { A: "Chỉ số giá hàng thành phẩm (Ít dùng).", B: "Deflator.", C: "CPI.", D: "PPI.", E: "Tất cả đều dùng." }, answer: "A" },
            { id: 144, category: "Vĩ mô", question: "Tăng cung tiền (Lặp lại):", options: { A: "IS di, LM dịch.", B: "IS dịch, LM di.", C: "Cả 2 dịch.", D: "Cả 2 di.", E: "Sai." }, answer: "A" },
            { id: 145, category: "Vĩ mô", question: "Mở rộng tiền tệ (Lặp lại):", options: { A: "Giảm thuế.", B: "Hạ lãi suất, giảm dự trữ, mua CK.", C: "Tăng lãi.", D: "Phát hành TP." }, answer: "B" },
            { id: 146, category: "Vĩ mô", question: "Tăng cung tiền, AD (Lặp lại):", options: { A: "Trái.", B: "Phải.", C: "Lên.", D: "Xuống." }, answer: "B" },
            { id: 147, category: "Vĩ mô", question: "Tăng trưởng 2000-2001 (18073 -> 18635):", options: { A: "3.0%.", B: "3.1%.", C: "5.6%.", D: "18%." }, answer: "B" },
            { id: 148, category: "Vĩ mô", question: "TK mở, TT chặt (Lặp lại):", options: { A: "Y tăng.", B: "i, Y tăng.", C: "i tăng.", D: "Đúng." }, answer: "C" },
            { id: 149, category: "Vĩ mô", question: "Lạm phát cao nên (Lặp lại):", options: { A: "Giảm tiền, tăng lãi.", B: "Giảm chi, tăng thuế.", C: "Giảm tiền, giảm lãi.", D: "A và B." }, answer: "D" },
            { id: 150, category: "Vĩ mô", question: "Y giảm, Ms không đổi (Lặp lại):", options: { A: "i tăng.", B: "i giảm.", C: "Md tăng.", D: "Md giảm.", E: "i không đổi." }, answer: "D" }, // Md giảm -> i giảm
            { id: 151, category: "Vĩ mô", question: "Lực lượng lao động (Lặp lại):", options: { A: "Học sinh.", B: "Nội trợ.", C: "SV năm cuối.", D: "Bộ đội xuất ngũ." }, answer: "D" },
            { id: 152, category: "Vĩ mô", question: "M1 (Lặp lại):", options: { A: "Tiền mặt, không kỳ hạn, tiết kiệm? (M2).", B: "Tiền mặt, không kỳ hạn, viết séc.", C: "Tiền mặt, TP.", D: "Vàng." }, answer: "B" },
            { id: 153, category: "Vĩ mô", question: "Tiết kiệm âm (Lặp lại):", options: { A: "C < Yd.", B: "C > S.", C: "C > Yd.", D: "S > C." }, answer: "C" },
            { id: 154, category: "Vĩ mô", question: "Tốc độ tăng trưởng (Lặp lại):", options: { A: "Giá thị trường.", B: "Danh nghĩa.", C: "Thực.", D: "Sản xuất." }, answer: "C" },
            { id: 155, category: "Vĩ mô", question: "AD phải (Lặp lại):", options: { A: "G QP.", B: "X, M tăng.", C: "Cắt trợ cấp.", D: "Đúng.", E: "Sai." }, answer: "E" },
            { id: 156, category: "Vĩ mô", question: "GDP thực/danh nghĩa đo theo:", options: { A: "Cơ sở, Hiện hành.", B: "Hiện hành, Cơ sở.", C: "Trung gian.", D: "Quốc tế." }, answer: "A" },
            { id: 157, category: "Vĩ mô", question: "GDP thợ giày (Lặp lại):", options: { A: "50.", B: "100.", C: "500.", D: "600." }, answer: "C" },
            { id: 158, category: "Vĩ mô", question: "Sản lượng tiềm năng (Lặp lại):", options: { A: "Cao nhất.", B: "Thất nghiệp tự nhiên.", C: "Không lạm phát.", D: "A và C.", E: "Tất cả." }, answer: "E" },
            { id: 159, category: "Vĩ mô", question: "GNP thực KHÔNG phải (Lặp lại):", options: { A: "Cố định.", B: "Cuối cùng.", C: "Thời kỳ.", D: "Không tính trung gian.", E: "Hiện hành." }, answer: "E" },
            { id: 160, category: "Vĩ mô", question: "Số nhân tổng cầu (Lặp lại):", options: { A: "Delta I / Delta Y.", B: "Delta AD / Delta Y.", C: "Delta AE / Delta Y.", D: "Delta Y / Delta Ao." }, answer: "D" },
            { id: 161, category: "Vĩ mô", question: "Không tính GDP (Lặp lại):", options: { A: "Xe máy.", B: "Bàn ghế.", C: "Máy khâu cũ.", D: "Nhà mới.", E: "Tất cả." }, answer: "C" },
            { id: 162, category: "Vĩ mô", question: "Nhập khẩu tự định tăng:", options: { A: "LM phải.", B: "LM trái.", C: "IS trái.", D: "IS phải." }, answer: "C" },
            { id: 163, category: "Vĩ mô", question: "TK mở (Lặp lại):", options: { A: "Cầu tiền giảm, lãi giảm.", B: "Tăng, tăng.", C: "Tăng, giảm.", D: "Giảm, tăng." }, answer: "B" },
            { id: 164, category: "Vĩ mô", question: "AD phản ánh (Lặp lại):", options: { A: "Mức giá, GDP thực.", B: "Mức giá, danh nghĩa.", C: "Chi tiêu, danh nghĩa.", D: "Chi tiêu, thực." }, answer: "A" }
        ]
    }
  }
      