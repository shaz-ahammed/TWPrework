package com.powerpackage;

public class PowerFinder {
    public static int computePower(int base, int exponent) {
        int result = 1;
        for (int i = 0; i < exponent; i++){
            result *= base;

        }
        return result;
    }
}
