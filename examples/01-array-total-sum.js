/**
 * Extra Exercise 01 - Array Total Sum
 * Learning log / Registro de aprendizaje (unsolved / sin resolver)
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * Given an array of integers, calculate the total sum of all its elements.
 *
 * Goal:
 * Practice reading an array, iterating through it, and accumulating a result
 * in a variable.
 *
 * Function Description:
 * Complete the function with the following parameter:
 * - numbers: an array of integers
 *
 * Returns:
 * - int: the sum of all elements in the array
 *
 * Input Format:
 * - The first line contains an integer n, the size of the array.
 * - The second line contains n space-separated integers.
 *
 * Sample Input:
 * 5
 * 2 4 6 8 10
 *
 * Sample Output:
 * 30
 *
 * Explanation:
 * 2 + 4 + 6 + 8 + 10 = 30
 *
 * Personal TODO (learning):
 * 1) Create an accumulator variable.
 * 2) Traverse the complete array.
 * 3) Add each value to the accumulator.
 * 4) Return the final sum.
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Problema:
 * Dado un arreglo de enteros, calcula la suma total de todos sus elementos.
 *
 * Objetivo:
 * Practicar la lectura de un arreglo, su recorrido completo y el uso de una
 * variable acumuladora.
 *
 * Descripcion de la funcion:
 * Completa la funcion con el siguiente parametro:
 * - numbers: un arreglo de enteros
 *
 * Retorna:
 * - int: la suma de todos los elementos del arreglo
 *
 * Formato de entrada:
 * - La primera linea contiene un entero n, el tamano del arreglo.
 * - La segunda linea contiene n enteros separados por espacio.
 *
 * Entrada de ejemplo:
 * 5
 * 2 4 6 8 10
 *
 * Salida de ejemplo:
 * 30
 *
 * Explicacion:
 * 2 + 4 + 6 + 8 + 10 = 30
 *
 * TODO personal (aprendizaje):
 * 1) Crear una variable acumuladora.
 * 2) Recorrer todo el arreglo.
 * 3) Sumar cada valor al acumulador.
 * 4) Retornar la suma final.
 */

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

console.error("Extra Exercise 01 - Array Total Sum");
console.error("Input format / Formato de entrada:");
console.error("1) First line / Primera linea: n");
console.error("2) Second line / Segunda linea: n space-separated integers");
console.error("Example / Ejemplo:");
console.error("5");
console.error("2 4 6 8 10");

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
 * Complete the 'arrayTotalSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function arrayTotalSum(numbers) {
  // TODO: Write your solution here.
  // TODO: Recorre el arreglo y acumula la suma total.
  let sumArray = 0;
  let lengthArray = numbers.length;
  for (let i = 0; i < lengthArray; i++) {
    sumArray += numbers[i];
  }
  return sumArray;
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const numbers = readLine()
    .trim()
    .split(" ")
    .slice(0, n)
    .map((value) => parseInt(value, 10));

  const result = arrayTotalSum(numbers);

  console.log(result);
}
