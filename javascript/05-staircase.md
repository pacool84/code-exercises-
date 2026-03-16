# Staircase - Guía de estudio (Español)

## 1. Objetivo del ejercicio
Entender cómo construir e imprimir un patrón de texto línea por línea usando espacios y símbolos `#`, manteniendo una alineación exacta a la derecha.

## 2. Qué debes dominar antes de resolverlo

### Cadenas en JavaScript
- Crear cadenas repetidas usando `.repeat()`.
- Combinar espacios y símbolos para formar una línea.
- Entender que una línea es texto, no un arreglo de números.

### Ciclos
- Usar `for` para generar filas desde `1` hasta `n`.
- Entender cómo cambia la cantidad de espacios y `#` en cada iteración.

### Impresión en consola
- Usar `console.log()` para imprimir cada fila.
- Saber que el problema pide imprimir, no retornar un valor.

### Relación entre fila y contenido
- En cada fila hay dos partes:
  - espacios a la izquierda
  - símbolos `#` a la derecha
- A medida que avanzan las filas:
  - disminuyen los espacios
  - aumentan los `#`

## 3. Traducción del problema a lógica
Dado un entero `n`:

1. Recorre las filas desde `1` hasta `n`.
2. Para cada fila, calcula cuántos espacios iniciales necesita.
3. Calcula cuántos símbolos `#` necesita esa fila.
4. Construye la línea combinando espacios + `#`.
5. Imprime esa línea.

Para la fila `i`:
- espacios = `n - i`
- numeral(es) = `i`

## 4. Habilidades clave que practicarás
- Pensamiento visual convertido en lógica.
- Construcción de patrones con texto.
- Control preciso de salida para jueces automáticos.
- Manejo de iteraciones con cambios progresivos.

## 5. Estrategia de implementación (sin código final)
1. Recorre desde la primera fila hasta la última.
```js
for (let i = 1; i <= n; i++) {
  // construir e imprimir fila
}
```

2. Calcula espacios y símbolos para cada fila.
```js
const spaces = n - i;
const blocks = i;
```

3. Construye la línea usando repetición de cadenas.
```js
const line = " ".repeat(spaces) + "#".repeat(blocks);
```

4. Imprime la línea.
```js
console.log(line);
```

## 6. Input y output en HackerRank (Node.js)

### Entrada esperada
- Línea 1: un entero `n`.

### Salida esperada
- `n` líneas formando una escalera alineada a la derecha.
- La última línea debe tener `n` símbolos `#`.

### Ejemplo visual para `n = 4`
```text
   #
  ##
 ###
####
```

## 7. Complejidad esperada
- Tiempo: `O(n^2)` si consideras la construcción total de todos los caracteres impresos.
- Espacio extra: `O(n)` para la línea que construyes en cada iteración.

## 8. Errores comunes
- Alinear la escalera a la izquierda en lugar de a la derecha.
- Imprimir una cantidad incorrecta de espacios.
- Comenzar el ciclo en `0` y desajustar el patrón.
- Retornar cadenas en lugar de imprimirlas.
- Agregar espacios al final de la línea cuando no se necesitan.

## 9. Checklist antes de enviar
- [ ] ¿Imprimí exactamente `n` filas?
- [ ] ¿La primera fila tiene `n - 1` espacios y `1` `#`?
- [ ] ¿La última fila tiene `n` `#` y ningún espacio inicial?
- [ ] ¿La escalera quedó alineada a la derecha?
- [ ] ¿Usé `console.log()` en lugar de `return`?

## 10. Práctica recomendada posterior
- Resolver una variante con alineación a la izquierda.
- Crear una pirámide completa usando espacios y `#`.
- Repetir el ejercicio sin usar `.repeat()`, construyendo la línea manualmente.

---
Documento orientado a aprendizaje. No incluye la solución final del reto.
