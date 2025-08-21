const cards = document.querySelectorAll(".course-card");
const prevBtn = document.querySelector(".btnPrev .nav-btn");
const nextBtn = document.querySelector(".btnNext .nav-btn");
const nav_current = document.querySelector(".navigation .navigation_current");
const nav_next = document.querySelector(".navigation .navigation_next");

const images = [
    {
        img: "img/course-1.png",
        title: "Khóa học 1"
    },
    {
        img: "img/course-2.png",
        title: "Khóa học 2"
    },
    {
        img: "img/course-3.png",
        title: "Khóa học 3"
    },
        {
        img: "img/course-3.png",
        title: "Khóa học 4"
    },
        {
        img: "img/course-3.png",
        title: "Khóa học 5"
    },
        {
        img: "img/course-3.png",
        title: "Khóa học 6"
    },
        {
        img: "img/course-3.png",
        title: "Khóa học 7"
    },

]

const handleImage = (index) => {
    cards.forEach((card, i) => {
        const img = card.querySelector("img");
        const title = card.querySelector('p');
        if (img) {
            const imgIndex = (index + i) % images.length;
            img.src = images[imgIndex].img;
            title.innerText= images[imgIndex].title
        }
    });
};

let currentIndex = 0;

prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    handleImage(currentIndex);
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

nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    handleImage(currentIndex)
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

handleImage(0);