package com.country.restservice;

import com.country.restservice.categories.Category;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Submission {

    List<Category> categories;

    public Submission(List<Category> categories) {
        this.categories = categories;
    }

    public Map<String, Boolean> getContent() {
        Map<String, Boolean> response = new HashMap<>();
        for(Category category: categories){
            response.put(category.getCategoryName(), category.validate());
        }
        return response;
    }
}

