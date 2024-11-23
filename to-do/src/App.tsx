import { useEffect } from 'react'
import Header from './container/hearder'
import GlobalStyle, { Container } from './GlobalStyle'
import SideMenu from './container/side-menu'
function App() {
  useEffect(() => {
    const sideMenu = document.getElementById('sideMenu')
    const menu = document.getElementById('menu')
    const closeMenu = document.getElementById('closeMenu')
    const body = document.querySelector('body')

    if (sideMenu && menu && body) {
      sideMenu.addEventListener('click', () => {
        menu.classList.add('active')
        body.classList.add('no-scroll')
      })
    }

    if (closeMenu && menu && body) {
      closeMenu.addEventListener('click', () => {
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      })
    }
  }, [])
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Container>
        <SideMenu></SideMenu>
        <section className="tasks">
          <div className="container">
            <ul className="task-list">
              <li>
                <div className="task">
                  <div className="task-header">
                    <h3>Task name</h3>
                    <button className="delete">X</button>
                  </div>
                  <p>Task description</p>
                  <p>End: 2021-09-30 23:59</p>
                  <p>Tag: 🧓 Tag A</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="add">
          {/* <button onclick="toggleModalAdd()">+</button> */}
        </section>
        <section className="modal modalAdd">
          <div className="container">
            <div className="modal-header">
              <h2>Add task</h2>
              {/* <button onclick="toggleModalAdd()">X</button> */}
            </div>
            <div className="modal-content">
              <form id="add-task">
                <input type="text" placeholder="Task name" id="name" required />
                <input
                  type="text"
                  placeholder="Task description"
                  id="description"
                  required
                />
                <input
                  type="date"
                  placeholder="End-date"
                  id="endDate"
                  required
                />
                <input
                  type="time"
                  placeholder="End-time"
                  id="endTime"
                  required
                />
                <input
                  type="text"
                  id="tags"
                  placeholder="Tag"
                  list="tagList"
                  required
                />
                <datalist id="tagList">
                  <option value="🧓 Tag A"></option>
                </datalist>
                <input type="submit" value="Add task" />
              </form>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default App
