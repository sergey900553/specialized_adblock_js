// ==UserScript==
// @name         New Userscript
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
        "https://www.kink.com/model/100385/Allie-Addison",
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
