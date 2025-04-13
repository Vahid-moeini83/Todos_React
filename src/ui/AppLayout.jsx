import { useLocalStorageState } from "../hooks/useLocalStorage";
import styled from "styled-components";
import Heading from "./Heading";
import Input from "./Input";
import Box from "./Box";
import TasksList from "./TasksList";
import Summary from "./Summary";

const StyledAppLayout = styled.div`
  height: 100dvh;
`;

const Main = styled.main`
  height: 100%;
  overflow-y: scroll;
  padding: 40px;
  color: var(--color-primary);
  background-color: var(--bg-primary);

  @media only screen and (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

function AppLayout() {
  const [tasks, setTasks] = useLocalStorageState([], "tasks");

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleRemoveTask(taskId) {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  function handleDoneTask(taskId) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: true } : task
      )
    );
  }

  return (
    <StyledAppLayout>
      <Main>
        <Container>
          <Heading />
          <Box>
            <Input onAddTask={handleAddTask} />
            <TasksList
              tasks={tasks}
              onRemoveTask={handleRemoveTask}
              onDoneTask={handleDoneTask}
            />
            <Summary tasks={tasks} />
          </Box>
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
