import { Wrapper, StyledLabel, StyledInput } from "./formInput.styles.jsx";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Wrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...otherProps} />
    </Wrapper>
  );
};

export default FormInput;
