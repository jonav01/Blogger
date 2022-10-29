import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Imagecarousel.css'

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className="carousel">
        
        <Slider {...settings}>
          <div>
            <img 
            className="imageCarousel__images"
            src="https://tse1.mm.bing.net/th?id=OIP.Rrqz5_pBIblPFee4tFHF8gHaE7&pid=Api&P=0" alt="" />
          </div>
          <div>
            <img 
            className="imageCarousel__images"
            src="https://tse1.mm.bing.net/th?id=OIP.Rrqz5_pBIblPFee4tFHF8gHaE7&pid=Api&P=0" alt="" />
          </div>
          <div>
            <img 
            className="imageCarousel__images"
            src="https://tse1.mm.bing.net/th?id=OIP.Rrqz5_pBIblPFee4tFHF8gHaE7&pid=Api&P=0" alt="" />
          </div>
          <div>
            <img 
            className="imageCarousel__images"
            src="https://tse1.mm.bing.net/th?id=OIP.Rrqz5_pBIblPFee4tFHF8gHaE7&pid=Api&P=0" alt="" />
          </div>
          <div>
            <img 
            className="imageCarousel__images"
            src="https://tse1.mm.bing.net/th?id=OIP.Rrqz5_pBIblPFee4tFHF8gHaE7&pid=Api&P=0" alt="" />
          </div>
          <div>
            <img 
            className="imageCarousel__images"
            src="https://tse1.mm.bing.net/th?id=OIP.Rrqz5_pBIblPFee4tFHF8gHaE7&pid=Api&P=0" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}


