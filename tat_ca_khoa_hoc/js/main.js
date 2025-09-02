import all_courses from "../../data/courses.js";

const listElement = document.querySelector(".course-list");
const data = all_courses;

function vnd(n) {
  return n.toLocaleString("vi-VN") + " đ";
}

function createMeta(iconSvg, text) {
  const span = document.createElement("span");
  span.innerHTML = iconSvg + " " + text;
  return span;
}

const iconClock = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <path d="M10.473 9.61967L8.40634 8.38634C8.04634 8.17301 7.75301 7.65967 7.75301 7.23967V4.50634M14.6663 7.49967C14.6663 11.1797 11.6797 14.1663 7.99967 14.1663C4.31967 14.1663 1.33301 11.1797 1.33301 7.49967C1.33301 3.81967 4.31967 0.833008 7.99967 0.833008C11.6797 0.833008 14.6663 3.81967 14.6663 7.49967Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`.trim();

const iconPin = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
  <path d="M8.00033 15.1663C8.66699 11.833 13.3337 11.4452 13.3337 7.16634C13.3337 4.22082 10.9458 1.83301 8.00033 1.83301C5.05481 1.83301 2.66699 4.22082 2.66699 7.16634C2.66699 11.4452 7.33366 11.833 8.00033 15.1663Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.00033 9.16634C9.10489 9.16634 10.0003 8.27091 10.0003 7.16634C10.0003 6.06177 9.10489 5.16634 8.00033 5.16634C6.89576 5.16634 6.00033 6.06177 6.00033 7.16634C6.00033 8.27091 6.89576 9.16634 8.00033 9.16634Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`.trim();

function renderCourse(course) {
  const card = document.createElement("div");
  card.className = "course-card";

  card.innerHTML = `
      <img src="${course.image}" alt="${course.name}" class="course-thumb"/>
      <div class="course-content">
        <h3>Khóa ${course.name}</h3>
        <p>${course.description}</p>
        <div class="course-meta"></div>
        <div class="course-action">
          <div class="course-price">
            <span class="new-price">${vnd(course.price_sale)}</span>
            <span class="old-price" style="text-decoration:line-through; opacity:.7">${vnd(
              course.price
            )}</span>
          </div>
          <button class="btn" type="button">Xem chi tiết</button>
        </div>
      </div>
    `;

  const meta = card.querySelector(".course-meta");
  meta.appendChild(createMeta(iconClock, `${course.so_buoi_hoc} buổi`));
  meta.appendChild(createMeta(iconPin, `${course.address}`));

  // Hàm chuyển trang chung
  function goDetail() {
    window.location.href = `/khoa_hoc/index.html?id=${course.id}`;
  }

  card.querySelector(".btn").addEventListener("click", goDetail);
  card.querySelector(".course-thumb").addEventListener("click", goDetail);

  return card;
}

const frag = document.createDocumentFragment();
data.forEach((course) => frag.appendChild(renderCourse(course)));
listElement.replaceChildren(frag);
