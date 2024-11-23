import Title from '../../components/Title'
import Item from '../../components/topmenu/item'
import List from '../../components/topmenu/list'
import { Container } from '../../GlobalStyle'
import { Header as StyledHeader } from './style'
export default function Header() {
  return (
    <StyledHeader>
      <div className="superior-menu">
        <Container>
          <div>
            <Title>To-Do</Title>
          </div>
          <nav>
            <List>
              <Item tag="index.html">Home</Item>
              <Item tag="about.html">About</Item>
              <Item tag="contact.html">Contact</Item>
            </List>
          </nav>
        </Container>
      </div>
    </StyledHeader>
  )
}
