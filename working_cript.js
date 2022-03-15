let listDeletes = [
    "/chennal/somestuff1",
    "/chennal/somestuff2",
    "/chennal/somestuff3",
    "/chennal/somestuff4",
    "/chennal/somestuff5",
    "/chennal/somestuff6",
    "/chennal/somestuff7",
    "/chennal/somestuff8",
    "/chennal/somestuff9",
];

function delBoxes() {

    for (let i = 0; i < listDeletes.length; i++) {
        document.querySelectorAll(`li a[href^="${listDeletes[i]}"`).forEach(e => e.closest('li').remove());
    }
}
delBoxes();

const observer = new MutationObserver(function (mutation) {
    mutation.forEach(function (mutation) {
        if (mutation.addedNodes.length) {
            delBoxes();
        }
    })
});
const playlistWrapper = document.querySelector('#videoPlaylist');
observer.observe(playlistWrapper, {
    childList: true
})
