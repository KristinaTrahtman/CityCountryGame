package com.country.restservice;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.FileReader;
import java.util.Iterator;

public class City {
    private final String city_name;

    public City(String city_name) {
        this.city_name = city_name;
    }

    public String validate() {
        JSONParser parser = new JSONParser();
        try {
            JSONArray jsonArray = (JSONArray) parser.parse(new FileReader("src/main/java/com/country/restservice/world-cities_json.json"));

            Iterator<JSONObject> iterator = jsonArray.iterator();
            while (iterator.hasNext()) {
                if (city_name.equalsIgnoreCase((String) iterator.next().get("name"))) {

                    return "True";
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "False";
    }
}

