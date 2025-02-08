import styled, { css } from "styled-components";
import { HiTrash } from "react-icons/hi2";
import { HiBadgeCheck } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";

const StyledTask = styled.li`
  display: grid;
  grid-template-columns: 1.5fr 1.2fr 0.4fr;
  padding: 8px;
`;

const Status = styled.span`
  ${(props) =>
    props.status === "done" &&
    css`
      color: var(--color-green-done);
    `}

  ${(props) =>
    props.status === "notDone" &&
    css`
      color: var(--color-danger);
    `}
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

function Task({ task, onRemoveTask, onDoneTask }) {
  const { id, task: taskTopic, status } = task;

  return (
    <StyledTask>
      <span>{taskTopic}</span>
      <span>
        {status ? (
          <Status status="done">Done</Status>
        ) : (
          <Status status="notDone">Not Done</Status>
        )}
      </span>
      <Div>
        <ButtonIcon onClick={() => onRemoveTask(id)} type="delete">
          <HiTrash />
        </ButtonIcon>
        {!status && (
          <ButtonIcon onClick={() => onDoneTask(id)} type="check">
            <HiBadgeCheck />
          </ButtonIcon>
        )}
      </Div>
    </StyledTask>
  );
}

export default Task;
