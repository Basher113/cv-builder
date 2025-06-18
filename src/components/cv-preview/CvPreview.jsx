import { Fragment } from "react";
import "./cv-preview.css";
import { formatDate } from "../../utils/date";

const CvPreview = ({personalInfo, experiences, educations, projects, skills}) => {
  const {fullName, email, phone, location, summary} = personalInfo;
  
  return (
    <div className="cv-paper-container">
      <div className="personal-info">
        <h2 className="full-name">{fullName}</h2>
        <div className="contacts">
          <div className="email">{email}</div>
          <div className="phone"> {phone && " | "} {phone}</div>
          <div className="location">{location && " | "} {location}</div>
        </div>
        <div className="summary">{summary}</div>
      </div>
      
      <div className="experiences">
        {experiences.map((experience, index) => {
          const {company, position, startDate, endDate, jobDescription, id} = experience;

          return (
          <div key={id}> 
            {index === 0 && (company || position || startDate || endDate) && <h3>Experience</h3>}
            <div  className="experience-preview">
              <div className="company-position">
                <div className="position">{position}{position && company && ", "}</div>
                <div className="company">{company}</div>
              </div>
              <div className="date-section">
                <div>{formatDate(startDate)}</div>
                {startDate && endDate && <span>-</span>}
                <div>{formatDate(endDate)}</div>
              </div>
              <div className="job-description">{jobDescription}</div>
            </div>
          </div>
          )
        })}
      </div>

      <div className="educations">
          {educations.map((education, index)=> {
            const {id, school, degree, startDate, endDate} = education;
           

            return (
            <div key={id}> 
              {index === 0 && (school || degree || startDate || endDate) && <h3>Education</h3>}
              <div  className="education-preview">
                <div className="school-degree">
                  <div className="degree">{degree}</div>
                  {degree && school && <span>|</span>}
                  <div className="school">{school}</div>
                </div>
                <div className="date-section">
                  <div>{formatDate(startDate)}</div>
                  {startDate && endDate && <span>-</span>}
                  <div>{formatDate(endDate)}</div>
                </div>
              </div>
            </div>
            )

          })}
      </div>

      <div className="projects">
        {projects.map((project, index)=> {
          const {id, projectName, projectDescription} = project;
        
          return (
          <div key={id}> 
            {index === 0 && (projectName || projectDescription) && <h3>Project</h3>}
            <div className="project-preview">
              <div className="project-name">{projectName}</div>
              
              <div className="project-description">{projectDescription}</div>
            </div>
          </div>
          )

        })}
      </div>

      <div className="skills">
        {skills.map((currentSkill, index)=> {
          const {id, skill} = currentSkill;
        
          return (
          <Fragment key={id}> 
            {index === 0 && skill && <h3>Skill</h3>}
            <span className="skill">{skill}{skill && ", "}</span>  
          </Fragment>
          )

        })}
      </div>
    </div>
  )
}

export default CvPreview