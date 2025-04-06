import { series } from "./data.js";
import { Serie } from "./Serie.js";

const tableBody = document.getElementById("tabla-series")?.getElementsByTagName("tbody")[0] as HTMLTableSectionElement;

function mostrarSeries(): void {
  series.forEach((serie: Serie) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.nombre}</td>
      <td>${serie.canal}</td>
      <td>${serie.temporadas}</td>
    `;

    tableBody.appendChild(fila);
  });
}

mostrarSeries();
