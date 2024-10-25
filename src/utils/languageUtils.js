// languageUtils.js
export function switchLanguage(lang) {
  // Switch language for elements with data attributes
  document.querySelectorAll("[data-en]").forEach((element) => {
    element.textContent =
      lang === "en"
        ? element.getAttribute("data-en")
        : element.getAttribute("data-ar");
  });
}
