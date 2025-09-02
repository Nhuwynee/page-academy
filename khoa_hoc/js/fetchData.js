import all_courses from "../../data/courses.js";

const params = new URLSearchParams(location.search);
const id = Number(params.get("id"));

const course = all_courses.find((course) => course.id === id);

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

renderBanner();
