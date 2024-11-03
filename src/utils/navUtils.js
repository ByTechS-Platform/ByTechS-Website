// navUtils.js

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
