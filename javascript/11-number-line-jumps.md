# Number Line Jumps - Guia de estudio (JavaScript)

## 1. Objetivo del ejercicio

Entender como comparar posiciones y velocidades sobre una recta numerica para decidir si dos canguros pueden caer en el mismo punto despues del mismo numero de saltos.

## 2. Que debes dominar antes de resolverlo

### Variables enteras

- Trabajar con posiciones iniciales y distancias de salto.
- Comparar valores numericos.
- Entender que cada salto suma siempre la misma cantidad.

### Recta numerica

- Visualizar que ambos canguros avanzan hacia la derecha.
- Entender cual empieza adelante y cual empieza atras.
- Detectar si el canguro de atras realmente puede alcanzar al de adelante.

### Multiplicacion y diferencia

- Entender que despues de varios saltos la posicion depende de una suma repetida.
- Comparar la diferencia entre posiciones iniciales.
- Comparar la diferencia entre velocidades.

### Diferencia entre retornar e imprimir

- Este problema pide retornar `"YES"` o `"NO"`.
- En HackerRank, la plataforma imprime el valor que tu funcion retorna.

## 3. Traduccion del problema a logica

Tienes:

- un primer canguro que empieza en `x1`
- un primer canguro que salta `v1` metros cada vez
- un segundo canguro que empieza en `x2`
- un segundo canguro que salta `v2` metros cada vez

La idea es:

1. Revisar cual canguro empieza adelante.
2. Verificar si el que va atras salta mas rapido que el que va adelante.
3. Si no salta mas rapido, entonces nunca lo alcanzara.
4. Si si salta mas rapido, revisar si la diferencia inicial entre posiciones puede cerrarse exactamente.
5. Si pueden caer en la misma posicion en el mismo salto, retornar `"YES"`.
6. Si no, retornar `"NO"`.

Ejemplo con:

- `x1 = 0`
- `v1 = 3`
- `x2 = 4`
- `v2 = 2`

Posiciones despues de varios saltos:

- salto 1:
  - canguro 1: `3`
  - canguro 2: `6`
- salto 2:
  - canguro 1: `6`
  - canguro 2: `8`
- salto 3:
  - canguro 1: `9`
  - canguro 2: `10`
- salto 4:
  - canguro 1: `12`
  - canguro 2: `12`

Como ambos llegan al mismo punto en el mismo salto, la respuesta es `"YES"`.

## 4. Habilidades clave que practicaras

- Analisis de condiciones sobre recta numerica.
- Comparacion de velocidades.
- Deteccion de casos imposibles.
- Razonamiento matematico simple sin simulaciones largas.

## 5. Estrategia de implementacion (sin codigo final)

La forma mas clara de resolver este ejercicio es pensar en un arbol de decisiones.

No necesitas simular salto por salto.

Lo que realmente debes responder es esto:

- el canguro que va atras puede alcanzar al que va adelante?
- si puede alcanzarlo, lo hara exactamente en un salto entero?

### Paso 1: revisa si ya empiezan en la misma posicion

Si `x1 === x2`, entonces la respuesta es inmediatamente:

```text
YES
```

Porque ambos ya estan en el mismo punto antes de dar cualquier salto.

### Paso 2: identifica cual canguro empieza atras

Solo el canguro que empieza atras puede "alcanzar" al otro.

Si:

- `x1 < x2`, el primer canguro va atras
- `x2 < x1`, el segundo canguro va atras

Eso importa porque ahora debes comparar la velocidad del que va atras contra la del que va adelante.

### Paso 3: detecta el caso imposible por velocidad

Si el canguro que va atras salta igual o menos que el que va adelante, nunca podra alcanzarlo.

Ejemplo:

- `x1 = 0`, `v1 = 2`
- `x2 = 5`, `v2 = 3`

Aqui el primero va atras, pero ademas salta menos.

La distancia entre ellos no se reduce. Entonces la respuesta es:

```text
NO
```

### Paso 4: calcula si la distancia se cierra exactamente

Si el canguro de atras si salta mas rapido, entonces ahora debes revisar si la diferencia entre posiciones iniciales se puede cerrar exactamente.

La igualdad importante es:

```text
x1 + n * v1 = x2 + n * v2
```

Eso significa:

- `x1 + n * v1` es la posicion del primer canguro despues de `n` saltos
- `x2 + n * v2` es la posicion del segundo canguro despues de `n` saltos

Si reordenas esa expresion, obtienes:

```text
x2 - x1 = n * (v1 - v2)
```

Esta forma es mas util porque te deja ver dos cosas:

