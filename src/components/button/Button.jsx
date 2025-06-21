import { PrimaryButton, SecondaryButton, BaseButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  primary: "primary",
  secondary: "secondary",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  let CustomButton = BaseButton;
  if (BUTTON_TYPE_CLASSES[buttonType] === BUTTON_TYPE_CLASSES.primary) {
    CustomButton = PrimaryButton;
  } else if (
    BUTTON_TYPE_CLASSES[buttonType] === BUTTON_TYPE_CLASSES.secondary
  ) {
    CustomButton = SecondaryButton;
  }
  return CustomButton;
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
