# Birthday Cake Candles - Guia de estudio (Java)

## 1. Objetivo del ejercicio
Entender como encontrar el valor maximo dentro de una lista de enteros y contar cuantas veces aparece.

## 2. Que debes dominar antes de resolverlo

### Listas en Java
- Trabajar con `List<Integer>`.
- Recorrer todos los elementos con `for`, `for-each` o indices.
- Acceder a elementos con `candles.get(i)` cuando sea necesario.

### Comparacion de valores
- Identificar el valor mas grande dentro de la lista.
- Comparar cada elemento con el maximo actual.

### Contadores
- Usar una variable para contar cuantas veces aparece la altura maxima.
- Reiniciar correctamente el contador si aparece un nuevo maximo en una solucion de un solo recorrido.

### Diferencia entre retornar e imprimir
- En este ejercicio la funcion debe retornar un entero.
- HackerRank se encarga de imprimir el resultado final despues de recibir el valor retornado.

## 3. Traduccion del problema a logica
Dada una lista `candles` con alturas de velas:

1. Encuentra la altura maxima de la lista.
2. Cuenta cuantas velas tienen exactamente esa altura.
3. Retorna ese conteo.

Ejemplo con `candles = [3, 2, 1, 3]`:

- La altura maxima es `3`.
- El valor `3` aparece `2` veces.
- La respuesta final es `2`.

## 4. Habilidades clave que practicaras
- Recorrido lineal de listas en Java.
- Comparacion de enteros.
- Uso de contadores.
- Resolucion eficiente sin ordenar innecesariamente.

## 5. Estrategia de implementacion (sin codigo final)

Hay dos formas claras de resolverlo.

### Opcion 1: dos recorridos

1. Recorre la lista para encontrar el maximo.
```java
int max = candles.get(0);
```

Luego usa un ciclo:

```java
for (int value : candles) {
    // comparar con max
}
```

Durante ese recorrido:

```java
if (value > max) {
    max = value;
}
```

2. Haz un segundo recorrido para contar cuantas veces aparece ese maximo.
```java
int count = 0;
```

Despues vuelve a recorrer:

```java
for (int value : candles) {
    // contar apariciones de max
}
```

Y compara:

```java
if (value == max) {
    count++;
}
```

3. Retorna `count`.

Esta forma es facil de entender porque separa claramente las dos tareas:
- primero encontrar la altura mayor
- despues contar cuantas velas tienen esa altura

### Opcion 2: un solo recorrido

Tambien puedes resolverlo en una sola pasada manteniendo:
- el maximo actual
- el conteo actual de ese maximo

Conceptualmente:

```java
int max = candles.get(0);
int count = 1;
```

Luego recorres desde la segunda posicion:

```java
for (int i = 1; i < candles.size(); i++) {
    int value = candles.get(i);
    // comparar y actualizar
}
```

La logica general es:

```java
if (value > max) {
    max = value;
    count = 1;
} else if (value == max) {
    count++;
}
```

Esta estrategia es mas compacta, pero requiere entender bien cuando reiniciar el contador.

Ejemplo con `candles = [3, 2, 1, 3]`:

- Inicio: `max = 3`, `count = 1`
- Siguiente valor `2`: no cambia nada
- Siguiente valor `1`: no cambia nada
- Siguiente valor `3`: como es igual a `max`, `count` pasa a `2`

Al terminar el recorrido, `count` contiene la respuesta.

## 6. Input y output en HackerRank (Java)

### Firma esperada de la funcion
```java
public static int birthdayCakeCandles(List<Integer> candles)
```

### Entrada esperada
- Linea 1: entero `n`, cantidad de velas.
- Linea 2: `n` enteros separados por espacio.

### Salida esperada
- Un solo entero: la cantidad de velas con la altura maxima.

### Ejemplo visual
```text
Input:
4
3 2 1 3

Output:
2
```

## 7. Complejidad esperada
- Tiempo: `O(n)` tanto en la solucion de dos recorridos como en la de un recorrido.
- Espacio extra: `O(1)` porque solo usas unas pocas variables.

## 8. Errores comunes
- Ordenar la lista cuando no es necesario.
- Confundir el valor maximo con su indice.
- Retornar la altura maxima en lugar de retornar cuantas veces aparece.
- Olvidar reiniciar el contador cuando aparece un nuevo maximo en la solucion de un recorrido.
- Inicializar mal el maximo si la lista no esta vacia.

## 9. Checklist antes de enviar
- [ ] Identifique correctamente la altura maxima.
- [ ] Recorri toda la lista.
- [ ] Conte cuantas veces aparece esa altura.
- [ ] Retorne un entero, no la altura maxima.
- [ ] Probe con el sample y obtuve `2`.
- [ ] Verifique casos como una sola vela o todas las velas iguales.

## 10. Practica recomendada posterior
- Resolver una variante donde debas encontrar el segundo valor mas grande.
- Repetir el ejercicio usando dos recorridos y luego un solo recorrido.
- Probar casos como una sola vela, todas iguales o maximos repetidos muchas veces.

---
Documento orientado a aprendizaje. No incluye la solucion final del reto.
