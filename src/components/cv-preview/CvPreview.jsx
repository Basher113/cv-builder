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

      <div className="experiences">
        <h3>Experiences</h3>
        {experiences.map((experience) => (
          <>
            <div className="company">{experience.company}</div>
            <div className="position">{experience.position}</div>
          </>
        ))}
        
      </div>
    </div>
  )
}

export default CvPreview