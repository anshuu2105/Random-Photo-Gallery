const photoGrid = document.getElementById('photo-grid');
const loadBtn = document.getElementById('loadBtn');

function loadRandomPhotos(count = 6) {
  photoGrid.innerHTML = ''; // Clear old images

  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    // Using Picsum Photos for random images
    img.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
    img.alt = 'Random Photo';
    photoGrid.appendChild(img);
  }
}

loadBtn.addEventListener('click', () => {
  loadRandomPhotos();
});

// Initial load
loadRandomPhotos();
