// // languageUtils.js
export function switchLanguage(lang) {
  // Update elements with data attributes
  document.querySelectorAll("[data-en]").forEach((element) => {
    element.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent =
          lang === "en"
            ? element.getAttribute("data-en")
            : element.getAttribute("data-ar");
      }
    });
  });

  // Emit custom event for language change
  const event = new CustomEvent("languageChange", { detail: { lang } });
  window.dispatchEvent(event);
}
