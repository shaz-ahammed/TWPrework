package com.example;

public class FindFactorial {
    public static int calculateFactorial(int number){
        if (number == 0 || number == 1)
            return 1;
        int factorial = 1;
        for (int i = 2; i <= number ; i++) {
            factorial *= i;

        }

        return factorial;
    }
}
