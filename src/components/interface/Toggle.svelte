<script>
import {
    loading
} from '../../scripts/stores.js';
import {
    singleToggleUpdate
} from "../../scripts/update.js"
export let tClass;
let tActive;
let meta = {};
let global = {};
let local = {};
let activePage;
let scopeMode;
let uuid;
let tab;

chrome.storage.local.get("meta", (data) => {
    Object.assign(meta, data.meta);
    activePage = meta.activePage;
    scopeMode = meta.scopeMode;
    uuid = activePage.uuid;
    tab = activePage.tabid;
});

$: if (scopeMode == "global") {
    chrome.storage.local.get("global", (data) => {
        Object.assign(global, data.global);
        tActive = global[tClass];
        console.log("Scope changed to global");
    });
} else if (scopeMode == "local") {
    chrome.storage.local.get("local", (data) => {
        Object.assign(local, data.local);
        tActive = local[uuid][tClass];
        console.log("Scope changed to local");
    });
} else {
    console.log("Scope mode is neither global nor local");
}

function toggleClick() {
    tActive ? (tActive = false) : (tActive = true);
    if (scopeMode === "global") {
        global[tClass] = tActive;
        chrome.storage.local.set({
            global
        });
    } else if (scopeMode == "local") {
        local[uuid][tClass] = tActive;
        chrome.storage.local.set({
            local
        });
        console.log("local" + Object.entries(local));
    } else {
        console.log("Scope mode is neither global nor local");
    }

}

function realtimeToggle(tClass, tActive) {
    if (tActive) {
        document.body.classList.add(tClass)
    } else {
        document.body.classList.remove(tClass)
    }
}

chrome.storage.onChanged.addListener((changes, namespace) => {
    for (let [key, {
            oldValue,
            newValue
        }] of Object.entries(changes)) {
        if (key == "meta") {
            Object.assign(meta, newValue);
            scopeMode = meta.scopeMode;
            activePage = meta.activePage;
            uuid = activePage.uuid;
            tab = activePage.tabid;
        }
        if (key == "local" || "global") {
            if (scopeMode == "global") {
                chrome.storage.local.get("global", (data) => {
                    Object.assign(global, data.global);
                    tActive = global[tClass];
                    console.log("Scope changed to global");
                });
            } else if (scopeMode == "local") {
                chrome.storage.local.get("local", (data) => {
                    Object.assign(local, data.local);
                    tActive = local[uuid][tClass];
                    console.log("Scope changed to local");
                });
            } else {
                console.log("Scope mode is neither global nor local");
            }
        }
    }
});
</script>

{#if tClass == "--coming-soon"}
<div>Coming Soon</div>
{:else}
<div class="toggle-checkbox-container" on:click={(e) => toggleClick()}>
    <div
        class={`toggle-checkbox-slider ${tActive === true ? "active" : ""}`}
        />
    </div>
    {/if}

<style>
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
</style>
