let linuxCommande = "> cd /home/lorriscrappier/portfolio";
let linuxCommandeParsed = linuxCommande.split("");

//*--------------- LOADER CREATE FUNCTION
function loadercreate(tag, parent, text = null, classs = null) {
    let element = document.createElement(tag);
    if (text) element.appendChild(document.createTextNode(text));
    parent.appendChild(element);
    if (classs) element.classList.add(classs);
}

let visitStatus;
window.addEventListener("DOMContentLoaded", () => {
    visitStatus = sessionStorage.getItem("visitStatus");
    //*ON OPEN WEBSITE ONLY
    if (visitStatus == null) {
        document.body.classList.add("noscroll");

        let loader = document.querySelector("#loader");

        let element = 0;
        //*write linux command
        function apparitionKeyboard(timeEvent, element) {
            let listLettter = document.querySelectorAll("#loader p");
            listLettter[element].style.backgroundColor = "#20C20E";
            setTimeout(() => {
                listLettter[element].style.backgroundColor = "#0E0F0E";
            }, timeEvent);
        }

        function writeCommande() {
            let randomTime = Math.random() * (85 - 45) + 45; //*random time for realism
            let letter;
            if (linuxCommandeParsed[element] == " ") {
                letter = loadercreate("p", loader, linuxCommandeParsed[element], "spaceLetter");
            } else {
                letter = loadercreate("p", loader, linuxCommandeParsed[element]);
            }
            apparitionKeyboard(randomTime, element);
            if (element < linuxCommandeParsed.length) {
                setTimeout(() => {
                    element++;
                    writeCommande(element);//*next letter
                }, randomTime);
            } else if (element == linuxCommandeParsed.length) {
                //*create last space
                lastSpace = loadercreate("p", loader, null, "spaceLetter");
                let lastSpaceSelect = document.querySelector("#loader p:last-child");
                lastSpaceSelect.style.height = "30px";
                lastSpaceSelect.style.width = "13px";
                lastSpaceSelect.style.backgroundColor = "#20C20E";
                //*blinking
                setTimeout(() => {
                    lastSpaceSelect.style.backgroundColor = "#0E0F0E";
                    setTimeout(() => {
                        let loader = document.querySelector("#loader");
                        loader.classList.add("finishLoader");
                        document.body.classList.remove("noscroll");
                    }, 300);
                }, 250);
            }
        }
        writeCommande();
        //*now the site is already open (if user go on about page and recoming on home)
        sessionStorage.setItem("visitStatus", "true");
    } else {
        let loader = document.querySelector("#loader");
        loader.classList.add("noLoader");
    }
});
