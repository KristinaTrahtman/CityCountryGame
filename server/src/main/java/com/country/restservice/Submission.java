package com.country.restservice;

import java.util.HashMap;
import java.util.Map;

public class Submission {

    Country country;
    City city;

    public Submission(Country country, City city) {
        this.country = country;
        this.city = city;

    }

    public long getId() {
        return 0;
    }

    public Map<String, String> getContent() {
        Map<String, String> response = new HashMap<>();
        response.put("Country", country.validate());
        response.put("City", city.validate());

        return response;
    }


}

