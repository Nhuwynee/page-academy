const all_courses = [
  {
    id: 1,
    name: "Fullstack Developer",
    image: "../img/course/course-1.jpg",
    title: "Trở thành Fullstack Developer trong 6 tháng",
    subtitle:
      "Thực hành cùng chuyên gia – Làm việc trên codebase thật – Cơ hội tuyển dụng tại Techzen",
    description:
      "Khóa học này trang bị cho bạn đầy đủ kỹ năng để trở thành một lập trình viên Full-Stack JavaScript toàn diện. Bạn sẽ học cách xây dựng giao diện người dùng (Frontend) hiện đại với React.js và phát triển hệ thống phía máy chủ (Backend) mạnh mẽ với Node.js/Express và MongoDB. Khóa học tập trung vào thực hành qua các dự án thực tế, giúp bạn tự tin xây dựng và triển khai ứng dụng web hoàn chỉnh.",
    durition: "6 tháng",
    address: "Offline tại văn phòng techzen",
    value: "fullstack",
    mode: "Offline",
    price: 50000000,
    price_sale: 22500000,
    so_buoi_hoc: 16,
    ly_do_hoc: {
      lo_trinh_toan_dien: [
        "Từ Core đến DevOps",
        "Kết nối chuyên gia & PM Techzen học hỏi kinh nghiệm thực tế",
        "Môi trường đào tạo thực tế sử dụng server và codebase của Techzen",
      ],
      ho_tro_hoc_vien: [
        "Ưu tiên tuyển dụng",
        "Định hướng nghề nghiệp 1-1",
        "Lộ trình tinh gọn, tập trung hands-on và business driven",
      ],
      gia_tri_lau_dai: [
        "Nâng cao chuyên môn từ Fresher lên Junior",
        "Mở rộng kiến thức fullstack, tăng cơ hội việc làm",
        "Trải nghiệm quy trình dự án chuẩn Agile",
      ],
    },
    tieu_de_lo_trinh: "26 Tuần trở thành một FULLSTACK DEVELOPER",
    lo_trinh: [
      {
        thoi_gian: "Tuần 1-7",
        title: "Java Core & OOP",
      },
      {
        thoi_gian: "Tuần 8-10",
        title: "SQL",
      },
      {
        thoi_gian: "Tuần 11-16",
        title: "Spring Boot",
      },
      {
        thoi_gian: "Tuần 17-22",
        title: "Frontend - VueJS",
      },
      {
        thoi_gian: "Tuần 23-26",
        title: "Mock Project",
      },
    ],
    lo_trinh_chi_tiet: [
      {
        thoi_gian: "Tuần 1-7",
        sologan: "Đào tạo trong môi trường thực chiến",
        hinh_anh: "/img/image1.jpg",
        noi_dung_chi_tiet: [
          "Cài đặt môi trường",
          "Cấu trúc điều kiện",
          "Cấu trúc lặp cơ bản và nâng cao",
          "Khai báo và sử dụng phương thức",
          "Hướng dẫn cách Debug Code",
          "Xử lý dữ liệu kiểu String",
          "Mảng một chiều & Hai chiều",
          "Tổng quan về lập trình hướng đối tượng",
          "Cách định nghĩa và sử dụng Constructor, Access Modifier, Static",
          "Kế thừa, đa hình và lớp trừu tượng",
          "Java Collection Framework",
          "Generic, Stack, Queue",
          "Xử lý lỗi và bắt ngoại lệ",
          "Xử lý File",
        ],
        ky_nang_bo_tro: {
          ky_nang: [
            "Agile & Scrum (Lý thuyết)",
            "Agile & Scrum (Thực hành)",
            "Khởi động dự án (Sprint 0)",
            "Design think (Thấu cảm - phân tích vấn đề)",
            "Design UI/UX (Wireframe, Flow nghiệp vụ)",
          ],
          kien_thuc: [
            "Làm quen với HTML và cấu trúc cơ bản",
            "Làm việc với CSS và quy tắc định dạng",
            "JavaScript căn bản",
            "Cách dùng Git để quản lý Code",
          ],
        },
      },
      {
        thoi_gian: "Tuần 8-10",
        sologan: "Trau dồi kỹ năng trao đổi làm việc nhóm và hợp tác nhóm",
        hinh_anh: "/img/image2.jpg",
        noi_dung_chi_tiet: [
          "Cài đặt môi trường",
          "Cấu trúc điều kiện",
          "Thiết kế Cơ Sở Dữ Liệu",
          "Thao tác với cơ sở dữ liệu",
          "Giới thiệu & Câu lệnh cơ bản",
          "Dữ liệu & Tạo bảng",
          "JOIN & quan hệ bảng",
          "GROUP BY & Subquery",
        ],
        ky_nang_bo_tro: {
          ky_nang: [
            "Hướng dẫn dùng Teckchan chạy dự án (Thực hành)",
            "Horensho – Báo cáo, liên lạc và trao đổi trong team",
            "Unit Test (Thiết kế testcase và cách test)",
            "Integration Test & Test API",
          ],
          kien_thuc: [
            "Cách phân tích và thống kê bug",
            "Cách quản lý và báo cáo tình hình bug",
          ],
        },
      },
      {
        thoi_gian: "Tuần 11-16",
        sologan: "Đưa được hệ thống lên server và public trên internet",
        hinh_anh: "/img/image3.jpg",
        noi_dung_chi_tiet: [
          "Tổng quan về web",
          "CRUD theo RestFul API",
          "Mô hình MVC",
          "Kiến thức về JDBC – kết nối Database",
          "Spring Data JPA",
          "Làm việc với Table",
          "DTO & Mapstruct",
          "Validate, Exception Handler, Logger",
          "JUnit, SonarLint, SonarQube",
          "Authentication, Authorization",
          "Spring Security",
          "Refresh Token và Logout",
        ],
        ky_nang_bo_tro: {
          ky_nang: [
            "Tổng quan về DevOps",
            "Công cụ DevOps và giám sát hệ thống",
            "Hệ điều hành Linux",
            "Các khối lệnh cơ bản trong Linux",
          ],
          kien_thuc: [
            "Cách cài đặt môi trường Server",
            "Thiết lập Nginx và cài đặt bảo mật",
            "Cài đặt docker",
            "Backup, Logging và Alerting",
          ],
        },
      },
      {
        thoi_gian: "Tuần 17-22",
        sologan: "Giai đoạn chuyển mình, áp dụng các kiến thức vào thực chiến",
        hinh_anh: "/img/image4.jpg",
        noi_dung_chi_tiet: [
          "Giới thiệu Vue.js & môi trường",
          "Templating & Binding",
          "Directive & Condition",
          "Component cơ bản",
          "Slot & Lifecycle",
          "Cách dùng Router",
          "Quản lý trạng thái – Vuex/Pinia",
          "Kết nối API & Axios",
          "Form và Validation",
          "Composition API",
          "Deploy & tối ưu",
        ],
        ky_nang_bo_tro: {
          ky_nang: [
            "Quản lý hiệu suất và CDN",
            "Tối ưu UX và kiểm tra Form",
            "Tối ưu hóa màu sắc và SEO cơ bản",
            "SEO nâng cao và tối ưu hóa trang web",
            "Kỹ thuật Animation và tối ưu hiệu suất",
          ],
          kien_thuc: [],
        },
      },
      {
        thoi_gian: "Tuần 23-26",
        sologan: "Mock Project – Áp dụng toàn bộ kiến thức đã học",
        hinh_anh: "/img/image5.jpg",
        noi_dung_chi_tiet: [
          "Triển khai dự án từ đầu đến cuối",
          "Áp dụng full quy trình Agile/Scrum",
          "Làm việc trong team thực tế của Techzen",
          "Codebase thật, deploy thật",
          "Q&A cùng PM/Leader, nhận góp ý",
        ],
        ky_nang_bo_tro: {
          ky_nang: [],
          kien_thuc: [],
        },
      },
    ],
    ky_nang_nhan_duoc: [
      {
        name: "Kỹ năng lập trình",
        content:
          "Sinh viên CNTT năm 2-4 hoặc mới tốt nghiệp: Mong muốn nâng cao năng lực thực chiến, lấp khoảng cách giữa kiến thức học đường và thực tế doanh nghiệp.",
      },
      {
        name: "Kỹ năng framework",
        content:
          "Nắm vững và áp dụng các framework phổ biến (Spring Boot, VueJS, ...) để xây dựng ứng dụng thực tế, rút ngắn thời gian phát triển và nâng cao chất lượng sản phẩm.",
      },
      {
        name: "Kỹ năng teamwork",
        content:
          "Rèn luyện kỹ năng phối hợp trong nhóm, áp dụng Agile/Scrum, cải thiện khả năng giao tiếp, báo cáo và xử lý vấn đề khi làm việc trong môi trường dự án thực tế.",
      },
    ],
    doi_tuong: [
      "Sinh viên CNTT năm 2-4 hoặc mới tốt nghiệp",
      "Người trái ngành có tư duy logic, mong muốn chuyển nghề sang IT",
      "Lập trình viên Backend/DevOps đã có nền tảng, muốn bổ sung kỹ năng",
      "Cá nhân quan tâm đến ngành lập trình, muốn trải nghiệm quy trình",
      "Doanh nghiệp muốn đào tạo lại hoặc nâng cao kỹ năng nhân sự",
    ],
  },
  {
    id: 2,
    name: "SQL",
    image: "../img/course/course-2.jpg",
    title: "SQL THỰC CHIẾN - LÀM CHỦ CƠ SỞ DỮ LIỆU CHỈ SAU 1 THÁNG",
    subtitle:
      "Thực hành cùng chuyên gia – Làm việc trên codebase thật – Cơ hội tuyển dụng tại Techzen",
    description:
      "Từ kiến thức cơ bản đến kỹ thuật truy vấn nâng cao, khóa SQL tại Techzen Academy giúp bạn thành thạo thiết kế, quản lý và tối ưu cơ sở dữ liệu. Học viên được thực hành 80% thời lượng với hệ thống thật, mentor là Tech Lead/PM trực tiếp hướng dẫn, áp dụng quy trình Sprint chuẩn doanh nghiệp. Hoàn thành khóa học, bạn đủ năng lực truy vấn, xử lý và phân tích dữ liệu – kỹ năng không thể thiếu cho lập trình viên, tester, BA hay bất kỳ ai làm việc với dữ liệu.",
    durition: "3 tháng",
    address: "Offline tại văn phòng Techzen",
    value: "sql",
    mode: "Offline",
    price: 20000000,
    price_sale: 9500000,
    so_buoi_hoc: 10,
    ly_do_hoc: {
      lo_trinh_toan_dien: [
        "Làm chủ kiến thức từ SQL cơ bản đến nâng cao",
        "Ứng dụng SQL vào phân tích dữ liệu và tối ưu hệ thống",
        "Trải nghiệm xử lý cơ sở dữ liệu qua các dự án thực tế",
      ],
      ho_tro_hoc_vien: [
        "Được kèm cặp trực tiếp bởi giảng viên và mentor",
        "Bài tập thực hành và case study đa dạng",
        "Tư vấn lộ trình nghề nghiệp liên quan đến Data/Backend",
      ],
      gia_tri_lau_dai: [
        "Sử dụng SQL thành thạo để phân tích và xử lý dữ liệu",
        "Kỹ năng thiết kế và tối ưu cơ sở dữ liệu",
        "Tăng lợi thế cạnh tranh trong lĩnh vực Data Analyst, Backend Developer",
      ],
    },
    tieu_de_lo_trinh: "Lộ trình học SQL chuyên sâu trong 10 buổi",
    lo_trinh: [
      {
        thoi_gian: "Buổi 1-4",
        title: "Cơ bản & Truy vấn dữ liệu",
      },
      {
        thoi_gian: "Buổi 5-7",
        title: "Thiết kế & Quản lý CSDL",
      },
      {
        thoi_gian: "Buổi 8-10",
        title: "Kết nối & Tối ưu dữ liệu môi trường",
      },
    ],
    lo_trinh_chi_tiet: [
      {
        thoi_gian: "Buổi 1",
        sologan: "Làm quen với SQL & Database",
        hinh_anh: "/img/roadmap/sql/sql1.webp",
        noi_dung_chi_tiet: [
          "Cài đặt môi trường, giới thiệu cơ bản về Database",
          "Cấu trúc câu lệnh SELECT",
          "Sử dụng WHERE để lọc dữ liệu",
          "ORDER BY & LIMIT để sắp xếp và giới hạn kết quả",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Thực hành viết các câu lệnh SQL cơ bản"],
          kien_thuc: ["Hiểu cách truy vấn dữ liệu từ bảng"],
        },
      },
      {
        thoi_gian: "Buổi 2",
        sologan: "Các phép toán & hàm cơ bản",
        hinh_anh: "/img/roadmap/sql/sql2.webp",
        noi_dung_chi_tiet: [
          "Toán tử so sánh: =, >, <, BETWEEN, LIKE",
          "Hàm tổng hợp: COUNT, SUM, AVG, MIN, MAX",
          "GROUP BY & HAVING",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Thực hành thống kê dữ liệu với GROUP BY"],
          kien_thuc: ["Ứng dụng hàm tổng hợp trong báo cáo dữ liệu"],
        },
      },
      {
        thoi_gian: "Buổi 3",
        sologan: "Subquery & nâng cao truy vấn",
        hinh_anh: "/img/roadmap/sql/sql3.webp",
        noi_dung_chi_tiet: [
          "Khái niệm Subquery",
          "Ứng dụng Subquery trong lọc và tính toán dữ liệu phức tạp",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Sử dụng Subquery trong truy vấn lồng nhau"],
          kien_thuc: ["Phân tích dữ liệu bằng câu lệnh SQL nâng cao"],
        },
      },
      {
        thoi_gian: "Buổi 4",
        sologan: "Thiết kế & quản lý cơ sở dữ liệu",
        hinh_anh: "/img/roadmap/sql/sql4.webp",
        noi_dung_chi_tiet: [
          "CREATE DATABASE, CREATE TABLE",
          "Định nghĩa kiểu dữ liệu",
          "Ràng buộc: PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, CHECK",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Tạo mới và quản lý bảng dữ liệu"],
          kien_thuc: ["Xây dựng cấu trúc cơ sở dữ liệu chuẩn hóa"],
        },
      },
      {
        thoi_gian: "Buổi 5",
        sologan: "Quản trị & thay đổi cấu trúc DB",
        hinh_anh: "/img/roadmap/sql/sql5.webp",
        noi_dung_chi_tiet: [
          "ALTER TABLE để chỉnh sửa bảng",
          "DROP TABLE, DELETE dữ liệu",
          "ERD (Entity Relationship Diagram) và phân tích dữ liệu",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Vẽ ERD và chuyển sang bảng vật lý"],
          kien_thuc: ["Phân tích và mô hình hóa dữ liệu"],
        },
      },
      {
        thoi_gian: "Buổi 6",
        sologan: "Viết script DDL & triển khai DB",
        hinh_anh: "/img/roadmap/sql/sql6.webp",
        noi_dung_chi_tiet: [
          "Thực hành viết script DDL đầy đủ",
          "Triển khai cơ sở dữ liệu thật từ ERD sang SQL",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Thực hành viết script SQL DDL"],
          kien_thuc: ["Quản lý vòng đời cơ sở dữ liệu"],
        },
      },
      {
        thoi_gian: "Buổi 7",
        sologan: "Làm việc với JOIN cơ bản",
        hinh_anh: "/img/roadmap/sql/sql7.webp",
        noi_dung_chi_tiet: [
          "INNER JOIN, LEFT JOIN, RIGHT JOIN",
          "Thực hành JOIN 2–3 bảng",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Thực hành kết hợp dữ liệu nhiều bảng"],
          kien_thuc: ["Hiểu và áp dụng các loại JOIN cơ bản"],
        },
      },
      {
        thoi_gian: "Buổi 8",
        sologan: "JOIN nâng cao & nhiều bảng",
        hinh_anh: "/img/roadmap/sql/sql8.webp",
        noi_dung_chi_tiet: [
          "FULL JOIN, SELF JOIN, CROSS JOIN, NATURAL JOIN",
          "JOIN nhiều bảng phức tạp",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Viết truy vấn JOIN nâng cao"],
          kien_thuc: ["Xử lý dữ liệu từ nhiều bảng trong môi trường thực tế"],
        },
      },
      {
        thoi_gian: "Buổi 9",
        sologan: "Tối ưu hóa dữ liệu & Index",
        hinh_anh: "/img/roadmap/sql/sql9.webp",
        noi_dung_chi_tiet: [
          "Khái niệm Index",
          "Cách tạo Index và tác động tới hiệu năng",
          "Các lỗi thường gặp khi JOIN nhiều bảng",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Tối ưu hóa truy vấn với Index"],
          kien_thuc: ["Hiểu cơ chế Index và khi nào nên sử dụng"],
        },
      },
      {
        thoi_gian: "Buổi 10",
        sologan: "Ứng dụng thực tế & tổng kết",
        hinh_anh: "/img/roadmap/sql/sql10.webp",
        noi_dung_chi_tiet: [
          "Kết hợp JOIN + Subquery",
          "Thực hành viết báo cáo dữ liệu tổng hợp",
          "Rút kinh nghiệm về tối ưu SQL",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Xây dựng báo cáo dữ liệu phức tạp"],
          kien_thuc: ["Ứng dụng tổng hợp SQL trong dự án thật"],
        },
      },
    ],
    ky_nang_nhan_duoc: [
      {
        name: "Kỹ năng SQL",
        content:
          "Thành thạo cú pháp SQL, viết được các truy vấn từ cơ bản đến nâng cao, JOIN nhiều bảng và xử lý dữ liệu thực tế.",
      },
      {
        name: "Kỹ năng thiết kế Database",
        content:
          "Biết cách phân tích yêu cầu, thiết kế lược đồ cơ sở dữ liệu chuẩn hóa, quản lý ràng buộc và quan hệ.",
      },
      {
        name: "Kỹ năng tối ưu & vận hành",
        content:
          "Nắm vững indexing, tối ưu truy vấn, hiểu cách quản lý transaction và xử lý lỗi để vận hành hệ thống bền vững.",
      },
    ],
    doi_tuong: [
      "Sinh viên CNTT muốn học SQL để phục vụ cho học tập và nghiên cứu",
      "Người trái ngành muốn chuyển sang Data/Backend Developer",
      "Lập trình viên muốn bổ sung kỹ năng làm việc với cơ sở dữ liệu",
      "Phân tích viên dữ liệu cần sử dụng SQL trong công việc hàng ngày",
      "Doanh nghiệp muốn đào tạo nhân sự nâng cao năng lực quản lý dữ liệu",
    ],
  },
  {
    id: 3,
    name: "DevOps",
    image: "../img/course/course-3.jpg",
    title: "KHÓA HỌC DEVOPS THỰC CHIẾN",
    subtitle: "Cài đặt và Cấu hình Server Cài đặt và Cấu hình Server",
    description:
      "Khóa học DevOps thực chiến giúp học viên hiểu rõ quy trình CI/CD, sử dụng các công cụ như Git, Docker, Jenkins, và tích hợp với AWS. Chương trình tập trung vào tự động hóa triển khai, giám sát và vận hành hệ thống phần mềm theo chuẩn doanh nghiệp. Cung cấp kiến thức cơ bản và nâng cao về cài đặt, cấu hình và triển khai server. 70% thời lượng dành cho thực hành, giúp học viên tự tay triển khai môi trường thực tế.",
    durition: "3 tháng",
    address: "Offline tại văn phòng Techzen",
    value: "devops",
    mode: "Offline",
    price: 25000000,
    price_sale: 12000000,
    so_buoi_hoc: 12,
    ly_do_hoc: {
      lo_trinh_toan_dien: [
        "Từ Core đến DevOps",
        "Kết nối chuyên gia & PM Techzen học hỏi kinh nghiệm thực tế.",
        "Môi trường đào tạo thực tế sử dụng server và codebase của Techzen",
      ],
      ho_tro_hoc_vien: [
        "Ưu tiên tuyển dụng",
        "Định hướng nghề nghiệp 1-1",
        "Lộ trình tinh gọn, tập trung hands-on và business-driven",
      ],
      gia_tri_lau_dai: [
        "Nâng cao chuyên môn từ Fresher lên Junior",
        "Mở rộng kiến thức fullstack, tăng cơ hội việc làm",
        "Trải nghiệm quy trình dự án chuẩn Agile",
      ],
    },
    tieu_de_lo_trinh: "Lộ trình học DevOps trong 12 buổi",
    lo_trinh: [
      { thoi_gian: "Buổi 1-3", title: "Môi trường, Công cụ cơ bản & Bảo mật" },
      { thoi_gian: "Buổi 4-6", title: "Linux cơ bản, Nginx & Docker" },
      { thoi_gian: "Buổi 7-9", title: "Database, Script & Tự động hóa" },
      {
        thoi_gian: "Buổi 10-12",
        title: "Triển khai dự án, Logging & Tổng kết",
      },
    ],
    lo_trinh_chi_tiet: [
      {
        thoi_gian: "Buổi 1",
        sologan: "Giới thiệu & Chuẩn bị môi trường",
        hinh_anh: "/img/roadmap/devops/devops1.png",
        noi_dung_chi_tiet: [
          "Khái niệm server, VPS, cloud; mô hình client-server",
          "Cài đặt VirtualBox trên Windows",
          "Tạo VM Ubuntu 22.04; thiết lập SSH",
          "SSH key authentication",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Tạo VM, kết nối SSH", "Hiểu mô hình client-server"],
          kien_thuc: ["Cấu hình máy ảo Ubuntu cơ bản"],
        },
      },
      {
        thoi_gian: "Buổi 2",
        sologan: "Kết nối & Cài đặt công cụ cơ bản",
        hinh_anh: "/img/roadmap/devops/devops2.png",
        noi_dung_chi_tiet: [
          "SSH vào server",
          "Cài đặt curl, wget, git",
          "Cấu hình SSH key agent & SSH config file",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Cài đặt công cụ quản trị cơ bản"],
          kien_thuc: ["Quản lý kết nối SSH an toàn"],
        },
      },
      {
        thoi_gian: "Buổi 3",
        sologan: "Quản lý người dùng & Bảo mật cơ bản",
        hinh_anh: "/img/roadmap/devops/devops3.png",
        noi_dung_chi_tiet: [
          "Người dùng, nhóm, sudo; SSH key authentication",
          "Tạo user mới, cấu hình sudo permissions",
          "Cài đặt bảo mật cơ bản: UFW, CSF",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Quản lý user & phân quyền"],
          kien_thuc: ["Thiết lập bảo mật căn bản cho server"],
        },
      },
      {
        thoi_gian: "Buổi 4",
        sologan: "Các lệnh cơ bản trong Linux",
        hinh_anh: "/img/roadmap/devops/devops4.png",
        noi_dung_chi_tiet: [
          "Shell, syntax, man pages",
          "Các lệnh thao tác file: cp, mv, rm",
          "Quản lý package: chmod, chown, grep, find, apt",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Thực hành lệnh Linux cơ bản"],
          kien_thuc: ["Quản trị hệ thống qua CLI"],
        },
      },
      {
        thoi_gian: "Buổi 5",
        sologan: "Cài đặt Nginx & Triển khai ứng dụng đầu tiên",
        hinh_anh: "/img/roadmap/devops/devops5.png",
        noi_dung_chi_tiet: [
          "Cài đặt Nginx",
          "Reverse proxy, server block",
          "Deploy ứng dụng demo Node.js",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Cài đặt & cấu hình Nginx"],
          kien_thuc: ["Triển khai ứng dụng web cơ bản"],
        },
      },
      {
        thoi_gian: "Buổi 6",
        sologan: "Docker – Khái niệm & Cài đặt",
        hinh_anh: "/img/roadmap/devops/devops6.png",
        noi_dung_chi_tiet: [
          "Container vs VM",
          "Docker Engine, Docker CLI",
          "Dockerfile, build image, run container",
          "Docker Compose",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Làm việc với Docker CLI"],
          kien_thuc: ["Quản lý container & image"],
        },
      },
      {
        thoi_gian: "Buổi 7",
        sologan: "PostgreSQL bằng Docker & Truy cập từ local",
        hinh_anh: "/img/roadmap/devops/devops7.png",
        noi_dung_chi_tiet: [
          "PostgreSQL container",
          "Cấu hình volume để lưu trữ dữ liệu",
          "Kết nối DB từ local",
          "Quản lý dữ liệu bằng psql",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Chạy PostgreSQL bằng Docker"],
          kien_thuc: ["Làm việc với cơ sở dữ liệu qua container"],
        },
      },
      {
        thoi_gian: "Buổi 8",
        sologan: "Tạo Script đơn giản & Backup/File Copy",
        hinh_anh: "/img/roadmap/devops/devops8.png",
        noi_dung_chi_tiet: [
          "Shell script cơ bản: shebang, biến, if, exit code",
          "Quyền chmod, echo",
          "Viết script backup dữ liệu",
          "Copy file bằng rsync, scp",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Viết script tự động hóa"],
          kien_thuc: ["Quản lý backup dữ liệu cơ bản"],
        },
      },
      {
        thoi_gian: "Buổi 9",
        sologan: "Shell nâng cao & Lịch chạy tự động",
        hinh_anh: "/img/roadmap/devops/devops9.png",
        noi_dung_chi_tiet: [
          "Trap signal, exit codes nâng cao",
          "Viết shell script deploy",
          "Thiết lập cronjob, systemd timer",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Tự động hóa deploy với script"],
          kien_thuc: ["Quản lý cronjob & scheduling"],
        },
      },
      {
        thoi_gian: "Buổi 10",
        sologan: "Chuyển file lên server với SCP",
        hinh_anh: "/img/roadmap/devops/devops10.png",
        noi_dung_chi_tiet: [
          "scp, rsync, key exchange",
          "Upload & download file từ server",
          "Tích hợp vào pipeline CI/CD",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Quản lý file qua SCP/rsync"],
          kien_thuc: ["Tự động hóa quy trình copy dữ liệu"],
        },
      },
      {
        thoi_gian: "Buổi 11",
        sologan: "Quản lý Log, Backup & Deploy dự án thực tế",
        hinh_anh: "/img/roadmap/devops/devops11.png",
        noi_dung_chi_tiet: [
          "Logrotate, quản lý log",
          "Backup database & file",
          "Deploy project thực tế từ Git repository",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Triển khai dự án với Git"],
          kien_thuc: ["Thiết lập logging & backup an toàn"],
        },
      },
      {
        thoi_gian: "Buổi 12",
        sologan: "Thi lý thuyết & Kết thúc khóa học",
        hinh_anh: "/img/roadmap/devops/devops12.png",
        noi_dung_chi_tiet: [
          "Phát đề thi, trắc nghiệm & tự luận",
          "Chấm điểm, tổng kết",
          "Phát chứng chỉ",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Deploy full stack app lên server"],
          kien_thuc: ["Đánh giá & củng cố toàn bộ kiến thức DevOps"],
        },
      },
    ],
    ky_nang_nhan_duoc: [
      {
        name: "Kỹ năng hệ điều hành Linux",
        content:
          "Thành thạo các lệnh Linux, quản lý user, phân quyền và bảo mật hệ thống.",
      },
      {
        name: "Kỹ năng triển khai ứng dụng",
        content:
          "Cài đặt & cấu hình Nginx, Docker, PostgreSQL và triển khai ứng dụng thực tế.",
      },
      {
        name: "Kỹ năng tự động hóa & scripting",
        content:
          "Viết shell script, cronjob và quản lý backup để tự động hóa công việc.",
      },
      {
        name: "Kỹ năng DevOps thực chiến",
        content:
          "Vận hành log, backup, CI/CD và triển khai dự án từ Git repository lên server thật.",
      },
    ],
    doi_tuong: [
      "Sinh viên CNTT năm 3-4 hoặc mới tốt nghiệp muốn theo DevOps",
      "Người trái ngành muốn chuyển hướng sang System Admin/DevOps",
      "Lập trình viên muốn bổ sung kỹ năng về hạ tầng & triển khai",
      "Tester, BA, QA muốn hiểu quy trình CI/CD và DevOps",
      "Doanh nghiệp muốn đào tạo đội ngũ triển khai & vận hành hệ thống",
    ],
  },
  {
    id: 4,
    name: "Java Backend",
    image: "../img/course/course-4.jpg",
    title: "Trở thành Backend Developer trong 6 tháng",
    subtitle:
      "Thực hành cùng chuyên gia – Làm việc trên codebase thật – Cơ hội tuyển dụng tại Techzen",
    description:
      "Khóa học này trang bị cho bạn đầy đủ kỹ năng để trở thành một lập trình viên Full-Stack JavaScript toàn diện. Bạn sẽ học cách xây dựng giao diện người dùng (Frontend) hiện đại với React.js và phát triển hệ thống phía máy chủ (Backend) mạnh mẽ với Node.js/Express và MongoDB. Khóa học tập trung vào thực hành qua các dự án thực tế, giúp bạn tự tin xây dựng và triển khai ứng dụng web hoàn chỉnh.",
    durition: "4 tháng",
    address: "Offline tại văn phòng Techzen",
    value: "java-be",
    mode: "Offline",
    price: 28000000,
    price_sale: 14900000,
    so_buoi_hoc: 32,
    ly_do_hoc: {
      lo_trinh_toan_dien: [
        "Hệ thống kiến thức từ Core đến Spring Boot & Deploy",
        "Học trên codebase thật, tiêu chuẩn doanh nghiệp",
        "Kèm cặp 1-1, review code, luyện test & tối ưu",
      ],
      ho_tro_hoc_vien: [
        "Mentor hỗ trợ hàng ngày",
        "Bài tập/mini project mỗi tuần",
        "Định hướng nghề nghiệp, mock interview",
      ],
      gia_tri_lau_dai: [
        "Tự build dịch vụ backend hoàn chỉnh",
        "Thành thạo quy trình API, DB, bảo mật, logging",
        "Sẵn sàng ứng tuyển Fresher/Junior Backend",
      ],
    },
    tieu_de_lo_trinh: "16 tuần chinh phục Java Backend Developer",
    lo_trinh: [
      { thoi_gian: "Tuần 1-4", title: "Java Core & OOP" },
      { thoi_gian: "Tuần 5-8", title: "SQL, ERD, JDBC" },
      { thoi_gian: "Tuần 9-12", title: "Spring Boot REST & JPA" },
      {
        thoi_gian: "Tuần 13-16",
        title: "Security, Deploy & Project",
      },
    ],
    lo_trinh_chi_tiet: [
      {
        thoi_gian: "Tuần 1-4",
        sologan: "Nền tảng vững – tư duy OOP sạch",
        hinh_anh: "/img/roadmap/backend/be1.jpg",
        noi_dung_chi_tiet: [
          "Cài đặt môi trường, Maven/Gradle, cấu trúc dự án",
          "Java syntax, kiểu dữ liệu, điều kiện & vòng lặp",
          "Method, scope, static/final, String & Date/Time API",
          "OOP: Class, Object, Encapsulation, Inheritance, Polymorphism, Abstraction",
          "Exception handling, Debugging, Logging cơ bản",
          "Collections, Generics, Stream API, Optional",
          "JUnit 5 & Mockito: viết test cơ bản",
        ],
        ky_nang_bo_tro: {
          ky_nang: [
            "Debug code, viết unit test",
            "Clean code & naming, tách lớp/đóng gói",
          ],
          kien_thuc: [
            "Git cơ bản (branch, commit, PR)",
            "Agile & Scrum (lý thuyết + thực hành Sprint 0)",
          ],
        },
      },
      {
        thoi_gian: "Tuần 5-8",
        sologan: "Thiết kế & thao tác dữ liệu chuẩn hóa",
        hinh_anh: "/img/roadmap/backend/be2.jpg",
        noi_dung_chi_tiet: [
          "Phân tích yêu cầu, vẽ ERD, chuẩn hóa dữ liệu",
          "SQL cơ bản → nâng cao: SELECT, JOIN, GROUP BY, Subquery, View",
          "Ràng buộc PK/FK/UNIQUE/CHECK, Index & tối ưu truy vấn",
          "JDBC: kết nối DB, PreparedStatement, transaction",
          "Migration tool: Flyway/Liquibase",
          "Viết repository thuần JDBC, mapping DTO/VO",
        ],
        ky_nang_bo_tro: {
          ky_nang: [
            "Tối ưu query, đọc EXPLAIN",
            "Quản lý schema với migration",
          ],
          kien_thuc: [
            "PostgreSQL basics & psql",
            "Horensho – báo cáo/trao đổi trong team",
          ],
        },
      },
      {
        thoi_gian: "Tuần 9-12",
        sologan: "Xây RESTful API bài bản với Spring Boot",
        hinh_anh: "/img/roadmap/backend/be3.jpg",
        noi_dung_chi_tiet: [
          "Spring Boot fundamentals, cấu hình YAML/Profiles",
          "Layered architecture: Controller–Service–Repository",
          "REST: CRUD, pagination, sorting, validation (Hibernate Validator)",
          "Exception Handler, Global error response, Logger (SLF4J)",
          "Spring Data JPA, Entity mapping, JPQL/Criteria",
          "DTO & MapStruct, ModelMapper",
          "Swagger/OpenAPI, Postman collection",
          "Unit Test & Integration Test (WebMvcTest, Testcontainers)",
        ],
        ky_nang_bo_tro: {
          ky_nang: [
            "Thiết kế API chuẩn REST",
            "Viết integration test, mock external deps",
          ],
          kien_thuc: [
            "SonarLint/SonarQube – code quality",
            "CI cơ bản với GitHub Actions",
          ],
        },
      },
      {
        thoi_gian: "Tuần 13-16",
        sologan: "Bảo mật • Deploy • Dự án thực chiến",
        hinh_anh: "/img/roadmap/backend/be4.jpg",
        noi_dung_chi_tiet: [
          "Spring Security: Authentication/Authorization, Password encoder",
          "JWT/Refresh token, Role/Permission, CORS",
          "Caching (Spring Cache), Mail/Scheduler",
          "Dockerize service, compose với PostgreSQL & pgAdmin",
          "Nginx reverse proxy, HTTPS (Let’s Encrypt)",
          "Observability: Logging (Logback), log format, basic metrics",
          "Triển khai server Linux (Ubuntu) & backup",
          "Mini capstone: thiết kế – code – test – deploy",
        ],
        ky_nang_bo_tro: {
          ky_nang: [
            "Triển khai dịch vụ bằng Docker + Nginx",
            "Thiết lập auth JWT và refresh token",
          ],
          kien_thuc: [
            "DevOps căn bản: environment, logging, backup",
            "Quy trình release, checklist production",
          ],
        },
      },
    ],
    ky_nang_nhan_duoc: [
      {
        name: "Java Core & OOP vững",
        content:
          "Nắm chắc cú pháp, cấu trúc dữ liệu, OOP/Collections/Stream, viết unit test.",
      },
      {
        name: "Làm việc với Database",
        content:
          "Thiết kế ERD, viết SQL nâng cao, dùng JDBC & migration tool, tối ưu truy vấn.",
      },
      {
        name: "Spring Boot production-ready",
        content:
          "Xây REST API, JPA/JPQL, Validation, Exception Handler, Logger, Swagger, Testing.",
      },
      {
        name: "Bảo mật & Triển khai",
        content:
          "Spring Security + JWT, Docker/Nginx, logging/backup, deploy lên server Linux.",
      },
    ],
    doi_tuong: [
      "Sinh viên năm 2–4 hoặc mới tốt nghiệp muốn theo Backend Java",
      "Dev trái ngành có tư duy logic, cần lộ trình rõ ràng",
      "Fresher muốn nâng cấp lên Junior qua dự án thực chiến",
      "QA/BA muốn hiểu sâu API, DB, Security để phối hợp team",
      "Doanh nghiệp cần đào tạo đội ngũ backend chuẩn quy trình",
    ],
  },
  {
    id: 5,
    name: "Python AI",
    image: "../img/course/course-5.jpg",
    title: "Trở thành Python Developer trong 5 tháng",
    subtitle:
      "Thực hành cùng chuyên gia – Làm việc trên codebase thật – Cơ hội tuyển dụng tại Techzen",
    description:
      "Khóa học Python AI toàn diện giúp bạn làm chủ ngôn ngữ lập trình phổ biến nhất hiện nay, từ nền tảng cơ bản đến ứng dụng AI. Tập trung vào thực hành và dự án thực tế, phù hợp cho cả người mới bắt đầu và lập trình viên muốn nâng cao kỹ năng.",
    durition: "5 tháng",
    address: "Hybrid: Online + Lab tại Techzen",
    value: "python-ai",
    mode: "Hybrid",
    price: 48000000,
    price_sale: 19900000,
    so_buoi_hoc: 20,
    ly_do_hoc: {
      lo_trinh_toan_dien: [
        "Python → Phân tích dữ liệu → ML/DL → MLOps",
        "Làm dự án thực tế, review code như doanh nghiệp",
        "Học qua bài tập + mini project mỗi chặng",
      ],
      ho_tro_hoc_vien: [
        "Mentor 1-1 theo tuần, giải đáp nhanh",
        "Hỗ trợ CV, portfolio, mock interview",
        "Tài nguyên dataset & template dự án chuẩn",
      ],
      gia_tri_lau_dai: [
        "Nắm vững tư duy dữ liệu và mô hình hoá",
        "Biết triển khai model thành sản phẩm",
        "Xây dựng hồ sơ năng lực với capstone mạnh",
      ],
    },
    tieu_de_lo_trinh: "Lộ trình học Python AI trong 5 tháng",
    lo_trinh: [
      { thoi_gian: "Tuần 1-4", title: "Python & Data Analysis" },
      { thoi_gian: "Tuần 5-8", title: "SQL & Data Wrangling" },
      { thoi_gian: "Tuần 9-12", title: "Machine Learning" },
      { thoi_gian: "Tuần 13-16", title: "Deep Learning & NLP" },
      { thoi_gian: "Tuần 17-20", title: "Capstone & MLOps" },
    ],
    lo_trinh_chi_tiet: [
      {
        thoi_gian: "Tuần 1-4",
        sologan: "Nắm vững Python – Làm chủ dữ liệu",
        hinh_anh: "/img/roadmap/pythonAI/pythonai1.jpeg",
        noi_dung_chi_tiet: [
          "Python cơ bản, kiểu dữ liệu, hàm, OOP nhẹ",
          "NumPy, Pandas: xử lý, tổng hợp, làm sạch",
          "EDA: trực quan hoá với Matplotlib",
          "Feature engineering cơ bản",
          "Quy trình bài toán dữ liệu end-to-end (mini project)",
        ],
        ky_nang_bo_tro: {
          ky_nang: [
            "Git/GitHub workflow",
            "Viết notebook chuẩn",
            "Code style & logging",
          ],
          kien_thuc: [
            "Shell cơ bản",
            "Quản lý môi trường venv/conda",
            "Tối ưu I/O với Pandas",
          ],
        },
      },
      {
        thoi_gian: "Tuần 5-8",
        sologan: "Data wrangling từ SQL đến file system",
        hinh_anh: "/img/roadmap/pythonAI/pythonai2.jpeg",
        noi_dung_chi_tiet: [
          "SQL căn–nâng: JOIN, window, CTE",
          "Kết nối DB từ Python (psycopg2/SQLAlchemy)",
          "Làm sạch & hợp nhất dữ liệu đa nguồn",
          "Tạo dataset train/val/test, data validation",
          "Mini project: pipeline lấy dữ liệu → dataset",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Viết truy vấn tối ưu", "Profiling dữ liệu"],
          kien_thuc: ["Chuẩn hoá schema nhẹ", "Indexing cơ bản cho phân tích"],
        },
      },
      {
        thoi_gian: "Tuần 9-12",
        sologan: "Machine Learning thực chiến",
        hinh_anh: "/img/roadmap/pythonAI/pythonai3.jpeg",
        noi_dung_chi_tiet: [
          "Scikit-learn: pipeline, transformer, model",
          "Hồi quy, phân loại, clustering",
          "Cross-validation, tuning (Grid/Random/Optuna)",
          "Đánh giá mô hình, tránh overfitting",
          "Tracking thí nghiệm (MLflow nhẹ)",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Feature selection", "Xử lý mất cân bằng dữ liệu"],
          kien_thuc: ["Metrics (AUC/F1/RMSE)", "Interpretable ML (SHAP)"],
        },
      },
      {
        thoi_gian: "Tuần 13-16",
        sologan: "Deep Learning & NLP khởi động nhanh",
        hinh_anh: "/img/roadmap/pythonAI/pythonai4.jpeg",
        noi_dung_chi_tiet: [
          "PyTorch cơ bản: tensor, autograd, module",
          "CNN cho ảnh, augmentation",
          "NLP cơ bản: tokenization, word embeddings",
          "Fine-tune mô hình sẵn (Transformers) cho phân loại",
          "Quản lý checkpoint & early stopping",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Tối ưu training (LR schedule, regularization)"],
          kien_thuc: ["Hardware basics (GPU/VRAM)", "Dataloader hiệu quả"],
        },
      },
      {
        thoi_gian: "Tuần 17-20",
        sologan: "Capstone & MLOps – đưa model ra đời",
        hinh_anh: "/img/roadmap/pythonAI/pythonai5.jpeg",
        noi_dung_chi_tiet: [
          "Thiết kế đề tài capstone theo bài toán thật",
          "Đóng gói model: FastAPI/Streamlit",
          "Docker hoá & deploy (Render/railway/VPS)",
          "Monitoring cơ bản, logging & versioning",
          "Demo & phản biện với mentor/PM",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Viết README/ báo cáo kỹ thuật", "Pitch dự án"],
          kien_thuc: [
            "CI/CD nhẹ với GitHub Actions",
            "Best practices bảo mật API",
          ],
        },
      },
    ],
    ky_nang_nhan_duoc: [
      {
        name: "Kỹ năng Python & Dữ liệu",
        content:
          "Thành thạo Pandas/NumPy, EDA, xử lý dữ liệu thực tế, viết pipeline sạch và tái sử dụng.",
      },
      {
        name: "ML/DL thực chiến",
        content:
          "Xây dựng, đánh giá, tuning mô hình ML; nắm PyTorch và fine-tune mô hình có sẵn cho NLP/vision.",
      },
      {
        name: "MLOps & Triển khai",
        content:
          "Đóng gói model thành dịch vụ (API/UI), container hoá, deploy và theo dõi hoạt động.",
      },
    ],
    doi_tuong: [
      "Sinh viên CNTT hoặc người chuyển ngành muốn vào mảng AI/ML",
      "Lập trình viên cần bổ sung kỹ năng dữ liệu & mô hình hoá",
      "Bạn tự học AI cần lộ trình có mentor và dự án thực chiến",
    ],
  },
  {
    id: 6,
    name: "Frontend Developer",
    image: "../img/course/course-6.jpg",
    title: "Trở thành Frontend Developer trong 5 tháng",
    subtitle: "Thực hành với React, TypeScript – Làm việc trên codebase thật – Cơ hội tuyển dụng tại Techzen",
    description: "Khóa học này giúp bạn thành thạo phát triển giao diện người dùng (Frontend) với React và TypeScript. Bạn sẽ học cách xây dựng các ứng dụng web hiện đại, tối ưu hiệu suất và trải nghiệm người dùng. 80% thời lượng dành cho thực hành qua các dự án thực tế, từ thiết kế UI/UX đến tích hợp API.",
    durition: "5 tháng",
    address: "Offline tại văn phòng Techzen",
    value: "frontend",
    mode: "Offline",
    price: 32000000,
    price_sale: 16900000,
    so_buoi_hoc: 20,
    ly_do_hoc: {
      lo_trinh_toan_dien: [
        "Làm chủ HTML, CSS, JavaScript, React và TypeScript",
        "Thực hành trên dự án thật với quy trình Agile",
        "Tích hợp API và tối ưu giao diện người dùng",
      ],
      ho_tro_hoc_vien: [
        "Mentor hỗ trợ 1-1, review code hàng tuần",
        "Định hướng nghề nghiệp và mock interview",
        "Cơ hội thực tập tại Techzen",
      ],
      gia_tri_lau_dai: [
        "Nâng cao kỹ năng từ Fresher lên Junior Frontend",
        "Xây dựng portfolio mạnh với dự án thực tế",
        "Thành thạo quy trình phát triển giao diện chuẩn doanh nghiệp",
      ],
    },
    tieu_de_lo_trinh: "Lộ trình học Frontend Developer trong 20 tuần",
    lo_trinh: [
      { thoi_gian: "Tuần 1-4", title: "HTML, CSS, JavaScript Cơ bản" },
      { thoi_gian: "Tuần 5-8", title: "JavaScript Nâng cao & TypeScript" },
      { thoi_gian: "Tuần 9-12", title: "React Core & State Management" },
      { thoi_gian: "Tuần 13-16", title: "React Advanced & API Integration" },
      { thoi_gian: "Tuần 17-20", title: "Capstone Project & Optimization" },
    ],
    lo_trinh_chi_tiet: [
      {
        thoi_gian: "Tuần 1-4",
        sologan: "Nền tảng giao diện web vững chắc",
        hinh_anh: "/img/roadmap/frontend/fe1.jpg",
        noi_dung_chi_tiet: [
          "HTML5: Semantic tags, forms, accessibility",
          "CSS3: Flexbox, Grid, responsive design",
          "JavaScript: DOM, events, ES6+ (arrow functions, destructuring)",
          "Debugging với Chrome DevTools",
          "Git cơ bản: commit, branch, pull request",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Thiết kế giao diện responsive", "Sử dụng Git cơ bản"],
          kien_thuc: ["Quy tắc CSS, BEM", "Cấu trúc dự án frontend"],
        },
      },
      {
        thoi_gian: "Tuần 5-8",
        sologan: "Làm chủ logic và TypeScript",
        hinh_anh: "/img/roadmap/frontend/fe2.jpg",
        noi_dung_chi_tiet: [
          "JavaScript nâng cao: closure, async/await, Promise",
          "TypeScript: type, interface, generics",
          "Module bundler: Webpack, Vite",
          "Tích hợp thư viện UI: Tailwind CSS, Material UI",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Viết code type-safe với TypeScript", "Tối ưu hóa JS"],
          kien_thuc: ["Quản lý package với npm/yarn", "Cấu hình build tool"],
        },
      },
      {
        thoi_gian: "Tuần 9-12",
        sologan: "Xây dựng ứng dụng với React",
        hinh_anh: "/img/roadmap/frontend/fe3.jpg",
        noi_dung_chi_tiet: [
          "React: components, props, state, hooks",
          "State management: Redux Toolkit, Zustand",
          "Routing với React Router",
          "Unit testing với Jest, React Testing Library",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Xây dựng SPA với React", "Viết test cho components"],
          kien_thuc: ["Quy trình phát triển React", "State management"],
        },
      },
      {
        thoi_gian: "Tuần 13-16",
        sologan: "Tích hợp API & tối ưu giao diện",
        hinh_anh: "/img/roadmap/frontend/fe4.jpg",
        noi_dung_chi_tiet: [
          "Gọi API với Axios, Fetch",
          "Authentication: JWT, OAuth flow",
          "Tối ưu hiệu suất: lazy loading, memoization",
          "SEO cơ bản và accessibility (a11y)",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Tích hợp API REST", "Tối ưu hiệu suất giao diện"],
          kien_thuc: ["Cơ chế CSR, SSR", "Web performance metrics"],
        },
      },
      {
        thoi_gian: "Tuần 17-20",
        sologan: "Dự án thực chiến & triển khai",
        hinh_anh: "/img/roadmap/frontend/fe5.jpg",
        noi_dung_chi_tiet: [
          "Xây dựng dự án capstone từ yêu cầu thực tế",
          "Triển khai ứng dụng lên Vercel/Netlify",
          "Code review và phản biện với mentor",
          "Tối ưu hóa UX/UI và hiệu suất",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Triển khai ứng dụng frontend", "Viết tài liệu kỹ thuật"],
          kien_thuc: ["Quy trình release frontend", "Tối ưu SEO"],
        },
      },
    ],
    ky_nang_nhan_duoc: [
      {
        name: "Kỹ năng Frontend cơ bản",
        content: "Thành thạo HTML, CSS, JavaScript, xây dựng giao diện responsive.",
      },
      {
        name: "React & TypeScript",
        content: "Xây dựng ứng dụng SPA với React, TypeScript, quản lý state hiệu quả.",
      },
      {
        name: "Tích hợp & Triển khai",
        content: "Tích hợp API, tối ưu hiệu suất, triển khai ứng dụng lên cloud.",
      },
    ],
    doi_tuong: [
      "Sinh viên CNTT muốn trở thành Frontend Developer",
      "Người trái ngành muốn chuyển sang lập trình giao diện",
      "Lập trình viên backend muốn bổ sung kỹ năng frontend",
      "Doanh nghiệp muốn đào tạo đội ngũ frontend",
    ],
  },
  {
    id: 7,
    name: "Mobile Developer",
    image: "../img/course/course-7.jpg",
    title: "Trở thành Mobile Developer với Flutter trong 4 tháng",
    subtitle: "Thực hành xây dựng ứng dụng iOS/Android – Dự án thực tế – Cơ hội tuyển dụng tại Techzen",
    description: "Khóa học Flutter giúp bạn phát triển ứng dụng di động đa nền tảng (iOS & Android) với hiệu suất cao. Bạn sẽ học từ cơ bản đến nâng cao, thực hành trên các dự án thực tế và tích hợp API, đảm bảo sẵn sàng làm việc như một Mobile Developer.",
    durition: "4 tháng",
    address: "Hybrid: Online + Lab tại Techzen",
    value: "mobile",
    mode: "Hybrid",
    price: 30000000,
    price_sale: 15900000,
    so_buoi_hoc: 16,
    ly_do_hoc: {
      lo_trinh_toan_dien: [
        "Làm chủ Flutter và Dart từ cơ bản đến nâng cao",
        "Xây dựng ứng dụng đa nền tảng với codebase thực tế",
        "Tích hợp API và tối ưu UX/UI",
      ],
      ho_tro_hoc_vien: [
        "Mentor hỗ trợ 1-1, review code hàng tuần",
        "Hỗ trợ xây dựng portfolio và mock interview",
        "Cơ hội thực tập tại Techzen",
      ],
      gia_tri_lau_dai: [
        "Thành thạo phát triển ứng dụng iOS/Android",
        "Nâng cấp từ Fresher lên Junior Mobile Developer",
        "Xây dựng ứng dụng thực tế để ứng tuyển",
      ],
    },
    tieu_de_lo_trinh: "Lộ trình học Mobile Developer trong 16 tuần",
    lo_trinh: [
      { thoi_gian: "Tuần 1-4", title: "Dart & Flutter Cơ bản" },
      { thoi_gian: "Tuần 5-8", title: "Flutter UI & Navigation" },
      { thoi_gian: "Tuần 9-12", title: "State Management & API" },
      { thoi_gian: "Tuần 13-16", title: "Capstone & Deployment" },
    ],
    lo_trinh_chi_tiet: [
      {
        thoi_gian: "Tuần 1-4",
        sologan: "Nền tảng lập trình di động",
        hinh_anh: "/img/roadmap/mobile/mb1.jpg",
        noi_dung_chi_tiet: [
          "Dart: cú pháp, OOP, async/await",
          "Flutter: widget, layout, stateless/stateful",
          "Cấu trúc dự án Flutter",
          "Debugging và logging cơ bản",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Viết code Dart", "Xây dựng UI cơ bản"],
          kien_thuc: ["Git cơ bản", "Cấu trúc ứng dụng Flutter"],
        },
      },
      {
        thoi_gian: "Tuần 5-8",
        sologan: "Thiết kế giao diện & điều hướng",
        hinh_anh: "/img/roadmap/mobile/mb2.jpg",
        noi_dung_chi_tiet: [
          "Flutter layout: Row, Column, Stack",
          "Navigation: Navigator, named routes",
          "Custom widgets, theming",
          "Responsive design cho mobile",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Thiết kế UI responsive", "Quản lý navigation"],
          kien_thuc: ["Quy tắc thiết kế UX/UI", "Theme customization"],
        },
      },
      {
        thoi_gian: "Tuần 9-12",
        sologan: "Quản lý trạng thái & tích hợp API",
        hinh_anh: "/img/roadmap/mobile/mb3.jpg",
        noi_dung_chi_tiet: [
          "State management: Provider, Riverpod",
          "Gọi API với Dio, HTTP",
          "Authentication: JWT, OAuth",
          "Unit testing với Flutter Test",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Tích hợp API", "Viết test cho widgets"],
          kien_thuc: ["REST API flow", "State management patterns"],
        },
      },
      {
        thoi_gian: "Tuần 13-16",
        sologan: "Dự án thực chiến & triển khai",
        hinh_anh: "/img/roadmap/mobile/mb4.jpg",
        noi_dung_chi_tiet: [
          "Xây dựng ứng dụng capstone từ yêu cầu thực tế",
          "Tích hợp push notification, local storage",
          "Triển khai lên App Store/Play Store",
          "Code review và phản biện với mentor",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Triển khai ứng dụng di động", "Viết tài liệu kỹ thuật"],
          kien_thuc: ["Quy trình publish app", "Tối ưu hiệu suất"],
        },
      },
    ],
    ky_nang_nhan_duoc: [
      {
        name: "Kỹ năng Flutter & Dart",
        content: "Thành thạo Dart và Flutter để xây dựng ứng dụng đa nền tảng.",
      },
      {
        name: "Thiết kế UI/UX",
        content: "Xây dựng giao diện responsive, tối ưu trải nghiệm người dùng.",
      },
      {
        name: "Tích hợp & Triển khai",
        content: "Tích hợp API, triển khai ứng dụng lên App Store/Play Store.",
      },
    ],
    doi_tuong: [
      "Sinh viên CNTT muốn trở thành Mobile Developer",
      "Người trái ngành muốn phát triển ứng dụng di động",
      "Lập trình viên muốn học Flutter để đa dạng kỹ năng",
      "Doanh nghiệp muốn đào tạo đội ngũ mobile",
    ],
  },
  {
    id: 8,
    name: "Cloud Computing",
    image: "../img/course/course-8.jpg",
    title: "Làm chủ Cloud Computing với AWS trong 3 tháng",
    subtitle: "Thực hành trên AWS – Quản lý hạ tầng – Cơ hội tuyển dụng tại Techzen",
    description: "Khóa học Cloud Computing với AWS giúp bạn nắm vững các dịch vụ đám mây như EC2, S3, RDS, Lambda. Bạn sẽ học cách thiết kế, triển khai và quản lý hạ tầng trên cloud, tối ưu chi phí và bảo mật, với 70% thời lượng thực hành trên môi trường thực tế.",
    durition: "3 tháng",
    address: "Online",
    value: "cloud",
    mode: "Online",
    price: 25000000,
    price_sale: 12900000,
    so_buoi_hoc: 12,
    ly_do_hoc: {
      lo_trinh_toan_dien: [
        "Làm chủ các dịch vụ AWS core và triển khai hạ tầng",
        "Thực hành trên tài khoản AWS thực tế",
        "Tối ưu chi phí và bảo mật hệ thống cloud",
      ],
      ho_tro_hoc_vien: [
        "Mentor hỗ trợ 1-1, giải đáp nhanh",
        "Hỗ trợ chuẩn bị chứng chỉ AWS Cloud Practitioner",
        "Định hướng nghề nghiệp Cloud Engineer",
      ],
      gia_tri_lau_dai: [
        "Thành thạo triển khai hạ tầng cloud",
        "Tăng lợi thế với chứng chỉ AWS",
        "Sẵn sàng làm việc trong vai trò Cloud Engineer",
      ],
    },
    tieu_de_lo_trinh: "Lộ trình học Cloud Computing trong 12 buổi",
    lo_trinh: [
      { thoi_gian: "Buổi 1-3", title: "AWS Fundamentals & IAM" },
      { thoi_gian: "Buổi 4-6", title: "EC2, S3, VPC" },
      { thoi_gian: "Buổi 7-9", title: "RDS, Lambda, CloudWatch" },
      { thoi_gian: "Buổi 10-12", title: "CI/CD & Capstone Project" },
    ],
    lo_trinh_chi_tiet: [
      {
        thoi_gian: "Buổi 1-3",
        sologan: "Nền tảng AWS và quản lý truy cập",
        hinh_anh: "/img/roadmap/cloud-computing/cloudComputing1.jpg",
        noi_dung_chi_tiet: [
          "Giới thiệu AWS, vùng, AZ, tài khoản AWS",
          "IAM: user, role, policy, MFA",
          "Billing: cost explorer, budget setup",
          "CLI & SDK cơ bản",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Quản lý truy cập IAM", "Cấu hình budget"],
          kien_thuc: ["Kiến trúc AWS", "Cost management"],
        },
      },
      {
        thoi_gian: "Buổi 4-6",
        sologan: "Xây dựng hạ tầng cơ bản",
        hinh_anh: "/img/roadmap/cloud-computing/cloudComputing2.jpg",
        noi_dung_chi_tiet: [
          "EC2: instance types, launch, SSH",
          "S3: bucket, policy, static website",
          "VPC: subnet, route table, security group",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Triển khai EC2", "Quản lý S3"],
          kien_thuc: ["Networking cơ bản", "Security group"],
        },
      },
      {
        thoi_gian: "Buổi 7-9",
        sologan: "Database & Serverless",
        hinh_anh: "/img/roadmap/cloud-computing/cloudComputing3.jpg",
        noi_dung_chi_tiet: [
          "RDS: MySQL/PostgreSQL setup, backup",
          "Lambda: function, trigger, layers",
          "CloudWatch: logs, metrics, alarms",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Quản lý RDS", "Viết Lambda function"],
          kien_thuc: ["Serverless architecture", "Monitoring cơ bản"],
        },
      },
      {
        thoi_gian: "Buổi 10-12",
        sologan: "Tự động hóa & dự án thực chiến",
        hinh_anh: "/img/roadmap/cloud-computing/cloudComputing4.jpg",
        noi_dung_chi_tiet: [
          "CI/CD với CodePipeline, CodeBuild",
          "Triển khai ứng dụng full-stack trên AWS",
          "Tối ưu chi phí và bảo mật hạ tầng",
          "Capstone: thiết kế và triển khai hạ tầng",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Thiết lập pipeline CI/CD", "Triển khai hạ tầng"],
          kien_thuc: ["Well-Architected Framework", "Cost optimization"],
        },
      },
    ],
    ky_nang_nhan_duoc: [
      {
        name: "Quản lý hạ tầng AWS",
        content: "Thành thạo EC2, S3, VPC, RDS để xây dựng hạ tầng cloud.",
      },
      {
        name: "Serverless & Monitoring",
        content: "Sử dụng Lambda, CloudWatch để triển khai và giám sát ứng dụng.",
      },
      {
        name: "CI/CD & Tối ưu",
        content: "Thiết lập pipeline CI/CD, tối ưu chi phí và bảo mật cloud.",
      },
    ],
    doi_tuong: [
      "Sinh viên CNTT muốn trở thành Cloud Engineer",
      "Lập trình viên muốn học quản lý hạ tầng cloud",
      "SysAdmin muốn chuyển sang cloud computing",
      "Doanh nghiệp cần đào tạo đội ngũ cloud",
    ],
  },
  {
    id: 9,
    name: "Cybersecurity",
    image: "../img/course/course-9.jpg",
    title: "Cybersecurity Fundamentals trong 3 tháng",
    subtitle: "Thực hành bảo mật hệ thống – Phòng chống tấn công – Cơ hội tuyển dụng tại Techzen",
    description: "Khóa học Cybersecurity Fundamentals cung cấp kiến thức và kỹ năng cơ bản về bảo mật hệ thống, mạng, và ứng dụng. Bạn sẽ học cách phát hiện lỗ hổng, phòng chống tấn công và bảo vệ dữ liệu, với 70% thời lượng thực hành trên môi trường mô phỏng thực tế.",
    durition: "3 tháng",
    address: "Online",
    value: "cybersecurity",
    mode: "Online",
    price: 27000000,
    price_sale: 13900000,
    so_buoi_hoc: 12,
    ly_do_hoc: {
      lo_trinh_toan_dien: [
        "Hiểu các khái niệm và công cụ bảo mật cơ bản",
        "Thực hành phát hiện và khắc phục lỗ hổng",
        "Nắm quy trình bảo mật trong doanh nghiệp",
      ],
      ho_tro_hoc_vien: [
        "Mentor hỗ trợ 1-1, giải đáp nhanh",
        "Hỗ trợ chuẩn bị chứng chỉ CompTIA Security+",
        "Định hướng nghề nghiệp trong lĩnh vực bảo mật",
      ],
      gia_tri_lau_dai: [
        "Thành thạo các kỹ năng bảo mật cơ bản",
        "Tăng lợi thế với chứng chỉ quốc tế",
        "Sẵn sàng làm việc trong vai trò Security Analyst",
      ],
    },
    tieu_de_lo_trinh: "Lộ trình học Cybersecurity trong 12 buổi",
    lo_trinh: [
      { thoi_gian: "Buổi 1-3", title: "Cơ bản về Cybersecurity & Mạng" },
      { thoi_gian: "Buổi 4-6", title: "Phòng chống tấn công & Mã hóa" },
      { thoi_gian: "Buổi 7-9", title: "Quản lý lỗ hổng & Pentest cơ bản" },
      { thoi_gian: "Buổi 10-12", title: "Capstone & Quy trình bảo mật" },
    ],
    lo_trinh_chi_tiet: [
      {
        thoi_gian: "Buổi 1-3",
        sologan: "Nền tảng bảo mật và mạng",
        hinh_anh: "/img/roadmap/cybersecurity/cybersercurity1.jpg",
        noi_dung_chi_tiet: [
          "Khái niệm cybersecurity, threat, vulnerability",
          "Mô hình OSI, TCP/IP, networking cơ bản",
          "Cấu hình firewall, VPN cơ bản",
          "Công cụ: Wireshark, Nmap",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Phân tích gói tin", "Cấu hình firewall"],
          kien_thuc: ["Network protocols", "Threat models"],
        },
      },
      {
        thoi_gian: "Buổi 4-6",
        sologan: "Phòng chống tấn công và mã hóa",
        hinh_anh: "/img/roadmap/cybersecurity/cybersercurity2.jpg",
        noi_dung_chi_tiet: [
          "Các loại tấn công: DDoS, SQL injection, XSS",
          "Mã hóa: symmetric, asymmetric, SSL/TLS",
          "Quản lý mật khẩu và 2FA",
          "Thực hành phòng chống phishing",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Phát hiện tấn công", "Cấu hình SSL"],
          kien_thuc: ["Cryptography basics", "Attack vectors"],
        },
      },
      {
        thoi_gian: "Buổi 7-9",
        sologan: "Quản lý lỗ hổng & pentest",
        hinh_anh: "/img/roadmap/cybersecurity/cybersercurity3.jpg",
        noi_dung_chi_tiet: [
          "Quét lỗ hổng với Nessus, OpenVAS",
          "Penetration testing cơ bản với Kali Linux",
          "Phân tích log và phát hiện xâm nhập",
          "Bảo mật ứng dụng web",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Quét lỗ hổng", "Thực hành pentest"],
          kien_thuc: ["OWASP Top 10", "Intrusion detection"],
        },
      },
      {
        thoi_gian: "Buổi 10-12",
        sologan: "Dự án thực chiến & quy trình bảo mật",
        hinh_anh: "/img/roadmap/cybersecurity/cybersercurity4.jpg",
        noi_dung_chi_tiet: [
          "Xây dựng quy trình bảo mật cho hệ thống",
          "Capstone: phân tích và bảo vệ hệ thống mô phỏng",
          "Tạo báo cáo bảo mật và phản biện",
          "Chuẩn bị cho chứng chỉ Security+",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Viết báo cáo bảo mật", "Thiết lập quy trình"],
          kien_thuc: ["Security policies", "Incident response"],
        },
      },
    ],
    ky_nang_nhan_duoc: [
      {
        name: "Kỹ năng bảo mật mạng",
        content: "Hiểu mạng, cấu hình firewall, phát hiện tấn công.",
      },
      {
        name: "Kỹ năng pentest",
        content: "Quét lỗ hổng, thực hành pentest cơ bản trên Kali Linux.",
      },
      {
        name: "Quản lý bảo mật",
        content: "Xây dựng quy trình bảo mật, phân tích log, viết báo cáo.",
      },
    ],
    doi_tuong: [
      "Sinh viên CNTT muốn học bảo mật",
      "Lập trình viên muốn bổ sung kỹ năng cybersecurity",
      "SysAdmin muốn chuyển sang vai trò Security Analyst",
      "Doanh nghiệp cần đào tạo đội ngũ bảo mật",
    ],
  },
  {
    id: 10,
    name: "Data Analyst",
    image: "../img/course/course-10.jpg",
    title: "Trở thành Data Analyst trong 4 tháng",
    subtitle: "Thực hành phân tích dữ liệu – Dashboard – Cơ hội tuyển dụng tại Techzen",
    description: "Khóa học Data Analyst giúp bạn làm chủ các công cụ như SQL, Python, Power BI để phân tích và trực quan hóa dữ liệu. Bạn sẽ học cách xử lý dữ liệu thực tế, xây dựng báo cáo và dashboard, với 80% thời lượng thực hành trên dataset doanh nghiệp.",
    durition: "4 tháng",
    address: "Hybrid: Online + Lab tại Techzen",
    value: "data-analyst",
    mode: "Hybrid",
    price: 26000000,
    price_sale: 13900000,
    so_buoi_hoc: 16,
    ly_do_hoc: {
      lo_trinh_toan_dien: [
        "Làm chủ SQL, Python, Power BI cho phân tích dữ liệu",
        "Thực hành trên dataset thực tế từ doanh nghiệp",
        "Xây dựng dashboard và báo cáo chuyên nghiệp",
      ],
      ho_tro_hoc_vien: [
        "Mentor hỗ trợ 1-1, review báo cáo",
        "Hỗ trợ xây dựng portfolio và mock interview",
        "Cơ hội thực tập tại Techzen",
      ],
      gia_tri_lau_dai: [
        "Thành thạo phân tích và trực quan hóa dữ liệu",
        "Xây dựng portfolio mạnh với báo cáo thực tế",
        "Sẵn sàng làm việc trong vai trò Data Analyst",
      ],
    },
    tieu_de_lo_trinh: "Lộ trình học Data Analyst trong 16 tuần",
    lo_trinh: [
      { thoi_gian: "Tuần 1-4", title: "SQL & Data Fundamentals" },
      { thoi_gian: "Tuần 5-8", title: "Python & Data Wrangling" },
      { thoi_gian: "Tuần 9-12", title: "Visualization & Power BI" },
      { thoi_gian: "Tuần 13-16", title: "Capstone & Reporting" },
    ],
    lo_trinh_chi_tiet: [
      {
        thoi_gian: "Tuần 1-4",
        sologan: "Nền tảng dữ liệu và SQL",
        hinh_anh: "/img/roadmap/dataAnalysis/data-analysis1.jpg",
        noi_dung_chi_tiet: [
          "Khái niệm dữ liệu: structured, unstructured",
          "SQL: SELECT, JOIN, GROUP BY, window functions",
          "Chuẩn hóa dữ liệu, vẽ ERD",
          "Tối ưu truy vấn với Index",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Viết truy vấn SQL", "Phân tích dữ liệu cơ bản"],
          kien_thuc: ["Data modeling", "Database basics"],
        },
      },
      {
        thoi_gian: "Tuần 5-8",
        sologan: "Xử lý dữ liệu với Python",
        hinh_anh: "/img/roadmap/dataAnalysis/data-analysis2.jpg",
        noi_dung_chi_tiet: [
          "Python: Pandas, NumPy, data cleaning",
          "Kết nối SQL từ Python (SQLAlchemy)",
          "Feature engineering, xử lý missing data",
          "Mini project: pipeline xử lý dữ liệu",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Làm sạch dữ liệu", "Tạo pipeline"],
          kien_thuc: ["Data preprocessing", "Python environment"],
        },
      },
      {
        thoi_gian: "Tuần 9-12",
        sologan: "Trực quan hóa dữ liệu",
        hinh_anh: "/img/roadmap/dataAnalysis/data-analysis3.jpg",
        noi_dung_chi_tiet: [
          "Matplotlib, Seaborn: biểu đồ cơ bản",
          "Power BI: import data, DAX, visuals",
          "Thiết kế dashboard tương tác",
          "Storytelling với dữ liệu",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Xây dựng dashboard", "Trực quan hóa dữ liệu"],
          kien_thuc: ["DAX basics", "Data storytelling"],
        },
      },
      {
        thoi_gian: "Tuần 13-16",
        sologan: "Dự án thực chiến & báo cáo",
        hinh_anh: "/img/roadmap/dataAnalysis/data-analysis4.jpg",
        noi_dung_chi_tiet: [
          "Capstone: phân tích dataset doanh nghiệp",
          "Xây dựng báo cáo và dashboard hoàn chỉnh",
          "Trình bày kết quả và phản biện",
          "Tối ưu hóa báo cáo cho stakeholder",
        ],
        ky_nang_bo_tro: {
          ky_nang: ["Viết báo cáo dữ liệu", "Pitch kết quả"],
          kien_thuc: ["Business intelligence", "Stakeholder communication"],
        },
      },
    ],
    ky_nang_nhan_duoc: [
      {
        name: "Kỹ năng SQL",
        content: "Thành thạo truy vấn SQL, chuẩn hóa và tối ưu dữ liệu.",
      },
      {
        name: "Kỹ năng Python",
        content: "Xử lý, làm sạch và phân tích dữ liệu với Pandas, NumPy.",
      },
      {
        name: "Trực quan hóa & Báo cáo",
        content: "Xây dựng dashboard với Power BI, trình bày dữ liệu hiệu quả.",
      },
    ],
    doi_tuong: [
      "Sinh viên CNTT muốn trở thành Data Analyst",
      "Người trái ngành muốn chuyển sang phân tích dữ liệu",
      "Nhân viên muốn bổ sung kỹ năng BI và báo cáo",
      "Doanh nghiệp cần đào tạo đội ngũ phân tích dữ liệu",
    ],
  },
];

export default all_courses;
