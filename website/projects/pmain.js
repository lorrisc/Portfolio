let projectContainer = document.querySelector("#carrousel");
console.log(projectList);
projectList.forEach(function (element, index) {
    let newProject = create("article", projectContainer, null, "projects", null);

    let projectPresentation = create("article", newProject, null, "projects__presentation", null);
    projectPresentation.setAttribute("data-aos", "zoom-in-up");

    let projectDivImg = create("div", projectPresentation, null, "projects__presentation__image", null);
    let projectImg = create("img", projectDivImg, null, null, null);
    projectImg.src = element.linkimage;

    let projectDivInfo = create("div", projectPresentation, null, "projects__presentation__text", null);
    let projectTitle = create("h2", projectDivInfo, element.name, null, null);
    projectTitle.setAttribute("data-aos", "fade-up");
    projectTitle.setAttribute("data-aos-duration", 500);
    let projectMoreinfo = create("p", projectDivInfo, "Click for see project", null, null);

    let projectInformations = create("article", newProject, null, "projects__information", null);

    let projectInformationsSection = create("section", projectInformations, null, null, null);

    let dateDiv = create("div", projectInformationsSection, null, "date", null);
    let projectDate = create("h3", dateDiv, "Date", null, null);
    let projectDateValue = create("p", dateDiv, element.date, null, null);

    let roleDiv = create("div", projectInformationsSection, null, "roles", null);
    let projectRole = create("h3", roleDiv, "Rôles", null, null);
    let projectRoleValue = create("p", roleDiv, element.roles, null, null);

    let techsDiv = create("div", projectInformationsSection, null, "techs", null);
    let projectTechs = create("h3", techsDiv, "Techs", null, null);
    let projectTechsValue = create("p", techsDiv, element.techs, null, null);

    if (index % 2 == 0) {
        newProject.classList.add("rightProject");
        projectInformationsSection.setAttribute("data-aos", "zoom-in-right");
    } else {
        newProject.classList.add("leftProject");
        projectInformationsSection.setAttribute("data-aos", "zoom-in-left");
    }
});

let projectPresentation = document.querySelectorAll(".projects__presentation");

projectPresentation.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursor.classList.add("mouseHover");
    });
    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("mouseHover");
    });
});
