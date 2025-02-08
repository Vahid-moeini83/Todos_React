import styled from "styled-components";

const StyledSummary = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: 16px;
`;

function Summary({ tasks }) {
  if (!tasks.length) return;

  const doneTasks = tasks.filter((task) => task.status);
  const areDone = doneTasks.length === tasks.length;

  return (
    <StyledSummary
      style={
        areDone ? { color: "var(--color-green-done)" } : { color: "inherit" }
      }
    >
      {areDone
        ? "Congratulations! You've done all your tasks✅"
        : ` You have done ${doneTasks.length} of ${tasks.length} tasks `}
    </StyledSummary>
  );
}

export default Summary;
