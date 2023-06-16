const h1 = document.querySelector(".hello:first-child h1");


console.dir(h1)
function handleTitleClick() {
    h1.classList.toggle("clicked");
}

function handleWindowResize() {
    var width = window.innerWidth;

    if (width > 1000) {
        document.body.style.backgroundColor = "gold";
    }
    else if (width > 600) {
        document.body.style.backgroundColor = "mediumslateblue";
    }
    else {
        document.body.style.backgroundColor = "powderblue";
    }
}

window.addEventListener("resize", handleWindowResize);
