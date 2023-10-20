package cloudVandana;

import java.util.Random;

public class ShuffleArray {
    public static void main(String[] args) {
        int[] array = { 1, 2, 3, 4, 5, 6, 7 };
        shuffleArray(array);

        for (int num : array) {
            System.out.print(num + " ");
        }
    }

    public static void shuffleArray(int[] array) {
        int n = array.length;
        Random random = new Random();

        for (int i = n - 1; 1 > 0; i--) {
            int j = random.nextInt(i + 1);

            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

}
