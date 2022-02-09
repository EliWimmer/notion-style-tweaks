<script>
    import Header from "./components/header.svelte";
    import Sidemenu from "./components/sidemenu.svelte";
    import MainBody from "./components/MainBody.svelte";
    import Scope from "./components/Scope.svelte";
</script>

<Header content={"Notion Style Tweaks"} version={"v0.3.0 beta"}/>
<app>
<Sidemenu />
<main>
    <Scope />
<MainBody />
</main>
</app>

<style>
    app {
        display: flex;
        flex-direction: row;
    }
    main {
        position: relative;
        height: 554px;
        overflow-y: scroll;
        box-sizing: border-box;
        width: 100%;
        overflow-x: hidden;
    }
</style>