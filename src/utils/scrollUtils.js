// scrollUtils.js

export const changeActiveSection = (
  sections,
  sideNavLinks,
  setIsLightMode,
  setActiveSection
) => {
  if (!sections || sections.length === 0) return;

  let index = sections.length;

  // Find the current section based on scroll position
  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

  if (index < 0 || !sections[index]) return;

  // Remove active classes from all side nav links
  sideNavLinks.forEach((link) =>
    link.classList.remove("active", "contact-active")
  );

  if (sections[index].id === "contact") {
    sideNavLinks.forEach((link) => link.classList.add("contact-active"));
  } else {
    sideNavLinks[index].classList.add("active");
  }

  const currentSection = sections[index];
  const bgColor = window.getComputedStyle(currentSection).backgroundColor;
  const isWhiteBackground = bgColor === "rgb(255, 255, 255)";

   setIsLightMode(isWhiteBackground);
   setActiveSection(currentSection.id);
};
