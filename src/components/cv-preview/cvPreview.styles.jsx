import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1em;
  box-shadow: var(--shadow);
  min-height: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  & > h3 {
    border-bottom: 1px solid black;
    font-size: 1.2rem;
  }
`;
export const FullName = styled.h2`
  text-transform: capitalize;
  font-size: 2rem;
`;

export const Contacts = styled.div`
  display: flex;
  gap: 10px;
`;

export const CompanyAndPosition = styled.div`
  display: flex;
  font-size: 1.1rem;
  & > div {
    font-weight: 700;
  }
`;

export const ProjectName = styled.h4`
  font-weight: 700;
  font-size: 1.1rem;
`;

export const SchoolAndDegree = styled.div`
  display: flex;
`;

export const DateSection = styled.div`
  display: flex;
  font-size: 0.9rem;
  font-style: italic;
`;
