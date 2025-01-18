const clips = document.querySelectorAll('.clip');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.getElementById('close-btn');

clips.forEach(clip => {
  clip.addEventListener('click', () => {
    const imgSrc = clip.style.backgroundImage.slice(5, -2); // Get background image URL
    popupImage.src = imgSrc; // Set the image source for the popup
    popup.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
