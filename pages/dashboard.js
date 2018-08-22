import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SidebarNav from '../components/SidebarNav';
import TransactionsList from '../components/TransactionsList';
import UserDetails from '../components/UserDetails';
import * as accountSelectors from '../store/account/reducer';
import protectedPage from '../hocs/protectedPage';
import * as accountActions from '../store/account/actions';

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
      <MainWrapper>
        <SidebarNav account={account} />
        <ContentWrapper>
          <UserDetails
            balance={this.props.balanceData.balance || 0}
            spentToday={this.props.balanceData.spend_today || 0}
          />
          <TransactionsList transactions={this.props.transactions} />
        </ContentWrapper>
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    balanceData: accountSelectors.getBalanceData(state),
    account: accountSelectors.getAccount(state),
    transactions: accountSelectors.getTransactions(state),
  };
}

export default connect(mapStateToProps)(protectedPage(DashboardScreen));
