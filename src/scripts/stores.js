import { writable, derived } from 'svelte/store';

export const currentPage = writable('MenuTweaksDatabases');
export const currentPageIndex = writable(0);
export const currentSectionIndex = writable(0);