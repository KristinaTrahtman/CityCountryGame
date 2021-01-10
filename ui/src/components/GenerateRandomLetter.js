import React from 'react' 
import { useFormik } from 'formik'
import Clock from './Clock'
import Categories from './Categories';

export const ResetContext = React.createContext()
export const LetterContext = React.createContext()

function GenerateRandomLetter() {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const validate = async(response) => {
        formik.values.alphabet = alphabet[Math.floor(Math.random() * alphabet.length)]
        console.log('Validating!')
        console.log('value of alphabet is: ' + formik.values.alphabet)
        formik.values.reset = formik.values.reset ? false : true
        formik.values.start = true
        console.log('Reset ' + formik.values.reset)
      }

      const formik = useFormik({
        initialValues: {
        alphabet: '', 
        reset: false,
        start: false
        },
        onSubmit: values => {
          console.log('Submitting Letter!')   
        },
        validateOnChange: false,
        validateOnBlur: false,
        validate
        })

    return (
      <div className="login-box">
        <ResetContext.Provider value={formik.values.reset}>
          <Clock initialSeconds={formik.values.start ? 5 : 0}/>
        </ResetContext.Provider>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor = 'Start'>{'Your Letter is: ' + formik.values.alphabet}<br/>
          </label>
          <input type="submit" value="Press Here To Generate A Letter"/>  
        </form>
        { !formik.values.start
            ? null :
            <LetterContext.Provider value={formik.values.alphabet}>
             <Categories/>
            </LetterContext.Provider>
        }
      </div> 
  )
 }
export default GenerateRandomLetter

  