import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 2em;
  margin-top: 5em;
  align-items: flex-start;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 1.5em;
  }
`;

export const FormContainerDiv = styled.div`
  box-shadow: var(--shadow);
  padding: 1em;
`;

export const FormContainerForm = styled.form`
  padding: 1rem 0;
`;

export const FormTitle = styled.h3`
  text-transform: capitalize;
  font-size: 1.5rem;
`;

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
