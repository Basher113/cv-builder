import { useState } from "react";

import Form from "../form/Form";
import CV from "../cv/CV";
import "./cv-container.css";

const defaultFormField = {
  fullName: "",
}

const CvContainer = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormField({...formField, [name]: value});
  }

  return (
    <div className="cv-container">
      <Form onChange={changeHandler}/>
      <CV fullName={formField.fullName}/>
    </div>
  )
}

export default CvContainer