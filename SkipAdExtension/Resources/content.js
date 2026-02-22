console.log("Auto Skip Ad Safari: Estensione caricata.");

function skipAds() {
    // Selettori comuni per pulsanti skip (YouTube, ecc.)
    const selectors = [
        ".ytp-ad-skip-button",
        ".ytp-ad-skip-button-modern",
        ".ytp-ad-skip-button-text",
        ".videoAdUiSkipButton",
        ".ytp-skip-ad-button",
        ".ytp-ad-skip-button-container"
    ];

    let clicked = false;

    selectors.forEach(selector => {
        const button = document.querySelector(selector);
        if (button && isVisible(button)) {
            console.log("Auto Skip Ad: Pulsante trovato con selettore: " + selector);
            button.click();
            clicked = true;
        }
    });

    // Se non trovato tramite selettori, cerchiamo per testo (Italiano e Inglese)
    if (!clicked) {
        const buttons = document.querySelectorAll('button, div[role="button"], span');
        const skipTerms = ["Skip Ad", "Salta annuncio", "Salta ad", "Skip", "Salta"];

        for (const btn of buttons) {
            const text = btn.innerText || btn.textContent;
            if (skipTerms.some(term => text.includes(term)) && isVisible(btn)) {
                // Verifichiamo che non sia un elemento troppo grande (evitiamo falsi positivi)
                const rect = btn.getBoundingClientRect();
                if (rect.width > 0 && rect.width < 300) {
                    console.log("Auto Skip Ad: Pulsante trovato tramite testo: " + text);
                    btn.click();
                    break;
                }
            }
        }
    }
}

function isVisible(el) {
    if (!el) return false;
    const style = window.getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
}

// Controllo ogni 5 secondi come richiesto
setInterval(skipAds, 5000);
