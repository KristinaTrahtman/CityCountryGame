package com.country.restservice;

public class Actor extends CategoryFromJson{
    public Actor(String userCategoryAnswer) {
        this.categoryName = "Actor";
        this.jsonFilePath = "src/main/java/categoriesDataJson/actors.json";
        this.userCategoryAnswer = userCategoryAnswer;
    }

}


