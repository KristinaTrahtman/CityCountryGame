package com.country.restservice.categories;

public class Plant extends CategoryFromJson {
    public Plant(String userCategoryAnswer) {
        super(userCategoryAnswer);
        this.categoryName = "Plant";
        this.jsonFilePath = getJsonFilePath();
    }
}

