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
  id: crypto.randomUUID(),
  company: "",
  position: "",
  startDate: "",
  endDate: "",
  jobDescription: "",
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
  const [experiences, setExperiences] = useState([defaultExperienceFormField]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const updatePersonalInfoHandler = (e) => {
    const {name, value} = e.target;
    setPersonalInfo({...personalInfo, [name]: value});
  }

  const updateExperienceHandler = (experienceId, e) => {
    const {name, value} = e.target;
    setExperiences(prev => 
      prev.map(experience => 
        experience.id === experienceId ? {...experience, [name]: value} : experience
      )
    );
  }
  
  const activeTabHandler = (tabId) => {
    const index = tabs.findIndex(tab => tab.id === tabId);
    setActiveTab(tabs[index]);
  }

  const addExperienceHandler = () => {
    // Add new experience formField
    const newExperience = {...defaultExperienceFormField, id: crypto.randomUUID()}
    setExperiences(prev => [...prev, newExperience])
  }

  return (
    <div className="cv-container">
      <div className="tabs">
        {tabs.map(tab => (
          <button className={tab.id === activeTab.id ? "active" : ""} key={tab.id} onClick={() => activeTabHandler(tab.id)}>{tab.text}</button>
        ))}
      </div>
      
      {activeTab.text === "personal" && <PersonalInfoForm formField={personalInfo} onChange={updatePersonalInfoHandler}/>}
      {activeTab.text === "experience" && <ExperienceForm experiences={experiences} addExperienceHandler={addExperienceHandler} onChange={updateExperienceHandler}/>}
      <CvPreview personalInfo={personalInfo} experiences={experiences}/>
    </div>
  )
}

export default CvContainer