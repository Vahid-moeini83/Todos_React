import styled from "styled-components";

const StyledEmpty = styled.p`
  text-align: center;
  font-weight: 600;
  padding: 16px;
  border: 2px solid var(--color-primary);
`;

function Empty() {
  return <StyledEmpty>No Todos Yet :(</StyledEmpty>;
}

export default Empty;
