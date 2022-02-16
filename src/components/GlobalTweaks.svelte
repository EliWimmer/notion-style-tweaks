<script>
    import Toggle from "./Toggle.svelte";
    import globalTweaks from "../scripts/options.js";
    const globalTweak = globalTweaks[0].sections;
</script>

<main>
    {#each globalTweak as section}
        <h3>{section.sectionName}</h3>
        <div class="toggles">
            {#each section.subSections as subSections}
                <h2>
                    <img
                        src={subSections.subSectionIcon}
                        alt={subSections.subSectionName}
                    />
                    {subSections.subSectionName}
                </h2>
                {#each subSections.tweaks as tweak}
                    <Toggle
                        tLabel={tweak.tweakLabel}
                        tSubLabel={tweak.tweakSubLabel}
                        tSelector={tweak.tweakSelector}
                    />
                {/each}
            {/each}
        </div>
    {/each}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        align-items: center;
        width: 100%;
        padding: 10px 20px 20px 20px;
        box-sizing: border-box;
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
        background: rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
    }

    h3 {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: auto;
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 15px;
        text-transform: uppercase;
        color: var(--text-dark);
        text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
        transition: 200ms ease-in-out;
    }

    img {
        margin-right: 6px;
    }

    .toggles {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: var(--bg-secondary);
        border-radius: 6px;
        box-shadow: 0px 0px 0px 1px var(--border) inset,
            0px 8px 16px -8px rgba(0, 0, 0, 0.2);
        transition: 300ms;
        box-sizing: border-box;
        overflow: hidden;
    }

    .toggles:hover {
        box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.1) inset,
            0px 8px 20px -8px rgba(0, 0, 0, 0.2);
    }
</style>
