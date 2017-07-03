import React, { Component } from "react";
import styled from "styled-components";

const UserDetailsWrapper = styled.div`
  background-color: blue;
  display: flex;
  flex-grow: 6;
`;

class UserDetails extends Component {
  render() {
    return <UserDetailsWrapper>User details</UserDetailsWrapper>;
  }
}

export default UserDetails;
