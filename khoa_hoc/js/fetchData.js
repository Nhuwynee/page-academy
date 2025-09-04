import all_courses from "../../data/courses.js";

const params = new URLSearchParams(location.search);
const id = Number(params.get("id"));
const course = all_courses.find((course) => course.id === id);

function vnd(n) {
  return n.toLocaleString("vi-VN") + " đ";
}

function renderBanner() {
  const loTrinhToanDien = document.querySelector(".lo-trinh-toan-dien");
  const hoTroHocVien = document.querySelector(".ho-tro-hoc-vien");
  const giaTriLauDai = document.querySelector(".gia-tri-lau-dai");

  const dataLoTrinh = course.ly_do_hoc.lo_trinh_toan_dien;
  const dataHoTro = course.ly_do_hoc.ho_tro_hoc_vien;
  const dataGiaTri = course.ly_do_hoc.gia_tri_lau_dai;

  dataLoTrinh.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    loTrinhToanDien.appendChild(li);
  });

  dataHoTro.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    hoTroHocVien.appendChild(li);
  });

  dataGiaTri.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    giaTriLauDai.appendChild(li);
  });
}

function renderMainContent() {
  const contentLeft = document.querySelector(".content-left");
  contentLeft.innerHTML = `
        <h1 class="line-highlight" id="title">
          ${course.title}
        </h1>
        <p class="description" id="description">
          ${course.subtitle}
        </p>
        <div class="course-info">
          <span id="sessions">📅 ${course.so_buoi_hoc} buổi</span>
          <span id="mode">💻 ${course.address}</span>
        </div>
`;
  const contentRight = document.querySelector(".content-right");
  contentRight.innerHTML = `
        <div class="offer-box">
          <p class="offer-title">Chớp lấy ưu đãi</p>
          <div class="price-countdown-wrapper">
            <div class="price-sale">
              <p class="offer-price">${vnd(course.price_sale)}</p>
              <p class="old-price">Giá gốc: ${vnd(course.price)}</p>
            </div>

            <div class="offer-countdown">
              <div class="countdown">
                <div class="time-box">
                  <small>Ngày</small><span class="day">00</span>
                </div>
                <div class="time-box">
                  <small>Giờ</small><span class="hour">00</span>
                </div>
                <div class="time-box">
                  <small>Phút</small><span class="minute">00</span>
                </div>
                <div class="time-box">
                  <small>Giây</small><span class="second">00</span>
                </div>
              </div>

              <p class="slots-left">
                Còn 99 suất <span>— Nhanh tay kẻo lỡ!</span>
              </p>
            </div>
          </div>
          <div class="btn-group">
            <button class="btn-primary">Đăng ký ngay</button>
            <button class="btn-outline">Đăng ký học thử</button>
          </div>
        
  `;
}

function renderRoadmap() {
  if (!course) return;

  // Lấy phần tử hiển thị nội dung từ roadmap-1 & roadmap-2
  const timelineSteps = document.querySelector(".roadmap-1 .timeline");
  const timelineDetail = document.querySelector(".roadmap-2 .timeline");

  // Lấy phần tử timeline-title
  const timelineTitle = document.getElementById("timeline-title");
  timelineTitle.textContent = course.tieu_de_lo_trinh;

  // Render step bên roadmap-1
  timelineSteps.innerHTML = "";
  course.lo_trinh.forEach((item, idx) => {
    const btn = document.createElement("div");
    btn.classList.add("btn-timeline");
    btn.innerHTML = `
      <div class="step ${idx === 0 ? "active" : ""}" data-index="${idx}">
        ${item.thoi_gian}
      </div>
      <div class="desc">${item.title}</div>
    `;
    timelineSteps.appendChild(btn);

    if (idx < course.lo_trinh.length - 1) {
      timelineSteps.innerHTML += `
        <div class="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
            <path d="M0 20L10 10L0 0L0 20Z" fill="#CBD5E1"/>
          </svg>
        </div>
      `;
    }
  });

  // Render detail bên roadmap-2
  timelineDetail.innerHTML = "";
  course.lo_trinh_chi_tiet.forEach((item, idx) => {
    const detail = document.createElement("div");
    detail.classList.add("timeline-item");
    detail.id = `week${idx + 1}`;
    detail.innerHTML = `
      <span class="week-label">${item.thoi_gian}</span>
      <div class="timeline-left">
        <h3>${item.thoi_gian}</h3>
        <strong>${item.sologan}</strong>
        <br/><br/>
        <img src="${item.hinh_anh}" alt="Lớp học"/>
      </div>
      <div class="timeline-right">
        <h3>Nội dung học chi tiết:</h3>
        <ul class="aligned-list">
          ${item.noi_dung_chi_tiet.map((d) => `<li>${d}</li>`).join("")}
        </ul>
        <br/>
        <h3>Kỹ năng bổ trợ:</h3>
        <ul class="aligned-list">
          ${item.ky_nang_bo_tro.ky_nang.map((k) => `<li>${k}</li>`).join("")}
        </ul>
      </div>
    `;
    timelineDetail.appendChild(detail);
  });

  // Loại bỏ week label
  let css = "";
  for (let i = 1; i <= 5; i++) {
    css += `
    .timeline-item:nth-child(${i})::after {
      content: none !important;
      }
      `;
  }
  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
}

// render data skilll
function renderSkill() {
  const parentSkill = document.querySelector(".ps-accordion");
  const skills = parentSkill.querySelectorAll(".ps-item");

  const dataSkills = course.ky_nang_nhan_duoc;
  // console.log(dataSkills)

  skills.forEach((item, index) => {
    const header = item.querySelector(".ps-header");
    const content = item.querySelector(".ps-content");

    if (dataSkills[index]) {
      header.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          header.removeChild(node);
        }
        // console.log(node)
      });

      header.append(" " + dataSkills[index].name);

      content.textContent = dataSkills[index].content;
    }
  });
}

function renderDoiTuongHoc() {
  const targetList = document.querySelector(
    ".tartget-description .target-list"
  );
  const targetItem = targetList.querySelectorAll("li");

  const dataDoiTuong = course.doi_tuong;

  targetItem.forEach((item, index) => {
    if (dataDoiTuong[index]) {
      item.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          item.removeChild(node);
        }
      });

      item.append(" " + dataDoiTuong[index]);
    }
  });
}

renderMainContent();
renderBanner();
renderSkill();
renderDoiTuongHoc();
renderRoadmap();
