/**
 * HackerRank - Birthday Cake Candles
 * Problem statement notes / Notas del enunciado
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * You are given an array of candle heights. Count how many candles have the
 * greatest height.
 *
 * Context:
 * A child can only blow out the tallest candles on the cake, so the goal is
 * to determine how many candles share the maximum height.
 *
 * Function description:
 * Complete the birthdayCakeCandles function with the following parameter:
 * - candles: an array of integers representing candle heights
 *
 * Returns:
 * - An integer representing how many candles are tallest
 *
 * Input Format:
 * - First line: an integer n, the number of candles
 * - Second line: n space-separated integers, each one a candle height
 *
 * Constraints:
 * - The array contains at least one candle
 * - Heights are integers
 *
 * Sample Input:
 * 4
 * 3 2 1 3
 *
 * Sample Output:
 * 2
 *
 * Explanation:
 * The tallest candle height is 3.
 * That height appears 2 times, so the answer is 2.
 *
 * Goal:
 * 1) Identify the maximum height in the array
 * 2) Count how many times that maximum height appears
 * 3) Return that count
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Problema:
 * Se te da un arreglo con las alturas de las velas. Debes contar cuantas
 * velas tienen la altura maxima.
 *
 * Contexto:
 * El nino solo puede apagar las velas mas altas del pastel, por lo que el
 * objetivo es determinar cuantas velas comparten la altura maxima.
 *
 * Descripcion de la funcion:
 * Completa la funcion birthdayCakeCandles con el siguiente parametro:
 * - candles: un arreglo de enteros que representa las alturas de las velas
 *
 * Retorna:
 * - Un entero que representa cuantas velas son las mas altas
 *
 * Formato de entrada:
 * - Primera linea: un entero n, la cantidad de velas
 * - Segunda linea: n enteros separados por espacio, cada uno una altura
 *
 * Restricciones:
 * - El arreglo contiene al menos una vela
 * - Las alturas son enteros
 *
 * Entrada de ejemplo:
 * 4
 * 3 2 1 3
 *
 * Salida de ejemplo:
 * 2
 *
 * Explicacion:
 * La altura maxima de las velas es 3.
 * Esa altura aparece 2 veces, por eso la respuesta es 2.
 *
 * Objetivo:
 * 1) Identificar la altura maxima del arreglo
 * 2) Contar cuantas veces aparece esa altura maxima
 * 3) Retornar ese conteo
 *
 * Note / Nota:
 * This file intentionally contains only instructions and problem analysis.
 * Este archivo contiene intencionalmente solo instrucciones y analisis del problema.
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
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  // Write your code here
  let maxHeight = candles[0]; // Initialize maxHeight with the first candle's height
  let counterCandles = 0; // Initialize counter for tallest candles

  for (let i = 1; i < candles.length; i++) {
    if (candles[i] > maxHeight) {
      maxHeight = candles[i]; // Update maxHeight if a taller candle is found
    }
  }
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxHeight) {
      counterCandles++; // Increment counter if the candle height matches maxHeight
    }
  }
  return counterCandles; // Return the count of tallest candles
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const candlesCount = parseInt(readLine().trim(), 10);

  const candles = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((candlesTemp) => parseInt(candlesTemp, 10));

  const result = birthdayCakeCandles(candles);

  ws.write(result + "\n");

  ws.end();
}
