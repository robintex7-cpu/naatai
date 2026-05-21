// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
  // Trigger once on load
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}

// Cookie notice
function acceptCookie() {
  const notice = document.getElementById('cookieNotice');
  if (notice) notice.style.display = 'none';
  try { localStorage.setItem('naatai_cookie', '1'); } catch(e) {}
}
try {
  if (localStorage.getItem('naatai_cookie') === '1') {
    const notice = document.getElementById('cookieNotice');
    if (notice) notice.style.display = 'none';
  }
} catch(e) {}

// Search toggle placeholder
function toggleSearch() {
  alert('Search coming soon.');
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObs.observe(el));
}
