# Diagonal Difference - Guia de estudio (Java)

## 1. Objetivo del ejercicio
Entender como recorrer una matriz cuadrada para calcular la suma de su diagonal principal y su diagonal secundaria, y luego obtener su diferencia absoluta.

## 2. Que debes dominar antes de resolverlo

### Matrices en Java
- Representar una matriz con listas anidadas: `List<List<Integer>> arr`.
- Acceder a posiciones con `arr.get(i).get(j)`.
- Entender que una matriz cuadrada tiene el mismo numero de filas y columnas (`n x n`).

### Indices y diagonales
- Diagonal principal: posiciones donde `i == j`.
- Diagonal secundaria: posiciones donde `j == n - 1 - i`.
- Recorrer ambas diagonales en un solo ciclo.

### Estructuras de control
- Ciclo `for` para iterar desde `0` hasta `n - 1`.
- Variables acumuladoras para sumar valores progresivamente.

### Valor absoluto
- Uso de `Math.abs(x)` para garantizar resultado no negativo.

### Funciones
- Definir una funcion que recibe una matriz y retorna un `int`.

## 3. Traduccion del problema a logica
Dada una matriz cuadrada `arr`:

1. Inicializa `sumaPrincipal = 0`.
2. Inicializa `sumaSecundaria = 0`.
3. Recorre cada fila con indice `i`.
4. Suma `arr.get(i).get(i)` a la diagonal principal.
5. Suma `arr.get(i).get(n - 1 - i)` a la diagonal secundaria.
6. Retorna `Math.abs(sumaPrincipal - sumaSecundaria)`.

Visualmente, para una matriz `3 x 3`:

```txt
arr =
[ [a00, a01, a02],
  [a10, a11, a12],
  [a20, a21, a22] ]
```

- Diagonal principal: `a00`, `a11`, `a22`  -> patron `arr[i][i]`
- Diagonal secundaria: `a02`, `a11`, `a20` -> patron `arr[i][n - 1 - i]`

## 4. Habilidades clave que practicaras
- Identificacion de patrones de indices en matrices.
- Recorrido eficiente sin ciclos anidados innecesarios.
- Manejo correcto de limites con `n - 1 - i`.
- Aplicacion de valor absoluto para cumplir formato esperado.

## 5. Estrategia de implementacion (sin codigo final)
1. Define `n` como el tamano de la matriz.
```java
int n = arr.size();
```

2. Crea dos acumuladores.
```java
int sumaPrincipal = 0;
int sumaSecundaria = 0;
```

3. Recorre los indices de `0` a `n - 1`.
```java
for (int i = 0; i < n; i++) {
    // sumar ambas diagonales
}
```

Recorrido grafico del `for` cuando `n = 3`:

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

4. Usa las formulas de indice de cada diagonal.
```java
sumaPrincipal += arr.get(i).get(i);
sumaSecundaria += arr.get(i).get(n - 1 - i);
```

Como entender `sumaSecundaria += arr.get(i).get(n - 1 - i)`:
- `i` representa la fila actual.
- `n - 1` es el ultimo indice valido de columna.
- `n - 1 - i` hace que la columna vaya del final al inicio.
- Resultado: tomas exactamente los elementos de la diagonal que va de derecha a izquierda.

Ejemplo con `n = 4`:
- `i = 0` -> columna `3`
- `i = 1` -> columna `2`
- `i = 2` -> columna `1`
- `i = 3` -> columna `0`

Secuencia de columna: `3, 2, 1, 0` (decreciente), justo la diagonal secundaria.

5. Devuelve la diferencia absoluta.
```java
return Math.abs(sumaPrincipal - sumaSecundaria);
```

## 6. Input y output en HackerRank (Java)

### Entrada esperada
- Linea 1: entero `n`.
- Siguientes `n` lineas: `n` enteros por linea para formar la matriz.

### Parsing tipico
- Leer `stdin` con `BufferedReader`.
- Tomar `n` de la primera linea.
- Iterar `n` veces para convertir cada fila en `List<Integer>`.

### Salida esperada
- Un solo entero: la diferencia absoluta entre ambas diagonales.

## 7. Complejidad esperada
- Tiempo: `O(n)` porque solo recorres una vez los indices de la matriz para diagonales.
- Espacio extra: `O(1)` para la logica del calculo (sin contar entrada).

## 8. Errores comunes
- Confundir la formula de la diagonal secundaria (`n - 1 - i`).
- Usar `arr.get(n - 1 - i).get(i)` sin entender por que tambien puede tocar diagonal y mezclar indices.
- Olvidar `Math.abs`, devolviendo numeros negativos.
- Parsear mal la entrada y obtener datos incompletos.
- Asumir tamanos inconsistentes cuando el problema exige matriz cuadrada.

## 9. Checklist antes de enviar
- [ ] Tome correctamente `n` desde la entrada.
- [ ] Sume `arr.get(i).get(i)` para la diagonal principal.
- [ ] Sume `arr.get(i).get(n - 1 - i)` para la diagonal secundaria.
- [ ] Aplique `Math.abs` a la diferencia final.
- [ ] Probe con el sample y obtuve `15`.

## 10. Practica recomendada posterior
- Resolver una variante donde tambien se impriman ambas sumas por separado.
- Repetir el problema con matrices mas grandes para reforzar indices.
- Practicar mas ejercicios de recorrido de matriz (bordes, diagonales, transpuesta).

---
Documento orientado a aprendizaje. No incluye la solucion final del reto.
