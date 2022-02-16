"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loading = exports.options = exports.colorPickerActive = exports.scopeMode = exports.activePage = exports.selPage = void 0;

var _store = require("svelte/store");

var selPage = (0, _store.writable)([]);
exports.selPage = selPage;
var activePage = (0, _store.writable)({});
exports.activePage = activePage;
var scopeMode = (0, _store.writable)("");
exports.scopeMode = scopeMode;
var colorPickerActive = (0, _store.writable)(false);
exports.colorPickerActive = colorPickerActive;
var options = (0, _store.writable)("global");
exports.options = options;
var loading = (0, _store.writable)(false);
exports.loading = loading;