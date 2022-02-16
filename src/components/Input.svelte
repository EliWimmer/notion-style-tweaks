<script>
    import Toggle from "./Toggle.svelte";
    import ColorPicker from "./ColorPicker.svelte";
    import Slider from "./Slider.svelte";
    import Theme from "./Theme.svelte";

    export let itype;
    export let iclass;
    export let iselector;
    export let scopeMode;

</script>

<main>
    {#if itype === "toggle"}
        <Toggle tClass={iclass} scopeMode={scopeMode}/>
    {:else if itype.type == "slider"}
        <Slider
            sClass={iclass}
            sType={itype}
            sSelector={iselector}
            sMin={itype.min}
            sMax={itype.max}
        />
    {:else if itype == "theme"}
        <Theme />
    {:else if itype === "color" || "multicolor"}
        <ColorPicker tClass={iclass} tType={itype} tSelector={iselector} />
    {:else}
        <div>Not Toggy {iclass}</div>
    {/if}
</main>
