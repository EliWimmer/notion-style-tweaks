"use strict";

chrome.storage.local.get("meta", function (data) {
  var activePage = data.meta.activePage;
  var uuid = activePage.uuid;
  var global = {};
  var local = {};
  var LocalArrayActive = [];
  var globalArrayActive = [];
  chrome.storage.local.get(null, function (data) {
    Object.assign(local, data.local);
    local = local[uuid];
    Object.assign(global, data.global);
    Object.keys(local).forEach(function (key) {
      if (local[key] == true) {
        LocalArrayActive.push(key);
      }
    });
    Object.keys(global).forEach(function (key) {
      if (global[key] == true) {
        globalArrayActive.push(key);
      }
    });
    var combinedArrayActive = LocalArrayActive.concat(globalArrayActive);
    var uniqueArrayActive = combinedArrayActive.filter(function (item, pos) {
      return combinedArrayActive.indexOf(item) == pos;
    });
    var classes = document.body.className.split(" ");
    var removeClasses = classes.filter(function (item) {
      return item != "notion-body" && item != "dark" && item != "light" && item != "dark-mode" && item != "light-mode";
    });
    removeClasses = removeClasses.filter(function (item) {
      return uniqueArrayActive.indexOf(item) == -1;
    });
    removeClasses.forEach(function (item) {
      document.body.classList.remove(item);
    });
    uniqueArrayActive.forEach(function (item) {
      document.body.classList.add(item);
    });
  });
});