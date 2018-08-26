import { withRouter } from 'next/router';
import React from 'react';
import { connect } from 'react-redux';
// import Spinner from 'react-spinkit';
import { Flex } from 'rebass';
import { fetchToken } from '../store/auth/actions';

const getParameterByName = (name, url) => {
  if (!url) url = window.location.pathname;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

class AuthPage extends React.Component {
  async componentDidMount() {
    const url = window.location.href;
    const code = getParameterByName('code', url);

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
        {isFetchingToken && <div>Loading...</div>}
      </Flex>
    );
  }
}

AuthPage.propTypes = {};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isFetchingToken: state.auth.isFetchingToken,
  error: state.auth.error
});

export default connect(mapStateToProps)(withRouter(AuthPage));
