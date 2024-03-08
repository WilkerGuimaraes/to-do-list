import styled from "styled-components";

export const TaskDetailsContainer = styled.div`
  .back-button-container {
    width: 40%;
    margin-top: 10px;
  }

  .task-details-content {
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    margin: 15px 0;
    background-color: #444;
    border-radius: 5px;

    h2 {
      color: chartreuse;
      margin-bottom: 5px;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      color: #eee;
    }
  }
`;
