import java.util.Random;
public class RandomLetter {
    public static String randomLetter() {
        Random r = new Random();
        return String.valueOf((char)(r.nextInt(26)+'A'));
    }
}


