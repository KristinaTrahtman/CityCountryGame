package com.country.restservice;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.FileReader;
import java.util.Iterator;

public class Plant {
    private final String plant_name;

    public Plant(String city_name) {
        this.plant_name = city_name;
    }


    public String validate() {
        JSONParser parser = new JSONParser();
        System.out.println("Plant_name:  = " + plant_name);
        try {
            JSONArray jsonArray = (JSONArray) parser.parse(new FileReader("src/main/java/com/country/restservice/plants.json"));

            Iterator<JSONObject> iterator = jsonArray.iterator();
            while (iterator.hasNext()) {
                if (plant_name.equalsIgnoreCase((String) iterator.next().get("name"))){

                    return "True";
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "False";
    }

}

