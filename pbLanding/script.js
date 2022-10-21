
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})




const atrBtn = document.querySelector(".atrBtn");
const artList = document.querySelector(".atrList");

atrBtn.addEventListener("click", () => {
    atrBtn.classList.toggle("activeAttrib");
    artList.classList.toggle("activeAttrib");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => { 
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 180;
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
}

    window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


