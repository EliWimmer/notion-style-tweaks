<script>
import browser from "webextension-polyfill"
export let tClass;
let tActive = false;
(async () => {
    let settings = await browser.storage.sync.get(tClass)
    if(settings[tClass].value) {
        tActive = true;
        }
    
})();

async function update(tClass, tActive) {
    if (tActive) {
        document.body.classList.add(tClass);
    } else {
        document.body.classList.remove(tClass);
    }
}

async function toggleClick() {
    tActive ? (tActive = false) : (tActive = true);
    await browser.storage.sync.set({[tClass]: {
        "value": tActive,
        "type": "toggle",
    }});
    let tabId = await browser.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.scripting.executeScript({
        target: {
            tabId: tabId[0].id
        },
        function: update,
        args: [tClass, tActive],
    });
}
</script>

{#if tClass == "--coming-soon"}
<div>Coming Soon</div>
{:else}
<div class="toggle-checkbox-container" on:click={(e => toggleClick())} >
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
    background: linear-gradient(180deg, #2f3437 0%, #2d3134 100%);
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
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.05) inset;
    transition: 200ms ease-in-out;
}

.toggle-checkbox-container:hover .toggle-checkbox-slider {
    filter: brightness(1.2);
}

.toggle-label.active {
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    color: var(--text-light);
    transform: translateY(-1px);
}

.toggle-checkbox-slider.active {
    filter: brightness(1.2);
    transform: translateX(22px) scale(120%);
    box-shadow: 0px 0px 0px 1px var(--accent-color) inset,
        0px -8px 10px -8px var(--accent-color) inset;
}
</style>
