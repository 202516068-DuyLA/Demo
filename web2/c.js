const stickyBar = document.querySelector(".stickybar");
const scrollThreshold = 300;
const navNext = document.querySelector(".nav-next");
const navPrev = document.querySelector(".nav-previous");
const galleryScroller = document.querySelector(".gallery-scroller");

const block = document.querySelector(".block");
const photo = document.querySelector(".photo3");
const length = block.getBoundingClientRect().bottom;
const start = scrollThreshold;
const stop = length - window.innerHeight;
window.addEventListener("scroll", () => {
    if (window.scrollY >= scrollThreshold){
        stickyBar.classList.add("visible");
    }
    else{
        stickyBar.classList.remove("visible");
    }
    
    if(window.scrollY <= stop && window.scrollY >= start) { 
        photo.style.transform = `translateY(${window.scrollY - start}px)`;
    }
    else {
        photo.style.transform = "translateY(0px)";
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