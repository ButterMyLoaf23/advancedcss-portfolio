(() => {
  const allowed = new Set(["light", "system", "dark"]);
  const id = "theme-preference-sync";
  let container = document.getElementById(id);

  if (!container) {
    container = document.createElement("div");
    container.id = id;
    container.hidden = true;
    container.setAttribute("aria-hidden", "true");

    ["light", "system", "dark"].forEach((value) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "theme-preference";
      input.value = value;
      if (value === "system") input.checked = true;
      container.appendChild(input);
    });

    (document.body || document.head).appendChild(container);
  }

  let stored = null;
  try {
    stored = localStorage.getItem("theme-preference");
  } catch {
    stored = null;
  }

  const value = allowed.has(stored) ? stored : "system";
  document.documentElement.dataset.theme = value;
  const input = container.querySelector(`input[value="${value}"]`);
  if (input) input.checked = true;

  document.addEventListener("change", (event) => {
    if (event.target.name !== "theme-preference") return;
    document.documentElement.dataset.theme = event.target.value;
    try {
      localStorage.setItem("theme-preference", event.target.value);
    } catch {
    }
  });
})();
