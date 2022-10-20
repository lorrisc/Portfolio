



let projectPresentation = document.querySelectorAll(".projects__presentation")

projectPresentation.forEach(element => {
    element.addEventListener("mouseenter", () => {
        cursor.classList.add("mouseHover")
    })
    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("mouseHover")
    })
});