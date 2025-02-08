import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

const StyledInputBox = styled.form`
  display: flex;
  gap: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 20px;
  border-radius: var(--border-radius-sm);

  background-color: var(--bg-secondary);
  color: var(--color-primary);

  &::placeholder {
    color: var(--color-primary);
    opacity: 0.3;
  }
`;

function Input({ onAddTask }) {
  const [taskInput, setTaskInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!taskInput) return;

    const newTask = {
      id: (Math.random() * 1000).toFixed(0),
      task: taskInput,
      status: false,
    };

    onAddTask(newTask);
    setTaskInput("");
  }

  return (
    <StyledInputBox onSubmit={handleSubmit}>
      <StyledInput
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        type="text"
        placeholder="New Todo..."
      />
      <Button>Add</Button>
    </StyledInputBox>
  );
}

export default Input;
