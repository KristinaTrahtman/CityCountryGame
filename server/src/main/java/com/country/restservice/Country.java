package com.country.restservice;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;

public class Country {
	private final String country_name;
     public Country(String country_name) {
     	this.country_name = country_name;
	}
	public long getId() {
		return 0;
	}

	public String getContent() {
		String[] locales = Locale.getISOCountries();

		for (String countryCode : locales ) {

			Locale obj = new Locale("", countryCode);

			System.out.println("Country = " + obj.getDisplayCountry());
			System.out.println("Country Code = " + countryCode);
			System.out.println("Country Name = " + country_name);


			if (country_name.equalsIgnoreCase(obj.getDisplayCountry())){

				System.out.println("Country Name = " + country_name);

				return "True";
			}
		}
		return "False";

     }
}



