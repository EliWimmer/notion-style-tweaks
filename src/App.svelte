<script>
    import Header from "./components/header.svelte";
    import Sidemenu from "./components/sidemenu.svelte";
    import Main from "./components/main.svelte";
</script>

<Header content={"Notion Style Tweaks"} version={"v0.6.8 beta"} />
<app>
    <Sidemenu />
        <Main />
</app>

<style>
    app {
        display: flex;
        flex-direction: row;
    }
</style>
