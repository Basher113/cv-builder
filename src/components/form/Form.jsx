import FormInput from '../form-input/FormInput';
import "./form.css"

const Form = ({onChange}) => {
  
  return (
    <form>
      <FormInput type="text" label="Full Name" name="fullName" onChangeHandler={onChange}/>
    </form>
  )
}

export default Form