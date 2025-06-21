import styled from "styled-components";
export const BaseButton = styled.button`
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    transform: translateY(-10%);
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: rgb(19, 19, 19);
  color: white;
  padding: 0.7em;

  &:hover {
    background-color: rgb(255, 255, 255);
    border: 1px solid black;
    color: black;
  }
`;

export const SecondaryButton = styled(BaseButton)`
  border: 1px solid black;
  text-transform: capitalize;
  padding: 0.5em;
  color: ${(props) => (props.className === "active" ? "white" : "black")};
  background-color: ${(props) =>
    props.className === "active" ? "rgb(19, 19, 19)" : ""};

  &:hover {
    background-color: rgb(19, 19, 19);
    color: white;
    border: 1px solid white;
  }
`;
