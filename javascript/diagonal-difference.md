# Diagonal Difference - Guía de estudio (Español)

## 1. Objetivo del ejercicio
Entender cómo recorrer una matriz cuadrada para calcular la suma de su diagonal principal y su diagonal secundaria, y luego obtener su diferencia absoluta.

## 2. Qué debes dominar antes de resolverlo

### Matrices en JavaScript
- Representar una matriz como arreglo de arreglos: `const arr = [[1,2,3],[4,5,6],[9,8,9]]`.
- Acceder a posiciones con `arr[i][j]`.
- Entender que una matriz cuadrada tiene el mismo número de filas y columnas (`n x n`).

### Índices y diagonales
- Diagonal principal: posiciones donde `i === j`.
- Diagonal secundaria: posiciones donde `j === n - 1 - i`.
- Recorrer ambas diagonales en un solo ciclo.

### Estructuras de control
- Ciclo `for` para iterar desde `0` hasta `n - 1`.
- Variables acumuladoras para sumar valores progresivamente.

### Valor absoluto
- Uso de `Math.abs(x)` para garantizar resultado no negativo.

### Funciones
- Definir una función que recibe una matriz y retorna un entero.

## 3. Traducción del problema a lógica
Dada una matriz cuadrada `arr`:

1. Inicializa `sumaPrincipal = 0`.
2. Inicializa `sumaSecundaria = 0`.
3. Recorre cada fila con índice `i`.
4. Suma `arr[i][i]` a la diagonal principal.
5. Suma `arr[i][n - 1 - i]` a la diagonal secundaria.
6. Retorna `Math.abs(sumaPrincipal - sumaSecundaria)`.

Visualmente, para una matriz `3 x 3`:

```txt
arr =
[ [a00, a01, a02],
  [a10, a11, a12],
  [a20, a21, a22] ]
```

- Diagonal principal: `a00`, `a11`, `a22`  -> patrón `arr[i][i]`
- Diagonal secundaria: `a02`, `a11`, `a20` -> patrón `arr[i][n - 1 - i]`

## 4. Habilidades clave que practicarás
- Identificación de patrones de índices en matrices.
- Recorrido eficiente sin ciclos anidados innecesarios.
- Manejo correcto de límites con `n - 1 - i`.
- Aplicación de valor absoluto para cumplir formato esperado.

## 5. Estrategia de implementación (sin código final)
1. Define `n` como el tamaño de la matriz.
```js
const n = arr.length;
```

2. Crea dos acumuladores.
```js
let sumaPrincipal = 0;
let sumaSecundaria = 0;
```

3. Recorre los índices de `0` a `n - 1`.
```js
for (let i = 0; i < n; i++) {
  // sumar ambas diagonales
}
```

Recorrido gráfico del `for` cuando `n = 3`:

```txt
i = 0
- principal:   arr[0][0]
- secundaria:  arr[0][2]  -> 2 = (3 - 1 - 0)

i = 1
- principal:   arr[1][1]
- secundaria:  arr[1][1]  -> 1 = (3 - 1 - 1)

i = 2
- principal:   arr[2][2]
- secundaria:  arr[2][0]  -> 0 = (3 - 1 - 2)
```

Observa que:
- En la diagonal principal, fila y columna avanzan juntas: `0,0 -> 1,1 -> 2,2`.
- En la secundaria, la fila avanza (`0,1,2`) pero la columna retrocede (`2,1,0`).

4. Usa las fórmulas de índice de cada diagonal.
```js
sumaPrincipal += arr[i][i];
sumaSecundaria += arr[i][n - 1 - i];
```

Cómo entender `sumaSecundaria += arr[i][n - 1 - i]`:
- `i` representa la fila actual.
- `n - 1` es el último índice válido de columna.
- `n - 1 - i` hace que la columna vaya del final al inicio.
- Resultado: tomas exactamente los elementos de la diagonal que va de derecha a izquierda.

Ejemplo con `n = 4`:
- `i = 0` -> columna `3`
- `i = 1` -> columna `2`
- `i = 2` -> columna `1`
- `i = 3` -> columna `0`

Secuencia de columna: `3, 2, 1, 0` (decreciente), justo la diagonal secundaria.

5. Devuelve la diferencia absoluta.
```js
return Math.abs(sumaPrincipal - sumaSecundaria);
```

## 6. Input y output en HackerRank (Node.js)

### Entrada esperada
- Línea 1: entero `n`.
- Siguientes `n` líneas: `n` enteros por línea para formar la matriz.

### Parsing típico
- Leer `stdin`.
- Tomar `n` de la primera línea.
- Iterar `n` veces para convertir cada fila en arreglo numérico.

### Salida esperada
- Un solo entero: la diferencia absoluta entre ambas diagonales.

## 7. Complejidad esperada
- Tiempo: `O(n)` porque solo recorres una vez los índices de la matriz para diagonales.
- Espacio extra: `O(1)` sin contar el almacenamiento de entrada.

## 8. Errores comunes
- Confundir la fórmula de la diagonal secundaria (`n - 1 - i`).
- Usar `arr[n - 1 - i][i]` sin entender por qué también funciona y mezclar índices.
- Olvidar `Math.abs`, devolviendo números negativos.
- Parsear mal la entrada y obtener strings en lugar de números.
- Asumir tamaños inconsistentes cuando el problema exige matriz cuadrada.

## 9. Checklist antes de enviar
- [ ] ¿Tomé correctamente `n` desde la entrada?
- [ ] ¿Sumé `arr[i][i]` para la diagonal principal?
- [ ] ¿Sumé `arr[i][n - 1 - i]` para la diagonal secundaria?
- [ ] ¿Apliqué `Math.abs` a la diferencia final?
- [ ] ¿Probé con el sample y obtuve `15`?

## 10. Práctica recomendada posterior
- Resolver una variante donde también se impriman ambas sumas por separado.
- Repetir el problema con matrices más grandes para reforzar índices.
- Practicar más ejercicios de recorrido de matriz (bordes, diagonales, transpuesta).

---
Documento orientado a aprendizaje. No incluye la solución final del reto.
