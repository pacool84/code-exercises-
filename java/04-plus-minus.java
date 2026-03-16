
/**
 * HackerRank - Plus Minus
 * Learning log / Registro de aprendizaje
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Given an array of integers, calculate the ratios of its elements that are:
 * - positive
 * - negative
 * - zero
 *
 * Print each value on a new line with 6 digits after the decimal point.
 *
 * Expected function signature in Java:
 * - public static void plusMinus(List<Integer> arr)
 *
 * Sample Input:
 * 6
 * -4 3 -9 0 4 1
 *
 * Sample Output:
 * 0.500000
 * 0.333333
 * 0.166667
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Dado un arreglo de enteros, calcula la proporcion de elementos que son:
 * - positivos
 * - negativos
 * - ceros
 *
 * Imprime cada valor en una nueva linea con 6 digitos decimales.
 *
 * Firma esperada de funcion en Java:
 * - public static void plusMinus(List<Integer> arr)
 *
 * Entrada de ejemplo:
 * 6
 * -4 3 -9 0 4 1
 *
 * Salida de ejemplo:
 * 0.500000
 * 0.333333
 * 0.166667
 */

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
     * Complete the 'plusMinus' function below.
     *
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static void plusMinus(List<Integer> arr) {
    // Write your code here
    int arrayLength = arr.size();

    int positiveCount = 0;
    int negativeCount = 0;
    int zeroCount = 0;

    for (int i = 0; i < arrayLength; i++ ) {
        if(arr.get(i) > 0) {
            positiveCount++;
                    } else if(arr.get(i) < 0) {
                        negativeCount++;
                    }else {
                        zeroCount++;
                    }
    }
    double positiveRatio = (double) positiveCount / arrayLength;
    double negativeRatio = (double) negativeCount / arrayLength;
    double zeroRatio = (double) zeroCount / arrayLength;
    
    System.out.printf("%.6f%n", positiveRatio);
    System.out.printf("%.6f%n", negativeRatio);
    System.out.printf("%.6f%n", zeroRatio);

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                .map(Integer::parseInt)
                .collect(toList());

        Result.plusMinus(arr);

        bufferedReader.close();
    }
}