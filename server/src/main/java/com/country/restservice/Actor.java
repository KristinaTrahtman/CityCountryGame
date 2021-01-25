package com.country.restservice;

//P.Z: WOW! such a different. so much more beautiful!

public class Actor extends CategoryFromJson{
    public Actor(String userCategoryAnswer) {
        this.categoryName = "Actor";
        // P.Z: please use categoryName to generate this path and move it to CategoryFromJson
        this.jsonFilePath = "src/main/java/categoriesDataJson/actors.json";
        this.userCategoryAnswer = userCategoryAnswer;
    }

}


