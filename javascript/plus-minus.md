# Plus Minus - Guía de estudio (Español)

## 1. Objetivo del ejercicio
Entender cómo recorrer un arreglo para contar valores positivos, negativos y ceros, y luego calcular e imprimir sus proporciones con formato decimal fijo.

## 2. Qué debes dominar antes de resolverlo

### Arreglos en JavaScript
- Representar una lista de enteros: `const arr = [-4, 3, -9, 0, 4, 1]`.
- Acceder a elementos por índice.
- Recorrer todos los elementos del arreglo.

### Estructuras de control
- `if`, `else if`, `else` para clasificar cada número.
- Ciclo `for` para iterar el arreglo completo.

### Contadores
- Variables acumuladoras para contar cuántos valores caen en cada categoría.
- Ejemplo: `positivos`, `negativos`, `ceros`.

### División y formato decimal
- Calcular proporciones como `conteo / n`.
- Imprimir con 6 decimales (por ejemplo con `toFixed(6)`).

### Diferencia entre imprimir y retornar
- Este problema pide imprimir resultados, no retornar un valor.

## 3. Traducción del problema a lógica
Dado un arreglo `arr` de tamaño `n`:

1. Inicializa tres contadores en `0`: positivos, negativos y ceros.
2. Recorre cada elemento del arreglo.
3. Si el valor es mayor que `0`, incrementa positivos.
4. Si el valor es menor que `0`, incrementa negativos.
5. Si es `0`, incrementa ceros.
6. Calcula cada proporción: `conteo / n`.
7. Imprime cada proporción en una línea separada con 6 decimales.

## 4. Habilidades clave que practicarás
- Clasificación de datos con condicionales.
- Uso de contadores sin perder casos.
- Cálculo de razones/proporciones.
- Formateo exacto de salida para pasar pruebas automáticas.

## 5. Estrategia de implementación (sin código final)
1. Define `n` como la longitud del arreglo.
```js
const n = arr.length;
```

2. Crea tres contadores.
```js
let positivos = 0;
let negativos = 0;
let ceros = 0;
```

3. Recorre el arreglo una sola vez.
```js
for (let i = 0; i < n; i++) {
  // clasificar arr[i]
}
```

4. Clasifica cada número.
```js
if (arr[i] > 0) {
  positivos++;
} else if (arr[i] < 0) {
  negativos++;
} else {
  ceros++;
}
```

5. Calcula proporciones y muestra salida con 6 decimales.
```js
console.log((positivos / n).toFixed(6));
console.log((negativos / n).toFixed(6));
console.log((ceros / n).toFixed(6));
```

## 6. Input y output en HackerRank (Node.js)

### Entrada esperada
- Línea 1: entero `n`.
- Línea 2: `n` enteros separados por espacio.

### Parsing típico
- Leer `stdin`.
- Convertir la primera línea a número (`n`).
- Separar la segunda línea y convertir cada token a entero.

### Salida esperada
- Tres líneas:
1. proporción de positivos
2. proporción de negativos
3. proporción de ceros
- Cada valor con exactamente 6 decimales.

## 7. Complejidad esperada
- Tiempo: `O(n)` (recorres el arreglo una vez).
- Espacio extra: `O(1)` (solo contadores y variables auxiliares).

## 8. Errores comunes
- Usar `return` en lugar de imprimir (`console.log`).
- Olvidar formato de 6 decimales.
- Dividir por una longitud incorrecta (debe ser `n`).
- No contemplar el caso `0`.
- Imprimir en orden incorrecto (debe ser positivos, negativos, ceros).

## 9. Checklist antes de enviar
- [ ] ¿Conté correctamente positivos, negativos y ceros?
- [ ] ¿Dividí cada conteo entre `n`?
- [ ] ¿Imprimí exactamente 3 líneas?
- [ ] ¿Cada línea tiene 6 decimales?
- [ ] ¿Probé con el sample y obtuve `0.500000`, `0.333333`, `0.166667`?

## 10. Práctica recomendada posterior
- Resolver una variante que también devuelva los conteos además de las proporciones.
- Repetir el ejercicio con `for...of` para practicar otro estilo de recorrido.
- Crear casos de prueba con todos positivos, todos negativos y todos ceros.

---
Documento orientado a aprendizaje. No incluye la solución final del reto.
