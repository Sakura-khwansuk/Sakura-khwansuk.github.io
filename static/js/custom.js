(() => {
  const root = document.documentElement;

  // Use the theme's own color-scheme control where available; this script only
  // adds a conservative fallback and does not persist personal identifiers.
  const applyScheme = (scheme) => {
    if (scheme === "light" || scheme === "dark") {
      root.dataset.scheme = scheme;
      root.style.colorScheme = scheme;
    }
  };

  const detect = () => {
    const button = document.querySelector('[data-scheme], [data-scheme-toggle], .theme-switch');
    if (button) {
      button.addEventListener("click", () => {
        window.setTimeout(() => {
          const current = root.dataset.scheme || (root.classList.contains("dark") ? "dark" : "light");
          applyScheme(current);
        }, 0);
      }, { passive: true });
    }
    if (!root.dataset.scheme) {
      const dark = root.classList.contains("dark") || root.getAttribute("data-scheme") === "dark";
      applyScheme(dark ? "dark" : "light");
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", detect, { once: true });
  else detect();

  // Image lightbox: browser-native new-tab fallback remains available if JS is disabled.
  document.addEventListener("click", (event) => {
    const link = event.target.closest(".sakura-lightbox a");
    if (!link) return;
    const image = link.querySelector("img");
    if (!image) return;
    event.preventDefault();
    const overlay = document.createElement("dialog");
    overlay.className = "sakura-lightbox-dialog";
    overlay.setAttribute("aria-label", image.alt || "放大图片");
    const enlarged = document.createElement("img");
    enlarged.src = image.currentSrc || image.src;
    enlarged.alt = image.alt;
    enlarged.style.maxWidth = "min(92vw, 1200px)";
    enlarged.style.maxHeight = "86vh";
    enlarged.style.objectFit = "contain";
    overlay.appendChild(enlarged);
    overlay.addEventListener("click", () => overlay.close());
    overlay.addEventListener("close", () => overlay.remove(), { once: true });
    document.body.appendChild(overlay);
    if (typeof overlay.showModal === "function") overlay.showModal();
    else window.open(link.href, "_blank", "noopener");
  });
})();
