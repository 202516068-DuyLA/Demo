const stickyBar = document.querySelector(".stickybar");
const scrollThreshold = 300;
const navNext = document.querySelector(".nav-next");
const navPrev = document.querySelector(".nav-previous");
const galleryScroller = document.querySelector(".gallery-scroller");
const form = document.getElementById("buy-form");
const colorButtons = document.querySelectorAll('.colornav-input');
const colorText = document.querySelector(".colornav-header");
const button_down_large = document.getElementsByClassName("icon-down")[0];
const button_large_container = document.getElementsByClassName("icon-down-container")[0];
const block2 = document.querySelector(".question_container_block2");
const buttons_down_small = document.querySelectorAll(".icon_small");
const buttons_small_container = document.querySelectorAll(".con_small");
const block2_detail = document.querySelectorAll(".question_block2_detail");

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

button_large_container.onclick = () => {
    const thise = button_down_large;
    if(thise.style.transform == "rotate(45deg)") {
        thise.style.transform = "rotate(-135deg)";
        block2.style.display = "block";
    }
    else {
        thise.style.transform = "rotate(45deg)";
         block2.style.display = "none";
    }
}

for(let i=0;i<buttons_down_small.length;i++) {
    buttons_small_container[i].onclick = () => {
        const thise = buttons_down_small[i];
        if(thise.style.transform == "rotate(45deg)") {
            thise.style.transform = "rotate(-135deg)";
            block2_detail[i].style.display = "block";
        }
        else {
            thise.style.transform = "rotate(45deg)";
            block2_detail[i].style.display = "none";
        }
    }
}