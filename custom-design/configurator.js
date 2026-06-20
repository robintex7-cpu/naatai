// ===== State =====
var history = [];
var currentStep = 1;
var currentUnit = 'cm';
var previewSide = 'front';

// ===== Live Canvas Preview =====
var FABRIC_COLORS = {
  'naatai-blue':  { base: '#2C4B7C', shade: '#1A2E55', light: '#3E62A0' },
  'naatai-black': { base: '#1a1a1a', shade: '#000000', light: '#333333' }
};

function getChecked(name) {
  var el = document.querySelector('input[name="' + name + '"]:checked');
  return el ? el.value : null;
}
function isChecked(name) {
  var el = document.querySelector('input[name="' + name + '"]');
  return !!(el && el.checked);
}

function setPreviewSide(side) {
  previewSide = side;
  document.getElementById('btnFront').classList.toggle('active', side === 'front');
  document.getElementById('btnBack').classList.toggle('active', side === 'back');
  drawPreview();
}

function drawPreview() {
  var canvas = document.getElementById('jeansCanvas');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  var fabricKey = getChecked('fabric') || 'naatai-blue';
  var colors = FABRIC_COLORS[fabricKey] || FABRIC_COLORS['naatai-blue'];

  // Body fill gradient
  var grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, colors.light);
  grad.addColorStop(1, colors.shade);

  // Waistband
  ctx.fillStyle = colors.shade;
  roundRect(ctx, w * 0.18, 20, w * 0.64, 36, 6);
  ctx.fill();
  // Belt loops
  ctx.fillStyle = colors.shade;
  [0.28, 0.5, 0.72].forEach(function (x) {
    ctx.fillRect(w * x - 6, 14, 12, 18);
  });

  // Legs
  ctx.fillStyle = grad;
  drawLeg(ctx, w * 0.20, 54, w * 0.28, h - 70);
  drawLeg(ctx, w * 0.52, 54, w * 0.28, h - 70);

  // Center seam
  ctx.strokeStyle = colors.shade;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, 56);
  ctx.lineTo(w * 0.5, h - 24);
  ctx.stroke();

  if (previewSide === 'front') {
    drawFrontDetails(ctx, w, h, colors);
  } else {
    drawBackDetails(ctx, w, h, colors);
  }
}

function drawLeg(ctx, x, y, legW, legH) {
  var topW = legW;
  var botW = legW * 0.62;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + topW, y);
  ctx.lineTo(x + topW - (topW - botW), y + legH);
  ctx.lineTo(x + (topW - botW), y + legH);
  ctx.closePath();
  ctx.fill();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawWhiskers(ctx, cx, cy, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.55;
  for (var i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(cx - 18, cy + i * 6);
    ctx.lineTo(cx + 18, cy + i * 7 - 14);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function drawDestroy(ctx, cx, cy) {
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  for (var i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.ellipse(cx + i * 10 - 10, cy + (i % 2) * 8, 7, 4, 0.4, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawFrontDetails(ctx, w, h, colors) {
  var front = getChecked('front-design');
  var hasFrontPocket = isChecked('front-pocket');
  var fly = getChecked('fly');

  if (hasFrontPocket) {
    ctx.strokeStyle = colors.light;
    ctx.lineWidth = 2;
    [w * 0.30, w * 0.62].forEach(function (px) {
      ctx.beginPath();
      ctx.arc(px, 78, 22, Math.PI * 0.15, Math.PI * 0.85);
      ctx.stroke();
    });
  }

  if (fly) {
    ctx.strokeStyle = colors.shade;
    ctx.lineWidth = fly === 'zipper' ? 1.5 : 2;
    ctx.setLineDash(fly === 'button' ? [4, 3] : []);
    ctx.beginPath();
    ctx.moveTo(w * 0.5 + 4, 60);
    ctx.lineTo(w * 0.5 + 4, 140);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  if (front && front !== 'none') {
    if (front.indexOf('whisker') !== -1) {
      drawWhiskers(ctx, w * 0.35, 170, colors.light);
      drawWhiskers(ctx, w * 0.65, 170, colors.light);
    }
    if (front.indexOf('destroy') !== -1) {
      drawDestroy(ctx, w * 0.35, 230);
    }
    if (front === 'front-design') {
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      roundRect(ctx, w * 0.28, 150, w * 0.44, 90, 8);
      ctx.fill();
    }
  }
}

function drawBackDetails(ctx, w, h, colors) {
  var backPocket = getChecked('back-pocket');
  var backDesign = getChecked('back-design');

  if (backPocket && backPocket !== 'none') {
    ctx.strokeStyle = colors.light;
    ctx.lineWidth = backPocket === 'back-pocket' ? 2.5 : 1.5;
    [w * 0.30, w * 0.62].forEach(function (px) {
      roundRect(ctx, px - 24, 80, 48, 56, 6);
      ctx.stroke();
      if (backPocket === 'back-pocket') {
        ctx.beginPath();
        ctx.moveTo(px - 24, 92);
        ctx.lineTo(px + 24, 92);
        ctx.stroke();
      }
    });
  }

  if (backDesign && backDesign !== 'none') {
    if (backDesign.indexOf('whisker') !== -1 || backDesign === 'pocket-whisker') {
      drawWhiskers(ctx, w * 0.35, 200, colors.light);
      drawWhiskers(ctx, w * 0.65, 200, colors.light);
    }
    if (backDesign.indexOf('knee') !== -1) {
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      roundRect(ctx, w * 0.22, 300, w * 0.2, 40, 8);
      ctx.fill();
      roundRect(ctx, w * 0.58, 300, w * 0.2, 40, 8);
      ctx.fill();
    }
    if (backDesign.indexOf('destroy') !== -1) {
      drawDestroy(ctx, w * 0.65, 250);
    }
    if (backDesign === 'back-design') {
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      roundRect(ctx, w * 0.28, 150, w * 0.44, 90, 8);
      ctx.fill();
    }
  }
}

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
  drawPreview();
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
  // Track each radio group's value *before* the next change, since by the
  // time a 'change' event fires the new option is already the checked one.
  var lastRadioValue = {};
  document.querySelectorAll('input[type="radio"][data-price]').forEach(function(el) {
    if (el.checked) lastRadioValue[el.name] = el.value;
  });

  document.querySelectorAll('input[type="radio"][data-price]').forEach(function(el) {
    el.addEventListener('change', function() {
      history.push({ type: 'radio', name: el.name, prevVal: lastRadioValue[el.name] || null });
      lastRadioValue[el.name] = el.value;
      updatePrice();
      drawPreview();
    });
  });

  // Save history on checkbox change
  document.querySelectorAll('input[type="checkbox"][data-price]').forEach(function(el) {
    el.addEventListener('change', function() {
      history.push({ type: 'checkbox', el: el, prevVal: !el.checked });
      updatePrice();
      drawPreview();
    });
  });

  // Initial price + preview
  updatePrice();
  drawPreview();
});
