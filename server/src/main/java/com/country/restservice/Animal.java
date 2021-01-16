package com.country.restservice;
import java.io.FileReader;
import java.util.Iterator;
import org.json.simple.JSONArray;
import org.json.simple.parser.*;
import org.json.simple.JSONObject;



public class Animal {
    private final String animal_name;

    public Animal(String animal_name) {
        this.animal_name = animal_name;
    }

    public String validate() {
        JSONParser parser = new JSONParser();
        //System.out.println("Animal Name = " + animal_name);

        try {
            JSONArray jsonArray = (JSONArray) parser.parse(new FileReader("src/main/java/com/country/restservice/animals.json"));
            Iterator<JSONObject> iterator = jsonArray.iterator();
            //System.out.println("Animal Name = " + iterator.next());

            while (iterator.hasNext()) {
                String nextAnimal = String.valueOf(iterator.next());
                if (animal_name.equalsIgnoreCase(nextAnimal)){
                    return "True";
                }
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
        return "False";
    }
}














