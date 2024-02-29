@isTest
public class TemperatureTest {
    
    @isTest
    public static void testFtoC() {
        Decimal res = Temperature.FtoC(70);
        System.assertEquals(21.11, res);
    }

}