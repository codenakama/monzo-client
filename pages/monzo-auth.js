import React from 'react';
import { connect } from 'react-redux';
// import Spinner from 'react-spinkit';
import { Flex } from 'rebass';
import { withRouter } from 'next/router';
import { fetchToken } from '../store/auth/actions';

class AuthPage extends React.Component {
  async componentDidMount() {
    const { code } = this.props.router.query;
    this.props.dispatch(fetchToken(code));
  }

  componentDidUpdate(prevProps, prevState) {
    const { isAuthenticated, error } = this.props;
    if (isAuthenticated) {
      this.props.router.push('/dashboard');
    }

    if (!isAuthenticated && error) {
      this.props.router.push('/');
    }
  }

  render() {
    const { isFetchingToken } = this.props;

    return (
      <Flex mt={6} justify="center">
        {isFetchingToken && (
        <div>
Loading...
        </div>
        )}
      </Flex>
    );
  }
}

AuthPage.propTypes = {};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isFetchingToken: state.auth.isFetchingToken,
  error: state.auth.error,
});

export default connect(mapStateToProps)(withRouter(AuthPage));
