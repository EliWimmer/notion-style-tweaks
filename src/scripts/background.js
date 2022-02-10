import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(function () {
    browser.storage.sync.set({
        global: {},
    });
    browser.storage.sync.set({
        local: {},
    });
    browser.storage.sync.set({
        settings: {
            darkMode: true,
        },
    });
    browser.storage.sync.set({
        meta: {
            activePage: "",
            scopeMode: "global",
        },
    });
});

browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    getActivePage(tab);
});

browser.action.onClicked.addListener(function (tab) {
    getActivePage(tab);
});

async function getActivePage(tab) {
    let uuid;
    if (tab.url.lastIndexOf("-") != -1) {
        uuid = tab.url.substring(tab.url.lastIndexOf("-") + 1);
    } else {
        uuid = tab.url.substring(tab.url.lastIndexOf("/") + 1).substring(0, 32);
    }
    let activePage = {
        title: tab.title,
        uuid: uuid,
        icon: tab.favIconUrl,
        tabid: tab.id,
    };
    let options = await browser.storage.sync.get(null);
    options.meta.activePage = activePage;
    await browser.storage.sync.set(options);
}
