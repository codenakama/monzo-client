import {
  Heading, Flex, Button, Box, Link,
} from 'rebass';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import NextLink from 'next/link';
import authService from '../services/authService';
import { loginCompleted } from '../store/auth/actions';

const authUrl = authService.getOAuthUrl();

class Index extends PureComponent {
  async componentDidMount() {
    const token = await authService.getToken();

    if (token) {
      const { user_id } = await authService.fetchWhoAmI(token);

      this.props.dispatch(loginCompleted({ userId: user_id, token }));
    }
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <Flex justify="center" mt={6} mx={6} wrap>
        <Box w={1} mb={4}>
          <Heading align="center">
Monzo Web Account Browser
          </Heading>
        </Box>
        <Box w={1}>
          <Flex justify="center">
            {isAuthenticated && (
              <NextLink href="/dashboard">
                <a>
                  <Button>
Go to dashboard
                  </Button>
                </a>
              </NextLink>
            )}
            {!isAuthenticated && (
              <Link href={authUrl}>
                <Button>
Login
                </Button>
              </Link>
            )}
          </Flex>
        </Box>
      </Flex>
    );
  }
}

Index.propTypes = {};

const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps)(withRouter(Index));
