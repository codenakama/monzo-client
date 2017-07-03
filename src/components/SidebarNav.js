import React, { Component } from "react";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: red;
  height: 100%;
`;

class SidebarNav extends Component {
  render() {
    return <SidebarWrapper>Side bar</SidebarWrapper>;
  }
}

export default SidebarNav;
