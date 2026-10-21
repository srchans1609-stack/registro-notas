### Tabla Fase 1: Exploración de arrays

| Número de línea | Tu predicción | Lo que salió en la consola |
| :--- | :--- | :--- |
| **Bloque A** | | |
| 1. `a[0]` |"0" | `"x"` |
| 2. `a[3]` |"0" | `undefined` |
| 3. `a.length` |"3" | `3` |
| 4. `[1, "dos", true].length` |"3" | `3` |
| **Bloque B** | | |
| 5. `const c=[1]; c.push(2); c` |[1,2] | `(2) [1, 2]` |
| 6. `q.push(4)` y mira `p` |(4) | `p` ahora es `(4) [1, 2, 3, 4]` |
| 7. `let r=[...p]; r.push(5)` y mira `p` |(4) | `p` sigue siendo `(4) [1, 2, 3, 4]` |
| **Bloque C** | | |
| 8. `[10, 9, 1].sort()` |null | `(3) [1, 10, 9]` |
| 9. `[10, 9, 1].sort((x, y) => x - y)` |[1, 9, 10] | `(3) [1, 9, 10]` |
| **Bloque D** | | |
| 10. `n.push(4)` | [3, 1, 2, 4]| Devuelve `4`. `n` cambia a `[3, 1, 2, 4]` |
| 11. `n.pop()` |[3, 1] | Devuelve `2`. `n` cambia a `[3, 1]` |
| 12. `n.slice(0, 2)` |[3, 1, 2]| Devuelve `[3, 1]`. `n` NO cambia `[3, 1, 2]` |
| 13. `n.map(x => x * 2)` |[3, 1, 2]| Devuelve `[6, 2, 4]`. `n` NO cambia `[3, 1, 2]` |

### Preguntas teóricas

**1. ¿Qué da a [3] si el array solo tiene 3 elementos? ¿Por qué?**
Da `undefined` porque los índices empiezan en 0 (las posiciones son 0, 1 y 2). Al no existir la posición 3, no tiene valor definido.

**2. ¿Por qué q.push(4) cambió p y r.push(5) no? Explica qué es copiar y qué es referenciar.**
 `q = p` asigna por **referencia** (ambas variables apuntan exactamente al mismo array en memoria). `r = [...p]` hace una **copia** (crea un array totalmente nuevo). Referenciar es compartir el mismo dato; copiar es crear un duplicado independiente.

**3. ¿Por qué [10, 9, 1].sort() no dio [1, 9, 10]?**
 Porque el método `sort()` por defecto convierte los números a texto y los ordena alfabéticamente (el "10" empieza por "1", así que va antes que el "9").

**4. De los cuatro métodos del bloque D, ¿cuáles cambian el array y cuáles devuelven uno nuevo?**
 `push()` y `pop()` cambian (mutan) el array original. `slice()` y `map()` no lo cambian, devuelven un array nuevo.

### Fase 2: Añadir, quitar, buscar y ordenar

**Análisis de funciones:**
*   `anadirAlumno`: **Cambia la lista** (usa `push()`).
*   `quitarUltimo`: **Cambia la lista** (usa `pop()`).
*   `buscarPorNombre`: **No cambia la lista** (solo busca con `find()`).
*   `insertarEn`: **Cambia la lista** (usa `splice()`).
*   `borrarPorNombre`: **Cambia la lista** (usa `splice()`).
*   `ordenarPorNota`: **No cambia la lista** (hace una copia con `[...lista]` antes de ordenar).
*   `ordenarPorNombre`: **No cambia la lista** (hace una copia con `[...lista]` antes de ordenar).

**Preguntas teóricas:**

**1. ¿Qué funciones de esta fase cambian la lista y cuáles no? ¿Cómo lo sabes?**
 Cambian la lista: `anadirAlumno`, `quitarUltimo`, `insertarEn` y `borrarPorNombre`. No la cambian: `buscarPorNombre`, `ordenarPorNota` y `ordenarPorNombre`. Lo sé por los métodos de array que utilizan (push, pop y splice modifican el original; mientras que si hacemos una copia previa con `[...lista]`, protegemos el original).

**2. ¿Por qué ordenarPorNota hace una copia antes de ordenar?**
 Porque el método `sort()` modifica (muta) el array original sobre el que se aplica. Si no hiciéramos la copia, desordenaríamos nuestra lista principal de alumnos.

**3. ¿Qué pasaría con las notas 10, 9 y 1 si no usaras una función de comparación?**
Que el método `sort()` las trataría como texto y las ordenaría alfabéticamente, quedando el orden incorrecto: `[1, 10, 9]`.

### Fase 3: Estadísticas de la clase

**Experimentos con lista vacía:**
* `notaMedia([])`: Devuelve 0.
* `notaMaxima([])`: Devuelve null.
* `aprobados([])`: Devuelve `[]` (array vacío).
* `nombresAprobados([])`: Devuelve `[]` (array vacío).
* `hayAlgunDiez([])`: Devuelve `false`.
* `todosAprobados([])`: Devuelve `true`.
* `ranking([], 2)`: Devuelve `[]` (array vacío).
* **Error del reduce:** Si le quitas el valor inicial a `reduce` y le pasas una lista vacía, la consola da el error: `TypeError: Reduce of empty array with no initial value`.

**Preguntas teóricas:**

**1. ¿Por qué reduce necesita un valor inicial cuando la lista está vacía?**
> Porque si no le pones un valor inicial, el método `reduce` intenta usar el primer elemento del array para empezar a calcular. Como el array está vacío y no tiene primer elemento, el programa se rompe y lanza un error. Al ponerle el `0`, le damos un punto de partida seguro.

**2. ¿Qué devuelve todosAprobados con una lista vacía? ¿Te parece lógico? Explícalo.**
> Devuelve `true`. Sí es lógico por cómo funciona la lógica matemática (se conoce como "verdad vacua"). Como la lista está vacía, no hay ningún alumno que tenga menos de un 5. Al no existir nadie que rompa la regla, la afirmación "todos tienen 5 o más" se considera verdadera.

**3. ¿Qué diferencia hay entre map y filter? Pon un ejemplo de tu código.**
> `filter` se usa para filtrar o descartar elementos: evalúa una condición y devuelve un array solo con los que la cumplen (el array resultante puede ser más pequeño). `map` se usa para transformar elementos: devuelve siempre un array exactamente de la misma longitud que el original, pero con los datos modificados.
> * Ejemplo de filter: `lista.filter(alumno => alumno.nota >= 5)` (se queda solo con los objetos de alumnos aprobados).
> * Ejemplo de map: `aprobados(lista).map(alumno => alumno.nombre)` (transforma los objetos completos de los alumnos para extraer únicamente el texto de sus nombres).