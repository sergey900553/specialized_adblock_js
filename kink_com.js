// ==UserScript==
// @name         Kink.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.kink.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kink.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let listDeletes = [
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
        "https://www.kink.com/shoot/32204",
        "https://www.kink.com/shoot/31330",
        "https://www.kink.com/shoot/30439",
        "https://www.kink.com/shoot/30440",
        "https://www.kink.com/shoot/30441",
        "https://www.kink.com/shoot/34224",
        "https://www.kink.com/shoot/32686",
        "https://www.kink.com/shoot/30438",
        "https://www.kink.com/shoot/31882",
        "https://www.kink.com/shoot/30542",
        "https://www.kink.com/shoot/31761",
        "https://www.kink.com/shoot/34037",
        "https://www.kink.com/shoot/34846",
        "https://www.kink.com/shoot/36115",
        "https://www.kink.com/shoot/36121",
        "https://www.kink.com/shoot/35957",
        "https://www.kink.com/shoot/35952",
        "https://www.kink.com/shoot/36063",
        "https://www.kink.com/shoot/35139",
        "https://www.kink.com/shoot/35252",
        "https://www.kink.com/shoot/34851",
        "https://www.kink.com/shoot/35004",
        "https://www.kink.com/shoot/35004",
        "https://www.kink.com/shoot/34688",
        "https://www.kink.com/shoot/35207",
        "https://www.kink.com/shoot/34848",
        "https://www.kink.com/shoot/35385",
        "https://www.kink.com/shoot/35154",
        "https://www.kink.com/shoot/35205",
        "https://www.kink.com/shoot/35384",
        "https://www.kink.com/shoot/34039",
        "https://www.kink.com/shoot/34064",
        "https://www.kink.com/shoot/33226",
        "https://www.kink.com/shoot/32691",
        "https://www.kink.com/shoot/31883",
        "https://www.kink.com/shoot/32113",
        "https://www.kink.com/shoot/34223",
        "https://www.kink.com/shoot/34038",
        "https://www.kink.com/shoot/34036",
        "https://www.kink.com/shoot/34308",
        "https://www.kink.com/shoot/34295",
        "https://www.kink.com/shoot/34421",
        "https://www.kink.com/shoot/31884",
        "https://www.kink.com/shoot/31851",
        "https://www.kink.com/shoot/30437",
        "https://www.kink.com/shoot/30454",
        "https://www.kink.com/shoot/32208",
        "https://www.kink.com/shoot/32121",
        "https://www.kink.com/shoot/31762",
        "https://www.kink.com/shoot/30514",
        "https://www.kink.com/shoot/36008",
        "https://www.kink.com/shoot/35679",
        "https://www.kink.com/shoot/36120",
        "https://www.kink.com/shoot/36123",
        "https://www.kink.com/shoot/30450",
        "https://www.kink.com/shoot/30540",
        "https://www.kink.com/shoot/30451",
        "https://www.kink.com/shoot/30541",
        "https://www.kink.com/shoot/30455",
        "https://www.kink.com/shoot/30453",
        "https://www.kink.com/shoot/35502",
        "https://www.kink.com/shoot/35334",
        "https://www.kink.com/shoot/34684",
        "https://www.kink.com/shoot/34685",
        "https://www.kink.com/shoot/34426",
        "https://www.kink.com/shoot/34687",
        "https://www.kink.com/shoot/36489",
        "https://www.kink.com/shoot/37185",
        "https://www.kink.com/shoot/36885",
        "https://www.kink.com/shoot/36251",
        "https://www.kink.com/shoot/36250",
        "https://www.kink.com/shoot/36890",
        "https://www.kink.com/shoot/36580",
        "https://www.kink.com/shoot/36487",
        "https://www.kink.com/shoot/36455",
        "https://www.kink.com/shoot/36316",
        "https://www.kink.com/shoot/36317",
        "https://www.kink.com/shoot/36117",
        "https://www.kink.com/shoot/35953",
        "https://www.kink.com/shoot/35653",
        "https://www.kink.com/shoot/35681",
        "https://www.kink.com/shoot/35505",
        "https://www.kink.com/shoot/35509",
        "https://www.kink.com/shoot/35506",
        "https://www.kink.com/shoot/35441",
        "https://www.kink.com/shoot/35037",
        "https://www.kink.com/shoot/34423",
        "https://www.kink.com/shoot/34259",
        "https://www.kink.com/shoot/32687",
        "https://www.kink.com/shoot/36887",
        "https://www.kink.com/shoot/37134",
        "https://www.kink.com/shoot/37108",
        "https://www.kink.com/shoot/36886",
        "https://www.kink.com/shoot/37110",
        "https://www.kink.com/shoot/37186",
        "https://www.kink.com/shoot/37189",
        "https://www.kink.com/shoot/37610",
        "https://www.kink.com/shoot/37574",
        "https://www.kink.com/shoot/37451",
        "https://www.kink.com/shoot/37449",
        "https://www.kink.com/model/10464/Ariel-X",
        "https://www.kink.com/shoot/30509",
        "https://www.kink.com/shoot/30456",
        "https://www.kink.com/shoot/30445",
        "https://www.kink.com/shoot/30452",
        "https://www.kink.com/shoot/30447",
        "https://www.kink.com/shoot/30442",
        "https://www.kink.com/shoot/30449",
        "https://www.kink.com/shoot/30446",
        "https://www.kink.com/shoot/30448",
    ];


    function urlSiteCrop(url) {
        let output = url.replace("https://www.kink.com", "");
        return output;
    };

    function delBoxes() {
        for (let i = 0; i < listDeletes.length; i++) {
            document.querySelectorAll(`.shoot  a[href^="${urlSiteCrop(listDeletes[i])}"`).forEach(e => e.closest('.shoot').remove());
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

    if (document.querySelector('.shoot-list') != null) {
        const playlistWrapper1 = document.querySelector('.shoot-list');
        observer1.observe(playlistWrapper1, {
            childList: true,
            attributes: true,
            subtree: true,
            characterData: true,
        })
    }




})();
