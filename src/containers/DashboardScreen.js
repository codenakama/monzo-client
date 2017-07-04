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
        </ContentWrapper>
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    balanceData: accountSelectors.getBalanceData(state),
    accounts: accountSelectors.getAccounts(state)
  };
}

export default connect(mapStateToProps)(DashboardScreen);
