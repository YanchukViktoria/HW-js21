const slider = document.querySelector("input");
const img = document.querySelector("img");

slider.addEventListener("input",  _.debounce(() => {
    const size = slider.value*5 + "px";
    img.style.width = size;
    img.style.height = size;
}, 70));



const box = document.querySelector("#box");

document.addEventListener("mousemove", _.debounce((e) => {
    box.style.left = e.clientX + "px";
}, 15));