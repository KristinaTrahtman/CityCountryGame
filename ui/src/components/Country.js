import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

function Country(){
      const SUBMIT_REST_API_URL = 'http://localhost:8080/greeting'
      const formik = useFormik({
            initialValues: {
                  country: ''
            },
            onSubmit: values => {
                  console.log('Form data', values)
                  axios.get(SUBMIT_REST_API_URL + "?name=" +formik.values.country).then((response) => {
                        console.log('Response', response.data.content)
                  });
            }
      })

      //console.log('Form values', formik.values)
      return (
      <div className="login-box">
            <form onSubmit={formik.handleSubmit}>
                  <label htmlFor = 'country'>Country</label>
                  <input type= 'text' id='country' country='country' onChange={formik.handleChange} value={formik.values.country}/>
                  <input type="submit" value="Submit"/>
            </form>
      </div>
      )
}

export default Country
