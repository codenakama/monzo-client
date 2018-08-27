import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Layout from '../components/Layout';
import TransactionsList from '../components/TransactionsList';
import protectedPage from '../hocs/protectedPage';
import * as accountActions from '../store/account/actions';
import * as accountSelectors from '../store/account/reducer';

const MainWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

class DashboardScreen extends Component {
  componentDidMount() {
    this.props.dispatch(accountActions.loadAccount());
  }

  render() {
    const { account } = this.props;
    return (
      <Layout>
        <div>
          <TransactionsList transactions={this.props.transactions} />
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    balanceData: accountSelectors.getBalanceData(state),
    account: accountSelectors.getAccount(state),
    transactions: accountSelectors.getTransactions(state)
  };
}

export default connect(mapStateToProps)(protectedPage(DashboardScreen));
