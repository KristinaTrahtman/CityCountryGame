package com.country.restservice;

public class Plant extends CategoryFromJson{
    public Plant(String userCategoryAnswer) {
        this.categoryName = "Plant";
        this.jsonFilePath = "src/main/java/categoriesDataJson/plants.json";
        this.userCategoryAnswer = userCategoryAnswer;
    }

}

