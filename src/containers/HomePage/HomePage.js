import React, { Component } from "react";

import { connect } from "react-redux";

import HomeHeader from "./HomeHeader";
import  SpecialtySection  from "./Section/SpecialtySection";
class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <SpecialtySection/>
        <div style={{height:"300px"}}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
