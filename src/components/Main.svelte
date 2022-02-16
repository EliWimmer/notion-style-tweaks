<script>
    import { scopeMode, selPage, activePage } from "../scripts/stores.js";
    import options from "../scripts/options.js";
    import { settingsGet } from "../scripts/settingsGet.js";
    import Scope from "../components/Scope.svelte";
    import Toggle from "../components/Toggle.svelte";
    import Slider from "../components/Slider.svelte";
    import ColorPicker from "../components/ColorPicker.svelte";
    import Theme from "../components/Theme.svelte";
    $: console.log($selPage);
</script>

<main>
    <Scope />
    <div class="test">
        {#each Object.keys($selPage[2]) as section}
            <div class="options-container">
                <h2>
                    <img src="{$selPage[2][section].icon}" alt={section}>
                    {section}
                </h2>
                    {#each $selPage[2][section].options as option}
                        {#if option.type === "toggle"}
                            <Toggle
                                option={option}
                                
                            />
                        {/if}
                        {#if option.type === "slider"}
                            <Slider
                            option={option}
                            scopeMode={scopeMode}
                            activePage={activePage}
                            />
                        {/if}
                        {#if option.type === "multicolor"}
                            <ColorPicker
                            option={option}
                            scopeMode={scopeMode}
                            />
                        {/if}
                        {#if option.type === "theme"}
                            <Theme
                            option={option}
                            scopeMode={scopeMode}
                            activePage={activePage}
                            />
                        {/if}
                    {/each}
            </div>
        {/each}
    </div>
</main>

<style lang="less">
    main {
        position: relative;
        height: 554px;
        box-sizing: border-box;
        width: 100%;
        overflow-x: hidden;
    }
    .test {
        height: 900px;
    }
    .options-container {
        display: flex;
        flex-direction: column;
        width: calc(100% - 40px);
        background: var(--bg-secondary);
        border-radius: 6px;
        box-shadow: 0px 0px 0px 1px var(--border) inset,
            0px 8px 16px -8px rgba(0, 0, 0, 0.2);
        transition: 300ms;
        box-sizing: border-box;
        margin: 10px 20px;

        &:hover {
            box-shadow: 0px 0px 0px 1px var(--border) inset,
                0px 8px 16px -4px rgba(0, 0, 0, 0.3);
        }

        h2:first-child {
            border-top-right-radius: 6px;
            border-top-left-radius: 6px;
        }
    }

    h2 {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        color: var(--text-light);
        margin-top: 0px;
        margin-bottom: 0px;
        padding-left: 10px;
        line-height: 100px;
        height: 36px;
        width: 100%;
        background: var(--bg-darken);
        box-sizing: border-box;
    }

    h2 img {
        margin-right: 6px;
    }
</style>
