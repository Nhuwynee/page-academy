import all_courses from "../../data/courses.js";

// Như
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".ps-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".ps-header");

    header.addEventListener("click", function () {
      item.classList.toggle("active");

      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });
  // end nhuw

  const radios = document.querySelectorAll('input[name="course"]');
  const select = document.getElementById("interest");

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        select.value = radio.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });
  });

  select.addEventListener("change", () => {
    const targetValue = select.value;
    let matched = false;

    radios.forEach((radio) => {
      if (radio.value === targetValue) {
        radio.checked = true;
        matched = true;
      } else {
        radio.checked = false;
      }
    });

    if (!matched) {
      radios.forEach((radio) => (radio.checked = false));
    }
  });

  const dayInput = document.querySelectorAll(".day");
  const hourInput = document.querySelectorAll(".hour");
  const minuteInput = document.querySelectorAll(".minute");
  const secondInput = document.querySelectorAll(".second");

  let countDownDate = localStorage.getItem("countDownDate");

  if (!countDownDate) {
    countDownDate = new Date().getTime() + 10 * 60 * 60 * 1000;
    localStorage.setItem("countDownDate", countDownDate);
  } else {
    countDownDate = parseInt(countDownDate, 10);
  }

  const countDownInterval = setInterval(() => {
    function setContent(target, value) {
      target.textContent = String(value).padStart(2, "0");
    }

    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance <= 0) {
      countDownDate = new Date().getTime() + 10 * 60 * 60 * 1000;
      localStorage.setItem("countDownDate", countDownDate);
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    dayInput.forEach((day) => setContent(day, days));
    hourInput.forEach((hour) => setContent(hour, hours));
    minuteInput.forEach((minute) => setContent(minute, minutes));
    secondInput.forEach((second) => setContent(second, seconds));
  }, 1000);

  //  get data promo register
  const data = all_courses;
  const selectPromo = document.getElementById("interest");

  function renderPromo(course) {
    const option = document.createElement("option");
    option.value = course.value;
    option.textContent = `Khóa ${course.name}`;

    if (option.value === "fullstack") {
      option.selected = true;
    }

    return option;
  }

  const frag = document.createDocumentFragment();
  data.forEach((course) => frag.appendChild(renderPromo(course)));
  selectPromo.replaceChildren(frag);
});
