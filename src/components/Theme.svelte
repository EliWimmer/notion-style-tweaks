<script>

    import { settingsGet } from "../scripts/settingsGet.js";
    import { scopeMode, activeTheme } from "../scripts/stores.js";

    export let option;
    let tActive;
    let global;
    let local;
    let changeTheme;
    let tabid;
    let uuid;
    function stateUpdate() {
    settingsGet().then((data) => {
        global = data.global;
        local = data.local;
        tabid = data.meta.activePage.tabid;
        uuid = data.meta.activePage.uuid;

        if ($scopeMode == "global" && data.global.theme == `${option.class}`) {
            tActive = true;
        } else if ($scopeMode == "local" && data.local[uuid].theme == `${option.class}`) {
            tActive = true;
        } else {
            tActive = false;
        }
        chrome.scripting.executeScript({
            target: {
                tabId: tabid,
            },
            function: realtimeToggle,
            args: [option.class, tActive],
        });
    });
}
$: stateUpdate($activeTheme);

   async function toggleClick() {
            if ($scopeMode == "global") {
                await chrome.storage.local.get({ global }).then((data) => {
                    Object.assign(global, data.global);
                    global.theme = `${option.class}`;
                    chrome.storage.local.set({ global }).then(() => {
                        activeTheme.set(`${option.class}`);
                    });
                });
            } else if ($scopeMode == "local") {
                await chrome.storage.local.get({ local }).then((data) => {
                    Object.assign(local, data.local);
                    local[uuid].theme = `${option.class}`;
                    chrome.storage.local.set({ local }).then(() => {
                        activeTheme.set(`${option.class}`);
                    });
                });
            }
    }

    function realtimeToggle(tClass, tActive) {
        if (tActive == true) {
            document.body.classList.add(tClass);
        } else if (tActive == false) {
            document.body.classList.remove(tClass);
        }
    }
</script>

<main>
        <div class={`theme-container ${tActive ? "active" : ""}`} on:click={(e) => toggleClick()}>
            <div class="theme-label-container">
                <h3 class="theme-label">
                    {option.label}
                </h3>
                <div class="theme-sublabel">
                    {option.sublabel}
                </div>
            </div>
            <img class="theme-image" src="{option.image}" alt={option.label}>
        </div>
</main>

<style lang="less">
    .theme-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100px;
        margin: 10px 10px;
        background: var(--bg-secondary-solid);
        border-radius: 6px;
        box-shadow: 0px 0px 0px 1px var(--text-dark) inset;
        cursor: pointer;
        &:hover {
            filter: brightness(1.1);
        }
        &.active {
                box-shadow: 0px 0px 0px 1px var(--accent-color) inset;
            }
    }
    .theme-label-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
        padding: 0px 20px 0px 20px;
        height: 100%;
    }
    .theme-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--text-light);
        transition: 300ms;
        margin: 0px auto 0px 0px;
        display: flex;
        align-items: center;
        text-shadow: var(--text-shadow-bottom);
    }

    .theme-sublabel {
        font-size: 12px;
        color: var(--text-dark-alt);
        margin-top: 5px;
        max-width: 280px;
    }
    .theme-image {
        height: calc(100% - 2px);
        border-radius: 4px;
        margin: 1px;
    }
</style>
