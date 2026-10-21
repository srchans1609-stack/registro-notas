const ALUMNOS_INICIALES = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9.25 },
  { nombre: "Pablo", nota: 5 },
  { nombre: "Lucía", nota: 10 },
  { nombre: "Diego", nota: 3.5 },
  { nombre: "Elena", nota: 6.75 },
  { nombre: "Hugo", nota: 9 },
  { nombre: "Sara", nota: 1 },
  { nombre: "Iván", nota: 5.5 }
];

/**
 * Añade un nuevo alumno al final de la lista.
 * CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @param {string} nombre - El nombre del alumno.
 * @param {number} nota - La nota del alumno.
 * @returns {number} La nueva cantidad de alumnos.
 */
function anadirAlumno(lista, nombre, nota) {
  return lista.push({ nombre: nombre, nota: nota });
}

/**
 * Quita el último alumno de la lista.
 * CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @returns {Object} El alumno que ha sido quitado.
 */
function quitarUltimo(lista) {
  return lista.pop();
}

/**
 * Busca un alumno por su nombre.
 * NO CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @param {string} nombre - El nombre del alumno a buscar.
 * @returns {Object|undefined} El alumno encontrado, o undefined si no existe.
 */
function buscarPorNombre(lista, nombre) {
  return lista.find(alumno => alumno.nombre === nombre);
}

/**
 * Inserta un alumno en una posición específica sin borrar a nadie.
 * CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @param {number} posicion - La posición donde se va a insertar.
 * @param {string} nombre - El nombre del alumno.
 * @param {number} nota - La nota del alumno.
 * @returns {void} No devuelve nada.
 */
function insertarEn(lista, posicion, nombre, nota) {
  lista.splice(posicion, 0, { nombre: nombre, nota: nota });
}

/**
 * Borra un alumno buscando por su nombre.
 * CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @param {string} nombre - El nombre del alumno que se quiere borrar.
 * @returns {boolean} true si se ha borrado correctamente, false si no existía.
 */
function borrarPorNombre(lista, nombre) {
  const indice = lista.findIndex(alumno => alumno.nombre === nombre);
  if (indice !== -1) {
    lista.splice(indice, 1);
    return true;
  }
  return false;
}

/**
 * Ordena la lista de la nota más alta a la más baja.
 * NO CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @returns {Array} Una copia de la lista ordenada por nota.
 */
function ordenarPorNota(lista) {
  return [...lista].sort((a, b) => b.nota - a.nota);
}

/**
 * Ordena la lista alfabéticamente de la A a la Z.
 * NO CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @returns {Array} Una copia de la lista ordenada por nombre.
 */
function ordenarPorNombre(lista) {
  return [...lista].sort((a, b) => a.nombre.localeCompare(b.nombre));
}

/**
 * Calcula la nota media de todos los alumnos sin redondear.
 * NO CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @returns {number} La nota media calculada. Devuelve 0 si la lista está vacía.
 */
function notaMedia(lista) {
  if (lista.length === 0) return 0;
  return lista.reduce((suma, alumno) => suma + alumno.nota, 0) / lista.length;
}

/**
 * Encuentra la nota más alta de toda la clase.
 * NO CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @returns {number|null} La nota máxima encontrada. Devuelve null si no hay alumnos.
 */
function notaMaxima(lista) {
  if (lista.length === 0) return null;
  return Math.max(...lista.map(alumno => alumno.nota));
}

/**
 * Obtiene los alumnos que tienen una nota igual o superior a 5.
 * NO CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @returns {Array} Una nueva lista solo con los alumnos aprobados.
 */
function aprobados(lista) {
  return lista.filter(alumno => alumno.nota >= 5);
}

/**
 * Obtiene un array únicamente con los nombres de los alumnos aprobados.
 * NO CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @returns {Array} Un array de strings con los nombres.
 */
function nombresAprobados(lista) {
  return aprobados(lista).map(alumno => alumno.nombre);
}

/**
 * Comprueba si existe al menos un alumno con un 10.
 * NO CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @returns {boolean} true si alguien tiene un 10, false si no.
 */
function hayAlgunDiez(lista) {
  return lista.some(alumno => alumno.nota === 10);
}

/**
 * Comprueba si absolutamente todos los alumnos han aprobado (5 o más).
 * NO CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @returns {boolean} true si todos aprueban, false si hay algún suspenso.
 */
function todosAprobados(lista) {
  return lista.every(alumno => alumno.nota >= 5);
}

/**
 * Devuelve los "n" mejores alumnos ordenados por su nota de mayor a menor.
 * NO CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos.
 * @param {number} n - La cantidad de mejores alumnos que se quiere obtener.
 * @returns {Array} Una copia recortada con el top "n" de la clase.
 */
function ranking(lista, n) {
  return [...lista].sort((a, b) => b.nota - a.nota).slice(0, n);
}

/**
 * Filtra los alumnos dependiendo del criterio seleccionado.
 * NO CAMBIA la lista original.
 * @param {Array} lista - La lista de alumnos a filtrar.
 * @param {string} filtro - Puede ser "todos", "aprobados" o "suspensos".
 * @returns {Array} Una copia de la lista filtrada.
 */
function filtrarAlumnos(lista, filtro) {
  if (filtro === "aprobados") {
    return lista.filter(alumno => alumno.nota >= 5);
  } else if (filtro === "suspensos") {
    return lista.filter(alumno => alumno.nota < 5);
  }
  return [...lista]; // Devuelve todos si el filtro es "todos"
}

/**
 * Ordena la lista de alumnos según el criterio escogido por el usuario.
 * NO CAMBIA la lista original.
 * @param {Array} lista - La lista a ordenar.
 * @param {string} criterio - Puede ser "nombre", "nota-desc" o "nota-asc".
 * @returns {Array} Una copia ordenada de la lista.
 */
function ordenarAlumnos(lista, criterio) {
  if (criterio === "nombre") {
    return ordenarPorNombre(lista);
  } else if (criterio === "nota-desc") {
    return ordenarPorNota(lista);
  } else if (criterio === "nota-asc") {
    return ordenarPorNota(lista).reverse(); 
  }
  return [...lista];
}

/**
 * Comprueba si el texto introducido es válido para ser una nota.
 * No recibe ni cambia ninguna lista de alumnos.
 * @param {string} texto - El dato que se introduce en el formulario.
 * @returns {boolean} true si es un número válido entre 0 y 10, false si falla.
 */
function esNotaValida(texto) {
  if (texto.trim() === "") return false;
  const numero = Number(texto);
  if (isNaN(numero)) return false;
  return numero >= 0 && numero <= 10;
}