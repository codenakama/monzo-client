import React, { Component } from "react";
import styled from "styled-components";
import Identity from "./Identity";
import { Link } from "react-router";
const active = btoa(Math.random());

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3333%;
  height: 100%;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
`;

const IdentityWrapper = styled.div`margin-bottom: 1em;`;
const MenuItem = styled.li`
  // padding: 1em;
  // &.${active} {
  //   color: red;
  // }
`;

const StyledLink = styled(Link)`
 padding: 1em;
 display:inline-block;
 color: #000;
    width: 100%;
  &.${active} {
    background-color: #E0E0E0;
  }

  &:hover{
    background-color: rgba(224, 224, 224,0.6)
  }
`;

class SidebarNav extends Component {
  render() {
    return (
      <SidebarWrapper>
        <IdentityWrapper>
          <Identity name={this.props.account.description} />
        </IdentityWrapper>
        <nav>
          <Menu>
            <MenuItem activeClassName={active}>
              <StyledLink to="/" activeClassName={active}>
                Transactions
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/card" activeClassName={active}>
                Card details
              </StyledLink>
            </MenuItem>
          </Menu>
        </nav>
      </SidebarWrapper>
    );
  }
}

export default SidebarNav;
