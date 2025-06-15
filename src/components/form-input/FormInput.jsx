import "./form-input.css"
const FormInput = ({label, type, name, onChangeHandler}) => {
  
  return (
    <div className="group">
      <label>{label}</label>
      <input type={type} name={name} onChange={onChangeHandler} />
    </div>
  )
}

export default FormInput