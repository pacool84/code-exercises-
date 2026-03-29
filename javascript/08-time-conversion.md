# Time Conversion - Guia de estudio (JavaScript)

## 1. Objetivo del ejercicio

Entender como transformar una hora en formato de 12 horas con sufijo `AM` o `PM` al formato militar de 24 horas.

## 2. Que debes dominar antes de resolverlo

### Cadenas en JavaScript

- Extraer partes de una cadena usando metodos como `.slice()`.
- Separar una hora en componentes como horas, minutos y segundos.
- Reconstruir una nueva cadena con el formato correcto.

### Conversion de texto a numero

- Convertir la parte de la hora desde texto a numero para poder compararla.
- Entender que `"07"` como texto no se trabaja igual que `7` como numero.

### Reglas del formato horario

- Saber que en formato de 12 horas:
  - `AM` representa horas antes del mediodia
  - `PM` representa horas despues del mediodia
- Recordar los dos casos especiales:
  - `12:xx:xxAM` se convierte a `00:xx:xx`
  - `12:xx:xxPM` se queda como `12:xx:xx`

### Retornar en lugar de imprimir

- Este problema pide retornar una cadena.
- En HackerRank, la plataforma imprime el resultado final despues de que tu funcion lo retorna.

## 3. Traduccion del problema a logica

Dada una cadena `s` como `07:05:45PM`:

1. Separa el sufijo final (`AM` o `PM`).
2. Toma la parte de la hora sin el sufijo.
3. Divide esa parte en hora, minutos y segundos.
4. Convierte solo la hora segun estas reglas:
   - Si es `AM` y la hora es `12`, cambia a `00`.
   - Si es `AM` y la hora no es `12`, se queda igual.
   - Si es `PM` y la hora es `12`, se queda igual.
   - Si es `PM` y la hora no es `12`, suma `12`.
5. Reconstruye la cadena final en formato de 24 horas.

Ejemplo con `07:05:45PM`:

- Sufijo: `PM`
- Hora original: `07`
- Como es `PM` y no es `12`, se suma `12`
- `07` pasa a `19`
- Resultado final: `19:05:45`

## 4. Habilidades clave que practicaras

- Manipulacion precisa de cadenas.
- Aplicacion de reglas condicionales.
- Manejo de casos especiales.
- Transformacion de formato sin alterar minutos ni segundos.

## 5. Estrategia de implementacion (sin codigo final)

1. Extrae el sufijo `AM` o `PM` desde el final de la cadena.

```js
const suffix = s.slice(-2);
```

### Que hace `.slice()` y por que sirve aqui

El metodo `.slice()` extrae una parte de una cadena y devuelve una nueva cadena sin modificar la original.

Su forma general es:

```js
cadena.slice(inicio, fin);
```

- `inicio` indica desde que posicion quieres comenzar.
- `fin` indica hasta que posicion quieres llegar, **sin incluir esa ultima posicion**.

Ejemplo:

```js
const text = "07:05:45PM";
```

Si numeras los caracteres:

```text
0 1 2 3 4 5 6 7 8 9
0 7 : 0 5 : 4 5 P M
```

Entonces:

```js
text.slice(0, 8); // "07:05:45"
```

Eso significa:

- empieza en la posicion `0`
- termina antes de la posicion `8`
- por eso toma desde `0` hasta `7`

Tambien puedes usar indices negativos:

```js
text.slice(-2); // "PM"
```

Cuando usas un numero negativo, JavaScript empieza a contar desde el final:

- `-1` seria el ultimo caracter
- `-2` seria el penultimo caracter

Por eso `slice(-2)` toma exactamente los dos ultimos caracteres, que en este ejercicio son el sufijo `AM` o `PM`.

Aqui `.slice()` es una muy buena opcion porque la estructura de la hora siempre tiene el mismo formato:

- los primeros 8 caracteres son `hh:mm:ss`
- los ultimos 2 caracteres son `AM` o `PM`

2. Toma solo la parte `hh:mm:ss`.

```js
const time = s.slice(0, 8);
```

3. Divide la hora en sus tres partes.

