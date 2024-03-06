import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  padding: 15px 20px;
  background-color: #444;
  border-radius: 5px;

  .task-title {
    cursor: pointer;

    p {
      color: #eee;
    }
  }
`;
