/**
 * HackerRank - Plus Minus
 * Problem statement notes / Notas del enunciado
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Given an array of integers, calculate the ratios of its elements that are:
 * - positive
 * - negative
 * - zero
 *
 * Print the decimal value of each fraction on a new line with 6 digits
 * after the decimal.
 *
 * Note:
 * The solution should not return values.
 * It should print:
 * 1) ratio of positive values
 * 2) ratio of negative values
 * 3) ratio of zeros
 *
 * Function description:
 * Complete the plusMinus function with the following parameter:
 * - arr: an array of integers
 *
 * Input Format:
 * - First line: integer n, the size of the array
 * - Second line: n space-separated integers
 *
 * Constraints:
 * - 0 < n <= 100
 * - -100 <= arr[i] <= 100
 *
 * Sample Input:
 * 6
 * -4 3 -9 0 4 1
 *
 * Sample Output:
 * 0.500000
 * 0.333333
 * 0.166667
 *
 * Explanation:
 * There are 3 positive numbers, 2 negative numbers, and 1 zero.
 * Positive ratio: 3/6 = 0.500000
 * Negative ratio: 2/6 = 0.333333
 * Zero ratio: 1/6 = 0.166667
 *
 * ======================================================
 * ESPAÑOL
 * ======================================================
 *
 * Dado un arreglo de enteros, calcula las proporciones de elementos que son:
 * - positivos
 * - negativos
 * - ceros
 *
 * Imprime el valor decimal de cada fraccion en una nueva linea con 6 digitos
 * despues del punto decimal.
 *
 * Nota:
 * La solucion no debe retornar valores.
 * Debe imprimir:
 * 1) proporcion de valores positivos
 * 2) proporcion de valores negativos
 * 3) proporcion de ceros
 *
 * Descripcion de la funcion:
 * Completa la funcion plusMinus con el siguiente parametro:
 * - arr: un arreglo de enteros
 *
 * Formato de entrada:
 * - Primera linea: entero n, el tamano del arreglo
 * - Segunda linea: n enteros separados por espacio
 *
 * Restricciones:
 * - 0 < n <= 100
 * - -100 <= arr[i] <= 100
 *
 * Entrada de ejemplo:
 * 6
 * -4 3 -9 0 4 1
 *
 * Salida de ejemplo:
 * 0.500000
 * 0.333333
 * 0.166667
 *
 * Explicacion:
 * Hay 3 numeros positivos, 2 negativos y 1 cero.
 * Proporcion de positivos: 3/6 = 0.500000
 * Proporcion de negativos: 2/6 = 0.333333
 * Proporcion de ceros: 1/6 = 0.166667
 */

// Pending / Pendiente: solution intentionally not included.

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here

  const arrayLength = arr.length;

  let positiveCounter = 0;
  let negativeCounter = 0;
  let zeroCounter = 0;

  for (let i = 0; i < arrayLength; i++) {
    switch (true) {
      case arr[i] > 0:
        positiveCounter++;
        break;
      case arr[i] < 0:
        negativeCounter++;
        break;
      default:
        zeroCounter++;
    }
  }
  console.log((positiveCounter / arrayLength).toFixed(6));
  console.log((negativeCounter / arrayLength).toFixed(6));
  console.log((zeroCounter / arrayLength).toFixed(6));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
