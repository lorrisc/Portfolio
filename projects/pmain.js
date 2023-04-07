//*--------------- CREATE ELEMENT
let projectContainer = document.querySelector("#carrousel");
projectList.forEach(function (element, index) {
    let newProject = create("article", projectContainer, null, "projects", null);

    let projectPresentation = create("article", newProject, null, "projects__presentation", null);
    projectPresentation.setAttribute("data-aos", "zoom-in-up");

    let projectDivImg = create("div", projectPresentation, null, "projects__presentation__image", null);
    let projectImg = create("img", projectDivImg, null, null, null);
    projectImg.setAttribute("loading", "lazy");

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

    if (element.roles) {
        let roleDiv = create("div", projectInformationsSection, null, "roles", null);
        let projectRole = create("h3", roleDiv, "Rôles", null, null);
        let projectRoleValue = create("p", roleDiv, element.roles, null, null);
    }

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

//* MOUSE ANIMATION ON HOVER PROJECT
let projectPresentation = document.querySelectorAll(".projects__presentation");
let clickForSee = document.querySelectorAll(".projects__presentation__text p");

projectPresentation.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
        cursor.classList.add("mouseHover");
        clickForSee[index].classList.add("activeMouse");
    });
    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("mouseHover");
        clickForSee[index].classList.remove("activeMouse");
    });
});

