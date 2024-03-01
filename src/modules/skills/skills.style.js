import styled from "styled-components";

export const DivSkills = styled.div`
  display: flex;
  margin: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 60rem;
  gap: 2rem;

  @media (max-width: 850px) {
    width: 90%;
    margin-left: 0;
  }
`;

export const SkillsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Lenguage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Tools = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProgramingTools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const NoBulletsList = styled.ul`
  list-style-type: none;
  line-height: 1.25rem;
`;

export const H2 = styled.h2`
  max-width: 34rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: rgb(193 59 40);

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const SeparatorLine = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  margin: 2rem auto;
  max-width: 60rem;
  opacity: 60%;
`;