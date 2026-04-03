# Grading Students - Guia de estudio (Java)

## 1. Objetivo del ejercicio
Entender como recorrer una lista de calificaciones y aplicar reglas de redondeo condicionales para construir una nueva lista resultado.

## 2. Que debes dominar antes de resolverlo

### Listas en Java
- Trabajar con `List<Integer>`.
- Recorrer todos los elementos con `for`, `for-each` o indices.
- Construir una nueva lista con las calificaciones finales.

### Operador modulo
- Entender que `%` devuelve el residuo de una division.
- Usarlo para saber cuanto le falta a una nota para llegar al siguiente multiplo de `5`.

### Condicionales
- Aplicar reglas distintas segun el valor de la calificacion.
- Distinguir claramente cuando una nota se mantiene y cuando debe redondearse.

### Diferencia entre retornar e imprimir
- Este problema pide retornar una lista.
- HackerRank se encarga de imprimir el resultado despues de que tu funcion lo retorna.

## 3. Traduccion del problema a logica
Dada una lista `grades`:

1. Revisa cada calificacion una por una.
2. Si la calificacion es menor que `38`, se queda igual.
3. Si la calificacion es `38` o mayor:
   - encuentra el siguiente multiplo de `5`
   - calcula la diferencia entre la nota actual y ese multiplo
4. Si la diferencia es menor que `3`, redondea hacia arriba.
5. Si la diferencia es `3` o mas, deja la nota igual.
6. Guarda la nota final en una nueva lista.
7. Retorna la lista final.

Ejemplo con `73`:

- El siguiente multiplo de `5` es `75`
- La diferencia es `2`
- Como `2 < 3`, la nota final es `75`

Ejemplo con `67`:

- El siguiente multiplo de `5` es `70`
- La diferencia es `3`
- Como no es menor que `3`, la nota se queda en `67`

Ejemplo con `33`:

- Es menor que `38`
- No se redondea
- Se queda en `33`

## 4. Habilidades clave que practicaras
- Recorrido de listas en Java.
- Aplicacion de reglas por casos.
- Uso del operador modulo.
- Construccion de una nueva lista transformada.

## 5. Estrategia de implementacion (sin codigo final)

1. Crea una lista vacia para guardar las notas finales.

```java
List<Integer> result = new ArrayList<>();
```

2. Recorre la lista de calificaciones.

```java
for (int grade : grades) {
    // aplicar reglas
}
```

La variable `grade` representa la nota actual que estas procesando.

3. Primero revisa si la nota es menor que `38`.

```java
if (grade < 38) {
    // no redondear
}
```

Esta regla existe porque aunque redondearas una nota como `33` a `35`, seguiria siendo reprobatoria. Por eso el problema indica que esas notas deben quedarse igual.

4. Si la nota puede redondearse, encuentra el siguiente multiplo de `5`.

Una forma comun es calcular el residuo:

```java
int remainder = grade % 5;
```

Si `grade = 73`:

- `73 % 5` da `3`
- eso significa que le faltan `2` para llegar a `75`

Entonces puedes obtener cuanto falta:

```java
int difference = 5 - remainder;
```

Pero ojo: si el numero ya es multiplo de `5`, el residuo sera `0`, y en ese caso no necesitas redondear nada.

5. Aplica la regla del redondeo.

La idea general es:

- si la diferencia al siguiente multiplo de `5` es menor que `3`, redondeas
- en otro caso, dejas la nota igual

Conceptualmente:

```java
if (difference < 3) {
    // subir la nota
} else {
    // dejarla igual
}
```

6. Guarda siempre una nota final en la lista resultado.

Puedes agregar la nota original o la redondeada segun el caso:

```java
result.add(finalGrade);
```

7. Al final, retorna la lista.

```java
return result;
```

## 6. Como pensar el siguiente multiplo de 5

Este es el punto central del ejercicio.

Si tienes una nota como `84`:

- `84 % 5 = 4`
- eso significa que esta a `1` del siguiente multiplo de `5`
- el siguiente multiplo es `85`

Si tienes `57`:

- `57 % 5 = 2`
- le faltan `3` para llegar a `60`
- como la diferencia es `3`, no se redondea

Si tienes `40`:

- `40 % 5 = 0`
- ya es multiplo de `5`
- no hace falta cambiarla

Una forma mental rapida:

- residuo `0`: ya esta listo
- residuo `1`: faltan `4`
- residuo `2`: faltan `3`
- residuo `3`: faltan `2`
- residuo `4`: faltan `1`

Solo se redondea cuando faltan `1` o `2`.

## 7. Input y output en HackerRank (Java)

### Firma esperada de la funcion

```java
public static List<Integer> gradingStudents(List<Integer> grades)
```

### Entrada esperada
- Primera linea: entero `n`, cantidad de estudiantes.
- Siguientes `n` lineas: una calificacion por linea.

### Salida esperada
- `n` lineas con las calificaciones finales despues del redondeo.

### Ejemplo visual

```text
Input:
4
73
67
38
33

Output:
75
67
40
33
```

## 8. Complejidad esperada
- Tiempo: `O(n)` porque recorres la lista una sola vez.
- Espacio extra: `O(n)` porque construyes una nueva lista con las calificaciones finales.

## 9. Errores comunes
- Redondear notas menores que `38`.
- Redondear cuando la diferencia es exactamente `3`.
- Olvidar que el redondeo siempre es hacia arriba, no hacia el multiplo mas cercano.
- Modificar mal una nota que ya es multiplo de `5`.
- Imprimir dentro de la funcion en vez de retornar la lista.
- Olvidar guardar cada resultado en la lista final.

## 10. Checklist antes de enviar
- [ ] Recorri toda la lista de calificaciones.
- [ ] No redondee notas menores que `38`.
- [ ] Calcule correctamente el siguiente multiplo de `5`.
- [ ] Solo redondee cuando la diferencia fue menor que `3`.
- [ ] Retorne una lista final, no una sola nota.
- [ ] Probe con el sample y obtuve `75`, `67`, `40`, `33`.

## 11. Practica recomendada posterior
- Resolver una variante donde debas transformar una lista y devolver otra.
- Repetir el ejercicio usando `for` clasico y luego usando `for-each`.
- Probar casos como:
  - notas menores que `38`
  - notas que ya son multiplo de `5`
  - notas cuya diferencia al siguiente multiplo es `1`, `2` y `3`

---

Documento orientado a aprendizaje. No incluye la solucion final del reto.
