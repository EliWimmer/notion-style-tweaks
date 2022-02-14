chrome.storage.local.get("meta", (data) => {
    let activePage = data.meta.activePage;
    let uuid = activePage.uuid;
    let global = {};
    let local = {};
    let LocalArrayActive = [];
    let globalArrayActive = [];
    let activeTheme = "theme";



    chrome.storage.local.get(null, (data) => {
        Object.assign(local, data.local);
        local = local[uuid];
        Object.assign(global, data.global);
        Object.keys(local).forEach((key) => {
            if (local[key] == true) {
                LocalArrayActive.push(key);
            }
        });
        Object.keys(global).forEach((key) => {
            if (global[key] == true) {
                globalArrayActive.push(key);
            }
        });
        let combinedArrayActive = LocalArrayActive.concat(globalArrayActive);
        let uniqueArrayActive = combinedArrayActive.filter((item, pos) => {
            return combinedArrayActive.indexOf(item) == pos;
        });
        let classes = document.body.className.split(" ");
        let removeClasses = classes.filter((item) => {
            return item != "notion-body" && item != "dark" && item != "light" && item != "dark-mode" && item != "light-mode";
        });
        removeClasses = removeClasses.filter((item) => {
            return uniqueArrayActive.indexOf(item) == -1;
        });
        removeClasses.forEach((item) => {
            document.body.classList.remove(item);
        });
        uniqueArrayActive.forEach((item) => {
            document.body.classList.add(item);
        });
    });
});