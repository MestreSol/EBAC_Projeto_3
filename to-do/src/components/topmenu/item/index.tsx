import React from 'react'
import { Item as ItemStyled, Link } from './style'
type Props = {
  children: string
  tag: string
}

export default function Item(props: Props) {
  return (
    <ItemStyled>
      <Link href={props.tag}>{props.children}</Link>
    </ItemStyled>
  )
}
