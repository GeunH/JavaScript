const h1 = document.querySelector(".hello:first-child h1");


console.dir(h1)
function handleTitleClick() {
    h1.innerText = "That was a right Click!";
    h1.style.color = "tomato";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
    h1.style.color = "aquamarine";
}

function handleMouseLeave() {
    h1.innerText = "The Mouse is Gone!";
    h1.style.color = "skyblue";
}

function handleWindowResize() {
    h1.innerText = "You Just Resized !";
    h1.style.color = "purple";
}

window.addEventListener("contextmenu", handleTitleClick)


// title.onclick = handleTitleClick; 
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
