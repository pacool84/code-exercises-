# Apple and Orange - Guia de estudio (JavaScript)

## 1. Objetivo del ejercicio

Entender como calcular posiciones finales sobre una recta numerica y contar cuantas frutas caen dentro de un rango dado.

## 2. Que debes dominar antes de resolverlo

### Arreglos en JavaScript

- Trabajar con dos arreglos distintos: uno para manzanas y otro para naranjas.
- Recorrer todos los elementos de cada arreglo.
- Procesar cada distancia para convertirla en una posicion final.

### Suma de posiciones

- Entender que cada fruta no trae su posicion final, sino una distancia relativa al arbol.
- Calcular la posicion real sumando:
  - posicion del arbol
  - distancia recorrida por la fruta

### Rangos inclusivos

- Verificar si un valor cae dentro de un intervalo incluyendo los extremos.
- En este problema, una fruta cuenta si cae entre `s` y `t`, inclusive.

### Contadores

- Llevar un conteo separado para manzanas y naranjas.
- Incrementar cada contador solo cuando la fruta cae dentro del rango de la casa.

### Diferencia entre retornar e imprimir

- Este problema pide imprimir resultados, no retornar un valor final unico.
- En HackerRank, normalmente tu funcion imprime la cantidad de manzanas y la cantidad de naranjas en lineas separadas.

## 3. Traduccion del problema a logica

Tienes:

- una casa que va desde `s` hasta `t`
- un arbol de manzanas en `a`
- un arbol de naranjas en `b`
- un arreglo `apples` con distancias
- un arreglo `oranges` con distancias

La idea es:

1. Tomar cada distancia de `apples`.
2. Sumarla a la posicion del arbol `a` para obtener donde cae esa manzana.
3. Revisar si esa posicion esta dentro del rango `[s, t]`.
4. Si lo esta, aumentar el contador de manzanas.
5. Repetir el mismo proceso para `oranges` usando la posicion `b`.
6. Imprimir ambos conteos.

Ejemplo con:

- `s = 7`
- `t = 11`
- `a = 5`
- `b = 15`
- `apples = [-2, 2, 1]`
- `oranges = [5, -6]`

Manzanas:

- `5 + (-2) = 3`
- `5 + 2 = 7`
- `5 + 1 = 6`

Solo `7` cae dentro de `[7, 11]`, asi que cuenta una manzana.

Naranjas:

- `15 + 5 = 20`
- `15 + (-6) = 9`

Solo `9` cae dentro de `[7, 11]`, asi que cuenta una naranja.

## 4. Habilidades clave que practicaras

- Manejo de arreglos.
- Traduccion de distancias relativas a posiciones absolutas.
- Verificacion de rangos inclusivos.
- Uso de contadores.
- Resolucion de problemas sobre recta numerica.

## 5. Estrategia de implementacion (sin codigo final)

1. Crea dos contadores:

```js
let appleCount = 0;
let orangeCount = 0;
```

2. Recorre el arreglo de manzanas.

```js
for (const distance of apples) {
  // calcular posicion final
}
```

3. Convierte cada distancia en posicion final.

```js
const landingPosition = a + distance;
```

Aqui `distance` puede ser positiva o negativa:

- si es positiva, la fruta cae a la derecha del arbol
- si es negativa, cae a la izquierda del arbol

4. Verifica si la fruta cae dentro del rango de la casa.

```js
if (landingPosition >= s && landingPosition <= t) {
  appleCount++;
}
```

5. Repite el proceso para las naranjas.

```js
for (const distance of oranges) {
  const landingPosition = b + distance;
  // validar rango
}
```

6. Imprime ambos resultados en lineas separadas.

Conceptualmente:

```js
console.log(appleCount);
console.log(orangeCount);
```

## 6. Como pensar este problema sin confundirte

El error mas comun es pensar que los numeros de `apples` y `oranges` ya son posiciones finales. No lo son.

Son distancias relativas a cada arbol.

Eso significa:

- para una manzana, la posicion real es `a + distancia`
- para una naranja, la posicion real es `b + distancia`

Ejemplo rapido:

Si el arbol de manzanas esta en `5` y una manzana cae con distancia `2`:

- posicion final = `5 + 2 = 7`

Si cae con distancia `-2`:

- posicion final = `5 + (-2) = 3`

La clave del problema no es complicada, pero exige no mezclar:

- posicion del arbol
- distancia recorrida
- rango de la casa

## 7. Input y output en HackerRank (Node.js)

### Entrada esperada

- Primera linea: dos enteros `s` y `t`.
- Segunda linea: dos enteros `a` y `b`.
- Tercera linea: dos enteros `m` y `n`.
- Cuarta linea: `m` enteros para `apples`.
- Quinta linea: `n` enteros para `oranges`.

### Salida esperada

- Primera linea: cantidad de manzanas que caen sobre la casa.
- Segunda linea: cantidad de naranjas que caen sobre la casa.

### Ejemplo visual

```text
Input:
7 11
5 15
3 2
-2 2 1
5 -6

Output:
1
1
```

## 8. Complejidad esperada

- Tiempo: `O(m + n)` porque recorres una vez el arreglo de manzanas y una vez el de naranjas.
- Espacio extra: `O(1)` si solo usas contadores y variables temporales.

## 9. Errores comunes

- Contar distancias en lugar de posiciones finales.
- Olvidar sumar la distancia al punto del arbol.
- Usar mal el rango y excluir `s` o `t`.
- Mezclar el arbol de manzanas con el de naranjas.
- Intentar ordenar arreglos cuando no hace falta.
- Retornar algo cuando el problema realmente espera impresion en salida.

## 10. Checklist antes de enviar

- [ ] Calcule la posicion final de cada manzana usando `a + distance`.
- [ ] Calcule la posicion final de cada naranja usando `b + distance`.
- [ ] Verifique correctamente el rango inclusivo `[s, t]`.
- [ ] Lleve un contador separado para manzanas y naranjas.
- [ ] Imprimi ambos resultados en lineas separadas.
- [ ] Probe con el sample y obtuve `1` y `1`.

## 11. Practica recomendada posterior

- Resolver una variante donde debas contar elementos dentro de un rango.
- Repetir el ejercicio usando `for` clasico y luego `for...of`.
- Probar casos como:
  - todas las frutas caen fuera del rango
  - todas las frutas caen dentro del rango
  - frutas que caen exactamente en `s`
  - frutas que caen exactamente en `t`

---

Documento orientado a aprendizaje. No incluye la solucion final del reto.
