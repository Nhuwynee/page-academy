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
    radios.forEach((radio) => {
      radio.checked = radio.value === targetValue;
    });
  });
});
