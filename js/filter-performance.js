(() => {
  const range = document.querySelector("#blur-range");
  const value = document.querySelector("#blur-value");
  const lab = document.querySelector(".performance-lab");
  const motionToggle = document.querySelector("#motion-toggle");

  if (!range || !value || !lab || !motionToggle) return;

  const updateBlur = () => {
    const blur = `${range.value}px`;
    lab.style.setProperty("--demo-blur", blur);
    value.textContent = blur;
  };

  range.addEventListener("input", updateBlur);
  motionToggle.addEventListener("change", () => {
    lab.classList.toggle("is-animating", motionToggle.checked);
  });
  updateBlur();
})();
