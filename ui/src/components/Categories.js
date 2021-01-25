import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { LetterContext}  from  './GenerateRandomLetter'
import axios from 'axios'

/*
Categories is a child of generateRandomLetter.
It recieves a letter from generateRandomLetter then, after the submission of the user, it validates the first char of every category that the user has entered. 
If the first char in any category is different from the random letter it returns an error message to the UI for each category which has a difference. 
Else, it sends a request to the java API server and each category is validated differently in the server. 
If any of the fields is incorrect, an error message will be displayed under the field. 
Else, a succsess message will alert the user and the page will be reloaded. 
*/
const api = axios.create({
      //R.R I think we talked about this, it's a better practice not having this in a component but in a separate file with the axios import
      baseURL: 'http://localhost:8080/submission'
})

// R.R you have the same exact function in more than 1 place
function reloadPage(){ 
      window.location.reload(false);
}

function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
}

 function Categories(){
      const letterContext = useContext(LetterContext)
      const categoriesList = ["country", "city", "animal","plant", "actor"]
       const validate = async(response) => {
            let errors ={} 
            let letterFail = false
            //R.R nice! looks much better :)
            for (let category of categoriesList){
                  if(letterContext.toLowerCase() !== formik.values[category].charAt(0).toLowerCase()){ 
                        errors[category] = 'Wrong Letter, please be cuation!' 
                        letterFail = true 
                  }
            }
            if(letterFail){
                  return errors
            } 
            // R.R try to think how to make this more readable, like generating the url with a loop, or with a url parser...
            // you use await and .then 
            // if you use await then you don't need the .then(response) ...
            // you can just do let response = await api.get(...)
            // I would also put this in a seperate function
            await api.get('?country_name='+formik.values.country + '&city_name='+formik.values.city + '&animal_name='+formik.values.animal + '&plant_name='+formik.values.plant +'&actor_name='+formik.values.actor).then((response) => {
                  // R.R also here you have the same code and you can use a loop... 
                  // also why do you return a String from the server and not a boolean?
                  errors.country = response.data.content.Country === 'True' ? '' : 'No such Country exists!'
                  errors.city = response.data.content.City === 'True' ? '' : 'No such City exists!'
                  errors.animal = response.data.content.Animal === 'True' ? '' : 'No such Animal exists!'
                  errors.plant = response.data.content.Plant === 'True' ? '' : 'No such Plant exists!'
                  errors.actor = response.data.content.Actor === 'True' ? '' : 'No such Actor exists!'
            });

            if(Object.values(errors).join("").length === 0){
                  alert('Wow you are Amazing!!!!');
                  setTimeout(reloadPage, 100)                
            }
            return errors
      }

      const formik = useFormik({
            initialValues: { // R.R indentation
            country: '',
            city: '', 
            animal: '',
            plant: '',
            actor: ''
            },       
            validateOnChange: false,
            validateOnBlur: false,
            validate           
      })

      let fields = []

      for (let category of categoriesList){
            fields.push(
                  <label htmlFor = {category} key={category}>{capitalizeFirstLetter(category)}<br/>
                  {/* R.R country={category} ?  */}
                  <input type= 'text' id={category} country={category} onChange={formik.handleChange} value={formik.values[category]} key={category}/> 
                  {formik.errors[category] ? <div>{formik.errors[category]}</div>: null}
                  </label>
            )
      }

      return ( // R.R indentation :)
      <div className="login-box">      
            <form onSubmit={formik.handleSubmit}>
            {/* R.R you can write a loop here as well. you don't need to do it in js above somthing like
            { categoriesList.map(category =>
                  <label htmlFor = {category} key={category}>{capitalizeFirstLetter(category)}<br/>
                  ...
            */}
                  {fields} 
                  <input type="submit" value="Submit"/>
            </form>
      </div>
      )
}

export default Categories
