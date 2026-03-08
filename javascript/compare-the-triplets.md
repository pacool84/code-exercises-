# Compare the Triplets - Guía de estudio (Español)

## 1. Objetivo del ejercicio
Entender cómo comparar dos arreglos pequeños elemento por elemento y acumular puntajes según reglas condicionales.

## 2. Qué debes dominar antes de resolverlo

### Arreglos en JavaScript
- Crear arreglos numéricos: `const a = [5, 6, 7]`.
- Acceder por índice: `a[0]`, `a[1]`, `a[2]`.
- Saber que los índices empiezan en `0`.

### Estructuras de control
- `if`, `else if`, `else` para tomar decisiones.
- Ciclos `for` para iterar posiciones de un arreglo.

### Variables acumuladoras
- Variables que empiezan en `0` y se incrementan cuando una condición se cumple.
- Ejemplo mental: `puntosAlice` y `puntosBob`.

### Comparación de valores
- Operadores: `>`, `<`, `===`.
- Entender que en igualdad no se suma punto.

### Funciones
- Definir una función con parámetros.
- Retornar un arreglo como resultado.

## 3. Traducción del problema a lógica
Se comparan dos tripletas `a` y `b` con exactamente 3 posiciones.

Por cada índice `i`:
1. Si `a[i]` es mayor, suma 1 a Alice.
2. Si `b[i]` es mayor, suma 1 a Bob.
3. Si son iguales, no sumes nada.

Al final, devuelve `[scoreAlice, scoreBob]`.

## 4. Habilidades clave que practicarás
- Pensamiento algorítmico paso a paso.
- Manejo de índices sin errores de rango.
- Uso correcto de condicionales mutuamente excluyentes.
- Construcción de salidas en el formato exacto que pide HackerRank.

## 5. Estrategia de implementación (sin código final)
1. Inicializa dos contadores en cero.
```js
let scoreAlice = 0;
let scoreBob = 0;
```

2. Recorre los 3 índices.
```js
for (let i = 0; i < 3; i++) {
  // aquí comparas a[i] y b[i]
}
```

3. Aplica la regla de comparación en cada índice.
```js
if (a[i] > b[i]) {
  scoreAlice++;
} else if (a[i] < b[i]) {
  scoreBob++;
} // si son iguales, no haces nada
```

4. Regresa ambos contadores en un arreglo de 2 posiciones.
```js
return [scoreAlice, scoreBob];
```

## 6. Input y output en HackerRank (Node.js)

### Entrada esperada
- Línea 1: tres enteros para `a`.
- Línea 2: tres enteros para `b`.

### Parsing típico
- Leer `stdin`.
- Separar por líneas.
- Convertir cada línea a arreglo de números con `split(' ')` + `Number`.

### Salida esperada
- Dos enteros separados por espacio, en orden: `Alice Bob`.

## 7. Complejidad esperada
- Tiempo: `O(n)` con `n = 3` (constante en este problema).
- Espacio extra: `O(1)` (solo contadores y variables auxiliares).

## 8. Errores comunes
- Invertir el orden del resultado `[Bob, Alice]` en lugar de `[Alice, Bob]`.
- Usar `>=` o `<=` y sumar puntos en empate (incorrecto).
- No convertir strings a números al parsear input.
- Imprimir arreglo con formato incorrecto.

## 9. Checklist antes de enviar
- [ ] ¿Comparé exactamente 3 posiciones?
- [ ] ¿Manejo correctamente `>`, `<` y `===`?
- [ ] ¿El empate no suma puntos?
- [ ] ¿Retorno `[scoreAlice, scoreBob]` en ese orden?
- [ ] ¿Probé con los samples del enunciado?

## 10. Práctica recomendada posterior
- Repetir el ejercicio usando `for`, luego `for...of` con índice auxiliar.
- Resolver un problema similar de comparación de arreglos para reforzar patrones.
- Escribir una mini función de prueba con varios casos para validar lógica.

---
Documento orientado a aprendizaje. No incluye la solución final del reto.
