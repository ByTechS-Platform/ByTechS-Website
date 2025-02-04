export const animateProgressBar = (progressBarRef, progressNumberRef) => {
  if (!progressBarRef.current || !progressNumberRef.current) return; // Prevent errors
  let progress = 0;
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
    } else {
      progress += 1;
      progressBarRef.current.style.width = `${progress}%`;
      progressNumberRef.current.textContent = `${progress}%`;
    }
  }, 50);
};
