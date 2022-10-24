//*--------- PAGE TRANSITION
window.addEventListener("onload", (event) => {
    let pageTransition = document.querySelector(".pageTransition");
    pageTransition.classList.add("endAnimation");
});
window.addEventListener("load", (event) => {
    pageTransition.classList.remove("endAnimation");
});

//*--------- CV
let curriculumvitae = document.querySelector("#curriculumVitae");

//*mouse appareance
curriculumvitae.addEventListener("mouseenter", () => {
    cursor.classList.add("mouseHover");
});
curriculumvitae.addEventListener("mouseleave", () => {
    cursor.classList.remove("mouseHover");
});

//*mail button appareance
let contact = document.querySelector("#mailLink");

contact.addEventListener("mouseenter", () => {
    cursor.classList.add("mouseHover");
});
contact.addEventListener("mouseleave", () => {
    cursor.classList.remove("mouseHover");
});

//*for the first linux command transition
sessionStorage.clear();
sessionStorage.setItem("visitStatus", "true");
