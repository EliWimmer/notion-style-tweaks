(() => {
    const dbs = document.querySelectorAll(
        ".notion-page-content > .notion-collection_view-block"
    );
    console.log(dbs);

    const currentPageDbs = [];

    for (let i = 0; i < dbs.length; i++) {
        // checks if icon is present
        if (
            dbs[i].firstChild.firstChild.firstChild.firstChild.firstChild
                .childElementCount > 1
        ) {
            let dbIconCheck;
            let iconType;
            if (dbs[i].firstChild.firstChild.firstChild.firstChild.firstChild.children[0].firstChild.firstChild.firstChild.firstChild.alt !== "") {
                dbIconCheck = dbs[i].firstChild.firstChild.firstChild.firstChild.firstChild.children[0].firstChild.firstChild.firstChild.firstChild.alt;
                iconType = "emoji";
            } else {
                dbIconCheck = `${dbs[i].firstChild.firstChild.firstChild.firstChild.firstChild.children[0].firstChild.firstChild.firstChild.firstChild.src}`;
                iconType = "image";
            }
            currentPageDbs.push({
                baseURI: dbs[i].baseURI,
                dataBlockId: dbs[i].firstChild.firstChild.dataset.blockId,
                icon: dbIconCheck,
                iconType: iconType,
                dbTitle:
                    dbs[i].firstChild.firstChild.firstChild.firstChild
                        .firstChild.children[1].firstChild.textContent,
            });
        } else {
            currentPageDbs.push({
                baseURI: dbs[i].baseURI,
                dataBlockId: dbs[i].firstChild.firstChild.dataset.blockId,
                icon: false,
                dbTitle:
                    dbs[i].firstChild.firstChild.firstChild.firstChild
                        .firstChild.innerText,
            });
        }
    }
    console.log(currentPageDbs);
    return(currentPageDbs);
})();
