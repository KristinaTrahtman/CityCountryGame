package com.country.restservice;

//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;

public class Country {
    private final String country_name;

    public Country(String country_name) {
        this.country_name = country_name;
    }


    public String validate() {
        String[] locales = Locale.getISOCountries();

        System.out.println("Country Name = " + country_name);
        for (String countryCode : locales) {

            Locale obj = new Locale("", countryCode);
            System.out.println("Country Name = " + obj.getDisplayCountry());

            if (country_name.equalsIgnoreCase(obj.getDisplayCountry())) {

                return "True";
            }
        }
        return "False";

    }
}



