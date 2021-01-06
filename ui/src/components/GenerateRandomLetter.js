import React from 'react' 
import { useFormik } from 'formik'



function GenerateRandomLetter() {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      //alphabet[Math.floor(Math.random() * alphabet.length)]

      const formik = useFormik({
        initialValues: {
        alphabet: '', 
        },
        onSubmit: values => {
              console.log('Submitting!')
        }
        })

    return (
      <div className="login-box">
       <form onSubmit={formik.handleSubmit}>
          <label htmlFor = 'Start'>{alphabet[Math.floor(Math.random() * alphabet.length)]}<br/>
          <input type= 'text' id='Start' alphabet='Start' onChange={formik.handleChange} value={formik.values.alphabet}/>
          </label>
          <input type="submit" value="Start"/>  
      </form>
      </div> 
  )
 }
export default GenerateRandomLetter

  