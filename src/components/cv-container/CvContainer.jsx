import { useState } from "react";

import PersonalInfoForm from "../personal-info-form/PersonalInfoForm";
import CvPreview from "../cv-preview/CvPreview";
import "./cv-container.css";

const personalInfoFormField = { 
  fullName: "",
  email: "",
  phone: "",
  location: "",
  summary: "",
}

const CvContainer = () => {
  const [formField, setFormField] = useState(personalInfoFormField);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormField({...formField, [name]: value});
  }

  return (
    <div className="cv-container">
      <PersonalInfoForm formField={formField} onChange={changeHandler}/>
      <CvPreview fullName={formField.fullName}
        email={formField.email}
        phone={formField.phone}
        location={formField.location}
        summary={formField.summary}
      />
    </div>
  )
}

export default CvContainer