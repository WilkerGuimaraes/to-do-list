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
      word-wrap: break-word;
      overflow-wrap: break-word;
      max-width: 300px;
      color: #eee;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  .buttons-container {
    display: flex;
  }

  .see-task-details-button,
  .remove-task-button {
    border: none;
    background: none;
    padding: 3px;
    margin: 0 5px;
    cursor: pointer;
  }

  .icon {
    font-size: 24px;
    color: chartreuse;
  }
`;
