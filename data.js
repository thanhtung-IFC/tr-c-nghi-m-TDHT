const subjectsData = {
    "HP1": {
        "name": "HP1",
        "icon": "📘",
        "description": "Học phần 1",
        "questions": [
            {
                "id": 1,
                "category": "Chương 1",
                "question": "Đây là HP 1 BÀI 1: Quan điểm cơ bản của Chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh về chiến tranh, quân đội và bảo vệ Tổ quốc Lê-Nin xác định nguyên tắc đoàn kết quân, dân trong xây dựng Hồng quân như thế nào?",
                "options": {
                    "A": "Sự đoàn kết gắn bó, nhất trí Hồng quân với nhân dân lao động.",
                    "B": "Sự nhất trí quân - dân và các lực lượng tiến bộ trên toàn thế giới.",
                    "C": "Sự thống nhất giữa quân đội và nhân dân.",
                    "D": "Sự nhất trí quân - dân và các lực lượng vũ trang."
                },
                "answer": "A"
            },
            {
                "id": 2,
                "category": "Chương 1",
                "question": "Quan điểm chủ nghĩa Mác-Lê nin về bản chất chiến tranh như thế nào?",
                "options": {
                    "A": "Là kế tục mục tiêu chính trị bằng vật chất.",
                    "B": "Là thủ đoạn để đạt được mục tiêu chính trị của một giai cấp.",
                    "C": "Là kế tục chính trị bằng thủ đoạn bạo lực.",
                    "D": "Là thủ đoạn chính trị của một giai cấp."
                },
                "answer": "C"
            },
            {
                "id": 3,
                "category": "Chương 1",
                "question": "Theo tư tưởng Hồ Chí Minh, sử dụng bạo lực cách mạng để làm gì?",
                "options": {
                    "A": "Để lật đổ chế độ cũ, xây dựng chế độ mới.",
                    "B": "Để xây dựng chế độ mới.",
                    "C": "Để giành chính quyền và giữ chính quyền.",
                    "D": "Để lật đổ chế độ cũ."
                },
                "answer": "C"
            },
            {
                "id": 4,
                "category": "Chương 1",
                "question": "Theo tư tưởng Hồ Chí Minh, bản chất giai cấp công nhân, tính nhân dân, tính dân tộc của quân đội nhân dân Việt Nam quan hệ với nhau như thế nào?",
                "options": {
                    "A": "Là hệ thống thống nhất, quan hệ mật thiết với nhau.",
                    "B": "Quan hệ đan xen, tạo điều kiện cho nhau, bản chất giai cấp là quyết định.",
                    "C": "Là một thể thống nhất, quan hệ chặt chẽ trong quá trình xây dựng quân đội nhân dân.",
                    "D": "Quan hệ mật thiết với nhau, tạo lên sức mạnh và sự trưởng thành."
                },
                "answer": "C"
            },
            {
                "id": 5,
                "category": "Chương 1",
                "question": "Chủ tịch Hồ Chí Minh xác định nội dung cơ bản của đánh giặc toàn diện là gì?",
                "options": {
                    "A": "Là biết sử dụng mọi vũ khí trang bị để tiến công địch.",
                    "B": "Là tiến công kẻ thù trên mọi lĩnh vực",
                    "C": "Là tiến công địch liên tục, cả ngày lẫn đêm.",
                    "D": "Là biết sử dụng mọi điều kiện thuân lợi để tiến công địch"
                },
                "answer": "B"
            },
            {
                "id": 6,
                "category": "Chương 1",
                "question": "Một trong những nội dung tư tưởng Hồ Chí Minh về bảo vệ Tổ quốc XHCN là gì?",
                "options": {
                    "A": "Bảo vệ Tổ quốc XHCN là tất yếu khách quan, thể hiện ý chí của dân tộc.",
                    "B": "Bảo vệ Tổ quốc là tất yếu, là truyền thống của dân tộc Việt Nam.",
                    "C": "Bảo vệ Tổ quốc XHCN là tất yếu khách quan, thể hiện ý chí quyết tâm của nhân dân ta.",
                    "D": "Bảo vệ Tổ quốc XHCN là tất yếu khách quan trong công cuộc xây dựng CNXH."
                },
                "answer": "C"
            },
            {
                "id": 7,
                "category": "Chương 1",
                "question": "Trong các yếu tố tạo nên sức mạnh của Quân đội nhân dân, Hồ Chí Minh coi yếu tố con người có vị vai trò như thế nào?",
                "options": {
                    "A": "Con người có giác ngộ giữ vai trò quan trọng nhất, chi phối các yếu tố khác.",
                    "B": "Con người là quan trọng cùng với yếu tố quân sự là quyết định.",
                    "C": "Con người với trình độ chính trị cao giữ vững vai trò quyết định.",
                    "D": "Con người có giác ngộ chính trị giữ vai trò quan trọng tạo lên sức mạnh quân đội."
                },
                "answer": "C"
            },
            {
                "id": 8,
                "category": "Chương 1",
                "question": "Hồ Chí Minh khẳng định phải dùng bạo lực cách mạng để giành chính quyền và giữ chính quyền. Vì một trong những lý do gì?",
                "options": {
                    "A": "Chủ nghĩa thực dân bóc lột, cai trị nhân dân bằng bạo lực.",
                    "B": "Chế độ thực dân, tự bản thân nó đã là một hành động bạo lực.",
                    "C": "Làm cách mạng là phải dùng bạo lực cách mạng.",
                    "D": "Kẻ thù luôn dùng bạo lực để duy trì quyền thống trị."
                },
                "answer": "C"
            },
            {
                "id": 9,
                "category": "Chương 1",
                "question": "Tư tưởng Hồ Chí Minh về sức mạnh chiến đấu của quân đội nhân dân Việt Nam như thế nào?",
                "options": {
                    "A": "Là sức mạnh của nhiều yếu tố kết hợp lại, quân sự là chủ chốt.",
                    "B": "Là sức mạnh của yếu tố con người và vũ khí.",
                    "C": "Là sức mạnh tổng hợp trong đó yếu tố con người, yếu tố chính trị tinh thần giữ vai trò quyết định",
                    "D": "Là sức mạnh của yếu tố con người và vũ khí trang bị kỹ thuật hiện đại"
                },
                "answer": "C"
            },
            {
                "id": 10,
                "category": "Chương 1",
                "question": "Theo tư tưởng Hồ Chí Minh, một trong những chức năng của Quân đội nhân dân Việt Nam là gì?",
                "options": {
                    "A": "Là đội quân tuyên truyền giác ngộ nhân dân.",
                    "B": "Là đội quân công tác.",
                    "C": "Là đội quân chiến đấu bảo vệ đất nước",
                    "D": "Là đội quân bảo vệ chính quyền vô sản của giai cấp công nông"
                },
                "answer": "B"
            },
            {
                "id": 11,
                "category": "Chương 1",
                "question": "Theo tư tưởng Hồ Chí Minh, quân đội nhân dân Việt Nam có những chức năng",
                "options": {
                    "A": "Chiến đấu, sẵn sàng chiến đấu.",
                    "B": "Chiến đấu, lao động sản xuất, tuyên truyền.",
                    "C": "Chiến đấu, công tác, lao động sản xuất.",
                    "D": "Chiến đấu và tham gia gìn giữ hòa bình khu vực"
                },
                "answer": "C"
            },
            {
                "id": 12,
                "category": "Chương 1",
                "question": "Tư tưởng Hồ Chí Minh về sức mạnh bảo vệ Tổ quốc XHCN là gì?",
                "options": {
                    "A": "Là sức mạnh của cả dân tộc và thời đại, sức mạnh quốc phòng toàn dân.",
                    "B": "Là sức mạnh tổng hợp của cả dân tộc, cả nước kết hợp với sức mạnh thời đại.",
                    "C": "Là sức mạnh của toàn dân, lấy lực lượng vũ trang làm nòng cốt.",
                    "D": "Là sức mạnh của lực lượng vũ trang nhân dân, sức mạnh quốc phòng toàn dân."
                },
                "answer": "B"
            },
            {
                "id": 13,
                "category": "Chương 1",
                "question": "Ba chức năng cơ bản của quân đội nhân dân Việt Nam được Hồ Chí Minh xác định, thể hiện vấn đề gì trong quá trình xây dựng quân đội.",
                "options": {
                    "A": "Thể hiện bản chất, truyền thống và kinh nghiệm của quân đội ta.",
                    "B": "Thể hiện sức mạnh của quân đội.",
                    "C": "Thể hiện bản chất, truyền thống tốt đẹp của QĐND Việt Nam",
                    "D": "Thể hiện quân đội ta là quân đội cách mạng."
                },
                "answer": "C"
            },
            {
                "id": 14,
                "category": "Chương 1",
                "question": "Một trong những nội dung tư tưởng Hồ Chí Minh về bảo vệ Tổ quốc XHCN là gì?",
                "options": {
                    "A": "Bảo vệ Tổ quốc XHCN là tất yếu, khách quan, thể hiện ý chí quyết tâm của nhân dân ta.",
                    "B": "Bảo vệ Tổ quốc là tất yếu, gắnliền với bảo vệ chế độ XHCN.",
                    "C": "Bảo vệ Tổ quốc XHCN là nhiêm vụ trong sự nghiệp xây dựng CNXH.",
                    "D": "Bảo vệ Tổ quốc XHCN là truyền thống của quốc gia, dân tộc, là ý chí của toàn dân"
                },
                "answer": "A"
            },
            {
                "id": 15,
                "category": "Chương 1",
                "question": "Chủ tịch Hồ Chí Minh xác định yếu tố con người có vai trò như thế nào trong xây dựng Quân đội nhân dân?",
                "options": {
                    "A": "Con người cố giác ngộ giữ vai rò quan trọng nhất, chi phối các yếu tố khác.",
                    "B": "Con người là quan trọng cùng với yếu tố quân sự là quyết định.",
                    "C": "Con người với trình độ chính trị cao giữ vai trò quyết định.",
                    "D": "Con người cố giác ngộ giữ vai rò quan trọng nhất."
                },
                "answer": "C"
            },
            {
                "id": 16,
                "category": "Chương 1",
                "question": "Một trong những nguyên tắc cơ bản xây dựng Hồng quân của Lê nin là gì?",
                "options": {
                    "A": "Xây dựng quân đội có kỷ luật, có tính chiến đấu cao.",
                    "B": "Xây dựng quân đội chính qui.",
                    "C": "Xây dựng quân đội hiện đại.",
                    "D": "Xây dựng quân đội hùng mạnh cả về số lượng và chất lượng."
                },
                "answer": "B"
            },
            {
                "id": 17,
                "category": "Chương 1",
                "question": "Nguyên tắc cơ bản về xây dựng lực lượng Hồng quân của Lê nin là gì?",
                "options": {
                    "A": "Sự lãnh đạo của Đảng cộng sản đối với quân đội.",
                    "B": "Giữ vững quan điểm giai cấp trong xây dựng quân đội.",
                    "C": "Tính kỷ luật cao là yếu tố quyết định sức mạnh quân đội",
                    "D": "Quân đội chính quy, hiện đại, trung thành với giaicấp công nhân và nhân dân lao động"
                },
                "answer": "A"
            },
            {
                "id": 18,
                "category": "Chương 1",
                "question": "Để phát huy nhân tố con người trong xây dựng quân đội, Hồ Chí Minh rất coi trọng vấn đề gì?",
                "options": {
                    "A": "Rất coi trọng công tác tư tưởng, tổ chức và rèn luyện tính kỷ luật.",
                    "B": "Rất coi trọng rèn luyện đạo đức trình độ kỹ chiến thuật",
                    "C": "Rất coi trọng công tác giáo dục chính trị trong quân đội.",
                    "D": "Rất chú trọng công tác tổ chức và rèn luyện bản lĩnh chiến đấu."
                },
                "answer": "C"
            },
            {
                "id": 19,
                "category": "Chương 1",
                "question": "Hồ Chí Minh xác định vai trò của Đảng trong sự nghiệp bảo vệ Tổ quốc XHCN như thế nào?",
                "options": {
                    "A": "Đảng cộng sản Việt Nam chỉ đạo trực tiếp sự nghiệp bảo vệ Tổ quốc.",
                    "B": "Đảng cộng sản Việt Nam là người đi tiên phong trong sự nghiệp bảo vệ Tổ quốc.",
                    "C": "Đảng cộng sản Việt Nam lãnh đạo sự nghiệp bảo vệ Tổ quốc Việt Nam XHCN.",
                    "D": "Đảng cộng sản Việt Nam là người kêu gọi mọi tầng lớp nhân dân đứng lên bảo vệ đất nước."
                },
                "answer": "C"
            },
            {
                "id": 20,
                "category": "Chương 1",
                "question": "Theo tư tưởng Hồ Chí Minh, trong sức mạnh của toàn dân đánh giặ",
                "options": {
                    "A": "Là lực lượng nòng cốt cho nhân dân đánh giặc.",
                    "B": "Là lực lượng xung kích, trụ cột cho toàn dân.",
                    "C": "Là lực lượng cùng toàn dân đánh giặc.",
                    "D": "Là lực lượng chiến đấu chủ yếu bảo vệ nhân dân."
                },
                "answer": "A"
            },
            {
                "id": 21,
                "category": "Chương 2",
                "question": "Xây dựng nền QPTD, ANND bảo vệ Tổ quốc Việt Nam XHCN Xây dựng nền quốc phòng toàn dân, an ninh nhân dân gồm những nội dung nào sau đây?",
                "options": {
                    "A": "Tiềm lực chính trị, kinh tế, khoa học công nghệ, quân sự an ninh",
                    "B": "Xây dựng hậu phương chiến lược",
                    "C": "Xây dựng tiềm lực quốc phòng, an ninh và thế trận quốc phòng, an ninh",
                    "D": "Xây dựng khu vực phòng thủ"
                },
                "answer": "C"
            },
            {
                "id": 22,
                "category": "Chương 1",
                "question": "Nền quốc phòng toàn dân phát triển theo hướng như thế nào?",
                "options": {
                    "A": "Nền quốc phòng toàn dân phát triển theo hướng hiện đại",
                    "B": "Toàn dân, toàn diện, độc lập, tự chủ, tự lực, tự cường và ngày càng hiện đại",
                    "C": "Nền QPTD phát triển theo hướng vững mạnh và ngày càng hiện đại",
                    "D": "Nền QPTD phát triển theo hướng toàn dân, toàn diện và hiện đại."
                },
                "answer": "B"
            },
            {
                "id": 23,
                "category": "Chương 1",
                "question": "Xây dựng tiềm lực quân sự, an ninh cần tập trung vào nội dung nào?",
                "options": {
                    "A": "Bảo đảm tốt vũ khí cho quân đội, công an",
                    "B": "Nâng cao chất lượng huấn luyện của của quân đội, công an",
                    "C": "Xây dựng lực lượng vũ trang vững mạnh toàn diện",
                    "D": "Tăng cường công tác giáo dục chính trị trong lực lượng vũ trang"
                },
                "answer": "C"
            },
            {
                "id": 24,
                "category": "Chương 1",
                "question": "Tiềm lực quốc phòng, an ninh được thể hiện tập trung ở?",
                "options": {
                    "A": "Tiềm lực chính trị tinh thần, tiềm lực khoa học công nghệ",
                    "B": "Tiềm lực kinh tế, tiềm lực quân sự an ninh",
                    "C": "Tiềm lực chính trị tinh thần, kinh tế, khoa học công nghệ và tiềm lực quân sự an ninh",
                    "D": "Tiềm lực chính trị tinh thần, kinh tế và tiềm lực quân sự an ninh"
                },
                "answer": "C"
            },
            {
                "id": 25,
                "category": "Chương 1",
                "question": "Kết hợp chặt chẽ xây dựng tiềm lực QP, AN với thế trận QP, AN để nhằm mục đích gì?",
                "options": {
                    "A": "Phát huy tối đa sự mạnh của lực",
                    "B": "Lấy thế thắng lực",
                    "C": "Lấy lực thắng thế",
                    "D": "Lấy thế thắng thế"
                },
                "answer": "A"
            },
            {
                "id": 26,
                "category": "Chương 1",
                "question": "Một trong những đặc trưng cơ bản của nền quốc phòng toàn dân, an ninh nhân dân là gì?",
                "options": {
                    "A": "Là nền QPTD, ANND có sức mạnh tổng hợp chiến thắng kẻ thù xâm lược",
                    "B": "Là nền QPTD, ANND có sức mạnh đối phó với mọi tình huống",
                    "C": "Là nền QPTD, ANND có sức mạnh đối phó với mọi loại hình chiến tranh",
                    "D": "Là nền QPTD, ANND có sức mạnh tổng hợp do nhiều yếu tố tạo nên."
                },
                "answer": "D"
            },
            {
                "id": 27,
                "category": "Chương 1",
                "question": "Một trong những nội dung cơ bản của xây dựng tiềm lực quốc phòng, an ninh ngày nay là?",
                "options": {
                    "A": "Xây dựng lực lượng vũ trang nhân dân vững mạnh",
                    "B": "Xây dựng tiềm lực tác chiến trên không, trên bộ và trên biển",
                    "C": "Xây dựng tiềm lực khoa học, công nghệ",
                    "D": "Xây dựng tiềm lực tài chính và vũ khí quốc gia"
                },
                "answer": "C"
            },
            {
                "id": 28,
                "category": "Chương 1",
                "question": "Xây dựng thế trận quốc phòng toàn dân, an ninh nhân dân được hiểu như thế nào?",
                "options": {
                    "A": "Tổ chức và bố trí các lực lượng vũ trang trên toàn bộ lãnh thổ theo ý đồ chiến lược phòng thủ đất nước",
                    "B": "Là sự tổ chức bố trí lực lượng, tiềm lực mọi mặt của đất nước và của toàn dân trên cả nước",
                    "C": "Tổ chức và bố trí các khu vực phòng thủ của tỉnh (thành phố) mạnh, có trọng tâm, trọng điểm",
                    "D": "Phân vùng chiến lược các công trình quốc phòng các tuyến phòng thủ quốc gia trên cả nước"
                },
                "answer": "B"
            },
            {
                "id": 29,
                "category": "Chương 1",
                "question": "Tính toàn diện trong xây dựng nền quốc phòng toàn dân, an ninh nhân dân được thể hiện ở nội dung nào sau đây?",
                "options": {
                    "A": "Cả tiềm lực và thế trận quốc phòng",
                    "B": "Có sức mạnh tổng hợp do nhiều yếu tố tạo thành",
                    "C": "Xây dựng nền quốc phòng bằng sức mạnh quân sự to lớn, kinh tế phát triển",
                    "D": "Xây dựng nền quốc phòng bằng sức mạnh của nền kinh tế quốc dân"
                },
                "answer": "B"
            },
            {
                "id": 30,
                "category": "Chương 1",
                "question": "Một trong những nội dung cơ bản của nền quốc phòng toàn dân, an nin nhân dân hiện nay là gì?",
                "options": {
                    "A": "Nền QPTD, ANND do nhân dân lao động làm chủ",
                    "B": "Nền QPTD, ANND chỉ có mục đích duy nhất là tự vệ chính đáng",
                    "C": "Nền QPTD, ANND do toàn thể nhân dân tham gia",
                    "D": "Nền QPTD, ANND chỉ có mục tiêu duy nhất là bảo vệ độc lập dân tộc"
                },
                "answer": "B"
            },
            {
                "id": 31,
                "category": "Chương 1",
                "question": "Xây dựng lực lượng quốc phòng, an ninh bao gồm những lực lượng nào?",
                "options": {
                    "A": "Quân đội, công an và dân quân tự vệ",
                    "B": "Bộ đội chủ lực, bộ đội địa phượng và dân quân tự vệ",
                    "C": "Bộ đội chủ lực, bộ đội địa phượng và công an nhân dân",
                    "D": "Lực lượng chính trị và lực lượng vũ trang"
                },
                "answer": "D"
            },
            {
                "id": 32,
                "category": "Chương 1",
                "question": "Một trong những nội dung cơ bản xây dựng tiềm lực kinh tế trong xây dựng nền quốc phòng toàn dân, an ninh nhân dân là gì ?",
                "options": {
                    "A": "Kết hợp xây dựng kinh tế và xã hội",
                    "B": "Kết hợp xây dựng hạ tầng kinh tế với hạ tầng quốc phòng",
                    "C": "Kết hợp xây dựng hạ tầng quốc phòng gắn với hạ tầng an ninh",
                    "D": "Kết hợp xây dựng hạ tầng khoa học công nghệ với hạ tầng quốc phòng, an ninh"
                },
                "answer": "B"
            },
            {
                "id": 33,
                "category": "Chương 1",
                "question": "Từ cơ sở nào, chúng ta xác định tính chất toàn dân của nền quốc phòng toàn dân?",
                "options": {
                    "A": "Từ truyền thống dân tộc trong chiến đấu chống giặc ngoại xâm",
                    "B": "Từ bài học quí báu xây dựng lực lượng vũ trang nhân dân",
                    "C": "Từ truyền thống, kinh nghiệm của dân tộc trong lịch sử dựng nước và giữ nước",
                    "D": "Từ truyền thống dân tộc trong chiến đấu chống giặc ngoại xâm"
                },
                "answer": "C"
            },
            {
                "id": 34,
                "category": "Chương 1",
                "question": "Một trong những biện pháp chủ yếu xây dựng nền quốc phòng toàn dân, an ninh nhân dân là gì?",
                "options": {
                    "A": "Luôn tăng cường giáo dục ý thức trách nhiệm của công dân về 2 nhiệm vụ chiến lược",
                    "B": "Luôn tăng cường giáo dục nghĩa vụ công dân",
                    "C": "Luôn thực hiện tốt giáo dục quốc phòng- an ninh",
                    "D": "Luôn tăng cường giáo dục nhiệm vụ quốc phòng và an ninh nhân dân"
                },
                "answer": "C"
            },
            {
                "id": 35,
                "category": "Chương 1",
                "question": "Tính chất toàn dân của nền quốc phòng toàn dân, an ninh nhân dân được biểu hiện tập trung như thế nào?",
                "options": {
                    "A": "Là nền quốc phòng mang tính giai cấp, nhân dân sâu sắc",
                    "B": "Là nền quốc phòng vì dân, của dân, do dân",
                    "C": "Là nền quốc phòng bảo vệ quyền lợi của dân",
                    "D": "Là nên quốc phòng do nhân dân xây dựng, mang tính nhân dân sâu sắc"
                },
                "answer": "B"
            },
            {
                "id": 36,
                "category": "Chương 1",
                "question": "Nội dung xây dựng thế trận quốc phòng toàn dân hiện nay là gì?",
                "options": {
                    "A": "Phân vùng chiến lược về quốc phòng, an ninh kết hợp với vùng kinh tế, trên cơ sở quy hoạch các vùng dân cư",
                    "B": "Phân vùng chiến lược gắn với xây dựng hậu phương chiến lược",
                    "C": "Phân vùng chiến lược gắn với bố trí lực lượng quân sự mạnh",
                    "D": "Phân vùng chiến lược gắn với khu vực phòng thủ tỉnh (thành phố)"
                },
                "answer": "A"
            },
            {
                "id": 37,
                "category": "Chương 1",
                "question": "Một trong những nội dung cơ bản cần tập trung xây dựng tiềm lực quốc phòng an ninh ngày nay là?",
                "options": {
                    "A": "Xây dựng tiềm lực kinh tế",
                    "B": "Xây dựng tiềm lực vũ khí, trang bị hiện đại",
                    "C": "Xây dựng tiềm lực tác chiến trên không, trên bộ và trên biển",
                    "D": "Cả 3 yếu tố trên"
                },
                "answer": "A"
            },
            {
                "id": 38,
                "category": "Chương 1",
                "question": "Nội dung quan trọng hàng đầu trong xây dựng thế trận quốc phòng toàn dân, an ninh nhân dân là gì?",
                "options": {
                    "A": "Tổ chức phòng thủ dân sự và phòng tránh khắc phục hậu quả chiến tranh",
                    "B": "Tổ chức phòng thủ dân sự bảo đảm an toàn",
                    "C": "Phân vùng chiến lược về quốc phòng , an ninh kết hợp với vùng kinh tế",
                    "D": "Tổ chức xây dựng khu vực phòng thủ dân sự"
                },
                "answer": "C"
            },
            {
                "id": 39,
                "category": "Chương 1",
                "question": "Một trong những mục đích xây dựng nền quốc phòng toàn dân, an ninh nhân dân là gì?",
                "options": {
                    "A": "Tạo thế chủ động cho sự nghiệp xây dựng và bảo vệ tổ quốc",
                    "B": "Phát huy vai trò nòng cốt của lực lượng vũ trang",
                    "C": "Phát huy sức mạnh tổng hợp trong xây dựng và củng cố nền quốc phòng toàn dân",
                    "D": "Phát huy vai trò của nhân dân"
                },
                "answer": "A"
            },
            {
                "id": 40,
                "category": "Chương 1",
                "question": "Tiềm lực chính trị tinh thần có vai trò như thế nào trong xây dựng tiềm lực quốc phòng, an ninh?",
                "options": {
                    "A": "Nhân tố quyết định tạo nên sức mạnh quốc phòng, an ninh",
                    "B": "Nhân tố rất quan trọng tạo nên sức mạnh quốc phòng, an ninh",
                    "C": "Nhân tố cơ bản tạo nên sức mạnh quốc phòng, an ninh",
                    "D": "Tất cả các phương án"
                },
                "answer": "C"
            },
            {
                "id": 41,
                "category": "Chương 3",
                "question": "Chiến tranh nhân dân BVTQ Việt Nam XHCN Theo tư tưởng Hồ Chí Minh, trong sức mạnh của toàn dân đánh giặ",
                "options": {
                    "A": "Là lực lượng nòng cốt cho nhân dân đánh giặc.",
                    "B": "Là lực lượng xung kích, trụ cột cho toàn dân.",
                    "C": "Là lực lượng cùng toàn dân đánh giặc.",
                    "D": "Là lực lượng xung kích, cho toàn dân."
                },
                "answer": "A"
            },
            {
                "id": 42,
                "category": "Chương 1",
                "question": "Đối tượng trong chiến tranh nhân dân bảo vệ Tổ quốc XHCN là",
                "options": {
                    "A": "Những lực lượng xâm lược Tổ quốc ta.",
                    "B": "Những thế lực cản trở, xâm hại đến sự nghiệp xây dựng đất nước và bảo vệ Tổ quốc XHCN của chúng ta.",
                    "C": "Những lực lượng xâm lược và thế lực phản động có hành động phá hoại.",
                    "D": "Chủ nghĩa đế quốc và chủ nghĩa khủng bố quốc tế."
                },
                "answer": "B"
            },
            {
                "id": 43,
                "category": "Chương 1",
                "question": "Tiến hành chiến tranh nhân dân bảo vệ Tổ quốc phải kết hợp kháng chiến với xây dựng, vừa chiến đấu, vừa sản xuất. Lý do vì sao?",
                "options": {
                    "A": "Việc bảo đảm đời sống nhân dân là rất khó khăn.",
                    "B": "Việc bảo đảm cuộc sống chiến đấu của lực lượng vũ trang, của hoạt động quân sự rất khó khăn.",
                    "C": "Việc bảo đảm ổn định đời sống nhân dân trong chiến tranh vô cùng khó khăn, phức tạp.",
                    "D": "Không có sự hỗ trợ từ phía bên ngoài."
                },
                "answer": "C"
            },
            {
                "id": 44,
                "category": "Chương 1",
                "question": "Tiến hành chiến tranh nhân dân bảo vệ Tổ quố",
                "options": {
                    "A": "Cả nước đánh giặc, sử dụng mọi phương tiện để đánh.",
                    "B": "Cả nước đánh giặc phối hợp chặt chẽ với các binh đoàn chủ lực",
                    "C": "Cả nước là một chiến trường, ở đâu cũng có người đánh giặc, đánh giặc bằng mọi thứ vũ khí.",
                    "D": "Cả nước là một chiến trường của chiến tranh du kích rộng khắp."
                },
                "answer": "C"
            },
            {
                "id": 45,
                "category": "Chương 1",
                "question": "Một trong những tính chất chiến tranh nhân dân bảo vệ Tổ quốc là gì?",
                "options": {
                    "A": "Chiến tranh chính nghĩa, tự vệ.",
                    "B": "Chiến tranh cách mạng.",
                    "C": "Chiến tranh chính nghĩa, tự vệ, cách mạng.",
                    "D": "Cuộc chiến tranh bảo vệ xã hội xã hội chủ nghĩa."
                },
                "answer": "C"
            },
            {
                "id": 46,
                "category": "Chương 1",
                "question": "Tiến hành chiến tranh nhân dân bảo vệ Tổ quố",
                "options": {
                    "A": "Lực lượng phản động sẽ tiến hành phá hoại, có mưu đồ lật đổ chính quyền ta.",
                    "B": "Lực lượng phản động lợi dụng chiến tranh kết hợp với phản động nước ngoài tập hợp lực lượng.",
                    "C": "Lực lượng phản động trong nước sẽ tiến hành các hành động phá hoại làm rối loạn hậu phương ta.",
                    "D": "Lực lượng phản động trong nước lợi dụng cơ hội phá hoại trật tự an ninh."
                },
                "answer": "C"
            },
            {
                "id": 47,
                "category": "Chương 1",
                "question": "Tiến hành chiến tranh nhân dân bảo vệ Tổ quố",
                "options": {
                    "A": "Tổ chức rộng toàn quốc, tập trung ở hướng, khu vực chủ yếu.",
                    "B": "Tổ chức rộng trên phạm vi cả nước, những có trọng tâm, trọng điểm.",
                    "C": "Tổ chức theo qui hoạch các vùng kinh tế và bố trí dân cư.",
                    "D": "Tổ chức rộng toàn quốc, tập trung ở hướng, khu vực chủ yếu, quan trọng."
                },
                "answer": "B"
            },
            {
                "id": 48,
                "category": "Chương 1",
                "question": "Thực hiện \"kết hợp đấu tranh quân sự với bảo đảm an ninh chính trị, giữ gìn trật tự, an toàn \", trong chiến tranh nhân dân bảo vệ Tổ quốc thể hiện như thế nào?",
                "options": {
                    "A": "Kết hợp cùng với việc xây dựng kế hoạch, xác định các phương án đánh địch cần chuẩn bị kế hoạch chống bạo loan, lật đổ.",
                    "B": "Kết hợp cùng với việc xây dựng kế hoạch, xác định các phương án đánh đich và kế hoạch bảo vệ hậu phương.",
                    "C": "Kết hợp đánh địch và xây dựng lực lượng quân sự địa phương bảo vệ an ninh chính trị, trật tự an toàn xã hội.",
                    "D": "Xây dựng kế hoạch, các phương án kết hợp đánh thù trong giặc ngoài."
                },
                "answer": "A"
            },
            {
                "id": 49,
                "category": "Chương 1",
                "question": "Nếu chiến tranh xảy ra, chúng ta đánh giá quân địch có điểm yếu cơ bản nào?",
                "options": {
                    "A": "Vấp phải ý chí chiến đấu kiên cường vì độc lập tự do của dân tộc ta.",
                    "B": "Phải đương đầu với dân tộc Việt Nam có truyền thống chống kẻ thù xâm lược kiên cường bất khuất.",
                    "C": "Phải đối phó với cách đánh năng động sáng tạo của QĐNDVN.",
                    "D": "Phải đương đầu với dân tộc Việt Nam có truyền thống chống giắc ngoại xâm."
                },
                "answer": "B"
            },
            {
                "id": 50,
                "category": "Chương 1",
                "question": "Thế trận chiến tranh là gì?",
                "options": {
                    "A": "Là sự tổ chức, bố trí lực lượng để tiến hành chiến tranh và hoạt động tác chiến.",
                    "B": "Là tổ chức, bố trí lực lượng vũ trang.",
                    "C": "Là sự tổ chức, bố trí lực lượng để phòng thủ đất nước.",
                    "D": "Là tổ chức, bố trí lực lượng vũ trang trong ý đồ chiến lược."
                },
                "answer": "A"
            },
            {
                "id": 51,
                "category": "Chương 1",
                "question": "Nhu cầu bảo đảm hậu cần kỹ thuật trong chiến tranh nhân dân bảo vệ Tổ quốc như thế nào?",
                "options": {
                    "A": "Nhu cầu bảo đảm hậu cần kỹ thuật cho chiến tranh luôn tăng lên.",
                    "B": "Nhu cầu bảo đảm hậu cần kỹ thuật luôn đáp ứng cho chiến tranh.",
                    "C": "Nhu cầu bảo đảm hậu cần kỹ thuật cho chiến tranh rất cao, liên tục, kịp thời.",
                    "D": "Nhu cầu bảo đảm hậu cần kỹ thuật cho chiến tranh rất khẩn trương, phức tạp."
                },
                "answer": "C"
            },
            {
                "id": 52,
                "category": "Chương 1",
                "question": "Một trong những mục đích của chiến tranh nhân dân bảo vệ Tổ quốc Việt Nam XHCN là gì?",
                "options": {
                    "A": "Bảo vệ vững chắc độc lập, chủ quyền, thống nhất của Tổ quốc.",
                    "B": "Bảo vệ sự toàn vẹn của Tổ quốc.",
                    "C": "Bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ.",
                    "D": "Bảo vệ vững chắc độc lập, chủ quyền, của Tổ quốc."
                },
                "answer": "C"
            },
            {
                "id": 53,
                "category": "Chương 1",
                "question": "Tiến hành chiến tranh nhân dân, lực lượng toàn dân đánh giặc được tổ chức như thế nào?",
                "options": {
                    "A": "Được tổ chức thành lực lượng chính trị của quần chúng và lực lượng vũ trang.",
                    "B": "Được tổ chức chặt chẽ thành hai lực lượng lực lượng quần chúng rộng rãi và lực lượng quân sự.",
                    "C": "Được tổ chức thành lực lượng rộng rãi và lực lượng tác chiến chiến lược.",
                    "D": "Được tổ chức chặt chẽ thành hai lực lượng lực lượng quần chúng rộng rãi và lực lượng phòng thủ dân sự."
                },
                "answer": "B"
            },
            {
                "id": 54,
                "category": "Chương 1",
                "question": "Một trong những tính chất chiến tranh nhân dân bảo vệ Tổ quốc là gì?",
                "options": {
                    "A": "Là cuộc chiến tranh toàn dân, lực lượng vũ trang làm nòng cốt.",
                    "B": "Là cuộc chiến tranh toàn dân, toàn diện.",
                    "C": "Là cuộc đấu tranh của nhân dân mà quân sự đóng vai trò quyết định.",
                    "D": "Là cuộc chiến tranh cách mạng chống lại các thế lực phản cách mạng."
                },
                "answer": "B"
            },
            {
                "id": 55,
                "category": "Chương 1",
                "question": "Quan điểm \"thực hiện toàn dân đánh giặc\" trong chiến tranh nhân dân bảo vệ Tổ quố",
                "options": {
                    "A": "Là cơ sở, điều kiện để mỗi người dân được tham gia đánh giặc bảo vệ quê hương.",
                    "B": "Là cơ sở, điều kiện để phát huy sức mạnh tổng hợp bảo vệ Tổ quốc.",
                    "C": "Là cơ sở, điều kiện để phát huy cao nhất yếu tố con người (giữ vai trò quyết định) trong chiến tranh.",
                    "D": "Là cơ sở, điều kiện để phát huy sức mạnh tổng hợp bảo vệ Tổ quốc Việt Nam XHCN."
                },
                "answer": "D"
            },
            {
                "id": 56,
                "category": "Chương 1",
                "question": "Quan điểm, thực hiện toàn dân đánh giặc trong chiến tranh nhân dân bảo vệ Tổ quốc thể hiện vấn đề gì?",
                "options": {
                    "A": "Thể hiện tính nhân dân, tính dân tộc sâu sắc trong cuộc chiến tranh.",
                    "B": "Thể hiện sức mạnh to lớn của cuộc chiến tranh của ta.",
                    "C": "Thể hiện tính nhân dân sâu sắc, cuộc chiến tranh của dân, do dân, vì dân.",
                    "D": "Thể hiện tính nhân dân, tính dân tộc."
                },
                "answer": "C"
            },
            {
                "id": 57,
                "category": "Chương 1",
                "question": "Quan điểm \"tiến hành chiến tranh toàn diện\" trong chiến tranh nhân dân bảo vệ Tổ quốc thể hiện như thế nào?",
                "options": {
                    "A": "Tiến công địch toàn diện, mặt trận chính trị là quan trọng nhất, mặt trận quân sự có tính quyết định.",
                    "B": "Tổ chức tiến công địch trên tất cả các mặt trận, mặt trận nào cũng quan trọng, trong đó luôn coi trọng mặt trận quân sự, thắng lợi trên chiến trường là yếu tố quyết định.",
                    "C": "Tiến công địch trên mặt trận quân sự là chủ yếu, các mặt trận khác là hỗ trợ.",
                    "D": "Tiến công địch trên mặt trận quân sự là chủ yếu."
                },
                "answer": "B"
            },
            {
                "id": 58,
                "category": "Chương 1",
                "question": "Đặc điểm nào tác động nhiều nhất đến chiến tranh nhân dân bảo vệ Tổ quốc?",
                "options": {
                    "A": "Chủ nghĩa đế quốc đang thực hiện chính trị cường quyền thô bạo và cứng rắn.",
                    "B": "Tình hình thế giới, khu vực diễn biến phức tạp, tiềm ẩn nhiều yếu tố bất ngờ khó lường.",
                    "C": "Thế giới có những biến động lớn ảnh hưởng đến các nước, đặc biệt là các nước XHCN.",
                    "D": "Tất cả phương án trên đều sai."
                },
                "answer": "B"
            },
            {
                "id": 59,
                "category": "Chương 1",
                "question": "Nếu chiến tranh xảy ra cùng với bọn đế quốc lực lượng nào là đối tượng tác chiến của quân dân ta?",
                "options": {
                    "A": "Lực lượng khủng bố và xâm lược.",
                    "B": "Những lực lượng phản động gây bạo loạn lật đổ, gây xung đột vũ trang, gây chiến tranh xâm lược.",
                    "C": "Lực lượng phản động tiến hành bạo loan, lật đổ phá hoại thành quả Cách mạng của nhân dân ta.",
                    "D": "Lực lượng bạo loạn lật đổ và và các thế lực sử dụng sức mạnh quân sự xâm lược"
                },
                "answer": "B"
            },
            {
                "id": 60,
                "category": "Chương 1",
                "question": "Tư tưởng chỉ đạo tác chiến xuyên suốt trong chuẩn bị và tiến hành chiến tranh giữ nước của cha ông ta là gì?",
                "options": {
                    "A": "Tiến công",
                    "B": "Phòng ngự",
                    "C": "Hoà hoãn",
                    "D": "Phản công"
                },
                "answer": "A"
            },
            {
                "id": 61,
                "category": "Chương 4",
                "question": "Xây dựng lực lượng vũ trang nhân dân Ba chức năng cơ bản của quân đội nhân dân Việt Nam được Hồ Chí Minh xác định, thể hiện vấn đề gì trong quá trình xây dựng quân đội?",
                "options": {
                    "A": "Thể hiện bản chất, truyền thống và kinh nghiệm của quân đội ta.",
                    "B": "Thể hiện sức mạnh, của quân đội.",
                    "C": "Thể hiện bản chất , truyền thống tốt đẹp của quân đội ta.",
                    "D": "Thể hiện bản chất , truyền thống của quân đội ta."
                },
                "answer": "A"
            },
            {
                "id": 62,
                "category": "Chương 1",
                "question": "Lý luận của chủ nghĩa Mác-Lê-nin về bản chất giai cấp của Lực lượng Vũ trang là gì?",
                "options": {
                    "A": "Mang bản chất từ thành phần xuất thân LLVT.",
                    "B": "Mang bản chất quần chúng nhân dân lao động.",
                    "C": "Mang bản chất giai cấp nhà nước đã tổ chức, nuôi dưỡng và sử dụng LLVT.",
                    "D": "Là lực lượng bảo vệ đất nước không mang bản chất chính trị."
                },
                "answer": "C"
            },
            {
                "id": 63,
                "category": "Chương 1",
                "question": "Tư tưởng của Chủ tịch Hồ Chí Minh về giành chính quyền và giữ chính quyền như thế nào?",
                "options": {
                    "A": "Để giành chính quyền và giữ chính quyền là phải đấu tranh chính trị, đấu tranh nghị trường.",
                    "B": "Để giành và giữ chính quyền là phải có sự hậu thuẫn của các lực lượng nước ngoài, có tiềm lực kinh tế quân sự hùng mạnh.",
                    "C": "Để giành và giữ chính quyền là phải dùng bạo lực Cách mạng chống lại bạo lực phản cách mạng.",
                    "D": "Để dành và giữ chính quyền phải dựa vào giai cấp nắm quyền lực kinh tế chủ yếu trong nước. ( tầng lớp tư sản dân tộc )"
                },
                "answer": "C"
            },
            {
                "id": 64,
                "category": "Chương 1",
                "question": "Một trong những quan điểm xây dựng Lực lượng vũ trang nhân dân trong giai đoạn mới đó là:",
                "options": {
                    "A": "Xây dựng LLVT cả về số lượng và chất lượng, lấy chất lượng là chính",
                    "B": "Xây dựng LLVT toàn diện, coi trọng cả số lượng, chất lượng, lấy chính trị là chính",
                    "C": "Xây dựng LLVT lấy chất lượng là chính, lấy xây dựng chính trị làm cơ sơ",
                    "D": "Xây dựng LLVT lấy quân sự là chính, lấy xây dựng chính trị làm cơ sở"
                },
                "answer": "C"
            },
            {
                "id": 65,
                "category": "Chương 1",
                "question": "Một trong những quan điểm xây dựng Lực lượng vũ trang nhân dân trong giai đoạn mới đó là?",
                "options": {
                    "A": "Giữ vững và tăng cường sự lãnh đạo của Đảng đối với LLVT",
                    "B": "Giữ vững và luôn phát huy tốt vai trò lãnh đạo của Đảng đối với LLVT",
                    "C": "Xây dựng LLVT lấy quân sự là chính, lấy chất lượng chính trị làm cơ sở",
                    "D": "Xây dựng LLVT lấy chất lượng là chính, lấy xây dựng quân sự làm cơ sở"
                },
                "answer": "A"
            },
            {
                "id": 66,
                "category": "Chương 1",
                "question": "Trong xây dựng nền QPTD, ANND lực lượng nào là nòng cốt?",
                "options": {
                    "A": "Quân đội và công an",
                    "B": "Lực lượng vũ trang nhân dân",
                    "C": "Bộ đội chủ lực và công an nhân dân",
                    "D": "Lực lượng dân quân tự vệ và lực lượng dự bị động viên"
                },
                "answer": "B"
            },
            {
                "id": 67,
                "category": "Chương 1",
                "question": "Một trong những đặc trưng cơ bản của nền QPTD, ANND là gì?",
                "options": {
                    "A": "Được xây dựng toàn diện và hiện đại",
                    "B": "Được xây dựng trong toàn dân và từng bước hiện đại",
                    "C": "Được xây dựng toàn diện và từng bước hiện đại",
                    "D": "Hiện đại để đáp ứng chiến tranh bằng vũ khí công nghệ cao"
                },
                "answer": "C"
            },
            {
                "id": 68,
                "category": "Chương 1",
                "question": "Lực lượng vũ trang nhân dân Việt Nam bao gồm các lực lượng nào?",
                "options": {
                    "A": "Bộ đội chủ lực, bộ đội địa phương và dân quân tự vệ",
                    "B": "Bộ đội chủ lực, bộ đội biên phòng và dân quân tự vệ",
                    "C": "Bộ đội chủ lực, bộ đội địa phương, lực lượng dự bị động viên",
                    "D": "Quân đội, Công an, dân quân tự vệ"
                },
                "answer": "D"
            },
            {
                "id": 69,
                "category": "Chương 1",
                "question": "Đảng lãnh đạo Lực lượng vũ trang nhân dân theo nguyên tắc?",
                "options": {
                    "A": "Tuyệt đối, toàn diện về mọi mặt.",
                    "B": "Tuyệt đối, trực tiếp về nhiều mặt",
                    "C": "Tuyệt đối, trực tiếp về mọi mặt",
                    "D": "Tuyệt đối, trực tiếp không qua khâu trung gian nào."
                },
                "answer": "C"
            },
            {
                "id": 70,
                "category": "Chương 1",
                "question": "Đảng Cộng sản Việt Nam lãnh đạo Lực lượng vũ trang nhân dân Việt Nam?",
                "options": {
                    "A": "Theo hệ thống tổ chức của Đảng từ Trung ương đến cơ sở.",
                    "B": "Theo hệ thống tổ chức của Đảng trong LLVT.",
                    "C": "Theo hệ thống tổ chức của Đảng từ Trung ương đến địa phương",
                    "D": "Theo hệ thống tổ chức của Đảng từ trên xuống dưới."
                },
                "answer": "A"
            },
            {
                "id": 71,
                "category": "Chương 1",
                "question": "Mối quan hệ giữa Đảng Cộng sản Việt Nam với Lực lượng vũ trang nhân dân VN như thế nào sau đây?",
                "options": {
                    "A": "Đảng độc tôn duy nhất nắm quyền quản lý LLVTND Việt Nam",
                    "B": "Đảng độc tôn duy nhất nắm quyền lãnh đạo LLVTND Việt Nam",
                    "C": "Đảng độc tôn duy nhất nắm quyền tổ chức LLVTND Việt Nam",
                    "D": "Đảng độc tôn duy nhất nắm quyền tổ chức, quản lý LLVTND Việt Nam"
                },
                "answer": "B"
            },
            {
                "id": 72,
                "category": "Chương 1",
                "question": "Quan điểm nào là quan điểm sai trong xây dựng Lực lượng vũ trang nhân dân Việt Nam hiện nay?",
                "options": {
                    "A": "Giữ vững và tăng cường sự lãnh đạo của Đảng đối với LLVT",
                    "B": "Xây dựng LLVT lấy chất lượng là chính, lấy xây dựng về tổ chức làm cơ sở",
                    "C": "Bảo đảm LLVT luôn trong tư thế SSCĐ và chiến đấu thắng lợi",
                    "D": "Tự lực tự cường xây dựng LLVT"
                },
                "answer": "B"
            },
            {
                "id": 73,
                "category": "Chương 1",
                "question": "Để đáp ứng yêu cầu bảo vệ Tổ quốc trong tình hình mới, cần xây dựng Lực lượng vũ trang nhân dân như thế nào ?",
                "options": {
                    "A": "Ngày càng phát triển về tổ chức",
                    "B": "Mạnh, có khả năng tác chiến độc lập",
                    "C": "Gọn, có trình độ tác chiến cao",
                    "D": "Gọn, mạnh, cơ động, có sức chiến đấu cao"
                },
                "answer": "D"
            },
            {
                "id": 74,
                "category": "Chương 1",
                "question": "Quan điểm nào là quan điểm sai trong xây dựng Lực lượng vũ trang nhân dân?",
                "options": {
                    "A": "Xây dựng LLVT lấy chính trị là chính, lấy xây dựng về quân sự làm cơ sở",
                    "B": "Xây dựng LLVT lấy quân sự là chính, lấy xây dựng về chính trị làm cơ sở",
                    "C": "Xây dựng LLVT lấy chất lượng là chính, lấy xây dựng về quân sự làm cơ sở",
                    "D": "Cả ba đều sai"
                },
                "answer": "D"
            },
            {
                "id": 75,
                "category": "Chương 1",
                "question": "Quân đội nhân dân Việt Nam bao gồm?",
                "options": {
                    "A": "Bộ đội chủ lực và bộ độ địa phương",
                    "B": "Lực lượng thường trực và lực lượng dự bị động viên",
                    "C": "Bộ đội chủ lực, bộ độ địa phương, bộ đội biên phòng",
                    "D": "Bộ đội chủ lực, bộ độ địa phương, bộ đội biên phòng và cảnh sát biển"
                },
                "answer": "B"
            },
            {
                "id": 76,
                "category": "Chương 1",
                "question": "Xây dựng quân đội, công an nhân dân Việt Nam theo hướng nào trong tình hình hiện nay?",
                "options": {
                    "A": "Cách mạng, chính qui, tinh nhuệ và từng bước hiện đại.",
                    "B": "Vững mạnh, rộng khắp, lấy chất lượng làm chính.",
                    "C": "Cách mạng, chính qui, tinh nhuệ và ngày càng hùng hậu",
                    "D": "Cách mạng, chính qui, tinh nhuệ, hùng hậu và từng bước hiện đại"
                },
                "answer": "A"
            },
            {
                "id": 77,
                "category": "Chương 1",
                "question": "Hiện nay chng ta cần xây dựng lực lượng dự bị động viên theo hướng?",
                "options": {
                    "A": "Cách mạng, chính qui, tinh nhuệ và từng bước hiện đại",
                    "B": "Vững mạnh, rộng khắp, lấy chất lượng làm chính",
                    "C": "Cách mạng, chính qui, tinh nhuệ và ngày càng hùng hậu",
                    "D": "Hùng hậu, được huấn luyện và quản lý tốt, bảo đảm khi cần thiết có thể động viên nhanh chóng theo kế hoạch"
                },
                "answer": "D"
            },
            {
                "id": 78,
                "category": "Chương 1",
                "question": "Phương hướng xây dựng lực lượng dân quân tự vệ hiện nay?",
                "options": {
                    "A": "Cách mạng, chính qui, tinh nhuệ và từng bước hiện đại",
                    "B": "Vững mạnh, rộng khắp, lấy chất lượng làm chính",
                    "C": "Cách mạng, chính qui, tinh nhuệ và ngày càng hùng hậu",
                    "D": "Cách mạng, chính qui, tinh nhuệ, hùng hậu và từng bước hiện đại"
                },
                "answer": "B"
            },
            {
                "id": 79,
                "category": "Chương 1",
                "question": "Lực lượng dân quân tự vệ gồm có?",
                "options": {
                    "A": "Dân quân, tự vệ thường trực và dân quân, tự vệ dự bị",
                    "B": "Dân quân, tự vệ thường trực và dân quân, tự vệ rộng rãi",
                    "C": "Dân quân, tự vệ bộ binh và dân quân, tự vệ binh chủng",
                    "D": "Dân quân, tự vệ nòng cốt và dân quân, tự vệ rộng rãi"
                },
                "answer": "D"
            },
            {
                "id": 80,
                "category": "Chương 1",
                "question": "Để đáp ứng yêu cầu, nhiệm vụ của lực lượng dân quân tự vệ, cần xây dựng như thế nào hiện nay?",
                "options": {
                    "A": "Vững mạnh, rộng khắp, rải đều trên phạm vi cả nước",
                    "B": "Vững mạnh, rộng khắp nhưng có trọng tâm, trọng điểm.",
                    "C": "Cách mạng, chính qui, tinh nhuệ và ngày càng hùng hậu",
                    "D": "Cách mạng, chính qui, tinh nhuệ, hùng hậu và từng bước hiện đại"
                },
                "answer": "B"
            },
            {
                "id": 81,
                "category": "Chương 5",
                "question": "Kết hợp phát triển kinh tế, xã hội với tăng cường quốc phòng, an ninh và đối ngoại Kinh tế có vai trò như thế nào đối với quốc phòng, an ninh?",
                "options": {
                    "A": "Quyết định nguồn gốc ra đời và sức mạnh của QP, AN",
                    "B": "Tác động đến sự phát triển của QP, AN",
                    "C": "Chi phối đến nguồn gốc ra đời và sức mạnh của QP, AN",
                    "D": "Tạo cơ sở cho sự ra đời và sức mạnh của QP, AN"
                },
                "answer": "A"
            },
            {
                "id": 82,
                "category": "Chương 1",
                "question": "Tại sao phải gắn kết chặt chẽ hoạt động KT-XH với QP và AN trong một chỉnh thể thống nhất ở từng địa phương?",
                "options": {
                    "A": "Các lĩnh vực này có đặc điểm, yêu cầu ở mỗi địa phương là khác nhau",
                    "B": "Mỗi địa phương điều kiện địa lý là khác nhau",
                    "C": "Mỗi địa phương điều kiện kinh tế là khác nhau",
                    "D": "Mỗi địa phương điều kiện phát triển là khác nhau"
                },
                "answer": "A"
            },
            {
                "id": 83,
                "category": "Chương 1",
                "question": "Việc kết hợp phát triển KT-XH với tăng cường củng cố QP, AN trong một chỉnh thể thống nhất nhằm",
                "options": {
                    "A": "Phát huy tác động tích cực của QP,AN đối với KT-XH",
                    "B": "Hạn chế tác động tiêu cực của QP,AN đối với KT-XH",
                    "C": "Thúc đẩy nhau cùng phát triển",
                    "D": "Các phương án trên đều sai"
                },
                "answer": "C"
            },
            {
                "id": 84,
                "category": "Chương 1",
                "question": "Yêu cầu của việc kết phát triển KT-XH với tăng cường củng cố QP, AN là gì?",
                "options": {
                    "A": "Khoa học, hợp lý, cân đối và đồng thời",
                    "B": "Khoa học, cân đối, đồng thời và phù hợp",
                    "C": "Khoa học, hợp lý, cân đối và hài hòa",
                    "D": "Khoa học, cân đối, đồng thời và hài hòa"
                },
                "answer": "C"
            },
            {
                "id": 85,
                "category": "Chương 1",
                "question": "Kết hợp kinh tế với quốc phòng, an ninh là yêu cầu như thế nào?",
                "options": {
                    "A": "Yêu cầu nội sinh của sự phát triển kinh tế, yêu cầu được bảo vệ của nền kinh tế.",
                    "B": "Yêu cầu phát sinh của sự phát triển kinh tế, yêu cầu được bảo vệ của nền kinh tế.",
                    "C": "Yêu cầu sự nghiệp CNH, HĐH",
                    "D": "Yêu cầu mới của sự phát triển kinh tế, yêu cầu được bảo vệ của nền kinh tế."
                },
                "answer": "A"
            },
            {
                "id": 86,
                "category": "Chương 1",
                "question": "Kết hợp kinh tế với quốc phòng, an ninh là?",
                "options": {
                    "A": "Quy luật lịch sử nhân loại",
                    "B": "Quy luật tự nhiên của xã hội.",
                    "C": "Quy luật riêng của các theo CNXH.",
                    "D": "Quy luật phát triển của mọi chế độ xã hội."
                },
                "answer": "A"
            },
            {
                "id": 87,
                "category": "Chương 1",
                "question": "Nội dung nào không thể hiện chính sách kết hợp kinh tế với quốc phòng ở nước ta?",
                "options": {
                    "A": "Quốc phú, binh cường.",
                    "B": "Động vi binh, tĩnh vi dân.",
                    "C": "Ngụ binh, ư nông.",
                    "D": "Các phương án đều sai."
                },
                "answer": "D"
            },
            {
                "id": 88,
                "category": "Chương 1",
                "question": "Theo quan điểm của Chủ nghĩa Mác Lê nin, nguồn gốc xã hội có tác động gì đến sự xuất hiện, tồn tại của chiến tranh?",
                "options": {
                    "A": "Là nguồn gốc sâu xa",
                    "B": "Là nguồn gốc trực tiếp",
                    "C": "Là nguồn gốc gián tiếp",
                    "D": "Cả ba phương án trên"
                },
                "answer": "B"
            },
            {
                "id": 89,
                "category": "Chương 1",
                "question": "Hoạt động phát triển kinh tế - xã hội và tăng cường củng cố quốc phòng - an ninh ở nước ta thống nhất với nhau bởi?",
                "options": {
                    "A": "Bảo vệ vững chắc Tổ quốc",
                    "B": "Thực hiện thắng lợi hai nhiệm vụ chiến lược của Đảng",
                    "C": "Xây dựng nền kinh tế vững mạnh",
                    "D": "Xây dựng nền quốc phòng, an ninh vững chắc"
                },
                "answer": "B"
            },
            {
                "id": 90,
                "category": "Chương 1",
                "question": "Mối quan hệ giữa kinh tế – xã hội (KT-XH) với quốc phòng, an ninh(QP,AN) được biểu hiện?",
                "options": {
                    "A": "Bản chất chế độ KH-XH quyết định bản chất QP,AN",
                    "B": "Bản chất QP,AN quyết định bản chất chế độ KH-XH",
                    "C": "QP,AN vững mạnh quyết định sự tồn tại và phát triển của chế độ KT-XH",
                    "D": "Các phương án đều đúng"
                },
                "answer": "A"
            },
            {
                "id": 91,
                "category": "Chương 1",
                "question": "Mối quan hệ giữa kinh tế – xã hội với quốc phòng, an ninh được biểu hiện?",
                "options": {
                    "A": "QP,AN vững mạnh quyết định sự tăng trưởng KH-XH bền vững",
                    "B": "Bản chất QPAN quyết định bản chất chế độ KT-XH",
                    "C": "QP,AN vững mạnh quyết định sự tồn tại và phát triển của chế độ KT-XH.",
                    "D": "KT-XH cung cấp nguồn nhân lực, vật lực cho QPAN"
                },
                "answer": "D"
            },
            {
                "id": 92,
                "category": "Chương 1",
                "question": "Mối quan hệ giữa kinh tế – xã hội với quốc phòng, an ninh được biểu hiện?",
                "options": {
                    "A": "QP,AN vững mạnh quyết định sự tăng trưởng KH-XH bền vững",
                    "B": "Bản chất QP,AN quyết định bản chất chế độ KT-XH",
                    "C": "QP,AN vững mạnh quyết định sự tồn tại và phát triển của chế độ KT-XH",
                    "D": "QP,AN vững mạnh tạo môi trường thuận lợi cho KT-XH phát triển"
                },
                "answer": "D"
            },
            {
                "id": 93,
                "category": "Chương 1",
                "question": "Mối quan hệ giữa kinh tế – xã hội với quốc phòng, an ninh được biểu hiện?",
                "options": {
                    "A": "QP,AN vững mạnh quyết định sự tăng trưởng KH-XH bền vững",
                    "B": "Đầu tư cho KT-XH làm giảm khả năng đầu tư cho QP,AN",
                    "C": "QP,AN vững mạnh quyết định sự tồn tại và phát triển của chế độ KT-XH",
                    "D": "Hoạt động QP,AN ảnh hưởng đến khả năng tích lũy, tái sản xuất kinh tế"
                },
                "answer": "D"
            },
            {
                "id": 94,
                "category": "Chương 1",
                "question": "Kết hợp phát triển KT - XH với tăng cường củng cố QPAN trong chiến lược phát triển KT – XH được thể hiện trong?",
                "options": {
                    "A": "Phân vùng chiến lược kinh tế xã hội cà quốc phòng, an ninh",
                    "B": "Lựa chọn và thực hiện các giải pháp chiến lược",
                    "C": "Quy hoạch tổng thể phát triển KT-XH với QP, AN trên từng vùng",
                    "D": "Quá trình phân công lao động và phân bố dân cư"
                },
                "answer": "B"
            },
            {
                "id": 95,
                "category": "Chương 1",
                "question": "Kết hợp phát triển KT-XH với tăng cường củng cố QP, AN trong vùng kinh tế trọng điểm cần?",
                "options": {
                    "A": "Tập trung xây dựng các khu công nghiệp quy mô lớn, bố trí tập trung",
                    "B": "Tập trung xây dựng các khu công nghiệp quy mô trung binh, bố trí phân tán",
                    "C": "Xây dựng các thành phố thành các siêu đô thị",
                    "D": "Tập trung xây dựng các khu công nghiệp quy mô lớn, bố trí cài răng lược"
                },
                "answer": "B"
            },
            {
                "id": 96,
                "category": "Chương 1",
                "question": "Thực hiện đưa dân ra đảo sinh sống nhằm?",
                "options": {
                    "A": "Giảm mật độ dân cư trong đất liền và phát triển kinh tế biển, đảo",
                    "B": "Thực hiện tốt việc phát triển kinh tế với củng cố QP, AN ở vùng biển, đảo",
                    "C": "Xây dựng vọng gác tiền tiêu, sử dụng lực lượng tại chỗ ngăn chặn địch từ xa",
                    "D": "Phát triển kinh tế và dịch vụ biển, đảo"
                },
                "answer": "B"
            },
            {
                "id": 97,
                "category": "Chương 1",
                "question": "Yêu cầu của việc kết phát triển KT-XH với tăng cường củng cố QP, AN là gì?",
                "options": {
                    "A": "Khoa học, hợp lý, cân đối và đồng thời",
                    "B": "Khoa học, cân đối, đồng thời và phù hợp",
                    "C": "Khoa học, hợp lý, cân đối và hài hòa",
                    "D": "Khoa học, cân đối, đồng thời và hài hòa"
                },
                "answer": "C"
            },
            {
                "id": 98,
                "category": "Chương 1",
                "question": "Kết hợp kinh tế với quốc phòng, an ninh là yêu cầu như thế nào?",
                "options": {
                    "A": "Yêu cầu nội sinh của sự phát triển kinh tế, yêu cầu được bảo vệ của nền kinh tế.",
                    "B": "Yêu cầu phát sinh của sự phát triển kinh tế, yêu cầu được bảo vệ của nền kinh tế.",
                    "C": "Yêu cầu sự nghiệp CNH, HĐH",
                    "D": "Yêu cầu mới của sự phát triển kinh tế, yêu cầu được bảo vệ của nền kinh tế."
                },
                "answer": "A"
            },
            {
                "id": 99,
                "category": "Chương 1",
                "question": "Kết hợp kinh tế với quốc phòng, an ninh là?",
                "options": {
                    "A": "Quy luật lịch sử nhân loại",
                    "B": "Quy luật tự nhiên của xã hội.",
                    "C": "Quy luật riêng của các theo CNXH.",
                    "D": "Quy luật phát triển của mọi chế độ xã hội."
                },
                "answer": "A"
            },
            {
                "id": 100,
                "category": "Chương 1",
                "question": "Nội dung nào không thể hiện chính sách kết hợp kinh tế với quốc phòng ở nước ta?",
                "options": {
                    "A": "Quốc phú, binh cường.",
                    "B": "Động vi binh, tĩnh vi dân.",
                    "C": "Ngụ binh, ư nông.",
                    "D": "Các phương án đều sai."
                },
                "answer": "D"
            },
            {
                "id": 101,
                "category": "Chương 6",
                "question": "Những vấn đề cơ bản về lịch sử nghệ thuật quân sự Việt Nam Yếu tố cơ bản tác động đến sự hình thành nghệ thuật đánh giặc của tổ tiên ta là gì?",
                "options": {
                    "A": "Yếu tố địa lý",
                    "B": "Địa hình núi rừng hiểm trở",
                    "C": "Yếu tố thời tiết",
                    "D": "Yếu tố địa hình, thời tiết"
                },
                "answer": "A"
            },
            {
                "id": 102,
                "category": "Chương 1",
                "question": "Một trong những yếu tố cơ bản tác động đến sự hình thành nghệ thuật đánh giặc của tổ tiên ta là gì?",
                "options": {
                    "A": "Các dân tộc ở Việt Nam chung sống hoà thuận, yêu quê hương đất nước",
                    "B": "Yếu tố chính trị, văn hoá – xã hội",
                    "C": "Dân tộc ta có tính thần đoàn kết, thông minh, sang tạo",
                    "D": "Dân tộc ta có tinh thần chống ngoại xâm kiên cường, bất khuất."
                },
                "answer": "B"
            },
            {
                "id": 103,
                "category": "Chương 1",
                "question": "Trong nghệ thuật đánh giặc của tổ tiên ta, thể hiện cách tiến công như thế nào?",
                "options": {
                    "A": "Tích cực chuẩn bị, tiến công liên tục từ nhỏ đến lớn, từ cục bộ đến toàn bộ.",
                    "B": "Tích cực tiến công liên tục và phòng ngự toàn diện.",
                    "C": "Tích cực chuẩn bị tiến công phá thế tiến công của địch",
                    "D": "Tích cực chuẩn bị tiến công kiên quyết, liên tục."
                },
                "answer": "A"
            },
            {
                "id": 104,
                "category": "Chương 1",
                "question": "Yếu tố cơ bản tác động đến sự hình thành nghệ thuật đánh giặc của tổ tiên ta là gì?",
                "options": {
                    "A": "Yếu tố địa lý",
                    "B": "Địa hình núi rừng hiểm trở",
                    "C": "Yếu tố thời tiết",
                    "D": "Yếu tố địa hình, thời tiết"
                },
                "answer": "A"
            },
            {
                "id": 105,
                "category": "Chương 1",
                "question": "Một trong những yếu tố cơ bản tác động đến sự hình thành nghệ thuật đánh giặc của tổ tiên ta là gì?",
                "options": {
                    "A": "Các dân tộc ở Việt Nam chung sống hoà thuận, yêu quê hương đất nước",
                    "B": "Yếu tố chính trị, văn hoá – xã hội",
                    "C": "Dân tộc ta có tinh thần đoàn kết, thông minh, sáng tạo",
                    "D": "Dân tộc ta có tinh thần chống ngoại xâm kiên cường, bất khuất."
                },
                "answer": "B"
            },
            {
                "id": 106,
                "category": "Chương 1",
                "question": "Trong nghệ thuật đánh giặc của tổ tiên ta, thể hiện cách tiến công như thế nào?",
                "options": {
                    "A": "Tích cực chuẩn bị, tiến công liên tục từ nhỏ đến lớn, từ cục bộ đến toàn bộ.",
                    "B": "Tích cực tiến công liên tục và phòng ngự toàn diện.",
                    "C": "Tích cực chuẩn bị tiến công phá thế tiến công của địch",
                    "D": "Tích cực chuẩn bị tiến công kiên quyết, liên tục."
                },
                "answer": "A"
            },
            {
                "id": 107,
                "category": "Chương 1",
                "question": "Xây dựng cả nước thành một chiến trường, mỗi người dân là một người lính đánh giặc là thể hiện nghệ thuật chiến tranh gì?",
                "options": {
                    "A": "Chiến tranh toàn diện",
                    "B": "Chiến tranh tổng lực",
                    "C": "Chiến tranh toàn dân",
                    "D": "Chiến tranh du kích"
                },
                "answer": "C"
            },
            {
                "id": 108,
                "category": "Chương 1",
                "question": "Một trong những nội dung nghệ thuật đánh giặc của tổ tiên ta là gì?",
                "options": {
                    "A": "Nghệ thuật toàn dân đánh giặc trên mọi vùng miền",
                    "B": "Nghệ thuật đánh giặc toàn diện trên mọi mặt trận",
                    "C": "Nghệ thuật chiến tranh nhân dân, toàn dân đánh giặc",
                    "D": "Nghệ thuật tác chiến của chiến tranh nhân dân."
                },
                "answer": "C"
            },
            {
                "id": 109,
                "category": "Chương 1",
                "question": "Một trong những nội dung nghệ thuật đánh giặc của của tổ tiên ta là gì?",
                "options": {
                    "A": "Nghệ thuật đấu tranh quân sự quyết định thắng lợi trong chiến tranh",
                    "B": "Nghệ thuật lấy nhỏ đánh lớn, lấy ít thắng nhiều, lấy yếu thắng mạnh",
                    "C": "Nghệ thuật đánh vào lòng người",
                    "D": "Nghệ thuật kết hợp đấu tranh giữa các mặt trận quân sự, chính trị, ngoại giao, binh vận"
                },
                "answer": "D"
            },
            {
                "id": 110,
                "category": "Chương 1",
                "question": "Binh thư yếu lược là tác phẩm của ai?",
                "options": {
                    "A": "Nguyễn Trãi",
                    "B": "Quang Trung",
                    "C": "Trần Quốc Tuấn",
                    "D": "Lý thường Kiệt"
                },
                "answer": "C"
            },
            {
                "id": 111,
                "category": "Chương 1",
                "question": "Tư tưởng, nghệ thuật đánh giặc tiêu biểu của Nhà Lý là gì?",
                "options": {
                    "A": "Tiêu thổ, thanh giã",
                    "B": "Tiên phát chế nhân",
                    "C": "Mưu phạt công tâm",
                    "D": "Thần tốc, bất ngờ và quyết liệt"
                },
                "answer": "B"
            },
            {
                "id": 112,
                "category": "Chương 1",
                "question": "Tư tưởng, nghệ thuật đánh giặc tiêu biểu của Nhà Trần là gì?",
                "options": {
                    "A": "Tiêu thổ, thanh giã",
                    "B": "Tiên phát chế nhân",
                    "C": "Mưu phạt công tâm",
                    "D": "Thần tốc, bất ngờ và quyết liệt"
                },
                "answer": "A"
            },
            {
                "id": 113,
                "category": "Chương 1",
                "question": "Tư tưởng, nghệ thuật đánh giặc tiêu biểu của Lê Lợi, Nguyến Trãi là gì?",
                "options": {
                    "A": "Tiêu thổ, thanh giã",
                    "B": "Tiên phát chế nhân",
                    "C": "Mưu phạt công tâm",
                    "D": "Thần tốc, bất ngờ và quyết liệt"
                },
                "answer": "C"
            },
            {
                "id": 114,
                "category": "Chương 1",
                "question": "Tư tưởng, nghệ thuật đánh giặc tiêu biểu của Nguyễn Huệ - Quang Trung là gì?",
                "options": {
                    "A": "Tiêu thổ, thanh giã",
                    "B": "Tiên phát chế nhân",
                    "C": "Mưu phạt công tâm",
                    "D": "Thần tốc, bất ngờ và quyết liệt"
                },
                "answer": "D"
            },
            {
                "id": 115,
                "category": "Chương 1",
                "question": "Nhà Trần đã sử dụng kế sách đánh giặc như thế nào trong cuộc kháng chiến chống quân Nguyên Mông?",
                "options": {
                    "A": "Công thành, diệt viện",
                    "B": "Tránh thế ban mai, đánh lúc chiều tà",
                    "C": "Tránh chỗ mạnh, đánh chỗ yếu, nơi điểm yếu của địch",
                    "D": "Tiến công vào bộ phận hậu cần phía sau của địch"
                },
                "answer": "C"
            },
            {
                "id": 116,
                "category": "Chương 1",
                "question": "Một trong những nội dung nghệ thuật đánh giặc của của tổ tiên ta là gì?",
                "options": {
                    "A": "Nghệ thuật lấy nhỏ đánh lớn, lấy ít địch nhiều, lấy yếu chống mạnh",
                    "B": "Nghệ thuật lấy nhỏ đánh lớn, lấy ít thắng nhiều, lấy yếu thắng mạnh",
                    "C": "Nghệ thuật lấy nhỏ đánh lớn, lấy ít thắng nhiều, lấy yếu chống mạnh",
                    "D": "Nghệ thuật lấy nhỏ đánh lớn, lấy ít địch nhiều, lấy yếu thắng mạnh"
                },
                "answer": "A"
            },
            {
                "id": 117,
                "category": "Chương 1",
                "question": "Tư tưởng chỉ đạo tác chiến xuyên suốt trong chuẩn bị và tiến hành chiến tranh giữ nước của cha ông ta là gì?",
                "options": {
                    "A": "Tiến công",
                    "B": "Phòng ngự",
                    "C": "Hoà hoãn",
                    "D": "Phản công"
                },
                "answer": "A"
            },
            {
                "id": 119,
                "category": "Chương 1",
                "question": "Phương châm tác chiến “ Đánh nhanh, thắng nhanh” là của chiến dịch nào?",
                "options": {
                    "A": "Chiến dịch Việt Bắc-Thu Đông năm 1947",
                    "B": "Chiến dịch Điện Biên Phủ 1954",
                    "C": "Chiến dịch Hồ Chí Minh 1975",
                    "D": "Chiến dịch Thành Cổ, Quảng trị 1972"
                },
                "answer": "C"
            },
            {
                "id": 120,
                "category": "Chương 1",
                "question": "Một trong những cơ sở hình thành nghệ thuật quân sự Việt Nam từ khi có Đảng lãnh đạo là gì?",
                "options": {
                    "A": "Tư tưởng vũ trang toàn dân của Hồ Chí Minh",
                    "B": "Tư tưởng lãnh đạo cách mạng của Hồ Chí Minh",
                    "C": "Tư tưởng quân sự của Hồ Chí Minh",
                    "D": "Tư tưởng chiến tranh Hồ chí Minh"
                },
                "answer": "C"
            },
            {
                "id": 121,
                "category": "Chương 7",
                "question": "Xây dựng và bảo vệ chủ quyền biển, đảo, biên giới quốc gia trong tình hình mới Trong chiển lược phòng thủ bảo vệ Tổ quố",
                "options": {
                    "A": "Rất quan trong",
                    "B": "Quan trọng",
                    "C": "Quan trọng đặc biệt",
                    "D": "Ít quan trọng"
                },
                "answer": "C"
            },
            {
                "id": 122,
                "category": "Chương 1",
                "question": "Trong chiển lược phòng thủ bảo vệ Tổ quố",
                "options": {
                    "A": "Vùng chiến lược trọng yếu",
                    "B": "Vùng chiến lược quan trọng",
                    "C": "Vùng chiến lược đặc biệt",
                    "D": "Vùng chiến lược ít trọng"
                },
                "answer": "A"
            },
            {
                "id": 123,
                "category": "Chương 1",
                "question": "Trong chiến lược bảo vệ Tổ quố",
                "options": {
                    "A": "Vùng kinh tế trọng điểm",
                    "B": "Vùng biển, đảo",
                    "C": "Vùng núi, biên giới",
                    "D": "Cả ba vùng"
                },
                "answer": "C"
            },
            {
                "id": 124,
                "category": "Chương 1",
                "question": "Vùng nào là vùng dễ mất ổn định về QP, AN trong bối cảnh hiện nay?",
                "options": {
                    "A": "Vùng kinh tế trọng điểm",
                    "B": "Vùng biển, đảo",
                    "C": "Vùng núi, biên giới",
                    "D": "Cả ba vùng"
                },
                "answer": "B"
            },
            {
                "id": 125,
                "category": "Chương 1",
                "question": "Phần lớn nguồn lực để xây dựng và bảo vệ Tổ quố",
                "options": {
                    "A": "Công nghiệp và khoa học, công nghệ, giáo dục",
                    "B": "Nông, Lâm, Ngư nghiệp",
                    "C": "Công nghiệp, giao thông vận tải và xây dựng cơ bản",
                    "D": "Công nghiệp quốc phòng, khoa học và công nghệ, giáo dục"
                },
                "answer": "B"
            },
            {
                "id": 126,
                "category": "Chương 1",
                "question": "Nội dung nào sau đây phản ánh đúng mục tiêu của Đảng về Chiến lược bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa trong tình hình mới?",
                "options": {
                    "A": "Phát huy cao nhất sức mạnh của dân tộc kết hợp với sức mạnh của thời đại.",
                    "B": "Bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của Tổ quốc.",
                    "C": "Quán triệt đường lối độc lập, tự chủ; đồng thời chủ động tích cực hội nhập quốc tế.",
                    "D": "Luôn nhất quán và kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội."
                },
                "answer": "B"
            },
            {
                "id": 127,
                "category": "Chương 1",
                "question": "Nội dung nào sau đây không phản ánh đúng quan điểm chỉ đạo của Đảng về Chiến lược bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa trong tình hình mới?",
                "options": {
                    "A": "Giữ vững sự lãnh đạo trực tiếp, tuyệt đối về mọi mặt của Đảng.",
                    "B": "Giữ vững môi trường hòa bình, ổn định để phát triển kinh tế - xã hội.",
                    "C": "Chỉ chú trọng xây dựng sức mạnh của đất nước về văn hóa - xã hội.",
                    "D": "Kết hợp chặt chẽ hai nhiệm vụ chiến lược xây dựng và bảo vệ Tổ quốc."
                },
                "answer": "C"
            },
            {
                "id": 128,
                "category": "Chương 1",
                "question": "Bất kì thế lực nào có âm mưu và hành động chống phá mục tiêu của Việt Nam trong sự nghiệp xây dựng và bảo vệ Tổ quốc đều là",
                "options": {
                    "A": "đối tác.",
                    "B": "đối tượng.",
                    "C": "đồng đội.",
                    "D": "đồng minh."
                },
                "answer": "B"
            },
            {
                "id": 129,
                "category": "Chương 1",
                "question": "Luật Biển Việt Nam năm 2012 bao gồm",
                "options": {
                    "A": "320 điều và 9 phụ lục.",
                    "B": "7 chương với 55 điều.",
                    "C": "9 chương với 62 điều.",
                    "D": "36 điều và 8 phụ lục."
                },
                "answer": "B"
            },
            {
                "id": 130,
                "category": "Chương 1",
                "question": "Theo quy định trong Luật Biển Việt Nam năm 2012: vùng biển quốc tế là tất cả các vùng biển nằm ngoài vùng đặc quyền kinh tế của Việt Nam và các quốc gia khá",
                "options": {
                    "A": "vùng nội thủy và tiếp giáp lãnh hải.",
                    "B": "lãnh hải và vùng tiếp giáp lãnh hải.",
                    "C": "thềm lục địa và lòng đất dưới đáy biển.",
                    "D": "đáy biển và lòng đất dưới đáy biển."
                },
                "answer": "D"
            },
            {
                "id": 131,
                "category": "Chương 1",
                "question": "Lãnh hải là vùng biển có chiều rộng 12 hải lí tính từ",
                "options": {
                    "A": "vùng nội thủy ra phía biển.",
                    "B": "đường cơ sở ra phía biển.",
                    "C": "ranh giới ngoài của lãnh hải.",
                    "D": "ranh giới ngoài thềm lục địa."
                },
                "answer": "B"
            },
            {
                "id": 132,
                "category": "Chương 1",
                "question": "Vùng biển tiếp liền và nằm ngoài lãnh hải Việt Nam, hợp với lãnh hải thành một vùng biển có chiều rộng 200 hải lí tính từ đường cơ sở, được gọi là",
                "options": {
                    "A": "nội thủy.",
                    "B": "vùng tiếp giáp lãnh hải.",
                    "C": "vùng đặc quyền kinh tế.",
                    "D": "thềm lục địa."
                },
                "answer": "C"
            },
            {
                "id": 133,
                "category": "Chương 1",
                "question": "Ranh giới ngoài thềm lục địa cách đường cơ sở không quá",
                "options": {
                    "A": "350 hải lí.",
                    "B": "200 hải lí.",
                    "C": "12 hải lí.",
                    "D": "10 hải lí."
                },
                "answer": "A"
            },
            {
                "id": 134,
                "category": "Chương 1",
                "question": "Việt Nam có hai quần đảo xa bờ là",
                "options": {
                    "A": "Hoàng Sa và Thổ Chu.",
                    "B": "Hoàng Sa và Trường Sa.",
                    "C": "Trường Sa và Phú Quý.",
                    "D": "Thổ Chu và Phú Quý."
                },
                "answer": "B"
            },
            {
                "id": 135,
                "category": "Chương 1",
                "question": "Biên giới quốc gia trên đất liền được hoạch định và đánh dấu trên thực địa bằng",
                "options": {
                    "A": "một mốc quốc giới duy nhất.",
                    "B": "các tọa độ trên hải đồ.",
                    "C": "hệ thống mốc quốc giới.",
                    "D": "hệ tọa độ trên đất liền."
                },
                "answer": "C"
            },
            {
                "id": 136,
                "category": "Chương 1",
                "question": "“Mặt thẳng đứng từ biên giới quốc gia trên đất liền và biên giới quốc gia trên biển xuống lòng đất” - đó là nội dung của khái niệm nào sau đây?",
                "options": {
                    "A": "Biên giới quốc gia trên biển.",
                    "B": "Biên giới quốc gia trên không.",
                    "C": "Biên giới quốc gia trên đất liền.",
                    "D": "Biên giới quốc gia trong lòng đất."
                },
                "answer": "D"
            },
            {
                "id": 137,
                "category": "Chương 1",
                "question": "Hành vi nào dưới đây bị nghiêm cấm trong bảo vệ biên giới quốc gia của Việt Nam?",
                "options": {
                    "A": "Phá hoại an ninh, trật tự, an toàn xã hội ở khu vực biên giới.",
                    "B": "Bảo vệ môi trường, tài nguyên thiên nhiên và lợi ích quốc gia.",
                    "C": "Vận chuyển qua biên giới hàng hóa mà nhà nước không cấm.",
                    "D": "Tố giác những hành vi gây hư hại, làm xê dịch mốc quốc giới."
                },
                "answer": "A"
            },
            {
                "id": 138,
                "category": "Chương 1",
                "question": "Đọc tình huống dưới đây và trả lời câu hỏi: Tình huống: Nhà bạn A Páo ở khu vực biên giới. Hằng ngày A Páo đi chăn trâu sau giờ họ",
                "options": {
                    "A": "Mặc kệ, vì đó không phải là việc của mình.",
                    "B": "Khuyến khích A Páo nên thực hiện hành vi đó.",
                    "C": "Khuyên A Páo không nên thực hiện hành vi đó.",
                    "D": "Cùng với A Páo lùa trâu sang bên kia biên giới."
                },
                "answer": "C"
            },
            {
                "id": 139,
                "category": "Chương 1",
                "question": "Ở Việt Nam, Ngày biên phòng toàn dân được tổ chức vào",
                "options": {
                    "A": "ngày 3/3 hằng năm.",
                    "B": "ngày 18/3 hằng năm.",
                    "C": "ngày 22/12 hằng năm.",
                    "D": "ngày 7/5 hằng năm."
                },
                "answer": "A"
            },
            {
                "id": 140,
                "category": "Chương 1",
                "question": "Nội dung nào sau đây không phản ánh đúng trách nhiệm của công dân trong việc quản lí, xây dựng và bảo vệ biên giới quốc gia?",
                "options": {
                    "A": "Chấp hành các quy định của pháp luật về biên giới quốc gia.",
                    "B": "Xây dựng, giữ gìn trật tự an toàn xã hội ở khu vực biên giới.",
                    "C": "Vận chuyển qua biên giới những văn hóa phẩm độc hại.",
                    "D": "Tham gia phong trào tự quản đường biên, mốc quốc giới."
                },
                "answer": "C"
            },
            {
                "id": 141,
                "category": "Chương 8",
                "question": "Xây dựng lực lượng DQTV, lực lượng DBĐV và động viên quốc phòng Dân quân tự vệ là lực lượng quần chúng, một thành phần của lực lượng nào sau đây?",
                "options": {
                    "A": "Lực lượng vũ trang nhân dân Việt Nam",
                    "B": "Lực lượng quân đội nhân dân Việt Nam",
                    "C": "Lực lượng công an nhân dân Việt Nam",
                    "D": "Lực lượng thường trực địa phương"
                },
                "answer": "A"
            },
            {
                "id": 142,
                "category": "Chương 1",
                "question": "Dân quân tự vệ là",
                "options": {
                    "A": "Lực lượng vũ trang quần chúng không thoát ly khỏi lao động sản xuất, công tác",
                    "B": "Lực lượng vũ trang quần chúng, thoát ly khỏi lao động sản xuất, công tác",
                    "C": "Lực lượng vũ trang quần chúng, chỉ tham gia chiến đấu và phục vụ chiến đấu",
                    "D": "Lực lượng vũ trang quần chúng, chỉ giữ gìn an ninh trật tự, an toàn xã hội tại địa phương"
                },
                "answer": "A"
            },
            {
                "id": 143,
                "category": "Chương 1",
                "question": "Ngày truyền thống của lực lượng Dân quân tự vệ Việt Nam",
                "options": {
                    "A": "Ngày 28/3",
                    "B": "Ngày 26/3",
                    "C": "Ngày 19/8",
                    "D": "Ngày 22/12"
                },
                "answer": "A"
            },
            {
                "id": 144,
                "category": "Chương 1",
                "question": "Ba thứ quân của lực lượng quân đội nhân dân Việt Nam là:",
                "options": {
                    "A": "Bộ đội chủ lực, bộ đội địa phương và dân quân du kích",
                    "B": "Quân đội nhân dân, công an nhân dân và dân quân tự vệ",
                    "C": "Quân đội nhân dân, bộ đội biên phòng và dân quân du kích",
                    "D": "Hải quân Việt Nam, công an nhân dân và dân quân tự vệ"
                },
                "answer": "A"
            },
            {
                "id": 145,
                "category": "Chương 1",
                "question": "“Dân quân tự vệ và du kích là lực lượng của toàn dân tộ",
                "options": {
                    "A": "Chủ tịch Hồ Chí Minh",
                    "B": "Đại tướng Võ Nguyên Giáp",
                    "C": "Đại tướng Nguyễn Chí Thanh",
                    "D": "Bộ trưởng Bộ quốc phòng"
                },
                "answer": "A"
            },
            {
                "id": 146,
                "category": "Chương 1",
                "question": "Xây dựng lực lượng Dân quân tự vệ là trách nhiệm của:",
                "options": {
                    "A": "Toàn Đảng, toàn dân, của cả hệ thống chính trị.",
                    "B": "Đảng, Nhà nước và các địa phương",
                    "C": "Toàn Đảng, toàn dân và toàn quân",
                    "D": "Tất cả các ban nghành đoàn thể tại địa phương"
                },
                "answer": "A"
            },
            {
                "id": 147,
                "category": "Chương 1",
                "question": "Phương châm xây dựng lực lượng Dân quân tự vệ hiện nay là:",
                "options": {
                    "A": "Vững mạnh, rộng khắp, có số lượng phù hợp, coi trọng chất lượng là chính",
                    "B": "Xây dựng Dân quân tự vệ bảo đảm số lượng đủ, chất lượng cao, xây dựng toàn diện nhưng có trọng tâm, trọng điểm",
                    "C": "Xây dựng Dân quân tự vệ phải phát huy sức mạnh tổng hợp của cả hệ thống chính trị",
                    "D": "Xây dựng Dân quân tự vệ đặt dưới sự lãnh đạo của Đảng các cấp ở địa phương, bộ, ngành"
                },
                "answer": "A"
            },
            {
                "id": 148,
                "category": "Chương 1",
                "question": "So với Luật Dân quân tự vệ năm 2009, Điều 5 Luật Dân quân tự vệ năm 2019 đã kế thừa và bổ sung nhiệm vụ nào sau đây?",
                "options": {
                    "A": "Tham gia thực hiện các biện pháp về chiến tranh thông tin, chiến tranh không gian mạng theo quy định của pháp luật, quyết định của cấp có thẩm quyền",
                    "B": "Phòng, chống, khắc phục hậu quả thảm họa, sự cố, thiên tai, dịch bệnh, cháy, nổ; tìm kiếm, cứu nạn, cứu hộ; bảo vệ rừng, bảo vệ môi trường và nhiệm vụ phòng thủ dân sự khác theo quy định của pháp luật.",
                    "C": "Tuyên truyền, vận động Nhân dân thực hiện đường lối, quan điểm của Đảng, chính sách, pháp luật của Nhà nước về quốc phòng, an ninh; tham gia xây dựng địa phương, cơ sở vững mạnh toàn diện, thực hiện chính sách xã hội.",
                    "D": "Thực hiện nhiệm vụ huấn luyện quân sự, giáo dục chính trị, pháp luật, hội thi, hội thao, diễn tập."
                },
                "answer": "A"
            },
            {
                "id": 149,
                "category": "Chương 1",
                "question": "Đối tượng và thời hạn tham gia Dân quân tự vệ hiện nay là:",
                "options": {
                    "A": "Công dân trong độ tuổi quy định (nam từ 18 – 45 tuổi, nữ từ 18 – 40; nếu tình nguyện tham gia thêm 5 năm).",
                    "B": "Công dân trong độ tuổi quy định (nam từ 18 – 50 tuổi, nữ từ 18 – 40; nếu tình nguyện tham gia thêm 5 năm).",
                    "C": "Công dân trong độ tuổi quy định (nam từ 18 – 45 tuổi, nữ từ 18 – 40; nếu tình nguyện tham gia thêm 4 năm).",
                    "D": "Công dân trong độ tuổi quy định (nam từ 18 – 50 tuổi, nữ từ 18 – 45; nếu tình nguyện tham gia thêm 4 năm)."
                },
                "answer": "A"
            },
            {
                "id": 150,
                "category": "Chương 1",
                "question": "“Phát huy sức mạnh tổng hợp trên địa bàn địa phương trong xây dựng lực lượng Dân quân tự vệ; xây dựng lực lượng Dân quân tự vệ gắn với xây dựng cơ sở vững mạnh toàn diện” là",
                "options": {
                    "A": "Một trong những biện pháp xây dựng lực lượng Dân quân tự vệ hiện nay",
                    "B": "Một trong những vai trò của lực lượng Dân quân tự vệ hiện nay",
                    "C": "Một trong những quan điểm của Đảng về xây dựng lực lượng Dân quân tự vệ hiện nay",
                    "D": "Một trong những nội dung xây dựng lực lượng Dân quân tự vệ hiện nay"
                },
                "answer": "A"
            },
            {
                "id": 151,
                "category": "Chương 1",
                "question": "Quân nhân dự bị gồm:",
                "options": {
                    "A": "Sỹ quan dự bị, quân nhân chuyên nghiệp dự bị.",
                    "B": "Hạ sỹ quan và binh sỹ dự bị.",
                    "C": "Sỹ quan dự bị, quân nhân chuyên nghiệp dự bị, hạ sỹ quan và binh sỹ dự bị.",
                    "D": "Tất cả quân nhân."
                },
                "answer": "C"
            },
            {
                "id": 152,
                "category": "Chương 1",
                "question": "Lực lượng dự bị động viên là",
                "options": {
                    "A": "Là lực lượng có khả năng phối hợp chặt chẽ với dân quân tự vệ, công an... làm tăng thêm sức mạnh chiến đấu trên các địa bàn trong khu vực phòng thủ, bảo đảm sự vững chắc của thế trận quốc phòng ở địa phương, cơ sở",
                    "B": "Là lực lượng có khả năng tác chiến độc lập, làm tăng thêm sức mạnh chiến đấu trên các địa bàn trong khu vực phòng thủ, bảo đảm sự vững chắc của thế trận quốc phòng ở địa phương, cơ sở",
                    "C": "Là lực lượng có khả năng phối hợp chặt chẽ với các lực lượng khác làm tăng thêm sức mạnh chiến đấu trên các địa bàn trong khu vực phòng thủ, bảo đảm sự vững chắc của thế trận quốc phòng toàn dân",
                    "D": "Là lực lượng có có khả năng tác chiến độc lập trên các địa bàn trọng điểm, bảo đảm sự vững chắc của thế trận quốc phòng toàn dân."
                },
                "answer": "A"
            },
            {
                "id": 153,
                "category": "Chương 1",
                "question": "“Bảo đảm số lượng đủ, chất lượng cao, xây dựng toàn diện nhưng có trọng tâm, trọng điểm” là",
                "options": {
                    "A": "Một trong những quan điểm về xây dựng lực lượng dự bị động viên",
                    "B": "Một trong những nhiệm vụ xây dựng lực lượng dự bị động viên",
                    "C": "Một trong những biện pháp chủ yếu xây dựng lực lượng dự bị động viên",
                    "D": "Một trong những giải pháp cơ bản xây dựng lực lượng dự bị động viên"
                },
                "answer": "A"
            },
            {
                "id": 154,
                "category": "Chương 1",
                "question": "Một trong những quan điểm của Đảng Cộng Sản Việt Nam về xây dựng lực lượng dự bị động viên trong tình hình mới là:",
                "options": {
                    "A": "Phát huy sức mạnh của toàn dân trên tất cả các lĩnh vực hoạt động xã hội.",
                    "B": "Xây dựng lực lượng dự bị động viên hùng mạnh, sẵn sàng chiến đấu cao.",
                    "C": "Xây dựng lực lượng dự bị động viên đặt dưới sự lãnh đạo của Đảng các cấp ở địa phương, bộ, ngành.",
                    "D": "Phát huy sức mạnh tổng hợp của chính quyền ở địa phương."
                },
                "answer": "C"
            },
            {
                "id": 155,
                "category": "Chương 1",
                "question": "Một trong những nội dung xây dựng lực lượng dự bị động viên là:",
                "options": {
                    "A": "Tạo nguồn, đăng ký, quản lý lực lượng dự bị động viên.",
                    "B": "Tạo nguồn, biên chế và đăng ký lực lượng dự bị động viên",
                    "C": "Tạo nguồn, tổ chức và quản lý lực lượng dự bị động viên",
                    "D": "Tạo nguồn, quản lý và kiểm tra lực lượng dự bị động viên"
                },
                "answer": "A"
            },
            {
                "id": 156,
                "category": "Chương 1",
                "question": "Đối tượng tạo nguồn của lực lượng dự bị động viên là",
                "options": {
                    "A": "Sỹ quan tại ngũ.",
                    "B": "Hạ sỹ quan tại ngũ.",
                    "C": "Chiến sỹ tại ngũ.",
                    "D": "Nam sinh viên tốt nghiệp Đại học."
                },
                "answer": "D"
            },
            {
                "id": 157,
                "category": "Chương 1",
                "question": "Quân nhân dự bị động viên được đăng ký, quản lý tại:",
                "options": {
                    "A": "Nơi công tác",
                    "B": "Nơi cư trú",
                    "C": "Đơn vị dự bị động viên",
                    "D": "Nơi tập trung động viên"
                },
                "answer": "B"
            },
            {
                "id": 158,
                "category": "Chương 1",
                "question": "Cơ quan thực hiện việc đăng ký, quản lý quân nhân dự bị động viên là:",
                "options": {
                    "A": "Ban lãnh đạo cơ quan, đơn vị công tác",
                    "B": "Ban chỉ huy quân sự xã (phường, thị trấn), Ban chỉ huy đơn vị dự bị động viên",
                    "C": "Ban chỉ huy quân sự xã (phường, thị trấn), Ban chỉ huy quân sự huyện (quận, thị xã, thành phố thuộc tỉnh)",
                    "D": "Ban chỉ huy quân sự huyện (quận, thị xã, thành phố thuộc tỉnh) và đơn vị dự bị động viên"
                },
                "answer": "C"
            },
            {
                "id": 159,
                "category": "Chương 1",
                "question": "Tổ chức biên chế lực lượng dự bị động viên theo các loại hình đơn vị bao gồm:",
                "options": {
                    "A": "Đơn vị biên chế thiếu, đơn vị biên chế khung thường trực, đơn vị không có khung thường trực, đơn vị biên chế đủ và đơn vị chuyên môn thời chiến.",
                    "B": "Đơn vị biên chế khung thường trực, đơn vị không có khung thường trực, đơn vị biên chế đủ và đơn vị chuyên môn thời chiến.",
                    "C": "Đơn vị biên chế thiếu, đơn vị không có khung thường trực, đơn vị biên chế đủ và đơn vị chuyên môn thời chiến.",
                    "D": "Đơn vị biên chế thiếu, đơn vị biên chế khung thường trực, đơn vị không có khung thường trực và đơn vị chuyên môn thời chiến."
                },
                "answer": "A"
            },
            {
                "id": 160,
                "category": "Chương 1",
                "question": "Một trong những nguyên tắc sắp xếp quân nhân dự bị vào các đơn vị dự bị động viên là:",
                "options": {
                    "A": "Theo khả năng về sức khỏe, tuổi đời và nơi cư trú.",
                    "B": "Theo trình độ chuyên môn nghiệp vụ, theo nghề nghiệp",
                    "C": "Theo trình độ kỹ thuật, chiến thuật, chức vụ và sức khỏe.",
                    "D": "Theo trình độ chuyên nghiệp quân sự, chuyên môn kỹ thuật với chức danh biên chế"
                },
                "answer": "D"
            },
            {
                "id": 161,
                "category": "Chương 9",
                "question": "Xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc Một trong những nội dung xây dựng thế trận quốc phòng toàn dân",
                "options": {
                    "A": "Phân vùng chiến lược gắn với xây dựng các vùng kinh tế, dân cư.",
                    "B": "Phân vùng chiến lược gắn với xây dựng hậu phương chiến lược.",
                    "C": "Phân vùng chiến lược gắn với bố trí lực lượng quân sự mạnh.",
                    "D": "Phân vùng chiến lược gắn với xây dựng các tuyến phòng thủ."
                },
                "answer": "B"
            },
            {
                "id": 162,
                "category": "Chương 1",
                "question": "Tính toàn diện trong xây dựng nền quốc phòng toàn dân được thể hiện ở nội dung.",
                "options": {
                    "A": "Nền quốc phòng được tạo lập bằng sức mạnh mọi mặt, cả tiềm lực và thế trận quốc phòng.",
                    "B": "Xây dựng nền quốc phòng bằng sức mạnh tổng hợp của cả nước.",
                    "C": "Xây dựng nền quốc phòng bằng sức mạnh quân sự to lớn, kinh tế phát triển.",
                    "D": "Xây dựng nền quốc phòng bằng sức mạnh của nền kinh tế quốc dân."
                },
                "answer": "A"
            },
            {
                "id": 163,
                "category": "Chương 1",
                "question": "Một trong những nội dung xây dựng tiềm lực quân sự, trong xây dựng tiềm lực quốc phòng toàn dân là",
                "options": {
                    "A": "Kết hợp chặt chẽ xây dựng thế trận quốc phòng và chiến tranh nhân dân.",
                    "B": "Kết hợp chặt chẽ thế bố trí lực lượng và thế trận.",
                    "C": "Kết hợp chặt chẽ xây dựng thế trận quốc phòng toàn dân và an ninh nhân dân.",
                    "D": "Kết hợp chặt chẽ xây dựng thế trận quốc phòng và chiến tranh hiện đại của các quân binh chủng."
                },
                "answer": "C"
            },
            {
                "id": 164,
                "category": "Chương 1",
                "question": "Kết hợp kinh tế với quốc phòng - an ninh ở nước ta hiện nay, nhằm mục đích gì?",
                "options": {
                    "A": "Nhằm thực hiện tốt nhiệm vụ chiến lượcbảo vệ Tổ quốc đểphát triển kinh tế.",
                    "B": "Nhằm thực hiện tốt nhiệm vụ củng cố quốc phòng - quân sự.",
                    "C": "Nhằm thực hiện tốt hai nhiệm vụ chiến lược xây dựng CNXH và bảo vệ Tổ quốc.",
                    "D": "Nhằm thực hiện tốt nhiệm vụ chiến lược của đất nước, bảo vệ Tổ quốc và chế độ Xã hội Chủ Nghĩa."
                },
                "answer": "C"
            },
            {
                "id": 165,
                "category": "Chương 1",
                "question": "Thực hiện biện pháp \"tăng cường giáo dục quốc phòng\"trong xây dựng nền quốc phòng toàn dân một trong những nội dung giáo dục đó là gì?",
                "options": {
                    "A": "Giáo dục tình hình nhiệm vụ của cách mạng và nhiệm vụ quân sự.",
                    "B": "Giáo dục tình hình nhiệm vụ cách mạng, nhiệm vụ quốc phòng - an ninh",
                    "C": "Giáo dục ý thức quốc phòng, kỹ thuật quân sự.",
                    "D": "Giáo dục tình hình nhiệm vụ quốc phòng - an ninh nhân dân."
                },
                "answer": "B"
            },
            {
                "id": 166,
                "category": "Chương 1",
                "question": "Từ cơ sở nào, chúng ta xác định tính chất toàn dân của nền quốc phòng toàn dân?",
                "options": {
                    "A": "Từ truyền thống dân tộc ta trong chiến đấu chống giặc ngoại xâm.",
                    "B": "Từ bài học quí báu xây dựng lực lượng vũ trang nhân dân.",
                    "C": "Từ truyền thống dân tộc ta trong sự nghiệp dựng nước và giữ nước.",
                    "D": "Từ truyền thống dân tộc ta trong chiến đấu chống giặc ngoại xâm, gữi nước."
                },
                "answer": "C"
            },
            {
                "id": 167,
                "category": "Chương 1",
                "question": "Một trong những biện pháp chủ yếu xây dựng nền quốc phòng toàn dân là gì?",
                "options": {
                    "A": "Tăng cường giáo dục ý thức trách nhiệm của công dân về nhiêm vụ chiến lược",
                    "B": "Tăng cường giáo dục nghĩa vụ công dân.",
                    "C": "Tăng cường giáo dục quốc phòng.",
                    "D": "Tăng cường giáo dục nhiệm vụ quốc phòng và an ninh nhân dân."
                },
                "answer": "C"
            },
            {
                "id": 168,
                "category": "Chương 1",
                "question": "Trong xây dựng nền quốc phòng toàn dân, phải kết hợp thế trận quốc phòng toàn dân với thế trận an ninh nhân dân, vì lý do gì?",
                "options": {
                    "A": "Để đánh bại ý đồ xâm lược và lật đổ của kẻ thù.",
                    "B": "Để đánh bại mưu đồ của địch muốn kết hợp \"thù trong giặc ngoài\" để chống phá cách mạng nước ta.",
                    "C": "Để đánh bại thủ đoạn tạo dựng, tập hợp lực lượng của kẻ thù.",
                    "D": "Để đánh bại thủ đoạn liên kết tập hợp lực lượng trong và ngoài nước của kẻ thù phản động."
                },
                "answer": "B"
            },
            {
                "id": 169,
                "category": "Chương 1",
                "question": "Vị trí mối quan hệ của hai nhiệm vụ chiến lược xây dựng và bảo vệ Tổ quốc như thế nào?",
                "options": {
                    "A": "Quan hệ khăng khít tạo điều kiện cho nhau, nhiệm vụ xây dựng là hàng đầu.",
                    "B": "Trong khi đặt trọng tâm vào nhiệm vụ xây dựng CNXH chúng ta không một chút lơi lỏng nhiệm vụ bảo vệ Tổ quốc.",
                    "C": "Quan hệ đan chen nhau, nhiệm vụ xây dựng CNXH là quyết định.",
                    "D": "Trong khi đặt trọng tâm vào nhiệm vụ xây dựng CNXH cần củng cố và xây dựng LLVTND hùng mạnh để bảo vệ Tổ quốc, bảo vệ chế độ ."
                },
                "answer": "B"
            },
            {
                "id": 170,
                "category": "Chương 1",
                "question": "Một trong những biện pháp xây dựng nền quốc phòng toàn dân là gì?",
                "options": {
                    "A": "Thường xuyên chăm lo xây dựng các lực lượng vũ trang vững mạnh, nhất là quân đội nhân dân.",
                    "B": "Thường xuyên củng cố quốc phòng và lực lượng bộ đội thường trực.",
                    "C": "Thường xuyên chăm lo xây dựng các lực lượng vũ trang nhân dân vững mạnh toàn diện.",
                    "D": "Thường xuyên chăm lo xây dựng các lực lượng vững mạnh, nhất là LLVT và Công an nhân dân."
                },
                "answer": "C"
            },
            {
                "id": 171,
                "category": "Chương 1",
                "question": "Thực hiện biện pháp \"tăng cường giáo dục quốc phòng\" trong xây dựng nền quốc phòng toàn dân như thế nào?",
                "options": {
                    "A": "Giáo dục âm mưu, thủ đoạn, hành động của kẻ thù chống phá cách mạng.",
                    "B": "Giáo dục âm mưu, bản chất hiếu chiến của kẻ thù.",
                    "C": "Giáo dục để mọi người nhận rõ âm mưu, thủ đoạn của các thế lực thù địch đối với cách mạng nước ta.",
                    "D": "Giáo dục âm mưu, thủ đoạn, của kẻ thù khi tiến hành chiến tranh xâm lược."
                },
                "answer": "C"
            },
            {
                "id": 172,
                "category": "Chương 1",
                "question": "Cơ sở nào chúng ta xác định tính chất toàn dân của nền quốc phòng toàn dân?",
                "options": {
                    "A": "Từ qui luật lịch sử về vai trò quần chúng trong hoạt động xã hội.",
                    "B": "Từ vai trò của nhân dân trong lịch sử dựng nước giữ nước của dân tộc.",
                    "C": "Từ qui luật lịch sử về vai trò quần chúng nhân dân đối với sự phát triển của xã hội.",
                    "D": "Từ vai trò lịch sử của quần chúng nhân dân trong dành và giữ chính quyền."
                },
                "answer": "B"
            },
            {
                "id": 173,
                "category": "Chương 1",
                "question": "Tính chất nền quốc phòng của ta là toàn dân xuất phát từ đâu?",
                "options": {
                    "A": "Từ truyền thống dân tộc ta trong chiến đấu chống giặc ngoại xâm.",
                    "B": "Từ bài học quí báu xây dựng lực lượng vũ trang nhân dân.",
                    "C": "Từ truyền thống dân tộc ta trong sự nghiệp xây dựng và bảo vệ Tổ quốc.",
                    "D": "Từ truyền thống chống giặc ngoại xâm của dân tộc ta trong chiến đấu."
                },
                "answer": "C"
            },
            {
                "id": 174,
                "category": "Chương 1",
                "question": "Trong củng cố xây dựng nền quốc phòng toàn dân, lực lượng nào là nòng cốt?",
                "options": {
                    "A": "Quần chúng nhân dân lao động",
                    "B": "Lực lượng quân đội và công an.",
                    "C": "Lực lượng vũ trang nhân dân gồm thứ quân Bộ đội chủ lực, bộ đội địa phương và dân quân tự vệ.",
                    "D": "Lực lượng quân đội và công an nhân dân."
                },
                "answer": "C"
            },
            {
                "id": 175,
                "category": "Chương 1",
                "question": "Tính chất toàn dân của nền quốc phòng toàn dân. được biểu hiện tập trung như thế nào?",
                "options": {
                    "A": "Là nên quốc phòng mang tính giai cấp, nhân dân sâu sắc.",
                    "B": "Là nền quốc phòng của dân, do dân, vì dân.",
                    "C": "Là nền quốc phòng bảo vệ bảo vệ quyền lợi của dân.",
                    "D": "Là nên quốc phòng do nhân dân xây dựng, mang tính nhân dân sâu sắc."
                },
                "answer": "B"
            },
            {
                "id": 176,
                "category": "Chương 1",
                "question": "Một trong những quan điểm cơ bản xây dựng nền quốc phòng toàn dân là gì?",
                "options": {
                    "A": "Kết hợp chặt chẽ phát triển kinh tế xã hội với xây dựng quốc phòng an ninh bảo vệ Tổ quốc.",
                    "B": "Xây dựng CNXH phải kết hợp chặt chẽ với bảo vệ Tổ quốc XHCN.",
                    "C": "Kết hợp xây dựng kinh tế với quốc phòng.",
                    "D": "Kết hợp chặt chẽ phát triển kinh tế xã hội với xây dựng quốc phòng an ninh quốc phòng."
                },
                "answer": "B"
            },
            {
                "id": 177,
                "category": "Chương 1",
                "question": "Quan điểm quốc phòng toàn dân được thể hiện trong tổ chức dân quân tự vệ như thế nào?",
                "options": {
                    "A": "Xây dựng dân quân tự vệ là nhiệm vụ của mọi người dân, của các cấp, ngành .",
                    "B": "Thể hiện bằng sự tham gia đông đảo của toàn dân vào lực lượng dân quân tự vệ, trực tiếp làm nhiệm vụ bảo vệ Tổ quốc.",
                    "C": "Thể hiện băng việc xây dựng lực lượng dân quân tự vệ vững mạnh, rộng khắp.",
                    "D": "Thể hiện sự đóng góp của nội dung cho lực lượng dân quân tự vệ ngày càng vững mạnh."
                },
                "answer": "B"
            },
            {
                "id": 178,
                "category": "Chương 1",
                "question": "Tiềm lực kinh tế trong nội dung xây dựng tiềm lực quốc phòng toàn dân có vị trí gì?",
                "options": {
                    "A": "Là điều kiện vật chất bảo đảm cho sức mạnh quốc phòng.",
                    "B": "Là điều kiện vật chất bảo đảm cho xây dựng lực lượng vũ trang và thế trận quốc phòng.",
                    "C": "Là cơ sở vật chất đủ trang bị nền quốc phòng hiện đại.",
                    "D": "Là điều kiện vật chất bảo đảm cho xây dựng thế trận quốc phòng toàn dân và an ninh nhân dân."
                },
                "answer": "A"
            },
            {
                "id": 179,
                "category": "Chương 1",
                "question": "Quán triệt tính chất toàn diện trong xây dựng nền quốc phòng toàn dân, các cấp, ngành và toàn dân cần phải làm gì?",
                "options": {
                    "A": "Có ý thức trách nhiệm trong bảo vệ Tổ quốc, tích cực xây dựng nền quốc phòng, thế trận quốc phòng toàn dân.",
                    "B": "Có tinh thần trách nhiệm cao xây dựng lực lượng quốc phòng, thế trận quốc phòng toàn dân.",
                    "C": "Ý thức đầy đủ nhiệm vụ bảo vệ Tổ quốc, chủ động tích cực vận dụng vào lĩnh vực hoạt động cụ thể của mình, góp phần xây dựng nền quốc phòng toàn dân vững mạnh.",
                    "D": "Cả ý trên đều sai"
                },
                "answer": "C"
            },
            {
                "id": 180,
                "category": "Chương 1",
                "question": "Trong củng cố xây dựng nền quốc phòng toàn dân, lực lượng nào là nòng cốt?",
                "options": {
                    "A": "Quần chúng nhân dân lao động",
                    "B": "Lực lượng quân đội và công an.",
                    "C": "Lực lượng vũ trang nhân dân gồm thứ quân Bộ đội chủ lực, bộ đội địa phương và dân quân tự vệ.",
                    "D": "Lực lượng quân đội và công an nhân dân."
                },
                "answer": "C"
            },
            {
                "id": 181,
                "category": "Chương 10",
                "question": "Những vấn đề cơ bản về bảo vệ an ninh quốc gia và bảo đảm trật tự an toàn xã hội “Sự ổn định, phát triển bền vững của chế độ xã hội chủ nghĩa và Nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam, sự bất khả xâm phạm độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của Tổ quốc” là nội dung của khái niệm nào dưới đây?",
                "options": {
                    "A": "An ninh quốc gia.",
                    "B": "Trật tự an toàn xã hội.",
                    "C": "Bảo vệ an ninh quốc gia.",
                    "D": "Bảo đảm trật tự, an toàn xã hội."
                },
                "answer": "A"
            },
            {
                "id": 182,
                "category": "Chương 1",
                "question": "“Trạng thái xã hội có trật tự, kỷ cương trong đó mọi người được sống yên ổn trên cơ sở các quy phạm pháp luật và chuẩn mực đạo đứ",
                "options": {
                    "A": "An ninh quốc gia.",
                    "B": "Trật tự an toàn xã hội.",
                    "C": "Bảo vệ an ninh quốc gia.",
                    "D": "Bảo đảm trật tự, an toàn xã hội."
                },
                "answer": "B"
            },
            {
                "id": 183,
                "category": "Chương 1",
                "question": "“Phòng ngừ",
                "options": {
                    "A": "An ninh quốc gia.",
                    "B": "Trật tự an toàn xã hội.",
                    "C": "Bảo vệ an ninh quốc gia.",
                    "D": "Bảo đảm trật tự, an toàn xã hội."
                },
                "answer": "C"
            },
            {
                "id": 184,
                "category": "Chương 1",
                "question": "“Phòng ngừ",
                "options": {
                    "A": "An ninh quốc gia.",
                    "B": "Trật tự an toàn xã hội.",
                    "C": "Bảo vệ an ninh quốc gia.",
                    "D": "Bảo đảm trật tự, an toàn xã hội."
                },
                "answer": "D"
            },
            {
                "id": 185,
                "category": "Chương 1",
                "question": "Trong việc bảo vệ an ninh quốc gia và bảo đảm trật tự, an toàn xã hội, chủ thể nào dưới đây có trách nhiệm “đề ra đường lối chính sách và phương pháp đấu tranh đúng đắn và lãnh đạo chặt chẽ bộ máy Nhà nước các đoàn thể quần chúng thực hiện thắng lợi đường lối chính sách đó”?",
                "options": {
                    "A": "Đảng Cộng sản Việt Nam.",
                    "B": "Nhà nước CHXHCN Việt Nam.",
                    "C": "Các tổ chức xã hội.",
                    "D": "Các cá nhân."
                },
                "answer": "A"
            },
            {
                "id": 186,
                "category": "Chương 1",
                "question": "Chủ thể nào dưới đây có trách nhiệm “quản lý xã hội bằng pháp luật, phát huy vai trò tác dụng của chính quyền các cấp; phối kết hợp chức năng của các cơ quan Nhà nước vào việc bảo vệ an ninh quốc gia và bảo đảm trật tự, an toàn xã hội”?",
                "options": {
                    "A": "Đảng Cộng sản Việt Nam.",
                    "B": "Nhà nước CHXHCN Việt Nam.",
                    "C": "Các tổ chức xã hội.",
                    "D": "Các cá nhân."
                },
                "answer": "B"
            },
            {
                "id": 187,
                "category": "Chương 1",
                "question": "Lực lượng nào giữ vai trò nòng cốt trong việc bảo vệ an ninh quốc gia, bảo đảm trật tự, an toàn xã hội, bảo vệ Đảng, Nhà nướ",
                "options": {
                    "A": "Công an nhân dân.",
                    "B": "Quân đội nhân dân.",
                    "C": "Dân quân tự vệ.",
                    "D": "Các tổ chức xã hội."
                },
                "answer": "A"
            },
            {
                "id": 188,
                "category": "Chương 1",
                "question": "Lực lượng nào giữ vai trò nòng cốt trong việc: bảo vệ sự bất khả xâm phạm độc lập, chủ quyền, thống nhất toàn vẹn lãnh thổ của Tổ quốc; phối hợp với các lực lượng tham gia bảo vệ an ninh quốc gia và bảo đảm trật tự, an toàn xã hội?",
                "options": {
                    "A": "Công an nhân dân.",
                    "B": "Quân đội nhân dân.",
                    "C": "Dân quân tự vệ.",
                    "D": "Các tổ chức xã hội."
                },
                "answer": "B"
            },
            {
                "id": 189,
                "category": "Chương 1",
                "question": "Lực lượng nào giữ vai trò nòng cốt trong việc cùng toàn dân đánh giặc ở địa phương khi có chiến tranh?",
                "options": {
                    "A": "Công an nhân dân.",
                    "B": "Quân đội nhân dân.",
                    "C": "Dân quân tự vệ.",
                    "D": "Các tổ chức xã hội."
                },
                "answer": "C"
            },
            {
                "id": 190,
                "category": "Chương 1",
                "question": "Bảo vệ an ninh quốc gia và bảo đảm trật tự an toàn xã hội là nhiệm vụ của",
                "options": {
                    "A": "lực lượng công an nhân dân.",
                    "B": "lực lượng Quân đội nhân dân.",
                    "C": "lực lượng Dân quân tự vệ.",
                    "D": "toàn Đảng, toàn dân và toàn quân."
                },
                "answer": "D"
            },
            {
                "id": 191,
                "category": "Chương 1",
                "question": "Nội dung nào dưới đây không phản ánh đúng trách nhiệm của học sinh trong việc bảo vệ an ninh quốc gia và bảo đảm trật tự an toàn xã hội?",
                "options": {
                    "A": "Không tụ tập bạn bè để thực hiện hành vi vi phạm pháp luật.",
                    "B": "Tố giác những người có hành vi vi phạm pháp luật.",
                    "C": "Kịp thời ngăn chặn hành vi vi phạm pháp luật của bạn bè.",
                    "D": "Đề ra đường lối chính sách và phương pháp đấu tranh đúng đắn."
                },
                "answer": "D"
            },
            {
                "id": 192,
                "category": "Chương 1",
                "question": "Lợi dụng tình hình dịch Covid-19 đang diễn biến phức tạp, ông T và ông Q đã: tuyên truyền sai lệch chủ trương, đường lối chống dịch của Nhà nước; lôi kéo, xúi giụ",
                "options": {
                    "A": "Ông T.",
                    "B": "Ông Q.",
                    "C": "Anh M.",
                    "D": "Ông T và ông Q."
                },
                "answer": "C"
            },
            {
                "id": 193,
                "category": "Chương 1",
                "question": "K là học sinh lớp 10 của trường THPT X. Thông qua T (bạn học cùng lớp), K biết được một Group kín trên facebook chuyên nói xấu các giáo viên và kích động các vụ đánh nhau trong trường. Ngày 28/4/2021, admin của group đó có đăng bài, kêu gọi các thành viên trong nhóm cùng tổ chức đua xe vào vào tối ngày 30/4 trên phố, giải thưởng cho người chiến thắng sẽ là một tập “tem giấy” được tẩm chất LSD (một loại chấy gây ảo giác cực mạnh). Bài đăng của admin nhanh chóng nhận được sự hưởng ứng của nhiều thành viên trong nhóm. Nếu là K, trong trường hợp này, em nên lựa chọn cách ứng xử như thế nào?",
                "options": {
                    "A": "Không quan tâm, vì việc đó không ảnh hưởng gì tới mình.",
                    "B": "Bí mật báo cáo tới lãnh đạo nhà trường và cơ quan công an.",
                    "C": "Hào hứng tham gia cuộc đua xe để thể hiện bản thân.",
                    "D": "Rủ thêm các bạn khác cùng tham gia vào cuộc đua xe."
                },
                "answer": "B"
            },
            {
                "id": 194,
                "category": "Chương 1",
                "question": "Đọc thông tin dưới đây và trả lời câu hỏi: Anh B là chủ nhân của kênh YouTube có tên là “Ôi quê tôi”. Thời gian đầu, anh B thường đăng tải các video clip quảng bá hình ảnh đẹp của đất nước và con người Việt Nam. Tuy nhiên, để tăng số lượng người đăng kí kênh và số lượt view, anh B đã chuyển hướng sang dàn dựng, cắt ghép và đăng tải những video clip không đúng sự thật, xuyên tạc chủ trương, đường lối của Đảng và nhà nướ",
                "options": {
                    "A": "Anh",
                    "B": "Anh T.",
                    "C": "Cả anh B và T.",
                    "D": "Không có nhân vật nào."
                },
                "answer": "B"
            },
            {
                "id": 195,
                "category": "Chương 1",
                "question": "“Sự ổn định, phát triển bền vững của chế độ xã hội chủ nghĩa và nhà nước Cộng hoà xã hội chủ nghĩa Việt Nam, sự bất khả xâm phạm độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Tổ quốc”- đó là nội dung của khái niệm nào dưới đây?",
                "options": {
                    "A": "An ninh quốc gia.",
                    "B": "Bảo vệ an ninh quốc gia.",
                    "C": "Trật tự, an toàn xã hội.",
                    "D": "Bảo đảm trật tự, an toàn xã hội."
                },
                "answer": "A"
            },
            {
                "id": 196,
                "category": "Chương 1",
                "question": "Điền cụm từ thích hợp vào chỗ trống (….) trong khái niệm sau đây: “……là phòng ngừ",
                "options": {
                    "A": "An ninh quốc gia.",
                    "B": "Bảo vệ an ninh quốc gia.",
                    "C": "Trật tự, an toàn xã hội.",
                    "D": "Bảo đảm trật tự, an toàn xã hội."
                },
                "answer": "B"
            },
            {
                "id": 197,
                "category": "Chương 1",
                "question": "“Trạng thái xã hội bình yên, trong đó mọi người được sống yên trên cơ sở các quy tắc và chuẩn mực đạo đứ",
                "options": {
                    "A": "An ninh quốc gia.",
                    "B": "Bảo vệ an ninh quốc gia.",
                    "C": "Trật tự, an toàn xã hội.",
                    "D": "Bảo đảm trật tự, an toàn xã hội."
                },
                "answer": "C"
            },
            {
                "id": 198,
                "category": "Chương 1",
                "question": "Điền cụm từ thích hợp vào chỗ trống (….) trong khái niệm sau đây: “…. là phòng ngừ",
                "options": {
                    "A": "An ninh quốc gia.",
                    "B": "Bảo vệ an ninh quốc gia.",
                    "C": "Trật tự, an toàn xã hội.",
                    "D": "Bảo đảm trật tự, an toàn xã hội."
                },
                "answer": "D"
            },
            {
                "id": 199,
                "category": "Chương 1",
                "question": "Đảm bảo trật tự, an toàn xã hội không bao gồm hoạt động nào dưới đây?",
                "options": {
                    "A": "Giữ gìn trật tự công cộng, bảo đảm trật tự, an toàn giao thông.",
                    "B": "Đấu tranh phòng, chống tội phạm về trật tự, an toàn xã hội.",
                    "C": "Bảo vệ an ninh tư tưởng - văn hoá, an ninh dân tộc, tôn giáo.",
                    "D": "Phòng, chống thiên tai, dịch bệnh; bài trừ các tệ nạn xã hội."
                },
                "answer": "C"
            },
            {
                "id": 200,
                "category": "Chương 1",
                "question": "Bảo vệ an ninh quốc gia không bao gồm hoạt động nào dưới đây?",
                "options": {
                    "A": "Bảo vệ an ninh chính trị.",
                    "B": "Bảo vệ an ninh con người.",
                    "C": "Bảo vệ an ninh kinh tế.",
                    "D": "Bảo vệ môi trường."
                },
                "answer": "D"
            },
            {
                "id": 201,
                "category": "Chương 1",
                "question": "Nội dung nào dưới đây phản ánh đúng trách nhiệm của Đảng Cộng sản Việt Nam trong việc bảo vệ an ninh quốc gia và đảm bảo trật tự an toàn xã hội?",
                "options": {
                    "A": "Là lực lượng giữ vai trò nòng cốt.",
                    "B": "Tố cáo hành vi vi phạm pháp luật.",
                    "C": "Lãnh đạo trực tiếp, tuyệt đối về mọi mặt.",
                    "D": "Cung cấp thông tin cho cơ quan có thẩm quyền."
                },
                "answer": "C"
            },
            {
                "id": 202,
                "category": "Chương 1",
                "question": "Trong công tác bảo vệ an ninh quốc gia và đảm bảo trật tự an toàn xã hội, cơ quan nào dưới đây có trách nhiệm: quyết định các vấn đề chiến tranh và hoà bình, quy định về tình trạng khẩn cấp, ban hành Hiến pháp luật, nghị quyết…?",
                "options": {
                    "A": "Quốc hội.",
                    "B": "Chính phủ.",
                    "C": "Mặt trận Tổ quốc.",
                    "D": "Tòa án nhân dân tối cao."
                },
                "answer": "A"
            },
            {
                "id": 203,
                "category": "Chương 1",
                "question": "Trong công tác bảo vệ an ninh quốc gia và đảm bảo trật tự an toàn xã hội, cơ quan nào dưới đây có trách nhiệm: tổ chức thi hành Hiến pháp luật, nghị quyết và thống nhất quản lí?",
                "options": {
                    "A": "Quốc hội.",
                    "B": "Chính phủ.",
                    "C": "Mặt trận Tổ quốc.",
                    "D": "Tòa án nhân dân tối cao."
                },
                "answer": "B"
            },
            {
                "id": 204,
                "category": "Chương 1",
                "question": "Trong công tác bảo vệ an ninh quốc gia và đảm bảo trật tự an toàn xã hội, lực lượng vũ trang nhân dân giữ vai trò",
                "options": {
                    "A": "là lực lượng nòng cốt.",
                    "B": "là lực lượng xung kích.",
                    "C": "lãnh đạo trực tiếp về mọi mặt.",
                    "D": "lãnh đạo tuyệt đối về mọi mặt."
                },
                "answer": "A"
            },
            {
                "id": 205,
                "category": "Chương 1",
                "question": "Nội dung nào dưới đây phản ánh đúng trách nhiệm của công dân trong việc bảo vệ an ninh quốc gia và đảm bảo trật tự an toàn xã hội?",
                "options": {
                    "A": "Chấp hành chủ trương của Đảng, chính sách của Nhà nước.",
                    "B": "Thực hiện các biện pháp bảo vệ an ninh chính trị nội bộ",
                    "C": "Tổ chức thi hành Hiến pháp luật, nghị quyết của Quốc hội.",
                    "D": "Quyết định các vấn đề liên quan đến chiến tranh và hoà bình."
                },
                "answer": "A"
            },
            {
                "id": 206,
                "category": "Chương 1",
                "question": "Nội dung nào dưới đây không phản ánh đúngtrách nhiệm của công dân trong việc bảo vệ an ninh quốc gia và đảm bảo trật tự an toàn xã hội?",
                "options": {
                    "A": "Chấp hành nghiêm chỉnh chủ trương của Đảng, chính sách của Nhà nước.",
                    "B": "Tố cáo hành vi vi phạm pháp luật về an ninh quốc gia, trật tự, an toàn xã hội.",
                    "C": "Cộng tác với công an trong phòng, chống các hành vi vi phạm pháp luật.",
                    "D": "Tổ chức thi hành Hiến pháp luật, nghị quyết của Quốc hội và thống nhất quản lí."
                },
                "answer": "D"
            },
            {
                "id": 207,
                "category": "Chương 1",
                "question": "Nội dung nào dưới đây phản ánh đúng trách nhiệm của học sinh trong việc bảo vệ an ninh quốc gia và đảm bảo trật tự an toàn xã hội?",
                "options": {
                    "A": "Gương mẫu thực hiện các nội quy của nhà trường.",
                    "B": "Thực hiện các biện pháp bảo vệ an ninh chính trị nội bộ",
                    "C": "Tổ chức thi hành Hiến pháp luật, nghị quyết của Quốc hội.",
                    "D": "Quyết định các vấn đề liên quan đến chiến tranh và hoà bình."
                },
                "answer": "A"
            },
            {
                "id": 208,
                "category": "Chương 1",
                "question": "Hoạt động nào dưới đây thuộc phạm vi bảo vệ an ninh biên giới?",
                "options": {
                    "A": "Bảo vệ sự an toàn của các lãnh đạo cấp cao.",
                    "B": "Kiểm tra cột mốc biên giới quốc gia.",
                    "C": "Tuyên truyền về tác hại của chất thải nhựa.",
                    "D": "Dọn dẹp rác thải tại bờ biển."
                },
                "answer": "B"
            },
            {
                "id": 209,
                "category": "Chương 1",
                "question": "“Tố cáo hành vi vi phạm pháp luật về an ninh quốc gia, trật tự, an toàn xã hội; phát hiện, cung cấp kịp thời thông tin cho cơ quan có thẩm quyền” là trách nhiệm của",
                "options": {
                    "A": "Quốc hội.",
                    "B": "Chính phủ.",
                    "C": "lực lượng vũ trang.",
                    "D": "công dân."
                },
                "answer": "D"
            },
            {
                "id": 210,
                "category": "Chương 1",
                "question": "An ninh quốc gia:",
                "options": {
                    "A": "Là sự bình yên của đất nước, cuộc sống ấm no hạnh phúc của nhân dân Việt Nam.",
                    "B": "Là sự ổn định, phát triển bền vững của chế độ XHCN và Nhà nước CHXHCN Việt Nam.",
                    "C": "Là sự bất khả xâm phạm độc lập chủ quyền, thống nhất, toàn vẹn lãnh thổ Tổ quốc.",
                    "D": "Cả B và C đều đúng"
                },
                "answer": "D"
            }
        ]
    },
    "HP2": {
        "name": "HP2",
        "icon": "📗",
        "description": "Học phần 2",
        "questions": [
            {
                "id": 1,
                "category": "Chương 1",
                "question": "Đây là HP 2 TRẮC NGHIỆM HỌC PHẦN 2 DC1QP06 Bài 1: Phòng, chống chiến lược “diễn biến hòa bình”, bạo loạn lật đổ của các thế lực thù địch đối với cách mạng Việt Nam Một trong những giải pháp phòng chống chiến lược “diễn biến hòa bình”, bạo loạn lật đổ:",
                "options": {
                    "A": "Chăm lo xây dựng lực lượng vũ trang ở địa phương vững mạnh",
                    "B": "Xây dựng hệ thống chính trị cả nước vững mạnh toàn diện",
                    "C": "Đẩy mạnh công nghiệp hóa hiện đại hóa, chống tụt hậu kinh tế",
                    "D": "Xây dựng lòng yêu nước cho tuổi trẻ nhất là học sinh, sinh viên"
                },
                "answer": "A"
            },
            {
                "id": 2,
                "category": "Chương 1",
                "question": "“Bạo loạn lật đổ” là thủ đoạn gắn liền với:",
                "options": {
                    "A": "Chiến lươc “Diễn biến hòa bình”",
                    "B": "Biện pháp “Ngăn chặn chủ nghĩa cộng sản”",
                    "C": "Chiến lược “Phi quân sự”",
                    "D": "Chính sách “Cấm vận kinh tế, cô lập ngoại giao”"
                },
                "answer": "A"
            },
            {
                "id": 3,
                "category": "Chương 1",
                "question": "Nhiệm vụ cấp bách hàng đầu trong các nhiệm vụ QPAN ở nước ta là:",
                "options": {
                    "A": "Phòng chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ",
                    "B": "Phòng chống địch tiến công hỏa lực bằng vũ khí công nghệ cao",
                    "C": "Phòng chống địch lợi dụng vấn đề dân tộc, tôn giáo",
                    "D": "Phòng chống tội phạm, tệ nạn xã hội và bảo vệ an ninh quốc gia"
                },
                "answer": "A"
            },
            {
                "id": 4,
                "category": "Chương 1",
                "question": "Chủ nghĩa đế quốc và các thế lực thù địch kích động người H’Mông đòi thành lập khu tự trị riêng ở:",
                "options": {
                    "A": "Vùng Tây Bắc",
                    "B": "Vùng Tây Nguyên",
                    "C": "Vùng Đông Bắc",
                    "D": "Vùng Tây Nam Bộ"
                },
                "answer": "A"
            },
            {
                "id": 5,
                "category": "Chương 1",
                "question": "Lực lượng tiến hành bạo loạn lật đổ thường là:",
                "options": {
                    "A": "Lực lượng ly khai, đối lập trong nước hoặc cấu kết với nước ngoài",
                    "B": "Lực lượng đối lập phối hợp chặt chẽ với lực lượng ly khai bên ngoài",
                    "C": "Lực lượng ly khai phối hợp với lực lượng dân chủ, nhân quyền",
                    "D": "Lực lượng bất mãn chống đối trong nước cấu kết với kẻ thù từ bên ngoài"
                },
                "answer": "A"
            },
            {
                "id": 6,
                "category": "Chương 1",
                "question": "Thực hiện chiến lược “Diễn biến hòa bình”, chủ nghĩa đế quốc và các thế lực thù địch khích lệ lối sống tư sản, từng bước làm phai nhạt mục tiêu, lý tưởng xã hội chủ nghĩa ở tầng lớp:",
                "options": {
                    "A": "Thanh niên, nhất là sinh viên",
                    "B": "Học sinh, sinh viên thành thị",
                    "C": "Công nhân các khu công nghiệp",
                    "D": "Người dân nghèo ở thành thị"
                },
                "answer": "A"
            },
            {
                "id": 7,
                "category": "Chương 1",
                "question": "Bạo loạn lật đổ có thể xẩy ra ở nhiều nơi, nhiều vùng của đất nướ",
                "options": {
                    "A": "Các trung tâm chính trị, kinh tế",
                    "B": "Các khu công nghiệp tập trung",
                    "C": "Các trung tâm văn hóa, khoa học",
                    "D": "Các khu công nghệ, kỹ thuật cao"
                },
                "answer": "A"
            },
            {
                "id": 8,
                "category": "Chương 1",
                "question": "Thực hiện chiến lược “Diễn biến hòa bình” chống phá chủ nghĩa xã hội, chủ nghĩa đế quốc và các thế lực thù địch luôn coi Việt Nam là:",
                "options": {
                    "A": "Một trọng điểm",
                    "B": "Vấn đề cơ bản",
                    "C": "Một trọng tâm",
                    "D": "Vấn đề trọng điểm"
                },
                "answer": "A"
            },
            {
                "id": 9,
                "category": "Chương 1",
                "question": "Sau thất bại về chiến lược quân sự, chủ nghĩa đế quốc và các thế lực thù địch chuyển sang chiến lược “Diễn biến hòa bình” đối với Việt Nam từ năm:",
                "options": {
                    "A": "1975",
                    "B": "1979",
                    "C": "1973",
                    "D": "1976"
                },
                "answer": "A"
            },
            {
                "id": 10,
                "category": "Chương 1",
                "question": "Chủ nghĩa đế quốc và các thế lực thù địch thực hiện chiến lược “Diễn biến hòa bình” đối với Việt Nam từ khi nào?",
                "options": {
                    "A": "Sau thất bại chiến tranh xâm lược Việt Nam",
                    "B": "Khi đưa quân vào xâm lược miền Nam",
                    "C": "Sau biến động chế độ xã hội chủ nghĩa ở Liên Xô",
                    "D": "Khi Việt Nam tiến hành sự nghiệp đổi mới"
                },
                "answer": "A"
            },
            {
                "id": 11,
                "category": "Chương 1",
                "question": "Trong các nhiệm vụ quốc phòng - an ninh hiện nay ở nước ta, phòng, chống chiến lược “Diễn biến hòa bình” là:",
                "options": {
                    "A": "Nhiệm vụ cấp bách hàng đầu",
                    "B": "Nhiệm vụ thường xuyên hàng đầu",
                    "C": "Nhiệm vụ cơ bản hàng đầu",
                    "D": "Nhiệm vụ chiến lược hàng đầu"
                },
                "answer": "A"
            },
            {
                "id": 12,
                "category": "Chương 1",
                "question": "Nội dung nào sau đây là một trong những giải pháp phòng chống chiến lược “diễn biến hòa bình”, bạo loạn lật đổ?",
                "options": {
                    "A": "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước và chăm lo nâng cao đời sống vật chất, tinh thần cho nhân dân lao động",
                    "B": "Xây dựng Đảng vững mạnh, xây dựng tinh thần đoàn kết và xây dựng các tổ chức quần chúng vững mạnh",
                    "C": "Đẩy lùi các hủ tục lạc hậu, mê tín dị đoan và các tệ nạn xã hội, chăm lo đời sống vật chất, tinh thần cho nhân dân lao động.",
                    "D": "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước, chống nguy cơ lạc hậu về kinh tế, khắc phục các tiêu cực trong xã hội"
                },
                "answer": "A"
            },
            {
                "id": 13,
                "category": "Chương 1",
                "question": "Thủ đoạn trên lĩnh vực quốc phòng - an ninh trong chiến lược “Diễn biến hòa bình” là:",
                "options": {
                    "A": "Phủ nhận vai trò lãnh đạo của Đảng trong lĩnh vực quốc phòng - an ninh",
                    "B": "Mua chuộc cán bộ cao cấp của quân đội và lực lượng vũ trang",
                    "C": "Phủ nhận vai trò quốc phòng - an ninh trong sự nghiệp đổi mới",
                    "D": "Chia rẽ quân đội, công an, dân quân tự vệ và bộ đội biên phòng"
                },
                "answer": "A"
            },
            {
                "id": 14,
                "category": "Chương 1",
                "question": "Phòng chống chiến lược ‘diễn biến hòa bình’, bạo loạn lật đổ, chúng ta phải thực hiện giải pháp:",
                "options": {
                    "A": "Xây dựng cơ sở chính trị - xã hội vững mạnh về mọi mặt",
                    "B": "Đẩy mạnh công nghiệp hóa, chống nguy cơ tụt hậu kinh tế",
                    "C": "Đẩy lùi các hủ tục lạc hậu, mê tín dị đoan và các tệ nạn xã hội",
                    "D": "Xây dựng lòng yêu nước cho tuổi trẻ nhất là học sinh, sinh viên"
                },
                "answer": "A"
            },
            {
                "id": 15,
                "category": "Chương 1",
                "question": "Nhiệm vụ phòng chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ được xác định là nhiệm vụ:",
                "options": {
                    "A": "Cấp bách hàng đầu, thường xuyên và lâu dài",
                    "B": "Chủ yếu, cấp bách trước mắt cũng như lâu dài",
                    "C": "Cơ bản trong thời kỳ quá độ xã hội chủ nghĩa",
                    "D": "Trọng tâm lâu dài của cách mạng Việt Nam"
                },
                "answer": "A"
            },
            {
                "id": 16,
                "category": "Chương 1",
                "question": "Quan hệ giữa “Diễn biến hòa bình” và bạo loạn lật đổ:",
                "options": {
                    "A": "“Diễn biến hòa bình” là quá trình tạo nên những điều kiện, thời cơ cho bạo loạn lật đổ",
                    "B": "“Diễn biến hòa bình” là quá trình đưa đến nguyên nhân và điều kiện của bạo loạn lật đổ",
                    "C": "“Diễn biến hòa bình” là quá trình tạo yếu tố quyết định cho bạo loạn lật đổ.",
                    "D": "“Diễn biến hòa bình” là quá trình tạo thời cơ quan trọng nhất cho bạo loạn lật đổ"
                },
                "answer": "A"
            },
            {
                "id": 17,
                "category": "Chương 1",
                "question": "Trong chiến lược “Diễn biến hòa bình”, thủ đoạn về kinh tế được kẻ thù xác định là:",
                "options": {
                    "A": "Thủ đoạn mũi nhọn",
                    "B": "Thủ đoạn chủ yếu",
                    "C": "Thủ đoạn hàng đầu",
                    "D": "Thủ đoạn cơ bản"
                },
                "answer": "A"
            },
            {
                "id": 18,
                "category": "Chương 1",
                "question": "Chống phá về chính trị trong chiến lược “Diễn biến hòa bình”, kẻ thù âm mưu thực hiện:",
                "options": {
                    "A": "Xóa bỏ vai trò lãnh đạo của Đảng và chế độ xã hội chủ nghĩa",
                    "B": "Đối lập chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh",
                    "C": "Phủ định chủ nghĩa Mác-Lênin, xóa bỏ chủ nghĩa xã hội",
                    "D": "Đối lập nhiệm vụ kinh tế và quốc phòng, an ninh trật tự"
                },
                "answer": "A"
            },
            {
                "id": 19,
                "category": "Chương 1",
                "question": "Thực hiện thủ đoạn chống phá về chính trị trong chiến lược “Diễn biến hòa bình” đối với cách mạng Việt Nam, kẻ thù tiến hành:",
                "options": {
                    "A": "Kích động đòi thực hiện chế độ “đa nguyên chính trị, đa đảng đối lập”",
                    "B": "Phá vỡ khối đại đoàn kết toàn dân của các tổ chức chính trị, xã hội",
                    "C": "Chia rẽ nội bộ, kích động gây rối loạn các tổ chức trong xã hội",
                    "D": "Cô lập Đảng, Nhà nước với quân đội nhân dân và công an nhân dân."
                },
                "answer": "A"
            },
            {
                "id": 20,
                "category": "Chương 1",
                "question": "Để cùng cả nước phòng chống chiến lược “Diễn biến hòa bình”, bạo loạn lật đổ, sinh viên phải:",
                "options": {
                    "A": "Phát hiện và góp phần đấu tranh đánh bại mọi âm mưu, thủ đoạn của kẻ thù",
                    "B": "Đẩy mạnh sự nghiệp công nghiệp hóa, hiện đại hóa đưa đất nước phát triển",
                    "C": "Nâng cao đời sống vật chất, tinh thần cho công nhân và nhân dân lao động",
                    "D": "Chăm lo xây dựng lực lượng vũ trang ở địa phương vững mạnh toàn diện"
                },
                "answer": "A"
            },
            {
                "id": 21,
                "category": "Chương 1",
                "question": "Một trong những nội dung chống phá về kinh tế của chiến lược “Diễn biến hòa bình” là:",
                "options": {
                    "A": "Làm mất vai trò chủ đạo của kinh tế Nhà nước, từng bước lệ thuộc chủ nghĩa đế quốc",
                    "B": "Khuyến khích kinh tế nước ngoài phát triển giữ vai trò chủ đạo của kinh tế đất nước",
                    "C": "Kêu gọi kinh tế cá thể phát triển, từng bước đưa kinh tế tư nhân thay thế kinh tế quốc doanh",
                    "D": "Phát triển nhanh kinh tế tư bản Nhà nước, giữ vai trò chủ đạo của kinh tế đất nước"
                },
                "answer": "A"
            },
            {
                "id": 22,
                "category": "Chương 1",
                "question": "Chống phá trên lĩnh vực đối ngoại trong chiến lược “Diễn biến hòa bình” kẻ thù thực hiện thủ đoạn:",
                "options": {
                    "A": "Chia rẽ Việt Nam với Lào, Campuchia và các nước xã hội chủ nghĩa",
                    "B": "Chia rẽ Việt Nam với các nước tiến bộ, yêu chuộng hòa bình",
                    "C": "Chia rẽ Việt Nam với Lào và các nước xã hội chủ nghĩa còn lại",
                    "D": "Chia rẽ Việt Nam với Campuchia và các nước tiến bộ trên thế giới"
                },
                "answer": "A"
            },
            {
                "id": 23,
                "category": "Chương 1",
                "question": "Thực hiện thủ đoạn “Diễn biến hòa bình” về văn hó",
                "options": {
                    "A": "Bản sắc văn hóa và giá trị văn hóa của dân tộc Việt Nam",
                    "B": "Truyền thống kinh nghiệm của văn hóa Việt Nam",
                    "C": "Những sản phẩm văn hóa quý báu của chúng ta",
                    "D": "Nền văn hóa và sản phẩm văn hóa dân tộc Việt Nam"
                },
                "answer": "A"
            },
            {
                "id": 24,
                "category": "Chương 1",
                "question": "Thực hiện thủ đoạn trong lĩnh vực tôn giáo - dân tộc của chiến lược “Diễn biến hòa bình”, kẻ thù lợi dụng vấn đề dân tộc để kích động tư tưởng:",
                "options": {
                    "A": "Đòi li khai, tự quyết dân tộc",
                    "B": "Chia rẽ các dân tộc, gây mâu thuẫn",
                    "C": "Đòi biểu tình, ly khai lập khu tự trị",
                    "D": "Gây mâu thuẫn giữa các dân tộc"
                },
                "answer": "A"
            },
            {
                "id": 25,
                "category": "Chương 1",
                "question": "Thực hiện thủ đoạn “Diễn biến hòa bình” trong lĩnh vực tôn giáo - dân tộ",
                "options": {
                    "A": "Truyền đạo trái phép nhằm thực hiện âm mưu tôn giáo hóa dân tộc",
                    "B": "Truyền bá mê tín dị đoan và tư tưởng phản động chống chủ nghĩa xã hội",
                    "C": "Tuyên truyền để tập hợp lực lượng phản động chống phá cách mạng",
                    "D": "Xây dựng lực lượng phản động làm tay sai chống phá cách mạng"
                },
                "answer": "A"
            },
            {
                "id": 26,
                "category": "Chương 1",
                "question": "Phòng chống chiến lược “diễn biến hòa bình”, bạo loạn lật đổ ở nước ta hiện nay, chúng ta phải thực hiện giải pháp:",
                "options": {
                    "A": "Nâng cao nhận thức về âm mưu, thủ đoạn của các thế lực thù địch , nắm chắc mọi diễn biến không để bị động và bất ngờ.",
                    "B": "Nâng cao tinh thần yêu nước, hăng hái lao động sản xuất và tích cực phòng chống thiên tai cho nhân dân",
                    "C": "Nâng cao đời sống vật chất, tinh thần cho nhân dân, đẩy lùi các hủ tục lạc hậu, mê tín dị đoan và các tệ nạn xã hội",
                    "D": "Nâng cao ý thức dân tộc, yêu Tổ quốc, yêu đồng bào, trách nhiệm công dân cho tuổi trẻ nhất là học sinh, sinh viên"
                },
                "answer": "A"
            },
            {
                "id": 27,
                "category": "Chương 1",
                "question": "Trong chiến lược “Diễn biến hòa bình”, đối với quân đội, công an, các thế lực thù địch chủ trương vô hiệu hóa sự lãnh đạo của Đảng với luận điểm:",
                "options": {
                    "A": "Phi chính trị hóa",
                    "B": "Công cụ hóa",
                    "C": "Lực lượng hóa",
                    "D": "Xã hội hóa"
                },
                "answer": "A"
            },
            {
                "id": 28,
                "category": "Chương 1",
                "question": "Trong quá trình bạo loạn, bọn phản động tìm mọi cách để mở rộng:",
                "options": {
                    "A": "Pham vi, quy mô, lực lượng, kêu gọi tài trợ của nước ngoài",
                    "B": "Quy mô, lực lượng, kêu gọi nước ngoài can thiệp quân sự",
                    "C": "Lực lượng, uy hiếp chính quyền địa phương, trung ương",
                    "D": "Phạm vi, lực lượng, đập phá trụ sở Đảng, chính quyền"
                },
                "answer": "A"
            },
            {
                "id": 29,
                "category": "Chương 1",
                "question": "Một trong những mục tiêu phòng chống chiến lược “Diễn biến hoà bình”:",
                "options": {
                    "A": "Bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ",
                    "B": "Giữ vững ổn định chính trị trên cơ sở độc lập chủ quyền dân tộc",
                    "C": "Bảo vệ vững chắc độc lập, chủ quyền của quốc gia, dân tộc",
                    "D": "Bảo vệ vững chắc chế độ nhà nước Việt Nam xã hội chủ nghĩa"
                },
                "answer": "A"
            },
            {
                "id": 30,
                "category": "Chương 1",
                "question": "Các thế lực thù địch lợi dụng gây rối để:",
                "options": {
                    "A": "Mở màn cho bạo loạn lật đổ",
                    "B": "Mở đầu cho hành động phá hoại",
                    "C": "Làm mất an ninh chính trị",
                    "D": "Mở màn cho hoạt động phá hoại"
                },
                "answer": "A"
            },
            {
                "id": 31,
                "category": "Chương 2",
                "question": "Một số nội dung cơ bản về dân tộ",
                "options": {
                    "A": "Nâng cao đời sống đồng bào các DT thiểu số, giữ gìn bản sắc VH",
                    "B": "Khuyến khích đầu tư phát triển kinh tế ở vùng biên giới hải đảo",
                    "C": "Đào tạo nguồn nhân lực là con em đồng bào Dân tộc thiểu số",
                    "D": "Phương án B và C"
                },
                "answer": "A"
            },
            {
                "id": 32,
                "category": "Chương 1",
                "question": "Đảng ta có quan điểm về vấn đề Dân tộc và đại đoàn kết Dân tộc như thế nào trong sự nghiệp cách mạng của nước ta?",
                "options": {
                    "A": "Tất cả các phương án",
                    "B": "Quy hoạch lại dân cư, gắn phát triển KT với bảo đảm QPAN",
                    "C": "Cùng nhau thực hiện thắng lợi sự nghiệp XD và BVTQ",
                    "D": "Chăm lo đời sống vật chất tinh thần, phát huy bản sắc VH Dân tộc"
                },
                "answer": "A"
            },
            {
                "id": 33,
                "category": "Chương 1",
                "question": "Quan điểm của Đảng ta về Dân tộc và đoàn kết Dân tộc hiện nay cóvị trí như thế nào?",
                "options": {
                    "A": "Có vị trí chiến lược trong sự nghiệp cách mạng",
                    "B": "Quan trọng trong việc chống phân biệt, giai cấp, dân tộc",
                    "C": "Đặc biệt quan trọng trong xây dựng đại đoàn kết dân tộc",
                    "D": "Tất cả các phương án"
                },
                "answer": "A"
            },
            {
                "id": 34,
                "category": "Chương 1",
                "question": "Một trong những quan điểm chính sách của Đảng về quan hệ các dân tộc được đặt ra trong đại hội Đảng lần thứ X là gì?",
                "options": {
                    "A": "Bình đẳng, đoàn kết tôn trọng giúp đỡ nhau cùng tiến bộ",
                    "B": "Mọi quyền lợi về kinh tế giữa các DT phải được công khai",
                    "C": "Không đối xử phân biệt địa vị chính trị giữa các dân tộc",
                    "D": "Tất cả các phương án"
                },
                "answer": "A"
            },
            {
                "id": 35,
                "category": "Chương 1",
                "question": "Đai hội Đảng lần thứ X đã đề ra quan điểm, chính sách trọng tâm đối với các Dân tộc ở Việt nam như thế nào?",
                "options": {
                    "A": "Ưu tiên đào tạo bồi dưỡng cán bộ, trí thức là người dân tộc thiểu số",
                    "B": "Bài trừ tư tưởng cục bộ, hẹp hòi hoặc tư tưởng phân biệt Dân tộc,",
                    "C": "Động viên trí thức là người Dân tộc thiểu số về công tác tại địa phương",
                    "D": "Tất cả các phương án"
                },
                "answer": "A"
            },
            {
                "id": 36,
                "category": "Chương 1",
                "question": "Đai hội Đảng lần thứ X đã đề ra quan điểm, chính sách phát triển, ổn định các Dân tộc ở Việt nam như thế nào?",
                "options": {
                    "A": "Phát triển KT, chăm lo đời sống VC, tinh thần cho nhân dân",
                    "B": "Xây dựng phát triển văn hóa, x hội cho đồng bào các Dân tộc",
                    "C": "Bảo đảm thông tin, giao thông phát triển kinh tế vùng sâu, vùng xa",
                    "D": "Phương án A và B"
                },
                "answer": "A"
            },
            {
                "id": 37,
                "category": "Chương 1",
                "question": "Nội dung văn kiện Đại hội Đảng lần thứ X chỉ ra một số nội dung quan điểm về chính sách phát triển kinh tế xã hội dân tộc như thế nào?",
                "options": {
                    "A": "Phát triển, KT–XH ở miền núi, vùng sâu, vùng xa, biên giới, căn cứ cách mạng",
                    "B": "Quan tâm xây dựng các nhà máy công nghiệp ở miền núi",
                    "C": "Đầu tư vững mạnh cho y tế, giáo dục, giao thông miền núi",
                    "D": "Tất cả các phương án"
                },
                "answer": "A"
            },
            {
                "id": 38,
                "category": "Chương 1",
                "question": "Trong Đại hội Đảng lần thứ X đã chỉ ra các quan điểm chính sách dân tộc là gì?",
                "options": {
                    "A": "Làm tốt cụng tác định canh định cư và xây dựng kinh tế mới",
                    "B": "Vận động nhân dân thực hiện canh tác truyền thống",
                    "C": "Duy trì tất cả các chính sách về xây dựng kinh tế mới",
                    "D": "Tất cả các phương án"
                },
                "answer": "A"
            },
            {
                "id": 39,
                "category": "Chương 1",
                "question": "Trong nội dung văn kiện Đại hội Đảng lần thứ X đã chỉ ra những quan điểm nào về chính sách dân tộc?",
                "options": {
                    "A": "Quy hoạch, phân bổ, sắp xếp lại dân cư vùng thiểu số",
                    "B": "Xây dựng kế hoạch hóa gia đinh vùng dân tộc thiểu số",
                    "C": "Thực hiện tốt các chính sách động viên nhân dân sống định canh",
                    "D": "Phương án A và C"
                },
                "answer": "A"
            },
            {
                "id": 40,
                "category": "Chương 1",
                "question": "Nội dung văn kiện Đại hội Đảng lần thứ X chỉ ra những quan điểm về chính sách dân tộc như thế nào?",
                "options": {
                    "A": "Ưu tiên đào tạo, bồi dưỡng con em các dân tộc, thiểu số",
                    "B": "Ưu tiên cử cán bộ có kinh nghiệm vùng đồng bào dân tộc thiểu số",
                    "C": "Ưu tiên phát hiện nhân lực là nguồn đồng bào thiểu số",
                    "D": "Phương án B và C"
                },
                "answer": "A"
            },
            {
                "id": 41,
                "category": "Chương 1",
                "question": "Trong nội dung văn kiện Đại hội Đảng lần thứ X đã chỉ ra quan điểm về vai trò của cán bộ trong chính sách dân tộc là gì?",
                "options": {
                    "A": "Cán bộ phải hiểu phong tục, tập quán, tiếng nói , làm tốt công tác dân vận",
                    "B": "Tạo nguồn cán bộ phải biết tuyên truyền vận động quần chúng",
                    "C": "Cử cán bộ có khả năng và trình độ công tác lâu dài vùng đồng bảo dân tộc thiểu số",
                    "D": "Phương án A và C"
                },
                "answer": "A"
            },
            {
                "id": 42,
                "category": "Chương 1",
                "question": "Trong nội dung văn kiện Đại hội Đảng lần thứ X quan điểm phòng chống về vấn đề dân tộc như thế nào?",
                "options": {
                    "A": "Chống biểu hiện kì thị, hẹp hòi, chia rẽ dân tộc",
                    "B": "Đấu tranh với biểu hiện ích kỷ, hẹp hỏi, phá hoại đoàn kết",
                    "C": "Phương án A và D",
                    "D": "Bài trừ tư tưởng phân biệt địa vị xã hội giữa các dân tộc"
                },
                "answer": "A"
            },
            {
                "id": 43,
                "category": "Chương 1",
                "question": "Trong đời sống xã hội, tôn giáo là tổ chức có qui mô, hoạt động như thế nào?",
                "options": {
                    "A": "Là một cộng đồng xã hội",
                    "B": "Là tổ chức chính trị, xã hội",
                    "C": "Là một tập thể dân cư tín ngưỡng",
                    "D": "Là một bộ phận người tín ngưỡng mê tín"
                },
                "answer": "A"
            },
            {
                "id": 44,
                "category": "Chương 1",
                "question": "Hiện tượng, ý thứ",
                "options": {
                    "A": "Hành vi cuồng vọng",
                    "B": "Tư tưởng cực đoạn",
                    "C": "Hành vi mê muội",
                    "D": "Hiện tượng ảo giác"
                },
                "answer": "A"
            },
            {
                "id": 45,
                "category": "Chương 1",
                "question": "Hoạt động xã hội của tôn giáo thông qua những yếu tố nào?",
                "options": {
                    "A": "Hệ thống giáo lý",
                    "B": "Nghi lễ ôn giáo",
                    "C": "Tổ chức tôn giáo",
                    "D": "Tất cả các phương án"
                },
                "answer": "D"
            },
            {
                "id": 46,
                "category": "Chương 1",
                "question": "Hoạt động xã hội tôn giáo bị chi phối bởi những yếu tố nào?",
                "options": {
                    "A": "Tổ chức tôn giáo",
                    "B": "Nghi lễ tôn giáo",
                    "C": "Cuồng tín của tín đồ",
                    "D": "Phương án A và B"
                },
                "answer": "D"
            },
            {
                "id": 47,
                "category": "Chương 1",
                "question": "Những yếu tố nào liên quan đến hoạt động xã hội của tôn giáo?",
                "options": {
                    "A": "Giáo sĩ tín đồ, cơ sở vật chất tôn giáo",
                    "B": "Quy định pháp luật về hoạt động tôn giáo",
                    "C": "Niềm tin nơi tôn giáo",
                    "D": "Tất cả các phương án"
                },
                "answer": "A"
            },
            {
                "id": 48,
                "category": "Chương 1",
                "question": "Hoạt động xã hội của tôn giáo không thể hoạt động khi thiếu yếu tố nào sau đây?",
                "options": {
                    "A": "Tổ chức của tôn giáo",
                    "B": "Sự cuồng tín của tín đồ",
                    "C": "Hệ thống giáo lý",
                    "D": "Phương án A và C"
                },
                "answer": "D"
            },
            {
                "id": 49,
                "category": "Chương 1",
                "question": "Theo quan điểm của Đảng nhà nước ta, hoạt động mê tín dị đoan phải được giải quyết như thế nào?",
                "options": {
                    "A": "Bài trừ",
                    "B": "Làm giảm hoạt động mê tín dị đoan",
                    "C": "Để hoạt động tự nhiên",
                    "D": "Để tự tiêu tan"
                },
                "answer": "A"
            },
            {
                "id": 50,
                "category": "Chương 1",
                "question": "So sánh với tôn giáo, mê tín dị đoan thực chất là hoạt động gì?",
                "options": {
                    "A": "Tệ nạn xã hội",
                    "B": "Buôn thần bán thánh",
                    "C": "Mê muội mù quáng",
                    "D": "Lừa đảo chiếm đoạt"
                },
                "answer": "A"
            },
            {
                "id": 51,
                "category": "Chương 1",
                "question": "Tôn giáo được hình thành từ những yếu tố cơ bản nào?",
                "options": {
                    "A": "Tất cả các phương án",
                    "B": "Nguồn gốc kinh tế x hội",
                    "C": "Nguồn gốc nhận thức tôn giáo",
                    "D": "Nguồn gốc tâm lý tôn giáo"
                },
                "answer": "A"
            },
            {
                "id": 52,
                "category": "Chương 1",
                "question": "Một trong những nguồn gốc hình thành tôn giáo trong xã hội là yếu tố nào?",
                "options": {
                    "A": "Nguồn gốc kinh tế x hội",
                    "B": "Nguồn gốc từ quần chúng",
                    "C": "Nguồn gốc từ chính trị",
                    "D": "Nguồn gốc từ lịch sử"
                },
                "answer": "A"
            },
            {
                "id": 53,
                "category": "Chương 1",
                "question": "Yếu tố nào là nguồn gốc hình thành tôn giáo trong xã hội ?",
                "options": {
                    "A": "Nguồn gốc nhận thức",
                    "B": "Nguồn gốc chính trị",
                    "C": "Nguồn gốc tư tưởng",
                    "D": "Nguồn gốc đạo đức"
                },
                "answer": "A"
            },
            {
                "id": 54,
                "category": "Chương 1",
                "question": "Nguồn gốc nào là yếu tố hình thành tôn giáo trong xã hội ?",
                "options": {
                    "A": "Nguồn gốc tâm lý",
                    "B": "Nguồn gốc lịch sử",
                    "C": "Hoang đường ảo tưởng",
                    "D": "Sức khỏe yếu đuối"
                },
                "answer": "A"
            },
            {
                "id": 55,
                "category": "Chương 1",
                "question": "Quá trình hoạt động của tôn giáo trong x hội được bộc lộ ra tính chất nào?",
                "options": {
                    "A": "Tất cả các phương án",
                    "B": "Tính lịch sử",
                    "C": "Tính quần chúng",
                    "D": "Tính chính trị"
                },
                "answer": "A"
            },
            {
                "id": 56,
                "category": "Chương 1",
                "question": "Một trong những tính chất của tôn giáo được bộc lộ trong đời sống xã hội là gì?",
                "options": {
                    "A": "Tính quần chúng",
                    "B": "Tính chiến đấu",
                    "C": "Tính phê phán cái ác",
                    "D": "Tính kinh tế xã hội"
                },
                "answer": "A"
            },
            {
                "id": 57,
                "category": "Chương 1",
                "question": "Trong xã hội có phân chia giai cấp tôn giáo thường bộc lộ ra tính chất gì?",
                "options": {
                    "A": "Tính chính trị",
                    "B": "Tính văn hóa x hội",
                    "C": "Tính dân tộc",
                    "D": "Tính giai cấp"
                },
                "answer": "A"
            },
            {
                "id": 58,
                "category": "Chương 1",
                "question": "Các tôn giáo thường mang tính chất nào sau đây?",
                "options": {
                    "A": "Tính chất lịch sử",
                    "B": "Tính chất địa lý",
                    "C": "Tính x hội",
                    "D": "Tính chất tự nhiên"
                },
                "answer": "A"
            },
            {
                "id": 59,
                "category": "Chương 1",
                "question": "Quan điểm chủ nghĩa Mác – Lênin về giải quyết vấn đề tôn giáo trong cách mạng xã hội chủ nghĩa là gì?",
                "options": {
                    "A": "Tất cả các phương án",
                    "B": "Giải quyết vấn đề tôn giáo phải gắn liền với cải tạo x hội cũ",
                    "C": "Tôn trọng và bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng",
                    "D": "Quán triệt quan điểm lịch sử khi giải quyết vấn đề tôn giáo"
                },
                "answer": "A"
            },
            {
                "id": 60,
                "category": "Chương 1",
                "question": "Nội dung cốt lõi trong công tác tôn giáo của Đảng là công tác vận động quần chúng như thế nào?",
                "options": {
                    "A": "Sống tốt đời đẹp đạo",
                    "B": "Sống đùm bọc giúp đỡ nhau",
                    "C": "Sống tự do tín ngưỡng",
                    "D": "Tất cả các phương án"
                },
                "answer": "A"
            },
            {
                "id": 61,
                "category": "Chương 3",
                "question": "Phòng, chống vi phạm pháp luật về bảo vệ môi trường Bảo vệ môi trường là gì?",
                "options": {
                    "A": "Là hoạt động giữ gìn, phòng ngừa, hạn chế các tác động xấu đến môi trường; ứng phó sự cố môi trường; khắc phục ô nhiễm, suy thoái, cải thiện, phục hồi môi trường; khai thác, sử dụng hợp lý tài nguyên thiên nhiên nhằm giữ môi trường trong lành",
                    "B": "Là hoạt động khai thác, sử dụng hợp lý tài nguyên thiên nhiên nhằm giữ môi trường trong lành.",
                    "C": "Là hoạt động khắc phục ô nhiễm, suy thoái, cải thiện, phục hồi môi trường; khai thác, sử dụng hợp lý tài nguyên thiên nhiên nhằm giữ môi trường trong lành.",
                    "D": "Là hoạt động ứng phó sự cố môi trường; khắc phục ô nhiễm, suy thoái, cải thiện, phục hồi môi trường; khai thác, sử dụng hợp lý tài nguyên thiên nhiên nhằm giữ môi trường trong lành"
                },
                "answer": "A"
            },
            {
                "id": 62,
                "category": "Chương 1",
                "question": "Bảo vệ môi trường là nội dung như thế nào trong đường lối, chủ trương của Đảng và Nhà nước ta?",
                "options": {
                    "A": "Cơ bản không thể tách rời.",
                    "B": "Vô cùng quan trọng.",
                    "C": "Rất quan trọng.",
                    "D": "Quan trọng."
                },
                "answer": "A"
            },
            {
                "id": 63,
                "category": "Chương 1",
                "question": "Đâu là quy định của pháp luật về bảo vệ môi trường?",
                "options": {
                    "A": "Pháp luật về tổ chức, quản lý các hoạt động về bảo vệ môi trường.",
                    "B": "Pháp luật lấy xử lý vi phạm làm nguyên tắc chủ đạo, kết hợp với xử lý ô nhiễm, cải thiện môi trường, bảo tồn đa dạng sinh học, bảo vệ và sử dụng hợp lí tài nguyên thiên nhiên; phát huy năng lực nội sinh, đẩy mạnh hợp tác quốc tế về bảo vệ môi trường.",
                    "C": "Pháp luật hướng đến giữ gìn môi trường luôn trong lành.",
                    "D": "Pháp luật về phòng ngừa và ngặn chặn làm nguyên tắc chủ đạo, kết hợp với xử lý ô nhiễm, cải thiện môi trường, bảo tồn đa dạng sinh học, bảo vệ và sử dụng hợp lý tài nguyên thiên nhiên; phát huy năng lực nội sinh, đẩy mạnh hợp tác quốc tế về bảo vệ môi trường."
                },
                "answer": "A"
            },
            {
                "id": 64,
                "category": "Chương 1",
                "question": "Pháp luật bảo vệ môi trường là gì?",
                "options": {
                    "A": "Là hệ thống các văn bản pháp luật quy định những quy tắc xử sự do Nhà nước ban hành hoặc thừa nhận nhằm giữ gìn, phòng ngừa, hạn chế các tác động xấu đến môi trường; ứng phó sự cố môi trường; khắc phục ô nhiễm, suy thoái, cải thiện, phục hồi môi trường; khai thác, sử dụng hợp lý tài nguyên thiên nhiên nhằm giữ môi trường trong lành.",
                    "B": "Là hệ thống các văn bản pháp luật quy định những quy tắc xử sự do Nhà nước ban hành nhằm giữ gìn, phòng ngừa, hạn chế các tác động xấu đến môi trường; ứng phó sự cố môi trường; khắc phục ô nhiễm, suy thoái, cải thiện, phục hồi môi trường; khai thác, sử dụng hợp lý tài nguyên thiên nhiên nhằm giữ môi trường trong lành.",
                    "C": "Là hệ thống các văn bản pháp luật quy định những quy tắc xử sự do Nhà nước ban hành.",
                    "D": "Là hệ thống các văn bản pháp nhằm giữ môi trường trong lành."
                },
                "answer": "A"
            },
            {
                "id": 65,
                "category": "Chương 1",
                "question": "Mục đích của pháp luật về bảo vệ môi trường là gì?",
                "options": {
                    "A": "Nhằm giữ môi trường luôn sạch sẽ.",
                    "B": "Nhằm giữ môi trường luôn không bị ô nhiễm.",
                    "C": "Nhằm giữ môi trường luôn Xanh – Sạch – Đẹp.",
                    "D": "Nhằm giữ môi trường trong lành."
                },
                "answer": "D"
            },
            {
                "id": 66,
                "category": "Chương 1",
                "question": "Pháp luật có vai trò như thế nào trong công tác bảo vệ môi trường?",
                "options": {
                    "A": "Rất quan trọng.",
                    "B": "Quan trọng.",
                    "C": "Cơ bản quan trọng.",
                    "D": "Vô cùng quan trọng."
                },
                "answer": "A"
            },
            {
                "id": 67,
                "category": "Chương 1",
                "question": "Môi trường bị hủy hoại chủ yếu là do vấn đề gì?",
                "options": {
                    "A": "Sự “tác động quá mức” của con người đối với các thành phần cấu tạo nên môi trường tự nhiên",
                    "B": "Do con người thờ ơ với với việc bảo vệ môi trường.",
                    "C": "Do con người khai thác quá mức nguồn tài nguyên.",
                    "D": "Do nhiều yếu tố tạo thành, cả tự nhiên và nhân tạo."
                },
                "answer": "B"
            },
            {
                "id": 68,
                "category": "Chương 1",
                "question": "Trong công tác bảo vệ môi trường pháp luật có vai trò gì?",
                "options": {
                    "A": "Pháp luật quy định những quy tắc xử sự mà con người phải thực hiện khi khai thác và sử dụng các yếu tố (thành phần) của môi trường. Pháp luật quy định chức năng, nhiệm vụ, quyền hạn của các cơ quan, tố chức, cá nhân tham gia bảo vệ môi trường.",
                    "B": "Pháp luật quy hệ thống các quy chuẩn môi trường, tiêu chuẩn môi trường để bảo đảm môi trường. Giải quyết các tranh chấp liên quan đến bảo vệ môi trường.",
                    "C": "Phát luật quy định các chế tài hình sự, buộc các cá nhân, tố chức phải thực hiện đầy đủ các yêu cầu đòi hòi pháp luật trong việc khai thác, sử dụng các yếu tố của môi trường.",
                    "D": "Phát luật quy định các chế dân sự buộc các tố chức phải thực hiện đầy đủ các yêu cầu đòi hòi pháp luật trong việc khai thác, sử dụng các yếu tố của môi trường."
                },
                "answer": "A"
            },
            {
                "id": 69,
                "category": "Chương 1",
                "question": "Trong công tác bảo vệ môi trường pháp luật có mấy vai trò?",
                "options": {
                    "A": "7.",
                    "B": "4.",
                    "C": "5.",
                    "D": "3"
                },
                "answer": "C"
            },
            {
                "id": 70,
                "category": "Chương 1",
                "question": "Đâu là quy định của pháp luật về bảo vệ môi trường?",
                "options": {
                    "A": "Pháp luật xử lý vi phạm trong lĩnh vực bảo vệ môi trường.",
                    "B": "Pháp luật lấy xử lý vi phạm làm nguyên tắc chủ đạo, kết hợp với xử lý ô nhiễm, cải thiện môi trường, bảo tồn đa dạng sinh học, bảo vệ và sử dụng hợp lí tài nguyên thiên nhiên; phát huy năng lực nội sinh, đẩy mạnh hợp tác quốc tế về bảo vệ môi trường.",
                    "C": "Pháp luật hướng đến giữ gìn môi trường luôn trong lành.",
                    "D": "Pháp luật về phòng ngừa và ngặn chặn làm nguyên tắc chủ đạo, kết hợp với xử lý ô nhiễm, cải thiện môi trường, bảo tồn đa dạng sinh học, bảo vệ và sử dụng hợp lý tài nguyên thiên nhiên; phát huy năng lực nội sinh, đẩy mạnh hợp tác quốc tế về bảo vệ môi trường."
                },
                "answer": "A"
            },
            {
                "id": 71,
                "category": "Chương 1",
                "question": "Tội phạm môi trường là gì?",
                "options": {
                    "A": "Là hành vi nguy hiểm cho xã hội được quy định trong Bộ luật hình sự, do người có năng lực trách nhiệm hình sự hoặc pháp nhân thương mại thực hiện một cách cố ý hoặc vô ý xâm phạm đến các quy định của Nhà nước về bảo vệ môi trường, xâm phạm đến các thành phần của môi trường làm thay đổi trạng thái, tính chất của môi trường gây ảnh hưởng xấu tới sự tồn tại, phát triển con người và sinh vật, mà theo quy định phải bị xử lý hình sự.",
                    "B": "Là hành vi xâm phạm đến các quy định của Nhà nước về bảo vệ môi trường.",
                    "C": "Là hành vi nguy hiểm cho xã hội được quy định trong Bộ luật hình sự.",
                    "D": "Là hành vi làm thay đổi trạng thái, tính chất của môi trường gây ảnh hưởng xấu tới sự tồn tại, phát triển con người và sinh vật, mà theo quy định phải bị xử lý hình sự."
                },
                "answer": "A"
            },
            {
                "id": 72,
                "category": "Chương 1",
                "question": "Vi phạm hành chính trong lĩnh vực bảo vệ môi trường là gì?",
                "options": {
                    "A": "Là những hành vi vi phạm các quy định quản lý nhà nước về bảo vệ môi trường do các cá nhân, tố chức thực hiện một cách cố ý hoặc vô ý mà không phải là tội phạm, theo quy định phải bị xử lý vi phạm hành chính.",
                    "B": "Là những hành động vi phạm các quy định quản lý nhà nước về bảo vệ môi trường do các cá nhân, tố chức thực hiện một cách cố ý hoặc vô ý mà không phải là tội phạm, theo quy định phải bị xử lý vi phạm hành chính.",
                    "C": "Là những việc làm vi phạm các quy định quản lý nhà nước về bảo vệ môi trường do các cá nhân, tố chức thực hiện một cách cố ý hoặc vô ý mà không phải là tội phạm, theo quy định phải bị xử lý vi phạm hành chính.",
                    "D": "Là những hành vi, hành động, việc làm vi phạm các quy định quản lý nhà nước về bảo vệ môi trường do các cá nhân, tố chức thực hiện một cách cố ý hoặc vô ý mà không phải là tội phạm, theo quy định phải bị xử lý vi phạm hành chính."
                },
                "answer": "A"
            },
            {
                "id": 73,
                "category": "Chương 1",
                "question": "Tội phạm về môi trường được quy định tại chương mấy trong Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung năm 2017)?",
                "options": {
                    "A": "Chương 18",
                    "B": "Chương 19",
                    "C": "Chương 20",
                    "D": "Chương 21"
                },
                "answer": "B"
            },
            {
                "id": 74,
                "category": "Chương 1",
                "question": "Trong Chương 19, Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung năm 2017) Tội phạm về môi trường bao gồm mấy tội danh, được quy định từ điều nào đến điều nào?",
                "options": {
                    "A": "10",
                    "B": "11",
                    "C": "9",
                    "D": "12"
                },
                "answer": "D"
            },
            {
                "id": 75,
                "category": "Chương 1",
                "question": "Tội hủy hoại nguồn lợi thủy sản được quy định tại điều mấy trong Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung năm 2017)?",
                "options": {
                    "A": "Điều 242",
                    "B": "Điều 243",
                    "C": "Điều 244",
                    "D": "Điều 245"
                },
                "answer": "A"
            },
            {
                "id": 76,
                "category": "Chương 1",
                "question": "Tội hủy hoại rừng được quy định tại điều mấy trong Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung năm 2017)?",
                "options": {
                    "A": "Điều 243",
                    "B": "Điều 242",
                    "C": "Điều 244",
                    "D": "Điều 245"
                },
                "answer": "A"
            },
            {
                "id": 77,
                "category": "Chương 1",
                "question": "Tội vi phạm quy định về bảo vệ động vật nguy cấp, quý hiếm được quy định tại điều mấy trong Bộ luật Hình sự năm 2015 (sửa đổi, bổ sung năm 2017)?",
                "options": {
                    "A": "Điều 241",
                    "B": "Điều 243",
                    "C": "Điều 244",
                    "D": "Điều 245"
                },
                "answer": "D"
            },
            {
                "id": 78,
                "category": "Chương 1",
                "question": "Đâu là nguyên nhân, điều kiện khách quan của vi phạm pháp luật về môi trường?",
                "options": {
                    "A": "Các cơ quan Nhà nước có thẩm quyền ban hành nhiều chính sách ưu đãi để phát triển kinh tế mà không quan tâm đến bảo vệ môi trường.",
                    "B": "Áp lực tăng trưởng kinh tế, các cá nhân, tổ chức mới chỉ quan tâm đến lợi ích kinh tế trước mắt, chưa chú trọng đến công tác bảo vệ môi trường.",
                    "C": "Công tác quản lý nhà nước về môi trường còn hạn chế. Hệ thống văn bản pháp luật về môi trường hiện nay đang trong giai đoạn bổ sung.",
                    "D": "Áp lực tăng trưởng kinh tế, các nhà đầu tư nước ngoài chỉ quan tâm đến lợi ích kinh tế trước mắt, chưa chú trọng đến công tác bảo vệ môi trường"
                },
                "answer": "A"
            },
            {
                "id": 79,
                "category": "Chương 1",
                "question": "Đâu là nguyên nhân, điều kiện chủ quan của vi phạm pháp luật về môi trường?",
                "options": {
                    "A": "Nhận thức của một số bộ phận các cơ quan quản lý nhà nước về bảo vệ môi trường chưa cao, ý thức BVMT của các cơ quan, doanh nghiệp và công dân còn kém, chưa tự giác, vấn đề bảo vệ môi trường chưa được quan tâm chú trọng đúng mứC,",
                    "B": "Nhận thức của một số bộ phận các cơ quan quản lý nhà nước chỉ chú trọng phát triển kinh tế chưa coi trọng công tác bảo vệ môi trường; chưa thực hiện các biện pháp thu hút đầu tư, các cam kết bảo vệ môi trường, đầu tư hệ thống hạ tầng đảm bảo cho công tác xử lý chất thải, rác thải.",
                    "C": "Các cơ quan chức năng phát huy vai trò, trách nhiệm trong phòng, chống vi phạm pháp luật về bảo vệ môi trường.",
                    "D": "Chính quyền các cấp, các ngành phải thực hiện các biện pháp thu hút đầu tư, cấp phép dự án chưa quan tâm chỉ đạo thực hiện các cam kết bảo vệ môi trường, đầu tư hệ thống hạ tầng đảm bảo cho công tác xử lý chất thải, rác thải."
                },
                "answer": "A"
            },
            {
                "id": 80,
                "category": "Chương 1",
                "question": "Đâu là nguyên nhân thuộc về phía đối tượng vi phạm pháp luật về môi trường?",
                "options": {
                    "A": "Chấp hành nghiêm pháp luật và tuân thủ các quy tắc, chuẩn mực xã hội.",
                    "B": "Ý thức coi thường pháp luật.",
                    "C": "Ý thức sai lệch về cách thỏa mãn nhu cầu cá nhân là yếu tố chủ quan dẫn đến các hành vi vi phạm pháp luật về bảo vệ môi trường của các đối tượng.",
                    "D": "Ý thức bảo vệ môi trường kém, chưa tuân thủ các quy tắc, chuẩn mực xã hội."
                },
                "answer": "B"
            },
            {
                "id": 81,
                "category": "Chương 1",
                "question": "Phòng chống vi phạm pháp luật về bảo vệ môi trường là gì?",
                "options": {
                    "A": "Là hoạt động các cơ quan nhà nước, các tổ chức xã hội và công dân bằng việc sử dụng tống hợp các biện pháp, phương tiện nhằm ngăn chặn, hạn chế tình hình vi phạm pháp luật về bảo vệ môi trường; phát hiện, loại trừ các nguyên nhân, điều kiện của vi phạm pháp luật về bảo vệ môi trường; khi vi phạm pháp luật về bảo vệ môi trường xảy ra thì hạn chế đến mức thấp nhất hậu quả tác hại, kịp thời phát hiện, điều tra, xử lý các hành vi vi phạm pháp luật về bảo vệ môi trường.",
                    "B": "Là hoạt động ngăn chặn, hạn chế tình hình vi phạm pháp luật về bảo vệ môi trường; phát hiện, loại trừ các nguyên nhân, điều kiện của vi phạm pháp luật về bảo vệ môi trường.",
                    "C": "Là hoạt động phát hiện, loại trừ các nguyên nhân, điều kiện của vi phạm pháp luật về bảo vệ môi trường; khi vi phạm pháp luật về bảo vệ môi trường xảy ra thì hạn chế đến mức thấp nhất hậu quả tác hại, kịp thời phát hiện, điều tra, xử lý các hành vi vi phạm pháp luật về bảo vệ môi trường.",
                    "D": "Là hoạt động hạn chế đến mức thấp nhất hậu quả tác hại, kịp thời phát hiện, điều tra, xử lý các hành vi vi phạm pháp luật về bảo vệ môi trường."
                },
                "answer": "A"
            },
            {
                "id": 82,
                "category": "Chương 1",
                "question": "Phòng chống vi phạm pháp luật về bảo vệ môi trường có mấy đặc điểm?",
                "options": {
                    "A": "5",
                    "B": "3",
                    "C": "4",
                    "D": "6"
                },
                "answer": "C"
            },
            {
                "id": 83,
                "category": "Chương 1",
                "question": "Đặc điểm của phòng chống vi phạm pháp luật về bảo vệ môi trường là gì?",
                "options": {
                    "A": "Chủ thể tiến hành tham gia phòng, chống vi phạm pháp luật về bảo vệ môi trường rất đa dạng. Căn cứ vào chức năng, nhiệm vụ, quyền hành được quy định trong các văn bản pháp luật do cơ quan nhà nước có thẩm quyền ban hành để tiến hành các hoạt động phòng ngừa cũng như điều tra, xử lý phù hợp.",
                    "B": "Chủ thể tiến hành phòng, chống vi phạm pháp luật về bảo vệ môi trường được triển khai đồng bộ, với các biện pháp điều tra, xử lý đối với các hành vi vi phạm pháp luật về bảo vệ môi trường (cả tội phạm và vi phạm hành chính).",
                    "C": "Chủ thể tiến hành phòng, chống vi phạm pháp luật về bảo vệ môi trường không liên quan trực tiếp đến việc sử dụng các công cụ phương tiện nghiệp vụ và ứng dụng tiến bộ của khoa học công nghệ. Phòng, chống vi phạm pháp luật về bảo vệ môi trường có sự phối kết hợp chặt chẽ giữa các chủ thể tham trên cơ sở chức năng, quyền hạn được phân công.",
                    "D": "Phòng, chống vi phạm pháp luật về bảo vệ môi trường có liên quan trực tiếp đến việc sử dụng các công cụ phương tiện nghiệp vụ và ứng dụng tiến bộ của khoa học công nghệ. Phòng, chống vi phạm pháp luật về bảo vệ môi trường không sự phối kết hợp chặt chẽ giữa các chủ thể tham trên cơ sở chức năng, quyền hạn được phân công"
                },
                "answer": "A"
            },
            {
                "id": 84,
                "category": "Chương 1",
                "question": "Phòng chống vi phạm pháp luật về bảo vệ môi trường gồm mấy nội dung?",
                "options": {
                    "A": "5",
                    "B": "6",
                    "C": "7",
                    "D": "8"
                },
                "answer": "A"
            },
            {
                "id": 85,
                "category": "Chương 1",
                "question": "Phòng chống vi phạm pháp luật về bảo vệ môi trường gồm những nội dung nào?",
                "options": {
                    "A": "Nắm tình hình vi phạm pháp luật về bảo vệ môi trường, nghiên cứu làm rõ những vấn đề có tính quy luật trong hoạt động vi phạm pháp luật của các đối tượng. Xác định và làm rõ các nguyên nhân, điều kiện của vi phạm pháp luật về bảo vệ môi trường",
                    "B": "Nắm tình hình vi phạm pháp luật về bảo vệ môi trường, có các giải pháp chủ động hạn chế các nguyên nhân, khắc phục các điều kiện của vi phạm pháp luật về bảo vệ môi trường. Và xử lý vi phạm pháp luật về bảo vệ môi trường.",
                    "C": "Tổ chức lực lượng tiến hành các hoạt động khắc phục các nguyên nhân, điều kiện của tội phạm về môi trường, kiểm tra, đẩy lùi tình trạng vi phạm pháp luật về bảo vệ môi trường.",
                    "D": "Nắm tình hình vi phạm pháp luật về bảo vệ môi trường, cần làm rõ những vấn đề có tính quy luật trong hoạt động vi phạm pháp luật của các đối tượng và các nguyên nhân của vi phạm pháp luật về bảo vệ môi trường"
                },
                "answer": "A"
            },
            {
                "id": 86,
                "category": "Chương 1",
                "question": "Trong phòng, chống vi phạm pháp luật về bảo vệ môi trường, đâu là biện pháp phòng, chống chung?",
                "options": {
                    "A": "Biện pháp tổ chức – hành chính; kinh tế; khoa học – công nghệ;",
                    "B": "Biện pháp tuyên truyền, nhắc nhở các cá nhân tổ chức chấp hành pháp luật.",
                    "C": "Biện pháp pháp ngăn ngừa các hành vi, vi phạm luật khoa học và công nghệ môi trường.",
                    "D": "Biện pháp tuyên truyền qua internet để người dân không vi phạm pháp luật về bảo vệ môi trường."
                },
                "answer": "A"
            },
            {
                "id": 87,
                "category": "Chương 1",
                "question": "Phòng, chống vi phạm pháp luật về bảo vệ môi trường gồm mấy biện pháp chung?",
                "options": {
                    "A": "4",
                    "B": "5",
                    "C": "6",
                    "D": "7"
                },
                "answer": "B"
            },
            {
                "id": 88,
                "category": "Chương 1",
                "question": "Phòng, chống vi phạm pháp luật về bảo vệ môi trường gồm mấy biện pháp cụ thể?",
                "options": {
                    "A": "4",
                    "B": "5",
                    "C": "6",
                    "D": "7"
                },
                "answer": "A"
            },
            {
                "id": 89,
                "category": "Chương 1",
                "question": "Tham gia phòng chống vi phạm pháp luật về bảo vệ môi trường gồm những chủ thể nào?",
                "options": {
                    "A": "Đảng lãnh đạo Nhà nước, các cơ quan, tổ chức trong hệ thống chính trị và quần chúng nhân dân tham gia vào phòng, chống vi phạm pháp luật về bảo vệ môi trường thông qua việc hoạch định các chủ trương, chính sách, ban hành các văn bản hướng dẫn, nghị quyết, chỉ thị.",
                    "B": "Quốc hội, Hội đồng nhân dân các cấp; Bộ Tư pháp; Bộ Tài chính; các tổ chức xã hội, đoàn thể quần chúng và công dân.",
                    "C": "Hộ gia đình và công dân; các cơ quan bảo vệ pháp luật (Công an, Viện kiểm sát, Tòa án, hội cụ chiến binh, hội phụ nữ, khu phố ….).",
                    "D": "Chính phủ và Ủy bân nhân dân các cấp; Bộ Tài nguyên môi trường; Bộ Xây dựng; Bộ Y tế; Bộ Thông tin truyền thông; các tổ chức xã hội, đoàn thể quần chúng và công dân."
                },
                "answer": "A"
            },
            {
                "id": 90,
                "category": "Chương 1",
                "question": "Sinh viên có trách nhiệm như thế nào trong tham gia phòng chống vi phạm pháp luật về bảo vệ môi trường?",
                "options": {
                    "A": "Nắm vững các quy định của pháp luật phòng, chống vi phạm pháp luật về bảo vệ môi trường. Xây dựng ý thức trách nhiệm trong các hoạt động bảo vệ môi trường như sử dụng tiết kiệm, có hiệu quả các nguồn tài nguyên (nước, năng lượng,.);",
                    "B": "Tham gia các phong trào về bảo vệ môi trường, hạn chế sử dụng các phương tiện giao thông cá nhân để bảo vệ môi trường không khí;",
                    "C": "ý thức thức trách nhiệm với môi trường như sống thân thiện với môi trường xung quanh; tích cực trồng cây xanh; tham gia thu gom rác thải tại nơi sinh sống và học tập.",
                    "D": "Xây dựng ý thức trách nhiệm trong các hoạt động bảo vệ môi trường như sử dụng tiết kiệm, có hiệu quả các nguồn tài nguyên."
                },
                "answer": "A"
            },
            {
                "id": 91,
                "category": "Chương 4",
                "question": "Phòng, chống vi phạm pháp luật về bảo đảm trật tự an toàn giao thông Phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông trong nhà trường là trách nhiệm của?",
                "options": {
                    "A": "Nhà trường.",
                    "B": "Sinh viên.",
                    "C": "Nhà trường và sinh viên.",
                    "D": "Không phải trách nhiệm của Nhà trường và sinh viên."
                },
                "answer": "C"
            },
            {
                "id": 92,
                "category": "Chương 1",
                "question": "Các dấu hiệu pháp lý của tội phạm an toàn giao thông:",
                "options": {
                    "A": "Chủ thể; Khách thể; Mặt khách quan, mặt chủ quan của các tội phạm xâm phạm an toàn giao thông.",
                    "B": "Mặt khách quan, mặt chủ quan của các tội phạm xâm phạm an toàn giao thông.",
                    "C": "Chủ thể của các tội phạm xâm phạm an toàn giao thông.",
                    "D": "Chủ thể; Mặt khách quan của các tội phạm xâm phạm an toàn giao thông."
                },
                "answer": "A"
            },
            {
                "id": 93,
                "category": "Chương 1",
                "question": "Có mấy dạng vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông?",
                "options": {
                    "A": "2",
                    "B": "3",
                    "C": "4",
                    "D": "5"
                },
                "answer": "A"
            },
            {
                "id": 94,
                "category": "Chương 1",
                "question": "Vi phạm hành chính xảy ra trong lĩnh vực bảo đảm trật tự, an toàn giao thông là?",
                "options": {
                    "A": "Là hành vi trái pháp luật, do cá nhân, tổ chức có năng lực trách nhiệm hành chính thực hiện với lỗi cố ý hoặc vô ý, xâm phạm đến hoạt động bảo đảm trật tự, an toàn giao thông và theo quy định của pháp luật phải chịu trách nhiệm hành chính.",
                    "B": "Là hành vi trái pháp luật, do cá nhân có năng lực trách nhiệm hành chính thực hiện với lỗi cố ý hoặc vô ý, xâm phạm đến hoạt động an toàn giao thông và theo quy định của pháp luật phải chịu trách nhiệm hành chính.",
                    "C": "Là hành vi do cá nhân có năng lực trách nhiệm hành chính thực hiện với lỗi cố ý, xâm phạm đến hoạt động bảo đảm trật tự, an toàn giao thông và theo quy định của pháp luật phải chịu trách nhiệm hành chính.",
                    "D": "Là hành vi trái pháp luật, do cá nhân, tổ chức thực hiện với lỗi cố ý hoặc vô ý, xâm phạm đến hoạt động bảo đảm trật tự, an toàn giao thông phải chịu trách nhiệm hành chính."
                },
                "answer": "A"
            },
            {
                "id": 95,
                "category": "Chương 1",
                "question": "Người điều khiển phương tiện tham gia giao thông phải có điều kiện nào sau đây?",
                "options": {
                    "A": "Có giấy Chứng minh nhân dân.",
                    "B": "Đủ tuổi theo qui định của pháp luật.",
                    "C": "Đã học lái xe",
                    "D": "Có sức khỏe, đủ tuổi, có giấy phép lái xe theo qui định của Luật giao thông đường bộ, bảo đảm điều khiển xe an toàn."
                },
                "answer": "D"
            },
            {
                "id": 96,
                "category": "Chương 1",
                "question": "Đấu tranh chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông là hoạt động của tổ chức nào sau đây?",
                "options": {
                    "A": "Hoạt động của Lực lượng vũ trang có thẩm quyền.",
                    "B": "Hoạt động toàn xã hội.",
                    "C": "Hoạt động của các cơ quan quản lý nhà nước có thẩm quyền.",
                    "D": "Hoạt động của các cơ chức năng có thẩm quyền theo qui định."
                },
                "answer": "C"
            },
            {
                "id": 97,
                "category": "Chương 1",
                "question": "Pháp luật về bảo đảm trật tự, an toàn giao thông là một bộ phận của?",
                "options": {
                    "A": "Hệ thống pháp luật hành chính của Đảng.",
                    "B": "Hệ thống pháp luật hành chính Nhà nướC,",
                    "C": "Hệ thống pháp luật hành chính của Quốc hội.",
                    "D": "Hệ thống pháp luật của Bộ Công An"
                },
                "answer": "B"
            },
            {
                "id": 98,
                "category": "Chương 1",
                "question": "Tốc độ tối đa khi tham gia giao thông đường bộ là?",
                "options": {
                    "A": "Là vận tốc lớn nhất trên một tuyến đường, đoạn đường hoặc làn đường.",
                    "B": "Là vận tốc lớn nhất trên cùng một tuyến đường, đoạn đường hoặc làn đường.",
                    "C": "Là tốc độ lớn nhất trên một tuyến đường, đoạn đường hoặc làn đường.",
                    "D": "Là tốc độ lớn nhất trên cùng một tuyến đường, đoạn đường hoặc làn đường."
                },
                "answer": "C"
            },
            {
                "id": 99,
                "category": "Chương 1",
                "question": "Nội dung của đấu tranh chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông là gì?",
                "options": {
                    "A": "Phát hiện những hành vi vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông do cá nhân, tổ chức thực hiện.",
                    "B": "Góp phần áp dụng các biện pháp xử lý tương ứng với mức độ của các hành vi vi phạm đó, góp phần bảo đảm trật tự, an toàn giao thông.",
                    "C": "Một nhiệm vụ của công tác bảo đảm trật tự, an toàn giao thông.",
                    "D": "Tuyên truyền những hành vi vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông do cá nhân, tổ chức thực hiện."
                },
                "answer": "A"
            },
            {
                "id": 100,
                "category": "Chương 1",
                "question": "Pháp luật về bảo đảm trật tự, an toàn giao thông là gì?",
                "options": {
                    "A": "Một bộ phận bao gồm hệ thống các văn bản quy phạm pháp luật do Nhà nước ban hành.",
                    "B": "Một bộ phận của hệ thống pháp luật bao gồm hệ thống các văn bản quy phạm pháp luật do Nhà nước ban hành.",
                    "C": "Một bộ phận của hệ thống pháp luật hành chính nhà nước, bao gồm hệ thống các văn bản quy phạm pháp luật do Nhà nước ban hành.",
                    "D": "Một bộ phận của hệ thống hành chính nhà nước, bao gồm hệ thống các văn bản quy phạm pháp luật do Nhà nước ban hành"
                },
                "answer": "C"
            },
            {
                "id": 101,
                "category": "Chương 1",
                "question": "Người từ đủ bao nhiêu tuổi thì được điều khiển xe mô tô, xe gắn máy có dung tích xilanh từ 50cm3 trở lên và các loại xe có kết cấu tương tự, xe có trọng tải dưới 3.500kg và xe ô tô chở người đến 9 chỗ?",
                "options": {
                    "A": "Người từ đủ 14 tuổi.",
                    "B": "Người từ đủ 16 tuổi.",
                    "C": "Người từ đủ 18 tuổi.",
                    "D": "Người từ đủ 17 tuổi."
                },
                "answer": "C"
            },
            {
                "id": 102,
                "category": "Chương 1",
                "question": "Hệ thống các văn bản quy phạm pháp luật về bảo đảm trật tự, an toàn giao thông ban hành nhằm?",
                "options": {
                    "A": "Điều chỉnh các quan hệ xã hội phát sinh trong quá trình tổ chức, thực hiện hoạt động chấp hành của các cơ quan quản lý nhà nước, tổ chức xã hội và công dân trên lĩnh vực bảo đảm trật tự, an toàn giao thông.",
                    "B": "Điều chỉnh các quan hệ xã hội phát sinh trong quá trình thực hiện hoạt động điều hành của các cơ quan quản lý nhà nước, tổ chức xã hội và công dân trên lĩnh vực bảo đảm trật tự, an toàn giao thông.",
                    "C": "Điều chỉnh các quan hệ xã hội phát sinh trong quá trình tổ chức, thực hiện hoạt động chấp hành và điều hành của các cơ quan quản lý nhà nước, tổ chức xã hội và công dân trên lĩnh vực bảo đảm trật tự, an toàn giao thông.",
                    "D": "Điều chỉnh các quan hệ xã hội phát sinh trong quá trình tổ chức, thực hiện của các cơ quan quản lý nhà nước, công dân trên lĩnh vực bảo đảm trật tự, an toàn giao thông."
                },
                "answer": "C"
            },
            {
                "id": 103,
                "category": "Chương 1",
                "question": "Nghị định 100/2019/NĐ-CP về quy định xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ và đường sắt có hiệu lực từ ngày, tháng, năm nào?",
                "options": {
                    "A": "Ngày 25 tháng 12 năm 2019",
                    "B": "Ngày 01 tháng 01 năm 2020",
                    "C": "Ngày 30 tháng 12 năm 2020",
                    "D": "Ngày 30 tháng 12 năm 2019"
                },
                "answer": "B"
            },
            {
                "id": 104,
                "category": "Chương 1",
                "question": "Pháp luật về bảo đảm trật tự, an toàn giao thông là:",
                "options": {
                    "A": "Công cụ pháp lý quan trọng để thực hiện chức năng quản lý nhà nước về bảo đảm trật tự an toàn giao thông, trật tự an toàn xã hội.",
                    "B": "Cơ sở, công cụ pháp lý quan trọng để thực hiện chức năng quản lý nhà nước về bảo đảm trật tự an toàn giao thông, trật tự an toàn xã hội.",
                    "C": "Cơ sở, công cụ pháp lý quan trọng để thực hiện chức năng nhà nước về bảo đảm trật tự an toàn giao thông.",
                    "D": "Công cụ pháp lý để thực hiện chức năng quản lý nhà nước về bảo đảm trật tự an toàn giao thông."
                },
                "answer": "B"
            },
            {
                "id": 105,
                "category": "Chương 1",
                "question": "Vai trò của pháp luật về bảo đảm trật tự, an toàn giao thông là gì?",
                "options": {
                    "A": "Pháp luật về bảo đảm trật tự, an toàn giao thông là ý chí của Nhà nước để chỉ đạo và tổ chức thực hiện bảo đảm trật tự, an toàn giao thông",
                    "B": "Pháp luật về bảo đảm trật tự, an toàn giao thông là ý chí để chỉ đạo và tổ chức thực hiện bảo đảm trật tự, an toàn giao thông.",
                    "C": "Pháp luật về bảo đảm trật tự, an toàn giao thông là ý chí của Bộ công an để chỉ đạo tổ chức thực hiện bảo đảm trật tự, an toàn giao thông.",
                    "D": "Pháp luật về bảo đảm trật tự, an toàn giao thông là ý chí của toàn dân để chỉ đạo và tổ chức thực hiện bảo đảm trật tự, an toàn giao thông."
                },
                "answer": "A"
            },
            {
                "id": 106,
                "category": "Chương 1",
                "question": "Tổ chức nào là chủ thể trong thực hiện phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông?",
                "options": {
                    "A": "Đảng Cộng sản Việt Nam, Quốc hội, Chính phủ, Hội đồng nhân dân các cấp và Ủy ban nhân dân các cấp.",
                    "B": "Quốc hội, Hội đồng nhân dân các cấp.",
                    "C": "Chính phủ và Ủy ban nhân dân các cấp.",
                    "D": "Đảng Cộng sản Việt Nam, Quốc hội"
                },
                "answer": "A"
            },
            {
                "id": 107,
                "category": "Chương 1",
                "question": "Luật giao thông đường bộ có hiệu lực từ năm nào?",
                "options": {
                    "A": "Năm 2008",
                    "B": "Năm 2009",
                    "C": "Năm 2010",
                    "D": "Năm 2011"
                },
                "answer": "B"
            },
            {
                "id": 108,
                "category": "Chương 1",
                "question": "Phòng ngừa vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông là hoạt động của tổ chức nào?",
                "options": {
                    "A": "Hoạt động của các cơ quan Nhà nước; các tổ chức xã hội và công dân.",
                    "B": "Hoạt động của các tổ chức xã hội và công dân.",
                    "C": "Hoạt động của công dân.",
                    "D": "Hoạt động của các cơ quan Nhà nước; các tổ chức xã hội"
                },
                "answer": "A"
            },
            {
                "id": 109,
                "category": "Chương 1",
                "question": "Người điều khiển xe máy chỉ được chở 2 người trong trường hợp nào sau đây?",
                "options": {
                    "A": "Chở người bệnh đi cấp cứu, áp giải người có hành vi vi phạm pháp luật, chở trẻ em dưới 14 tuổi.",
                    "B": "Chở người bệnh đi cấp cứu, áp giải người có hành vi vi phạm pháp luật",
                    "C": "Áp giải người có hành vi vi phạm pháp luật, chở trẻ em dưới 14 tuổi.",
                    "D": "Chở người bệnh đi cấp cứu, trẻ em dưới 14 tuổi."
                },
                "answer": "A"
            },
            {
                "id": 110,
                "category": "Chương 1",
                "question": "Người tham gia giao thông đường bộ gồm những người nào?",
                "options": {
                    "A": "Người chạy, người được chở trên phương tiện tham gia giao thông đường bộ; người điều khiển, dẫn dắt súc vật; người đi bộ trên đường bộ.",
                    "B": "Người điều khiển, người được chở trên phương tiện đường bộ; người điều khiển, dẫn dắt súc vật; người đi bộ trên đường bộ",
                    "C": "Người điều khiển, người được chở trên phương tiện tham gia giao thông đường bộ; người điều khiển, dẫn dắt súc vật; người đi bộ trên đường bộ.",
                    "D": "Người được chở trên phương tiện tham gia giao thông đường bộ; người điều khiển, dẫn dắt súc vật; người đi bộ trên đường bộ."
                },
                "answer": "C"
            },
            {
                "id": 111,
                "category": "Chương 1",
                "question": "Tổ chức nào sau đây là chủ thể trong thực hiện phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông?",
                "options": {
                    "A": "Các tổ chức xã hội và tổ chức quần chúng tự quản; cơ quan quản lý kinh tế, giao thông, văn hóa, giáo dục, dịch vụ, du lịch; công dân.",
                    "B": "Các cơ quan quản lý kinh tế, giao thông, văn hóa, giáo dục, dịch vụ, du lịch.",
                    "C": "Cơ quan quản lý giao thông, văn hóa, giáo dục, du lịch; công dân.",
                    "D": "Các tổ chức xã hội và tổ chức quần chúng tự quản; cơ quan quản lý kinh tế, giao thông."
                },
                "answer": "A"
            },
            {
                "id": 112,
                "category": "Chương 1",
                "question": "Luật sửa đổi, bổ sung một số điều của Luật hàng không dân dụng Việt Nam được Quốc hội khóa XIII thông qua ngày, tháng, năm nào?",
                "options": {
                    "A": "Ngày 22/11/2014",
                    "B": "Ngày 21/11/2014",
                    "C": "Ngày 21/11/2015",
                    "D": "Ngày 25/12/2015"
                },
                "answer": "B"
            },
            {
                "id": 113,
                "category": "Chương 1",
                "question": "Các tội phạm xâm phạm an toàn giao thông là?",
                "options": {
                    "A": "Là hành vi nguy hiểm cho xã hội được quy định trong Bộ luật Hình sự, do người có năng lực trách nhiệm hình sự thực hiện một cách cố ý hoặc vô ý, xâm phạm đến lĩnh vực trật tự, an toàn giao thông",
                    "B": "Do người có năng lực trách nhiệm hình sự và đủ độ tuổi chịu trách nhiệm hình sự thực hiện một cách cố ý hoặc vô ý.",
                    "C": "Xâm phạm vào những quy định của Nhà nước về an toàn giao thông mà theo quy định của Bộ Luật hình sự phải bị xử lý hình sự.",
                    "D": "Do người có năng lực trách nhiệm hình sự thực hiện một cách cố ý hoặc vô ý, xâm phạm đến lĩnh vực trật tự, an toàn giao thông"
                },
                "answer": "A"
            },
            {
                "id": 114,
                "category": "Chương 1",
                "question": "Luật sửa đổi, bổ sung một số điều của Luật giao thông đường thủy nội địa được Quốc hội khóa XIII thông qua ngày, tháng, năm nào?",
                "options": {
                    "A": "Ngày 22/11/2014",
                    "B": "Ngày 21/11/2014",
                    "C": "Ngày 21/11/2015",
                    "D": "Ngày 17/06/2014"
                },
                "answer": "D"
            },
            {
                "id": 115,
                "category": "Chương 1",
                "question": "Dấu hiệu của vi phạm hành chính trong bảo đảm trật tự, an toàn giao thông?",
                "options": {
                    "A": "Hành vi đó theo quy định của pháp luật phải bị xử phạt vi phạm hành chính.",
                    "B": "Hành vi đó là hành vi có lỗi nhưng do nguyên nhân khách quan",
                    "C": "Hành vi đó là hành vi có lỗi nhưng không gây hậu quả nghiêm trọng",
                    "D": "Hành vi đó là hành vi có lỗi nhưng chưa đến mức phải bị xử phạt vi phạm hành sự."
                },
                "answer": "A"
            },
            {
                "id": 116,
                "category": "Chương 1",
                "question": "Luật giao thông đường bộ được Quốc hội khóa XII thông qua năm nào?",
                "options": {
                    "A": "Năm 2007",
                    "B": "Năm 2008",
                    "C": "Năm 2010",
                    "D": "Năm 2011"
                },
                "answer": "B"
            },
            {
                "id": 117,
                "category": "Chương 1",
                "question": "Các dấu hiệu cơ bản của vi phạm hành chính xảy ra trong bảo đảm trật tự, an toàn giao thông?",
                "options": {
                    "A": "Tính có lỗi, tính nguy hiểm cho xã hội, tính trái pháp luật về bảo đảm trật tự, an toàn giao thông.",
                    "B": "Tính trái pháp luật về bảo đảm trật tự, an toàn giao thông.",
                    "C": "Tính có lỗi, tính trái pháp luật về bảo đảm trật tự, an toàn giao thông.",
                    "D": "Tính có lỗi, tính nguy hiểm cho xã hội"
                },
                "answer": "A"
            },
            {
                "id": 118,
                "category": "Chương 1",
                "question": "Nghị định 100/2019/NĐ-CP về quy định xử phạt vi phạm hành chính trong lĩnh vực giao thông đường bộ và đường sắt được Chính phủ ban hành ngày, tháng, năm nào?",
                "options": {
                    "A": "Ngày 25 tháng 12 năm 2019",
                    "B": "Ngày 30 tháng 12 năm 2020",
                    "C": "Ngày 30 tháng 12 năm 2018",
                    "D": "Ngày 30 tháng 12 năm 2019"
                },
                "answer": "D"
            },
            {
                "id": 119,
                "category": "Chương 1",
                "question": "Một trong những giải pháp đối với cơ quan, tổ chức trong phòng, chống vi phạm pháp luật về bảo đảm trật tự an toàn giao thông",
                "options": {
                    "A": "Tích cực nghiên cứu, đổi mới nội dung, hình thức tuyên truyền, phổ biến giáo dục pháp luật hiệu quả, đa dạng, thiết thực, phù hợp với từng đối tượng, địa bàn, cần tập trung vào các đối tượng học sinh, thiếu niên, thanh niên",
                    "B": "Tăng nặng mức xử phạt hành chính đối với những người vi phạm trật tự, an toàn giao thông.",
                    "C": "Hạn chế việc bán các loại xe phân khối lớn, nâng cao quy định về cấp giấy phép lái xe.",
                    "D": "Xây dựng lại các quy định chế tài đối với người điều khiển phương tiện tham gia giao thông."
                },
                "answer": "A"
            },
            {
                "id": 120,
                "category": "Chương 1",
                "question": "Nội dung biện pháp phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông là gì?",
                "options": {
                    "A": "Tham mưu, đề xuất với các tổ chức xây dựng và hoàn thiện hệ thống các văn bản pháp luật phục vụ phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông.",
                    "B": "Tham mưu, đề xuất với Nhà nước xây dựng và hoàn thiện hệ thống các văn bản pháp luật phục vụ phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông.",
                    "C": "Tham mưu cho Công an đề ra chủ trương, biện pháp phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông phù hợp với điều kiện thực tế ở từng địa phương cụ thể.",
                    "D": "Tham mưu cho Quân đội đề ra chủ trương, biện pháp phòng, chống vi phạm pháp luật về bảo đảm trật tự, an toàn giao thông phù hợp."
                },
                "answer": "B"
            },
            {
                "id": 121,
                "category": "Chương 5",
                "question": "Phòng, chống một số loại tội phạm xâm hại danh dự, nhân phẩm của người khác Nhân phẩm là?",
                "options": {
                    "A": "Toàn bộ những phẩm chất mà mỗi con người có được",
                    "B": "Giá trị làm người của mỗi con người",
                    "C": "Toàn bộ những phẩm chất mà mỗi con người có được, hay nói cách khác, nhân phẩm là giá trị làm người của mỗi con người",
                    "D": "Một trong số những phẩm chất mà mỗi con người có được, hay nói cách khác, nhân phẩm là giá trị làm người của mỗi con người"
                },
                "answer": "C"
            },
            {
                "id": 122,
                "category": "Chương 1",
                "question": "Người có nhân phẩm là?",
                "options": {
                    "A": "Người có lương tâm, có nhu cầu vật chất",
                    "B": "Người có tinh thần lành mạnh",
                    "C": "Người luôn thực hiện tốt các nghĩa vụ đạo đức đối với xã hội và người khác",
                    "D": "Người có lương tâm, có nhu cầu vật chất và tinh thần lành mạnh, luôn thực hiện tốt các nghĩa vụ đạo đức đối với xã hội và người khác, biết tôn trọng các quy tắc, chuẩn mực đạo đức tiến bộ"
                },
                "answer": "D"
            },
            {
                "id": 123,
                "category": "Chương 1",
                "question": "Người có nhân phẩm được xã hội?",
                "options": {
                    "A": "Đánh giá cao và được kính trọng",
                    "B": "Nể nang và tôn trọng",
                    "C": "Đánh giá cao và được tôn thờ",
                    "D": "Nể nang và kính trọng"
                },
                "answer": "A"
            },
            {
                "id": 124,
                "category": "Chương 1",
                "question": "Danh dự là?",
                "options": {
                    "A": "Sự đánh giá cao của dư luận xã hội đối với mọi người dựa trên các giá trị về tinh thần, đạo đức của người đó",
                    "B": "Sự coi trọng, đánh giá cao của dư luận xã hội đối với một người dựa trên các giá trị tinh thần, đạo đức của người đó",
                    "C": "Sự coi trọng của dư luận xã hội đối với một người dựa trên các giá trị tinh thần, đạo đức của người đó",
                    "D": "Sự đánh giá công bằng của dư luận xã hội đối với một người dựa trên các giá trị về tinh thần, đạo đức của người đó"
                },
                "answer": "B"
            },
            {
                "id": 125,
                "category": "Chương 1",
                "question": "Danh dự có cơ sở từ?",
                "options": {
                    "A": "Những cống hiến của mọi người đối với xã hội và con người",
                    "B": "Những việc làm ý nghĩa đối với xã hội, với người khác",
                    "C": "Những cống hiến thực tế của con người đối với xã hội, với người khác",
                    "D": "Những việc làm thiết thực đối với xã hội, với người khác"
                },
                "answer": "C"
            },
            {
                "id": 126,
                "category": "Chương 1",
                "question": "Khách thể của các tội xâm phạm nhân phẩm, danh dự của con người?",
                "options": {
                    "A": "Các tội phạm xâm phạm đến quyền được bảo hộ về nhân phẩm, danh dự của con người",
                    "B": "Các tội phạm xâm phạm đến quyền tự do của con người",
                    "C": "Các tội phạm xâm phạm đến quyền tự do và lợi ích của con người",
                    "D": "Tất cả các loại tội phạm"
                },
                "answer": "A"
            },
            {
                "id": 127,
                "category": "Chương 1",
                "question": "Mặt khách quan của các tội xâm phạm nhân phẩm, danh dự của con người thể hiện ở?",
                "options": {
                    "A": "Những hành vi nguy hiểm cho xã hội (hành động)",
                    "B": "Những hành vi nguy hiểm cho xã hội (hành động hoặc không hành động)",
                    "C": "Những hành vi nguy hiểm cho xã hội (không hành động)",
                    "D": "Những hành vi nguy hiểm cho xã hội (hành động hoặc không hành động) xâm phạm trực tiếp tới nhân phẩm, danh dự của con người"
                },
                "answer": "D"
            },
            {
                "id": 128,
                "category": "Chương 1",
                "question": "Các tội xâm phạm tình dục bao gồm?",
                "options": {
                    "A": "Tội hiếp dâm; tội cưỡng dâm",
                    "B": "Tội giao cấu hoặc thực hiện hành vi quan hệ tình dục khác với người từ đủ 13 tuổi đến dưới 16 tuổi",
                    "C": "Tội sử dụng người dưới 16 tuổi vào mục đích khiêu dâm",
                    "D": "Tất cả các phương án trên"
                },
                "answer": "D"
            },
            {
                "id": 129,
                "category": "Chương 1",
                "question": "Đối với hành vi xâm phạm nhân phẩm, danh dự của con người thường được thể hiện bằng?",
                "options": {
                    "A": "Lời nói, cử chỉ",
                    "B": "Lời nói, cử chỉ, hành vi phát tán",
                    "C": "Hành động trái pháp luật",
                    "D": "Hành vi phát tán"
                },
                "answer": "B"
            },
            {
                "id": 130,
                "category": "Chương 1",
                "question": "Để trở thành người có nhân phẩm, con người cần phải có?",
                "options": {
                    "A": "Lương tâm trong sáng, nhu cầu vật chất và tinh thần lành mạnh",
                    "B": "Thực hiện tốt nghĩa vụ đạo đức, thực hiện tốt chuẩn mực đạo đức",
                    "C": "Lương tâm trong sáng, nhu cầu vật chất và tinh thần lành mạnh, thực hiện tốt nghĩa vụ đạo đức, thực hiện tốt chuẩn mực đạo đức, tôn trọng nhân phẩm của chính mình cũng như của mọi người xung quanh",
                    "D": "Cả A và B"
                },
                "answer": "C"
            },
            {
                "id": 131,
                "category": "Chương 1",
                "question": "Danh dự có cơ sở từ?",
                "options": {
                    "A": "Những cống hiến thực tế của con người đối với người khác",
                    "B": "Những cống hiến thực tế của con người đối với xã hội, với người khác",
                    "C": "Hành động của mọi người",
                    "D": "Những cống hiến thực tế của con người đối với xã hội"
                },
                "answer": "B"
            },
            {
                "id": 132,
                "category": "Chương 1",
                "question": "Các tội làm nhục người khác?",
                "options": {
                    "A": "Tội làm nhục người khác",
                    "B": "Tội vu khống; tội hành hạ người khác",
                    "C": "Tội lăng mạ, sỉ nhục người khác",
                    "D": "Cả A và B"
                },
                "answer": "D"
            },
            {
                "id": 133,
                "category": "Chương 1",
                "question": "Bộ luật hình sự hiện hành của nước cộng hòa xhcn việt nam là?",
                "options": {
                    "A": "Bộ luật hình sự năm 2015, sửa đổi, bổ sung năm 2017",
                    "B": "Bộ luật hình sự năm 2016, sửa đổi, bổ sung năm 2017",
                    "C": "Bộ luật hình sự năm 2015, sửa đổi, bổ sung năm 2016",
                    "D": "Bộ luật hình sự năm 2017, sửa đổi, bổ sung năm 2018"
                },
                "answer": "A"
            },
            {
                "id": 134,
                "category": "Chương 1",
                "question": "Bộ luật hình sự quy định về?",
                "options": {
                    "A": "Tội phạm hình sự",
                    "B": "Tội phạm",
                    "C": "Tội phạm và hình phạt",
                    "D": "Các loại tội phạm"
                },
                "answer": "C"
            },
            {
                "id": 135,
                "category": "Chương 1",
                "question": "Nội dung nào thể hiện đặc trưng của bộ luật hình sự?",
                "options": {
                    "A": "Bộ luật hình sự bao gồm hệ thống pháp luật",
                    "B": "Bộ luật hình sự bao gồm hệ thống quy phạm pháp luật điều chỉnh các quan hệ xã hội liên quan đến nhà nước và người phạm tội",
                    "C": "Bộ luật hình sự bao gồm hệ thống điều chỉnh các quan hệ xã hội liên quan đến nhà nước",
                    "D": "Bộ luật hình sự bao gồm hệ thống quy phạm pháp luật điều chỉnh các quan hệ xã hội liên quan đến người phạm tội"
                },
                "answer": "B"
            },
            {
                "id": 136,
                "category": "Chương 1",
                "question": "Nội dung nào thể hiện vai trò của bộ luật hình sự?",
                "options": {
                    "A": "Bộ luật hình sự bảo vệ các quan hệ xã hội, trừng trị các hành vi xâm hại các quan hệ xã hội đó",
                    "B": "Bộ luật hình sự bảo vệ các quan hệ cá nhân được các luật khác thiết lập, thông qua việc trừng trị các hành vi liên quan đến các quan hệ xã hội đó",
                    "C": "Bộ luật hình sự bảo vệ các quan hệ xã hội được các luật khác bảo hộ, trừng phạt các hành vi xâm hại các quan hệ xã hội đó",
                    "D": "Bộ luật hình sự bảo vệ các quan hệ xã hội được các luật khác thiết lập, thông qua việc trừng trị các hành vi xâm hại các quan hệ xã hội đó"
                },
                "answer": "D"
            },
            {
                "id": 137,
                "category": "Chương 1",
                "question": "Nội dung nào thể hiện nhiệm vụ của bộ luật hình sự?",
                "options": {
                    "A": "Giáo dục mọi người ý thức tuân theo pháp luật, phòng ngừa và đấu tranh phòng, chống tội phạm",
                    "B": "Giáo dục mọi người ý thức tốt và đấu tranh chống tội phạm",
                    "C": "Giáo dục mọi người ý thức, phòng ngừa và chống tội phạm",
                    "D": "Giáo dục mọi người ý thức tuân theo pháp luật"
                },
                "answer": "A"
            },
            {
                "id": 138,
                "category": "Chương 1",
                "question": "“Bộ luật hình sự là công cụ sắc bén, hữu hiệu để đấu tranh phòng, chống tội phạm\" là?",
                "options": {
                    "A": "Nhiệm vụ của blhs",
                    "B": "Khái niệm của blhs",
                    "C": "Vai trò của blhs",
                    "D": "Tất cả phương án trên đều sai"
                },
                "answer": "C"
            },
            {
                "id": 139,
                "category": "Chương 1",
                "question": "Nhân phẩm, danh dự của con người là những yêu tố về tinh thần, bao gồm?",
                "options": {
                    "A": "Phẩm giá, giá trị",
                    "B": "Sự tôn trọng",
                    "C": "Tình cảm yêu mến của những người xung quanh, của xã hội đối với người đó",
                    "D": "Tất cả các phương án trên"
                },
                "answer": "D"
            },
            {
                "id": 140,
                "category": "Chương 1",
                "question": "Hành vi xâm phạm nhân phẩm, danh dự của con người là?",
                "options": {
                    "A": "Làm cho người đó bị xúc phạm, tổn thương về tinh thần và xấu hổ đối với những người xung quanh",
                    "B": "Làm cho người đó bị xúc phạm, tổn thương",
                    "C": "Làm cho người đó bị tổn thương về tinh thần và xấu hổ đối với những người xung quanh",
                    "D": "Làm cho người đó bị xúc phạm nặng nề về tinh thần và xấu hổ đối với những người xung quanh"
                },
                "answer": "A"
            },
            {
                "id": 141,
                "category": "Chương 1",
                "question": "\"Các tội xâm phạm nhân phẩm, danh dự của con người là những hành vi nguy hiểm cho xã hội\" là?",
                "options": {
                    "A": "Dấu hiệu của tội xâm phạm nhân phẩm, danh dự",
                    "B": "Khái niệm của tội xâm phạm nhân phẩm, danh dự",
                    "C": "Đặc điểm của tội xâm phạm nhân phẩm, danh dự",
                    "D": "Đặc trưng của tội xâm phạm nhân phẩm, danh dự"
                },
                "answer": "C"
            },
            {
                "id": 142,
                "category": "Chương 1",
                "question": "Các tội xâm phạm nhân phẩm, danh dự của con người được quy định trong?",
                "options": {
                    "A": "Pháp luật hình sự",
                    "B": "Bộ luật hình sự",
                    "C": "Bộ luật tội phạm",
                    "D": "Tất cả các bộ luật"
                },
                "answer": "B"
            },
            {
                "id": 143,
                "category": "Chương 1",
                "question": "\"Các tội xâm phạm nhân phẩm, danh dự của con người do người có năng lực trách nhiệm hình sự và đủ tuổi chịu trách nhiệm hình sự thực hiện\" là?",
                "options": {
                    "A": "Người có năng lực trách nhiệm hình sự và từ đủ 17 tuổi trở lên",
                    "B": "Người có năng lực trách nhiệm hình sự và từ đủ 16 tuổi trở lên",
                    "C": "Người có năng lực trách nhiệm hình sự và từ đủ 15 tuổi trở lên",
                    "D": "Người có năng lực trách nhiệm hình sự và từ đủ 14 tuổi trở lên"
                },
                "answer": "D"
            },
            {
                "id": 144,
                "category": "Chương 1",
                "question": "Các tội xâm phạm nhân phẩm, danh dự của con người do người có năng lực trách nhiệm hình sự và đủ tuổi chịu trách nhiệm hình sự thực hiện là?",
                "options": {
                    "A": "Đặc điểm",
                    "B": "Khái niệm",
                    "C": "Mục đích",
                    "D": "Tất cả phương án"
                },
                "answer": "A"
            },
            {
                "id": 145,
                "category": "Chương 1",
                "question": "Người nào xâm phạm nhân phẩm, danh dự của người khác phải chịu?",
                "options": {
                    "A": "Trách nhiệm",
                    "B": "Tội hình sự",
                    "C": "Trách nhiệm hình sự",
                    "D": "Trách nhiệm trước xã hội"
                },
                "answer": "C"
            },
            {
                "id": 146,
                "category": "Chương 1",
                "question": "Khách quan của tội phạm xâm phạm nhân phẩm, danh dự của con người là?",
                "options": {
                    "A": "Cách xử sự của chủ thể",
                    "B": "Cách xử sự nguy hiểm của chủ thể",
                    "C": "Cách hành động của chủ thể",
                    "D": "Cách xử sự có mục đích của chủ thể"
                },
                "answer": "B"
            },
            {
                "id": 147,
                "category": "Chương 1",
                "question": "Chủ quan của tội phạm xâm phạm nhân phẩm, danh dự của con người là?",
                "options": {
                    "A": "Lỗi của người phạm tội",
                    "B": "Động cơ của người phạm tội",
                    "C": "Mục đích của người phạm tội",
                    "D": "Tất cả các phương án trên"
                },
                "answer": "D"
            },
            {
                "id": 148,
                "category": "Chương 1",
                "question": "Tội xâm phạm tình dục là?",
                "options": {
                    "A": "Hành vi nguy hiểm cho xã hội được quy định trong bộ luật hình sự",
                    "B": "Hành vi được quy định trong bộ luật hình sự",
                    "C": "Hành vi nguy hiểm được quy định trong bộ luật hình sự",
                    "D": "Hành vi không gây nguy hiểm cho xã hội được quy định trong bộ luật hình sự"
                },
                "answer": "A"
            },
            {
                "id": 149,
                "category": "Chương 1",
                "question": "Bộ luật hình sự hiện hành quy định về tội hiếp dâm là?",
                "options": {
                    "A": "Dùng vũ lực để thực hiện hành vi quan hệ tình dục khác trái với ý muốn của nạn nhân",
                    "B": "Đe dọa dùng vũ lực để giao cấu và quan hệ tình dục khác trái với ý muốn của nạn nhân",
                    "C": "Dùng vũ lực, đe dọa dùng vũ lực để giao cấu hoặc thực hiện hành vi quan hệ tình dục khác trái với ý muốn của nạn nhân",
                    "D": "Dùng vũ lực, đe dọa dùng vũ lực để giao cấu hoặc thực hiện hành vi quan hệ tình dục"
                },
                "answer": "C"
            },
            {
                "id": 150,
                "category": "Chương 1",
                "question": "Bộ luật hình sự quy định về tội hiếp dâm với mức án cao nhất là?",
                "options": {
                    "A": "10 năm",
                    "B": "Chung thân",
                    "C": "Tử hình",
                    "D": "20 năm"
                },
                "answer": "B"
            },
            {
                "id": 151,
                "category": "Chương 6",
                "question": "An toàn thông tin và phòng, chống vi phạm pháp luật trên không gian mạng An ninh mạng là?",
                "options": {
                    "A": "sự đảm bảo hoạt động thông tin trên không gian mạng không gây phương hại đến an ninh quốc gia, trật tự, an toàn xã hội, quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân.",
                    "B": "phòng ngừa, phát hiện, ngăn chặn, xử lý hành vi xâm phạm an ninh mạng.",
                    "C": "sự đảm bảo hoạt động của con người trên không gian mạng không gây phương hại đến an ninh quốc gia, trật tự, an toàn xã hội, quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân.",
                    "D": "sự đảm bảo hoạt động trên không gian mạng không gây phương hại đến an ninh quốc gia, trật tự, an toàn xã hội, quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân."
                },
                "answer": "D"
            },
            {
                "id": 152,
                "category": "Chương 1",
                "question": "Việc sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để thực hiện hành vi khủng bố, tài trợ khủng bố là?",
                "options": {
                    "A": "Gián điệp mạng",
                    "B": "Khủng bố mạng",
                    "C": "Tội phạm mạng",
                    "D": "Tấn công mạng"
                },
                "answer": "B"
            },
            {
                "id": 153,
                "category": "Chương 1",
                "question": "Sự bảo đảm hoạt động trên không gian mạng không gây phương hại đến an ninh quốc gia, trật tự, an toàn xã hội, quyền và lợi ích hợp pháp của cơ quan, tổ chứ",
                "options": {
                    "A": "Khủng bố mạng",
                    "B": "Gián điệp mạng",
                    "C": "Bảo vệ an ninh mạng",
                    "D": "An ninh mạng"
                },
                "answer": "D"
            },
            {
                "id": 154,
                "category": "Chương 1",
                "question": "Phòng ngừ",
                "options": {
                    "A": "Khủng bố mạng",
                    "B": "Bảo vệ an ninh mạng",
                    "C": "An ninh mạng",
                    "D": "Tội phạm mạng"
                },
                "answer": "B"
            },
            {
                "id": 155,
                "category": "Chương 1",
                "question": "Hành vi sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để thực hiện tội phạm được quy định tại Bộ luật Hình sự là?",
                "options": {
                    "A": "Khủng bố mạng",
                    "B": "Tội phạm mạng",
                    "C": "Gián điệp mạng",
                    "D": "Tấn công mạng"
                },
                "answer": "B"
            },
            {
                "id": 156,
                "category": "Chương 1",
                "question": "Bảo vệ an ninh mạng là?",
                "options": {
                    "A": "Phòng ngừa, phát hiện, ngăn chặn, xử lý hành vi xâm phạm an ninh mạng",
                    "B": "Phòng ngừa, phát hiện, ngăn chặn, xử lý hành vi xâm phạm an ninh mạng và an ninh quốc gia",
                    "C": "Phòng ngừa, phát hiện, ngăn chặn, xử lý hành vi xâm phạm an ninh quốc gia",
                    "D": "Phòng ngừa, phát hiện xâm phạm an ninh quốc gia"
                },
                "answer": "A"
            },
            {
                "id": 157,
                "category": "Chương 1",
                "question": "Tội phạm mạng là?",
                "options": {
                    "A": "là việc sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để thực hiện hành vi khủng bố, tài trợ khủng bố.",
                    "B": "là hành vi cố ý vượt qua cảnh báo, mã truy cập, mật mã, tường lửa, sử dụng quyền quản trị của người khác hoặc bằng phương thức khác để chiếm đoạt, thu thập trái phép thông tin, tài nguyên thông tin trên mạng viễn thông, mạng Internet, mạng máy tính, hệ thống thông tin, hệ thống xử lý và điều khiển thông tin, cơ sở dữ liệu, phương tiện điện tử của cơ quan, tổ chức, cá nhân.",
                    "C": "là hành vi sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để phá hoại, gây gián đoạn hoạt động của mạng viễn thông, mạng Internet, mạng máy tính, hệ thống thông tin, hệ thống xử lý và điều khiển thông tin, cơ sở dữ liệu, phương tiện điện tử.",
                    "D": "là hành vi sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để thực hiện tội phạm được quy định tại Bộ luật Hình sự."
                },
                "answer": "D"
            },
            {
                "id": 158,
                "category": "Chương 1",
                "question": "Tấn công mạng là?",
                "options": {
                    "A": "là việc sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để thực hiện hành vi khủng bố, tài trợ khủng bố",
                    "B": "là hành vi cố ý vượt qua cảnh báo, mã truy cập, mật mã, tường lửa, sử dụng quyền quản trị của người khác hoặc bằng phương thức khác để chiếm đoạt, thu thập trái phép thông tin, tài nguyên thông tin trên mạng viễn thông, mạng Internet, mạng máy tính, hệ thống thông tin, hệ thống xử lý và điều khiển thông tin, cơ sở dữ liệu, phương tiện điện tử của cơ quan, tổ chức, cá nhân",
                    "C": "là hành vi sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để phá hoại, gây gián đoạn hoạt động của mạng viễn thông, mạng Internet, mạng máy tính, hệ thống thông tin, hệ thống xử lý và điều khiển thông tin, cơ sở dữ liệu, phương tiện điện tử",
                    "D": "là hành vi sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để thực hiện tội phạm được quy định tại Bộ luật Hình sự."
                },
                "answer": "C"
            },
            {
                "id": 159,
                "category": "Chương 1",
                "question": "Xác định phương án đúng về Nguyên tắc bảo vệ an ninh mạng?",
                "options": {
                    "A": "Tuân thủ Hiến pháp và pháp luật; bảo đảm lợi ích của Nhà nước, quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân.",
                    "B": "Ưu tiên nguồn lực xây dựng lực lượng chuyên trách bảo vệ an ninh mạng; nâng cao năng lực cho lực lượng bảo vệ an ninh mạng và tổ chức, cá nhân tham gia bảo vệ an ninh mạng; ưu tiên đầu tư cho nghiên cứu, phát triển khoa học, công nghệ để bảo vệ an ninh mạng.",
                    "C": "Xây dựng không gian mạng lành mạnh, không gây phương hại đến an ninh quốc gia, trật tự, an toàn xã hội, quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân",
                    "D": "Ưu tiên bảo vệ an ninh mạng trong quốc phòng, an ninh, phát triển kinh tế - xã hội, khoa học, công nghệ và đối ngoại."
                },
                "answer": "A"
            },
            {
                "id": 160,
                "category": "Chương 1",
                "question": "Phương án nào sau đây không phải là biện pháp bảo vệ an ninh mạng?",
                "options": {
                    "A": "Đánh giá điều kiện an ninh mạng",
                    "B": "Thẩm định an ninh mạng",
                    "C": "Khủng bố mạng",
                    "D": "Kiểm tra an ninh mạng"
                },
                "answer": "C"
            },
            {
                "id": 161,
                "category": "Chương 1",
                "question": "Phương án nào sau đây không phải là biện pháp bảo vệ an ninh mạng?",
                "options": {
                    "A": "Yêu cầu xóa bỏ, truy cập xóa bỏ thông tin trái pháp luật hoặc thông tin sai sự thật trên không gian mạng xâm phạm an ninh quốc gia, trật tự, an toàn xã hội, quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân",
                    "B": "Ngăn chặn, yêu cầu tạm ngừng, ngừng cung cấp thông tin mạng; đình chỉ, tạm đình chỉ các hoạt động thiết lập, cung cấp và sử dụng mạng viễn thông, mạng Internet, sản xuất và sử dụng thiết bị phát, thu phát sóng vô tuyến theo quy định của pháp luật",
                    "C": "Sử dụng mật mã để bảo vệ thông tin mạng",
                    "D": "Cơ sở hạ tầng không gian mạng quốc gia"
                },
                "answer": "D"
            },
            {
                "id": 162,
                "category": "Chương 1",
                "question": "Phương án nào sau đây là biện pháp bảo vệ an ninh mạng?",
                "options": {
                    "A": "Thu thập dữ liệu điện tử liên quan đến hoạt động xâm phạm an ninh quốc gia, trật tự, an toàn xã hội, quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân trên không gian mạng",
                    "B": "Ngăn chặn, yêu cầu tạm ngừng, ngừng cung cấp thông tin mạng; đình chỉ, tạm đình chỉ các hoạt động thiết lập, cung cấp và sử dụng mạng viễn thông, mạng Internet, sản xuất và sử dụng thiết bị phát, thu phát sóng vô tuyến theo quy định của pháp luật",
                    "C": "Phong tỏa, hạn chế hoạt động của hệ thống thông tin; đình chỉ, tạm đình chỉ hoặc yêu cầu ngừng hoạt động của hệ thống thông tin, thu hồi tên miền theo quy định của pháp luật",
                    "D": "Tất cả các phương án"
                },
                "answer": "D"
            },
            {
                "id": 163,
                "category": "Chương 1",
                "question": "Phương án nào sau đây là biện pháp bảo vệ an ninh mạng?",
                "options": {
                    "A": "Ứng phó, khắc phục sự cố an ninh mạng",
                    "B": "Nguy cơ đe dọa an ninh mạng",
                    "C": "Sự cố an ninh mạng",
                    "D": "Cơ sở hạ tầng không gian mạng quốc gia"
                },
                "answer": "A"
            },
            {
                "id": 164,
                "category": "Chương 1",
                "question": "Cơ quan nào áp dụng các biện pháp để bảo vệ không gian mạng quốc gia?",
                "options": {
                    "A": "Bộ Thông tin và Truyền thông",
                    "B": "Chính phủ",
                    "C": "Nhà nước",
                    "D": "Quốc hội"
                },
                "answer": "C"
            },
            {
                "id": 165,
                "category": "Chương 1",
                "question": "Cơ quan nào áp dụng các biện pháp để phòng ngừ",
                "options": {
                    "A": "Ủy ban thường vụ Quốc hội",
                    "B": "Nhà nước",
                    "C": "Chính phủ",
                    "D": "Quốc hội"
                },
                "answer": "B"
            },
            {
                "id": 166,
                "category": "Chương 1",
                "question": "Cơ quan nào chịu trách nhiệm trước Chính phủ thực hiện hợp tác quốc tế về an ninh mạng trong phạm vi quản lý?",
                "options": {
                    "A": "Bộ Nội vụ và Bộ Quốc phòng",
                    "B": "Bộ Công an",
                    "C": "Bộ Quốc phòng",
                    "D": "Bộ Thông tin và Truyền thông"
                },
                "answer": "C"
            },
            {
                "id": 167,
                "category": "Chương 1",
                "question": "Xác định phương án đúng về nội dung hợp tác quốc tế về an ninh mạng?",
                "options": {
                    "A": "Nghiên cứu, phân tích xu hướng an ninh mạng",
                    "B": "Xây dựng cơ chế, chính sách nhằm đẩy mạnh hợp tác giữa tổ chức, cá nhân Việt Nam với tổ chức, cá nhân nước ngoài, tổ chức quốc tế hoạt động về an ninh mạng",
                    "C": "Chia sẻ thông tin, kinh nghiệm; hỗ trợ đào tạo, trang thiết bị, công nghệ bảo vệ an ninh mạng",
                    "D": "Tất cả các phương án"
                },
                "answer": "D"
            },
            {
                "id": 168,
                "category": "Chương 1",
                "question": "Luật An ninh mạng nghiêm cấm việc sử dụng không gian mạng để thực hiện hành vi nào dưới đây",
                "options": {
                    "A": "Tổ chức, hoạt động, kết, xúi giục, mua chuộc, lừa gạt, lôi kéo, đào tạo, huấn luyện người chống Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam",
                    "B": "Hoạt động mại dâm, tệ nạn xã hội, mua bán người; đăng tải thông tin phản cảm, đồi trụy, tội ác; phá hoại thuần phong, mỹ tục của dân tộc, đạo đức xã hội, sức khỏe của cộng đồng",
                    "C": "Xuyên tạc lịch sử, phủ nhận thành tựu cách mạng, phá hoại khối đại đoàn kết toàn dân tộc, xúc phạm tôn giáo, phân biệt đối xử về giới, phân biệt chủng tộc",
                    "D": "Tất cả phương án"
                },
                "answer": "D"
            },
            {
                "id": 169,
                "category": "Chương 1",
                "question": "Xác định phương án đúng về các hành vi bị nghiêm cấm về an ninh mạng?",
                "options": {
                    "A": "Thực hiện tấn công mạng, khủng bố mạng, gián điệp mạng, tội phạm mạng; gây sự cố, tấn công, xâm nhập, chiếm quyền điều khiển, làm sai lệch, gián đoạn, ngưng trệ, tê liệt hoặc phá hoại hệ thống thông tin quan trọng về an ninh quốc giA,",
                    "B": "Chống lại hoặc cản trở hoạt động của lực lượng bảo vệ an ninh mạng; tấn công, vô hiệu hóa trái pháp luật làm mất tác dụng biện pháp bảo vệ an ninh mạng.",
                    "C": "Sản xuất, đưa vào sử dụng công cụ, phương tiện, phần mềm hoặc có hành vi cản trở, gây rối loạn hoạt động của mạng viễn thông, mạng Internet, mạng máy tính, hệ thống thông tin, hệ thống xử lý và điều khiển thông tin, phương tiện điện tử; phát tán chương trình tin học gây hại cho hoạt động của mạng viễn thông, mạng Internet, mạng máy tính, hệ thống thông tin, hệ thống xử lý và điều khiển thông tin, phương tiện điện tử; xâm nhập trái phép vào mạng viễn thông, mạng máy tính, hệ thống thông tin, hệ thống xử lý và điều khiển thông tin, cơ sở dữ liệu, phương tiện điện tử của người kháC,",
                    "D": "Tất cả các phương án"
                },
                "answer": "D"
            },
            {
                "id": 170,
                "category": "Chương 1",
                "question": "Người có hành vi vi phạm được quy định trong Luật An ninh mạng thì bị xử lý như thế nào?",
                "options": {
                    "A": "Nhẹ thì bị xử lý vi phạm hành chính, nặng thì bị truy cứu trách nhiệm hình sự, nếu gây thiệt hại thì phải bồi thường",
                    "B": "Tùy theo tính chất, mức độ vi phạm mà bị xử lý kỷ luật, xử lý vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự, nếu gây thiệt hại thì phải bồi thường",
                    "C": "Tùy theo tính chất, mức độ vi phạm mà bị khiển trách, xử lý kỷ luật, xử lý vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự, nếu gây thiệt hại thì phải bồi thường",
                    "D": "Có thể bị buộc thôi việc, xử lý vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự, nếu gây thiệt hại thì phải bồi thường"
                },
                "answer": "B"
            },
            {
                "id": 171,
                "category": "Chương 1",
                "question": "Hệ thống thông tin quan trọng về an ninh quốc gia bao gồm?",
                "options": {
                    "A": "Hệ thống thông tin lưu trữ, xử lý thông tin thuộc bí mật nhà nước; Hệ thống thông tin phục vụ bảo quản vật liệu, chất đặc biệt nguy hiểm đối với con người, môi trường sinh thái",
                    "B": "Hệ thống thông tin quân sự, an ninh, ngoại giao, cơ yếu; Hệ thống thông tin phục vụ lưu giữ, bảo quản hiện vật, tài liệu có giá trị đặc biệt quan trọng",
                    "C": "Hệ thống thông tin phục vụ bảo quản, chế tạo, quản lý cơ sở vật chất đặc biệt quan trọng khác liên quan đến an ninh quốc gia; Hệ thống thông tin quốc gia thuộc lĩnh vực năng lượng, tài chính, ngân hàng, viễn thông, giao thông vận tải, tài nguyên và môi trường, hóa chất, y tế, văn hóa, báo chí",
                    "D": "Tất cả các phương án"
                },
                "answer": "D"
            },
            {
                "id": 172,
                "category": "Chương 1",
                "question": "Chọn phương án đúng về Hệ thống thông tin quan trọng về an ninh quốc gia?",
                "options": {
                    "A": "Hệ thống thông tin phục vụ bảo quản, chế tạo, quản lý cơ sở vật chất đặc biệt quan trọng khác liên quan đến an ninh quốc gia",
                    "B": "Hệ thống thông tin quan trọng phục vụ hoạt động của cơ quan, tổ chức ở trung ương",
                    "C": "Hệ thống thông tin quốc gia thuộc lĩnh vực năng lượng, tài chính, ngân hàng, viễn thông, giao thông vận tải, tài nguyên và môi trường, hóa chất, y tế, văn hóa, báo chí",
                    "D": "Tất cả phương án"
                },
                "answer": "D"
            },
            {
                "id": 173,
                "category": "Chương 1",
                "question": "Chọn phương án sai về Hệ thống thông tin quan trọng về an ninh quốc gia?",
                "options": {
                    "A": "Không có phưong án nào sai",
                    "B": "Hệ thống thông tin quan trọng phục vụ hoạt động của cơ quan, tổ chức ở trung ương",
                    "C": "Hệ thống thông tin quản lý",
                    "D": "Hệ thống thông tin quốc gia thuộc lĩnh vực năng lượng, tài chính, ngân hàng, viễn thông, giao thông vận tải, tài nguyên và môi trường, hóa chất, y tế, văn hóa, báo chí;"
                },
                "answer": "C"
            },
            {
                "id": 174,
                "category": "Chương 1",
                "question": "Ai là người ban hành và sửa đổi, bổ sung Danh mục hệ thống thông tin quan trọng về an ninh quốc gia?",
                "options": {
                    "A": "Thủ tướng Chính phủ",
                    "B": "Chủ tịch nước",
                    "C": "Chủ tịch Quốc hội",
                    "D": "Bộ trưởng Bộ Thông tin và Truyền thông"
                },
                "answer": "A"
            },
            {
                "id": 175,
                "category": "Chương 1",
                "question": "Hệ thống thông tin quan trọng về an ninh quốc gia trừ thông tin quân sự và thông tin cơ yếu thuộc Ban Cơ yếu Chính phủ do ai thẩm định?",
                "options": {
                    "A": "Lực lượng chuyên trách bảo vệ an ninh mạng thuộc Bộ Quốc phòng",
                    "B": "Chính phủ",
                    "C": "Lực lượng chuyên trách bảo vệ an ninh mạng thuộc Bộ Công an",
                    "D": "Tất cả phương án"
                },
                "answer": "C"
            },
            {
                "id": 176,
                "category": "Chương 1",
                "question": "Đánh giá điều kiện về an ninh mạng là gì?",
                "options": {
                    "A": "là hoạt động xem xét, đánh giá những nội dung về an ninh mạng để làm cơ sở cho việc quyết định xây dựng hoặc nâng cấp hệ thống thông tin",
                    "B": "là hoạt động xác định thực trạng an ninh mạng của hệ thống thông tin, cơ sở hạ tầng hệ thống thông tin hoặc thông tin được lưu trữ, xử lý, truyền đưa trong hệ thống thông tin nhằm phòng ngừa, phát hiện, xử lý nguy cơ đe dọa an ninh mạng và đưa ra các phương án, biện pháp bảo đảm hoạt động bình thường của hệ thống thông tin.",
                    "C": "là hoạt động thu thập, phân tích tình hình nhằm xác định nguy cơ đe dọa an ninh mạng, sự cố an ninh mạng, điểm yếu, lỗ hổng bảo mật, mã độc, phần cứng độc hại để cảnh báo, khắc phục, xử lý.",
                    "D": "là hoạt động xem xét sựĐáp ứng về an ninh mạng của hệ thống thông tin trước khi đưa vào vận hành, sử dụng"
                },
                "answer": "D"
            },
            {
                "id": 177,
                "category": "Chương 1",
                "question": "Xác định phương án đúng điều kiệnĐáp ứng Hệ thống thông tin quan trọng về an ninh quốc gia?",
                "options": {
                    "A": "Tất cả phương án",
                    "B": "Biện pháp kỹ thuật để giám sát, bảo vệ an ninh mạng; biện pháp bảo vệ hệ thống điều khiển và giám sát tự động, Internet vạn vật, hệ thống phức hợp thực - ảo, điện toán đám mây, hệ thống dữ liệu lớn, hệ thống dữ liệu nhanh, hệ thống trí tuệ nhân tạo;",
                    "C": "Biện pháp bảo đảm an ninh vật lý bao gồm cách ly cô lập đặc biệt, chống rò rỉ dữ liệu, chống thu tin, kiểm soát ra vào",
                    "D": "Quy định, quy trình và phương án bảo đảm an ninh mạng; nhân sự vận hành, quản trị hệ thống"
                },
                "answer": "A"
            },
            {
                "id": 178,
                "category": "Chương 1",
                "question": "Trường hợp nào được kiểm tra an ninh mạng đối với hệ thống thông tin quan trọng về an ninh quốc gia?",
                "options": {
                    "A": "Khi có thay đổi hiện trạng hệ thống thông tin",
                    "B": "Tất cả các trường hợp",
                    "C": "Kiểm tra định kỳ hằng năm",
                    "D": "Khi đưa phương tiện điện tử, dịch vụ an toàn thông tin mạng vào sử dụng trong hệ thống thông tin"
                },
                "answer": "B"
            },
            {
                "id": 179,
                "category": "Chương 1",
                "question": "Giám sát an ninh mạng là gì?",
                "options": {
                    "A": "là hoạt động xác định thực trạng an ninh mạng của hệ thống thông tin, cơ sở hạ tầng hệ thống thông tin hoặc thông tin được lưu trữ, xử lý, truyền đưa trong hệ thống thông tin nhằm phòng ngừa, phát hiện, xử lý nguy cơ đe dọa an ninh mạng và đưa ra các phương án, biện pháp bảo đảm hoạt động bình thường của hệ thống thông tin",
                    "B": "là hoạt động xem xét sựĐáp ứng về an ninh mạng của hệ thống thông tin trước khi đưa vào vận hành, sử dụng",
                    "C": "là hoạt động xem xét, đánh giá những nội dung về an ninh mạng để làm cơ sở cho việc quyết định xây dựng hoặc nâng cấp hệ thống thông tin",
                    "D": "là hoạt động thu thập, phân tích tình hình nhằm xác định nguy cơ đe dọa an ninh mạng, sự cố an ninh mạng, điểm yếu, lỗ hổng bảo mật, mã độc, phần cứng độc hại để cảnh báo, khắc phục, xử lý."
                },
                "answer": "D"
            },
            {
                "id": 180,
                "category": "Chương 1",
                "question": "Lực lượng nào chủ trì, phối hợp với lực lượng chuyên trách bảo vệ an ninh mạng có thẩm quyền thường xuyên thực hiện giám sát an ninh mạng đối với hệ thống thông tin thuộc phạm vi quản lý; xây dựng cơ chế tự cảnh báo và tiếp nhận cảnh báo về nguy cơ đe dọa an ninh mạng, sự cố an ninh mạng, điểm yếu, lỗ hổng bảo mật, mã độ",
                "options": {
                    "A": "Ban Cơ yếu Chính phủ",
                    "B": "Chủ quản hệ thống thông tin quan trọng về an ninh quốc gia",
                    "C": "Lực lượng chuyên trách bảo vệ an ninh mạng",
                    "D": "Lực lượng chuyên trách bảo vệ an ninh mạng thuộc Bộ Công an"
                },
                "answer": "B"
            },
            {
                "id": 181,
                "category": "Chương 7",
                "question": "An ninh phi truyền thống và các mối đe dọa an ninh phi truyền thống ở Việt Nam Tìm trả lời sai: Định dạng các mối đe dọa an ninh phi truyền thống bao gồm ?",
                "options": {
                    "A": "An ninh con người.",
                    "B": "An ninh Tổ quốC,",
                    "C": "An ninh tài chính.",
                    "D": "An ninh năng lượng."
                },
                "answer": "B"
            },
            {
                "id": 182,
                "category": "Chương 1",
                "question": "Tìm trả lời sai: Định dạng các mối đe dọa an ninh phi truyền thống bao gồm ?",
                "options": {
                    "A": "An ninh lương thựC,",
                    "B": "An ninh quốc giA,",
                    "C": "Biến đổi khí hậu.",
                    "D": "Thiên tai."
                },
                "answer": "B"
            },
            {
                "id": 183,
                "category": "Chương 1",
                "question": "Hãy chọn cụm từ đúng tương ứng vị trí (1) và (2) để làm rõ khái niệm sau: “Nội dung của an ninh truyền thống hay an ninh quốc gia chính là... (1)... (2), an ninh xã hội.",
                "options": {
                    "A": "An ninh quốc gia (1); sức mạnh vũ trang (2)",
                    "B": "Tiềm lực vũ trang (1); an ninh quốc phòng (2)",
                    "C": "An ninh chính trị (1); an ninh quân sự (2)",
                    "D": "An ninh quốc phòng (1); thế trận quốc phòng (2)"
                },
                "answer": "C"
            },
            {
                "id": 184,
                "category": "Chương 1",
                "question": "Hãy chọn cụm từ đúng nhất tương ứng vị trí (1) và (2) để làm rõ khái niệm sau: Hãy chọn cụm từ đúng nhất tương ứng vị trí (1) và (2) để làm rõ khái niệm sau: “Nội dung của an ninh truyền thống hay an ninh quốc gia chính là an ninh chính trị,... (1)... (2)",
                "options": {
                    "A": "Tiềm lực vũ trang (1); an ninh chính trị (2)",
                    "B": "An ninh quân sự (1); tiềm lực vũ trang (2)",
                    "C": "An ninh quân sự (1); An ninh xã hội (2)",
                    "D": "Tiềm lực quốc phòng (1); an ninh chính trị (2)"
                },
                "answer": "C"
            },
            {
                "id": 185,
                "category": "Chương 1",
                "question": "Một trong giải pháp phòng ngừ",
                "options": {
                    "A": "Phối hợp chặt chẽ chống lực lượng gián điệp từ bên ngoài vào và lực lượng phản động bên trong.",
                    "B": "Tổ chức lực lượng phòng phòng ngừa, ứng phó với các mối đe dọa an ninh phi truyền thống.",
                    "C": "Chủ động, tích cực phòng ngừa, ứng phó với các mối đe dọa an ninh phi truyền thống.",
                    "D": "Tổ chức lực lượng quần chúng rộng rãi xây dựng nền quốc phòng toàn dân, an ninh nhân dân."
                },
                "answer": "C"
            },
            {
                "id": 186,
                "category": "Chương 1",
                "question": "Tìm trả lời đúng: Những thách thức và đe dọa an ninh phi truyền thống là ?",
                "options": {
                    "A": "Cản trở quá trình phát triển nền văn hóa tiên tiến đậm đà bản sắc dân tộC,",
                    "B": "Làm suy giảm sức mạnh của sự nghiệp đổi mới, sự nghiệp công nghiệp hóa, hiện đại hóa đất nướC,",
                    "C": "Làm suy giảm sức mạnh quốc phòng của đất nướC,",
                    "D": "Làm suy giảm sức mạnh sẵn sàng chiến đấu của lực lượng vũ trang."
                },
                "answer": "C"
            },
            {
                "id": 187,
                "category": "Chương 1",
                "question": "Tìm trả lời đúng: Những thách thức và đe dọa an ninh phi truyền thống là ?",
                "options": {
                    "A": "Cản trở quá trình phát triển nền văn hóa tiên tiến đậm đà bản sắc dân tộC,",
                    "B": "Làm suy giảm sức mạnh an ninh của đất nướC,",
                    "C": "Hình thành nguy cơ xung đột và chiến tranh.",
                    "D": "Làm suy giảm sức mạnh sẵn sàng chiến đấu của lực lượng vũ trang."
                },
                "answer": "C"
            },
            {
                "id": 188,
                "category": "Chương 1",
                "question": "Tìm trả lời đúng: Những thách thức và đe dọa an ninh phi truyền thống là ?",
                "options": {
                    "A": "Cản trở quá trình phát triển nền văn hóa tiên tiến đậm đà bản sắc dân tộC,",
                    "B": "Gây mất ổn định của quốc giA,",
                    "C": "Làm suy giảm sức mạnh an ninh của đất nướC,",
                    "D": "Làm suy giảm sức mạnh sẵn sàng chiến đấu của lực lượng vũ trang."
                },
                "answer": "B"
            },
            {
                "id": 189,
                "category": "Chương 1",
                "question": "Điền cụm từ phù hợp vào chỗ trống: “Nâng cao nhận thức về các mối đe dọa an ninh phi truyền thống đối với an ninh con người, an ninh cộng đồng, .... .... ....” để phòng ngừ",
                "options": {
                    "A": "Hai nhiệm vụ chiến lược xây dựng và bảo vệ Tổ quốC,",
                    "B": "Sức mạnh của lực lượng vũ trang.",
                    "C": "Sự nghiệp công nghiệp hoá, hiện đại hoá đất nướC,",
                    "D": "An ninh quốc gia và an ninh nhân loại."
                },
                "answer": "D"
            },
            {
                "id": 190,
                "category": "Chương 1",
                "question": "Điền cụm từ phù hợp vào chỗ trống: “Nâng cao nhận thức về các mối đe dọa an ninh phi truyền thống đối với an ninh con người, an ninh cộng đồng, .... .... ....” để phòng ngừ",
                "options": {
                    "A": "An ninh quốc gia và an ninh toàn cầu.",
                    "B": "Sức mạnh của lực lượng vũ trang.",
                    "C": "An ninh cộng đồng.",
                    "D": "Sự nghiệp công nghiệp hoá, hiện đại hoá đất nướC,"
                },
                "answer": "C"
            },
            {
                "id": 191,
                "category": "Chương 1",
                "question": "Điền cụm từ phù hợp vào chỗ trống: “Nâng cao nhận thức về các mối đe dọa an ninh phi truyền thống đối với an ninh con người, an ninh cộng đồng, .... .... ....” để phòng ngừ",
                "options": {
                    "A": "An ninh quốc gia và an ninh toàn cầu.",
                    "B": "An ninh con người",
                    "C": "An ninh công nghiệp hóa, hiện đại hóA,",
                    "D": "Sự nghiệp công nghiệp hoá, hiện đại hoá đất nướC,"
                },
                "answer": "B"
            },
            {
                "id": 192,
                "category": "Chương 1",
                "question": "Giải pháp phòng ngừ",
                "options": {
                    "A": "Thống nhất.",
                    "B": "Phát triển.",
                    "C": "Mở rộng.",
                    "D": "Đẩy mạnh."
                },
                "answer": "C"
            },
            {
                "id": 193,
                "category": "Chương 1",
                "question": "Một trong những giải pháp phòng ngừ",
                "options": {
                    "A": "Tích cực",
                    "B": "Phát triển.",
                    "C": "Tăng cường.",
                    "D": "Đẩy mạnh."
                },
                "answer": "C"
            },
            {
                "id": 194,
                "category": "Chương 1",
                "question": "Một trong những giải pháp phòng ngừ",
                "options": {
                    "A": "Phản ứng.",
                    "B": "Xử lý.",
                    "C": "Ứng phó.",
                    "D": "Đối phó"
                },
                "answer": "C"
            },
            {
                "id": 195,
                "category": "Chương 1",
                "question": "Một trong những giải pháp phòng ngừ",
                "options": {
                    "A": "Ngân sách.",
                    "B": "Tài chính.",
                    "C": "Bên trong.",
                    "D": "Tại chỗ"
                },
                "answer": "D"
            },
            {
                "id": 196,
                "category": "Chương 1",
                "question": "Nghị quyết Đại hội Đại biểu toàn quốc lần thứ XIII của Đảng khẳng định: “Tập trung … Covid-19, tiêm chủng đại trà vắc-xin Covid-19 cho cộng đồng”.",
                "options": {
                    "A": "Xóa bỏ đại dịch.",
                    "B": "Khoanh vùng, dập dịch.",
                    "C": "Dập tắt dịch bệnh.",
                    "D": "Kiểm soát đại dịch"
                },
                "answer": "D"
            },
            {
                "id": 197,
                "category": "Chương 1",
                "question": "Nghị quyết Đại hội lần thứ XIII của Đảng nhấn mạnh: “Quản lý chặt chẽ, sử dụng hợp lý, hiệu quả đất đai, tài nguyên; bảo vệ, cải thiện môi trường; chủ động, tích cực triển khai các … với biến đổi khí hậu, thiên tai khắc nghiệt”.",
                "options": {
                    "A": "Giải pháp đối phó.",
                    "B": "Giải pháp khắc phục, giảm nhẹ.",
                    "C": "Giải pháp thích ứng.",
                    "D": "Giải pháp ứng phó."
                },
                "answer": "C"
            },
            {
                "id": 198,
                "category": "Chương 1",
                "question": "Điền từ còn thiếu vào sau: “Phát huy sức mạnh tổng hợp của … và toàn xã hội trong quản trị và kiểm soát các mối đe dọa an ninh phi truyền thống”.",
                "options": {
                    "A": "Các bộ, ban, ngành.",
                    "B": "Các bộ, ban, ngành, đoàn thể.",
                    "C": "Toàn dân tộC,",
                    "D": "Hệ thống chính trị."
                },
                "answer": "D"
            },
            {
                "id": 199,
                "category": "Chương 1",
                "question": "Đại hội lần thứ XIII của Đảng đặt ra mục tiêu đến năm 2025, tỉ lệ sử dụng nước sạch, nước hợp vệ sinh của dân cư thành thị là:",
                "options": {
                    "A": "Từ 95% đến 100%.",
                    "B": "Từ 90% đến 100%.",
                    "C": "Từ 92% đến 95%.",
                    "D": "Từ 90% đến 95%."
                },
                "answer": "A"
            },
            {
                "id": 200,
                "category": "Chương 1",
                "question": "Nội dung nào không phải là một vấn đề an ninh phi truyền thống?",
                "options": {
                    "A": "Tội phạm công nghệ cao.",
                    "B": "Ô nhiễm môi trường và biến đổi khí hậu.",
                    "C": "An ninh năng lượng.",
                    "D": "Đe dọa sử dụng vũ lực trong quan hệ quốc tế."
                },
                "answer": "D"
            },
            {
                "id": 201,
                "category": "Chương 1",
                "question": "Đại dịch Covid 19 là một vấn đề an ninh phi truyền thống ở quy mô nào?",
                "options": {
                    "A": "Quy mô khu vựC,",
                    "B": "Quy mô châu lụC,",
                    "C": "Quy mô toàn cầu.",
                    "D": "Cả baANSWER trên đều sai."
                },
                "answer": "C"
            },
            {
                "id": 202,
                "category": "Chương 1",
                "question": "Bảo vệ an ninh quốc gia là phải:",
                "options": {
                    "A": "Loại bỏ những mối đe dọa đến lợi ích cơ bản của nhân dân",
                    "B": "Đấu tranh với tội phạm và đối tượng phá hoại trật tự xã hội",
                    "C": "Chặn đứng các hành động phá hoại, xâm phạm tài sản nhân dân",
                    "D": "Loại trừ những mối uy hiếp đối với lợi ích cơ bản của quốc gia"
                },
                "answer": "D"
            },
            {
                "id": 203,
                "category": "Chương 1",
                "question": "Mục tiêu của an ninh quốc gia là:",
                "options": {
                    "A": "Phòng ngừa sự chống phá của các loại tội phạm",
                    "B": "Bảo vệ vững chắc chủ quyền và an ninh quốc gia",
                    "C": "Bảo vệ truyền thống đoàn kết trong nội bộ",
                    "D": "Phòng chống nạn tham nhũng, quan liêu"
                },
                "answer": "B"
            },
            {
                "id": 204,
                "category": "Chương 1",
                "question": "An ninh phi truyền thống có thể hiểu là một loại hình:",
                "options": {
                    "A": "An ninh xuyên quốc gia",
                    "B": "An toàn xuyên quốc gia",
                    "C": "An ninh trong quốc gia",
                    "D": "An toàn trong hội nhập"
                },
                "answer": "A"
            },
            {
                "id": 205,
                "category": "Chương 1",
                "question": "Giải quyết các nội dung về an ninh phi truyền thống phải là nhiệm vụ:",
                "options": {
                    "A": "Mang tính toàn cầu",
                    "B": "Của từng quốc gia",
                    "C": "Mang tính thống nhất",
                    "D": "Của từng khu vực"
                },
                "answer": "A"
            },
            {
                "id": 206,
                "category": "Chương 1",
                "question": "Gây ra những hệ lụy như: sản xuất đình trệ, thất nghiệp gia tăng, đứt gãy chuỗi cung ứng sản xuất và tiêu dùng, kinh tế suy thoái, kém phát triển, đời sống người dân gặp khó khăn… là những thách thứ",
                "options": {
                    "A": "Xã hội",
                    "B": "Kinh tế",
                    "C": "Môi trường",
                    "D": "Sản xuất"
                },
                "answer": "B"
            },
            {
                "id": 207,
                "category": "Chương 1",
                "question": "An ninh phi truyền thống xuất phát từ các yếu tố do tự nhiên gây ra như:",
                "options": {
                    "A": "Biến đổi khí hậu, xung đột biên giới, hỏa hoạn",
                    "B": "Hạn hán, ô nhiễm môi trường, khủng hoảng kinh tế",
                    "C": "Biến dổi khí hậu, trái đất nóng lên, thiên tai, bão lũ, hạn hán, sóng thần",
                    "D": "Khủng hoảng kinh tế, hạn hán, tội phạm, ma túy"
                },
                "answer": "C"
            },
            {
                "id": 208,
                "category": "Chương 1",
                "question": "An ninh phi truyền thống do các yếu tố:",
                "options": {
                    "A": "Phi kinh tế, phi chính trị gây ra",
                    "B": "Phi chính trị, phi quân sự gây ra",
                    "C": "Phi quân sự, phi ngoại giao gây ra",
                    "D": "Phi quân sự, phi văn hóa gây ra"
                },
                "answer": "B"
            },
            {
                "id": 209,
                "category": "Chương 1",
                "question": "Đảng ta đã chỉ rõ “sẵn sàng ứng phó với các mối đe dọa an ninh truyền thống và phi truyền thống” tại:",
                "options": {
                    "A": "Nghị quyết Trung ương 8",
                    "B": "Đại hội lần thứ XII",
                    "C": "Đại hội lần thứ X",
                    "D": "Nghị quyết Trung ương 12"
                },
                "answer": "B"
            },
            {
                "id": 210,
                "category": "Chương 1",
                "question": "Nguy cơ xâm phạm biên giới đất liền, biển đảo, vùng trời của Tổ quốc là một trong những thách thứ",
                "options": {
                    "A": "Bất ổn xã hội",
                    "B": "An ninh truyền thống",
                    "C": "An toàn truyền thống",
                    "D": "Bất ổn quốc gia"
                },
                "answer": "B"
            }
        ]
    }
};
