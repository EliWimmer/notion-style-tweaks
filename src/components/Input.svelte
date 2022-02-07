<script>
    import Toggle from './uicomponents/Toggle.svelte';

    export let itype;
    export let iclass;
</script>

<main>
    {#if itype == "toggle"}
    <Toggle tClass={iclass} />
    {:else}
    <div>Not Toggy {iclass}</div>
    {/if}
</main>