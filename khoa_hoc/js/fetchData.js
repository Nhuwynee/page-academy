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

renderMainContent();
renderBanner();
