let linuxCommande = "> cd /home/lorriscrappier/portfolio";
let linuxCommandeParsed = linuxCommande.split("");
function loadercreate(tag, parent, text = null, classs = null) {
    let element = document.createElement(tag);
    if (text) element.appendChild(document.createTextNode(text));
    parent.appendChild(element);
    if (classs) element.classList.add(classs);
}

let visitStatus;
console.log(visitStatus);
window.addEventListener("DOMContentLoaded", () => {
    visitStatus = sessionStorage.getItem("visitStatus");
    console.log(visitStatus);
    if (visitStatus == null) {
        document.body.classList.add("noscroll");
        let loader = document.querySelector("#loader");

        let element = 0;
        function apparitionKeyboard(timeEvent, element) {
            let listLettter = document.querySelectorAll("#loader p");
            listLettter[element].style.backgroundColor = "#20C20E";
            setTimeout(() => {
                listLettter[element].style.backgroundColor = "#0E0F0E";
            }, timeEvent);
        }

        function writeCommande() {
            let randomTime = Math.random() * (85 - 45) + 45;
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
                    writeCommande(element);
                }, randomTime);
            } else if (element == linuxCommandeParsed.length) {
                lastSpace = loadercreate("p", loader, null, "spaceLetter");
                let lastSpaceSelect = document.querySelector("#loader p:last-child");
                lastSpaceSelect.style.height = "30px";
                lastSpaceSelect.style.width = "13px";
                lastSpaceSelect.style.backgroundColor = "#20C20E";
                setTimeout(() => {
                    lastSpaceSelect.style.backgroundColor = "#0E0F0E";
                    // setTimeout(() => {
                    //     lastSpaceSelect.style.backgroundColor = "#20C20E";
                    //     setTimeout(() => {
                    //         lastSpaceSelect.style.backgroundColor = "#0E0F0E";
                    //     },300);
                    // },600);
                    setTimeout(() => {
                        let loader = document.querySelector("#loader");
                        loader.classList.add("finishLoader");
                        document.body.classList.remove("noscroll");
                    }, 300);
                }, 250);
            }
        }
        writeCommande();
        sessionStorage.setItem("visitStatus", "true");
    }else{
        let loader = document.querySelector("#loader");
        loader.classList.add("noLoader");

    }
});
