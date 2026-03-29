/**
 * Extra Exercise 02 - Even Array Sum
 * Learning log / Registro de aprendizaje (unsolved / sin resolver)
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * Given an array of integers, calculate the sum of only the even numbers.
 *
 * Goal:
 * Practice reading an array, traversing it, using a conditional, and updating
 * an accumulator only when a value matches a rule.
 *
 * Function Description:
 * Complete the function with the following parameter:
 * - numbers: an array of integers
 *
 * Returns:
 * - int: the sum of the even elements in the array
 *
 * Input Format:
 * - The first line contains an integer n, the size of the array.
 * - The second line contains n space-separated integers.
 *
 * Sample Input:
 * 6
 * 1 2 3 4 5 6
 *
 * Sample Output:
 * 12
 *
 * Explanation:
 * Only the even numbers are added:
 * 2 + 4 + 6 = 12
 *
 * Personal TODO (learning):
 * 1) Traverse the entire array.
 * 2) Check whether each number is even.
 * 3) Add only the even values to the accumulator.
 * 4) Return the final sum.
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Problema:
 * Dado un arreglo de enteros, calcula la suma de solo los numeros pares.
 *
 * Objetivo:
 * Practicar la lectura de un arreglo, su recorrido, el uso de una condicion
 * y la actualizacion de un acumulador solo cuando un valor cumple una regla.
 *
 * Descripcion de la funcion:
 * Completa la funcion con el siguiente parametro:
 * - numbers: un arreglo de enteros
 *
 * Retorna:
 * - int: la suma de los elementos pares del arreglo
 *
 * Formato de entrada:
 * - La primera linea contiene un entero n, el tamano del arreglo.
 * - La segunda linea contiene n enteros separados por espacio.
 *
 * Entrada de ejemplo:
 * 6
 * 1 2 3 4 5 6
 *
 * Salida de ejemplo:
 * 12
 *
 * Explicacion:
 * Solo se suman los numeros pares:
 * 2 + 4 + 6 = 12
 *
 * TODO personal (aprendizaje):
 * 1) Recorrer todo el arreglo.
 * 2) Verificar si cada numero es par.
 * 3) Sumar solo los valores pares al acumulador.
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
 * Complete the 'evenArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function evenArraySum(numbers) {
  // TODO: Write your solution here.
  // TODO: Recorre el arreglo y suma solo los numeros pares.
  let evenSumArray = 0;
  let lengthArray = numbers.length;

  for (let i = 0; i < lengthArray; i++) {
    if (numbers[i] % 2 === 0) {
      evenSumArray += numbers[i];
    }
  }
  return evenSumArray;
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const numbers = readLine()
    .trim()
    .split(" ")
    .slice(0, n)
    .map((value) => parseInt(value, 10));

  const result = evenArraySum(numbers);

  console.log(result);
}
