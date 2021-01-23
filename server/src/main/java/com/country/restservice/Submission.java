package com.country.restservice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Submission {

    List<Category> categories;

    public Submission(List<Category> categories) {
        this.categories = categories;
    }

    public Map<String, String> getContent() {
        Map<String, String> response = new HashMap<>();
        for(Category category: categories){
            response.put(category.getCategoryName(), category.validate());
        }
        return response;
    }
}

