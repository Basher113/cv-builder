import "./cv-preview.css"
const CvPreview = ({personalInfo, experiences}) => {
  const {fullName, email, phone, location, summary} = personalInfo;
  
  return (
    <div className="cv-paper-container">
      <h2 className="full-name">{fullName}</h2>
      <div className="contacts">
        <div className="email">{email}</div>
        <div className="phone"> {phone && " | "} {phone}</div>
        <div className="location">{location && " | "} {location}</div>
      </div>
      <div className="summary">{summary}</div>

      {experiences.length !== 0 && 
        <div className="experiences">
          {experiences.map((experience, index) => {
            const {company, position, startDate, endDate, id} = experience;
        
            return (
            <div key={id}> 
              {index === 0 && (company || position || startDate || endDate) && <h3>Experience</h3>}
              <div  className="experience-preview">
                <div className="company-position">
                  <div className="position">{position}{position && company && ", "}</div>
                  <div className="company">{company}</div>
                </div>
                <div className="date-section">
                  <div>{startDate}</div>
                  {startDate && <span>-</span>}
                  <div>{endDate}</div>
                </div>
              </div>
            </div>
            )
          })}
         </div>
        }
        
     
    </div>
  )
}

export default CvPreview