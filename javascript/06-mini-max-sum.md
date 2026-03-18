# Mini-Max Sum - Guia de estudio (JavaScript)

## 1. Objetivo del ejercicio
Entender como obtener la suma minima y la suma maxima a partir de cinco enteros positivos, sumando exactamente cuatro numeros en cada caso.

## 2. Que debes dominar antes de resolverlo

### Arreglos en JavaScript
- Trabajar con un arreglo fijo de 5 enteros.
- Recorrer todos sus elementos.
- Identificar valores minimo y maximo dentro del arreglo.

### Sumas acumuladas
- Calcular la suma total de todos los elementos.
- Entender que si conoces la suma total:
  - suma minima = total - maximo
  - suma maxima = total - minimo

### Tipos numericos en JavaScript
- En HackerRank para este problema, `Number` suele ser suficiente en JavaScript.
- Aun asi, conviene entender que en otros lenguajes este reto puede requerir enteros de 64 bits.

### Impresion en consola
- El problema pide imprimir, no retornar.
- La salida debe ser una sola linea con dos valores separados por espacio.

## 3. Traduccion del problema a logica
Dado un arreglo `arr` con cinco enteros:

1. Suma los cinco valores.
2. Encuentra el menor valor del arreglo.
3. Encuentra el mayor valor del arreglo.
4. Calcula la suma minima restando el mayor valor a la suma total.
5. Calcula la suma maxima restando el menor valor a la suma total.
6. Imprime ambos resultados en una sola linea.

## 4. Habilidades clave que practicaras
- Analisis de arreglos pequenos.
- Uso de acumuladores.
- Deteccion de minimo y maximo.
- Simplificacion de problemas evitando combinaciones innecesarias.

## 5. Estrategia de implementacion (sin codigo final)
1. Inicializa variables para:
```js
let total = 0;
let min = arr[0];
let max = arr[0];
```

2. Recorre el arreglo una sola vez.
```js
for (const value of arr) {
  // acumular y actualizar min/max
}
```

3. Actualiza suma, minimo y maximo durante el recorrido.
```js
total += value;
if (value < min) min = value;
if (value > max) max = value;
```

4. Calcula los dos resultados finales.
```js
const minSum = total - max;
const maxSum = total - min;
```

5. Imprime ambos en una sola linea.
```js
console.log(minSum + " " + maxSum);
```

## 6. Input y output en HackerRank (Node.js)

### Entrada esperada
- Una sola linea con cinco enteros separados por espacio.

### Salida esperada
- Una sola linea con dos enteros separados por espacio:
  - primero la suma minima
  - despues la suma maxima

### Ejemplo visual
```text
Input:
1 2 3 4 5

Output:
10 14
```

## 7. Complejidad esperada
- Tiempo: `O(n)` con `n = 5`.
- Espacio extra: `O(1)`.

## 8. Errores comunes
- Intentar generar todas las combinaciones cuando no hace falta.
- Imprimir primero la suma maxima y luego la minima.
- Retornar un valor en vez de imprimir.
- Confundir la logica y restar el minimo para obtener la suma minima.
- Olvidar que se deben sumar exactamente cuatro de los cinco numeros.

## 9. Checklist antes de enviar
- [ ] Sume correctamente los 5 valores.
- [ ] Identifique el minimo y el maximo.
- [ ] Calcule `minSum = total - max`.
- [ ] Calcule `maxSum = total - min`.
- [ ] Imprimi ambos resultados en una sola linea y en el orden correcto.
- [ ] Probe con el sample y obtuve `10 14`.

## 10. Practica recomendada posterior
- Resolver una variante con mas de cinco numeros.
- Repetir el problema ordenando el arreglo y comparando ambos enfoques.
- Practicar otro ejercicio donde se pida minimo, maximo y suma total en un solo recorrido.

---
Documento orientado a aprendizaje. No incluye la solucion final del reto.
