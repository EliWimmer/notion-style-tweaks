import browser from "webextension-polyfill";

(async () => {
    // let meta = await browser.storage.sync.get("meta");
    // let uuid;
    // let tab = await browser.tabs.onUpdated(async (tabId, changeInfo, tab) => {
    //     console.log(tab);
    // });
    // if (tab[0].url.lastIndexOf("-") != -1) {
    //     uuid = tab[0].url.substring(tab[0].url.lastIndexOf("-") + 1);
    // } else {
    //     uuid = tab[0].url
    //         .substring(tab[0].url.lastIndexOf("/") + 1)
    //         .substring(0, 32);
    // }
    // activePage = {
    //     title: tab[0].title,
    //     uuid: uuid,
    //     icon: tab[0].favIconUrl,
    //     tabid: tab[0].id,
    // };
    // meta.activePage = activePage;
    // await browser.storage.sync.set({meta: meta});
    // console.log(await browser.storage.sync.get("meta"));
})();
