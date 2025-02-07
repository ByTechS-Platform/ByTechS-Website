// progressUtils.js
export const animateProgressBar = (progressBarRef, progressNumberRef) => {
  let progress = 0;

  // Check if refs are defined before starting the interval
  if (!progressBarRef.current || !progressNumberRef.current) {
    console.error("Progress bar or progress number reference is null.");
    return;
  }

  // eslint-disable-next-line no-unused-vars
  const interval = setInterval(() => {
    if (progress >= 100) {
      progress = 0; // Reset progress without clearing the interval
    } else {
      progress++;
      progressBarRef.current.style.width = `${progress}%`;
      progressNumberRef.current.textContent = `${progress}%`;
    }
  }, 100);
};
