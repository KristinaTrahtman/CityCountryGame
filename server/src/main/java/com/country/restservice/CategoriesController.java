package com.country.restservice;

import java.util.concurrent.atomic.AtomicLong;

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
	public Country submission(@RequestParam(value = "Country: ", defaultValue = "World") String name) {
		 Country country = new Country();
		return (country);
	}
}
