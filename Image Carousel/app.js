const body = document.body;
const imgs = document.querySelectorAll(".img");
const arrowBtns = document.querySelectorAll(".arrow-btn");

let activeImg = 0;

function updateActiveImage() {
  imgs.forEach((img, index) => {
    img.classList.toggle("active", index === activeImg);
  });
}

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("right-arrow")) {
      activeImg = (activeImg + 1) % imgs.length;
    } else {
      activeImg = (activeImg - 1 + imgs.length) % imgs.length;
    }
    updateActiveImage();
  });
});

updateActiveImage();
