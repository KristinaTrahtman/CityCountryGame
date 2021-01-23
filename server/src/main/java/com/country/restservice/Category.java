package com.country.restservice;

public abstract class Category {
    abstract String validate();
    protected String categoryName = "";

    public String getCategoryName() {
        return categoryName;
    }
}
