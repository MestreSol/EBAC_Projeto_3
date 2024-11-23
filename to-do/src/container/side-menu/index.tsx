import Item from '../../components/SideMenu/Item'
import Title from '../../components/SideMenu/Title'

import { SideMenuTags, SideMenu as StyledSideMenu } from './style'
export default function SideMenu() {
  return (
    <StyledSideMenu>
      <Title>Tags</Title>
      <SideMenuTags>
        <Item tag="/tag/1">Tag 1</Item>
      </SideMenuTags>
      <input type="button" className="close" id="close" value="X" />
    </StyledSideMenu>
  )
}
