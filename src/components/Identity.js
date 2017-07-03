import React, { Component } from "react";
import styled from "styled-components";

const UserIdentity = styled.div`
  background-color: #00a4db;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 9em;
  padding: 2em;
`;

const Email = styled.span`color: #fff;`;

const Name = styled.span`
  color: #fff;
  font-size: 24px;
`;

const UserName = styled.div`color: #fff;`;

class Identity extends Component {
  render() {
    return (
      <UserIdentity>
        <Name>Ricardo Jorge Abreu</Name>
        <Email>rj.abreu@outlook.com</Email>
      </UserIdentity>
    );
  }
}

export default Identity;
