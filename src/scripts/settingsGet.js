export async function settingsGet() {
  let meta = await chrome.storage.local.get().then(data => {
    if (data) {
        return data;
    } else {
        return {error: "not found"};
  }
});


  return meta
}

