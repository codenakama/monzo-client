import React, { Component } from "react";
import styled from "styled-components";

const UserDetailsWrapper = styled.div`
  display: flex;
  height: 9em;
  width: 100%;
  background-color: #14233c;
  color: #fff;
  padding: 2em;
`;

class UserDetails extends Component {
  render() {
    return <UserDetailsWrapper>User details</UserDetailsWrapper>;
  }
}

export default UserDetails;
