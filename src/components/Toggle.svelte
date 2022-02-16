<script>
    import options from "../scripts/options.js";

    import { settingsGet } from "../scripts/settingsGet.js";
    import { scopeMode } from "../scripts/stores.js";

    let tActive;
    let global;
    let local;
    let globalActive;
    let tabid;
    let uuid;
    export let option;
    function stateUpdate() {
    settingsGet().then((data) => {
        global = data.global;
        local = data.local;
        tabid = data.meta.activePage.tabid;
        uuid = data.meta.activePage.uuid;
        console.log(local, global);

        if ($scopeMode == "global" && data.global[option.class]) {
            tActive = true;
            console.log("global to true");
        } else if ($scopeMode == "local" && data.local[uuid][option.class]) {
            tActive = true;
            console.log("local to true");
        } else if ($scopeMode == "global" && !data.global[option.class]) {
            tActive = false;
            console.log("global to false");
        } else if ($scopeMode == "local" && !data.local[uuid][option.class]) {
            tActive = false;
            console.log("local to false");
        } else {
            console.log("somethings is wrong");
        }

        if(data.global[option.class]) {
            globalActive = true;
        } else {
            globalActive = false;
        }
    });
}
$: stateUpdate($scopeMode, global, local);

    function toggleClick() {
        tActive == true ? (tActive = false) : (tActive = true);
        if (tActive) {
            if ($scopeMode == "global") {
                global[option.class] = true;
                chrome.storage.local.set({ global }).then(() => {
                    stateUpdate();
                });
            } else if ($scopeMode == "local") {
                local[uuid][option.class] = true;
                chrome.storage.local.set({ local }).then(() => {
                    stateUpdate();
                });
            }
        } else {
            if ($scopeMode == "global") {
                global[option.class] = false;
                chrome.storage.local.set({ global }).then(() => {
                    stateUpdate();
                });
            } else if ($scopeMode == "local") {
                local[uuid][option.class] = false;
                chrome.storage.local.set({ local }).then(() => {
                    stateUpdate();
                });
            }
        }
        chrome.scripting.executeScript({
            target: {
                tabId: tabid,
            },
            function: realtimeToggle,
            args: [option.class, tActive],
        });
    }

    function realtimeToggle(tClass, tActive) {
        if (tActive == true) {
            document.body.classList.add(tClass);
        } else if (tActive == false) {
            document.body.classList.remove(tClass);
        }
    }
</script>

{#if option.class == "--coming-soon"}
    <div>Coming Soon</div>
{:else}
    <div class={`option-item-container global-${globalActive && $scopeMode == "local" ? "true" : "false"}`} on:click={(e) => toggleClick()}>
        <div class="option-item-label-container">
            <div class="option-item-label">{option.label}</div>
            <div class="option-item-sublabel">{option.sublabel}</div>
        </div>
        <div class="toggle-checkbox-container">
            <div
                class={`toggle-checkbox-slider ${
                    tActive === true ? "active" : ""
                }`}
            />
        </div>
    </div>
{/if}

<style lang="less">
    .toggle-checkbox-container {
        position: relative;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-end;
        width: 42px;
        height: 20px;
        background: var(--toggle-bg);
        border-radius: 20px;
        cursor: pointer;
        box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1) inset;
        transition: 200ms;
    }

    .toggle-checkbox-slider {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 14px;
        height: 14px;
        background: var(--bg-secondary);
        border-radius: 20px;
        transition: all 0.4s;
        pointer-events: none;
        transition: 200ms ease-in-out;
    }

    .toggle-checkbox-container:hover .toggle-checkbox-slider {
        filter: brightness(1.2);
    }

    .toggle-label.active {
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
        color: var(--bg-secondary);
        transform: translateY(-1px);
    }

    .toggle-checkbox-slider.active {
        filter: brightness(1.2);
        transform: translateX(22px) scale(120%);
        box-shadow: 0px -8px 10px -8px var(--accent-color) inset;
    }
    .option-item-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        min-height: 76px;
        padding: 10px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background: var(--bg-tint-light);
        }
        &.global-true {
            pointer-events: none;
            position: relative;
            background: rgba(0,0,0,.15);
            .option-item-label,
            .option-item-sublabel {
                color: var(--text-dark) !important;
            }
            .toggle-checkbox-slider {
                filter: brightness(.9);
                transform: translateX(22px) scale(120%);
                box-shadow: 0px -8px 10px -8px var(--accent-color) inset;
            }
            &::after {
                content: "Already applied globally to all pages";
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: calc(50% - 21px);
                left: calc(50% - 123px);
                height: 42px;
                width: 246px;
                border-radius: 6px;
                background: var(--accent-color-bg);
                border: 1px solid var(--accent-color-alt);
                backdrop-filter: blur(4px);
                cursor: default;

            }
        }
    }

    .option-item-label-container {
        display: flex;
        flex-direction: column;
        max-width: 240px;
        box-sizing: border-box;
    }

    .coming-soon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        text-shadow: var(--text-shadow-top);
        color: var(--text-dark-alt);
        padding: 10px 0px;
        width: 100%;
    }

    .option-item-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--text-light);
        transition: 300ms;
        margin-right: auto;
        display: flex;
        align-items: center;
        text-shadow: var(--text-shadow-bottom);
    }

    .option-item-sublabel {
        font-size: 12px;
        color: var(--text-dark-alt);
        margin-top: 5px;
        max-width: 280px;
    }

    .info {
        background: var(--accent-color-bg);
        border: 1px solid var(--accent-color-alt);
        border-radius: 6px;
    }
    .info h2 {
        background: var(--bg-darken);
        color: var(--accent-color-alt);
    }
    .info p {
        color: var(--text-light);
        padding-left: 10px;
    }
</style>
