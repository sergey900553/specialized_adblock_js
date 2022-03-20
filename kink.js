
let listDeletes = [
    "https://www.kink.com/model/100296/Ryder-Rey",
    "/model/100541/Penelope-Kay",
];



function urlSiteCrop(url) {
    output = url.replace("https://www.kink.com","");
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



