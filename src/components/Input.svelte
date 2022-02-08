<script>
    import Toggle from './uicomponents/Toggle.svelte';
    import ColorPicker from './uicomponents/ColorPicker.svelte';

    export let itype;
    export let iclass;
    export let iselector;
</script>

<main>
    {#if itype == "toggle"}
    <Toggle tClass={iclass} />
    {:else if itype == "color" || "multicolor"}
    <ColorPicker tClass={iclass} tType={itype} tSelector={iselector}/>
    {:else}
    <div>Not Toggy {iclass}</div>
    {/if}
</main>