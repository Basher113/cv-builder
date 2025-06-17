import Button from "../button/Button";
import FormInput from "../form-input/FormInput"
const ProjectForm = ({projects, addProjectHandler, onChange}) => {
  return (
    <>
      <h2>Project</h2>
      {projects.map(project => {
        const {id, projectName, projectDescription} = project;
        
        return (
        <div key={id}>
          <FormInput type="text" label="Project Name" name="projectName" value={projectName} onChangeHandler={(event) => onChange(id, event)}/>
          <label htmlFor="project-description">Project Description</label>
          <textarea name="projectDescription" id="project-description" value={projectDescription} onChange={(event) => onChange(id, event)}></textarea>
          
        </div>
        )
      })}
      
      <Button type="button" onClick={addProjectHandler} className="primary">+ Add Project</Button>
    </>
  )
}

export default ProjectForm