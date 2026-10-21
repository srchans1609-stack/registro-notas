// La lista principal con la que vamos a trabajar
let alumnosRegistro = [...ALUMNOS_INICIALES];

// Elementos del HTML
const tbody = document.getElementById("cuerpoTabla");
const filtroSelect = document.getElementById("filtro");
const ordenSelect = document.getElementById("orden");
const resumenDiv = document.getElementById("resumen");
const btnAnadir = document.getElementById("btnAnadir");
const inputNombre = document.getElementById("inputNombre");
const inputNota = document.getElementById("inputNota");
const mensajeError = document.getElementById("mensajeError");

// Función que dibuja toda la tabla y el resumen
function pintarTabla() {
    // Obtener los valores de los selectores
    const filtro = filtroSelect.value;
    const orden = ordenSelect.value;
    
    // Filtrar y ordenar la lista para mostrarla
    let listaMostrada = filtrarAlumnos(alumnosRegistro, filtro);
    listaMostrada = ordenarAlumnos(listaMostrada, orden);

    // Limpiar la tabla antes de dibujar
    tbody.innerHTML = "";

    // Dibujar las filas
    if (listaMostrada.length === 0) {
        tbody.innerHTML = "<tr><td colspan='3'>No hay alumnos que mostrar</td></tr>";
    } else {
        listaMostrada.forEach(alumno => {
            const tr = document.createElement("tr");
            
            // Colorear aprobados de verde clarito y suspensos de rojo clarito
            if (alumno.nota >= 5) {
                tr.style.backgroundColor = "#e6ffe6";
            } else {
                tr.style.backgroundColor = "#ffe6e6";
            }

            tr.innerHTML = `
                <td>${alumno.nombre}</td>
                <td>${alumno.nota}</td>
                <td><button onclick="borrarFila('${alumno.nombre}')">X</button></td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Dibujar el resumen (usando la lista original de alumnosRegistro)
    const media = notaMedia(alumnosRegistro).toFixed(2);
    const maxima = notaMaxima(alumnosRegistro);
    const numAprobados = aprobados(alumnosRegistro).length;

    resumenDiv.innerHTML = `
        <strong>Resumen de la clase:</strong><br>
        Alumnos totales: ${alumnosRegistro.length} <br>
        Aprobados: ${numAprobados} <br>
        Nota media: ${media} <br>
        Nota máxima: ${maxima !== null ? maxima : 0}
    `;
}

// Función para el botón X de borrar
function borrarFila(nombre) {
    borrarPorNombre(alumnosRegistro, nombre);
    pintarTabla(); // Redibujar todo al borrar
}

// Eventos que disparan el cambio en la tabla
filtroSelect.addEventListener("change", pintarTabla);
ordenSelect.addEventListener("change", pintarTabla);

// Evento para añadir un alumno
btnAnadir.addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    const notaTxt = inputNota.value.trim();
    
    // Limpiar mensaje de error
    mensajeError.textContent = "";

    // Comprobaciones
    if (nombre === "") {
        mensajeError.textContent = "Error: El nombre no puede estar vacío.";
        return;
    }

    if (buscarPorNombre(alumnosRegistro, nombre)) {
        mensajeError.textContent = "Error: Ya existe un alumno con ese nombre.";
        return;
    }

    if (!esNotaValida(notaTxt)) {
        mensajeError.textContent = "Error: La nota debe ser un número entre 0 y 10.";
        return;
    }

    // Si todo está bien, añadir, limpiar inputs y redibujar
    anadirAlumno(alumnosRegistro, nombre, Number(notaTxt));
    inputNombre.value = "";
    inputNota.value = "";
    pintarTabla();
});

// Llamada inicial para que la tabla se pinte nada más abrir la página
pintarTabla();