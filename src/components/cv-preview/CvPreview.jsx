import "./cv-preview.css"
const CvPreview = ({fullName, email, phone, location, summary}) => {
  return (
    <div className="cv-paper-container">
      <h2 className="full-name">{fullName}</h2>
      <div className="contacts">
        <div className="email">{email} {email && " | "}</div>
        <div className="phone">{phone} {phone && " | "}</div>
        <div className="location">{location}</div>
      </div>
      <div className="summary">{summary}</div>
    </div>
  )
}

export default CvPreview