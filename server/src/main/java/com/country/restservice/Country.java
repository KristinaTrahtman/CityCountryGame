package com.country.restservice;

import java.util.Locale;

public class Country extends Category {
    private final String country_name;

    public Country(String country_name) {
        this.country_name = country_name;
        this.categoryName = "Country";
    }

    public String validate() {
        String[] locales = Locale.getISOCountries();

        for (String countryCode : locales) {
            Locale obj = new Locale("", countryCode);
            if (country_name.equalsIgnoreCase(obj.getDisplayCountry())) {
                return "True";
            }
        }
        return "False";
    }
}



