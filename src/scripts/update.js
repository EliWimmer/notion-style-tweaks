  // Cinzel, Dancing Script, EB Garamond, Fira Code, Inconsolata, Inter, JetBrains Mono, Josefin Sans, Josefin Slab, Lora, Maven Pro, Montserrat, Mulish, Nunito, Open Sans, Oswald, Overpass Mono, Petrona, Playfair Display, Quicksand, Raleway, Roboto Mono, Roboto Slab, Rubik, Source Code Pro, Work Sans

chrome.storage.local.get(null, (data) => {
  let activePage = data.meta.activePage
  let uuid = activePage.uuid
  let global = {}
  let local = {}
  let LocalArrayActive = []
  let globalArrayActive = []

  Object.assign(local, data.local)
  local = local[uuid]
  Object.assign(global, data.global)

  if (local.theme != '--nst_theme-notion-default') {
    LocalArrayActive.push(local.theme)
  } else {
    globalArrayActive.push(global.theme)
  }

  for (let key in global.sliders) {
    if (key == '--nst_tweak-last-props-first') {
      globalArrayActive.push('--nst_tweak-last-props-first')
      globalArrayActive.push(`lpf-${global.sliders[key][0]}`)
    }
  }

  for (let key in local.sliders) {
    if (key == '--nst_tweak-last-props-first') {
      LocalArrayActive.push('--nst_tweak-last-props-first')
      LocalArrayActive.push(`lpf-${local.sliders[key][0]}`)
    }
  }

  for (let key in global.fonts) {
    LocalArrayActive.push(global.fonts[key])
  }

  for (let key in local.fonts) {
    LocalArrayActive.push(local.fonts[key])
  }

  Object.keys(local).forEach((key) => {
    if (local[key] == true) {
      LocalArrayActive.push(key)
    }
  })
  Object.keys(global).forEach((key) => {
    if (global[key] == true) {
      globalArrayActive.push(key)
    }
  })
  let combinedArrayActive = LocalArrayActive.concat(globalArrayActive)
  let uniqueArrayActive = combinedArrayActive.filter((item, pos) => {
    return combinedArrayActive.indexOf(item) == pos
  })
  let classes = document.body.className.split(' ')
  let removeClasses = classes.filter((item) => {
    return (
      item != 'notion-body' &&
      item != 'dark' &&
      item != 'light' &&
      item != 'dark-mode' &&
      item != 'light-mode'
    )
  })
  removeClasses = removeClasses.filter((item) => {
    return uniqueArrayActive.indexOf(item) == -1
  })
  removeClasses.forEach((item) => {
    document.body.classList.remove(item)
  })
  uniqueArrayActive.forEach((item) => {
    document.body.classList.add(item)
  })
})
