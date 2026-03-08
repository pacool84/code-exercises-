/**
 * HackerRank - Simple Array Sum
 * Learning log / Registro de aprendizaje (unsolved / sin resolver)
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * Given an array of integers, find the sum of its elements.
 *
 * Example:
 * - If a = [1, 2, 3], then 1 + 2 + 3 = 6.
 * - Return 6.
 *
 * Function Description:
 * Complete the function with the following parameter:
 * - ar[n]: an array of integers
 *
 * Returns:
 * - int: the sum of the array elements
 *
 * Input Format:
 * - The first line contains an integer n, denoting the size of the array.
 * - The second line contains n space-separated integers representing ar.
 *
 * Constraints:
 * - 0 < n
 * - ar[i] <= 1000
 *
 * Sample Input:
 * 6
 * 1 2 3 4 10 11
 *
 * Sample Output:
 * 31
 *
 * Explanation:
 * Print the sum of the array elements:
 * 1 + 2 + 3 + 4 + 10 + 11 = 31
 *
 * Personal TODO (learning):
 * 1) Implement the sum logic for the array.
 * 2) Validate with the sample input/output.
 * 3) Practice input parsing with Node.js in HackerRank format.
 *
 * ======================================================
 * ESPAÑOL
 * ======================================================
 *
 * Problema:
 * Dado un arreglo de enteros, encontrar la suma de sus elementos.
 *
 * Ejemplo:
 * - Si a = [1, 2, 3], entonces 1 + 2 + 3 = 6.
 * - Se debe retornar 6.
 *
 * Descripcion de la funcion:
 * Completar la funcion con el siguiente parametro:
 * - ar[n]: un arreglo de enteros
 *
 * Retorna:
 * - int: la suma de los elementos del arreglo
 *
 * Formato de entrada:
 * - La primera linea contiene un entero n, que indica el tamano del arreglo.
 * - La segunda linea contiene n enteros separados por espacio que representan ar.
 *
 * Restricciones:
 * - 0 < n
 * - ar[i] <= 1000
 *
 * Entrada de ejemplo:
 * 6
 * 1 2 3 4 10 11
 *
 * Salida de ejemplo:
 * 31
 *
 * Explicacion:
 * Imprime la suma de los elementos del arreglo:
 * 1 + 2 + 3 + 4 + 10 + 11 = 31
 *
 * TODO personal (aprendizaje):
 * 1) Implementar la logica de suma del arreglo.
 * 2) Validar con el ejemplo de entrada/salida.
 * 3) Practicar lectura/parsing de input en formato HackerRank con Node.js.
 */

// Pending / Pendiente: solution intentionally not included.
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
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
  // Write your code here
  let sumArray = 0;

  for (let i = 0; i < ar.length; i++) {
    sumArray += ar[i];
  }
  return sumArray;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arCount = parseInt(readLine().trim(), 10);

  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result = simpleArraySum(ar);

  ws.write(result + "\n");

  ws.end();
}
