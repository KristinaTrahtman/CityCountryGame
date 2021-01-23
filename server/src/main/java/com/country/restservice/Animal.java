package com.country.restservice;

import java.io.FileReader;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.parser.*;
import org.json.simple.JSONObject;


public class Animal extends Category {
    private final String animal_name;

    public Animal(String animal_name) {
        this.animal_name = animal_name;
        this.categoryName = "Animal";
    }

    public String validate() {
        JSONParser parser = new JSONParser();

        try {
            JSONArray jsonArray = (JSONArray) parser.parse(new FileReader("src/main/java/categoriesDataJson/animals.json"));
            Iterator<JSONObject> iterator = jsonArray.iterator();

            while (iterator.hasNext()) {
                String nextAnimal = String.valueOf(iterator.next().get("name"));
                if (animal_name.equalsIgnoreCase(nextAnimal)) {
                    return "True";
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "False";
    }
}














