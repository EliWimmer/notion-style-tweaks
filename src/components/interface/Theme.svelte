<script>
import { settingsGet } from '../../scripts/settingsGet.js';
export let theme;


(async () => {
    let meta = await metaGet();
    if (meta) {
    }
})();


</script>

<main>
    <h3>
        {theme.name}
    </h3>
</main>

<style>
    main {
        background: var(--bg-secondary);
        border-radius: 10px;
        justify-self: stretch;
        height: 300px;
        box-sizing: border-box;
    }

    h3 {
        padding-left: 20px;
    }
</style>
