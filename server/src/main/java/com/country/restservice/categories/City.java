package com.country.restservice.categories;

public class City extends CategoryFromJson {
    public City(String userCategoryAnswer) {
        super(userCategoryAnswer);
        this.categoryName = "City";
        this.jsonFilePath = getJsonFilePath();
    }
}

