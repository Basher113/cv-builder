import FormInput from "../form-input/FormInput";
import "./skill-form.css"
const SkillForm = ({skills, skillsChoice, addSkillFromChoicesHandler, addSkillHandler, onChange}) => {
  return (
    <form>
      <h2>Skill</h2>
      <div className="skills-choice">
        {skillsChoice.map(choice => (
          <button type="button" onClick={() => addSkillFromChoicesHandler(choice)} key={choice}>{choice}</button>
        ))}
      </div>
      {skills.map(prevSkill => {
        const {id, skill } = prevSkill;
        console.log(prevSkill)
        return (
        <div key={id}>
          <FormInput type="text" label="" name="skill" value={skill} onChangeHandler={(event) => onChange(id, event)}/>
        </div>
        )
      })}
      
      <button type="button" onClick={addSkillHandler} className="add-more-button">+ Add more skill</button>
    </form>
  )
}

export default SkillForm