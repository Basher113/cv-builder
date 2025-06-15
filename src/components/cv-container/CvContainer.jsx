import { useState } from "react";

import Form from "../form/Form";
import CV from "../cv/CV";
import "./cv-container.css";

const defaultFormField = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  summary: "",
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
      <Form formField={formField} onChange={changeHandler}/>
      <CV fullName={formField.fullName}
        email={formField.email}
        phone={formField.phone}
        location={formField.location}
        summary={formField.summary}
      />
    </div>
  )
}

export default CvContainer