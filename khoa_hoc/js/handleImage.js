const prevBtn = document.querySelector(".btnPrev .nav-btn");
const nextBtn = document.querySelector(".btnNext .nav-btn");
const nav_current = document.querySelector(".navigation .navigation_current");
const nav_next = document.querySelector(".navigation .navigation_next");
const track = document.querySelector(".course-track");

let images = [
  { img: "/img/course-1.png", title: "Khóa học 1" },
  { img: "/img/course-2.png", title: "Khóa học 2" },
  { img: "/img/course-3.png", title: "Khóa học 3" },
  { img: "/img/course-1.png", title: "Khóa học 4" },
  { img: "/img/course-2.png", title: "Khóa học 5" },
  { img: "/img/course-3.png", title: "Khóa học 6" },
  { img: "/img/course-1.png", title: "Khóa học 7" }
];

// Render cards
function renderCards() {
  track.innerHTML = "";
  images.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    card.setAttribute('data-index', index);
    card.innerHTML = `<img src="${item.img}" alt="${item.title}"/><p>${item.title}</p>`;
    
    // Thêm sự kiện hover
    card.addEventListener('mouseenter', () => {
      // Xóa active tất cả cards
      document.querySelectorAll('.course-card').forEach(c => {
        c.classList.remove('active');
      });
      // Active card đang hover
      card.classList.add('active');
    });
    
    // Khi rời chuột thì active card ở giữa
    card.addEventListener('mouseleave', () => {
      setCenterActive();
    });
    
    track.appendChild(card);
  });
}

let currentIndex = 0;
let isAnimating = false;

function getCardWidth() {
  const card = document.querySelector(".course-card");
  if (!card) return 0;
  const style = window.getComputedStyle(card);
  return card.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
}

function getVisibleCount() {
  const viewport = track.parentElement || track;
  const cw = getCardWidth();
  if (!cw) return 1;
  const vc = Math.floor(viewport.clientWidth / cw);
  return Math.max(1, vc);
}

// Active card ở giữa
function setCenterActive() {
  const visibleCount = getVisibleCount();
  const centerIndex = Math.floor(visibleCount / 2);
  const activeIndex = (currentIndex + centerIndex) % images.length;

  document.querySelectorAll(".course-card").forEach((card) => {
    const cardIndex = parseInt(card.getAttribute('data-index'));
    card.classList.toggle("active", cardIndex === activeIndex);
  });
}

// Update slide
function updateSlide(direction) {
  if (isAnimating) return;
  isAnimating = true;
  
  const cardWidth = getCardWidth();
  const visibleCount = getVisibleCount();

  // Cập nhật index
  if (direction === 'next') {
    currentIndex++;
    
    // Nếu sắp đến cuối, thêm bản sao của mảng vào cuối
    if (currentIndex >= images.length - visibleCount * 2) {
      // Thêm bản sao của toàn bộ mảng
      const newImages = [...images];
      images = [...images, ...newImages];
      
      // Lưu vị trí scroll hiện tại
      const currentScroll = -currentIndex * cardWidth;
      
      // Render lại tất cả cards
      renderCards();
      
      // Khôi phục vị trí scroll
      track.style.transition = 'none';
      track.style.transform = `translateX(${currentScroll}px)`;
    }
  } else if (direction === 'prev') {
    currentIndex--;
    
    // Nếu sắp đến đầu, thêm bản sao của mảng vào đầu
    if (currentIndex <= visibleCount) {
      // Thêm bản sao của toàn bộ mảng vào đầu
      const newImages = [...images];
      images = [...newImages, ...images];
      
      // Điều chỉnh currentIndex
      currentIndex += newImages.length;
      
      // Lưu vị trí scroll hiện tại
      const currentScroll = -currentIndex * cardWidth;
      
      // Render lại tất cả cards
      renderCards();
      
      // Khôi phục vị trí scroll
      track.style.transition = 'none';
      track.style.transform = `translateX(${currentScroll}px)`;
    }
  }

  // Áp dụng transform
  track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
  track.style.transition = "transform 0.4s ease";

  // Active card ở giữa
  setCenterActive();

  // Reset trạng thái animation
  setTimeout(() => {
    isAnimating = false;
  }, 400);
}

// Nút Prev
prevBtn.addEventListener("click", () => {
  updateSlide('prev');
  
  Object.assign(nav_current.style, {
    width: '60px',
    height: '10px',
    backgroundColor: '#0e307a'
  });
  Object.assign(nav_next.style, {
    width: '20px',
    height: '10px',
    backgroundColor: '#cbd5e1'
  });
});

// Nút Next
nextBtn.addEventListener("click", () => {
  updateSlide('next');
  
  Object.assign(nav_next.style, {
    width: '60px',
    height: '10px',
    backgroundColor: '#0e307a'
  });
  Object.assign(nav_current.style, {
    width: '20px',
    height: '10px',
    backgroundColor: '#cbd5e1'
  });
});

// Responsive
window.addEventListener("resize", () => {
  track.style.transition = 'none';
  const cardWidth = getCardWidth();
  track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
  
  // Cập nhật lại active card sau resize
  setTimeout(setCenterActive, 100);
});

// Khởi tạo
renderCards();
setCenterActive();