// this code will be executed after page load
(function() {
    let checkboxObj = [];
  //get checkbox id and value from chrome storage
    chrome.storage.sync.get(['checkboxObj'], function(result) {
        if (result.checkboxObj) {
        checkboxObj = result.checkboxObj;
        // for each checkbox if value is true add id as class to body
        for (let i = 0; i < checkboxObj.length; i++) {
            if (checkboxObj[i].value == "checked") {
                document.body.classList.add(`--nst-${checkboxObj[i].id}`);
            }
        }

    }
    }
    );


    const dbs = document.querySelectorAll(".notion-collection_view-block");
    console.log(dbs);
  
})();
