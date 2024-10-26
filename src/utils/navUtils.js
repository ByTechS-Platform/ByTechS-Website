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
      button.style.color = button.classList.contains("active")
        ? "#5552E1"
        : "black";
    } else {
      button.style.color = ""; // Reset to default
    }
  });
};
