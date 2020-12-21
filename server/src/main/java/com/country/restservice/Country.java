package com.country.restservice;

public class Country {

	private final long id;
	private final String country;

	public Country(long id, String country) {
		this.id = id;
		this.country = country;
	}

	public long getId() {
		return id;
	}

	public String getContent() {
		return country;
	}
}
