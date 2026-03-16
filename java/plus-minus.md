# Plus Minus - Guia de estudio (Java)

## 1. Objetivo del ejercicio
Entender como recorrer una lista de enteros en Java para contar positivos, negativos y ceros, y luego calcular/imprimir sus proporciones con 6 decimales.

## 2. Que debes dominar antes de resolverlo

### Listas en Java
- Usar `List<Integer>` (formato comun en plantilla de HackerRank).
- Acceder por indice con `arr.get(i)` o recorrer con `for-each`.
- Obtener tamano con `arr.size()`.

### Estructuras de control
- `if`, `else if`, `else` para clasificar cada numero.
- Bucle `for` o `for-each` para recorrer toda la lista.

### Contadores
- Variables acumuladoras para cada categoria:
  - positivos
  - negativos
  - ceros

### Division y formato decimal en Java
- Convertir a `double` antes de dividir para evitar division entera.
- Imprimir con exactamente 6 decimales usando `System.out.printf("%.6f%n", valor);`.

### Diferencia entre imprimir y retornar
- En este reto se debe **imprimir** el resultado, no retornarlo.
- La firma esperada en Java suele ser `void`.

## 3. Traduccion del problema a logica
Dada una lista `arr` de tamano `n`:
1. Inicializa tres contadores en `0`.
2. Recorre cada elemento.
3. Si el numero es mayor a `0`, incrementa positivos.
4. Si es menor a `0`, incrementa negativos.
5. Si es `0`, incrementa ceros.
6. Calcula las proporciones: `positivos / n`, `negativos / n`, `ceros / n`.
7. Imprime cada proporcion en una linea, con 6 decimales.

## 4. Habilidades clave que practicaras
- Clasificacion de datos con condicionales.
- Uso correcto de contadores.
- Manejo de precision decimal en salida.
- Cumplimiento exacto del formato que exige HackerRank.

## 5. Estrategia de implementacion (sin codigo final)
1. Obtener longitud de la lista.
```java
int n = arr.size();
```

2. Crear contadores.
```java
int positivos = 0, negativos = 0, ceros = 0;
```

3. Recorrer y clasificar.
```java
for (int numero : arr) {
    // if / else if / else
}
```

4. Calcular proporciones con `double`.
```java
double p = (double) positivos / n;
```

5. Imprimir salida final con 6 decimales.
```java
System.out.printf("%.6f%n", p);
```

## 6. Input y output en HackerRank (Java)

### Entrada esperada
- Linea 1: entero `n` (tamano del arreglo/lista).
- Linea 2: `n` enteros separados por espacio.

### Parsing tipico
- Leer con `BufferedReader`.
- Separar por espacios.
- Convertir cada token a `Integer`.
- Construir `List<Integer>`.

### Salida esperada
- Tres lineas, en este orden:
1. Proporcion de positivos.
2. Proporcion de negativos.
3. Proporcion de ceros.

Cada linea con exactamente 6 decimales.

## 7. Complejidad esperada
- Tiempo: `O(n)` (un recorrido).
- Espacio extra: `O(1)` (solo contadores y variables auxiliares).

## 8. Errores comunes
- Hacer division entera (por no castear a `double`).
- Imprimir sin 6 decimales exactos.
- Cambiar el orden de impresion.
- Olvidar el caso `0`.
- Retornar un valor en lugar de imprimir.

## 9. Checklist antes de enviar
- [ ] Conte positivos, negativos y ceros correctamente.
- [ ] Dividi cada conteo entre `n` como `double`.
- [ ] Imprimi exactamente 3 lineas.
- [ ] Respete el orden: positivos, negativos, ceros.
- [ ] Cada linea tiene 6 decimales.
- [ ] El sample da: `0.500000`, `0.333333`, `0.166667`.

## 10. Practica recomendada posterior
- Resolver la misma logica usando `for` y luego `for-each`.
- Probar casos limite: todos positivos, todos negativos, todos ceros.
- Repetir el reto usando `Scanner` en lugar de `BufferedReader`.

---
Documento orientado a aprendizaje. No incluye la solucion final del reto.
