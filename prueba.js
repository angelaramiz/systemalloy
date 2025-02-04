import {Alloys} from "./Alloy.js"

document.getElementById('calcular').addEventListener("click", function(event) {
  event.preventDefault();
  let ale = document.getElementById('aleacion').value;
  let unit = parseFloat(document.getElementById('cantidad').value);
  let tabla = document.getElementById('tabla');
  tabla.innerHTML = '';
  generarTabla(ale, unit, tabla);
});

function generarTabla(ale, unit, tabla) {
  let receta = Alloys.get(ale);

  if (!receta) {
    tabla.innerHTML = "Perdón, no conozco la aleación.";
    return;
  }

  let contenidoTabla = '';  // No hay encabezados principales
  
  let ingredientesPorAleacion = new Map();

  function calcularIngredientes(aleacion, cantidad) {
    let recetaAleacion = Alloys.get(aleacion);

    if (!recetaAleacion) {
      return;
    }

    for (let [ingrediente, valor] of recetaAleacion) {

      if (!ingredientesPorAleacion.has(aleacion)) {
        ingredientesPorAleacion.set(aleacion, []);
      }

      ingredientesPorAleacion.get(aleacion).push([ingrediente, valor * cantidad]);

      calcularIngredientes(ingrediente, valor * cantidad);
    }
  }

  calcularIngredientes(ale, unit);

  // Generar el contenido de la tabla agrupado por aleación
  ingredientesPorAleacion.forEach((ingredientes, aleacion) => {
    contenidoTabla += `<tr><th colspan="3">${aleacion}</th></tr>`;
    contenidoTabla += `<tr><th>Ingrediente</th><th>Cantidad</th></tr>`;
    ingredientes.forEach(([ingrediente, cantidadIngredientes]) => {
      contenidoTabla += `<tr><td>${ingrediente}</td><td>${cantidadIngredientes}</td></tr>`;
    });
  });
  if(receta.size >= 3) {

    let ingredientesTotales = new Map();

    ingredientesPorAleacion.forEach(ingredientes => {
      ingredientes.forEach(([ingrediente, cantidad]) => {
        if(!ingredientesTotales.has(ingrediente)) {
          ingredientesTotales.set(ingrediente, 0);
        }
        ingredientesTotales.set(ingrediente, ingredientesTotales.get(ingrediente) + cantidad);  
      });
    });

    contenidoTabla += `<tr><th colspan="3">Resumen de ingredientes totales</th></tr>`;
    contenidoTabla += `<tr><th>Ingrediente</th><th>Cantidad</th></tr>`;
    
    for(let [ingrediente, cantidad] of ingredientesTotales) {
      contenidoTabla += `<tr><td>${ingrediente}</td><td>${cantidad}</td></tr>`;
    }
  }
  tabla.innerHTML = contenidoTabla;
}

document.getElementById('btn').addEventListener("click", function(event) {
  event.preventDefault();
  limpiarCamposYTabla();
});

function limpiarCamposYTabla() {
  let aleacionInput = document.getElementById('aleacion');
  let cantidadInput = document.getElementById('cantidad');
  let tabla = document.getElementById('tabla');

  aleacionInput.value = '';
  cantidadInput.value = '';
  tabla.innerHTML = '';
}
