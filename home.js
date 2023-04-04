// -----For Scroll starts here ------//

window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY>0);
})


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

//  when use hit the ENTER key the theme of the website
// document.onkeydown = function (e) {
//     e = e || window.event;

//     if (e.keyCode === 13) {
//         document.documentElement.classList.toggle('dark-mode')
//         document.querySelectorAll('.inverted').forEach((result) => {
//             result.classList.toggle("invert")
//         })
//     }
// }








