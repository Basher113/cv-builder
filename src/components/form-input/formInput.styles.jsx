import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1em 0;
`;
export const StyledLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  text-transform: capitalize;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid rgb(197, 197, 197);

  &:focus {
    outline: rgb(197, 197, 197);
  }
}
`;
