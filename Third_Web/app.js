const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function BtnClick(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage.setItem("key", "value"); or getItem, removeItem.

if (localStorage.getItem("username") == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", BtnClick);
}
else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${localStorage.getItem("username")}`;
}