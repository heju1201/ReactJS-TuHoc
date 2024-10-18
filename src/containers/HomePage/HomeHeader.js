import React, { Component } from "react";

import { connect } from "react-redux";
import "./HomeHeader.scss";
class Header extends Component {
  render() {
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
                  <b>Chuyên Khoa</b>
                </div>
                <div className="desc">Tìm bác sỹ chuyên khoa</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Cơ sở y tế</b>
                </div>
                <div className="desc">Chọn bệnh viện phòng khám</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Bác sĩ</b>
                </div>
                <div className="desc">chọn bác sĩ giỏi</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Gói khám</b>
                </div>
                <div className="desc">khám sức khỏe tổng quát</div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle">Hỗ trợ</i>
              </div>
              <div className="flag">VN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="banner-top">
            <div className="banner-title1">Nền tảng y tế</div>
            <div className="banner-title2">Chăm sóc sức khỏe toàn diện</div>
            <div className="banner-search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
            </div>
          </div>
          <div className="banner-bot">
            <div className="banner-options">
              <div className="options-child">
                <div className="option-icon">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="option-title">Khám chuyên khoa</div>
              </div>
              <div className="options-child">
                <div className="option-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="option-title">Khám từ xa</div>
              </div>
              <div className="options-child">
                <div className="option-icon">
                  <i className="fas fa-procedures"></i>
                </div>
                <div className="option-title">Khám tổng quát</div>
              </div>
              <div className="options-child">
                <div className="option-icon">
                  <i className="fas fa-microscope"></i>
                </div>
                <div className="option-title">Xét nhiệm y học</div>
              </div>
              <div className="options-child">
                <div className="option-icon">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="option-title">Sức khỏe tinh thần</div>
              </div>
              <div className="options-child">
                <div className="option-icon">
                  <i className="fas fa-tooth"></i>
                </div>
                <div className="option-title">Khám nha khoa</div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
