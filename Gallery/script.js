function showSection(sectionId) {
    const sections = ['intro-section', 'gallery1-section', 'gallery3-section'];
    const navItems = document.querySelectorAll('.navbar-item');
    sections.forEach(section => {
      document.getElementById(section).style.display = (section === sectionId) ? 'block' : 'none';
      navItems.forEach(item => item.classList.remove('active'));
      if (section === sectionId) {
        document.querySelector(`.navbar-item[onclick="showSection('${sectionId}')"]`).classList.add('active');
      }
    });
  }

  function highlightImage(galleryId, index) {
    const gallery = document.getElementById(galleryId);
    const images = gallery.getElementsByTagName('img');
    Array.from(images).forEach(img => img.classList.remove('highlight'));
    if (images[index]) images[index].classList.add('highlight');
  }

  function removeHighlight(galleryId, index) {
    const gallery = document.getElementById(galleryId);
    const images = gallery.getElementsByTagName('img');
    if (images[index]) images[index].classList.remove('highlight');
  }

  document.addEventListener('keydown', function(event) {
    const cardContainer = document.getElementById('card-container');
    if (event.key === '+') {
      cardContainer.style.transform = `scale(${(parseFloat(cardContainer.style.transform.replace('scale(', '').replace(')', '')) || 1) + 0.1})`;
    } else if (event.key === '-') {
      const currentScale = parseFloat(cardContainer.style.transform.replace('scale(', '').replace(')', '')) || 1;
      if (currentScale > 0.1) {
        cardContainer.style.transform = `scale(${currentScale - 0.1})`;
      }
    }
  });

  let isDragging = false;
  let startX, startY;

  const cardContainer = document.getElementById('card-container');

  cardContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - cardContainer.getBoundingClientRect().left;
    startY = e.clientY - cardContainer.getBoundingClientRect().top;
    cardContainer.style.position = 'absolute';
    cardContainer.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      cardContainer.style.left = `${e.clientX - startX}px`;
      cardContainer.style.top = `${e.clientY - startY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    cardContainer.style.cursor = 'move';
  });