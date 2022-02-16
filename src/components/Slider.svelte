<script>
    import RangeSlider from "svelte-range-slider-pips";

    export let sClass;
    export let sSelector;
    export let sType;
    export let sMin;
    export let sMax;
    let activePage;
    let scopeMode;
    let uuid;
    let tabId;
    let meta = {};
    let valueOutput = [0];

    chrome.storage.onChanged.addListener((changes, namespace) => {
        for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
            if (key == "meta") {
                Object.assign(meta, newValue);
                scopeMode = meta.scopeMode;
                activePage = meta.activePage;
                uuid = activePage.uuid;
                tabId = activePage.tabid;
            }
        }
    });

    chrome.storage.local.get("meta", (data) => {
        Object.assign(meta, data.meta);
        activePage = meta.activePage;
        scopeMode = meta.scopeMode;
        uuid = activePage.uuid;
        tabId = activePage.tabid;
    });

    $: {
        if (tabId) {
            scriptRun(tabId);
            valueOutput;
        }
    }

    function scriptRun(tab) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab,
            },
            function: changeThis,
            args: [valueOutput],
        });
    }

    function changeThis(valueOutput) {
        console.log(valueOutput);
        let sidebarItem = document.querySelectorAll(
            ".notion-sidebar a [style^='display: flex; align-items: center;'] > [style*='flex: 1 1 auto;']"
        );
        sidebarItem.forEach((item) => {
            item.style.setProperty("min-height", valueOutput[0] + "px");
        });
    }
</script>

<main>
    <RangeSlider
        bind:values={valueOutput}
        type="range"
        id="input"
        min={sMin}
        max={sMax}
        springValues="stiffness: 0.1, damping: 0.2"
        float
    />
</main>

<style>
    main {
        width: 128px;
        margin: 0 auto;
    }
</style>
