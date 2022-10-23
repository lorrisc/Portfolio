function create(tag, parent, text = null, classs = null, id = null) {
    let element = document.createElement(tag);

    if (text) element.appendChild(document.createTextNode(text));
    parent.appendChild(element);
    if (classs) element.classList.add(classs);
    if (id) element.id = id;

    return element;
}

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

let navLink = document.querySelectorAll("nav a");

let pageTransition = document.querySelector(".pageTransition");
function createTransition() {
    pageTransition.classList.remove("desactive");
    pageTransition.classList.add("animationSlideUp");
    setTimeout(() => {
        pageTransition.classList.add("endAnimation");
    }, 400);
}
navLink.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
        cursor.classList.add("mouseHover");
    });
    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("mouseHover");
    });
    element.addEventListener("click", () => {
        actualLinkPage = window.location.href;
        if (index == 0) {
            askPage = "index.html";
            if (actualLinkPage.includes(askPage)) {
                console.log("same page");
            } else {
                // pageTransition.classList.add("pageTransition");
                createTransition();
                console.log("sropikhvrpoise");
                setTimeout(() => {
                    window.location.href = "../index.html";
                }, 850);
            }
        } else if (index == 1) {
            askPage = "aboutP.html";
            if (actualLinkPage.includes(askPage)) {
                console.log("same page");
            } else {
                // pageTransition.classList.add("pageTransition");
                createTransition();
                setTimeout(() => {
                    window.location.href = "about/aboutP.html";
                }, 850);
            }
        }
    });
});

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
// creditContainer.addEventListener("mouseleave", (e) => {
//     leave = true;
//     creditLetter.forEach((element, index) => {
//         element.style.color = "#939393";
//     });
//     setTimeout(() => {
//         leave = false;
//     }, 1000);
// });

let scrollDown = document.querySelector("#scrollDown");
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

    if (scrollDown) {
        scrollDown.classList.add("notActive");
    }
});
