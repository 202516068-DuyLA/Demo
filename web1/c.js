const track = document.querySelectorAll('.image-track');
const nxt_btn = document.querySelectorAll('.next-btn');
const pre_btn = document.querySelectorAll('.pre-btn');
const currentTranslateX = Array(track.length).fill(0);
const step = 400; // Đoạn dịch chuyển mỗi lần bấm (pixel, bằng với độ rộng 1 ảnh)
for(let i=0;i<track.length;i++) {

    nxt_btn[i].onclick = () => {
        currentTranslateX[i] -= step;

    
        const maxScroll = -(track[i].children.length - 1) * step;
        if (currentTranslateX[i] < maxScroll) nxt_btn[i].style.display = "none";
        
        if(currentTranslateX[i] < 0)  pre_btn[i].style.display = "flex"
        
        track[i].style.transform = `translateX(${currentTranslateX[i]}px)`;
    }
    
    pre_btn[i].onclick = () => {
        currentTranslateX[i] += step;
        const maxScroll = -(track[i].children.length - 1) * step;
        if (currentTranslateX[i] >= maxScroll) nxt_btn[i].style.display = "flex";
        
        if(currentTranslateX[i] >= 0)  pre_btn[i].style.display = "none";
        track[i].style.transform = `translateX(${currentTranslateX[i]}px)`;
    }   
}