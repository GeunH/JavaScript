const images = [
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `img/${chosenImage}`;
image.classList.add("background-image");

document.body.appendChild(image);