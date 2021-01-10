import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { LetterContext}  from  './GenerateRandomLetter'
import axios from 'axios'




const api = axios.create({
      baseURL: 'http://localhost:8080/submission'
})

 function Categories(){
      const letterContext = useContext(LetterContext)
       const validate = async(response) => {
            let errors ={} 
            console.log('before validate Country:', formik.values.countrySuccess)
            console.log('before validate Country:', formik.values.citySuccess)
            console.log('Letter in Categories is : ',  letterContext)

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
            if(letterContext.toLowerCase() !==   formik.values.citySuccess){
                  console.log('letter error')
                  errors.city = 'Wrong Letter, please be cuation!'  
            }
            
            console.log('not setting error')
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
      </div>
      )
}

export default Categories
