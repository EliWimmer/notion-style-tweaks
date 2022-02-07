<script>
import Input from './Input.svelte';
import options from '../scripts/options.js';
import browser from 'webextension-polyfill';
import {
    currentPage,
    currentPageIndex,
    currentSectionIndex
} from '../scripts/stores.js';

let pageName;
let pageIndex;
let sectionIndex;
let pageContents;
$: {
    $currentPage;
    pageName = $currentPage;
    pageIndex = $currentPageIndex;
    sectionIndex = $currentSectionIndex;
    pageContents = options[0].sections[`${sectionIndex}`].pages[`${pageIndex}`];
}
</script>

<main>
    <h3>{pageContents.name}</h3>
    {#each pageContents.subSections as subSection}
    <div class="options-container">

        <h2>
            <img src="{subSection.icon}" alt="{subSection.name}">
            {subSection.name}
        </h2>
        {#each subSection.options as option}
        {#if option.class != '--coming-soon'}
        <div class="option-item-container">
            <div class="option-item-label-container">
                <div class="option-item-label">
                    {option.label}
                </div>
                <div class="option-item-sublabel">{option.sublabel}</div>
            </div>
            <Input itype={option.type} iclass={option.class} id={option.id} />
        </div>
        {:else}
        <div class="coming-soon">
            Nothing here (yet)...
        </div>
        {/if}
        {/each}
    </div>

    {/each}
</main>

<style>
main {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 0px 20px 20px 20px;
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
    overflow: hidden;
}
.options-container:hover {
        box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.1) inset,
            0px 8px 20px -8px rgba(0, 0, 0, 0.4);
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
        text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
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
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
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
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
}

.option-item-sublabel {
    font-size: 12px;
    color: #8a9ba5;
    margin-top: 5px;
    max-width: 280px;
}


</style>