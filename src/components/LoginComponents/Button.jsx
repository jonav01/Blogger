import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: #0B6EFE;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 50%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1rem;
`;
