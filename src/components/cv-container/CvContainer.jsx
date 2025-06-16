import { useState } from "react";

import PersonalInfoForm from "../personal-info-form/PersonalInfoForm";
import CvPreview from "../cv-preview/CvPreview";
import "./cv-container.css";
import ExperienceForm from "../experience-form/ExperienceForm";


const personalInfoFormField = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  summary: "",
}

const defaultExperienceFormField = {
  company: "",
  position: "",
  startDate: "",
  endDate: "",
}

const tabs = [
  {
    id: 1,
    text: "personal"
  },
  {
    id: 2,
    text: "experience"
  }
]

const CvContainer = () => {
  const [personalInfo, setPersonalInfo] = useState(personalInfoFormField);
  const [experienceFormField, setExperienceFormField] = useState(defaultExperienceFormField);
  
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const experiences = [experienceFormField];
  const updatePersonalInfoHandler = (e) => {
    const {name, value} = e.target;
    setPersonalInfo({...personalInfo, [name]: value});
  }

  const updateExperienceInputHandler = (e) => {
    const {name, value} = e.target;
    setExperienceFormField({...experienceFormField, [name]: value});
    
  }
  
  const activeTabHandler = (tabId) => {
    const index = tabs.findIndex(tab => tab.id === tabId);
    setActiveTab(tabs[index]);
  }

  console.log(experiences)
  return (
    <div className="cv-container">
      <div className="tabs">
        {tabs.map(tab => (
          <button className={tab.id === activeTab.id ? "active" : ""} key={tab.id} onClick={() => activeTabHandler(tab.id)}>{tab.text}</button>
        ))}
      </div>
      
      {activeTab.text === "personal" && <PersonalInfoForm formField={personalInfo} onChange={updatePersonalInfoHandler}/>}
      {activeTab.text === "experience" && <ExperienceForm formField={experienceFormField} onChange={updateExperienceInputHandler}/>}
      <CvPreview personalInfo={personalInfo} experiences={experiences}/>
    </div>
  )
}

export default CvContainer