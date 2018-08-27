/**
 * Component that alerts if you click outside of it
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';

class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      const { onClickOutside } = this.props;
      onClickOutside();
    }
  }

  render() {
    const { children } = this.props;
    return <div ref={this.setWrapperRef}>{children}</div>;
  }
}

OutsideAlerter.propTypes = {
  children: PropTypes.node.isRequired,
  onClickOutside: PropTypes.func.isRequired
};

export default OutsideAlerter;
