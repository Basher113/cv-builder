import { Fragment } from "react";
import { formatDate } from "../../utils/date";
import {
  Wrapper,
  FullName,
  Contacts,
  CompanyAndPosition,
  SchoolAndDegree,
  DateSection,
  ProjectName,
} from "./cvPreview.styles.jsx";

const CvPreview = ({
  personalInfo,
  experiences,
  educations,
  projects,
  skills,
}) => {
  const { fullName, email, phone, location, summary } = personalInfo;

  return (
    <Wrapper>
      <div id="personal-info-preview">
        <FullName>{fullName}</FullName>
        <Contacts>
          <div className="email">{email}</div>
          <div className="phone">
            {" "}
            {phone && " | "} {phone}
          </div>
          <div className="location">
            {location && " | "} {location}
          </div>
        </Contacts>
        <div className="summary">{summary}</div>
      </div>

      <div className="experiences">
        {experiences.map((experience, index) => {
          const { company, position, startDate, endDate, jobDescription, id } =
            experience;

          return (
            <div key={id}>
              {index === 0 && (company || position || startDate || endDate) && (
                <h3>Experience</h3>
              )}
              <div className="experience-preview">
                <CompanyAndPosition>
                  <div className="position">
                    {position}
                    {position && company && ", "}
                  </div>
                  <div className="company">{company}</div>
                </CompanyAndPosition>
                <DateSection>
                  <div>{formatDate(startDate)}</div>
                  {startDate && endDate && <span>-</span>}
                  <div>{formatDate(endDate)}</div>
                </DateSection>
                <div className="job-description">{jobDescription}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="educations">
        {educations.map((education, index) => {
          const { id, school, degree, startDate, endDate } = education;

          return (
            <div key={id}>
              {index === 0 && (school || degree || startDate || endDate) && (
                <h3>Education</h3>
              )}
              <div className="education-preview">
                <SchoolAndDegree>
                  <div className="degree">{degree}</div>
                  {degree && school && <span>|</span>}
                  <div className="school">{school}</div>
                </SchoolAndDegree>
                <DateSection>
                  <div>{formatDate(startDate)}</div>
                  {startDate && endDate && <span>-</span>}
                  <div>{formatDate(endDate)}</div>
                </DateSection>
              </div>
            </div>
          );
        })}
      </div>

      <div className="projects">
        {projects.map((project, index) => {
          const { id, projectName, projectDescription } = project;

          return (
            <Fragment key={id}>
              {index === 0 && (projectName || projectDescription) && (
                <h3>Project</h3>
              )}
              <div className="project-preview">
                <ProjectName>{projectName}</ProjectName>

                <div className="project-description">{projectDescription}</div>
              </div>
            </Fragment>
          );
        })}
      </div>

      <div className="skills">
        {skills.map((currentSkill, index) => {
          const { id, skill } = currentSkill;

          return (
            <Fragment key={id}>
              {index === 0 && skill && <h3>Skill</h3>}
              <span className="skill">
                {skill}
                {skill && ", "}
              </span>
            </Fragment>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default CvPreview;
