// Add sticky class on scroll to create a more dynamic look.
window.onscroll = function() { addStickyHeader() };

var header = document.querySelector(".header");
var sticky = header.offsetTop;

function addStickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
