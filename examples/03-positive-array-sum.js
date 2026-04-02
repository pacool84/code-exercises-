/**
 * Extra Exercise 03 - Positive Array Sum
 * Learning log / Registro de aprendizaje (unsolved / sin resolver)
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * Given an array of integers, calculate the sum of only the positive numbers.
 *
 * Goal:
 * Practice traversing an array, using a conditional, and accumulating values
 * that satisfy a rule.
 *
 * Function Description:
 * Complete the function with the following parameter:
 * - numbers: an array of integers
 *
 * Returns:
 * - int: the sum of the positive elements in the array
 *
 * Input Format:
 * - The first line contains an integer n, the size of the array.
 * - The second line contains n space-separated integers.
 *
 * Sample Input:
 * 6
 * -3 4 -1 7 0 2
 *
 * Sample Output:
 * 13
 *
 * Explanation:
 * Only positive numbers are added:
 * 4 + 7 + 2 = 13
 *
 * Personal TODO (learning):
 * 1) Traverse the entire array.
 * 2) Check whether each number is positive.
 * 3) Add only the positive values to the accumulator.
 * 4) Return the final sum.
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Problema:
 * Dado un arreglo de enteros, calcula la suma de solo los numeros positivos.
 *
 * Objetivo:
 * Practicar el recorrido de arreglos, el uso de condiciones y la acumulacion
 * de valores que cumplen una regla.
 *
 * Descripcion de la funcion:
 * Completa la funcion con el siguiente parametro:
 * - numbers: un arreglo de enteros
 *
 * Retorna:
 * - int: la suma de los elementos positivos del arreglo
 *
 * Formato de entrada:
 * - La primera linea contiene un entero n, el tamano del arreglo.
 * - La segunda linea contiene n enteros separados por espacio.
 *
 * Entrada de ejemplo:
 * 6
 * -3 4 -1 7 0 2
 *
 * Salida de ejemplo:
 * 13
 *
 * Explicacion:
 * Solo se suman los numeros positivos:
 * 4 + 7 + 2 = 13
 *
 * TODO personal (aprendizaje):
 * 1) Recorrer todo el arreglo.
 * 2) Verificar si cada numero es positivo.
 * 3) Sumar solo los valores positivos al acumulador.
 * 4) Retornar la suma final.
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
 * Complete the 'positiveArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function positiveArraySum(numbers) {
  // TODO: Write your solution here.
  // TODO: Recorre el arreglo y suma solo los numeros positivos.
  let sumPositiveArray = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sumPositiveArray += numbers[i];
    }
  }
  return sumPositiveArray;
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const numbers = readLine()
    .trim()
    .split(" ")
    .slice(0, n)
    .map((value) => parseInt(value, 10));

  const result = positiveArraySum(numbers);

  console.log(result);
}
