import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
const SkillForm = ({skills, skillsChoice, addSkillFromChoicesHandler, addSkillHandler, onChange}) => {
  return (
    <>
      <h2>Skill</h2>
      <div className="skills-choice">
        {skillsChoice.map(choice => (
          <Button className="skill-choice-button" type="button" onClick={() => addSkillFromChoicesHandler(choice)} key={choice}>{choice}</Button>
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
      
      <Button type="button" onClick={addSkillHandler} className="primary">+ Add more skill</Button>
    </>
  )
}

export default SkillForm