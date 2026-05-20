// Thumbnail switching
const mainImage = document.getElementById('main-image');
document.querySelectorAll('.thumb').forEach(thumb => {
  thumb.style.background = thumb.dataset.bg;
  thumb.addEventListener('click', () => {
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    mainImage.style.background = thumb.dataset.bg;
  });
});

// Size buttons
document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.size-grid').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Add to cart
const cartCount = document.getElementById('cart-count');
let count = 0;
document.getElementById('add-to-cart')?.addEventListener('click', () => {
  count++;
  cartCount.textContent = count;
  const btn = document.getElementById('add-to-cart');
  btn.textContent = 'Added!';
  btn.style.background = 'var(--gold-light)';
  setTimeout(() => { btn.textContent = 'Add to Cart'; btn.style.background = ''; }, 1800);
});
document.querySelectorAll('.product-card__quick-add').forEach(b => {
  b.addEventListener('click', () => { count++; cartCount.textContent = count; });
});

// Product data by URL param
const params = new URLSearchParams(window.location.search);
const id = params.get('id') || 'w1';
const products = {
  w1: { name: 'Dark Blue Skinny Jeans', price: '€79,00', tag: 'Women · New Arrival', cat: 'women', bg: 'linear-gradient(160deg,#1e2a52,#2d3f7e)' },
  w2: { name: 'Light Blue Jeans', price: '€79,00', tag: 'Women · New Arrival', cat: 'women', bg: 'linear-gradient(160deg,#3a5a8c,#5a8abf)' },
  w3: { name: 'Wide Leg Indigo', price: '€89,00', tag: 'Women', cat: 'women', bg: 'linear-gradient(160deg,#2c4a7e,#4a7abf)' },
  w4: { name: 'Midnight Straight Cut', price: '€79,00', tag: 'Women', cat: 'women', bg: 'linear-gradient(160deg,#1a1a2e,#3a3a5e)' },
  w5: { name: 'Faded Summer Slim', price: '€59,00', tag: 'Women · Sale', cat: 'women', bg: 'linear-gradient(160deg,#5a7a9c,#8aaabf)' },
  m1: { name: 'Sunny Jeans', price: '€79,00', tag: 'Men · New Arrival', cat: 'men', bg: 'linear-gradient(160deg,#eac97a,#c9a84c)' },
  m2: { name: 'Royal Blue Jeans', price: '€79,00', tag: 'Men · New Arrival', cat: 'men', bg: 'linear-gradient(160deg,#1e3a8c,#2d52b8)' },
  m3: { name: 'Naatai Light Blue', price: '€79,00', tag: 'Men · New Arrival', cat: 'men', bg: 'linear-gradient(160deg,#3a5a8c,#5a8abf)' },
  m4: { name: 'Midnight Slim Fit', price: '€85,00', tag: 'Men', cat: 'men', bg: 'linear-gradient(160deg,#0f2050,#1A1A2E)' },
};
const p = products[id] || products.w1;
document.getElementById('product-name').textContent = p.name;
document.getElementById('product-price').textContent = p.price;
document.getElementById('product-tag').textContent = p.tag;
document.getElementById('breadcrumb-name').textContent = p.name;
document.getElementById('breadcrumb-cat').textContent = p.cat.charAt(0).toUpperCase() + p.cat.slice(1);
document.getElementById('breadcrumb-cat').href = '../' + p.cat + '/';
mainImage.style.background = p.bg;
document.querySelectorAll('.thumb')[0].style.background = p.bg;
document.title = p.name + ' – NAATAI';
