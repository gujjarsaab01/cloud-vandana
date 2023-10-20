package cloudVandana;

import java.util.HashMap;
import java.util.Map;

public class RomanNumber {
    public static void main(String[] args) {
        String romanNum = "IX";

        int result = romanToInt(romanNum);
        System.out.println("Roman numeral " + romanNum + " is equivalent to " + result);
    }
    
    public static int romanToInt(String s) {
        Map<Character, Integer> romanMap = new HashMap<>();

        romanMap.put("I", 1);
        romanMap.put("V", 5);
        romanMap.put("X", 10);
        romanMap.put("L", 50);
        romanMap.put("C", 100);
        romanMap.put("D", 500);
        romanMap.put("M", 1000);

        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int currentValue = romanMap.get(s.charAt(i));

            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }
            prevValue = currentValue;
        }
        return result;
    }
}
