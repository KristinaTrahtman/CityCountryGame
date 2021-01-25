package com.country.restservice;
//P.Z: I think I would prefer to move all those files to their own "categories" dir or something.
public class City extends CategoryFromJson {
    public City(String userCategoryAnswer) {
        this.categoryName = "City";
        this.jsonFilePath = "src/main/java/categoriesDataJson/world-cities.json";
        this.userCategoryAnswer = userCategoryAnswer;
    }
}

