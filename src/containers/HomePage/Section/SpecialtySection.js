import React, { Component } from "react";

import { connect } from "react-redux";
import "./SpecialtySection.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imageSliseOne from "../../../assets/bookingcareImages/slide1.png"
class SpecialtySection extends Component {
  
  render() {
    let settings = {
      dots:false,
      infinite:true,
      speed:500,
      slidesToShow:4,
      slidesToScroll:1,
    }
    return (
  <div className="section-specialty">
    <div className="specialty-container">
      <div className="specialty-header">
        <span>Chuyên khoa phổ biến</span>
        <button>Xem Thêm</button>
      </div>
      <div className="specialty-slide">
      <Slider {...settings}>
        <div className="specialty-images">
         <div className="img"></div>
         <div>cơ xương khớp 1</div>
        </div>
        <div className="specialty-images">
         <div className="img"></div>
         <div>cơ xương khớp 2</div>
        </div>
        <div className="specialty-images">
        <div className="img"></div>
        <div>cơ xương khớp 3</div>
        </div>
        <div className="specialty-images"> 
        <div className="img"></div>
        <div>cơ xương khớp 4</div>
        </div>
        <div className="specialty-images">
        <div className="img"></div>
        <div>cơ xương khớp 5</div>
        </div>
        <div className="specialty-images">
        <div className="img"></div>
        <div>cơ xương khớp 6</div>
        </div>
    </Slider>
      </div>

      </div>
    </div>
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
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecialtySection);
