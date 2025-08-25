document.addEventListener("DOMContentLoaded", function () {
  const timelineToggleBtn = document.querySelector(".timeline-toggle button");
  const timelineRights = document.querySelectorAll(".timeline-right");

  // Hàm toggle mask effect
  const toggleMaskEffect = (isCollapsed) => {
    timelineRights.forEach((timelineRight) => {
      if (isCollapsed) {
        // Khi collapsed = true, hiển thị mask (ẩn bớt nội dung)
        timelineRight.classList.remove("expanded");
      } else {
        // Khi collapsed = false, bỏ mask (hiển thị đầy đủ)
        timelineRight.classList.add("expanded");
      }
    });
  };

  // Lắng nghe sự kiện click trên nút toggle
  if (timelineToggleBtn) {
    timelineToggleBtn.addEventListener("click", function () {
      // Đợi một chút để đồng bộ với animation collapse
      setTimeout(() => {
        const timeline = document.querySelector(".roadmap-2 .timeline");
        const isCollapsed = timeline.classList.contains("collapsed");
        toggleMaskEffect(isCollapsed);
      }, 50); // Delay nhỏ để đồng bộ
    });
  }

  // Khởi tạo trạng thái ban đầu - mask hiển thị khi collapsed
  toggleMaskEffect(true);
});
