package com.country.restservice.categories;

public class Actor extends CategoryFromJson {
    public Actor(String userCategoryAnswer) {
        super(userCategoryAnswer);
        this.categoryName = "Actor";
        this.jsonFilePath = getJsonFilePath();
    }
}


