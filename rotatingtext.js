const textContent = [
  "ble ble ble",
  "blu blu blu",
  "HUUUP",
  "blublublublublublbubl",
];

let z = 0;

const span = document.getElementById("textSpan");

setInterval(() => {
  span.style.opacity = 0.8;

  setTimeout(() => {
    span.textContent = textContent[z];
    span.style.opacity = 1;
    z = (z + 1) % textContent.length;
  }, 600);
}, 3000);
