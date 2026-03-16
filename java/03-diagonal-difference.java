/**
 * HackerRank - Diagonal Difference
 * Learning log / Registro de aprendizaje (unsolved / sin resolver)
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * Given a square matrix, calculate the absolute difference between the sums
 * of its diagonals.
 *
 * Example:
 * 1 2 3
 * 4 5 6
 * 9 8 9
 *
 * The left-to-right diagonal = 1 + 5 + 9 = 15.
 * The right-to-left diagonal = 3 + 5 + 9 = 17.
 * Their absolute difference is |15 - 17| = 2.
 *
 * Function Description:
 * Complete the diagonalDifference function with the following parameter:
 * - arr: a 2-D array of integers
 *
 * Returns:
 * - int: the absolute difference in sums along the diagonals
 *
 * Expected function signature in Java:
 * - public static int diagonalDifference(List<List<Integer>> arr)
 *
 * Input Format:
 * - The first line contains a single integer n, the number of rows and columns
 *   in the square matrix arr.
 * - Each of the next n lines describes a row and consists of n space-separated
 *   integers arr[i][j].
 *
 * Constraints:
 * - 1 <= n <= 100
 * - -100 <= arr[i][j] <= 100
 *
 * Sample Input:
 * 3
 * 11 2 4
 * 4 5 6
 * 10 8 -12
 *
 * Sample Output:
 * 15
 *
 * Explanation:
 * The primary diagonal is:
 * 11
 *    5
 *      -12
 * Sum across the primary diagonal: 4
 *
 * The secondary diagonal is:
 *      4
 *    5
 * 10
 * Sum across the secondary diagonal: 19
 *
 * Difference: |4 - 19| = 15
 *
 * Personal TODO (learning):
 * 1) Implement diagonalDifference in Java.
 * 2) Validate with the sample input/output.
 * 3) Practice matrix parsing in HackerRank Java template.
 *
 * ======================================================
 * ESPAÑOL
 * ======================================================
 *
 * Problema:
 * Dada una matriz cuadrada, calcular la diferencia absoluta entre las sumas
 * de sus diagonales.
 *
 * Ejemplo:
 * 1 2 3
 * 4 5 6
 * 9 8 9
 *
 * La diagonal de izquierda a derecha = 1 + 5 + 9 = 15.
 * La diagonal de derecha a izquierda = 3 + 5 + 9 = 17.
 * Su diferencia absoluta es |15 - 17| = 2.
 *
 * Descripcion de la funcion:
 * Completar la funcion diagonalDifference con el siguiente parametro:
 * - arr: un arreglo 2D de enteros
 *
 * Retorna:
 * - int: la diferencia absoluta entre las sumas de ambas diagonales
 *
 * Firma esperada de funcion en Java:
 * - public static int diagonalDifference(List<List<Integer>> arr)
 *
 * Formato de entrada:
 * - La primera linea contiene un entero n, el numero de filas y columnas
 *   de la matriz cuadrada arr.
 * - Cada una de las siguientes n lineas describe una fila y contiene n
 *   enteros separados por espacios arr[i][j].
 *
 * Restricciones:
 * - 1 <= n <= 100
 * - -100 <= arr[i][j] <= 100
 *
 * Entrada de ejemplo:
 * 3
 * 11 2 4
 * 4 5 6
 * 10 8 -12
 *
 * Salida de ejemplo:
 * 15
 *
 * Explicacion:
 * La diagonal principal es:
 * 11
 *    5
 *      -12
 * Suma de la diagonal principal: 4
 *
 * La diagonal secundaria es:
 *      4
 *    5
 * 10
 * Suma de la diagonal secundaria: 19
 *
 * Diferencia: |4 - 19| = 15
 *
 * TODO personal (aprendizaje):
 * 1) Implementar diagonalDifference en Java.
 * 2) Validar con el ejemplo de entrada/salida.
 * 3) Practicar lectura de matrices en el template de HackerRank.
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
     * Complete the 'diagonalDifference' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts 2D_INTEGER_ARRAY arr as parameter.
     */

    public static int diagonalDifference(List<List<Integer>> arr) {
    // Write your code here
    int arrayLength = arr.size();

    int leftDiagonalSum = 0;
    int rigthDiagonalSum = 0;

    for(int i  = 0; i< arrayLength; i++) {
        leftDiagonalSum += arr.get(i).get(i);
        rigthDiagonalSum += arr.get(i).get(arrayLength - 1 - i);
    }

    return Math.abs(leftDiagonalSum - rigthDiagonalSum);

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<List<Integer>> arr = new ArrayList<>();

        IntStream.range(0, n).forEach(i -> {
            try {
                arr.add(
                    Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                        .map(Integer::parseInt)
                        .collect(toList())
                );
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        int result = Result.diagonalDifference(arr);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
