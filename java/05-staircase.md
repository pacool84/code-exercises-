# Staircase - Guia de estudio (Java)

## 1. Objetivo del ejercicio
Entender como construir e imprimir un patron de texto linea por linea usando espacios y simbolos `#`, manteniendo una alineacion exacta a la derecha.

## 2. Que debes dominar antes de resolverlo

### Cadenas en Java
- Crear texto repetido con `" ".repeat(...)` y `"#".repeat(...)`.
- Combinar espacios y simbolos para formar cada fila.
- Entender que cada fila es una cadena que luego se imprime.

### Ciclos
- Usar un `for` para recorrer las filas desde `1` hasta `n`.
- Entender como cambian los espacios y los `#` en cada iteracion.

### Impresion en consola
- Usar `System.out.println(...)` para imprimir cada fila.
- Saber que el reto pide imprimir, no retornar un valor.

### Relacion entre fila y contenido
- En cada fila hay dos partes:
  - espacios a la izquierda
  - simbolos `#` a la derecha
- A medida que avanzan las filas:
  - disminuyen los espacios
  - aumentan los `#`

## 3. Traduccion del problema a logica
Dado un entero `n`:

1. Recorre las filas desde `1` hasta `n`.
2. Para cada fila, calcula cuantos espacios iniciales necesita.
3. Calcula cuantos simbolos `#` necesita esa fila.
4. Construye la linea combinando espacios + `#`.
5. Imprime esa linea.

Para la fila `i`:
- espacios = `n - i`
- simbolos `#` = `i`

## 4. Habilidades clave que practicaras
- Pensamiento visual convertido en logica.
- Construccion de patrones con texto.
- Control preciso de salida para jueces automaticos.
- Manejo de iteraciones con cambios progresivos.

## 5. Estrategia de implementacion (sin codigo final)
1. Recorre desde la primera fila hasta la ultima.
```java
for (int i = 1; i <= n; i++) {
    // construir e imprimir fila
}
```

2. Calcula espacios y simbolos para cada fila.
```java
int spaces = n - i;
int blocks = i;
```

3. Construye la linea usando repeticion de cadenas.
```java
String line = " ".repeat(spaces) + "#".repeat(blocks);
```

4. Imprime la linea.
```java
System.out.println(line);
```

## 6. Input y output en HackerRank (Java)

### Entrada esperada
- Linea 1: un entero `n`.

### Salida esperada
- `n` lineas formando una escalera alineada a la derecha.
- La ultima linea debe tener `n` simbolos `#`.

### Ejemplo visual para `n = 4`
```text
   #
  ##
 ###
####
```

## 7. Complejidad esperada
- Tiempo: `O(n^2)` si consideras la construccion total de todos los caracteres impresos.
- Espacio extra: `O(n)` para la cadena de una fila en cada iteracion.

## 8. Errores comunes
- Alinear la escalera a la izquierda en lugar de a la derecha.
- Imprimir una cantidad incorrecta de espacios.
- Comenzar el ciclo en `0` y desajustar el patron.
- Retornar una cadena o coleccion en lugar de imprimir.
- Agregar espacios al final de la linea cuando no se necesitan.

## 9. Checklist antes de enviar
- [ ] Imprimi exactamente `n` filas.
- [ ] La primera fila tiene `n - 1` espacios y `1` `#`.
- [ ] La ultima fila tiene `n` `#` y ningun espacio inicial.
- [ ] La escalera quedo alineada a la derecha.
- [ ] Use impresion directa en lugar de `return`.

## 10. Practica recomendada posterior
- Resolver una variante con alineacion a la izquierda.
- Crear una piramide completa usando espacios y `#`.
- Repetir el ejercicio sin usar `.repeat()`, construyendo la linea manualmente.

---
Documento orientado a aprendizaje. No incluye la solucion final del reto.
