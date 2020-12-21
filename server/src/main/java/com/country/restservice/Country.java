package com.country.restservice;
import java.util.Locale;

public class Country {
	//public static void main(String[] args) {


     public Country() {

	}
	public long getId() {
		return 0;
	}

	public String getContent() {
		String[] locales = Locale.getISOCountries();

		for (String countryCode : locales) {

			Locale obj = new Locale("", countryCode);

			System.out.println("Country = " + obj.getDisplayCountry());
		}
		return (new Locale("", locales[90])).getDisplayCountry();
	}



}
//}
//}