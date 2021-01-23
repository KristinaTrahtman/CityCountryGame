package com.country.restservice;
public class City extends CategoryFromJson {
    public City(String userCategoryAnswer) {
        this.categoryName = "City";
        this.jsonFilePath = "src/main/java/categoriesDataJson/world-cities.json";
        this.userCategoryAnswer = userCategoryAnswer;
    }
}

