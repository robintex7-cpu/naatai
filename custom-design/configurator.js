// ===== State =====
var history = [];
var currentStep = 1;
var currentUnit = 'cm';

// ===== Step Navigation =====
function goToStep(n) {
  document.getElementById('step-' + currentStep).classList.remove('active');
  currentStep = n;
  document.getElementById('step-' + n).classList.add('active');

  document.querySelectorAll('.step-item').forEach(function(el) {
    var s = parseInt(el.dataset.step);
    el.classList.toggle('active', s === n);
    el.classList.toggle('done', s < n);
  });

  if (n === 3) updateSummary();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== Price Calculation =====
function calcTotal() {
  var total = 0;

  // Radio groups
  ['fabric', 'front-design', 'back-pocket', 'back-design'].forEach(function(name) {
    var el = document.querySelector('input[name="' + name + '"]:checked');
    if (el) total += parseFloat(el.dataset.price || 0);
  });

  // Checkboxes
  document.querySelectorAll('input[type="checkbox"][data-price]').forEach(function(el) {
    if (el.checked) total += parseFloat(el.dataset.price || 0);
  });

  return total;
}

function updatePrice() {
  var t = calcTotal();
  var el = document.getElementById('totalPrice');
  if (el) el.textContent = '€' + t;
}

// ===== Summary (step 3) =====
function updateSummary() {
  function getLabel(name) {
    var el = document.querySelector('input[name="' + name + '"]:checked');
    if (!el) return '—';
    return el.dataset.label || el.value;
  }
  function getCheckLabel(name) {
    var el = document.querySelector('input[name="' + name + '"]');
    if (!el || !el.checked) return '—';
    return el.dataset.label || 'Yes';
  }

  var total = calcTotal();

  setText('sum-fabric', getLabel('fabric'));
  setText('sum-front-pocket', getCheckLabel('front-pocket'));
  setText('sum-front-design', getLabel('front-design'));
  setText('sum-back-pocket', getLabel('back-pocket'));
  setText('sum-subtotal', '€' + total);
  setText('sum-discount', '—');
  setText('sum-total', '€' + total);
}

function setText(id, val) {
  var el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ===== Undo =====
function undoLast() {
  if (history.length === 0) return;
  var last = history.pop();
  if (last.type === 'radio') {
    var prev = document.querySelector('input[name="' + last.name + '"][value="' + last.prevVal + '"]');
    if (prev) prev.checked = true;
  } else if (last.type === 'checkbox') {
    last.el.checked = last.prevVal;
  }
  updatePrice();
}

// ===== View Video =====
function viewVideo() {
  alert('Video preview coming soon.');
}

// ===== Auth Tabs =====
function switchTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(function(el, i) {
    el.classList.toggle('active', (i === 0 && tab === 'login') || (i === 1 && tab === 'register'));
  });
  document.querySelectorAll('.auth-panel').forEach(function(el) { el.classList.remove('active'); });
  var panel = document.getElementById('tab-' + tab);
  if (panel) panel.classList.add('active');
}

// ===== Unit Toggle =====
function setUnit(unit) {
  currentUnit = unit;
  document.getElementById('btnCm').classList.toggle('active', unit === 'cm');
  document.getElementById('btnInch').classList.toggle('active', unit === 'inch');

  var labels = document.querySelectorAll('.unit-lbl');
  labels.forEach(function(lbl) {
    var name = lbl.closest('.mfield') && lbl.closest('.mfield').querySelector('input') && lbl.closest('.mfield').querySelector('input').name;
    if (name === 'weight') return; // weight stays lbs
    if (name === 'height') { lbl.textContent = unit === 'cm' ? 'cm' : 'feet'; return; }
    lbl.textContent = unit === 'cm' ? 'cm' : 'inch';
  });
}

// ===== Download Invoice =====
function downloadInvoice() {
  alert('Invoice download will be available after placing your order.');
}

// ===== Place Order =====
function placeOrder() {
  alert('Thank you for your order! We will be in touch shortly.');
}

// ===== Wire up change listeners =====
document.addEventListener('DOMContentLoaded', function() {
  // Save history on radio change
  document.querySelectorAll('input[type="radio"][data-price]').forEach(function(el) {
    el.addEventListener('change', function() {
      var prev = document.querySelector('input[name="' + el.name + '"]:checked');
      history.push({ type: 'radio', name: el.name, prevVal: prev ? prev.value : null });
      updatePrice();
    });
  });

  // Save history on checkbox change
  document.querySelectorAll('input[type="checkbox"][data-price]').forEach(function(el) {
    el.addEventListener('change', function() {
      history.push({ type: 'checkbox', el: el, prevVal: !el.checked });
      updatePrice();
    });
  });

  // Initial price
  updatePrice();
});
