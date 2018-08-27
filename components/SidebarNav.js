import Link from 'next/link';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { Avatar, Box, ButtonTransparent, Drawer, Flex, Text } from 'rebass';
import styled from 'styled-components';

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

const StyledDrawer = styled(Drawer)`
  width: 248px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

class SidebarNav extends PureComponent {
  render() {
    const { account, isOpen, onLogoutClick } = this.props;
    return (
      <div>
        <StyledDrawer open={isOpen} side="left" p={3} bg="#14233c">
          <Flex
            style={{ height: '100%' }}
            flexDirection="column"
            justify="space-between"
          >
            <Box>
              <Flex align="center">
                <Box pr={3}>
                  <Avatar
                    size={64}
                    srcSet="https://images.unsplash.com/photo-1504455583697-3a9b04be6397?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=84156decc9820febd8d1910d77658cf6&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
                  />
                </Box>
                <Box>
                  <Text>{account.description}</Text>
                </Box>
              </Flex>
            </Box>
            <Box>
              <ButtonTransparent onClick={onLogoutClick}>
                <Text>Logout</Text>
              </ButtonTransparent>
            </Box>
          </Flex>
        </StyledDrawer>
      </div>
    );
  }
}

SidebarNav.propTypes = {
  account: PropTypes.shape({}),
  onLogoutClick: PropTypes.func
};

SidebarNav.defaultProps = {
  account: { description: 'John Doe' },
  onLogoutClick: null
};

export default SidebarNav;
