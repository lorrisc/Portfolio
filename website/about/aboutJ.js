let projectsButton = document.querySelector("#buttonProjects");
projectsButton.addEventListener("click", () => {
    window.location.href = "../index.html";
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
