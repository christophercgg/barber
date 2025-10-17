// js/main.js
const catalogo = [
  { nombre: "Burts Fade", img: "img/cortes/burtsfade.png" },
  { nombre: "Desvanecido en V", img: "img/cortes/desvanecidov.jpg" },
  { nombre: "Low Fade", img: "img/cortes/lowfade.jpg" },
  { nombre: "Taper Fade", img: "img/cortes/taperfade.jpg" },
  { nombre: "Mohicano Medio", img: "img/cortes/mohicanomedio.jpg" },
  { nombre: "Haig Fade", img: "img/cortes/haigfade.jpg" },
  { nombre: "Variedad de diseños", img: "img/cortes/diseño.png" },
];

const grid = document.querySelector(".grid");
grid.innerHTML = catalogo
  .map(
    (corte) => `
    <div class="card">
      <img src="${corte.img}" alt="${corte.nombre}">
      <h3>${corte.nombre}</h3>
    </div>`
  )
  .join("");
