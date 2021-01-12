import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { LetterContext}  from  './GenerateRandomLetter'
import axios from 'axios'
import Popup from 'react-popup';


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
            console.log('before validate Country:', formik.values.countrySuccess)
            console.log('before validate city:', formik.values.citySuccess)
            console.log('Letter in Categories is : ',  letterContext)

            console.log('letterContext.toLowerCase() : ',  letterContext.toLowerCase())
            console.log('formik.values.city.charAt(0).toLowerCase() : ',  formik.values.city.charAt(0).toLowerCase())

            let letterFail = false

            if(letterContext.toLowerCase() !==   formik.values.city.charAt(0).toLowerCase()){
                  console.log('letter error city')
                  errors.city = 'Wrong Letter, please be cuation!' 
                  letterFail = true
            } 

            if(letterContext.toLowerCase() !==   formik.values.country.charAt(0).toLowerCase()){ 
                  console.log('letter error contry')
                  errors.country = 'Wrong Letter, please be cuation!' 
                  letterFail = true
            } 

            if(letterFail){
                  console.log(errors)
                  return errors
            } 

            await api.get('?country_name='+formik.values.country + '&city_name='+formik.values.city).then((response) => {
                  formik.values.countrySuccess = response.data.content.Country
                  formik.values.citySuccess = response.data.content.City
                  console.log('Response Country: ',  response.data.content.Country)
                  console.log('Response City: ',  response.data.content.City)                 
            });
      
           
            if(formik.values.countrySuccess !== 'True'){
                  console.log('setting error')
                  errors.country = 'No such country exists!'    
            }
            
            if(formik.values.citySuccess !== 'True'){
                  console.log('setting error')
                  errors.city = 'No such city exists!'    
            }
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
            //success: 'false'
            citySuccess: 'false',
            countrySuccess: 'false'
            },
            onSubmit: values => {
                  console.log('Submitting!')
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
                  <input type="submit" value="Submit"/>
            </form>
            <Popup />
      </div>
      )
}

export default Categories
