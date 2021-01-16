package com.country.restservice;

import java.util.HashMap;
import java.util.Map;

public class Submission {

    Country country;
    City city;
    Animal animal;
    Plant plant;

    public Submission(Country country, City city, Animal animal, Plant plant) {
        this.country = country;
        this.city = city;
        this.animal=animal;
        this.plant=plant;

    }

    public long getId() {
        return 0;
    }

    public Map<String, String> getContent() {
        Map<String, String> response = new HashMap<>();
        response.put("Country", country.validate());
        response.put("City", city.validate());
        response.put("Animal", animal.validate());
        response.put("Plant", plant.validate());

        return response;
    }


}

