const NumInput = document.querySelector("#num-form h2 input");
const GuessInput = document.querySelector("#num-form h3 input");
const loginForm = document.querySelector("#num-form");

const Btn = document.querySelector("#num-form h3 button");

const result = document.getElementsByClassName("result");

console.dir(Btn);

function HandleOnBtn(event) {
    event.preventDefault();
    console.log(GuessInput.value);
    if (NumInput.value === "" || GuessInput.value === "") {
        alert("Enter Numbers!!");
        return;
    }
    const num = Math.floor(Math.random() * NumInput.value);

    result[0].innerText =
        `You chose: ${GuessInput.value}, the machine chose ${num}.`;
    if (GuessInput.value == num) {
        result[0].innerText += "\nYou Win!";
    }
    else {
        result[0].innerText += "\nYou Lost!";
    }

}

Btn.addEventListener("click", HandleOnBtn);