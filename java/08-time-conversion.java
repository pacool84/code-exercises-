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
 * Expected function signature in Java:
 * - public static String timeConversion(String s)
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
 * Firma esperada de funcion en Java:
 * - public static String timeConversion(String s)
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

class Result {

    /*
     * Complete the 'timeConversion' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static String timeConversion(String s) {
    // Write your code here
    String timeSuffix = s.substring(8,10);
    String time = s.substring(0,8);
    String[] timeSegments = time.split(":");

    int convertedNumber = Integer.parseInt(timeSegments[0]); // Convert hour part to integer for manipulation

    if(timeSuffix.equals("AM") && convertedNumber == 12) {
        convertedNumber = 0; 
    } else if(timeSuffix.equals("PM")&& convertedNumber != 12) {
        convertedNumber += 12;
    }
    //Generar una variable finalHour para convertir el numero a string y agregar un 0 al inicio para asegurar el formato de 2 digitos 
    String finalHour = convertedNumber < 10 ? "0" + convertedNumber : String.valueOf(convertedNumber); //Reemplazar la parte de la hora original con la hora convertida y retornar el resultado
    return finalHour + ":" + timeSegments[1] + ":" + timeSegments[2];

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = bufferedReader.readLine();

        String result = Result.timeConversion(s);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
