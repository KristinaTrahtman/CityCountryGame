import React from 'react'
import { useFormik } from 'formik'
function Country(){
      const formik = useFormik({
            initialValues: {
                  country: ''
            },
            onSubmit: values => {
                  console.log('Form data', values)
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
