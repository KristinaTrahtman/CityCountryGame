package com.country.restservice;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.FileReader;
import java.util.Iterator;

public class Actor {
    private final String actor_name;

    public Actor(String actor_name) {
        this.actor_name = actor_name;
    }

    public String validate() {
        JSONParser parser = new JSONParser();

        try {
            JSONArray jsonArray = (JSONArray) parser.parse(new FileReader("src/main/java/categoriesDataJson/actors.json"));

            Iterator<JSONObject> iterator = jsonArray.iterator();
            while (iterator.hasNext()) {
                if (actor_name.equalsIgnoreCase((String) iterator.next().get("name"))) {
                    return "True";
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "False";
    }
}


