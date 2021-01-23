package com.country.restservice;

import java.util.Locale;

public class Country extends Category {
    private final String userCategoryAnswer;

    public Country(String userCategoryAnswer) {
        this.userCategoryAnswer = userCategoryAnswer;
        this.categoryName = "Country";
    }

    public String validate() {
        String[] locales = Locale.getISOCountries();

        for (String countryCode : locales) {
            Locale obj = new Locale("", countryCode);
            if (userCategoryAnswer.equalsIgnoreCase(obj.getDisplayCountry())) {
                return "True";
            }
        }
        return "False";
    }
}



