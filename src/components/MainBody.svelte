<script>
    import Input from "./Input.svelte";
    import options from "../scripts/options.js";
    import Theme from "./interface/Theme.svelte";
    import browser from "webextension-polyfill";
    import {
        currentPageIndex,
        currentSectionIndex,
    } from "../scripts/stores.js";

    let pageIndex;
    let sectionIndex;
    let pageContents;
    $: {
        pageIndex = $currentPageIndex;
        sectionIndex = $currentSectionIndex;
        pageContents =
            options[0].sections[`${sectionIndex}`].pages[`${pageIndex}`];
    }
</script>

<main>
    {#if pageContents.name === "Color Themes"}
        <div class="theme-grid">
            {#each pageContents.subSections as subSection}
                <Theme theme={subSection} />
            {/each}
        </div>
    {:else}
        <h3>{pageContents.name}</h3>
        {#each pageContents.subSections as subSection}
            {#if subSection.name === "Info"}
                <div class="info">
                    <h2>{subSection.options[0].label}</h2>
                    <p>{subSection.options[0].sublabel}</p>
                </div>
            {:else}
                <div class="options-container">
                    <h2>
                        <img src={subSection.icon} alt={subSection.name} />
                        {subSection.name}
                    </h2>
                    {#each subSection.options as option}
                        {#if option.class != "--coming-soon"}
                            <div class="option-item-container">
                                <div class="option-item-label-container">
                                    <div class="option-item-label">
                                        {option.label}
                                    </div>
                                    <div class="option-item-sublabel">
                                        {option.sublabel}
                                    </div>
                                </div>
                                <Input
                                    itype={option.type}
                                    iclass={option.class}
                                    iselector={option.selector}
                                    id={option.id}
                                />
                            </div>
                        {:else}
                            <div class="coming-soon">Nothing here (yet)...</div>
                        {/if}
                    {/each}
                </div>
            {/if}
        {/each}
    {/if}
</main>

<style lang="less">
    main {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        padding: 0 20px 20px 20px;
        box-sizing: border-box;
    }

    .options-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: var(--bg-secondary);
        border-radius: 6px;
        box-shadow: 0px 0px 0px 1px var(--border) inset,
            0px 8px 16px -8px rgba(0, 0, 0, 0.2);
        transition: 300ms;
        box-sizing: border-box;

        &:hover {
            box-shadow: 0px 0px 0px 1px var(--border) inset,
                0px 8px 16px -8px rgba(0, 0, 0, 0.4);
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

    h3 {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: auto;
        margin-bottom: 0px;
        margin-top: 10px;
        font-size: 15px;
        text-transform: uppercase;
        color: var(--text-dark);
        text-shadow: var(--text-shadow-bottom);
        transition: 200ms ease-in-out;
    }

    .option-item-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }

    .option-item-label-container {
        display: flex;
        flex-direction: column;
        max-width: 240px;
        box-sizing: border-box;
    }

    .coming-soon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        text-shadow: var(--text-shadow-top);
        color: var(--text-dark-alt);
        padding: 10px 0px;
        width: 100%;
    }

    .option-item-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--text-light);
        transition: 300ms;
        margin-right: auto;
        display: flex;
        align-items: center;
        text-shadow: var(--text-shadow-bottom);
    }

    .option-item-sublabel {
        font-size: 12px;
        color: var(--text-dark-alt);
        margin-top: 5px;
        max-width: 280px;
    }

    .info {
        background: var(--accent-color-bg);
        border: 1px solid var(--accent-color-alt);
        border-radius: 6px;
    }
    .info h2 {
        background: var(--bg-darken);
        color: var(--accent-color-alt);
    }
    .info p {
        color: var(--text-light);
        padding-left: 10px;
    }

    .theme-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        box-sizing: border-box;
        width: 100%;
        padding-top: 20px;
    }
</style>
