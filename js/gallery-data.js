// Gallery Data - Image paths from public/image-page-data folder

const galleryImages = {
  wedding: [
    '1.jpeg',
    '10.jpeg',
    '11.jpeg',
    '12.jpeg',
    '13.jpeg',
    '14.jpeg',
    '15.jpeg',
    '17.jpeg',
    '18.jpeg',
    '4.jpeg',
    '5.jpeg',
    '6.jpeg',
    '7.jpeg',
    '8.jpeg',
    '9.jpeg',
    'ANKU2532.jpeg',
    'ANKU4613.jpeg',
    'ANKU4695.jpeg',
    'Mehar 113.jpeg',
    'Mehar 14.jpeg',
    'Mehar 185.jpeg',
    'Mehar 287.jpeg',
    'Mehar 73.jpeg',
    'Mehar 79.jpeg',
    'Mehar 96.jpeg',
    'Mehar-84.jpeg',
    'Mehar78.jpeg',
    'UWF00154.jpeg',
    'UWF09489.jpeg',
    'UWF09856.jpeg',
    'UWF09905.jpeg',
    'UWF09917.jpeg'
  ],
  haldi: [
    'Haldi_01.jpeg',
    'Haldi_02.jpeg',
    'Haldi_03.jpeg',
    'Haldi_04.jpeg',
    'Haldi_05.jpeg',
    'Haldi_06.jpeg',
    'Haldi_07.jpeg',
    'Haldi_08.jpeg',
    'Haldi_09.jpeg',
    'Haldi_10.jpeg',
    'Haldi_11.jpeg'
  ],
  'ring-ceremony': [
    '(0).jpeg',
    '(1).jpeg',
    '(10).jpeg',
    '(11).jpeg',
    '(12).jpeg',
    '(13).jpeg',
    '(2).jpeg',
    '(3).jpeg',
    '(4).jpeg',
    '(5).jpeg',
    '(6).jpeg',
    '(7).jpeg',
    '(8).jpeg',
    '(9).jpeg',
    '00.jpeg',
    '00000.jpeg',
    '00000c.jpeg',
    '00c.jpeg',
    'UWF06742.jpeg',
    'UWF06774.jpeg',
    'UWF06774c.jpeg',
    'UWF06778.jpeg',
    'UWF06778c.jpeg',
    'UWF06782.jpeg',
    'UWF06784.jpeg',
    'UWF06800.jpeg',
    'UWF06812.jpeg',
    'UWF06827.jpeg',
    'UWF06836.jpeg',
    'UWF06848.jpeg',
    'UWF06861.jpeg',
    'UWF06868.jpeg',
    'UWF06870.jpeg',
    'UWF06870c.jpeg',
    'UWF06873.jpeg',
    'UWF06907.jpeg',
    'UWF06909.jpeg',
    'UWF06994.jpeg',
    'UWF07234.jpeg',
    'UWF07264.jpeg'
  ]
};

// Gallery functionality
document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('gallery-grid');
  const galleryLoading = document.getElementById('gallery-loading');
  const galleryEmpty = document.getElementById('gallery-empty');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const totalImagesEl = document.getElementById('total-images');
  
  let currentFilter = 'all';
  let currentImages = [];
  let currentIndex = 0;

  // Calculate total images
  const totalImages = Object.values(galleryImages).reduce((sum, arr) => sum + arr.length, 0);
  totalImagesEl.textContent = totalImages;

  // Create all image objects
  function getAllImages() {
    const allImages = [];
    Object.entries(galleryImages).forEach(([category, images]) => {
      images.forEach(imageName => {
        allImages.push({
          src: `public/image-page-data/${category}/${imageName}`,
          category: category,
          name: imageName
        });
      });
    });
    return allImages;
  }

  // Render gallery
  function renderGallery(filter = 'all') {
    galleryLoading.style.display = 'none';
    galleryGrid.innerHTML = '';
    
    const allImages = getAllImages();
    const filteredImages = filter === 'all' 
      ? allImages 
      : allImages.filter(img => img.category === filter);
    
    currentImages = filteredImages;

    if (filteredImages.length === 0) {
      galleryEmpty.style.display = 'block';
      return;
    }

    galleryEmpty.style.display = 'none';

    filteredImages.forEach((image, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      
      item.innerHTML = `
        <div class="gallery-item-image">
          <img src="${image.src}" alt="${image.category}" loading="lazy">
          <div class="gallery-item-overlay">
            <span class="gallery-item-category">${image.category.replace('-', ' ')}</span>
          </div>
        </div>
      `;
      
      // Open lightbox on click
      item.addEventListener('click', () => {
        openLightbox(index);
      });
      
      galleryGrid.appendChild(item);
    });
  }

  // Filter functionality
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter gallery
      const filter = btn.dataset.filter;
      currentFilter = filter;
      renderGallery(filter);
    });
  });

  // Lightbox functionality
  function openLightbox(index) {
    currentIndex = index;
    updateLightbox(true); // true = initial load, no transition
    
    // Show lightbox with smooth animation
    lightbox.style.display = 'flex';
    requestAnimationFrame(() => {
      lightbox.classList.add('active');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
      if (!lightbox.classList.contains('active')) {
        lightbox.style.display = 'none';
      }
    }, 300);
    
    document.body.style.overflow = '';
  }

  function updateLightbox(isInitial = false) {
    if (currentImages.length === 0) return;
    
    const image = currentImages[currentIndex];
    const lightboxContent = document.querySelector('.lightbox-content');
    
    if (isInitial) {
      // Initial load - no transition
      lightboxImage.src = image.src;
      lightboxImage.alt = image.category;
      lightboxCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    } else {
      // Navigation between images - with transition
      lightboxContent.style.opacity = '0';
      lightboxContent.style.transform = 'scale(0.95)';
      
      setTimeout(() => {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.category;
        lightboxCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
        
        // Fade back in
        requestAnimationFrame(() => {
          lightboxContent.style.opacity = '';
          lightboxContent.style.transform = '';
        });
      }, 150);
    }
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightbox();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightbox();
  }

  // Lightbox controls
  document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  document.querySelector('.lightbox-nav.next').addEventListener('click', nextImage);
  document.querySelector('.lightbox-nav.prev').addEventListener('click', prevImage);
  
  // Close lightbox on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  // Initial render
  renderGallery('all');
});

