import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import FormInput from "../form-input/FormInput";
import { StyledLabel } from "../form-input/formInput.styles";
const ProjectForm = ({ projects, addProjectHandler, onChange }) => {
  return (
    <>
      <h2>Project</h2>
      {projects.map((project) => {
        const { id, projectName, projectDescription } = project;

        return (
          <div key={id}>
            <FormInput
              type="text"
              label="Project Name"
              name="projectName"
              value={projectName}
              onChange={(event) => onChange(id, event)}
            />

            <FormInput
              name="projectDescription"
              label="Project Description"
              as="textarea"
              value={projectDescription}
              onChange={(event) => onChange(id, event)}
            ></FormInput>
          </div>
        );
      })}

      <Button
        type="button"
        onClick={addProjectHandler}
        buttonType={BUTTON_TYPE_CLASSES.primary}
      >
        + Add Project
      </Button>
    </>
  );
};

export default ProjectForm;
