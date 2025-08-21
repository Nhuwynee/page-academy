

document.addEventListener("DOMContentLoaded", () => {
  const btnSignup  = document.querySelector(".btn-signup");
  const btnSignup2 = document.querySelector(".btn-primary");
  const btnSignup3 = document.querySelector(".btn-outline");
  const navItemFocus = document.querySelector(".nav-item-focus");

  const promoSection = document.querySelector(".promo-register-right");
const scrollToPromo = () => {
  if (promoSection) {
    const y = promoSection.getBoundingClientRect().top + window.pageYOffset - 150; // trừ 80px
    window.scrollTo({
      top: y,
      behavior: "smooth"
      
    });
  }
   setTimeout(() => {
      const inputName = document.getElementById("name");
      if (inputName) inputName.focus();
    }, 600);
};
const scrollHeader = () => {
   window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

  if (btnSignup)  btnSignup.addEventListener("click", scrollToPromo);
  if (btnSignup2) btnSignup2.addEventListener("click", scrollToPromo);
  if (btnSignup3) btnSignup3.addEventListener("click", scrollToPromo);
  if (navItemFocus) navItemFocus.addEventListener("click", scrollHeader);
});



