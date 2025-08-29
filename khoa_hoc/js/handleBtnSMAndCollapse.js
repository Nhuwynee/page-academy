document.addEventListener("DOMContentLoaded", function () {
  const timelineToggleBtn = document.querySelector(".timeline-toggle button");
  const timeline = document.querySelector(".roadmap-2 .timeline");
  const timelineRights = document.querySelectorAll(".timeline-right");

  let isCollapsed = true;
  timeline.classList.add("collapsed");
  timelineToggleBtn.textContent = "Xem thêm";

  // Hàm toggle mask effect
  const toggleMaskEffect = (collapsed) => {
    timelineRights.forEach((timelineRight) => {
      if (collapsed) {
        // Khi collapsed = true, hiển thị mask (fade out effect)
        timelineRight.classList.remove("expanded");
      } else {
        // Khi collapsed = false, bỏ mask (hiển thị đầy đủ)
        timelineRight.classList.add("expanded");
      }
    });
  };

  const toggleTimeline = () => {
    if (isCollapsed) {
      // Mở rộng timeline
      timeline.classList.remove("collapsed");
      timelineToggleBtn.textContent = "Thu gọn";
      isCollapsed = false;
      
      // Bỏ mask effect khi mở rộng
      toggleMaskEffect(false);
      
    } else {
      // Thu gọn timeline
      timeline.classList.add("collapsed");
      timelineToggleBtn.textContent = "Xem thêm";
      isCollapsed = true;
      
      // Hiển thị mask effect khi thu gọn
      toggleMaskEffect(true);

      // Scroll về title
      const timelineTitle = document.getElementById("timeline-title");
      if (timelineTitle) {
        timelineTitle.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  if (timelineToggleBtn) {
    timelineToggleBtn.addEventListener("click", toggleTimeline);
  }

  // Khởi tạo mask effect cho trạng thái ban đầu (collapsed)
  toggleMaskEffect(true);
});