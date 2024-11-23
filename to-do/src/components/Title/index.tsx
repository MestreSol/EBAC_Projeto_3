import { Title as StyledTitle } from './style'
type Prop = {
  children: string
}
export default function Title(prop: Prop) {
  return <StyledTitle>{prop.children}</StyledTitle>
}
