import java.util.Random;
public class RandomLetter {
    public static final String ALPHANUMERIC_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Only lowercase letters
    private static String randomLetter() {
        Random r = new Random();
        return String.valueOf((char)(r.nextInt(26)+'A'));

        }

}

