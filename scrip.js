// NAV TOGGLE (hamburguesa)
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// LIGHTBOX
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxLink = document.getElementById('lightbox-link');

galleryItems.forEach(btn => {
  btn.addEventListener('click', () => {
    const src = btn.dataset.src;
    lightboxImg.src = src;
    lightboxImg.alt = btn.querySelector('img')?.alt || '';
    lightboxLink.href = src;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
}

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Añadir año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();