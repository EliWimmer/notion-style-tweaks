<script>
    import { scopeMode, activePage } from "../scripts/stores.js";
    import {settingsGet} from "../scripts/settingsGet.js";

    let meta;

    settingsGet().then(data => {
        activePage.set(data.meta.activePage);
        scopeMode.set(data.meta.scopeMode);
        meta = data.meta;
    })

    function onClick() {
        if ($scopeMode === "global") {
            scopeMode.set("local");
        } else {
            scopeMode.set("global");
        }
        meta.scopeMode = $scopeMode;
        chrome.storage.local.set({ meta });
    }
</script>

<main>
    <div class="scope-container">
        <div class="scope-choice-container" on:click={(e) => onClick(e)}>
            <div class={`global-radio ${$scopeMode}`}>Global</div>
            <div class={`page-radio ${$scopeMode}`}>Page</div>
            <div class={`scope-slider ${$scopeMode}`} />
        </div>
        <div class="current-page">
            Applying tweaks to
            {#if $scopeMode == "global"}
                all pages.
            {:else if $scopeMode == "local"}
                <span class="mode-info">
                    <img src={$activePage.icon} alt={$activePage.title} />
                    {$activePage.title}
                </span>
            {:else}
                ERROR.
            {/if}
        </div>
    </div>
</main>

<style lang="less">
    main {
        position: sticky;
        top: 10px;
        background: var(--bg-primary);
        z-index: 10000;
    }
    .scope-container {
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 514px;
        column-gap: 10px;
        padding: 10px 20px;
        box-shadow: var(--border) 0px 0px 0px 1px inset;
        margin: 10px 20px 20px 20px;
        background: var(--bg-secondary-alt);
        border-radius: 6px;
        z-index: 2;
        &::before {
            content: "";
            position: absolute;
            top: -10px;
            background: var(--bg-primary);
            width: 100%;
            height: 10px;
            z-index: 1;
        }
        &::after {
            content: "";
            position: absolute;
            bottom: -20px;
            background: linear-gradient(to bottom, var(--bg-primary) 10%, transparent 100%);
            width: 100%;
            height: 20px;
            z-index: 1;
        }
    }

    .scope-choice-container {
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 24px;
        border-radius: 12px;
        cursor: pointer;
        padding: 0px 10px;
        background: var(--toggle-bg);
        box-shadow: 0px 0px 4px 3px rgb(0 0 0 / 10%) inset;
        transition: 200ms;
    }

    .global-radio,
    .page-radio {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: var(--text-dark);
        text-transform: uppercase;
        width: 48px;
        font-weight: 600;
        font-size: 12px;
        text-shadow: var(--text-shadow-top);
        z-index: 10;
        transition: 200ms ease-in-out;
        padding-bottom: 1px;
    }

    .global-radio {
        transform: translateX(-3px);
    }
    .page-radio {
        transform: translateX(3px);
    }

    .global-radio.global {
        color: var(--text-light);
        text-shadow: var(--text-shadow-bottom);
    }
    .page-radio.local {
        color: var(--text-light);
        text-shadow: var(--text-shadow-bottom);
    }

    .scope-slider {
        position: absolute;
        top: 3px;
        left: 3px;
        width: calc(50%);
        height: 18px;
        border-radius: 9px;
        background: var(--bg-secondary);

        transition: 200ms ease-in-out;
    }
    .scope-slider.local {
        left: calc(50% - 3px);
    }

    .current-page {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        font-size: 12px;
        text-shadow: var(--text-shadow-top);
        z-index: 10000;
    }

    .mode-info {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: underline;
        color: var(--accent-color-alt);
    }

    .current-page img {
        height: 14px;
        width: 14px;
        padding: 2px 3px 0px 6px;
    }
</style>
