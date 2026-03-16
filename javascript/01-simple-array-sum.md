# Simple Array Sum - Guia de estudio (Español)

## 1. Objetivo del ejercicio
Entender como recorrer un arreglo de enteros y acumular la suma total de sus elementos.

## 2. Que debes dominar antes de resolverlo

### Arreglos en JavaScript
- Crear arreglos numericos: `const ar = [1, 2, 3]`.
- Acceder a elementos por indice: `ar[i]`.
- Saber que los indices empiezan en `0`.

### Estructuras de control
- Ciclo `for` para recorrer todos los elementos.
- Alternativamente, puedes pensar en `for...of`, aunque el reto suele resolverse con `for`.

### Variables acumuladoras
- Usar una variable que empieza en `0` para ir sumando.
- Ejemplo mental: `sumaTotal`.

### Operaciones aritmeticas
- Usar el operador `+` para acumular.
- Evitar concatenar strings por error durante el parsing.

### Funciones
- Definir una funcion que reciba el arreglo.
- Retornar un entero con el total.

## 3. Traduccion del problema a logica
Dado `ar`, debes sumar todos sus valores y retornar el resultado.

Pasos mentales:
1. Iniciar acumulador en `0`.
2. Recorrer cada elemento del arreglo.
3. Agregar cada valor al acumulador.
4. Retornar el acumulador final.

## 4. Habilidades clave que practicaras
- Recorrido secuencial de arreglos.
- Construccion de una solucion lineal `O(n)`.
- Control del formato de entrada/salida de HackerRank.

## 5. Estrategia de implementacion (sin codigo final)
1. Crea un acumulador.
```js
let suma = 0;
```

2. Recorre el arreglo.
```js
for (let i = 0; i < ar.length; i++) {
  // sumar ar[i]
}
```

3. Retorna la suma.
```js
return suma;
```

## 6. Input y output en HackerRank (Node.js)

### Entrada esperada
- Linea 1: entero `n` (tamano del arreglo).
- Linea 2: `n` enteros separados por espacio.

### Parsing tipico
- Leer `stdin`.
- Separar por lineas.
- Convertir los valores a numero con `parseInt` o `Number`.

### Salida esperada
- Un solo entero: la suma total.

## 7. Complejidad esperada
- Tiempo: `O(n)`.
- Espacio extra: `O(1)` (sin contar el arreglo de entrada).

## 8. Errores comunes
- No inicializar la suma en `0`.
- Iterar hasta un limite incorrecto (`<=` en lugar de `<`).
- No convertir strings a numeros al parsear entrada.
- Imprimir formato incorrecto en lugar de solo el numero.

## 9. Checklist antes de enviar
- [ ] Recorri todos los elementos del arreglo.
- [ ] Sume correctamente cada elemento.
- [ ] Retorne un entero unico como resultado.
- [ ] Valide con el sample (`31`).

## 10. Practica recomendada posterior
- Resolver otra variante de suma con condiciones.
- Rehacer el ejercicio usando `for...of` para comparar estilos.
- Probar casos minimos (por ejemplo, un solo elemento).

---
Documento orientado a aprendizaje. No incluye la solucion final del reto.
