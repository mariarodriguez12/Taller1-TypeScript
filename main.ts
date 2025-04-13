import { series } from "./data.js";
import { Serie } from "./Serie.js";

const tableBody = document.getElementById("tabla-series")?.getElementsByTagName("tbody")[0] as HTMLTableSectionElement;
const detailContainer: HTMLElement = document.getElementById("detailContainer")!;

function mostrarSeries(): void {
  series.forEach((serie: Serie) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.nombre}</td>
      <td>${serie.canal}</td>
      <td>${serie.temporadas}</td>
    `;

    fila.addEventListener("click", () => {
      mostrarDetalle(serie);
    });

    tableBody.appendChild(fila);
  });

  const promedio = calcularPromedioTemporadas();
  const filaPromedio = document.createElement("tr");

  filaPromedio.innerHTML = `
    <td colspan="3">Seasons average</td>
    <td>${promedio.toFixed(2)}</td>
  `;

  tableBody.appendChild(filaPromedio);
}

function calcularPromedioTemporadas(): number {
  let totalSeasons = series.reduce((sum, serie) => sum + serie.temporadas, 0);
  return totalSeasons / series.length;
}


function mostrarDetalle(serie: Serie): void {
  detailContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${serie.imagen}" class="card-img-top" alt="${serie.nombre}">
      <div class="card-body">
        <h5 class="card-title">${serie.nombre}</h5>
        <p class="card-text">${serie.descripcion}</p>
        <a href="${serie.url}" target="_blank">${serie.url}</a>
      </div>
    </div>
  `;
}

mostrarSeries();
