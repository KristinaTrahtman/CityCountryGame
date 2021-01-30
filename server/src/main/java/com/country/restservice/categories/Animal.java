package com.country.restservice.categories;

public class Animal extends CategoryFromJson {
    public Animal(String userCategoryAnswer) {
        super(userCategoryAnswer);
        this.categoryName = "Animal";
        this.jsonFilePath = getJsonFilePath();
    }
}














