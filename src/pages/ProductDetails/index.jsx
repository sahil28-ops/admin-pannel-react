import React from "react";
import { FaCartFlatbed, FaRegStarHalfStroke } from "react-icons/fa6";
import { GiResize } from "react-icons/gi";
import {
  IoColorPaletteSharp,
  IoPricetagsSharp,
  IoSettings,
} from "react-icons/io5";
import { MdBrandingWatermark, MdCategory, MdPublish } from "react-icons/md";
import { SiZerodha } from "react-icons/si";
import Slider from "react-slick";
const ProductDetails = () => {
  const productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="right-content w-100">
      <div className="card productDetailsSection">
        <div className="row">
          <div className="col-md-5 ">
            <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
              <h6 className="mb-4">Product Gallery</h6>

              <Slider {...productSliderOptions} className="sliderBig mb-2">
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                    className="w-100"
                  />
                </div>
              </Slider>
              <Slider {...productSliderSmlOptions} className="sliderSml">
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                    className="w-100"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                    className="w-100"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                    className="w-100"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                    className="w-100"
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-md-7">
            <div className=" pt-3 pb-3 pl-4 pr-4">
              <h6 className="mb-4">Product Details</h6>
              <h3>
                Formal Suits for men wedding slim fit 3 pices dress business
                party jacket
              </h3>

              <div className="productInfo mt-3">
                <div className="row mb-2">
                  <div className="col-sm-4 d-flex align-items-center">
                    <span className="icon">
                      <MdBrandingWatermark />
                    </span>
                    <span className="name">Brand</span>
                  </div>
                  <div className="col-sm-8">
                    <span>:</span> <span className="value">Ecstasy</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 d-flex align-items-center">
                    <span className="icon">
                      <MdCategory />
                    </span>
                    <span className="name">Category</span>
                  </div>
                  <div className="col-sm-8">
                    <span>:</span> <span className="value">Men's</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 d-flex align-items-center">
                    <span className="icon">
                      <IoSettings />
                    </span>
                    <span className="name">Tags</span>
                  </div>
                  <div className="col-sm-8 d-flex">
                    <span>:</span>
                    <span className="value">
                      <ul className="list list-inline tags sml">
                        <li className="list-inline-item">
                          <span>SUITE</span>
                        </li>
                        <li className="list-inline-item">
                          <span>PARTY</span>
                        </li>
                        <li className="list-inline-item">
                          <span>DRESS</span>
                        </li>
                        <li className="list-inline-item">
                          <span>SMART</span>
                        </li>
                        <li className="list-inline-item">
                          <span>MAN</span>
                        </li>
                        <li className="list-inline-item">
                          <span>STYLE</span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 d-flex align-items-center">
                    <span className="icon">
                      <IoColorPaletteSharp />
                    </span>
                    <span className="name">Color</span>
                  </div>
                  <div className="col-sm-8 d-flex">
                    <span>:</span>
                    <span className="value">
                      <ul className="list list-inline tags sml">
                        <li className="list-inline-item">
                          <span>Blue</span>
                        </li>
                        <li className="list-inline-item">
                          <span>Green</span>
                        </li>
                        <li className="list-inline-item">
                          <span>Red</span>
                        </li>
                        <li className="list-inline-item">
                          <span>Brown</span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-4 d-flex align-items-center">
                    <span className="icon">
                      <GiResize />
                    </span>
                    <span className="name">Size</span>
                  </div>
                  <div className="col-sm-8">
                    <span>:</span>
                    <span className="value">Men's</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 d-flex align-items-center">
                    <span className="icon">
                      <IoPricetagsSharp />
                    </span>
                    <span className="name">Price</span>
                  </div>
                  <div className="col-sm-8">
                    <span>:</span>
                    <span className="value">$37.00</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 d-flex align-items-center">
                    <span className="icon">
                      <FaCartFlatbed />
                    </span>
                    <span className="name">Stock</span>
                  </div>
                  <div className="col-sm-8">
                    <span>:</span> <span className="value">(68)Pices</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 d-flex align-items-center">
                    <span className="icon">
                      <FaRegStarHalfStroke />
                    </span>
                    <span className="name">Review</span>
                  </div>
                  <div className="col-sm-8">
                    <span>:</span>
                    <span className="value">(03)Review</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 d-flex align-items-center">
                    <span className="icon">
                      <MdPublish />
                    </span>
                    <span className="name">Publish</span>
                  </div>
                  <div className="col-sm-8">
                    <span>:</span>
                    <span className="value">02 Feb 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
