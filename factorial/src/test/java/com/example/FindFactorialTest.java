package com.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FindFactorialTest {
    @Test
    public void testOneFactorial(){
        Assertions.assertEquals(1, FindFactorial.calculateFactorial(1));
    }
    @Test
    public void testSevenFactorial(){
        Assertions.assertEquals(5040, FindFactorial.calculateFactorial(7));
    }
    @Test
    public void testTwoFactorial(){
        Assertions.assertEquals(2, FindFactorial.calculateFactorial(2));
    }

    @Test
    public void testZeroFactorial(){
        Assertions.assertEquals(1, FindFactorial.calculateFactorial(0));
    }

}