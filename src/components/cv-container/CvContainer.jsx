import { useState } from "react";

import PersonalInfoForm from "../personal-info-form/PersonalInfoForm";
import CvPreview from "../cv-preview/CvPreview";
import "./cv-container.css";
import ExperienceForm from "../experience-form/ExperienceForm";
import EducationForm from "../education-form/EducationForm";


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

const defaultEducationFormField = {
  id: crypto.randomUUID(),
  school: "",
  degree: "",
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
  },
  {
    id: 3,
    text: "education"
  }
]

const CvContainer = () => {
  const [personalInfo, setPersonalInfo] = useState(personalInfoFormField);
  const [experiences, setExperiences] = useState([defaultExperienceFormField]);
  const [educations, setEducations] = useState([defaultEducationFormField])
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

  const addExperienceHandler = () => {
    // Add new experience formField
    const newExperience = {...defaultExperienceFormField, id: crypto.randomUUID()}
    setExperiences(prev => [...prev, newExperience])
  }

  const addEducationHandler = () => {
    const newEducation = {...defaultEducationFormField, id: crypto.randomUUID()};
    setEducations(prev => [...prev, newEducation])
  }

  const updateEducationHandler = (educationId, e) => {
    const {name, value} = e.target;
    setEducations(prev =>
      prev.map(educ => 
        educ.id === educationId ? {...educ, [name]: value} : educ
      )
    )
  }

  const activeTabHandler = (tabId) => {
    const index = tabs.findIndex(tab => tab.id === tabId);
    setActiveTab(tabs[index]);
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
      {activeTab.text === "education" && <EducationForm educations={educations} addEducationHandler={addEducationHandler} onChange={updateEducationHandler}/>}
      <CvPreview personalInfo={personalInfo} experiences={experiences} educations={educations}/>
    </div>
  )
}

export default CvContainer