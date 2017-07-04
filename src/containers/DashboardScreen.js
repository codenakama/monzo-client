import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import * as accountSelectors from "../store/account/reducer";
import * as accountActions from "../store/account/actions";
import * as authActions from "../store/auth/actions";
import styled from "styled-components";
import SidebarNav from "../components/SidebarNav";
import Identity from "../components/Identity";
import UserDetails from "../components/UserDetails";
import TransactionsList from "../components/TransactionsList";

const MainWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 66.6666%;
`;

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  componentDidMount() {
    this.props.dispatch(accountActions.loadAccount());
    this.props.dispatch(accountActions.loadBalance());
    this.props.dispatch(accountActions.loadTransactions());
  }

  render() {
    return (
      <MainWrapper>
        <SidebarNav
          account={this.props.accounts ? this.props.accounts[0] : {}}
        />
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
    accounts: accountSelectors.getAccounts(state),
    transactions: accountSelectors.getTransactions(state)
  };
}

export default connect(mapStateToProps)(DashboardScreen);
