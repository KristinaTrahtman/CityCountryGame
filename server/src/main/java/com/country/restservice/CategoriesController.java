package com.country.restservice;

import java.util.concurrent.atomic.AtomicLong;

import ch.qos.logback.core.net.SyslogOutputStream;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CategoriesController {

	//private static final String template = "Shalom, %s!";
	//private final AtomicLong counter = new AtomicLong();

	@GetMapping("/submission")
	public Submission submission(
			@RequestParam(value = "country_name", defaultValue = "") String country_name,
			@RequestParam(value = "city_name", defaultValue = "") String city_name,
			@RequestParam(value = "animal_name", defaultValue = "") String animal_name,
			@RequestParam(value = "plant_name", defaultValue = "") String plant_name) {

		Country country = new Country(country_name);
		City city = new City(city_name);
		Animal animal = new Animal(animal_name);
		Plant plant = new Plant(plant_name);
		Submission response = new Submission(country,city,animal,plant);
		return (response);
	}
}