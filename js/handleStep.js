document.querySelectorAll(".step").forEach((step) => {
  step.addEventListener("click", function() {
    // Xóa active ở tất cả
    document
      .querySelectorAll(".step")
      .forEach((s) => s.classList.remove("active"));

    // Gán active cho nút được click
    this.classList.add("active");
  });
});