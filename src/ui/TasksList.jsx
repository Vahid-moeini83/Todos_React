import styled from "styled-components";
import Task from "./Task";
import Empty from "./Empty";

const StyledTasksList = styled.ul`
  display: grid;
  column-gap: 20px;
  gap: 24px;

  font-size: 20px;

  padding: 16px;
  background-color: var(--bg-secondary);
  border-radius: var(--border-radius-sm);
`;

function TasksList({ tasks, onRemoveTask, onDoneTask }) {
  return (
    <StyledTasksList>
      {!tasks.length && <Empty />}
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onRemoveTask={onRemoveTask}
          onDoneTask={onDoneTask}
        />
      ))}
    </StyledTasksList>
  );
}

export default TasksList;
