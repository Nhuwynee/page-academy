document.addEventListener("DOMContentLoaded", () => {
  const btnSignup  = document.querySelector(".btn-signup");
  const btnSignup2 = document.querySelector(".btn-primary");
  const btnSignup3 = document.querySelector(".btn-outline");
  const navItemFocus = document.querySelector(".nav-item-focus");
  const promoSection = document.querySelector(".promo-register-right");

  // Hàm scroll với easing tùy chỉnh
  const smoothScrollTo = (targetY, duration = 1000) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startY + (distance * ease));
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Scroll đến form đăng ký
  const scrollToPromo = (event) => {
    event?.preventDefault(); // Ngăn default behavior
    
    if (promoSection) {
      const targetY = promoSection.getBoundingClientRect().top + window.pageYOffset - 80;
      
      smoothScrollTo(targetY, 1200); // 1.2 giây
      
      // Focus input sau khi animation hoàn thành
      setTimeout(() => {
        const inputName = document.getElementById("name");
        if (inputName) {
          inputName.focus();
          // Thêm highlight effect
          inputName.style.transition = "box-shadow 0.3s ease";
          inputName.style.boxShadow = "0 0 10px rgba(74, 144, 226, 0.5)";
          
          setTimeout(() => {
            inputName.style.boxShadow = "";
          }, 2000);
        }
      }, 1300);
    }
  };

  // Scroll về đầu trang
  const scrollToHeader = (e) => {
    e?.preventDefault();
    smoothScrollTo(0, 800); // 0.8 giây
  };

  // Thêm loading state cho buttons
  const addLoadingEffect = (button) => {
    if (button) {
      button.style.transition = "opacity 0.2s ease";
      button.style.opacity = "0.7";
      
      setTimeout(() => {
        button.style.opacity = "";
      }, 1200);
    }
  };

  // Enhanced event listeners
  if (btnSignup) {
    btnSignup.addEventListener("click", (e) => {
      addLoadingEffect(btnSignup);
      scrollToPromo(e);
    });
  }
  
  if (btnSignup2) {
    btnSignup2.addEventListener("click", (e) => {
      addLoadingEffect(btnSignup2);
      scrollToPromo(e);
    });
  }
  
  if (btnSignup3) {
    btnSignup3.addEventListener("click", (e) => {
      addLoadingEffect(btnSignup3);
      scrollToPromo(e);
    });
  }
  
  if (navItemFocus) {
    navItemFocus.addEventListener("click", scrollToHeader);
  }
});
