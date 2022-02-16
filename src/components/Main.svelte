<script>
    import {scopeMode, selPage} from "../scripts/stores.js";
    import options from "../scripts/options.js";
    import {settingsGet} from "../scripts/settingsGet.js";

    import Scope from "../components/Scope.svelte";
</script>
<main>
<Scope />
</main>

<style lang="less">
        main {
        position: relative;
        height: 554px;
        overflow-y: scroll;
        box-sizing: border-box;
        width: 100%;
        overflow-x: hidden;
    }
</style>