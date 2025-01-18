const imageContainer = document.querySelector(".image-container");
const spans = document.querySelectorAll(".image-container span");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const fullView = document.querySelector(".full-view");
const fullImage = document.getElementById("full-image");
const closeBtn = document.getElementById("close");
const prevFullBtn = document.getElementById("prev-full");
const nextFullBtn = document.getElementById("next-full");

let x = 0;
let currentIndex = 0;

// Dynamically set rotation angle based on the number of images
const totalImages = spans.length;
const angle = 360 / totalImages;

imageContainer.style.setProperty("--angle", `${angle}deg`);

prevBtn.addEventListener("click", () => {
  x += angle;
  rotateGallery();
});

nextBtn.addEventListener("click", () => {
  x -= angle;
  rotateGallery();
});

spans.forEach((span, index) => {
  span.addEventListener("click", () => {
    currentIndex = index;
    showFullView();
  });
});

closeBtn.addEventListener("click", () => {
  fullView.classList.add("hidden");
});

prevFullBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showFullView();
});

nextFullBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  showFullView();
});

function rotateGallery() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

function showFullView() {
  fullImage.src = spans[currentIndex].querySelector("img").src;
  fullView.classList.remove("hidden");
}
