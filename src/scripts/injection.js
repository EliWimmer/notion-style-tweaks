import browser from "webextension-polyfill";

(async () => {

    console.log(await browser.storage.sync.get(null));

})();
