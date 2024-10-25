// navUtils.js
export const switchLanguage = (lang) => {
  document.querySelectorAll("[data-en]").forEach((element) => {
    element.textContent =
      lang === "en"
        ? element.getAttribute("data-en")
        : element.getAttribute("data-ar");
  });
};

export const updateLanguageButtonColors = (isLightMode) => {
  const languageButtonsNav = document.querySelectorAll(
    ".language-switch button"
  );
  languageButtonsNav.forEach((button) => {
    if (isLightMode) {
      if (button.classList.contains("active")) {
        button.style.color = "#5552E1";
      } else {
        button.style.color = "black";
      }
    } else {
      button.style.color = ""; // Revert to default
    }
  });
};
