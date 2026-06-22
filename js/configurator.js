(function () {
  const BASE_PRICE = 129;

  const state = {
    fit: "Slim",
    wash: "Indigo",
    fabric: "Classic Denim",
    waist: 32,
    inseam: 32,
    stitch: "Tonal",
    hem: "Stock",
    addOns: 0,
  };

  const washColors = {
    "Raw Black": "#161616",
    Indigo: "#2b3a67",
    "Mid Vintage": "#5b7aa3",
    "Light Bleach": "#a9c0d8",
  };

  const steps = Array.from(document.querySelectorAll(".step"));
  let current = 1;

  const progressFill = document.getElementById("progressFill");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const previewJean = document.getElementById("previewJean");
  const priceTotal = document.getElementById("priceTotal");
  const summaryList = document.getElementById("summaryList");

  function setStep(n) {
    current = n;
    steps.forEach((s) => s.classList.toggle("active", Number(s.dataset.step) === n));
    progressFill.style.width = `${(n / steps.length) * 100}%`;
    backBtn.style.visibility = n === 1 ? "hidden" : "visible";
    nextBtn.textContent = n === steps.length ? "Review & Finish" : "Continue";
  }

  function recalcAddOns() {
    let total = 0;
    document.querySelectorAll(".option-card.selected").forEach((card) => {
      total += Number(card.dataset.price || 0);
    });
    state.addOns = total;
  }

  function render() {
    previewJean.style.setProperty("--swatch-color", washColors[state.wash] || "#2b3a67");

    const fields = {
      fit: state.fit,
      wash: state.wash,
      fabric: state.fabric,
      waist: `${state.waist}"`,
      inseam: `${state.inseam}"`,
      stitch: state.stitch,
      hem: state.hem,
    };

    summaryList.querySelectorAll("li").forEach((li) => {
      const key = li.dataset.key;
      if (fields[key] !== undefined) {
        li.querySelector("span").textContent = fields[key];
      }
    });

    const total = BASE_PRICE + state.addOns;
    priceTotal.textContent = `€${total}`;
  }

  document.querySelectorAll(".option-grid").forEach((grid) => {
    const group = grid.dataset.group;
    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".option-card");
      if (!card) return;
      grid.querySelectorAll(".option-card").forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      state[group] = card.dataset.value;
      recalcAddOns();
      render();
    });
  });

  document.getElementById("waistInput").addEventListener("input", (e) => {
    state.waist = Number(e.target.value) || state.waist;
    render();
  });

  document.getElementById("inseamInput").addEventListener("input", (e) => {
    state.inseam = Number(e.target.value) || state.inseam;
    render();
  });

  backBtn.addEventListener("click", () => {
    if (current > 1) setStep(current - 1);
  });

  nextBtn.addEventListener("click", () => {
    if (current < steps.length) {
      setStep(current + 1);
    } else {
      document.getElementById("addToCart").focus();
      document.querySelector(".preview-pane").scrollIntoView({ behavior: "smooth" });
    }
  });

  document.getElementById("addToCart").addEventListener("click", () => {
    alert(
      `Added to cart:\nFit: ${state.fit}\nWash: ${state.wash}\nFabric: ${state.fabric}\n` +
      `Waist: ${state.waist}" / Inseam: ${state.inseam}"\nStitching: ${state.stitch}\nHem: ${state.hem}\n` +
      `Total: €${BASE_PRICE + state.addOns}`
    );
  });

  recalcAddOns();
  render();
  setStep(1);
})();
