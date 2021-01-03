import React, { Component } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'


const api = axios.create({
      baseURL: 'http://localhost:8080/submission'
})

 function Country(){
       const validate = async(response) => {
            let errors ={} 
            console.log('before validate', formik.values.success)
            
            await api.get('?country_name=' +  formik.values.country).then((response) => {
                  formik.values.success = response.data.content
                  console.log('Response',  response.data.content)
            });
      
            console.log('after api get', formik.values.success)
            if(formik.values.success !== 'True'){
                  console.log('setting error')
                  errors.country = 'No such country exists!'   
            }
            console.log('not setting error')
            return errors
      }

      const formik = useFormik({
            initialValues: {
            country: '',
            city: '', 
            success: 'false'
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
                  </label>
                  <input type="submit" value="Submit"/>
                  {/* {formik.errors.country ? <div>{formik.errors.country}</div>: null} */}
            </form>
      </div>
      )
}

export default Country
