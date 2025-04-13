import styled from "styled-components";

const StyledBox = styled.div`
  width: 640px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

function Box({ children }) {
  return <StyledBox>{children}</StyledBox>;
}

export default Box;
