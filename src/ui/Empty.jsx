import styled from "styled-components";

const StyledEmpty = styled.p`
  text-align: center;
  font-weight: 600;
  padding: 16px;
`;

function Empty() {
  return <StyledEmpty>`` There's no Todo yet. Add new ones now ``</StyledEmpty>;
}

export default Empty;
