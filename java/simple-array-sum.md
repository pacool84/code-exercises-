# Simple Array Sum - Guia de estudio (Java)

## 1. Objetivo del ejercicio
Entender como recorrer un arreglo/lista de enteros en Java y acumular la suma total de sus elementos.

## 2. Que debes dominar antes de resolverlo

### Listas y arreglos en Java
- Usar `List<Integer>` o `int[]` segun la plantilla de HackerRank.
- Acceder por indice (`list.get(i)` o `arr[i]`).
- Recordar que los indices inician en `0`.

### Estructuras de control
- Bucle `for` para recorrer todos los elementos.
- Condicion de parada correcta: `i < size`.

### Variables acumuladoras
- Inicializar acumulador en `0`.
- Actualizar en cada iteracion con `+=`.

### Tipos numericos
- Resultado esperado: `int`.
- En este problema, con restricciones dadas, `int` es suficiente.

### Funciones
- Recibir la coleccion de entrada.
- Retornar un entero con la suma.

## 3. Traduccion del problema a logica
Dado un arreglo/lista `ar`:
1. Crea una variable `sum = 0`.
2. Recorre cada elemento.
3. Suma cada valor al acumulador.
4. Retorna `sum`.

## 4. Habilidades clave que practicaras
- Recorrido lineal de estructuras de datos.
- Implementacion de algoritmo `O(n)`.
- Manejo de entrada/salida en formato HackerRank.

## 5. Estrategia de implementacion (sin codigo final)
1. Inicializa acumulador.
```java
int sum = 0;
```

2. Recorre y acumula.
```java
for (int i = 0; i < ar.size(); i++) {
    // sum += ar.get(i);
}
```

3. Retorna el resultado.
```java
return sum;
```

## 6. Input y output en HackerRank (Java)

### Entrada esperada
- Linea 1: entero `n`.
- Linea 2: `n` enteros separados por espacio.

### Parsing tipico
- Leer con `BufferedReader`.
- Separar la linea por espacios.
- Convertir cada token a `Integer`.

### Salida esperada
- Un entero: la suma total de los elementos.

## 7. Complejidad esperada
- Tiempo: `O(n)`.
- Espacio extra: `O(1)` para la logica de suma.

## 8. Errores comunes
- Iniciar la suma con un valor distinto de `0`.
- Usar un limite incorrecto en el bucle (`<=` en lugar de `<`).
- No convertir correctamente los datos de entrada a enteros.
- Imprimir formato incorrecto en lugar del valor final.

## 9. Checklist antes de enviar
- [ ] Recorri todos los elementos exactamente una vez.
- [ ] Acumule cada valor correctamente.
- [ ] Retorne un solo entero como resultado.
- [ ] Valide con el sample: `31`.

## 10. Practica recomendada posterior
- Resolver una variante con numeros negativos.
- Repetir el ejercicio usando `for-each`.
- Probar casos pequenos y limites de entrada.

---
Documento orientado a aprendizaje. No incluye la solucion final del reto.
