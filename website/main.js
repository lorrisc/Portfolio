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

navLink.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursor.classList.add("mouseHover");
    });
    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("mouseHover");
    });
});

let credit = create("p", document.body, "Developped by Lorris Crappier", "credit", null);

let scrollDown = document.querySelector("#scrollDown");
let scrollValue = [0];

addEventListener("scroll", function () {
    var y = window.scrollY;
    scrollValue[1]=y
    cursor.setAttribute("style", "top: " + (scrollValue[0]-scrollValue[1] - 17) + "px;");
    scrollValue[0]=y


    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    
    let scrollIndicator = document.querySelector("#scrollIndicator");
    scrollIndicator.style.height = scrolled + "%";
    
    if (scrollDown) {
        scrollDown.classList.add("notActive");
    }
    
});
