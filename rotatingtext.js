const textContent = [
  "20% rabatt på bokningar online",
  "Garanterade skinande resultat",
  "100+ nöjda kunder"
];

let z = 0;

const span = document.getElementById("textSpan");

setInterval(() => {
  span.style.opacity = 0;

  setTimeout(() => {
    span.textContent = textContent[z];
    span.style.opacity = 1;
    z = (z + 1) % textContent.length;
  }, 1000);
}, 7000);
