/**
 * HackerRank - Time Conversion
 * Problem statement notes / Notas del enunciado
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * Given a time in 12-hour AM/PM format, convert it to military
 * (24-hour) time.
 *
 * Important notes:
 * - 12:00:00AM becomes 00:00:00
 * - 12:00:00PM stays 12:00:00
 *
 * Function description:
 * Complete the timeConversion function with the following parameter:
 * - s: a string representing a time in 12-hour format
 *
 * Returns:
 * - A string representing the time in 24-hour format
 *
 * Input Format:
 * - A single string s that represents a valid time in 12-hour format
 *   (for example: 07:05:45PM or 12:01:00AM)
 *
 * Constraints:
 * - All input times are valid
 *
 * Sample Input:
 * 07:05:45PM
 *
 * Sample Output:
 * 19:05:45
 *
 * Explanation:
 * The time is in PM and the hour is not 12, so 12 is added to the hour.
 * 07 becomes 19, while minutes and seconds remain the same.
 *
 * Goal:
 * 1) Separate the AM/PM suffix
 * 2) Extract hour, minutes, and seconds
 * 3) Apply the conversion rules for AM and PM
 * 4) Return the final time in 24-hour format
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Problema:
 * Dada una hora en formato de 12 horas con AM/PM, conviertela al
 * formato militar de 24 horas.
 *
 * Notas importantes:
 * - 12:00:00AM se convierte en 00:00:00
 * - 12:00:00PM se mantiene como 12:00:00
 *
 * Descripcion de la funcion:
 * Completa la funcion timeConversion con el siguiente parametro:
 * - s: una cadena que representa una hora en formato de 12 horas
 *
 * Retorna:
 * - Una cadena que representa la hora en formato de 24 horas
 *
 * Formato de entrada:
 * - Una sola cadena s que representa una hora valida en formato de 12 horas
 *   (por ejemplo: 07:05:45PM o 12:01:00AM)
 *
 * Restricciones:
 * - Todas las horas de entrada son validas
 *
 * Entrada de ejemplo:
 * 07:05:45PM
 *
 * Salida de ejemplo:
 * 19:05:45
 *
 * Explicacion:
 * La hora esta en PM y la parte de la hora no es 12, por eso se suman 12.
 * 07 se convierte en 19, mientras minutos y segundos permanecen igual.
 *
 * Objetivo:
 * 1) Separar el sufijo AM/PM
 * 2) Extraer hora, minutos y segundos
 * 3) Aplicar las reglas de conversion para AM y PM
 * 4) Retornar la hora final en formato de 24 horas
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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  const timeSufix = s.slice(8, 10); // Extract the AM/PM suffix
  const time = s.slice(0, 8); // Extract the time part (HH:MM:SS)
  const [hour, minutes, seconds] = time.split(":"); // Split the time into components

  let convertNumber = parseInt(hour); // Convert hour to a number for manipulation

  if (timeSufix === "AM" && convertNumber === 12) {
    convertNumber = 0;
  } else if (timeSufix === "PM" && convertNumber !== 12) {
    convertNumber += 12; // Add 12 to convert to 24-hour format
  }
  const finalHour = convertNumber.toString().padStart(2, "0"); // Ensure hour is two digits
  return `${finalHour}:${minutes}:${seconds}`; // Return the final time in 24-hour format
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
