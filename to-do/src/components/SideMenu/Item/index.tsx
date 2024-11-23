import { item as ItemStyled } from './style'
type Props = {
  children: string
  tag: string
}
export default function Item(props: Props) {
  return (
    <ItemStyled>
      <a href={props.tag}>{props.children}</a>
    </ItemStyled>
  )
}
