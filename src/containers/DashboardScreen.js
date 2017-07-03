import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import * as accountSelectors from "../store/account/reducer";
import * as accountActions from "../store/account/actions";
import styled from "styled-components";

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  componentDidMount() {}

  render() {
    return <div>Dashboard Screen</div>;
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(DashboardScreen);
