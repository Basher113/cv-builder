import FormInput from "../form-input/FormInput"
import "./experience-form.css"
const ExperienceForm = ({experiences, onChange, addExperienceHandler}) => {

  return (
    <form className="experience-form">
      <h2>Experience</h2>
      {experiences.map(experience => {
        const {id, company, position, startDate, endDate, jobDescription} = experience;
        
        return (
        <div key={id}>
          <FormInput type="text" label="Company" name="company" value={company} onChangeHandler={(event) => onChange(id, event)}/>
          <FormInput type="text" label="Position" name="position" value={position} onChangeHandler={(event) => onChange(id, event)}/>
          <div className="date-group">
            <FormInput type="date" label="Start Date" name="startDate" value={startDate} onChangeHandler={(event) => onChange(id, event)}/>
            <FormInput type="date" label="End Date" name="endDate" value={endDate} onChangeHandler={(event) => onChange(id, event)}/>
          </div>
          <label htmlFor="job-description">Job description</label>
          <textarea name="jobDescription" id="job-description" onChange={(event) => onChange(id, event)} value={jobDescription}></textarea>
        </div>)
      })}
      
      <button type="button" onClick={addExperienceHandler} className="add-more-button">Add More</button>
    </form>
  )
}

export default ExperienceForm