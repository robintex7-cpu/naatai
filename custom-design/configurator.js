// Step navigation
const steps = document.querySelectorAll('.cfg-step');
const stepBtns = document.querySelectorAll('.step-btn');

function goToStep(n) {
  steps.forEach(s => s.classList.remove('active'));
  stepBtns.forEach((b, i) => {
    b.classList.remove('active');
    if (i + 1 < n) b.classList.add('done');
    else b.classList.remove('done');
  });
  const target = document.getElementById('step-' + n);
  if (target) target.classList.add('active');
  stepBtns[n - 1]?.classList.add('active');
  window.scrollTo({ top: document.querySelector('.steps-bar').offsetTop - 80, behavior: 'smooth' });
}

document.querySelectorAll('.cfg-step__next').forEach(btn => {
  btn.addEventListener('click', () => goToStep(+btn.dataset.next));
});
document.querySelectorAll('.cfg-step__back').forEach(btn => {
  btn.addEventListener('click', () => goToStep(+btn.dataset.prev));
});
stepBtns.forEach(btn => {
  btn.addEventListener('click', () => goToStep(+btn.dataset.step));
});

// Auth tabs
document.querySelectorAll('.auth-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('login-form').classList.toggle('hidden', tab.dataset.tab !== 'login');
    document.getElementById('register-form').classList.toggle('hidden', tab.dataset.tab !== 'register');
  });
});

// Pricing
const BASE = 99;
const BACK_POCKET_PRICES = { standard: 29, simple: 3 };

function calcTotal() {
  let total = BASE;

  // Back pocket
  const bp = document.querySelector('input[name="back-pocket"]:checked');
  const bpPrice = bp ? BACK_POCKET_PRICES[bp.value] : 29;
  total += bpPrice;
  const bpLine = document.getElementById('line-back-pocket');
  if (bpLine) bpLine.querySelector('span:last-child').textContent = '€' + bpPrice;

  // Addons
  const addons = document.querySelectorAll('input[name="addon"]:checked');
  const addonContainer = document.getElementById('summary-addons');
  addonContainer.innerHTML = '';
  addons.forEach(a => {
    const price = +a.value;
    total += price;
    const div = document.createElement('div');
    div.className = 'summary-addon';
    div.innerHTML = `<span>${a.dataset.label}</span><span>+€${price}</span>`;
    addonContainer.appendChild(div);
  });

  document.getElementById('summary-total').textContent = '€' + total;
}

document.querySelectorAll('input[name="addon"], input[name="back-pocket"]').forEach(el => {
  el.addEventListener('change', calcTotal);
});
calcTotal();

// Place order
document.getElementById('place-order')?.addEventListener('click', () => {
  document.getElementById('success-modal').classList.remove('hidden');
});
