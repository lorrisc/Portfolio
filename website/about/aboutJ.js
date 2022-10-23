
window.addEventListener('onload', (event) => {
    let pageTransition = document.querySelector(".pageTransition");
    pageTransition.classList.add("endAnimation");
  });
window.addEventListener('load', (event) => {
    pageTransition.classList.remove("endAnimation");
  });


let curriculumvitae = document.querySelector("#curriculumVitae");

curriculumvitae.addEventListener("mouseenter", () => {
    cursor.classList.add("mouseHover");
});
curriculumvitae.addEventListener("mouseleave", () => {
    cursor.classList.remove("mouseHover");
});

let contact = document.querySelector("#mailLink");

contact.addEventListener("mouseenter", () => {
    cursor.classList.add("mouseHover");
});
contact.addEventListener("mouseleave", () => {
    cursor.classList.remove("mouseHover");
});

sessionStorage.clear();
sessionStorage.setItem("visitStatus", "true");
