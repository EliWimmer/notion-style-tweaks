import { writable, derived } from 'svelte/store';

export const activePage = writable({});
export const currentPageIndex = writable(0);
export const currentSectionIndex = writable(0);
export const colorPickerActive = writable(false);
export const options = writable("global");
