import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { LetterContext}  from  './GenerateRandomLetter'
import api from '../utils/api';
import reloadPage from '../utils/reload'


/*
Categories is a child of generateRandomLetter.
It recieves a letter from generateRandomLetter then, after the submission of the user, it validates the first char of every category that the user has entered. 
If the first char in any category is different from the random letter it returns an error message to the UI for each category which has a difference. 
Else, it sends a request to the java API server and each category is validated differently in the server. 
If any of the fields is incorrect, an error message will be displayed under the field. 
Else, a succsess message will alert the user and the page will be reloaded. 
*/

function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
}

 function Categories(){
      const letterContext = useContext(LetterContext)
      const categoriesList = ["country", "city", "animal","plant", "actor"]
       const validate = async() => {
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

            let url = ''
            for (let category of categoriesList){
                  url += url ? '&' : '?'
                  url += category + '_name=' + formik.values[category]
            }

            let apiResponse = await api.get(url)

            for (let category of categoriesList){
                  errors[category] = apiResponse.data.content[capitalizeFirstLetter(category)] === 'True' ? '' : 'No such ' + capitalizeFirstLetter(category) + ' exists!'
            }

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

      return ( 
      <div className="login-box">      
            <form onSubmit={formik.handleSubmit}>
                  {
                        categoriesList.map(category =>
                              <label htmlFor = {category} key={category}>{capitalizeFirstLetter(category)}<br/>
                                    <input type= 'text' id={category} onChange={formik.handleChange} value={formik.values[category]} key={category}/> 
                                    {formik.errors[category] ? <div>{formik.errors[category]}</div>: null}
                              </label>  
                        )
                  }
                  <input type="submit" value="Submit"/>
            </form>
      </div>
      )
}

export default Categories
