/**
 * HackerRank - Mini-Max Sum
 * Learning log / Registro de aprendizaje (unsolved / sin resolver)
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * Given five positive integers, find the minimum and maximum values that can
 * be calculated by summing exactly four of the five integers.
 *
 * Then print the respective minimum and maximum values as a single line of
 * two space-separated long integers.
 *
 * Function Description:
 * Complete the miniMaxSum function with the following parameter:
 * - arr: an array of 5 integers
 *
 * Print:
 * - Two space-separated long integers on one line:
 *   1) the minimum sum
 *   2) the maximum sum
 *
 * Notes:
 * - No value should be returned.
 * - A 64-bit integer is required because the sums can be large.
 *
 * Expected function signature in Java:
 * - public static void miniMaxSum(List<Integer> arr)
 *
 * Input Format:
 * - A single line of five space-separated integers.
 *
 * Constraints:
 * - 1 <= arr[i] <= 10^9
 *
 * Sample Input:
 * 1 2 3 4 5
 *
 * Sample Output:
 * 10 14
 *
 * Explanation:
 * Using exactly four numbers each time:
 * - Excluding 1 => 2 + 3 + 4 + 5 = 14
 * - Excluding 2 => 1 + 3 + 4 + 5 = 13
 * - Excluding 3 => 1 + 2 + 4 + 5 = 12
 * - Excluding 4 => 1 + 2 + 3 + 5 = 11
 * - Excluding 5 => 1 + 2 + 3 + 4 = 10
 *
 * Minimum sum = 10
 * Maximum sum = 14
 *
 * Personal TODO (learning):
 * 1) Identify how to accumulate the total sum.
 * 2) Detect the minimum and maximum values in one pass.
 * 3) Print both results in the correct order.
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Problema:
 * Dados cinco enteros positivos, encuentra los valores minimo y maximo que
 * pueden obtenerse sumando exactamente cuatro de los cinco enteros.
 *
 * Despues imprime los valores minimo y maximo en una sola linea, separados
 * por un espacio.
 *
 * Descripcion de la funcion:
 * Completa la funcion miniMaxSum con el siguiente parametro:
 * - arr: una lista de 5 enteros
 *
 * Impresion:
 * - Dos enteros largos separados por espacio en una sola linea:
 *   1) la suma minima
 *   2) la suma maxima
 *
 * Notas:
 * - No se debe retornar ningun valor.
 * - Se requiere un entero de 64 bits porque las sumas pueden ser grandes.
 *
 * Firma esperada de funcion en Java:
 * - public static void miniMaxSum(List<Integer> arr)
 *
 * Formato de entrada:
 * - Una sola linea con cinco enteros separados por espacio.
 *
 * Restricciones:
 * - 1 <= arr[i] <= 10^9
 *
 * Entrada de ejemplo:
 * 1 2 3 4 5
 *
 * Salida de ejemplo:
 * 10 14
 *
 * Explicacion:
 * Usando exactamente cuatro numeros cada vez:
 * - Excluyendo 1 => 2 + 3 + 4 + 5 = 14
 * - Excluyendo 2 => 1 + 3 + 4 + 5 = 13
 * - Excluyendo 3 => 1 + 2 + 4 + 5 = 12
 * - Excluyendo 4 => 1 + 2 + 3 + 5 = 11
 * - Excluyendo 5 => 1 + 2 + 3 + 4 = 10
 *
 * Suma minima = 10
 * Suma maxima = 14
 *
 * TODO personal (aprendizaje):
 * 1) Identificar como acumular la suma total.
 * 2) Detectar el minimo y el maximo en un solo recorrido.
 * 3) Imprimir ambos resultados en el orden correcto.
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

class Result {

    /*
     * Complete the 'miniMaxSum' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void miniMaxSum(List<Integer> arr) {
    // Write your code here
    long result = 0;
    long min = arr.get(0)
    long max = arr.get(0);

    for(int actualValue : arr) {
        result += actualValue;
        if(actualValue < min) min = actualValue;
        if(actualValue < max) max = actualValue;
    }

    long minSum = result - max;
    long maxSum = result - min;

    System.out.println(minSum, maxSum);

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        Result.miniMaxSum(arr);

        bufferedReader.close();
    }
}
