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
      baseURL: 'http://localhost:8080/submission'
})

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
            
            for (let category of categoriesList){
                  if(letterContext.toLowerCase() !== formik.values[category].charAt(0).toLowerCase()){ 
                        errors[category] = 'Wrong Letter, please be cuation!' 
                        letterFail = true 
                  }
            }
            if(letterFail){
                  return errors
            } 

            await api.get('?country_name='+formik.values.country + '&city_name='+formik.values.city + '&animal_name='+formik.values.animal + '&plant_name='+formik.values.plant +'&actor_name='+formik.values.actor).then((response) => {
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
            initialValues: {
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
                  <input type= 'text' id={category} country={category} onChange={formik.handleChange} value={formik.values[category]} key={category}/>
                  {formik.errors[category] ? <div>{formik.errors[category]}</div>: null}
                  </label>
            )
      }

      return (
      <div className="login-box">      
            <form onSubmit={formik.handleSubmit}>
                  {fields}
                  <input type="submit" value="Submit"/>
            </form>
      </div>
      )
}

export default Categories
