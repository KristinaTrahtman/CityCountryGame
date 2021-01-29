import React from "react";
import { useFormik } from "formik";
import Clock from "./Clock";
import Categories from "./Categories";

// R.R why do you need to use context here? why not just pass the info as props to the child?
// In a typical React application, data is passed top-down (parent to child) via props
// context provides a way to share values between components without having to explicitly pass a prop through every level of the tree
// you can read about it here: https://reactjs.org/docs/context.html

function GenerateRandomLetter() {
  //No X letter - there are no countries or animals that start with that letter.
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWYZ";

  const formik = useFormik({
    initialValues: {
      letter: "", 
      start: false,
      reset: false
    },
    onSubmit: async () => {
      formik.values.letter = letter[Math.floor(Math.random() * letter.length)];
      formik.values.reset = !formik.values.reset;
      formik.values.start = true;
    },
  });

  return (
    <div className="cover">
      <Clock initialSeconds={formik.values.start ? 59 : 0} resetTime={formik.values.reset} key={formik.values.reset} />
      <form onSubmit={formik.handleSubmit}>     
        <label htmlFor="Start">
          {"Your Letter is: " + formik.values.letter}
          <br />
        </label>
        <input type="submit" value="Press Here To Generate A Letter" />
      </form>
      {!formik.values.start ? null : (
          <Categories letter={formik.values.letter} key={formik.values.letter} />
      )}
    </div>
  );
}
export default GenerateRandomLetter;