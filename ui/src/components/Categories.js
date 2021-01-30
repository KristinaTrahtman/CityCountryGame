import React from "react";
import { useFormik } from "formik";
import api from "../utils/api";
import reloadPage from "../utils/reload";

/*
Categories is a child of GameAggregator.
It recieves a letter from GameAggregator then, after the submission of the user, it validates the first char of every category that the user has entered. 
If the first char in any category is different from the random letter it returns an error message to the UI for each category which has a difference. 
Else, it sends a request to the java API server and each category is validated differently in the server. 
If any of the fields is incorrect, an error message will be displayed under the field. 
Else, a succsess message will alert the user and the page will be reloaded. 
*/

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Categories(props) {
  const { letter, start } = props;
  const categoriesList = ["country", "city", "animal", "plant", "actor"];
  const validate = async () => {
    let errors = {};
    let letterFail = false;
    for (let category of categoriesList) {
      if (
        letter.toLowerCase() !== formik.values[category].charAt(0).toLowerCase()
      ) {
        errors[category] = "Wrong Letter";
        letterFail = true;
      }
    }
    if (letterFail) {
      return errors;
    }

    let url = "";
    for (let category of categoriesList) {
      url += url ? "&" : "?";
      url += category + "_name=" + formik.values[category];
    }

    let apiResponse = await api.get(url);

    for (let category of categoriesList) {
      errors[category] = apiResponse.data.content[
        capitalizeFirstLetter(category)
      ]
        ? ""
        : "No such " + capitalizeFirstLetter(category) + " exists!";
    }

    if (Object.values(errors).join("").length === 0) {
      alert("Wow you are Amazing!!!!");
      setTimeout(reloadPage, 100);
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      country: "",
      city: "",
      animal: "",
      plant: "",
      actor: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {categoriesList.map((category) => (
          <label htmlFor={category} key={category}>
            {capitalizeFirstLetter(category)}
            <input
              type="text"
              id={category}
              onChange={formik.handleChange}
              value={formik.values[category]}
              key={category}
              disabled={!start}
              required
            />
            {formik.errors[category] ? (
              <div className="label-error">{formik.errors[category]}</div>
            ) : (
              <div>&nbsp;</div>
            )}
          </label>
        ))}
        <br />
        <input
          type="submit"
          value="Submit"
          disabled={!start}
          className="btn btn-white btn-animation-1"
        />
      </form>
    </div>
  );
}

export default Categories;
