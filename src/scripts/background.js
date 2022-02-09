chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({
        global: {},
    });
    chrome.storage.sync.set({
        page: {},
    });
    chrome.storage.sync.set({
        settings: {},
    });
});