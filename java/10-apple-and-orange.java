/**
 * HackerRank - Apple and Orange
 * Problem statement notes / Notas del enunciado
 *
 * ======================================================
 * ENGLISH
 * ======================================================
 *
 * Problem:
 * Sam's house has an apple tree and an orange tree that yield an abundance of
 * fruit. Using the information given, determine how many apples and oranges
 * land on Sam's house.
 *
 * Context:
 * - Sam's house lies on a number line from point s to point t, inclusive.
 * - The apple tree is located at point a, to the left of the house.
 * - The orange tree is located at point b, to the right of the house.
 * - Each fruit falls some distance from its tree:
 *   - A negative value means the fruit falls to the left.
 *   - A positive value means the fruit falls to the right.
 *
 * Function description:
 * Complete the countApplesAndOranges function with the following parameters:
 * - s: integer, the starting point of Sam's house
 * - t: integer, the ending point of Sam's house
 * - a: integer, the location of the apple tree
 * - b: integer, the location of the orange tree
 * - apples: integer array, distances where each apple falls from tree a
 * - oranges: integer array, distances where each orange falls from tree b
 *
 * Returns:
 * - None. Print two integers on separate lines:
 *   1) the number of apples that fall on Sam's house
 *   2) the number of oranges that fall on Sam's house
 *
 * Input Format:
 * - The first line contains two space-separated integers s and t.
 * - The second line contains two space-separated integers a and b.
 * - The third line contains two space-separated integers m and n.
 * - The fourth line contains m space-separated integers for apples.
 * - The fifth line contains n space-separated integers for oranges.
 *
 * Constraints:
 * - Values follow the constraints defined by the original problem.
 *
 * Sample Input:
 * 7 11
 * 5 15
 * 3 2
 * -2 2 1
 * 5 -6
 *
 * Sample Output:
 * 1
 * 1
 *
 * Explanation:
 * - The apples fall from position 5 using distances -2, 2, and 1.
 *   Their landing points are 3, 7, and 6.
 * - The oranges fall from position 15 using distances 5 and -6.
 *   Their landing points are 20 and 9.
 * - Only one apple lands on the house range [7, 11].
 * - Only one orange lands on the house range [7, 11].
 *
 * Goal:
 * 1) Convert each fruit distance into its final landing position.
 * 2) Check whether that position falls inside Sam's house range.
 * 3) Count apples and oranges separately.
 * 4) Print both counts on separate lines.
 *
 * ======================================================
 * ESPANOL
 * ======================================================
 *
 * Problema:
 * La casa de Sam tiene un arbol de manzanas y un arbol de naranjas que dan
 * muchas frutas. Usando la informacion dada, determina cuantas manzanas y
 * cuantas naranjas caen sobre la casa de Sam.
 *
 * Contexto:
 * - La casa de Sam esta sobre una recta numerica desde el punto s hasta el
 *   punto t, de forma inclusiva.
 * - El arbol de manzanas esta ubicado en el punto a, a la izquierda de la
 *   casa.
 * - El arbol de naranjas esta ubicado en el punto b, a la derecha de la casa.
 * - Cada fruta cae a cierta distancia de su arbol:
 *   - Un valor negativo significa que cae hacia la izquierda.
 *   - Un valor positivo significa que cae hacia la derecha.
 *
 * Descripcion de la funcion:
 * Completa la funcion countApplesAndOranges con los siguientes parametros:
 * - s: entero, el punto inicial de la casa de Sam
 * - t: entero, el punto final de la casa de Sam
 * - a: entero, la ubicacion del arbol de manzanas
 * - b: entero, la ubicacion del arbol de naranjas
 * - apples: arreglo de enteros, distancias a las que cae cada manzana desde a
 * - oranges: arreglo de enteros, distancias a las que cae cada naranja desde b
 *
 * Retorna:
 * - Nada. Imprime dos enteros en lineas separadas:
 *   1) la cantidad de manzanas que caen sobre la casa de Sam
 *   2) la cantidad de naranjas que caen sobre la casa de Sam
 *
 * Formato de entrada:
 * - La primera linea contiene dos enteros separados por espacio: s y t.
 * - La segunda linea contiene dos enteros separados por espacio: a y b.
 * - La tercera linea contiene dos enteros separados por espacio: m y n.
 * - La cuarta linea contiene m enteros separados por espacio para apples.
 * - La quinta linea contiene n enteros separados por espacio para oranges.
 *
 * Restricciones:
 * - Los valores siguen las restricciones definidas en el problema original.
 *
 * Entrada de ejemplo:
 * 7 11
 * 5 15
 * 3 2
 * -2 2 1
 * 5 -6
 *
 * Salida de ejemplo:
 * 1
 * 1
 *
 * Explicacion:
 * - Las manzanas caen desde la posicion 5 usando las distancias -2, 2 y 1.
 *   Sus posiciones finales son 3, 7 y 6.
 * - Las naranjas caen desde la posicion 15 usando las distancias 5 y -6.
 *   Sus posiciones finales son 20 y 9.
 * - Solo una manzana cae dentro del rango de la casa [7, 11].
 * - Solo una naranja cae dentro del rango de la casa [7, 11].
 *
 * Objetivo:
 * 1) Convertir cada distancia de fruta en su posicion final.
 * 2) Verificar si esa posicion cae dentro del rango de la casa de Sam.
 * 3) Contar por separado manzanas y naranjas.
 * 4) Imprimir ambos conteos en lineas separadas.
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
     * Complete the 'countApplesAndOranges' function below.
     *
     * The function accepts following parameters:
     *  1. INTEGER s
     *  2. INTEGER t
     *  3. INTEGER a
     *  4. INTEGER b
     *  5. INTEGER_ARRAY apples
     *  6. INTEGER_ARRAY oranges
     */

    public static void countApplesAndOranges(int s, int t, int a, int b, List<Integer> apples, List<Integer> oranges) {
    // Write your code here
    int appleCount = 0;
    int orangeCount = 0;

    for(int i = 0; i < apples.size(); i++) {
        int appleDrop = a + apples.get(i);
        
        if(appleDrop >= s && appleDrop <= t){
          appleCount++;
        }
    }

    for(int i = 0; i < oranges.size(); i++){
        int orangeDrop = b + oranges.get(i);

        if( orangeDrop >= s && orangeDrop <= t){
          orangeCount++;
        }
    }
    System.out.println(appleCount + "\n" + orangeCount);

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int s = Integer.parseInt(firstMultipleInput[0]);

        int t = Integer.parseInt(firstMultipleInput[1]);

        String[] secondMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int a = Integer.parseInt(secondMultipleInput[0]);

        int b = Integer.parseInt(secondMultipleInput[1]);

        String[] thirdMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int m = Integer.parseInt(thirdMultipleInput[0]);

        int n = Integer.parseInt(thirdMultipleInput[1]);

        List<Integer> apples = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        List<Integer> oranges = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        Result.countApplesAndOranges(s, t, a, b, apples, oranges);

        bufferedReader.close();
    }
}
