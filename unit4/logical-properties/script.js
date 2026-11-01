const directionButtons = document.querySelectorAll("[data-direction]");

directionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // I change the document direction so the logical properties can be tested live.
        const direction = button.dataset.direction;

        document.documentElement.dir = direction;

        directionButtons.forEach((currentButton) => {
            currentButton.setAttribute(
                "aria-pressed",
                String(currentButton === button),
            );
        });
    });
});
