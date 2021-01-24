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

 function Categories(){
      const letterContext = useContext(LetterContext)
     
       const validate = async(response) => {
            let errors ={} 
            let letterFail = false

            if(letterContext.toLowerCase() !==   formik.values.city.charAt(0).toLowerCase()){
                  errors.city = 'Wrong Letter, please be cuation!' 
                  letterFail = true
            } 

            if(letterContext.toLowerCase() !==   formik.values.country.charAt(0).toLowerCase()){ 
                  errors.country = 'Wrong Letter, please be cuation!' 
                  letterFail = true
            } 
            if(letterContext.toLowerCase() !==   formik.values.animal.charAt(0).toLowerCase()){ 
                  errors.animal = 'Wrong Letter, please be cuation!' 
                  letterFail = true
            } 
            if(letterContext.toLowerCase() !==   formik.values.plant.charAt(0).toLowerCase()){ 
                  errors.plant = 'Wrong Letter, please be cuation!' 
                  letterFail = true
            } 
            if(letterContext.toLowerCase() !==   formik.values.actor.charAt(0).toLowerCase()){ 
                  errors.actor = 'Wrong Letter, please be cuation!' 
                  letterFail = true
            } 


            if(letterFail){
                  console.log(errors)
                  return errors
            } 

            await api.get('?country_name='+formik.values.country + '&city_name='+formik.values.city + '&animal_name='+formik.values.animal + '&plant_name='+formik.values.plant +'&actor_name='+formik.values.actor).then((response) => {
                  errors.country = response.data.content.Country === 'True' ? '' : 'No such Country exists!'
                  errors.city = response.data.content.City === 'True' ? '' : 'No such City exists!'
                  errors.animal = response.data.content.Animal === 'True' ? '' : 'No such Animal exists!'
                  errors.plant = response.data.content.Plant === 'True' ? '' : 'No such Plant exists!'
                  errors.actor = response.data.content.Actor === 'True' ? '' : 'No such Actor exists!'
            });

            if(Object.entries(errors).length === 0){
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

      return (
      <div className="login-box">      
            <form onSubmit={formik.handleSubmit}>
                  <label htmlFor = 'country'>Country<br/>
                  <input type= 'text' id='country' country='country' onChange={formik.handleChange} value={formik.values.country}/>
                  {formik.errors.country ? <div>{formik.errors.country}</div>: null}
                  </label>
                  <label htmlFor = 'city'>City<br/>
                  <input type= 'text' id='city' city='city' onChange={formik.handleChange} value={formik.values.city}/>
                  {formik.errors.city ? <div>{formik.errors.city}</div>: null}
                  </label>
                  <label htmlFor = 'animal'>Animal<br/>
                  <input type= 'text' id='animal' animal='animal' onChange={formik.handleChange} value={formik.values.animal}/>
                  {formik.errors.animal ? <div>{formik.errors.animal}</div>: null}
                  </label>
                  <label htmlFor = 'plant'>Plant<br/>
                  <input type= 'text' id='plant' plant='plant' onChange={formik.handleChange} value={formik.values.plant}/>
                  {formik.errors.plant ? <div>{formik.errors.plant}</div>: null}
                  </label>
                  <label htmlFor = 'actor'>Actor<br/>
                  <input type= 'text' id='actor' actor='actor' onChange={formik.handleChange} value={formik.values.actor}/>
                  {formik.errors.actor ? <div>{formik.errors.actor}</div>: null}
                  </label>
                  <input type="submit" value="Submit"/>
            </form>
      </div>
      )
}

export default Categories
