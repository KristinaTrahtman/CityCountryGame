package com.country.restservice.categories;

import java.util.Locale;

public class Country extends Category {

    public Country(String userCategoryAnswer) {
        super(userCategoryAnswer);
        this.categoryName = "Country";
    }

    public boolean validate() {
        String[] locales = Locale.getISOCountries();

        for (String countryCode : locales) {
            Locale obj = new Locale("", countryCode);
            if (userCategoryAnswer.equalsIgnoreCase(obj.getDisplayCountry())) {
                return true;
            }
        }
        return false;
    }
}



