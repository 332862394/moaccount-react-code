import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  background: #ffffff;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      > a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #aaa;
        font-size: 14px;
        .icon {
          width: 24px;
          height: 24px;
          fill: #aaa;
        }
        &.active {
          color: #2b71cc;
          .icon {
            fill: #2b71cc;
          }
        }
      }
    }
  }
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags">
            <Icon name="tag" />
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money">
            <Icon name="money" />
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics">
            <Icon name="chart" />
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;
