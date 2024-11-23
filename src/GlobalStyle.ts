import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Courier New', Courier, monospace;
    background-color: #F2F7F2;
  }
  .side-menu {
    width: 20%;
  height: 100vh;
  background-color: #f1f1f1;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
}

.side-menu h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.side-menu ul {
  list-style: none;
  padding: 0;
}

.side-menu ul li {
  margin-bottom: 10px;
}

.side-menu ul li a {
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
}

.side-menu ul li a:hover {
  color: #555;
}

.side-menu .active {
  background-color: #333;
  color: #f1f1f1;
}

.side-menu .active a {
  color: #f1f1f1;
}

.side-menu .active a:hover {
  color: #f1f1f1;
}

/* Close Button */
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f1f1f1;
  border: none;
  cursor: pointer;
}

.close:hover {
  color: #f1f1f1;
  background-color: #333;
}

/* Tasks */
.tasks {
  width: 80%;
  margin-left: 20%;
  padding: 20px;
}

.task {
  background-color: #f1f1f1;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.task h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.task p {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

/* Actions */
.actions {
  display: flex;
  justify-content: space-between;
}

.actions button {
  padding: 10px;
  border: none;
  cursor: pointer;
}

.actions button:hover {
  background-color: #333;
  color: #f1f1f1;
}

/* Add Button */
.add {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.add button {
  padding: 20px;
  border: none;
  background-color: #333;
  color: #f1f1f1;
  font-size: 2rem;
  cursor: pointer;
}

.add button:hover {
  background-color: #555;
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal .container {
  width: 50%;
  margin: 0 auto;
  background-color: #f1f1f1;
  padding: 20px;
  margin-top: 20vh;
}

.modal .modal-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.modal .modal-header h2 {
  font-size: 1.5rem;
}

.modal .modal-header button {
  padding: 10px;
  border: none;
  cursor: pointer;
}

.modal .modal-header button:hover {
  background-color: #333;
  color: #f1f1f1;
}

.modal .modal-content form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.modal .modal-content form input[type="button"] {
  background-color: #333;
  color: #f1f1f1;
  border: none;
  cursor: pointer;
}

.modal .modal-content form input[type="button"]:hover {
  background-color: #555;
}

.modal .modal-content form select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

/* Done Tasks */
.done {
  background-color: #d7ffcf;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  text-decoration: line-through;
}

.done button {
  background-color: #d7ffcf;
}

`
const Container = styled.div`
  max-width: 1170px;
  margin: auto;
  overflow: hidden;
  padding: 0 20px;
`

export default GlobalStyle

export { Container }
