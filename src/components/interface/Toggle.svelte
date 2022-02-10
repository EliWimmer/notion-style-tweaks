<script>
    export let tClass;
    let tActive;
    let meta = {};
    let global = {};
    let local = {};
    let activePage;
    let scopeMode;

    $: {
        scopeMode;

        chrome.storage.sync.get("meta", (data) => {
            Object.assign(meta, data.meta);
            activePage = meta.activePage.uuid;
            scopeMode = meta.scopeMode;
        });

        if (scopeMode == "global") {
            chrome.storage.sync.get("global", (data) => {
                Object.assign(global, data.global);
                tActive = global[tClass];
            });
        } else {
            chrome.storage.sync.get("local", (data) => {
                Object.assign(local, data.local);
                tActive = local[activePage][tClass];
            });
        }
    }
    function toggleClick() {
        tActive ? (tActive = false) : (tActive = true);
        if (scopeMode === "global") {
            global[tClass] = tActive;
            chrome.storage.sync.set({ global });
            console.log("global" + global);
        } else {
            local[tClass] = tActive;
            chrome.storage.sync.set({ local });
            console.log("local" + local);
        }
    }
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
