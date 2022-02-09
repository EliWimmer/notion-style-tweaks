import browser from "webextension-polyfill";

(async () => {
    console.log(await browser.storage.sync.get(null));
    let settings = await browser.storage.sync.get(null);
    let globalSettings = Object.entries(settings.global);
    for (let i = 0; i < globalSettings.length; i++) {
        if (globalSettings[i][1] == true) {
        document.body.classList.add(globalSettings[i][0]);
        } else {
        document.body.classList.remove(globalSettings[i][0]);
        }
    }
})();
