import React, { Component } from "react";

import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import {LANGUAGES} from '../../utils/constant'
import { changeLanguageApp } from "../../store/actions";
import { dispatch } from "../../redux";
class Header extends Component {
  changeLanguage = (language) =>{
    this.props.changeLanguageAppRedux(language)
  }
  render() {
    let language = this.props.language;
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i class="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b><FormattedMessage id="home-header.specialty"/></b>
                </div>
                <div className="desc"><FormattedMessage id="home-header.search-doctor"/> </div>
              </div>
              <div className="child-content">
                <div>
                  <b><FormattedMessage id="home-header.health-facility"/></b>
                </div>
                <div className="desc"><FormattedMessage id="home-header.choose-hospital"/></div>
              </div>
              <div className="child-content">
                <div>
                  <b><FormattedMessage id="home-header.doctor"/></b>
                </div>
                <div className="desc"><FormattedMessage id="home-header.choose-good-doctor"/></div>
              </div>
              <div className="child-content">
                <div>
                  <b><FormattedMessage id="home-header.medical-package"/></b>
                </div>
                <div className="desc">
                  <FormattedMessage id="home-header.general-check-examination"/>
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"><b><FormattedMessage id="home-header.support"/></b></i>
              </div>
              <div className={language===LANGUAGES.VI? "language-vn active":"language-vn"}><span onClick={()=>this.changeLanguage(LANGUAGES.VI)}>VI</span></div>
              <div className={language===LANGUAGES.EN? "language-en active":"language-en"}><span onClick={()=>this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="banner-top">
            <div className="banner-title1"><FormattedMessage id="home-header.medical-background"/></div>
            <div className="banner-title2"><FormattedMessage id="home-header.health-care"/></div>
            <div className="banner-search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="tìm kiếm" />
            </div>
          </div>
          <div className="banner-bot">
            <div className="banner-options">
              <div className="options-child">
                <div className="option-icon">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="option-title"><FormattedMessage id="home-header.specialist-examination"/></div>
              </div>
              <div className="options-child">
                <div className="option-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="option-title"><FormattedMessage id="home-header.remote-examination"/></div>
              </div>
              <div className="options-child">
                <div className="option-icon">
                  <i className="fas fa-procedures"></i>
                </div>
                <div className="option-title"><FormattedMessage id="home-header.general-examination"/></div>
              </div>
              <div className="options-child">
                <div className="option-icon">
                  <i className="fas fa-flask"></i>
                </div>
                <div className="option-title"><FormattedMessage id="home-header.medical-tests"/></div>
              </div>
              <div className="options-child">
                <div className="option-icon">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="option-title"><FormattedMessage id="home-header.mental-health"/></div>
              </div>
              <div className="options-child">
                <div className="option-icon">
                  <i className="fas fa-briefcase-medical"></i>
                </div>
                <div className="option-title"><FormattedMessage id="home-header.dental-examination"/></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
     //inject
    language: state.app.language,
   
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux:(language)=>dispatch(changeLanguageApp(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
