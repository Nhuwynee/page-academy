let all_courses = [
  {
    id: 1,
    name: "Fullstack Developer",
    image: "../img/course-1.png",
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
      lo_trinh: [
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
    image: "../img/course-2.png",
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
        title: "Kết nối & Tối ưu dữ liệu trong môi trường thực",
      },
    ],
    lo_trinh_chi_tiet: [
      {
        thoi_gian: "Ngày 1",
        sologan: "Làm quen với SQL & Database",
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
        thoi_gian: "Ngày 2",
        sologan: "Các phép toán & hàm cơ bản",
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
        thoi_gian: "Ngày 3",
        sologan: "Subquery & nâng cao truy vấn",
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
        thoi_gian: "Ngày 4",
        sologan: "Thiết kế & quản lý cơ sở dữ liệu",
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
        thoi_gian: "Ngày 5",
        sologan: "Quản trị & thay đổi cấu trúc DB",
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
        thoi_gian: "Ngày 6",
        sologan: "Viết script DDL & triển khai DB",
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
        thoi_gian: "Ngày 7",
        sologan: "Làm việc với JOIN cơ bản",
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
        thoi_gian: "Ngày 8",
        sologan: "JOIN nâng cao & nhiều bảng",
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
        thoi_gian: "Ngày 9",
        sologan: "Tối ưu hóa dữ liệu & Index",
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
        thoi_gian: "Ngày 10",
        sologan: "Ứng dụng thực tế & tổng kết",
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
    image: "../img/course-3.png",
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
    image: "../img/course-1.png",
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
      lo_trinh: [
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
    lo_trinh: [
      { thoi_gian: "(Tuần 1-4)", title: "Java Core & OOP" },
      { thoi_gian: "(Tuần 5-8)", title: "SQL, ERD, JDBC" },
      { thoi_gian: "(Tuần 9-12)", title: "Spring Boot REST & JPA" },
      {
        thoi_gian: "(Tuần 13-16)",
        title: "Security, Deploy & Project",
      },
    ],
    lo_trinh_chi_tiet: [
      {
        thoi_gian: "(Tuần 1-4)",
        sologan: "Nền tảng vững – tư duy OOP sạch",
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
        thoi_gian: "(Tuần 5-8)",
        sologan: "Thiết kế & thao tác dữ liệu chuẩn hóa",
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
        thoi_gian: "(Tuần 9-12)",
        sologan: "Xây RESTful API bài bản với Spring Boot",
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
        thoi_gian: "(Tuần 13-16)",
        sologan: "Bảo mật • Deploy • Dự án thực chiến",
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
    image: "../img/course-2.png",
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
      lo_trinh: [
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
        sologan: "Vững Python – Làm chủ dữ liệu",
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
];

export default all_courses;
