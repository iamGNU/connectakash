// KeepMeDry "Subscribe" button.
// Phones: open the bot straight in the Telegram app.
// Computers: show a dialog with "Open Telegram" and a QR code to scan.
// Without JavaScript the button is a plain link to t.me, which still works.
(function () {
    const BOT = "KeepMeDryBot";
    const WEB_LINK = "https://t.me/" + BOT;
    const APP_LINK = "tg://resolve?domain=" + BOT;

    const button = document.getElementById("subscribe-keepmedry");
    const dialog = document.getElementById("subscribe-dialog");
    if (!button) return;

    function isPhone() {
        if (navigator.userAgentData && typeof navigator.userAgentData.mobile === "boolean") {
            return navigator.userAgentData.mobile;
        }
        return /Android|iPhone|iPad|iPod|Mobile|Opera Mini|IEMobile/i.test(navigator.userAgent) ||
            // iPadOS reports itself as a Mac, so also check for touch.
            (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    }

    function openInTelegramApp() {
        // Try the app first. If it isn't installed the page stays visible,
        // so fall back to t.me, which offers to install Telegram.
        let leftPage = false;
        const onHide = () => {
            if (document.hidden) leftPage = true;
        };
        document.addEventListener("visibilitychange", onHide);

        window.location.href = APP_LINK;

        setTimeout(() => {
            document.removeEventListener("visibilitychange", onHide);
            if (!leftPage && !document.hidden) {
                window.location.href = WEB_LINK;
            }
        }, 1500);
    }

    button.addEventListener("click", (event) => {
        if (isPhone()) {
            event.preventDefault();
            openInTelegramApp();
        } else if (dialog && typeof dialog.showModal === "function") {
            event.preventDefault();
            dialog.showModal();
        }
        // Otherwise let the link open t.me in a new tab.
    });

    if (!dialog) return;

    // Close with the × button, or by clicking outside the dialog box.
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog || event.target.closest("[data-close]")) {
            dialog.close();
        }
    });

    // Return focus to the Subscribe button when the dialog closes.
    dialog.addEventListener("close", () => button.focus());
})();
