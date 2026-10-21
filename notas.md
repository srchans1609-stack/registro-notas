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
> Da `undefined` porque los índices empiezan en 0 (las posiciones son 0, 1 y 2). Al no existir la posición 3, no tiene valor definido.

**2. ¿Por qué q.push(4) cambió p y r.push(5) no? Explica qué es copiar y qué es referenciar.**
> `q = p` asigna por **referencia** (ambas variables apuntan exactamente al mismo array en memoria). `r = [...p]` hace una **copia** (crea un array totalmente nuevo). Referenciar es compartir el mismo dato; copiar es crear un duplicado independiente.

**3. ¿Por qué [10, 9, 1].sort() no dio [1, 9, 10]?**
> Porque el método `sort()` por defecto convierte los números a texto y los ordena alfabéticamente (el "10" empieza por "1", así que va antes que el "9").

**4. De los cuatro métodos del bloque D, ¿cuáles cambian el array y cuáles devuelven uno nuevo?**
> `push()` y `pop()` cambian (mutan) el array original. `slice()` y `map()` no lo cambian, devuelven un array nuevo.