/**
 * HackerRank - Diagonal Difference
 * Problem statement notes / Notas del enunciado
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Given a square matrix, calculate the absolute difference between the sums
 * of its diagonals.
 *
 * Example:
 * 1 2 3
 * 4 5 6
 * 9 8 9
 *
 * The left-to-right diagonal = 1 + 5 + 9 = 15.
 * The right-to-left diagonal = 3 + 5 + 9 = 17.
 * Their absolute difference is |15 - 17| = 2.
 *
 * Function description:
 * Complete the diagonalDifference function with the following parameter:
 * - arr: a 2-D array of integers
 *
 * Returns:
 * - int: the absolute difference in sums along the diagonals
 *
 * Input Format:
 * - The first line contains a single integer n, the number of rows and columns
 *   in the square matrix arr.
 * - Each of the next n lines describes a row, and consists of n
 *   space-separated integers arr[i][j].
 *
 * Constraints:
 * - 1 <= n <= 100
 * - -100 <= arr[i][j] <= 100
 *
 * Sample Input:
 * 3
 * 11 2 4
 * 4 5 6
 * 10 8 -12
 *
 * Sample Output:
 * 15
 *
 * Explanation:
 * The primary diagonal is:
 * 11
 *    5
 *      -12
 * Sum across the primary diagonal: 4
 *
 * The secondary diagonal is:
 *      4
 *    5
 * 10
 * Sum across the secondary diagonal: 19
 *
 * Difference: |4 - 19| = 15
 *
 * ======================================================
 * ESPAÑOL
 * ======================================================
 *
 * Dada una matriz cuadrada, calcula la diferencia absoluta entre las sumas
 * de sus diagonales.
 *
 * Ejemplo:
 * 1 2 3
 * 4 5 6
 * 9 8 9
 *
 * La diagonal de izquierda a derecha = 1 + 5 + 9 = 15.
 * La diagonal de derecha a izquierda = 3 + 5 + 9 = 17.
 * Su diferencia absoluta es |15 - 17| = 2.
 *
 * Descripcion de la funcion:
 * Completa la funcion diagonalDifference con el siguiente parametro:
 * - arr: un arreglo 2D de enteros
 *
 * Retorno:
 * - int: la diferencia absoluta entre las sumas de ambas diagonales
 *
 * Formato de entrada:
 * - La primera linea contiene un unico entero n, el numero de filas y
 *   columnas de la matriz cuadrada arr.
 * - Cada una de las siguientes n lineas describe una fila y contiene n
 *   enteros separados por espacios arr[i][j].
 *
 * Restricciones:
 * - 1 <= n <= 100
 * - -100 <= arr[i][j] <= 100
 *
 * Entrada de ejemplo:
 * 3
 * 11 2 4
 * 4 5 6
 * 10 8 -12
 *
 * Salida de ejemplo:
 * 15
 *
 * Explicacion:
 * La diagonal principal es:
 * 11
 *    5
 *      -12
 * Suma de la diagonal principal: 4
 *
 * La diagonal secundaria es:
 *      4
 *    5
 * 10
 * Suma de la diagonal secundaria: 19
 *
 * Diferencia: |4 - 19| = 15
 */

"use strict";

const fs = require("fs");

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  const arrayLength = arr.length;

  let leftDiagonalSum = 0;
  let rigthDiagonalSum = 0;

  for (let i = 0; i < arrayLength; i++) {
    leftDiagonalSum += arr[i][i];
    rigthDiagonalSum += arr[i][arrayLength - 1 - i];
  }
  return Math.abs(leftDiagonalSum - rigthDiagonalSum);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
