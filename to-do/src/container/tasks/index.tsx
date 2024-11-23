import TaskList from '../../components/TaskList'
import { Container } from '../../GlobalStyle'
import { Tasks as TaskStyled } from './style'
export default function Tasks() {
  return (
    <TaskStyled>
      <Container>
        <TaskList />
      </Container>
    </TaskStyled>
  )
}
