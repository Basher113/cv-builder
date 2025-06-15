import FormInput from '../form-input/FormInput';
import "./form.css"

const Form = ({formField, onChange}) => {
  const formFieldKeys = Object.keys(formField);
  return (
    <form>
      {formField && formFieldKeys.map(field => (
        <FormInput key={field} type="text" label={field} name={field} onChangeHandler={onChange}/>
      ))}
    </form>
  )
}

export default Form