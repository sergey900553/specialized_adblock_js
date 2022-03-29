// ==UserScript==
// @name         Reddit Block
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let listDeletes = [
        "https://www.reddit.com/user/BadDragonSlayer/",
        "https://www.reddit.com/user/keriberry_420/",
        "https://www.reddit.com/user/frazborn/",
        "https://www.reddit.com/user/liz_103/",
        "https://www.reddit.com/user/MashaYang/",
        "https://www.reddit.com/user/BratKingKit/",
        "https://www.reddit.com/user/Starryfawnn/",
        "https://www.reddit.com/user/XxkittylicksxX/",
        "https://www.reddit.com/user/ur_succubus_gf/",
        "https://www.reddit.com/user/carrymeinabucket/",
        "https://www.reddit.com/user/pupsicle_stick/",
        "https://www.reddit.com/user/Ivy_Nox/",
        "https://www.reddit.com/user/littleshycouple/",
        "https://www.reddit.com/user/HappyWife247/",
        "https://www.reddit.com/user/babylite/",
        "https://www.reddit.com/user/XIIIStitches/",
        "https://www.reddit.com/user/daydreamingprisoner-/",
        "https://www.reddit.com/user/AstraStasis/",
        "https://www.reddit.com/user/angelic_anais/",
        "https://www.reddit.com/user/DLF21/",
        "https://www.reddit.com/user/PunkdPrincess/",
        "https://www.reddit.com/user/illutree/",
        "https://www.reddit.com/user/subMRSbrat/",
        "https://www.reddit.com/user/VixenxMoon/", // ну пиздец
        "https://www.reddit.com/user/Yiffyfosque/",
        "https://www.reddit.com/user/lillyvig/",
        "https://www.reddit.com/user/freakslutsage/",
        "https://www.reddit.com/user/MrsPetitexx/",
        "https://www.reddit.com/user/Revolutionary_Ad1417/",
        "https://www.reddit.com/user/Many-Aioli688/",
        "https://www.reddit.com/user/SpitInMyMouth420_/",
        "https://www.reddit.com/user/Gapingsandra/",
        "https://www.reddit.com/user/Snoo-90330/",
        "https://www.reddit.com/user/Meganmarxxx/",
        "https://www.reddit.com/user/realhotmom/",
        "https://www.reddit.com/user/Isitnormalforyou/",
        "https://www.reddit.com/user/bigyoni95/",
        "https://www.reddit.com/user/Missfc_fistctiminals/",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",

    ];

    function isContainUrl() {
        for (let i = 0; i < listDeletes.length; i++) {
            if (window.location.href.includes(listDeletes[i]) && (listDeletes[i])!='') {
                console.log(`true ` + listDeletes[i]);
                return true;
            } else {
                console.log(`false ` + listDeletes[i]);
            }
        }
        return false;
    }


    function urlSiteCrop(url) {
        let output = url.replace("https://www.reddit.com", "");
        return output;
    };


    function delBoxes() {
        if (isContainUrl()) {
                document.querySelector(`._3ozFtOe6WpJEMUtxDOIvtU`).remove();
            return;
        }

        for (let i = 0; i < listDeletes.length; i++) {
            document.querySelectorAll(`.rpBJOHq2PR60pnwJlUyP0 a[href^="${urlSiteCrop(listDeletes[i])}"]`).forEach(e => e.closest('[data-testid="post-container"]').parentNode.parentNode.remove());
        }
    }
    delBoxes();


    const observer1 = new MutationObserver(function (mutation) {
        mutation.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                delBoxes();
            }
        })
    });


    if (document.querySelector('.qYj03fU5CXf5t2Fc5iSvg.ListingLayout-outerContainer') != null) {
        const playlistWrapper1 = document.querySelector('.qYj03fU5CXf5t2Fc5iSvg.ListingLayout-outerContainer');
        observer1.observe(playlistWrapper1, {
            childList: true,
            //     attributes: true,
            subtree: true,
            //   characterData: true,
        })
    }

})();
