import styled from "styled-components";

const StyledButton = styled.button`
  /* Change here to sizes if neccessary */

  background-color: var(--color-green);
  color: var(--color-primary);
  border-radius: var(--border-radius-sm);
  padding: 4px 12px;
  width: 100px;

  text-transform: uppercase;
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
