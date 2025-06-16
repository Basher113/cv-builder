import FormInput from "../form-input/FormInput";
const EducationForm = ({educations, addEducationHandler, onChange}) => {
  return (
    <form>
      <h2>Education</h2>
      {educations.map(education => {
        const {id, school, degree, startDate, endDate, } = education;
        console.log(education)
        return (
        <div key={id}>
          <FormInput type="text" label="School/University" name="school" value={school} onChangeHandler={(event) => onChange(id, event)}/>
          <FormInput type="text" label="Degree Program" name="degree" value={degree} onChangeHandler={(event) => onChange(id, event)}/>
          <div className="date-group">
            <FormInput type="date" label="Start Date" name="startDate" value={startDate} onChangeHandler={(event) => onChange(id, event)}/>
            <FormInput type="date" label="End Date" name="endDate" value={endDate} onChangeHandler={(event) => onChange(id, event)}/>
          </div>
        </div>)
      })}
      
      <button type="button" onClick={addEducationHandler} className="add-more-button">+ Add Education</button>
    </form>
  )
}

export default EducationForm