import { List as ListStyled } from './style'
type Props = {
  children: React.ReactNode
}
export default function List(props: Props) {
  return <ListStyled>{props.children}</ListStyled>
}
