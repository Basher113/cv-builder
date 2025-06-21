import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import FormInput from "../form-input/FormInput";
import { SkillChoiceButton } from "./skillForm.styles";
const SkillForm = ({
  skills,
  skillsChoice,
  addSkillFromChoicesHandler,
  addSkillHandler,
  onChange,
}) => {
  return (
    <>
      <h2>Skill</h2>
      <div className="skills-choice">
        {skillsChoice.map((choice) => (
          <SkillChoiceButton
            className="skill-choice-button"
            type="button"
            onClick={() => addSkillFromChoicesHandler(choice)}
            key={choice}
          >
            {choice}
          </SkillChoiceButton>
        ))}
      </div>
      {skills.map((prevSkill) => {
        const { id, skill } = prevSkill;
        console.log(prevSkill);
        return (
          <div key={id}>
            <FormInput
              type="text"
              label=""
              name="skill"
              value={skill}
              onChange={(event) => onChange(id, event)}
            />
          </div>
        );
      })}

      <Button
        type="button"
        onClick={addSkillHandler}
        buttonType={BUTTON_TYPE_CLASSES.primary}
      >
        + Add more skill
      </Button>
    </>
  );
};

export default SkillForm;