//*--------------- OPEN THE PROJECT FOR MORE INFORMATION
let projectForClick = document.querySelectorAll(".projects__presentation");
projectForClick.forEach((element, index) => {
    element.addEventListener("click", () => {
        //*CREATE ELEMENT
        let container = create("section", document.body, null, null, "infoSupProject");
        container.setAttribute("data-aos", "flip-down");

        let divContainer = create("div", container, null, null, null);

        let oprojectLeft = create("div", divContainer, null, null, "left");
        let divContainerImg = create("div", oprojectLeft, null, null, "imgContainer");
        let imgProject = create("img", divContainerImg, null, null, null);
        imgProject.src = projectList[index].linkimage[0];
        let divTextInfo = create("div", oprojectLeft, null, null, null);
        let titleProject = create("h2", divTextInfo, projectList[index].name, null, null);

        let sectionInfoProject = create("section", divTextInfo, null, null, null);
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

        //*PROJECT LINK
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

        //*CLOSE BUTTON
        let closeIndic = create("p", document.body, "Escape for close project - Click on image for fullscreen", null, "closeIndic");
        let closeButton = create("p", document.body, "Close project", null, "closeProjectText");
        document.body.style.overflowY = "hidden";

        closeButton.addEventListener("mouseenter", () => {
            cursor.classList.add("mouseHover");
        });
        closeButton.addEventListener("mouseleave", () => {
            cursor.classList.remove("mouseHover");
        });

        closeButton.addEventListener("click", () => {
            removeContainer();
        });

        if (projectList[index].linkimage.length > 1) {
            //*CREATE SLIDER
            let buttonImg = create("div", divContainerImg, null, null, "buttonImg");
            let divLeftImg = create("div", buttonImg, null, null, "leftImg");
            let triangleLeft = create("div", divLeftImg, null, "triangleButton", "triangleLeft");
            let divRightImg = create("div", buttonImg, null, null, "rightImg");
            let triangleRight = create("div", divRightImg, null, "triangleButton", "triangleRight");

            //*CHANGE IMAGE
            let imgIndex = 0;
            divLeftImg.addEventListener("click", () => {
                if (imgIndex > 0) {
                    imgIndex--;
                    imgProject.src = projectList[index].linkimage[imgIndex];
                } else {
                    imgIndex = projectList[index].linkimage.length - 1;
                    imgProject.src = projectList[index].linkimage[imgIndex];
                }
            });
            divRightImg.addEventListener("click", () => {
                if (imgIndex < projectList[index].linkimage.length - 1) {
                    imgIndex++;
                    imgProject.src = projectList[index].linkimage[imgIndex];
                } else {
                    imgIndex = 0;
                    imgProject.src = projectList[index].linkimage[imgIndex];
                }
            });

            let rightLeftButton = document.querySelectorAll("#buttonImg > div");
            rightLeftButton.forEach((element) => {
                element.addEventListener("mouseenter", () => {
                    cursor.classList.add("mouseHover");
                });
                element.addEventListener("mouseleave", () => {
                    cursor.classList.remove("mouseHover");
                });
            });
        } else {
            let allTitle = document.querySelector("#infoSupProject h2");
            allTitle.style.marginTop = "0px";
        }

        //*FULL SCREEN IMG
        if (window.screen.width >= 1300) {
            let imgcarousel = document.querySelector("#imgContainer img");
            function fullscreenimg(imageslinks) {
                let divContainerImgFS = create("div", document.body, null, null, "imgContainerfs");
                let containerFS = create("div", divContainerImgFS, null, null, "containerFS");
                let imgProjectfs = create("img", containerFS, null, null, null);
                imgProjectfs.src = projectList[index].linkimage[0];

                let closeButtonfs = create("p", document.body, "Close images", null, "closeProjectTextfs");

                closeButtonfs.addEventListener("mouseenter", () => {
                    cursor.classList.add("mouseHover");
                });
                closeButtonfs.addEventListener("mouseleave", () => {
                    cursor.classList.remove("mouseHover");
                });
                if (projectList[index].linkimage.length > 1) {
                    //*CREATE SLIDER
                    let buttonImgfs = create("div", containerFS, null, null, "buttonImg");
                    let divLeftImgfs = create("div", buttonImgfs, null, null, "leftImg");
                    let triangleLeftfs = create("div", divLeftImgfs, null, "triangleButton", "triangleLeft");
                    let divRightImgfs = create("div", buttonImgfs, null, null, "rightImg");
                    let triangleRightfs = create("div", divRightImgfs, null, "triangleButton", "triangleRight");

                    //*CHANGE IMAGE
                    let imgIndexfs = 0;
                    divLeftImgfs.addEventListener("click", () => {
                        if (imgIndexfs > 0) {
                            imgIndexfs--;
                            imgProjectfs.src = projectList[index].linkimage[imgIndexfs];
                        } else {
                            imgIndexfs = projectList[index].linkimage.length - 1;
                            imgProjectfs.src = projectList[index].linkimage[imgIndexfs];
                        }
                    });
                    divRightImgfs.addEventListener("click", () => {
                        if (imgIndexfs < projectList[index].linkimage.length - 1) {
                            imgIndexfs++;
                            imgProjectfs.src = projectList[index].linkimage[imgIndexfs];
                        } else {
                            imgIndexfs = 0;
                            imgProjectfs.src = projectList[index].linkimage[imgIndexfs];
                        }
                    });
                    let rightLeftButton = document.querySelectorAll("#buttonImg > div");
                    rightLeftButton.forEach((element) => {
                        element.addEventListener("mouseenter", () => {
                            cursor.classList.add("mouseHover");
                        });
                        element.addEventListener("mouseleave", () => {
                            cursor.classList.remove("mouseHover");
                        });
                    });

                    let rightLeftButtonfs = document.querySelectorAll("#buttonImgfs > div");
                    rightLeftButtonfs.forEach((element) => {
                        element.addEventListener("mouseenter", () => {
                            cursor.classList.add("mouseHover");
                        });
                        element.addEventListener("mouseleave", () => {
                            cursor.classList.remove("mouseHover");
                        });
                    });
                }

                function removeContainerfs() {
                    divContainerImgFS.remove();

                    closeProjectTextfs.remove();
                }
                document.addEventListener("keydown", (e) => {
                    if (e.key == "Escape") {
                        removeContainerfs();
                    }
                });
                closeProjectTextfs.addEventListener("click", () => {
                    removeContainerfs();
                });
            }
            imgcarousel.addEventListener("click", () => {
                fullscreenimg(projectList[index].linkimage);
            });
            imgcarousel.addEventListener("mouseenter", () => {
                cursor.classList.add("mouseHover");
            });
            imgcarousel.addEventListener("mouseleave", () => {
                cursor.classList.remove("mouseHover");
            });
        }
    });

    function removeContainer() {
        let container = document.querySelector("#infoSupProject");
        container.remove();

        let closeIndic = document.querySelector("#closeIndic");
        let closeProjectText = document.querySelector("#closeProjectText");
        closeIndic.remove();
        closeProjectText.remove();

        document.body.style.overflowY = "auto";
    }
    document.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            removeContainer();
        }
    });
});
