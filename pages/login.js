import React from 'react';
import {
  Box, Button, Flex, Link, Subhead,
} from 'rebass';
import authService from '../services/authService';

const authUrl = authService.getOAuthUrl();

const LoginPage = props => (
  <Flex justify="center" mt={6} wrap>
    <Box w={1} mx={6} mb={4}>
      <Subhead align="center" fontSize={3}>
        Access your transactions and get and overview of your account through the browser
      </Subhead>
    </Box>
    <Link href={authUrl}>
      <Button>
Login with your Monzo account
      </Button>
    </Link>
  </Flex>
);

LoginPage.propTypes = {};

export default LoginPage;
