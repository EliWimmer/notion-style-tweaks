<script>
    import Toggle from './interface/Toggle.svelte';
    import ColorPicker from './interface/ColorPicker.svelte';
    import Slider from './interface/Slider.svelte';

    export let itype;
    export let iclass;
    export let iselector;

    console.log(itype);
</script>

<main>
    {#if itype === "toggle"}
    <Toggle tClass={iclass} />
    {:else if itype.type == "slider"}
    <Slider sClass={iclass} sType={itype} sSelector={iselector} sMin={itype.min} sMax={itype.max} />
    {:else if itype === "color" || "multicolor"}
    <ColorPicker tClass={iclass} tType={itype} tSelector={iselector}/>
    {:else}
    <div>Not Toggy {iclass}</div>
    {/if}
</main>