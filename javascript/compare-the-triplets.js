/**
 * HackerRank - Compare the Triplets
 * Learning log / Registro de aprendizaje (unsolved / sin resolver)
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Context:
 * Alice and Bob each created one problem for HackerRank.
 * A reviewer rates each challenge in 3 categories:
 * 1) problem clarity
 * 2) originality
 * 3) difficulty
 *
 * Input data:
 * - Alice: triplet a = [a0, a1, a2]
 * - Bob:   triplet b = [b0, b1, b2]
 *
 * Comparison rule by index i:
 * - If a[i] > b[i] => Alice gets +1 point
 * - If a[i] < b[i] => Bob gets +1 point
 * - If a[i] === b[i] => no points are awarded
 *
 * Expected output:
 * - 2-item array: [alicePoints, bobPoints]
 *
 * Expected function signature:
 * - compareTriplets(a, b)
 *
 * Parameters:
 * - a: int[3]
 * - b: int[3]
 *
 * Return:
 * - int[2] -> [aliceScore, bobScore]
 *
 * Input format (HackerRank):
 * - Line 1: 3 space-separated integers for a
 * - Line 2: 3 space-separated integers for b
 *
 * Constraints:
 * - 1 <= a[i] <= 100
 * - 1 <= b[i] <= 100
 *
 * Example:
 * a = [1, 2, 3]
 * b = [3, 2, 1]
 * Comparison:
 * - i=0: a[0] < b[0] => Bob +1
 * - i=1: a[1] = b[1] => no points
 * - i=2: a[2] > b[2] => Alice +1
 * Output: [1, 1]
 *
 * Sample Input 0:
 * 5 6 7
 * 3 6 10
 * Sample Output 0:
 * 1 1
 *
 * Sample Input 1:
 * 17 28 30
 * 99 16 8
 * Sample Output 1:
 * 2 1
 *
 * Personal TODO (learning):
 * 1) Implement compareTriplets.
 * 2) Validate against both statement examples.
 * 3) Practice Node.js input parsing for HackerRank.
 *
 * ======================================================
 * ESPAÑOL
 * ======================================================
 *
 * Contexto:
 * Alice y Bob crearon un problema cada uno en HackerRank.
 * Un reviewer califica cada problema en 3 categorías:
 * 1) claridad (problem clarity)
 * 2) originalidad (originality)
 * 3) dificultad (difficulty)
 *
 * Datos de entrada:
 * - Alice: tripleta a = [a0, a1, a2]
 * - Bob:   tripleta b = [b0, b1, b2]
 *
 * Regla de comparación por índice i:
 * - Si a[i] > b[i] => Alice +1 punto
 * - Si a[i] < b[i] => Bob +1 punto
 * - Si a[i] === b[i] => nadie suma
 *
 * Resultado esperado:
 * - Arreglo de 2 posiciones: [puntosAlice, puntosBob]
 *
 * Firma de función esperada:
 * - compareTriplets(a, b)
 *
 * Parámetros:
 * - a: int[3]
 * - b: int[3]
 *
 * Retorno:
 * - int[2] -> [scoreAlice, scoreBob]
 *
 * Formato de entrada (HackerRank):
 * - Línea 1: 3 enteros separados por espacio para a
 * - Línea 2: 3 enteros separados por espacio para b
 *
 * Restricciones:
 * - 1 <= a[i] <= 100
 * - 1 <= b[i] <= 100
 *
 * Ejemplo:
 * a = [1, 2, 3]
 * b = [3, 2, 1]
 * Comparación:
 * - i=0: a[0] < b[0] => Bob +1
 * - i=1: a[1] = b[1] => nadie +1
 * - i=2: a[2] > b[2] => Alice +1
 * Salida: [1, 1]
 *
 * Sample Input 0:
 * 5 6 7
 * 3 6 10
 * Sample Output 0:
 * 1 1
 *
 * Sample Input 1:
 * 17 28 30
 * 99 16 8
 * Sample Output 1:
 * 2 1
 *
 * TODO personal (aprendizaje):
 * 1) Implementar la función compareTriplets.
 * 2) Validar con los dos ejemplos del enunciado.
 * 3) Practicar lectura/parsing de input en Node.js para HackerRank.
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
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  let scoreA = 0;
  let scoreB = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      scoreA++;
    } else if (a[i] < b[i]) {
      scoreB++;
    }
  }
  return [scoreA, scoreB];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine()
    .trim()
    .split(/\s+/)
    .map((aTemp) => parseInt(aTemp, 10));

  const b = readLine()
    .trim()
    .split(/\s+/)
    .map((bTemp) => parseInt(bTemp, 10));

  const result = compareTriplets(a, b);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
