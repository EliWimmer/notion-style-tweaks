<script>
    import Header from "./components/header.svelte";
    import Sidemenu from "./components/sidemenu.svelte";
    import Main from "./components/main.svelte";
</script>

<Header content={"Notion Style Tweaks"} version={"v0.4.2 beta"} />
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
