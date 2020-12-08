import java.util.Random;

// Example - Java class to generate random characters
public class Main {
    public static final String ALPHANUMERIC_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    public static void main(String[] args) {
        System.out.println("Random Alphabet:"+getRandomAlphabet());
    }

    // Create a random alphabet in Java
    // Only lowercase letters
    private static String getRandomAlphabet() {
        Random r = new Random();
        return String.valueOf((char)(r.nextInt(26)+'a'));
    }


}