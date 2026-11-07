// Dark mode toggle.
// With no saved choice the site follows the system setting (handled in CSS).
// Clicking the toggle saves "light" or "dark" and overrides the system.
(function () {
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

    function currentTheme() {
        return root.dataset.theme || (systemDark.matches ? "dark" : "light");
    }

    function updateButton() {
        const dark = currentTheme() === "dark";
        toggle.setAttribute("aria-pressed", String(dark));
        toggle.title = dark ? "Switch to light mode" : "Switch to dark mode";
    }

    toggle.addEventListener("click", () => {
        const next = currentTheme() === "dark" ? "light" : "dark";
        root.dataset.theme = next;
        try {
            localStorage.setItem("theme", next);
        } catch (e) {
            // Storage blocked: the choice lasts until the page is closed.
        }
        updateButton();
    });

    // Keep the button label right if the system setting changes.
    systemDark.addEventListener("change", updateButton);
    updateButton();
})();
