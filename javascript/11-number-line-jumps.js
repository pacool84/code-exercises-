/**
 * HackerRank - Number Line Jumps
 * Problem statement notes / Notas del enunciado
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * You are given two kangaroos on a number line, both jumping in the positive
 * direction. Determine whether they can land at the same location after the
 * same number of jumps.
 *
 * Context:
 * - Kangaroo 1 starts at position x1 and jumps v1 meters each time.
 * - Kangaroo 2 starts at position x2 and jumps v2 meters each time.
 * - Both kangaroos jump at the same rhythm, one jump at a time.
 * - The goal is to decide if there exists a jump count n such that:
 *   x1 + n * v1 = x2 + n * v2
 *
 * Function description:
 * Complete the kangaroo function with the following parameters:
 * - x1: integer, starting position of the first kangaroo
 * - v1: integer, jump distance of the first kangaroo
 * - x2: integer, starting position of the second kangaroo
 * - v2: integer, jump distance of the second kangaroo
 *
 * Returns:
 * - A string:
 *   - "YES" if both kangaroos can land on the same location after the same
 *     number of jumps
 *   - "NO" otherwise
 *
 * Input Format:
 * - A single line with four space-separated integers:
 *   x1 v1 x2 v2
 *
 * Constraints:
 * - Follow the constraints defined in the original HackerRank problem.
 *
 * Sample Input 0:
 * 0 3 4 2
 *
 * Sample Output 0:
 * YES
 *
 * Explanation 0:
 * - Kangaroo 1 starts at 0 and jumps 3 each time.
 * - Kangaroo 2 starts at 4 and jumps 2 each time.
 * - After 4 jumps:
 *   - Kangaroo 1 is at 12
 *   - Kangaroo 2 is also at 12
 * - Since they land at the same place after the same number of jumps, the
 *   answer is "YES".
 *
 * Sample Input 1:
 * 0 2 5 3
 *
 * Sample Output 1:
 * NO
 *
 * Explanation 1:
 * - Kangaroo 2 starts ahead and also jumps farther each time.
 * - That means Kangaroo 1 will never catch up.
 * - Therefore, the answer is "NO".
 *
 * Goal:
 * 1) Compare the starting positions and jump distances.
 * 2) Determine whether the distance gap can be closed.
 * 3) Check whether both kangaroos can reach the same position on the same jump.
 * 4) Return "YES" or "NO".
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Problema:
 * Se te dan dos canguros sobre una recta numerica, ambos saltando en la
 * direccion positiva. Debes determinar si pueden caer en la misma posicion
 * despues del mismo numero de saltos.
 *
 * Contexto:
 * - El canguro 1 comienza en la posicion x1 y avanza v1 metros por salto.
 * - El canguro 2 comienza en la posicion x2 y avanza v2 metros por salto.
 * - Ambos canguros saltan al mismo ritmo, un salto por turno.
 * - El objetivo es decidir si existe un numero de saltos n tal que:
 *   x1 + n * v1 = x2 + n * v2
 *
 * Descripcion de la funcion:
 * Completa la funcion kangaroo con los siguientes parametros:
 * - x1: entero, posicion inicial del primer canguro
 * - v1: entero, distancia de salto del primer canguro
 * - x2: entero, posicion inicial del segundo canguro
 * - v2: entero, distancia de salto del segundo canguro
 *
 * Retorna:
 * - Una cadena:
 *   - "YES" si ambos canguros pueden caer en la misma posicion despues del
 *     mismo numero de saltos
 *   - "NO" en caso contrario
 *
 * Formato de entrada:
 * - Una sola linea con cuatro enteros separados por espacio:
 *   x1 v1 x2 v2
 *
 * Restricciones:
 * - Sigue las restricciones definidas en el problema original de HackerRank.
 *
 * Entrada de ejemplo 0:
 * 0 3 4 2
 *
 * Salida de ejemplo 0:
 * YES
 *
 * Explicacion 0:
 * - El canguro 1 comienza en 0 y avanza 3 en cada salto.
 * - El canguro 2 comienza en 4 y avanza 2 en cada salto.
 * - Despues de 4 saltos:
 *   - El canguro 1 esta en 12
 *   - El canguro 2 tambien esta en 12
 * - Como caen en el mismo lugar despues del mismo numero de saltos, la
 *   respuesta es "YES".
 *
 * Entrada de ejemplo 1:
 * 0 2 5 3
 *
 * Salida de ejemplo 1:
 * NO
 *
 * Explicacion 1:
 * - El canguro 2 empieza mas adelante y ademas salta mas lejos cada vez.
 * - Eso significa que el canguro 1 nunca lo alcanzara.
 * - Por lo tanto, la respuesta es "NO".
 *
 * Objetivo:
 * 1) Comparar las posiciones iniciales y las distancias de salto.
 * 2) Determinar si la diferencia entre ellos puede cerrarse.
 * 3) Verificar si ambos pueden llegar a la misma posicion en el mismo salto.
 * 4) Retornar "YES" o "NO".
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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let jumpGap = x2 - x1; // The distance gap between the two kangaroos.
  let speedGap = v1 - v2; // The speed gap between the two kangaroos.

  // If the first kangaroo is behind and jumps slower, or if the first kangaroo is ahead and jumps faster, they will never meet.
  if (speedGap <= 0) {
    return "NO";
  }
  // If the distance gap can be closed and they can land on the same position at the same time, return "YES". Otherwise, return "NO".
  if (jumpGap % speedGap == 0) {
    return "YES";
  } else {
    return "NO";
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const x1 = parseInt(firstMultipleInput[0], 10);

  const v1 = parseInt(firstMultipleInput[1], 10);

  const x2 = parseInt(firstMultipleInput[2], 10);

  const v2 = parseInt(firstMultipleInput[3], 10);

  const result = kangaroo(x1, v1, x2, v2);

  ws.write(result + "\n");

  ws.end();
}
