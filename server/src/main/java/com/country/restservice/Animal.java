package com.country.restservice;

public class Animal extends CategoryFromJson {
    public Animal(String userCategoryAnswer) {
        this.categoryName = "Animal";
        this.jsonFilePath = "src/main/java/categoriesDataJson/animals.json";
        this.userCategoryAnswer = userCategoryAnswer;
    }
}














