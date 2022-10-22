let projectContainer = document.querySelector("#carrousel");
projectList.forEach(function (element, index) {
    let newProject = create("article", projectContainer, null, "projects", null);

    let projectPresentation = create("article", newProject, null, "projects__presentation", null);
    projectPresentation.setAttribute("data-aos", "zoom-in-up");

    let projectDivImg = create("div", projectPresentation, null, "projects__presentation__image", null);
    let projectImg = create("img", projectDivImg, null, null, null);
    projectImg.src = element.linkimage[0];

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

    if (index % 2 != 0) {
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

let projectForClick = document.querySelectorAll(".projects__presentation");
projectForClick.forEach((element, index) => {
    element.addEventListener("click", () => {
        let container = create("section", document.body, null, null, "infoSupProject");
        container.setAttribute("data-aos", "flip-down");

        let divContainer = create("div", container, null, null, null);

        let oprojectLeft = create("div", divContainer, null, null, "left");
        let divContainerImg = create("div", oprojectLeft, null, null, "imgContainer");
        let imgProject = create("img", divContainerImg, null, null, null);
        imgProject.src = projectList[index].linkimage[0];
        let titleProject = create("h2", oprojectLeft, projectList[index].name, null, null);

        let sectionInfoProject = create("section", oprojectLeft, null, null, null);
        let divDate = create("div", sectionInfoProject, null, "date", null);
        let dateProject = create("h3", divDate, "Date", null, null);
        let dateProjectValue = create("p", divDate, projectList[index].date, null, null);
        let divRoles = create("div", sectionInfoProject, null, "roles", null);
        let rolesProject = create("h3", divRoles, "Roles", null, null);
        let rolesProjectValue = create("p", divRoles, projectList[index].roles, null, null);
        let divTechs = create("div", sectionInfoProject, null, "techs", null);
        let techsProject = create("h3", divTechs, "Techs", null, null);
        let techsProjectValue = create("p", divTechs, projectList[index].techs, null, null);

        let oprojectRight = create("div", divContainer, null, null, "right");
        let textProject = create("div", oprojectRight, null, null, "textProject");
        for (let i = 0; i < projectList[index].description.length; i++) {
            let p = create("p", textProject, projectList[index].description[i], null, null);
        }

        let divLink = create("div", oprojectRight, null, null, "openProject");
        for (let i = 0; i < projectList[index].linkproject.length; i++) {
            let a = create("a", divLink, null, null, "projectLink");
            a.href = projectList[index].linkproject[i][1];
            a.target = "_blank";
            a.innerHTML = projectList[index].linkproject[i][0];

            a.addEventListener("mouseenter", () => {
                cursor.classList.add("mouseHover");
            });
            a.addEventListener("mouseleave", () => {
                cursor.classList.remove("mouseHover");
            });
        }

        let closeIndic = create("p", container, "Escape for close project", null, "closeIndic");
        let closeButton = create("p", container, "Close project", null, "closeProjectText");
        document.body.style.overflowY = "hidden";

        closeButton.addEventListener("mouseenter", () => {
            cursor.classList.add("mouseHover");
        });
        closeButton.addEventListener("mouseleave", () => {
            cursor.classList.remove("mouseHover");
        });


        closeButton.addEventListener("click", () => {
            removeContainer();
        })


        let buttonImg = create("div", divContainerImg, null, null, "buttonImg");
        let divLeftImg = create("div", buttonImg, null, null, "leftImg");
        let triangleLeft = create("div", divLeftImg, null, "triangleButton", "triangleLeft");
        let divRightImg = create("div", buttonImg, null, null, "rightImg");
        let triangleRight = create("div", divRightImg, null, "triangleButton", "triangleRight");

        let imgIndex = 0;
        divLeftImg.addEventListener("click", () => {
            if (imgIndex > 0) {
                imgIndex--;
                imgProject.src = projectList[index].linkimage[imgIndex];
            }else{
                imgIndex = projectList[index].linkimage.length - 1;
                imgProject.src = projectList[index].linkimage[imgIndex];
            }
        })
        divRightImg.addEventListener("click", () => {
            if (imgIndex < projectList[index].linkimage.length-1) {
                imgIndex++;
                imgProject.src = projectList[index].linkimage[imgIndex];
            }else{
                imgIndex = 0;
                imgProject.src = projectList[index].linkimage[imgIndex];
            }
        })


        let rightLeftButton = document.querySelectorAll("#buttonImg > div");
        rightLeftButton.forEach((element) => {
            element.addEventListener("mouseenter", () => {
                cursor.classList.add("mouseHover");
            });
            element.addEventListener("mouseleave", () => {
                cursor.classList.remove("mouseHover");
            });
        });
    });

    function removeContainer() {
        let container = document.querySelector("#infoSupProject");
        container.remove();
        document.body.style.overflowY = "auto";
    }
    document.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            removeContainer();
        }
    });
});
