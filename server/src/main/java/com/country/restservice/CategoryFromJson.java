package com.country.restservice;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.FileReader;
import java.util.Iterator;

public class CategoryFromJson extends Category {
    protected String userCategoryAnswer = "";
    protected String jsonFilePath = "";

    public String validate() {
        JSONParser parser = new JSONParser();
        try {
            JSONArray jsonArray = (JSONArray) parser.parse(new FileReader(jsonFilePath));

            Iterator<JSONObject> iterator = jsonArray.iterator();
            while (iterator.hasNext()) {
                if (userCategoryAnswer.equalsIgnoreCase((String) iterator.next().get("name"))) {

                    return "True";
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "False";
    }
}


