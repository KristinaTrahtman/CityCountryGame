import React from "react";
import { useFormik } from "formik";
import Clock from "./Clock";
import Categories from "./Categories"; 
import "../css/button.css";

function GameAggregator() {
  //No X letter - there are no countries or animals that start with that letter.
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWYZ";

  const formik = useFormik({
    initialValues: {
      letter: "",
      start: false,
      reset: false,
    },
    onSubmit: async () => {
      formik.values.letter = letter[Math.floor(Math.random() * letter.length)];
      formik.values.reset = !formik.values.reset;
      formik.values.start = true;
    },
  });

  return (
    <div>
      <Clock
        initialSeconds={formik.values.start ? 59 : 0}
        resetTime={formik.values.reset}
      />
      <form onSubmit={formik.handleSubmit}>
        <label className="label-letter">
          {"Your Letter is: " + formik.values.letter}
        </label>
        <br />
        <input type="submit" value="Press Here To Generate A Letter" className="btn btn-white btn-animation-1"/>
      </form>
      <Categories
        letter={formik.values.letter}
        start={formik.values.start}
        key={formik.values.letter}
      />
    </div>
  );
}
export default GameAggregator;
