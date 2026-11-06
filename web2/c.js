const stickyBar = document.querySelector(".stickybar");
const scrollThreshold = 300;
const navNext = document.querySelector(".nav-next");
const navPrev = document.querySelector(".nav-previous");
const galleryScroller = document.querySelector(".gallery-scroller");
const form = document.getElementById("buy-form");
const colorButtons = document.querySelectorAll('.colornav-input');
const colorText = document.querySelector(".colornav-header");

for (let i=0; i<colorButtons.length; i++){
    colorButtons[i].addEventListener("change", () => {
        if (colorButtons[i].checked) {
            if (colorButtons[i].value == "spaceblack") colorText.textContent = `Màu - Đen Không Gian`;
            else colorText.textContent = `Màu - Bạc`;
        }
    });
}



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const answers = Object.fromEntries(formData.entries());

    console.log(answers);
})


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

