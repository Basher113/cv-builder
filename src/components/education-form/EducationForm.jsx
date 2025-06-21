import { DateGroup } from "../experience-form/experienceForm.styles";
import { FormTitle } from "../cv-container/cvContainer.styles";
import { Fragment } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import FormInput from "../form-input/FormInput";

const EducationForm = ({ educations, addEducationHandler, onChange }) => {
  return (
    <>
      <FormTitle>Education</FormTitle>
      {educations.map((education) => {
        const { id, school, degree, startDate, endDate } = education;
        console.log(education);
        return (
          <Fragment key={id}>
            <FormInput
              type="text"
              label="School/University"
              name="school"
              value={school}
              onChange={(event) => onChange(id, event)}
            />
            <FormInput
              type="text"
              label="Degree Program"
              name="degree"
              value={degree}
              onChange={(event) => onChange(id, event)}
            />
            <DateGroup className="date-group">
              <FormInput
                type="date"
                label="Start Date"
                name="startDate"
                value={startDate}
                onChange={(event) => onChange(id, event)}
              />
              <FormInput
                type="date"
                label="End Date"
                name="endDate"
                value={endDate}
                onChange={(event) => onChange(id, event)}
              />
            </DateGroup>
          </Fragment>
        );
      })}

      <Button
        type="button"
        buttonType={BUTTON_TYPE_CLASSES.primary}
        onClick={addEducationHandler}
      >
        + Add Education
      </Button>
    </>
  );
};

export default EducationForm;
