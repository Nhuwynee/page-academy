document.querySelectorAll(".btn-timeline .step").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.target;
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});


