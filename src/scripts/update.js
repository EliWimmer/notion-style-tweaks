import browser from "webextension-polyfill";

(async () => {
    const userSettings = Object.entries(await browser.storage.sync.get(null));

    for (let i = 0; i < userSettings.length; i++) {
        if (userSettings[i][1]) {
            document.body.classList.add(userSettings[i][0]);
            console.log(userSettings[i][1]);
        } else {
            document.body.classList.remove(userSettings[i][0]);
            console.log(userSettings[i][1]);
        }
    }
})();
