<script>
    import Select from "svelte-select";
    import { settingsGet } from "../scripts/settingsGet.js";
    import { scopeMode, selPage } from "../scripts/stores.js";
    import options from "../scripts/options";

    let global;
    let local;
    let tabid;
    let uuid;
    let chosenFont;
    let previousFont;
    export let option;

    const fontOptions = option.options;
    const groupBy = (fontOptions) => fontOptions.group;
    console.log(option);

    function stateUpdate() {
        settingsGet().then((data) => {
            global = data.global;
            local = data.local;
            tabid = data.meta.activePage.tabid;
            uuid = data.meta.activePage.uuid;

            if ($scopeMode == "global") {
                chosenFont = global.fonts[option.class];
            } else if ($scopeMode == "local") {
                chosenFont = local[uuid].fonts[option.class];
            } else {
                console.log("somethings is wrong with font scoping");
            }

            console.log(global);
        });
    }

    $: stateUpdate($scopeMode, $selPage);

    function handleSelect(e) {
        console.log(e);
        previousFont = chosenFont;
        chosenFont = e.detail.value;

        if ($scopeMode == "global") {
            global.fonts[option.class] = chosenFont;
            chrome.storage.local.get({ global }).then((data) => {
                Object.assign(global, data.global);
                global.fonts[option.class] = chosenFont;
                chrome.storage.local.set({ global });
                stateUpdate();
            });
        } else if ($scopeMode == "local") {
            local[uuid].fonts[option.class] = chosenFont;
            chrome.storage.local.get({ local }).then((data) => {
                Object.assign(local, data.local);
                local[uuid].fonts[option.class] = chosenFont;
                chrome.storage.local.set({ local });
                stateUpdate();
            });
        }
        chrome.scripting.executeScript({
            target: {
                tabId: tabid,
            },
            function: realtimeToggle,
            args: [chosenFont, previousFont],
        });
    }

    function realtimeToggle(cFont, pFont) {
        document.body.classList.remove(pFont);
        document.body.classList.add(cFont);
    }
</script>

<div class="option-item-container">
    <div class="option-item-label-container">
        <div class="option-item-label">{option.label}</div>
        <div class="option-item-sublabel">{option.sublabel}</div>
    </div>
    <div class="select-container">
        <Select
            items={fontOptions}
            showChevron="true"
            placeholder="Choose Font..."
            isClearable={false}
            value={chosenFont}
            isSearchable={false}
            {groupBy}
            on:select={handleSelect}
        />
    </div>
</div>

<style lang="less">
    .select-container {
        position: relative;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-end;
        width: 220px;
        height: 20px;
        cursor: pointer;
        transition: 200ms;
        overflow: visibile;

        --background: var(--bg-tertiary);
        --border-radius: 6px;
        --list-border-radius: 6px;
        --list-background: var(--bg-tertiary);
        --list-shadow: 0px 0px 20px -6px rgba(0, 0, 0, 0.9);
        --list-border: 1px solid var(--border);
        --border-focus-color: var(--accent-color);
        --chevron-color: var(--text-light);
        --chevron-icon-color: var(--text-light);
        --chevron-box-shadow: 1px 0px 0px 0px var(--bg-secondary-solid) inset;
        --clear-icon-width: 10px;
        --group-title-padding: 0px 24px;
        --group-item-padding-left: 24px;
        --group-title-color: var(--text-dark);
        --item-hover-bg: var(--accent-color);
        --item-hover-color: var(--text-light);
        --height: 32px;
        --input-padding: 0px;
        --list-max-height: 200px;
        *::-webkit-scrollbar {
            display: none !important;
        }
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
            background: rgba(0, 0, 0, 0.15);
            .option-item-label,
            .option-item-sublabel {
                color: var(--text-dark) !important;
            }
            .toggle-checkbox-slider {
                filter: brightness(0.9);
                transform: translateX(22px) scale(120%);
                box-shadow: 0px -8px 10px -8px var(--accent-color) inset;
            }
            &::after {
                content: "Already applied globally";
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: calc(50% - 18px);
                left: calc(50% - 98px);
                height: 32px;
                width: 200px;
                border-radius: 6px;
                padding-bottom: 2px;
                background: var(--accent-color-bg);
                border: 1px solid var(--accent-color-alt);
                backdrop-filter: blur(2px);
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
    .coming-soon {
        color: var(--text-dark);
        padding-left: 10px;
        display: flex;
        align-items: center;
        min-height: 42px;
    }
</style>
