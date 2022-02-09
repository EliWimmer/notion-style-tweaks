<script>
    import browser from "webextension-polyfill";
    import { scopeMode } from "../scripts/stores.js";

    let activePage;
    $: activePage;

    async function onClick() {
        if ($scopeMode == "global") {
            scopeMode.set("page");
        } else {
            scopeMode.set("global");
        }
    }
    (async () => {

        console.log(await browser.storage.sync.get(null))

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
        activePage = {
            title: tab[0].title,
            uuid: uuid,
            icon: tab[0].favIconUrl,
            tabid: tab[0].id,
        };
        await browser.storage.sync.set({ activePage: activePage });
        activePage = await browser.storage.sync.get("activePage");
        if (await browser.storage.sync.get($scopeMode) == false) {
            console.log("No scopes exist, creating scopes");
            await browser.storage.sync.set({
                global: {
                },
                page: {
                },
            });
        } else {
            console.log("Scopes exist");
        }
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
            Currently applying tweaks to
            {#if $scopeMode == "global"}
                all pages.
            {:else if $scopeMode == "page" && activePage}
                <span class="mode-info">
                    <img src={activePage.activePage.icon} alt={activePage.activePage.title} />
                    {activePage.activePage.title}
                </span>
            {:else}
                ERROR.
            {/if}
        </div>
    </div>
</main>

<style>
    .scope-container {
        top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        row-gap: 10px;
        margin-top: 10px;
    }

    .scope-choice-container {
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 32px;
        border-radius: 21px;
        cursor: pointer;
        padding: 0px 20px;
        background: linear-gradient(180deg, #2f3437 0%, #2d3134 100%);
        box-shadow: 0px 0px 4px 3px rgb(0 0 0 / 10%) inset;
        transition: 200ms;
    }

    .global-radio, .page-radio {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: var(--text-dark);
        text-transform: uppercase;
        width: 100px;
        font-weight: 600;
        text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.8);
        z-index: 10;
        transition: 200ms ease-in-out;
    }

    .global-radio {
        transform: translateX(-6px);
    }
    .page-radio {
        transform: translateX(7px);
    }

    .global-radio.global {
        color: var(--text-light);
        text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.9);
    }
    .page-radio.page {
        color: var(--text-light);
        text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.9);
    }

    .scope-slider {
        position: absolute;
        top: 4px;
        left: 4px;
        width: calc(50%);
        height: 24px;
        border-radius: 14px;
        background: var(--bg-secondary);
        box-shadow: 0px 0px 0px 1px rgb(255 255 255 / 5%) inset;
        transition: 200ms ease-in-out;
    }
    .scope-slider.page {
        left: calc(50% - 4px);
    }

    .current-page {
        position: sticky;
        top: 95px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 12px;
        color: var(--text-dark-alt);
        text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.8);
        z-index: 10000;
    }

    .mode-info {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: underline;
    }

    .current-page img {
        height: 14px;
        width: 14px;
        padding: 2px 3px 0px 6px;
    }
</style>