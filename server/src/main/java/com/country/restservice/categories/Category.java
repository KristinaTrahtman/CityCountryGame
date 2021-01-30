package com.country.restservice.categories;

public abstract class Category {
    public abstract boolean validate();
    protected String categoryName = "";
    protected final String userCategoryAnswer;

    public String getCategoryName() {
        return categoryName;
    }

    public Category(String userCategoryAnswer) {
        this.userCategoryAnswer = userCategoryAnswer;
    }
}
