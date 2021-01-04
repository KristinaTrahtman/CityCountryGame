package com.country.restservice;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.FileReader;
import java.util.Iterator;

    public class City{
        public static void main(String[] args) {
            JSONParser parser = new JSONParser();
            try {
                Object obj = parser.parse(new FileReader("src/main/java/com/country/restservice/world-cities_json.json"));

                JSONArray jsonObject = (JSONArray) obj;

                Iterator<JSONObject> iterator = jsonObject.iterator();
                while (iterator.hasNext()) {
                    System.out.println(iterator.next().get("name"));
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

