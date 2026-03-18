/**
 * HackerRank - Staircase
 * Learning log / Registro de aprendizaje (unsolved / sin resolver)
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * Given an integer n, print a staircase of size n using the # symbol and spaces.
 *
 * The staircase must:
 * - have exactly n rows
 * - use spaces on the left side
 * - use # symbols on the right side
 * - be right-aligned
 *
 * Function Description:
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
 * Expected function signature in Java:
 * - public static void staircase(int n)
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
 * Personal TODO (learning):
 * 1) Implement the loop that builds each row.
 * 2) Validate spacing and right alignment with the sample.
 * 3) Practice Java output formatting for HackerRank.
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Problema:
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
 * Firma esperada de funcion en Java:
 * - public static void staircase(int n)
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
 *
 * TODO personal (aprendizaje):
 * 1) Implementar el ciclo que construye cada fila.
 * 2) Validar espacios y alineacion con el ejemplo.
 * 3) Practicar salida en Java con formato HackerRank.
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
     * Complete the 'staircase' function below.
     *
     * The function accepts INTEGER n as parameter.
     */

    public static void staircase(int n) {
    // Write your code here
    for(int i = 1; i <= n; i++) {
        int spaces = n - i;
        int character = i;

        System.out.println(" ".repeat(spaces) + "#".repeat(character));

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        Result.staircase(n);

        bufferedReader.close();
    }
}
