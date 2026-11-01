const stickyBar = document.querySelector(".stickybar");
const scrollThreshold = 300;


window.addEventListener("scroll", () => {
    if (window.scrollY >= scrollThreshold){
        stickyBar.classList.add("visible");
    }
    else{
        stickyBar.classList.remove("visible");
    }
})