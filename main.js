function create(tag, parent, text = null, classs = null, id = null) {
    let element = document.createElement(tag);

    if (text) element.appendChild(document.createTextNode(text));
    parent.appendChild(element);
    if (classs) element.classList.add(classs);
    if (id) element.id = id;

    return element;
}

//*user mouse
let newCursor = create("div", document.body, null, "cursor", null);
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.setAttribute("style", "top: " + (e.pageY - 17) + "px; left: " + (e.pageX - 17) + "px;");
});
document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
    document.addEventListener("mouseup", () => {
        cursor.classList.remove("click");
    });
});

//*bottom navbar
let navLink = document.querySelectorAll("nav a");
navLink.forEach((element, index) => {
    //*cursor style
    element.addEventListener("mouseenter", () => {
        cursor.classList.add("mouseHover");
    });
    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("mouseHover");
    });
    element.addEventListener("click", () => {
        actualLinkPage = window.location.href;
        if (index == 0) {
            //*ask link is project page
            askPage = "index.html";
            if (actualLinkPage.includes(askPage)) {
                console.log("same page");
            } else {
                createTransition();
                setTimeout(() => {
                    window.location.href = "../index.html";
                }, 850);
            }
        } else if (index == 1) {
            //*ask link is project page
            askPage = "aboutP.html";
            if (actualLinkPage.includes(askPage)) {
                console.log("same page");
            } else {
                createTransition();
                setTimeout(() => {
                    window.location.href = "about/aboutP.html";
                }, 850);
            }
        }
    });
});

//*transition between page
let pageTransition = document.querySelector(".pageTransition");
function createTransition() {
    pageTransition.classList.remove("desactive");
    pageTransition.classList.add("animationSlideUp");
    setTimeout(() => {
        pageTransition.classList.add("endAnimation");
    }, 400);
}

//*left link button
let containerButton = create("section", document.body, null, "containerButton")

let CVbutton = create("a", containerButton, null, "leftButton");
let CVIconButton = create("i",CVbutton, null )
CVIconButton.classList.add("fa-solid")
CVIconButton.classList.add("fa-file-lines")
CVIconButton.classList.add("fa-xl")
CVbutton.href='/assets/aboutAssets/curriculumVitae.pdf'
CVbutton.setAttribute("target", "_blank");



let githubButton = create("a", containerButton, null, "leftButton");
let githubIconButton = create("i",githubButton, null )
githubIconButton.classList.add("fa-brands")
githubIconButton.classList.add("fa-github")
githubIconButton.classList.add("fa-xl")
githubButton.href='https://github.com/lorrisc'
githubButton.setAttribute("target", "_blank");

//* MOUSE ANIMATION ON HOVER LINK
let buttonLink = document.querySelectorAll(".leftButton");

buttonLink.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
        cursor.classList.add("mouseHover");
    });
    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("mouseHover");
    });
});


//*credit
let creditContainer = create("div", document.body, null, "credit", null);
let creditText = "Developed by Lorris Crappier";
let creditTextArray = creditText.split("");
creditTextArray.forEach((element) => {
    if (element == " ") {
        let letter = create("p", creditContainer, " ", null, null);
        letter.style.marginRight = "5px";
    } else {
        let letter = create("p", creditContainer, element, null, null);
    }
});

//*credit on hover
let colorElement = [
    "#BBFF00",
    "#BBFF00",
    "#D4FF00",
    "#D4FF00",
    "#EEFF00",
    "#EEFF00",
    "#FFF600",
    "#FFF600",
    "#FFDC00",
    "#FFDC00",
    "#FFDC00",
    "#FFC300",
    "#FFC300",
    "#FFC300",
    "#FFAA00",
    "#FFAA00",
    "#FF9400",
    "#FF9400",
    "#FF7B00",
    "#FF7B00",
    "#FF7B00",
    "#FF6100",
    "#FF6100",
    "#FF4800",
    "#FF4800",
    "#FF2E00",
    "#FF2E00",
    "#FF1500",
];
let creditLetter = document.querySelectorAll(".credit p");
creditContainer.addEventListener("mouseenter", (e) => {
    let i = 0;
    function uncolorElementFunc(indexelement) {
        setTimeout(() => {
            creditLetter[indexelement].style.color = "#939393";
        }, 600);
    }
    function colorElementFunct() {
        creditLetter[i].style.color = colorElement[i];
        uncolorElementFunc(i);
        i++;
        if (i < creditLetter.length) {
            setTimeout(colorElementFunct, 35);
        }
    }
    colorElementFunct();
});

//*scroll indicator
let scrollDown = document.querySelector("#scrollDown"); //bottom text indicator
let scrollValue = [0];

addEventListener("scroll", function () {
    var y = window.scrollY;
    scrollValue[1] = y;
    cursor.setAttribute("style", "top: " + (scrollValue[0] - scrollValue[1] - 17) + "px;");
    scrollValue[0] = y;

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    let scrollIndicator = document.querySelector("#scrollIndicator");
    scrollIndicator.style.height = scrolled + "%";

    //bottom text indicator
    if (scrollDown) {
        scrollDown.classList.add("notActive");
    }
});
