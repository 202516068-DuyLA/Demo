const stickyBar = document.querySelector(".stickybar");
const scrollThreshold = 300;
const navNext = document.querySelector(".nav-next");
const navPrev = document.querySelector(".nav-previous");
const galleryScroller = document.querySelector(".gallery-scroller");


window.addEventListener("scroll", () => {
    if (window.scrollY >= scrollThreshold){
        stickyBar.classList.add("visible");
    }
    else{
        stickyBar.classList.remove("visible");
    }
    
})

navNext.addEventListener("click", () => {
    navNext.classList.add("hidden");
    navPrev.classList.remove("hidden");
    galleryScroller.classList.add("scrolled");
})

navPrev.addEventListener("click", () => {
    navPrev.classList.add("hidden");
    navNext.classList.remove("hidden");
    galleryScroller.classList.remove("scrolled");

})