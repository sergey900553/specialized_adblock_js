// ==UserScript==
// @name         Xvideos
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.xvideos.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xvideos.com
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
        let output = url.replace("https://www.xvideos.com", "");
        return output;
    };


    function delBoxes() {

        for (let i = 0; i < listDeletes.length; i++) {
            document.querySelectorAll(`.thumb-block a[href^="${urlSiteCrop(listDeletes[i])}"`).forEach(e => e.closest('.thumb-block').remove());
        }
    }

    delBoxes();


    const observer0 = new MutationObserver(function (mutation) {
        mutation.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                delBoxes();
            }
        })
    });

    if (document.querySelector('#tabVideos') != null) {
        const playlistWrapper = document.querySelector('#tabVideos');
        observer0.observe(playlistWrapper, {
            childList: true,
            subtree: true,
        })
    }

    const observer = new MutationObserver(function (mutation) {
        mutation.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                delBoxes();
            }
        })
    });

    if (document.querySelector('#content') != null) {
        const playlistWrapper = document.querySelector('#content');
        observer.observe(playlistWrapper, {
            childList: true
        })
    }



    const observer1 = new MutationObserver(function (mutation) {
        mutation.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                delBoxes();
            }
        })
    });


    if (document.querySelector('.related-content') != null) {
        const playlistWrapper1 = document.querySelector('.related-content');
        observer1.observe(playlistWrapper1, {
            childList: true,
            attributes: true,
            subtree: true,
            characterData: true,
        })
    }

})();
