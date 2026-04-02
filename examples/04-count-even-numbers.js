/**
 * Extra Exercise 04 - Count Even Numbers
 * Learning log / Registro de aprendizaje (unsolved / sin resolver)
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * Given an array of integers, count how many elements are even.
 *
 * Goal:
 * Practice using a counter instead of an accumulator while keeping the same
 * array traversal logic.
 *
 * Function Description:
 * Complete the function with the following parameter:
 * - numbers: an array of integers
 *
 * Returns:
 * - int: the number of even elements in the array
 *
 * Input Format:
 * - The first line contains an integer n, the size of the array.
 * - The second line contains n space-separated integers.
 *
 * Sample Input:
 * 7
 * 2 5 8 11 14 17 20
 *
 * Sample Output:
 * 4
 *
 * Explanation:
 * The even numbers are:
 * 2, 8, 14, 20
 * There are 4 even numbers.
 *
 * Personal TODO (learning):
 * 1) Traverse the entire array.
 * 2) Check whether each number is even.
 * 3) Increase a counter when the condition is true.
 * 4) Return the final count.
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Problema:
 * Dado un arreglo de enteros, cuenta cuantos elementos son pares.
 *
 * Objetivo:
 * Practicar el uso de un contador en lugar de un acumulador, manteniendo la
 * misma logica de recorrido del arreglo.
 *
 * Descripcion de la funcion:
 * Completa la funcion con el siguiente parametro:
 * - numbers: un arreglo de enteros
 *
 * Retorna:
 * - int: la cantidad de elementos pares del arreglo
 *
 * Formato de entrada:
 * - La primera linea contiene un entero n, el tamano del arreglo.
 * - La segunda linea contiene n enteros separados por espacio.
 *
 * Entrada de ejemplo:
 * 7
 * 2 5 8 11 14 17 20
 *
 * Salida de ejemplo:
 * 4
 *
 * Explicacion:
 * Los numeros pares son:
 * 2, 8, 14, 20
 * Hay 4 numeros pares.
 *
 * TODO personal (aprendizaje):
 * 1) Recorrer todo el arreglo.
 * 2) Verificar si cada numero es par.
 * 3) Incrementar un contador cuando la condicion se cumpla.
 * 4) Retornar el conteo final.
 */

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.trim().split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'countEvenNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function countEvenNumbers(numbers) {
  // TODO: Write your solution here.
  // TODO: Recorre el arreglo y cuenta cuantos numeros son pares.
  let evenCount = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenCount++;
    }
  }
  return evenCount;
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const numbers = readLine()
    .trim()
    .split(" ")
    .slice(0, n)
    .map((value) => parseInt(value, 10));

  const result = countEvenNumbers(numbers);

  console.log(result);
}
