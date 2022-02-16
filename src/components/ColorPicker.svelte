<script>
    import browser from "webextension-polyfill";
    import { HsvPicker } from "svelte-color-picker";
    import { fade } from "svelte/transition";
    import { clickOutside } from "../scripts/interface/click_outside.js";
    import { colorPickerActive } from "../scripts/stores.js";
    export let tClass;
    export let tSelector;
    export let tType;
    let showPicker = false;
    let defaultColor = `rgb(${tSelector[0]});`;
    let currentColor = `rgb(${tSelector[0]});`;

    async function update(color, selector) {
        // colorFormatted = `${color} !important`;
        // elements = document.querySelectorAll(selector);
        // document.querySelectorAll("[style*='background: rgb(46, 68, 58);'] > div").forEach(e => {
        //     e.style.setProperty("background", color, "important");
        // });
    }

    let currentColorHex = (currentColor) => {
        let hex = currentColor
            .replace(/^(rgb|rgba)\(/, "")
            .replace(/\)$/, "")
            .replace(/\s/g, "")
            .split(",");
        hex = hex.map((x) => parseInt(x).toString(16)).join("");
        if (hex.length < 6) hex = "0" + hex;
        return "#" + hex;
    };

    async function colorChange(e) {
        if (e.detail.r) {
            currentColor = `rgb(${e.detail.r},${e.detail.g},${e.detail.b})`;
            currentColorHex(currentColor);
        } else if (e.target.classList[0] == "color-picker-reset") {
            currentColor = defaultColor;
            currentColorHex(currentColor);
        } else {
            console.log(e);
        }
        document
            .getElementById(`color-picker-${tClass}`)
            .style.setProperty("background", currentColor, "important");
        console.log("color-changed to: ", currentColor);
    }

    function pickerClick(e, origin) {
        if ((origin = "click" && $colorPickerActive)) {
            showPicker = false;
            setTimeout(() => {
                colorPickerActive.set(false);
            }, 520);
        } else if ((origin = "click" && !showPicker && !$colorPickerActive)) {
            showPicker = true;
            colorPickerActive.set(true);
        } else {
            showPicker = false;
            setTimeout(() => {
                colorPickerActive.set(false);
            }, 520);
        }
        console.log(origin);
    }
</script>

{#if showPicker}
    <div
        class="color-picker-container"
        use:clickOutside
        on:outclick={(e) => pickerClick(e, "outclick")}
        transition:fade={{ duration: 300 }}
    >
        <HsvPicker
            on:colorChange={(e) => colorChange(e)}
            startColor={currentColorHex(currentColor)}
        />
    </div>
{/if}
<div class="color-picker-options">
    <div class="color-picker-reset" on:click={(e) => colorChange(e)}>Reset</div>
    <div
        id={`color-picker-${tClass}`}
        class={`color-picker-square ${showPicker ? "float" : ""}`}
        style={`background: ${currentColor};`}
        on:click={(e) => pickerClick(e, "click")}
    />
</div>

<style>
    .color-picker-square {
        height: 24px;
        width: 24px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.2);
        position: relative;
        cursor: pointer;
        transition: 200ms ease-in;
        margin: 0px 8px 3px 0px;
        transition: 300ms ease-in-out;
    }

    .float {
        z-index: 1000;
        height: 48px;
        width: 48px;
        margin-top: -12px;
        margin-bottom: -12px;
        pointer-events: none;
    }

    .color-picker-square:hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0px 6px 6px 1px rgba(0, 0, 0, 0.2);
        filter: brightness(1.05);
    }

    .color-picker-container {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        height: 600px;
        width: 800px;
        background: rgba(0, 0, 0, 0.2);
        top: 0px;
        left: 0px;
        pointer-events: none;
        backdrop-filter: blur(1px);
    }
    .color-picker-reset {
        background: var(--bg-darken);
        cursor: pointer;
        padding: 2px 4px;
        border-radius: 4px;
        color: var(--text-dark-alt);
        transition: 200ms ease-in;
    }

    .color-picker-reset:hover {
        background: var(--bg-darken-more);
        color: var(--text-light);
    }

    .color-picker-options {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        column-gap: 10px;
        position: relative;
    }
</style>
