package com.country.restservice.categories;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.FileReader;
import java.util.Iterator;

public class CategoryFromJson extends Category {
    protected final static String JSON_FILE_DIRECTORY = "src/main/java/categoriesDataJson/";
    protected final static String JSON_PREFIX = ".json";
    protected String jsonFilePath;

    public CategoryFromJson(String userCategoryAnswer) {
        super(userCategoryAnswer);
    }

    protected String getJsonFilePath(){
        return JSON_FILE_DIRECTORY + categoryName.toLowerCase() + JSON_PREFIX;
    }

    public boolean validate() {
        JSONParser parser = new JSONParser();
        try {
            JSONArray jsonArray = (JSONArray) parser.parse(new FileReader(jsonFilePath));
            Iterator<JSONObject> iterator = jsonArray.iterator();
            while (iterator.hasNext()) {
                if (userCategoryAnswer.equalsIgnoreCase((String) iterator.next().get("name"))) {

                    return true;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}


