// let results = [];
// (async () => {
//     let [tabs] = await chrome.tabs.query({
//         active: true,
//         currentWindow: true,
//     });

//     chrome.scripting.executeScript(
//         {
//             target: { tabId: tabs.id },
//             files: ["getdbs.js"],
//         },
//         (injectionResult) => {
//             for (let i = 0; i < injectionResult.length; i++) {
//                 results.push(injectionResult[i]);
//             }
//             console.log(results);

//             if (results.length >= 0) {
//                 // for each create a new div with result[i].dbTitle
//                 for (let i = 0; i < results[0].result.length; i++) {
//                     /* create the following html
//                 <div class="db-options">
//                 </div>
//                 */
//                     let dbIcon;
//                     if (results[0].result[i].iconType === "emoji") {
//                         dbIcon = `<div class="emoji">${results[0].result[i].icon}</div>`;
//                     } else {
//                         dbIcon = `<img src="${results[0].result[i].icon}">`;
//                     }
//                     let dbOption = document.createElement("div");
//                     dbOption.classList.add("toggles");
//                     // set innerhtml of dboption
//                     dbOption.innerHTML = `
//                 <h2 
//                 dbId="${results[0].result[i].dataBlockId}" baseURI="${results[0].result[i].baseURI}" 
//                 >
//                 ${dbIcon}
//                 ${results[0].result[i].dbTitle}

//                 </h2>
//                 `;
//                     // append dbOption to dbListContainer
//                     dbListContainer.appendChild(dbOption);

//                     let toggleContainer = document.createElement("div");
//                     toggleContainer.classList.add("toggle-container");
//                     toggleContainer.innerHTML = `
//                 <div class="label">
//                     Prop to front
//                 </div>
//                 <div class="toggle">
//                     <input type="checkbox" type="local" dbId="${results[0].result[i].dataBlockId}" id="${results[0].result[i].dataBlockId}-prop-to-front" />
//                     <div class="toggle-slider"></div>
//                 </div>
// `;
//                     dbOption.appendChild(toggleContainer);
//                 }
//             }
//         }
//     );
// })();

let gloablTab = document.getElementById("global-content");
let pageTab = document.getElementById("page-content");
// get radio value from form named category
let category = document.getElementById("category");
// if radio value is global, show global tab



category.addEventListener("click", function () {
    let categoryValue = document.getElementById("global-radio").checked;
    if (categoryValue === true) {
        // add class active to global tab
        gloablTab.classList.add("active");
        // remove class active from page tab
        pageTab.classList.remove("active");
    } else {
        // add class active to page tab
        pageTab.classList.add("active");
        // remove class active from global tab
        gloablTab.classList.remove("active");
    }
});

let checkbox = document.querySelectorAll('input[type="checkbox"]');
//store id and value of each checkbox in object array
console.log(checkbox);
let checkboxObj = [];
for (let i = 0; i < checkbox.length; i++) {
    checkboxObj.push({
        id: checkbox[i].id,
        value: checkbox[i].checked,
    });
}

// set checkboxObj from chrome storage
chrome.storage.sync.get(["checkboxObj"], function (result) {
    if (result.checkboxObj.length === checkbox.length) {
        checkboxObj = result.checkboxObj;
        // set checkbox value
        for (let i = 0; i < checkbox.length; i++) {
            for (let j = 0; j < checkboxObj.length; j++) {
                if (checkboxObj[j].id == checkbox[i].id) {
                    checkbox[i].checked = checkboxObj[j].value;
                }
            }
        }
    } else {
    }
});

// add event listener to checkbox
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", function () {
        // if checkbox is checked, set value to true
        if (checkbox[i].checked) {
            checkboxObj[i].value = "checked";
        }
        // if checkbox is unchecked, set value to false
        else {
            checkboxObj[i].value = false;
        }
        chrome.storage.sync.set(
            {
                checkboxObj: checkboxObj,
            },
            function () {
                console.log(checkboxObj);
            }
        );
    });
}

const dbListContainer = document.getElementById("databases");


