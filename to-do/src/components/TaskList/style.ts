import styled from 'styled-components'

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  .task {
    background-color: #f8f9fa;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    .task-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        margin: 0;
      }
      button {
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
      }
    }
    p {
      margin: 0;
    }
  }
`
