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

const Title = styled.h3`
  color: lightgrey;
  margin-bottom: 2em;
`;

const Transactions = styled.div`
  padding: 0 2em;
  display: flex;
  flex-direction: column;
`;

const Transaction = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1em;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 4em;
`;

const DetailValue = styled.span`
  color: #828282;
  font-size: 12px;
`;

const DetailDescription = styled.span``;

class TransactionsList extends Component {
  render() {
    const { transactions } = this.props;
    return (
      <Transactions>
        <Title>Transactions</Title>

        {transactions.map((trans, index) => {
          return (
            <Transaction>
              <Detail>
                <DetailDescription>Category</DetailDescription>
                <DetailValue>111</DetailValue>
              </Detail>
              <Detail>
                <DetailDescription>Amount</DetailDescription>
                <DetailValue>£12</DetailValue>
              </Detail>
              <Detail>
                <DetailDescription>Location</DetailDescription>
                <DetailValue>Irish Pub</DetailValue>
              </Detail>
            </Transaction>
          );
        })}
      </Transactions>
    );
  }
}

export default TransactionsList;
