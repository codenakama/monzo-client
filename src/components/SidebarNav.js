import React, { Component } from "react";
import styled from "styled-components";
import Identity from "./Identity";

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
const MenuItem = styled.li`padding: 1em 1em 0 1em;`;

class SidebarNav extends Component {
  render() {
    return (
      <SidebarWrapper>
        <IdentityWrapper>
          <Identity />
        </IdentityWrapper>
        <nav>
          <Menu>
            <MenuItem>Transactions</MenuItem>
            <MenuItem>Card details</MenuItem>
          </Menu>
        </nav>
      </SidebarWrapper>
    );
  }
}

export default SidebarNav;
