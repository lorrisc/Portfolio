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

document.addEventListener("scroll", (event) => {});

document.addEventListener("click", () => {
    cursor.classList.add("mouseclick");
    setTimeout(() => {
        cursor.classList.remove("mouseclick");
    }, 500);
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
