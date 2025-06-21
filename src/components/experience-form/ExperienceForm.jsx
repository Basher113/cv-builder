import { Fragment } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { DateGroup } from "./experienceForm.styles";
import { FormTitle } from "../cv-container/cvContainer.styles";

import FormInput from "../form-input/FormInput";
const ExperienceForm = ({ experiences, onChange, addExperienceHandler }) => {
  return (
    <>
      <FormTitle>Experience</FormTitle>
      {experiences.map((experience) => {
        const { id, company, position, startDate, endDate, jobDescription } =
          experience;

        return (
          <Fragment key={id}>
            <FormInput
              type="text"
              label="Company"
              name="company"
              defaultValue={company}
              onChange={(event) => onChange(id, event)}
            />
            <FormInput
              type="text"
              label="Position"
              name="position"
              defaultValue={position}
              onChange={(event) => onChange(id, event)}
            />
            <DateGroup className="date-group">
              <FormInput
                type="date"
                label="Start Date"
                name="startDate"
                defaultValue={startDate}
                onChange={(event) => onChange(id, event)}
              />
              <FormInput
                type="date"
                label="End Date"
                name="endDate"
                defaultValue={endDate}
                onChange={(event) => onChange(id, event)}
              />
            </DateGroup>

            <FormInput
              as="textarea"
              name="jobDescription"
              label="Job Description"
              onChange={(event) => onChange(id, event)}
              defaultValue={jobDescription}
            ></FormInput>
          </Fragment>
        );
      })}

      <Button
        type="button"
        onClick={addExperienceHandler}
        buttonType={BUTTON_TYPE_CLASSES.primary}
      >
        + Add Experience
      </Button>
    </>
  );
};

export default ExperienceForm;
