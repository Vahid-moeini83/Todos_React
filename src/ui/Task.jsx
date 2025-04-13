import styled, { css } from "styled-components";
import { HiTrash } from "react-icons/hi2";
import { HiBadgeCheck } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import { useState } from "react";

const StyledTask = styled.li`
  @keyframes custom-swing {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }

  display: grid;
  grid-template-columns: 1.6fr 1fr 0.4fr;
  border-radius: var(--border-radius-sm);
  padding: 16px;
  transition: all 0.4s;
  animation: custom-swing 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;

  @media only screen and (max-width: 768px) {
    padding: 12px;
    font-size: 16px;
  }
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
  const [isDone, setIsDone] = useState(false);

  function handleRemoveTaks(id) {
    onRemoveTask(id);
  }

  function handleDoneTask(id) {
    setIsDone(true);
    onDoneTask(id);
  }

  return (
    <StyledTask
      style={
        isDone
          ? { border: "2px solid var(--color-green-done)" }
          : { border: "2px solid var(--color-primary)" }
      }
    >
      <span>{taskTopic}</span>
      <span>
        {status ? (
          <Status status="done">Done</Status>
        ) : (
          <Status status="notDone">Not Done</Status>
        )}
      </span>
      <Div>
        <ButtonIcon onClick={() => handleRemoveTaks(id)} type="delete">
          <HiTrash />
        </ButtonIcon>
        {!status && (
          <ButtonIcon onClick={() => handleDoneTask(id)} type="check">
            <HiBadgeCheck />
          </ButtonIcon>
        )}
      </Div>
    </StyledTask>
  );
}

export default Task;
