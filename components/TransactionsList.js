import React, { PureComponent } from 'react';
import { Divider, Flex, Text } from 'rebass';
import styled from 'styled-components';

const Title = styled.h3`
  color: lightgrey;
  margin-bottom: 2em;
`;

const Transactions = styled.div`
  padding: 0 2em;
  display: flex;
  flex-direction: column;
`;

const Transaction = styled(Flex)`
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

class TransactionsList extends PureComponent {
  render() {
    const { transactions } = this.props;
    return (
      <Transactions>
        <Title>Transactions</Title>

        {transactions.map(trans => (
          <div>
            <Flex key={trans.id} justify="space-between" mb={3}>
              <Detail>
                <DetailDescription>Category</DetailDescription>
                <DetailValue>{trans.category}</DetailValue>
              </Detail>
              <Detail>
                <DetailDescription>Location</DetailDescription>
                <DetailValue>{trans.description}</DetailValue>
              </Detail>
              <Detail>
                <DetailDescription>Amount</DetailDescription>
                <Text bold>£{(trans.amount / 100).toFixed(2)}</Text>
              </Detail>
            </Flex>
            <Divider w={1} borderColor="pink" />
          </div>
        ))}
      </Transactions>
    );
  }
}

export default TransactionsList;
