import React, { Component } from "react";
import styled from "styled-components";

const UserDetailsWrapper = styled.div`
  display: flex;
  height: 9em;
  width: 100%;
  background-color: #14233c;
  color: #fff;
  padding: 2em;
  justify-content: space-around;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #fff;
`;

const DetailValue = styled.span`font-weight: bold;`;
const DetailDescription = styled.span``;

class UserDetails extends Component {
  render() {
    return (
      <UserDetailsWrapper>
        <Detail>
          <DetailValue>100£</DetailValue>
          <DetailDescription>Balance</DetailDescription>
        </Detail>
        <Detail>
          <DetailValue>21.80£</DetailValue>
          <DetailDescription>Spent Today</DetailDescription>
        </Detail>
        <Detail>
          <DetailValue>280£</DetailValue>
          <DetailDescription>Last Top-up</DetailDescription>
        </Detail>
      </UserDetailsWrapper>
    );
  }
}

export default UserDetails;
