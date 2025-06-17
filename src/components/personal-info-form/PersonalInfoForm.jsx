import FormInput from "../form-input/FormInput"
const PersonalInfoForm = ({formField, onChange}) => {
  const {fullName, email, phone, location, summary} = formField;
  return (
    <>
      <h2>Personal Info</h2>
      <FormInput type="text" label="Full Name" name="fullName" value={fullName} onChangeHandler={onChange}/>
      <FormInput type="text" label="Emaile" name="email" value={email} onChangeHandler={onChange}/>
      <FormInput type="text" label="Phone" name="phone" value={phone} onChangeHandler={onChange}/>
      <FormInput type="text" label="location" name="location" value={location} onChangeHandler={onChange}/>
      <label htmlFor="summary">Summary</label>
      <textarea name="summary" id="summary" onChange={onChange} value={summary}></textarea>
      
    </>
   
  )
}

export default PersonalInfoForm