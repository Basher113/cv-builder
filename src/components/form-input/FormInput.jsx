import "./form-input.css"
const FormInput = ({label, type, name, value, onChangeHandler}) => {
  
  return (
    <div className="group">
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChangeHandler} />
    </div>
  )
}

export default FormInput