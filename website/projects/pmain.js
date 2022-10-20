let scrollDown = document.querySelector('#scrollDown');

addEventListener("scroll", function () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    let scrollIndicator = document.querySelector("#scrollIndicator");
    scrollIndicator.style.height = scrolled + "%";

    if(scrollDown){
        scrollDown.classList.add("notActive")
    }
});



let projectPresentation = document.querySelectorAll(".projects__presentation")

projectPresentation.forEach(element => {
    element.addEventListener("mouseenter", () => {
        cursor.classList.add("mouseHover")
    })
    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("mouseHover")
    })
});