/**
 * HackerRank - Staircase
 * Problem statement notes / Notas del enunciado
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Given an integer n, print a staircase of size n using the # symbol and spaces.
 *
 * The staircase must:
 * - have exactly n rows
 * - use spaces on the left side
 * - use # symbols on the right side
 * - be right-aligned
 *
 * Function description:
 * Complete the staircase function with the following parameter:
 * - n: an integer
 *
 * Print:
 * For each row from 1 to n, print a line made of:
 * - leading spaces
 * - followed by # symbols
 *
 * The last line must contain n # symbols and no leading spaces.
 *
 * Input Format:
 * - A single integer n
 *
 * Constraints:
 * - 1 <= n <= 100
 *
 * Sample Input:
 * 6
 *
 * Sample Output:
 *      #
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Explanation:
 * The staircase has a height of 6.
 * Its base and height are both equal to n.
 * It is drawn using # symbols and spaces, and aligned to the right.
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Dado un entero n, imprime una escalera de tamano n usando el simbolo # y espacios.
 *
 * La escalera debe:
 * - tener exactamente n filas
 * - usar espacios en el lado izquierdo
 * - usar simbolos # en el lado derecho
 * - estar alineada a la derecha
 *
 * Descripcion de la funcion:
 * Completa la funcion staircase con el siguiente parametro:
 * - n: un entero
 *
 * Impresion:
 * Para cada fila de 1 a n, imprime una linea formada por:
 * - espacios al inicio
 * - seguidos por simbolos #
 *
 * La ultima linea debe contener n simbolos # y ningun espacio inicial.
 *
 * Formato de entrada:
 * - Un solo entero n
 *
 * Restricciones:
 * - 1 <= n <= 100
 *
 * Entrada de ejemplo:
 * 6
 *
 * Salida de ejemplo:
 *      #
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Explicacion:
 * La escalera tiene una altura de 6.
 * Su base y su altura son iguales a n.
 * Se dibuja usando simbolos # y espacios, y esta alineada a la derecha.
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
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    const spaces = n - i;
    const character = i;

    console.log(" ".repeat(spaces) + "#".repeat(character));
  }
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  staircase(n);
}
