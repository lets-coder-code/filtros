let etiquetaAutor = document.getElementById("autor");
let radio_200 = document.getElementById("radio-200");
let radio_400 = document.getElementById("radio-400");
let radio_600 = document.getElementById("radio-600");
let radio_800 = document.getElementById("radio-800");
let radio_1000 = document.getElementById("radio-1000");
let elementosRadio = document.getElementsByClassName("clase-radio");
let cuerpoTabla = document.getElementById("cuerpo-tabla");

let iniciar = function () {
  let autor = etiquetaAutor.value;
  let libros = obtenerLibros(autor);
  let librosObtenidos = filtrarLibrosPorPaginas(libros);
  limpiarPagina();
  pintarLibrosObtenidos(librosObtenidos);
};

let obtenerLibros = function (autorElegido) {
  let librosAutor = [];
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].author == autorElegido) {
      librosAutor.push(libros[i]);
    }
  }
  return librosAutor;
};

let filtrarLibrosPorPaginas = function (librosSeleccionados) {
  let librosFiltrados = [];
  for (let i = 0; i < librosSeleccionados.length; i++) {
    if (radio_200.checked == true && librosSeleccionados[i].pages < 200) {
      librosFiltrados.push(librosSeleccionados[i]);
    } else if (
      radio_400.checked == true &&
      librosSeleccionados[i].pages < 400
    ) {
      librosFiltrados.push(librosSeleccionados[i]);
    } else if (
      radio_600.checked == true &&
      librosSeleccionados[i].pages < 600
    ) {
      librosFiltrados.push(librosSeleccionados[i]);
    } else if (
      radio_800.checked == true &&
      librosSeleccionados[i].pages < 800
    ) {
      librosFiltrados.push(librosSeleccionados[i]);
    } else if (
      radio_1000.checked == true &&
      librosSeleccionados[i].pages < 1000
    ) {
      librosFiltrados.push(librosSeleccionados[i]);
    } else if (
      radio_200.checked == false &&
      radio_400.checked == false &&
      radio_600.checked == false &&
      radio_800.checked == false &&
      radio_1000.checked == false
    ) {
      librosFiltrados = librosSeleccionados;
    }
  }
  if (librosFiltrados.length == 0) {
    return libros;
  }
  return librosFiltrados;
};

let pintarLibrosObtenidos = function(arrayLibrosObtenidos){
  for(let i=0; i<arrayLibrosObtenidos.length; i++){
    pintarLibro(arrayLibrosObtenidos[i]);
  }
}

let pintarLibro = function(obj) {
  let tr = document.createElement("tr");
  tr.innerHTML = `<td>${obj.title}</td><td>${obj.author}</td><td>${obj.year}</td><td>${obj.language}</td><td>${obj.pages}</td>`;
  cuerpoTabla.appendChild(tr);
};

let limpiarPagina = function () {
  etiquetaAutor.value = "";
  for (let i = 0; i < elementosRadio.length; i++) {
    elementosRadio[i].checked = false;
  }
  cuerpoTabla.innerHTML = "";
};

pintarLibrosObtenidos(libros);
