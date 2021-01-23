/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *	  https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.country.restservice;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class CountryControllerTests {

	@Autowired
	private MockMvc mockMvc;

	@Test
	public void getCountryTrue() throws Exception {
		this.mockMvc.perform(get("/submission").param("country_name", "Andorra"))
				.andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.content.Country").value("True"));

	}
	@Test
	public void getCountryFalse() throws Exception {
		this.mockMvc.perform(get("/submission").param("country_name", "Dog"))
				.andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.content.Country").value("False"));

	}
	@Test
	public void getCityTrue() throws Exception {
		this.mockMvc.perform(get("/submission").param("city_name", "Tel Aviv"))
				.andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.content.City").value("True"));

	}
	@Test
	public void getCityFalse() throws Exception {
		this.mockMvc.perform(get("/submission").param("city_name", "Cat"))
				.andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.content.City").value("False"));

	}
	@Test
	public void getAnimalTrue() throws Exception {
		this.mockMvc.perform(get("/submission").param("animal_name", "Puma"))
				.andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.content.Animal").value("True"));

	}
	@Test
	public void getAnimalFalse() throws Exception {
		this.mockMvc.perform(get("/submission").param("animal_name", "Hat"))
				.andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.content.Animal").value("False"));

	}
	@Test
	public void getPlantTrue() throws Exception {
		this.mockMvc.perform(get("/submission").param("plant_name", "Lily"))
				.andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.content.Plant").value("True"));

	}
	@Test
	public void getPlantFalse() throws Exception {
		this.mockMvc.perform(get("/submission").param("plant_name", "Table"))
				.andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.content.Plant").value("False"));

	}
	@Test
	public void getActorTrue() throws Exception {
		this.mockMvc.perform(get("/submission").param("actor_name", "Lily James"))
				.andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.content.Actor").value("True"));

	}
	@Test
	public void getActorFalse() throws Exception {
		this.mockMvc.perform(get("/submission").param("actor_name", "Train"))
				.andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.content.Actor").value("False"));

	}






}
