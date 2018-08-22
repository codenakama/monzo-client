import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Identity from './Identity';

// const active = btoa(Math.random());

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
`;

const IdentityWrapper = styled.div`
  margin-bottom: 1em;
`;
const MenuItem = styled.li``;

const StyledLink = styled(Link)`
  padding: 1em;
  display: inline-block;
  color: #000;
  width: 100%;

  &:hover {
    background-color: rgba(224, 224, 224, 0.6);
  }
`;

class SidebarNav extends PureComponent {
  render() {
    const { account } = this.props;
    return (
      <SidebarWrapper>
        <IdentityWrapper>
          {account && <Identity name={this.props.account.description} />}
        </IdentityWrapper>
        <nav>
          <Menu>
            <MenuItem>
              <StyledLink to="/">
Transactions
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/card">
Card details
              </StyledLink>
            </MenuItem>
          </Menu>
        </nav>
      </SidebarWrapper>
    );
  }
}

SidebarNav.propTypes = {
  account: PropTypes.shape({}),
};

SidebarNav.defaultProps = {
  account: { description: 'John Doe' },
};

export default SidebarNav;
