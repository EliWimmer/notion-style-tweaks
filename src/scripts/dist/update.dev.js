"use strict";

// Cinzel, Dancing Script, EB Garamond, Fira Code, Inconsolata, Inter, JetBrains Mono, Josefin Sans, Josefin Slab, Lora, Maven Pro, Montserrat, Mulish, Nunito, Open Sans, Oswald, Overpass Mono, Petrona, Playfair Display, Quicksand, Raleway, Roboto Mono, Roboto Slab, Rubik, Source Code Pro, Work Sans
chrome.storage.local.get(null, function (data) {
  var activePage = data.meta.activePage;
  var uuid = activePage.uuid;
  var global = {};
  var local = {};
  var LocalArrayActive = [];
  var globalArrayActive = [];
  Object.assign(local, data.local);
  local = local[uuid];
  Object.assign(global, data.global);

  if (local.theme != '--nst_theme-notion-default') {
    LocalArrayActive.push(local.theme);
  } else {
    globalArrayActive.push(global.theme);
  }

  for (var key in global.sliders) {
    if (key == '--nst_tweak-last-props-first') {
      globalArrayActive.push('--nst_tweak-last-props-first');
      globalArrayActive.push("lpf-".concat(global.sliders[key][0]));
    }
  }

  for (var _key in local.sliders) {
    if (_key == '--nst_tweak-last-props-first') {
      LocalArrayActive.push('--nst_tweak-last-props-first');
      LocalArrayActive.push("lpf-".concat(local.sliders[_key][0]));
    }
  }

  for (var _key2 in global.fonts) {
    LocalArrayActive.push(global.fonts[_key2]);
  }

  for (var _key3 in local.fonts) {
    LocalArrayActive.push(local.fonts[_key3]);
  }

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
  var classes = document.body.className.split(' ');
  var removeClasses = classes.filter(function (item) {
    return item != 'notion-body' && item != 'dark' && item != 'light' && item != 'dark-mode' && item != 'light-mode';
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