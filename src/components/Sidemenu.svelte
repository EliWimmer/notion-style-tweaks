<script>
    import options from "../scripts/options.js";
    import { selPage } from "../scripts/stores.js";
    selPage.set([
        "Databases",
        `${options.Databases.All.id}`,
        options.Databases.All.subSections
]);
</script>

<main>
    <div class="menu-container">
        {#each Object.keys(options) as option}
            <div class="section">
                <h2 id={option}>{option.replaceAll("_", " ")}</h2>
                {#each Object.keys(options[option]) as page}
                    <div
                        id={options[option][page].id}
                        class={`menu-button ${
                            options[option][page].id == $selPage[1]
                                ? "active"
                                : ""
                        }`}
                        on:click={(e) =>
                            selPage.set([
                                page,
                                options[option][page].id,
                                options[option][page].subSections,
                            ])}
                    >
                        <img
                            src={options[option][page].icon}
                            alt={page}
                        />
                        <h4>{`${page.replaceAll("_", " ")}`}</h4>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</main>

<style lang="less">
    main {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        width: 240px;
        height: 558px;
        box-sizing: border-box;
    }

    .menu-container {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: 100%;
        background: var(--bg-secondary);
        overflow-y: overlay;
        overflow-x: hidden;
    }

    .section {
        display: flex;
        flex-direction: column;
        width: 200px;
        box-sizing: border-box;
    }

    .menu-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 0px 0px 20px;
        width: 100%;
        height: 34px;
        color: var(--text-light);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        box-sizing: border-box;
        transition: 200ms ease-out;
        box-shadow: 0px 0px 12px 6px rgba(0, 0, 0, 0);
        filter: brightness(1);
        &:hover {
            backdrop-filter: brightness(1.05);
        }
        &.active {
            box-shadow: 0px 0px 12px 6px rgba(0, 0, 0, 0.1),
                4px 0px 0px 0px var(--accent-color-alt) inset;
            width: 205px;
            background: var(--bg-secondary);
            filter: brightness(1.05);
            z-index: 10001;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
        img {
            height: 14px;
            width: 14px;
            margin-right: 6px;
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
        width: 100%;
        height: 29px;
        background: var(--bg-darken);
        box-sizing: border-box;
        box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px 1px;
    }

    h4 {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        color: var(--text-light);
        margin: 0px;
        padding: 0px 0px 2px 0px;
        height: 20px;
        width: 100%;
    }

    ::-webkit-scrollbar-track {
        background: transparent !important;
        height: 64px;
    }
    ::-webkit-scrollbar-track-piece {
        background: none !important;
        height: 64px;
    }
    ::-webkit-scrollbar {
        width: 8px;
        background: none !important;
        height: 64px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--bg-tertiary);
        border-radius: 10px;
        height: 64px !important;
    }
</style>
