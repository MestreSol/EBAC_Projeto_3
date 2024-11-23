import { Title as StyledTitle } from './style'
export default function Title(prop: {children: string}) {
  return(
    <StyledTitle>{prop.children}</StyledTitle>
  );
}