```js
const [hours, minutes, seconds] = time.split(":");
```

### Que hace `.split()` y por que sirve aqui

El metodo `.split()` toma una cadena y la divide en varias partes usando un separador. El resultado es un arreglo.

Su forma general es:

```js
cadena.split(separador);
```

Ejemplo:

```js
const time = "07:05:45";
const parts = time.split(":");
```

El resultado seria:

```js
["07", "05", "45"]
```

Esto pasa porque `.split(":")` corta la cadena cada vez que encuentra el caracter `:`.

En este ejercicio sirve mucho porque la hora siempre viene con esta estructura fija:

```text
hh:mm:ss
```

Entonces:

- antes del primer `:` esta la hora
- entre los dos `:` estan los minutos
- despues del segundo `:` estan los segundos

Por eso cuando haces:

```js
const [hours, minutes, seconds] = time.split(":");
```

JavaScript reparte cada parte del arreglo en una variable distinta:

- `hours` recibe `"07"`
- `minutes` recibe `"05"`
- `seconds` recibe `"45"`

Esto se llama desestructuracion y evita tener que escribir algo como:

```js
const parts = time.split(":");
const hours = parts[0];
const minutes = parts[1];
const seconds = parts[2];
```

Esto te permite trabajar cada parte por separado:

- `hours` para aplicar la conversion
- `minutes` para conservarlos tal como vienen
- `seconds` para conservarlos tal como vienen

4. Convierte la parte de la hora a numero para poder compararla.

```js
let convertedHour = parseInt(hours, 10);
```

5. Aplica las reglas del formato.

Casos:

- Si es `AM`:
  - si la hora es `12`, cambia a `0`
  - en cualquier otro caso, se queda igual
- Si es `PM`:
  - si la hora es `12`, se queda igual
  - en cualquier otro caso, suma `12`

Conceptualmente:

```js
if (suffix === "AM") {
  // tratar caso especial de las 12 AM
} else {
  // tratar caso PM
}
```

6. Asegura que la hora tenga siempre dos digitos.

```js
String(convertedHour).padStart(2, "0");
```

Esto es importante porque `0` debe salir como `00`, no como `0`.

7. Reconstruye el resultado final.

```js
`${finalHour}:${minutes}:${seconds}`;
```

## 6. Input y output en HackerRank (Node.js)

### Entrada esperada

- Una sola cadena `s` en formato de 12 horas.

Ejemplos validos:

- `07:05:45PM`
- `12:00:00AM`
- `12:40:22PM`

### Salida esperada

- Una sola cadena con la hora equivalente en formato de 24 horas.

### Ejemplo visual

```text
Input:
07:05:45PM

Output:
19:05:45
```

## 7. Complejidad esperada

- Tiempo: `O(1)` porque la longitud de la cadena siempre es fija.
- Espacio extra: `O(1)`.

## 8. Errores comunes

- Sumar `12` tambien cuando la hora ya es `12PM`.
- Dejar `12AM` como `12` en lugar de convertirlo a `00`.
- Modificar minutos o segundos cuando no deben cambiar.
- Olvidar conservar el formato de dos digitos en la hora.
- Intentar resolverlo con demasiada logica cuando solo hace falta aplicar reglas directas.

## 9. Checklist antes de enviar

- [ ] Separe correctamente el sufijo `AM` o `PM`.
- [ ] Extrae la parte `hh:mm:ss` sin errores.
- [ ] Aplique bien el caso especial de `12AM`.
- [ ] Aplique bien el caso especial de `12PM`.
- [ ] Mantuve minutos y segundos sin cambios.
- [ ] Retorne una cadena final en formato `HH:mm:ss`.
- [ ] Probe con `07:05:45PM` y obtuve `19:05:45`.

## 10. Practica recomendada posterior

- Repetir el ejercicio sin usar `split()`, solo con `slice()`.
- Resolver una variante que convierta de 24 horas a 12 horas.
- Practicar mas ejercicios de transformacion de cadenas con condiciones.

---

Documento orientado a aprendizaje. No incluye la solucion final del reto.
