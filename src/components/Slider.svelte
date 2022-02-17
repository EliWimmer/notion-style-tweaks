<script>
    import RangeSlider from "svelte-range-slider-pips";
    import { settingsGet } from "../scripts/settingsGet.js";
    import { scopeMode, selPage } from "../scripts/stores.js";

    let tActive;
    let global;
    let local;
    let globalActive;
    let tabid;
    let uuid;
    export let option;

    let valueOutput = [0];

        settingsGet().then((data) => {
            tabid = data.meta.activePage.tabid;
            uuid = data.meta.activePage.uuid;
            global = data.global.sliders;
            local = data.local[uuid].sliders;
            console.log(data);
        });

    $: if (valueOutput) {
        scriptRun();
    }
    function scriptRun() {
        settingsGet().then((data) => {
            tabid = data.meta.activePage.tabid;
            chrome.scripting.executeScript({
                target: {
                    tabId: tabid,
                },
                function: changeThis,
                args: [valueOutput, option.class],
            });
        });
    }

    function changeThis(valueOutput, sClass) {
        console.log(valueOutput);
        document.body.classList.remove(`${sClass}`);
        document.body.classList.remove(`lpf-0`);
        document.body.classList.remove(`lpf-1`);
        document.body.classList.remove(`lpf-2`);
        document.body.classList.remove(`lpf-3`);
        document.body.classList.add(`${sClass}`);
        document.body.classList.add(`lpf-${valueOutput}`);
    }
</script>

<div
    class={`option-item-container global-${
        globalActive && $scopeMode == "local" ? "true" : "false"
    }`}
>
    <div class="option-item-label-container">
        <div class="option-item-label">{option.label}</div>
        <div class="option-item-sublabel">{option.sublabel}</div>
    </div>
    <div class="slider-container">
        <RangeSlider
            bind:values={valueOutput}
            id={option.name}
            min={option.sliderOptions.min}
            max={option.sliderOptions.max}
            springValues="stiffness: 0.1, damping: 0.2"
            float
        />
    </div>
</div>

<style lang="less">
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
    .slider-container {
        width: 200px;
    }
</style>
