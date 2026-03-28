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

// Pending / Pendiente: solution intentionally not included.

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'birthdayCakeCandles' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY candles as parameter.
     */

    public static int birthdayCakeCandles(List<Integer> candles) {
    // Write your code here
        int maxHeight = candles.get(0); // Initialize maxHeight with the first candle's height
        int counterCandles = 0; // Initialize counter for the tallest candles

        for(int i = 1; 1 < candles.size(); i++) {
            if(candles.get(i) > maxHeight) {
                maxHeight = candles.get(i); // Update maxHeight if a taller candle is found
            }
        }

        for(int i = 0; i < candles.size(); i++) {
            if(candles.get(i) == maxHeight) {
                counterCandles++; // Increment counter if the candle's height matches maxHeight
            }
        }
        return counterCandles; // Return the count of the tallest candles

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int candlesCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> candles = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        int result = Result.birthdayCakeCandles(candles);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
