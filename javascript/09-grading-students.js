/**
 * HackerRank - Grading Students
 * Problem statement notes / Notas del enunciado
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * HackerLand University has the following grading policy:
 * - Every student receives a grade in the inclusive range from 0 to 100.
 * - Any grade less than 40 is a failing grade.
 * - If the difference between the grade and the next multiple of 5 is less
 *   than 3, round the grade up to the next multiple of 5.
 * - If the grade is less than 38, no rounding occurs because it would still
 *   be a failing grade.
 *
 * Function description:
 * Complete the gradingStudents function with the following parameter:
 * - grades: an array of integers representing student grades
 *
 * Returns:
 * - An array of integers representing the final grades after rounding
 *
 * Input Format:
 * - First line: an integer n, the number of students
 * - Each of the next n lines contains a single integer grade
 *
 * Constraints:
 * - 1 <= n <= 60
 * - 0 <= grades[i] <= 100
 *
 * Sample Input:
 * 4
 * 73
 * 67
 * 38
 * 33
 *
 * Sample Output:
 * 75
 * 67
 * 40
 * 33
 *
 * Explanation:
 * - 73 is rounded to 75 because the next multiple of 5 is 75 and the
 *   difference is 2.
 * - 67 stays the same because the next multiple of 5 is 70 and the
 *   difference is 3.
 * - 38 is rounded to 40 because the next multiple of 5 is 40 and the
 *   difference is 2.
 * - 33 stays the same because it is less than 38.
 *
 * Goal:
 * 1) Traverse the grades array
 * 2) Skip grades lower than 38
 * 3) Find the next multiple of 5
 * 4) Round only when the difference is less than 3
 * 5) Return the final array of grades
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Problema:
 * La universidad HackerLand tiene la siguiente politica de calificaciones:
 * - Cada estudiante recibe una calificacion en el rango inclusivo de 0 a 100.
 * - Cualquier calificacion menor a 40 es reprobatoria.
 * - Si la diferencia entre la calificacion y el siguiente multiplo de 5 es
 *   menor que 3, la calificacion se redondea hacia arriba al siguiente
 *   multiplo de 5.
 * - Si la calificacion es menor que 38, no se redondea porque seguiria siendo
 *   reprobatoria.
 *
 * Descripcion de la funcion:
 * Completa la funcion gradingStudents con el siguiente parametro:
 * - grades: un arreglo de enteros que representa las calificaciones
 *
 * Retorna:
 * - Un arreglo de enteros con las calificaciones finales despues del redondeo
 *
 * Formato de entrada:
 * - Primera linea: un entero n, la cantidad de estudiantes
 * - Cada una de las siguientes n lineas contiene una sola calificacion
 *
 * Restricciones:
 * - 1 <= n <= 60
 * - 0 <= grades[i] <= 100
 *
 * Entrada de ejemplo:
 * 4
 * 73
 * 67
 * 38
 * 33
 *
 * Salida de ejemplo:
 * 75
 * 67
 * 40
 * 33
 *
 * Explicacion:
 * - 73 se redondea a 75 porque el siguiente multiplo de 5 es 75 y la
 *   diferencia es 2.
 * - 67 se queda igual porque el siguiente multiplo de 5 es 70 y la
 *   diferencia es 3.
 * - 38 se redondea a 40 porque el siguiente multiplo de 5 es 40 y la
 *   diferencia es 2.
 * - 33 se queda igual porque es menor que 38.
 *
 * Objetivo:
 * 1) Recorrer el arreglo de calificaciones
 * 2) Omitir el redondeo para notas menores a 38
 * 3) Encontrar el siguiente multiplo de 5
 * 4) Redondear solo cuando la diferencia sea menor que 3
 * 5) Retornar el arreglo final de calificaciones
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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // Write your code here
  const finalGrades = [];

  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    const remainder = grade % 5; // El residuo de la division entre la nota y 5 nos da el valor que falta para llegar al siguiente multiplo de 5
    const difference = 5 - remainder; // La diferencia entre 5 y el residuo nos da el valor que falta para llegar al siguiente multiplo de 5

    if (difference < 3 && grade >= 38) {
      finalGrades.push(grade + difference);
    } else {
      finalGrades.push(grade);
    }
  }
  return finalGrades;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
