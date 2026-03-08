# Compare the Triplets - Guia de estudio (Java)

## Estado actual del archivo Java
- Archivo actual: `java/compare-the-triplets.java`.
- El parsing de entrada y la impresion de salida ya estan implementados con `BufferedReader`, `Stream` y `BufferedWriter`.
- La funcion `compareTriplets(List<Integer> a, List<Integer> b)` sigue pendiente (sin logica), por lo que ese es el unico bloque por completar.

## 1. Objetivo del ejercicio
Entender como comparar dos listas pequenas elemento por elemento y acumular puntajes segun reglas condicionales.

## 2. Que debes dominar antes de resolverlo

### Listas en Java
- Crear listas numericas: `List<Integer> a = Arrays.asList(5, 6, 7);`
- Acceder por indice: `a.get(0)`, `a.get(1)`, `a.get(2)`.
- Saber que los indices empiezan en `0`.

### Estructuras de control
- `if`, `else if`, `else` para tomar decisiones.
- Ciclo `for` para iterar posiciones de la lista.

### Variables acumuladoras
- Variables que empiezan en `0` y se incrementan cuando una condicion se cumple.
- Ejemplo mental: `puntosAlice` y `puntosBob`.

### Comparacion de valores
- Operadores: `>`, `<`, `==` (con `Integer`, comparar valores ya desenvueltos a `int`).
- Entender que en igualdad no se suma punto.

### Funciones y retorno
- Definir una funcion con parametros.
- Retornar una lista con el resultado final.

## 3. Traduccion del problema a logica
Se comparan dos tripletas `a` y `b` con exactamente 3 posiciones.

Por cada indice `i`:
1. Si `a[i]` es mayor, suma 1 a Alice.
2. Si `b[i]` es mayor, suma 1 a Bob.
3. Si son iguales, no sumes nada.

Al final, devuelve `[scoreAlice, scoreBob]`.

## 4. Habilidades clave que practicaras
- Pensamiento algoritmico paso a paso.
- Manejo de indices sin errores de rango.
- Uso correcto de condicionales mutuamente excluyentes.
- Construccion de salida en el formato exacto que pide HackerRank.

## 5. Estrategia de implementacion (sin codigo final)
1. Inicializa dos contadores en cero.
```java
int scoreAlice = 0;
int scoreBob = 0;
```

2. Recorre los 3 indices.
```java
for (int i = 0; i < 3; i++) {
    // aqui comparas a.get(i) y b.get(i)
}
```

3. Aplica la regla de comparacion en cada indice.
```java
if (a.get(i) > b.get(i)) {
    scoreAlice++;
} else if (a.get(i) < b.get(i)) {
    scoreBob++;
} // si son iguales, no haces nada
```

4. Regresa ambos contadores en una lista de 2 posiciones.
```java
return Arrays.asList(scoreAlice, scoreBob);
```

## 6. Input y output en HackerRank (Java)

### Entrada esperada
- Linea 1: tres enteros para `a`.
- Linea 2: tres enteros para `b`.

### Parsing tipico
- Leer `stdin` con `BufferedReader`.
- Separar por espacios.
- Convertir `String` a `Integer`.
- En tu plantilla actual, esto ya viene resuelto en `main`.

### Salida esperada
- Dos enteros separados por espacio, en orden: `Alice Bob`.

## 7. Complejidad esperada
- Tiempo: `O(n)` con `n = 3` (constante en este problema).
- Espacio extra: `O(1)` para la logica de puntajes.

## 8. Errores comunes
- Invertir el orden del resultado `[Bob, Alice]` en lugar de `[Alice, Bob]`.
- Sumar puntos en empate.
- No parsear correctamente la entrada.
- Imprimir salida con formato incorrecto.

## 9. Checklist antes de enviar
- [ ] Compare exactamente 3 posiciones.
- [ ] Manejo correctamente `>`, `<` y el empate.
- [ ] En empate no sumo puntos.
- [ ] Retorno `[scoreAlice, scoreBob]` en ese orden.
- [ ] Probe con los samples del enunciado.

## 10. Practica recomendada posterior
- Repetir el ejercicio usando `for` y luego otra variante de recorrido.
- Resolver un problema similar de comparacion de arreglos/listas.
- Escribir casos de prueba simples para validar la logica.

---
Documento orientado a aprendizaje. No incluye la solucion final del reto.
