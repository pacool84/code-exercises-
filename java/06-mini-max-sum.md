# Mini-Max Sum - Guia de estudio (Java)

## 1. Objetivo del ejercicio
Entender como obtener la suma minima y la suma maxima a partir de cinco enteros positivos, sumando exactamente cuatro numeros en cada caso.

## 2. Que debes dominar antes de resolverlo

### Listas en Java
- Trabajar con una `List<Integer>` de 5 enteros.
- Recorrer todos sus elementos con un ciclo.
- Identificar el valor minimo y el valor maximo.

### Suma acumulada
- Calcular la suma total de todos los elementos.
- Entender que:
  - suma minima = total - maximo
  - suma maxima = total - minimo

### Tipos numericos en Java
- En este ejercicio conviene usar `long` para la suma total.
- Aunque los valores individuales pueden caber en `int`, la suma de varios numeros puede requerir mas capacidad.

### Impresion en consola
- El problema pide imprimir, no retornar.
- La salida debe ser una sola linea con dos valores separados por espacio.

## 3. Traduccion del problema a logica
Dada una `List<Integer>` con cinco enteros:

1. Suma los cinco valores.
2. Encuentra el menor valor.
3. Encuentra el mayor valor.
4. Calcula la suma minima restando el mayor valor a la suma total.
5. Calcula la suma maxima restando el menor valor a la suma total.
6. Imprime ambos resultados en una sola linea.

## 4. Habilidades clave que practicaras
- Recorrido de listas en Java.
- Uso de acumuladores.
- Deteccion de minimo y maximo.
- Uso correcto de `long` en Java.
- Simplificacion del problema sin generar combinaciones.

## 5. Estrategia de implementacion (sin codigo final)
1. Inicializa variables para la suma, el minimo y el maximo.
```java
long total = 0;
long min = arr.get(0);
long max = arr.get(0);
```
Aqui `arr.get(0)` obtiene el primer elemento de la lista. En Java no usas `arr[0]` cuando trabajas con `List<Integer>`.

2. Recorre la estructura una sola vez.
```java
for (int value : arr) {
    // acumular y actualizar min/max
}
```
Esto significa que no necesitas un ciclo para sumar, otro para buscar el minimo y otro para buscar el maximo.

Con un unico recorrido, cada numero se procesa una sola vez. En cada iteracion haces tres tareas:
- sumar el valor actual a `total`
- comparar si ese valor es menor que `min`
- comparar si ese valor es mayor que `max`

La variable `value` representa el numero que estas leyendo en ese momento. Si los datos de la lista fueran `[1, 2, 3, 4, 5]`, el ciclo iria leyendo `1`, luego `2`, luego `3`, y asi sucesivamente.

La idea clave es aprovechar cada iteracion para actualizar toda la informacion importante. Asi la solucion queda mas eficiente y facil de entender.

3. Actualiza suma, minimo y maximo durante el recorrido.
```java
total += value;
if (value < min) min = value;
if (value > max) max = value;
```
Linea por linea:

- `total += value;`
  Va acumulando la suma total.
- `if (value < min) min = value;`
  Si el numero actual es menor que el minimo guardado hasta ese momento, actualizas `min`.
- `if (value > max) max = value;`
  Si el numero actual es mayor que el maximo guardado hasta ese momento, actualizas `max`.

Ejemplo rapido con `[1, 2, 3, 4, 5]`:

- Inicio: `total = 0`, `min = 1`, `max = 1`
- Lee `1`: `total = 1`, `min = 1`, `max = 1`
- Lee `2`: `total = 3`, `min = 1`, `max = 2`
- Lee `3`: `total = 6`, `min = 1`, `max = 3`
- Lee `4`: `total = 10`, `min = 1`, `max = 4`
- Lee `5`: `total = 15`, `min = 1`, `max = 5`

Al terminar el ciclo ya tienes:
- la suma total
- el minimo
- el maximo

4. Calcula los dos resultados finales.
```java
long minSum = total - max;
long maxSum = total - min;
```

5. Imprime ambos en una sola linea.
```java
System.out.println(minSum + " " + maxSum);
```

## 6. Input y output en HackerRank (Java)

### Firma esperada de la funcion
```java
public static void miniMaxSum(List<Integer> arr)
```

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
- Inicializar `min` en `0` en lugar de usar el primer elemento de la lista.
- Intentar acceder al primer dato con `arr[0]` cuando en Java, si usas `List<Integer>`, corresponde `arr.get(0)`.
- Usar `int` para la suma total cuando conviene `long`.
- Intentar generar todas las combinaciones posibles.
- Imprimir primero la suma maxima y luego la minima.
- Retornar un valor en vez de imprimir.

## 9. Checklist antes de enviar
- [ ] Sume correctamente los 5 valores.
- [ ] Identifique el minimo y el maximo.
- [ ] Use `long` para la suma total y los resultados.
- [ ] Calcule `minSum = total - max`.
- [ ] Calcule `maxSum = total - min`.
- [ ] Imprimi ambos resultados en una sola linea y en el orden correcto.

## 10. Practica recomendada posterior
- Resolver una variante con mas numeros.
- Repetir el problema ordenando los datos y comparando ambos enfoques.
- Practicar otro ejercicio donde se pida suma, minimo y maximo en un solo recorrido.

---
Documento orientado a aprendizaje. No incluye la solucion final del reto.
