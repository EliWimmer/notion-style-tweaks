import browser from "webextension-polyfill";

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.local.set({
        global: {},
    });
    chrome.storage.local.set({
        local: {},
    });
    chrome.storage.local.set({
        settings: {
            darkMode: true,
        },
    });
    chrome.storage.local.set({
        meta: {
            activePage: "",
            scopeMode: "global",
        },
    });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log(tab);
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
    let meta = {}
    chrome.storage.local.get("meta", (data) => {
        Object.assign(meta, data.meta)
        meta.activePage = activePage;
        chrome.storage.local.set({meta});
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ["build/update.js"],
        });
    });
    let local = {}
    chrome.storage.local.get("local", (data) => {
        Object.assign(local, data.local)
        if (local[uuid] == undefined) {
            local[uuid] = {};
        }
        chrome.storage.local.set({local});
    });

    
    console.log("tab updated");

});

