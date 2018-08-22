import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginPage from '../pages';

const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });

export default function protectedPage(Component) {
  const WithProtectedPage = (props) => {
    const { isAuthenticated } = props;

    if (!isAuthenticated) {
      return <LoginPage />;
    }

    return <Component {...props} />;
  };
  WithProtectedPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(WithProtectedPage);
}
