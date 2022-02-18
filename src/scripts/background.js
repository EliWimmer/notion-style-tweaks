import browser from 'webextension-polyfill'

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({
    global: {
      theme: '--nst_theme-notion-default',
      sliders: {
        '--nst_tweak-last-props-first': [0],
      },
    },
  })
  chrome.storage.local.set({
    local: {},
  })
  chrome.storage.local.set({
    settings: {
      darkMode: true,
    },
  })
  chrome.storage.local.set({
    meta: {
      activePage: '',
      scopeMode: 'global',
    },
  })
})

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log(tab.url.substring(0, 22), changeInfo.status);
  if (
    // if tab.url starts with 'https://notion.so/' and changeInfo.status === 'complete'
    tab.url.substring(0, 22) == 'https://www.notion.so/' 
  ) {
    console.log("This ran");
    let uuid
    if (tab.url.lastIndexOf('-') != -1) {
      uuid = tab.url.substring(tab.url.lastIndexOf('-') + 1)
    } else {
      uuid = tab.url.substring(tab.url.lastIndexOf('/') + 1).substring(0, 32)
    }
    let activePage = {
      title: tab.title,
      uuid: uuid,
      icon: tab.favIconUrl,
      tabid: tab.id,
    }
    let meta = {}
    chrome.storage.local.get('meta', (data) => {
      Object.assign(meta, data.meta)
      meta.activePage = activePage
      chrome.storage.local.set({ meta })
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['build/update.js'],
      })
    })
    let local = {}
    chrome.storage.local.get('local', (data) => {
      Object.assign(local, data.local)
      if (local[uuid] == undefined) {
        local[uuid] = {
          sliders: { '--nst_tweak-last-props-first': [0] },
          theme: '--nst_theme-notion-default',
        }
      }
      chrome.storage.local.set({ local })
    })
  }
})
