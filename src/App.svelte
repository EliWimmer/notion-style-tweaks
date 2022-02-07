<script>
    import Header from "./components/header.svelte";
    import Sidemenu from "./components/sidemenu.svelte";
    import MainBody from "./components/MainBody.svelte";
</script>

<Header content={"Notion Style Tweaks"} version={"v0.2.0 beta"}/>
<app>
<Sidemenu />
<main>
<MainBody />
</main>
</app>

<style>
    app {
        display: flex;
        flex-direction: row;
    }
    main {
        height: 554px;
        overflow-y: scroll;
        box-sizing: border-box;
        width: 100%;
    }
</style>