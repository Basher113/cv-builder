import FormInput from "../form-input/FormInput";
import { FormTitle } from "../cv-container/cvContainer.styles";
const PersonalInfoForm = ({ formField, onChange }) => {
  const { fullName, email, phone, location, summary } = formField;
  return (
    <>
      <FormTitle>Personal Info</FormTitle>
      <FormInput
        type="text"
        label="Full Name"
        name="fullName"
        value={fullName}
        onChange={onChange}
      />
      <FormInput
        type="text"
        label="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <FormInput
        type="text"
        label="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <FormInput
        type="text"
        label="location"
        name="location"
        value={location}
        onChange={onChange}
      />
      <FormInput
        as="textarea"
        label="Summary"
        name="summary"
        id="summary"
        onChange={onChange}
        value={summary}
      ></FormInput>
    </>
  );
};

export default PersonalInfoForm;
