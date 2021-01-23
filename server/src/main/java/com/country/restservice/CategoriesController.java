package com.country.restservice;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CategoriesController {
    @GetMapping("/submission")

    public Submission submission(
            @RequestParam(value = "country_name", defaultValue = "") String country_name,
            @RequestParam(value = "city_name", defaultValue = "") String city_name,
            @RequestParam(value = "animal_name", defaultValue = "") String animal_name,
            @RequestParam(value = "plant_name", defaultValue = "") String plant_name,
            @RequestParam(value = "actor_name", defaultValue = "") String actor_name) {

        List<Category> categories = new ArrayList<>();
        categories.add(new Country(country_name));
        categories.add(new City(city_name));
        categories.add(new Animal(animal_name));
        categories.add(new Plant(plant_name));
        categories.add(new Actor(actor_name));

        Submission response = new Submission(categories);
        return (response);
    }
}