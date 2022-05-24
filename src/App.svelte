<script>
    import Header from "./components/header.svelte";
    import Sidemenu from "./components/sidemenu.svelte";
    import Main from "./components/main.svelte";

    export let name;
</script>

    <Header content={"Notion Style Tweaks"} version={"v0.7.0 beta"} />
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
