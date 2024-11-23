import Title from '../../components/Title'

import { SideMenu as StyledSideMenu } from './style'
export default function SideMenu() {
  return (
    <StyledSideMenu>
      <Title>Tags</Title>
      <ul id="side-menu-tags">
        <li>
          <a href="#">🧓 Tag A</a>
        </li>
      </ul>
      <input type="button" className="close" id="close" value="X" />
    </StyledSideMenu>
  )
}
