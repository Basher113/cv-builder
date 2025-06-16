import FormInput from "../form-input/FormInput"
const PersonalInfoForm = ({formField, onChange}) => {
  const formFieldKeys = Object.keys(formField)
  return (
    <form>
      <h2>Personal Info</h2>
      {formFieldKeys.map(field => (
        <FormInput key={field} type="text" label={field} name={field} onChangeHandler={onChange}/>
      ))}
      
    </form>
   
  )
}

export default PersonalInfoForm