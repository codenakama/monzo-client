import React, { Component } from "react";
import styled from "styled-components";

const UserIdentity = styled.div`
  background-color: blue;
  display: flex;
`;

const UserName = styled.div`color: #fff;`;

class Identity extends Component {
  render() {
    return <UserIdentity>User identity</UserIdentity>;
  }
}

export default Identity;
