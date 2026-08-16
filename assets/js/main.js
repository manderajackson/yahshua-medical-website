/* YAHSHUA MEDICAL CLINICS LTD — site behaviour */
(function () {
  "use strict";

  /* Mobile menu ---------------------------------------------------------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-burger]");
    var menu = document.getElementById("menu");
    if (b && menu) { menu.classList.toggle("open"); return; }
    if (menu && menu.classList.contains("open") && !e.target.closest("#menu")) {
      menu.classList.remove("open");
    }
  });

  /* Reveal on scroll ----------------------------------------------------- */
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el, i) { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  /* Counters ------------------------------------------------------------- */
  var nums = document.querySelectorAll("[data-count]");
  if (nums.length && "IntersectionObserver" in window) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, target = parseFloat(el.dataset.count),
            suffix = el.dataset.suffix || "", t0 = null;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / 1400, 1);
          el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))) + suffix;
          if (p < 1) requestAnimationFrame(step); else el.textContent = target + suffix;
        }
        requestAnimationFrame(step);
        io2.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io2.observe(n); });
  }

  /* Lightbox ------------------------------------------------------------- */
  var lb = document.getElementById("lightbox");
  if (lb) {
    var lbImg = lb.querySelector("img");
    document.querySelectorAll("[data-lb]").forEach(function (fig) {
      fig.addEventListener("click", function () {
        var img = fig.querySelector("img");
        lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });
    function closeLb() { lb.classList.remove("open"); document.body.style.overflow = ""; }
    lb.addEventListener("click", closeLb);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLb(); });
  }

  /* Appointment form -> WhatsApp / mail ---------------------------------- */
  var form = document.getElementById("apptForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var msg =
        "*New request — Yahshua Medical Clinics*%0A" +
        "Name: " + encodeURIComponent(d.get("name") || "") + "%0A" +
        "Phone: " + encodeURIComponent(d.get("phone") || "") + "%0A" +
        "Service: " + encodeURIComponent(d.get("service") || "") + "%0A" +
        "Preferred date: " + encodeURIComponent(d.get("date") || "") + "%0A" +
        "Insurance: " + encodeURIComponent(d.get("insurance") || "") + "%0A" +
        "Message: " + encodeURIComponent(d.get("message") || "");
      window.open("https://wa.me/250784852344?text=" + msg, "_blank");
      var ok = document.getElementById("formOk");
      if (ok) { ok.style.display = "block"; }
    });
  }

  /* Year ----------------------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
