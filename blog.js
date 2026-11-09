// Blog "Subscribe" button and subscriber count.
//
// Sign-ups are handled by Kit (kit.com). Their hosted form opens in a new tab
// and Kit emails the reader to confirm their subscription.
//
// SETUP: paste the URL of your Kit form's landing page below
// (Kit -> Grow -> Landing Pages & Forms -> your form -> Share -> copy link).
// Until it is set, the subscribe box stays hidden so the live site never
// shows a broken button.
const KIT_SUBSCRIBE_URL = "https://akash-anand-2.kit.com/29139025e1";

(function () {
    const boxes = document.querySelectorAll("[data-subscribe]");
    if (!KIT_SUBSCRIBE_URL || !boxes.length) return;

    boxes.forEach((box) => {
        box.querySelectorAll("a.subscribe-button").forEach((link) => {
            link.href = KIT_SUBSCRIBE_URL;
        });
        box.hidden = false;
    });

    // subscribers.json is written by the deploy workflow from Kit's API, so the
    // number refreshes every few hours. If it's missing, the count stays hidden.
    fetch("/subscribers.json", { cache: "no-cache" })
        .then((response) => (response.ok ? response.json() : null))
        .then((data) => {
            const count = data && Number(data.count);
            if (!Number.isFinite(count) || count < 0) return;

            const text = count === 0
                ? "Be the first to subscribe"
                : `Join ${count.toLocaleString()} ${count === 1 ? "subscriber" : "subscribers"}`;

            document.querySelectorAll("[data-subscriber-count]").forEach((el) => {
                el.textContent = text;
                el.hidden = false;
            });
        })
        .catch(() => {
            // No count available: leave it hidden.
        });
})();
