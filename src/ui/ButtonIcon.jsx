import styled, { css } from "styled-components";

const type = {
  delete: css`
    background-color: var(--color-danger);
  `,

  check: css`
    background-color: var(--color-green);
  `,
};

const ButtonIcon = styled.button`
  width: 24px;
  height: 24px;
  border-radius: var(--border-radius-tiny);

  ${(props) => type[props.type]}
`;

export default ButtonIcon;
