import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({ name, size, className, ...props }) => (
  <i
    {...props}
    className={`${name} ${size ? `fa-${size}x` : ''} ${className}`}
  />
);

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string
};

Icon.defaultProps = {
  name: 'stroopwafel',
  size: 0,
  className: ''
};

export default Icon;
