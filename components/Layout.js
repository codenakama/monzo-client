import React from 'react';
import { connect } from 'react-redux';
import { Box, ButtonTransparent } from 'rebass';
import styled from 'styled-components';
import OutsideAlerter from '../components/OutsideAlerter';
import UserDetails from '../components/UserDetails';
import * as accountActions from '../store/account/actions';
import * as accountSelectors from '../store/account/reducer';
import { logout } from '../store/auth/actions';
import Icon from './Icon';
import SidebarNav from './SidebarNav';

const NavButton = styled(ButtonTransparent)`
  position: absolute;
  top: 32px;
  color: white;
`;

const Container = styled.div`
  position: relative;
`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideNavOpen: false
    };
  }

  componentDidMount() {
    this.props.dispatch(accountActions.loadAccount());
  }

  openSidenav = () => this.setState({ isSideNavOpen: true });
  closeSidenav = () => this.setState({ isSideNavOpen: false });

  handleLogoutClick = () => this.props.dispatch(logout());

  render() {
    const { children, account, balanceData } = this.props;
    const { isSideNavOpen } = this.state;

    return (
      <div>
        <NavButton onClick={this.openSidenav}>
          <Icon name="fas fa-bars" size={2} />
        </NavButton>
        <OutsideAlerter onClickOutside={this.closeSidenav}>
          <SidebarNav
            isOpen={isSideNavOpen}
            account={account}
            onLogoutClick={this.handleLogoutClick}
          />
        </OutsideAlerter>
        <UserDetails
          balance={balanceData.balance || 0}
          spentToday={balanceData.spend_today || 0}
        />
        <Box mx={80} p={3}>
          {children}
        </Box>
      </div>
    );
  }
}

Layout.propTypes = {};

function mapStateToProps(state) {
  return {
    balanceData: accountSelectors.getBalanceData(state),
    account: accountSelectors.getAccount(state),
    transactions: accountSelectors.getTransactions(state)
  };
}

export default connect(mapStateToProps)(Layout);
