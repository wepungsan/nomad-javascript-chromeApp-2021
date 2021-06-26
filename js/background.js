const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector('body');

console.dir(body);
console.log(chosenImage);

body.style.backgroundImage = `url(img/${chosenImage})`;
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";

