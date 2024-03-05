import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  background-color: chartreuse;
  color: #444;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #444;
    color: chartreuse;
  }
`;
