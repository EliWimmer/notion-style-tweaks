import { writable, derived } from 'svelte/store';

export const selPage = writable(["Databases", "MenuTweaksDatabases"]);
export const activePage = writable({});
export const scopeMode = writable("");
export const colorPickerActive = writable(false);
export const options = writable("global");
export const loading = writable(false);
