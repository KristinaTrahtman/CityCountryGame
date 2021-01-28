import React from 'react' 
import { useFormik } from 'formik'
import Clock from './Clock'
import Categories from './Categories';



// R.R why do you need to use context here? why not just pass the info as props to the child?
// In a typical React application, data is passed top-down (parent to child) via props
// context provides a way to share values between components without having to explicitly pass a prop through every level of the tree
// you can read about it here: https://reactjs.org/docs/context.html
export const ResetContext = React.createContext()
export const LetterContext = React.createContext()

function GenerateRandomLetter() {
  //No X letter - there are no countries or animals that start with that letter. 
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWYZ"

      const formik = useFormik({
        initialValues: { // R.R add some intentation in the next lines
          alphabet: '',  // R.R the name here is confusing, it's not the alphabet but only a random chosen letter... 
          reset: false,
          start: false
        },
        onSubmit: async(values) => {
          formik.values.alphabet = alphabet[Math.floor(Math.random() * alphabet.length)]
          formik.values.reset = formik.values.reset ? false : true // R.R I don't really understand this line first the if here is not needed. and then you get formik.values.reset = formik.values.reset ?
          formik.values.start = true 
        }
      })

    return (
      <div className="cover">
        <ResetContext.Provider value={formik.values.reset}>
          {/* R.R just like you pass the initialSeconds as props you can also pass the reset value*/}
          <Clock initialSeconds={formik.values.start ? 59 : 0}/>
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
