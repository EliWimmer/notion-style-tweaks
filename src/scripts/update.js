export function singleToggleUpdate(tClass, acttActive, uuid) {
    
}

export function toggleUpdate() {
    let local = {};
    chrome.storage.local.get("local", (data) => {
        Object.assign(local, data.local);
        console.log(local);
    })

}