- `x2 - x1` representa la distancia inicial entre ellos
- `v1 - v2` representa cuanto recorta uno respecto al otro en cada salto

### Paso 5: piensa la division como una pregunta simple

Pregunta clave:

La distancia inicial se puede dividir exactamente por la diferencia de velocidades?

Si la respuesta es si, entonces existe un numero entero de saltos `n` y debes retornar:

```text
YES
```

Si la respuesta es no, entonces uno lo sobrepasa o se queda corto entre saltos, pero nunca coincide exactamente en el mismo punto. En ese caso debes retornar:

```text
NO
```

### Paso 6: ejemplo completo

Caso:

- `x1 = 0`
- `v1 = 3`
- `x2 = 4`
- `v2 = 2`

1. No empiezan en la misma posicion.
2. El primer canguro va atras porque `0 < 4`.
3. El primero si puede acercarse porque `3 > 2`.
4. La distancia inicial es `4`.
5. La diferencia de velocidades es `1`.
6. Como `4 / 1` es exacto, si existe un numero entero de saltos.

La respuesta final es:

```text
YES
```

### Paso 7: ejemplo donde no se encuentran

Caso:

- `x1 = 0`
- `v1 = 4`
- `x2 = 5`
- `v2 = 2`

1. El primero va atras.
2. El primero si salta mas rapido.
3. La distancia inicial es `5`.
4. La diferencia de velocidades es `2`.
5. `5 / 2` no es entero.

Eso significa que el primero lo va a sobrepasar, pero no en el mismo punto exacto durante un salto.

La respuesta es:

```text
NO
```

### Resumen mental rapido

Puedes pensar el ejercicio asi:

1. Si empiezan juntos, `"YES"`.
2. Si el que va atras no es mas rapido, `"NO"`.
3. Si la distancia inicial se divide exactamente por la diferencia de velocidades, `"YES"`.
4. En cualquier otro caso, `"NO"`.

## 6. Como pensar este problema sin confundirte

El error mas comun es intentar simular muchos saltos sin antes analizar la logica.

En realidad, este problema se reduce a dos preguntas:

- El canguro que va atras puede acercarse?
- La diferencia entre ellos se cierra exactamente en un numero entero de saltos?

Ejemplo de caso imposible:

- `x1 = 0`
- `v1 = 2`
- `x2 = 5`
- `v2 = 3`

Aqui el segundo canguro:

- empieza adelante
- y ademas salta mas lejos

Entonces el primero nunca lo alcanzara.

Otro error comun es pensar que basta con que las trayectorias se crucen "en algun momento". No basta con eso.

Deben coincidir exactamente:

- en la misma posicion
- en el mismo numero de saltos

## 7. Input y output en HackerRank (Node.js)

### Entrada esperada

- Una sola linea con cuatro enteros `x1`, `v1`, `x2`, `v2`.

### Salida esperada

- Una sola cadena:
  - `"YES"` si ambos canguros coinciden
  - `"NO"` si no coinciden

### Ejemplo visual

```text
Input:
0 3 4 2

Output:
YES
```

## 8. Complejidad esperada

- Tiempo: `O(1)` porque solo haces comparaciones y operaciones aritmeticas.
- Espacio extra: `O(1)` porque solo usas unas pocas variables.

## 9. Errores comunes

- Simular demasiados saltos cuando el problema puede resolverse con observacion matematica.
- No revisar cual canguro empieza adelante.
- No verificar si el canguro de atras realmente salta mas rapido.
- Olvidar que el numero de saltos debe ser entero.
- Retornar `true` o `false` en vez de `"YES"` o `"NO"`.
- Confundir igualdad de posicion con igualdad en distinto momento.

## 10. Checklist antes de enviar

- [ ] Identifique correctamente cual canguro empieza adelante.
- [ ] Revise si el canguro de atras puede alcanzarlo por velocidad.
- [ ] Verifique si la diferencia se cierra en un numero entero de saltos.
- [ ] Retorne exactamente `"YES"` o `"NO"`.
- [ ] Probe con el sample `0 3 4 2` y obtuve `"YES"`.
- [ ] Probe con el sample `0 2 5 3` y obtuve `"NO"`.

## 11. Practica recomendada posterior

- Resolver una variante donde debas calcular el numero exacto de saltos del encuentro.
- Repetir el ejercicio pensando primero con simulacion y luego con algebra.
- Probar casos como:
  - misma posicion inicial
  - misma velocidad
  - uno empieza adelante y tambien salta mas rapido
  - uno empieza atras pero recorta la distancia exactamente

---

Documento orientado a aprendizaje. No incluye la solucion final del reto.
