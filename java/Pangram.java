package cloudVandana;

public class Pangram {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";

        boolean isPangram = isPangram(input);

        if (isPangram) {
            System.err.println("The input is a Pangram");
        } else {
            System.err.println("The input is not Pangram");
        }
    }

    public static boolean isPangram(String s) {
        s = s.toLowerCase();
        boolean[] alphabet = new boolean[26];

        for (char c : alphabet = s.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                alphabet[c - 'a'] = true;
            }
        }

        for (boolean present : alphabet) {
            if (!present) {
                return false;
            }
        }
        return true;
    }
}
