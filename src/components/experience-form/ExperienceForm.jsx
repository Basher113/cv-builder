import FormInput from "../form-input/FormInput"
import "./experience-form.css"
const ExperienceForm = ({formField, onChange}) => {
  const {company, position, startDate, endDate} = formField;
  console.log(formField)
  return (
    <form>
      <h2>Experience</h2>
      <FormInput type="text" label="Company" name="company" value={company} onChangeHandler={onChange}/>
      <FormInput type="text" label="Position" name="position" value={position} onChangeHandler={onChange}/>
      <div className="date-group">
        <FormInput type="date" label="Start Date" name="startDate" value={startDate} onChangeHandler={onChange}/>
        <FormInput type="date" label="End Date" name="endDate" value={endDate} onChangeHandler={onChange}/>
      </div>
    </form>
  )
}

export default ExperienceForm