/* ── Navbar scroll state ── */
const navbar = document.getElementById('navbar');

const setNavbarState = () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', setNavbarState, { passive: true });
setNavbarState();

/* ── Smooth hero scroll ── */
document.querySelector('.hero__scroll')?.addEventListener('click', () => {
  document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth' });
});

/* ── Cart count (demo) ── */
const cartCount = document.querySelector('.cart-count');
let count = 0;

document.querySelectorAll('.product-card__quick-add').forEach(btn => {
  btn.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
    cartCount.style.transform = 'scale(1.4)';
    setTimeout(() => { cartCount.style.transform = 'scale(1)'; }, 200);
  });
});

/* ── Entrance animations ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

const animateEls = [
  '.arrivals__header',
  '.product-card',
  '.feature-banner__content',
  '.statement__inner',
  '.newsletter__inner',
];

animateEls.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.cssText += `
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.6s ease ${i * 0.1}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s;
    `;
    observer.observe(el);
  });
});
