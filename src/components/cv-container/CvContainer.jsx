import { useState } from "react";

import PersonalInfoForm from "../personal-info-form/PersonalInfoForm";
import CvPreview from "../cv-preview/CvPreview";
import "./cv-container.css";
import ExperienceForm from "../experience-form/ExperienceForm";
import EducationForm from "../education-form/EducationForm";
import ProjectForm from "../project-form/ProjectForm";


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

const defaultProjectFormField = {
  id: crypto.randomUUID(),
  projectName: "",
  projectDescription: ""
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
  },
  {
    id: 4,
    text: "project"
  }
]

const CvContainer = () => {
  const [personalInfo, setPersonalInfo] = useState(personalInfoFormField);
  const [experiences, setExperiences] = useState([defaultExperienceFormField]);
  const [educations, setEducations] = useState([defaultEducationFormField]);
  const [projects, setProjects] = useState([defaultProjectFormField])
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

  const addProjectHandler = () => {
    const newProject = {...defaultProjectFormField, id: crypto.randomUUID()};
    setEducations(prev => [...prev, newProject])
  }

  const updateProjectHandler = (projectId, e) => {
    const {name, value} = e.target;
    setProjects(prev =>
      prev.map(project => 
        project.id === projectId ? {...project, [name]: value} : project
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
      {activeTab.text === "project" && <ProjectForm projects={projects} addProjectHandler={addProjectHandler} onChange={updateProjectHandler}/>}
      <CvPreview personalInfo={personalInfo} experiences={experiences} educations={educations} projects={projects}/>
    </div>
  )
}

export default CvContainer