# Birthday Cake Candles - Guia de estudio (JavaScript)

## 1. Objetivo del ejercicio

Entender como identificar el valor maximo dentro de un arreglo y contar cuantas veces aparece.

## 2. Que debes dominar antes de resolverlo

### Arreglos en JavaScript

- Representar una lista de enteros.
- Recorrer todos los elementos del arreglo.
- Comparar valores para detectar el mayor.

### Maximo de un arreglo

- Saber que el problema no pide ordenar el arreglo.
- Entender que basta con encontrar la altura maxima.

### Contadores

- Usar una variable para contar cuantas veces aparece la altura mayor.
- Reiniciar o actualizar correctamente ese conteo cuando cambie el maximo.

### Diferencia entre retornar e imprimir

- Este problema normalmente pide retornar un entero.
- En HackerRank, la plataforma se encarga de imprimir el resultado final despues de que tu funcion lo retorna.

## 3. Traduccion del problema a logica

Dado un arreglo `candles` con alturas de velas:

1. Encuentra la altura maxima del arreglo.
2. Cuenta cuantas velas tienen exactamente esa altura.
3. Retorna ese conteo.

Ejemplo con `candles = [3, 2, 1, 3]`:

- La altura maxima es `3`.
- El valor `3` aparece `2` veces.
- La respuesta final es `2`.

## 4. Habilidades clave que practicaras

- Recorrido lineal de arreglos.
- Comparacion de valores.
- Uso de contadores.
- Resolucion eficiente sin operaciones innecesarias.

## 5. Estrategia de implementacion (sin codigo final)

Hay dos formas claras de resolverlo.

En ambas, necesitas recorrer el arreglo con un ciclo. Sin un `for` o `for...of`, no puedes inspeccionar cada vela para saber cual es la mas alta ni cuantas veces se repite.

### Opcion 1: dos recorridos

1. Recorre el arreglo para encontrar el maximo, Inicializar esta variable con el primer valor del arreglo

```js
let max = candles[0];
```

Luego usa un ciclo para revisar cada elemento:

```js
for (const value of candles) {
  // comparar cada altura con max
}
```

Durante el recorrido:

```js
if (value > max) {
  max = value;
}
```

2. Haz un segundo recorrido para contar cuantas veces aparece ese maximo.

```js
let count = 0;
```

Despues vuelves a recorrer el arreglo:

```js
for (const value of candles) {
  // contar cuantas veces aparece max
}
```

Luego:

```js
if (value === max) {
  count++;
}
```

3. Retorna `count`.

Esta forma es muy facil de entender porque separa claramente las dos tareas:

- primero descubrir cual es la altura mas grande
- despues contar cuantas velas tienen esa altura

### Opcion 2: un solo recorrido

Tambien puedes resolverlo en una sola pasada manteniendo:

- el maximo actual
- el conteo actual del maximo

La idea es:

1. Si encuentras un numero mayor que el maximo actual:
   actualizas el maximo y reinicias el conteo a `1`.
2. Si encuentras un numero igual al maximo actual:
   incrementas el conteo.
3. Si es menor:
   no haces nada.

Conceptualmente:

```js
let max = candles[0];
let count = 1;
```

Despues recorres el arreglo desde la segunda posicion, porque la primera ya la usaste para inicializar:

```js
for (let i = 1; i < candles.length; i++) {
  const value = candles[i];
  // comparar y actualizar
}
```

Y en cada siguiente valor:

```js
if (value > max) {
  max = value;
  count = 1;
} else if (value === max) {
  count++;
}
```

Esta estrategia es un poco mas compacta, pero requiere entender bien cuando reiniciar el contador.

Si lo piensas paso a paso, cada vuelta del ciclo revisa una vela y responde una pregunta:

- Es mas alta que el maximo actual?
- Es igual al maximo actual?
- Es menor y no cambia nada?

Ejemplo con `candles = [3, 2, 1, 3]` en la solucion de un recorrido:

- Inicio: `max = 3`, `count = 1`
- Siguiente valor `2`: no cambia nada
- Siguiente valor `1`: no cambia nada
- Siguiente valor `3`: como es igual a `max`, `count` pasa a `2`

Al terminar el ciclo, `count` contiene la respuesta.

## 6. Input y output en HackerRank (Node.js)

### Entrada esperada

- Primera linea: entero `n`, cantidad de velas.
- Segunda linea: `n` enteros separados por espacio.

### Salida esperada

- Un entero: la cantidad de velas con la altura maxima.

### Ejemplo visual

```text
Input:
4
3 2 1 3

Output:
2
```

## 7. Complejidad esperada

- Tiempo:
  - `O(n)` si haces uno o dos recorridos.
- Espacio extra:
  - `O(1)` porque solo usas unas pocas variables.

## 8. Errores comunes

- Ordenar el arreglo cuando no es necesario.
- Olvidar usar un ciclo para revisar todas las velas.
- Confundir el valor maximo con su posicion.
- Retornar la altura maxima en lugar de retornar cuantas veces aparece.
- Olvidar reiniciar el contador cuando aparece un nuevo maximo en la solucion de un recorrido.
- Suponer que siempre hay una sola vela mas alta.

## 9. Checklist antes de enviar

- [ ] Identifique correctamente la altura maxima.
- [ ] Recorri todo el arreglo con un `for` o `for...of`.
- [ ] Conte cuantas veces aparece esa altura.
- [ ] Retorne un entero, no un arreglo ni la altura maxima.
- [ ] Probe con el sample y obtuve `2`.
- [ ] Verifique casos como todas las velas iguales.

## 10. Practica recomendada posterior

- Resolver una variante donde debas encontrar el segundo valor mas grande.
- Repetir el ejercicio usando dos recorridos y luego un solo recorrido.
- Probar casos como:
  - una sola vela
  - todas las velas con la misma altura
  - el maximo apareciendo muchas veces

---

Documento orientado a aprendizaje. No incluye la solucion final del reto.
