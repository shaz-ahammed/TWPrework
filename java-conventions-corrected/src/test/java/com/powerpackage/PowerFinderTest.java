package com.powerpackage;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PowerFinderTest {
    @Test
    public void testOnePowerOne() {
        Assertions.assertEquals(1, PowerFinder.computePower(1, 1));
    }

    @Test
    public void testTwoPowerOne() {
        Assertions.assertEquals(2, PowerFinder.computePower(2, 1));
    }

    @Test
    public void testTwoPowerTwo() {
        Assertions.assertEquals(4, PowerFinder.computePower(2, 2));
    }

    @Test
    public void testThreePowerTwo() {
        Assertions.assertEquals(9, PowerFinder.computePower(3, 2));
    }

}