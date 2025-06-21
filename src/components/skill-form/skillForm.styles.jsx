import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const SkillChoiceButton = styled(BaseButton)`
  background-color: rgb(224, 224, 224);
  border: none;
  border-radius: 20px;
  margin-right: 10px;
  margin-top: 8px;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    background-color: rgba(224, 224, 224, 0.726);
  }
`;
