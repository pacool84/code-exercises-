/**
 * Extra Exercise 05 - Count Greater Than X
 * Learning log / Registro de aprendizaje (unsolved / sin resolver)
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * Given an array of integers and a target value x, count how many numbers are
 * greater than x.
 *
 * Goal:
 * Practice array traversal with a comparison against an external value
 * provided in the input.
 *
 * Function Description:
 * Complete the function with the following parameters:
 * - numbers: an array of integers
 * - x: an integer used as a comparison target
 *
 * Returns:
 * - int: how many elements are greater than x
 *
 * Input Format:
 * - The first line contains an integer n, the size of the array.
 * - The second line contains n space-separated integers.
 * - The third line contains an integer x.
 *
 * Sample Input:
 * 6
 * 3 9 2 11 7 15
 * 8
 *
 * Sample Output:
 * 3
 *
 * Explanation:
 * The numbers greater than 8 are:
 * 9, 11, 15
 * There are 3 numbers greater than 8.
 *
 * Personal TODO (learning):
 * 1) Read the array and the target value x.
 * 2) Traverse the entire array.
 * 3) Compare each number against x.
 * 4) Increase a counter when the number is greater than x.
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Problema:
 * Dado un arreglo de enteros y un valor objetivo x, cuenta cuantos numeros
 * son mayores que x.
 *
 * Objetivo:
 * Practicar el recorrido del arreglo usando una comparacion contra un valor
 * externo recibido en la entrada.
 *
 * Descripcion de la funcion:
 * Completa la funcion con los siguientes parametros:
 * - numbers: un arreglo de enteros
 * - x: un entero usado como valor de comparacion
 *
 * Retorna:
 * - int: cuantos elementos son mayores que x
 *
 * Formato de entrada:
 * - La primera linea contiene un entero n, el tamano del arreglo.
 * - La segunda linea contiene n enteros separados por espacio.
 * - La tercera linea contiene un entero x.
 *
 * Entrada de ejemplo:
 * 6
 * 3 9 2 11 7 15
 * 8
 *
 * Salida de ejemplo:
 * 3
 *
 * Explicacion:
 * Los numeros mayores que 8 son:
 * 9, 11, 15
 * Hay 3 numeros mayores que 8.
 *
 * TODO personal (aprendizaje):
 * 1) Leer el arreglo y el valor objetivo x.
 * 2) Recorrer todo el arreglo.
 * 3) Comparar cada numero contra x.
 * 4) Incrementar un contador cuando el numero sea mayor que x.
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
 * Complete the 'countGreaterThanX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY numbers as first parameter.
 * The function accepts INTEGER x as second parameter.
 */

function countGreaterThanX(numbers, x) {
  // TODO: Write your solution here.
  // TODO: Recorre el arreglo y cuenta cuantos numeros son mayores que x.
  let greaterThanX = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > x) {
      greaterThanX++;
    }
  }
  return greaterThanX;
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const numbers = readLine()
    .trim()
    .split(" ")
    .slice(0, n)
    .map((value) => parseInt(value, 10));

  const x = parseInt(readLine().trim(), 10);

  const result = countGreaterThanX(numbers, x);

  console.log(result);
}
