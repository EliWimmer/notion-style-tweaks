<script>
import options from "../scripts/options.js";
import { currentPage, currentPageIndex, currentSectionIndex } from "../scripts/stores.js";
let menuOptions = options[0].sections;

let activePage = "MenuTweaksDatabases";

function pageClick(id, sectionIndex, pageIndex) {
    activePage = id;
    currentPage.set(id);
    currentSectionIndex.set(sectionIndex);
    currentPageIndex.set(pageIndex);
}
</script>

<main>
    <div class="menu-container">
        {#each menuOptions as option}
        <div class="section">
            <h2 id={option.id}>{option.name}</h2>
            {#each option.pages as page}
            <div
                id={page.id}
                class={`menu-button ${page.id == activePage ? "active" : ""}`}
                on:click={(e => 
                    pageClick(page.id, page.sectionIndex, page.pageIndex))
                }
                >
                <img src="{page.icon}" alt="{page.name}" />
                <h4>{page.name}</h4>
            </div>
            {/each}
        </div>
        {/each}
    </div>
</main>

<style>
main {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 240px;
    height: 554px;
    box-sizing: border-box;
}

.menu-container {
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    box-sizing: border-box;
    width: 240px;
    height: 100%;
    background: var(--bg-secondary);
}

.section {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
}

.menu-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 0px 20px;
    width: 100%;
    height: 36px;
    color: var(--text-light);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    box-sizing: border-box;
    transition: 200ms ease-out;
    box-shadow: 0px 0px 12px 6px rgba(0, 0, 0, .0);
    filter: brightness(1.00);

}

.menu-button img {
    height: 14px;
    width: 14px;
    margin-right: 6px;
}

.menu-button:hover {
    backdrop-filter: brightness(1.05);
}

.menu-button.active {
    box-shadow: 0px 0px 12px 6px rgba(0, 0, 0, .1),
    4px 0px 0px 0px var(--accent-color) inset;
    width: 245px;
    background: var(--bg-secondary);
    filter: brightness(1.05);
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
    height: 36px;
    background: rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
}

h4 {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-light);
    margin: 0px;
    padding: 0px 0px 2px 0px;
    height: 24px;
    width: 100%;
}
</style>
