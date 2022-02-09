<script>
    import browser from "webextension-polyfill";
    import { scopeMode, activePage } from "../scripts/stores.js";
    
    $: $activePage;

    async function onClick() {
        if ($scopeMode == "global") {
            scopeMode.set("page");
        } else {
            scopeMode.set("global");
        }
    }
    (async () => {
        console.log(await browser.storage.sync.get(null));

        let uuid;
        let tab = await browser.tabs.query({
            active: true,
            currentWindow: true,
        });
        if (tab[0].url.lastIndexOf("-") != -1) {
            uuid = tab[0].url.substring(tab[0].url.lastIndexOf("-") + 1);
        } else {
            uuid = tab[0].url
                .substring(tab[0].url.lastIndexOf("/") + 1)
                .substring(0, 32);
        }
        activePage.set({
            title: tab[0].title,
            uuid: uuid,
            icon: tab[0].favIconUrl,
            tabid: tab[0].id,
        });
        let updateValue = await browser.storage.sync.get(null);
        updateValue.page[$activePage.uuid] = $activePage;
        browser.storage.sync.set(updateValue);
    })();
</script>

<main>
    <div class="scope-container">
        <div class="scope-choice-container" on:click={(e) => onClick()}>
            <div class={`global-radio ${$scopeMode}`}>Global</div>
            <div class={`page-radio ${$scopeMode}`}>Page</div>
            <div class={`scope-slider ${$scopeMode}`} />
        </div>
        <div class="current-page">
            Applying tweaks to
            {#if $scopeMode == "global"}
                all pages.
            {:else if $scopeMode == "page" && $activePage}
                <span class="mode-info">
                    <img
                        src={$activePage.icon}
                        alt={$activePage.title}
                    />
                    {$activePage.title}
                </span>
            {:else}
                ERROR.
            {/if}
        </div>
    </div>
</main>

<style>
    main {
        position: relative;
        background: var(--bg-primary);
        z-index: 10000;

    }
    .scope-container {

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        column-gap: 10px;
        padding: 10px 20px;
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
        width: 60px;
        font-weight: 600;
        font-size: 12px;
        text-shadow: var(--text-shadow-top);
        z-index: 10;
        transition: 200ms ease-in-out;
        padding-bottom: 1px;
    }

    .global-radio {
        transform: translateX(-4px);
    }
    .page-radio {
        transform: translateX(4px);
    }

    .global-radio.global {
        color: var(--text-light);
        text-shadow: var(--text-shadow-bottom);
    }
    .page-radio.page {
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
        box-shadow: 0px 0px 0px 1px rgb(255 255 255 / 5%) inset;
        transition: 200ms ease-in-out;
    }
    .scope-slider.page {
        left: calc(50% - 4px);
    }

    .current-page {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        font-size: 12px;
        color: var(--text-dark-alt);
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
