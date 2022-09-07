import * as React from 'react';
import ReactDOM from 'react-dom'
import { useState } from 'react';
import "./style.scss";
import 'react-modal-video/scss/modal-video.scss';
import ModalVideo from "react-modal-video";
import mainIntro from "../../assets/img-5.jpg"
import rateOne from "../../assets/rate-01.png"
import rateTwo from "../../assets/rate-02.png"
import rateThree from "../../assets/rate-03.png"
import star from "../../assets/star.png"
export interface IBannerprops {
}

export default function Banner(props: IBannerprops) {

  return (
    <div className="main-intro has-video" 
      style={{backgroundImage: `url("https://riseapps.co/wp-content/uploads/2022/09/bg_2.svg")`}}
      data-background="#434eea" data-theme="header-dark"
    >
      <div className="container">
        <div className="short-infor">
          <strong className="h1">Create. Grow. Beat. Repeat.</strong>
          <h1>Product development teams for startups and SMBs</h1>
          <a href="/" className="button orange">Let's talk</a>
        </div>
        <div className="rate-infor">
          <ul>
            <li className="list-rate">
              <div className="firm">
                <a className="" href="/">
                  <img src={rateOne} loading="lazy" width={31} height={22}></img>
                </a>
              </div>
              <div className="rating">
                <strong className="rating-title">Top Rated Status</strong>
                <div className="stars">
                  <img loading='lazy' src={star} className="img-banner"></img>
                  <img loading='lazy' src={star} className="img-banner"></img>
                  <img loading='lazy' src={star} className="img-banner"></img>
                  <img loading='lazy' src={star} className="img-banner"></img>
                  <img loading='lazy' src={star} className="img-banner"></img>
                </div>
              </div>
            </li>
            <li className="list-rate">
              <div className="firm">
                <a className="" href="/">
                  <img src={rateTwo} loading="lazy" width={54} height={22}></img>
                </a>
              </div>
              <div className="rating">
                <strong className="rating-title">Our Rate 5 of 5</strong>
                <div className="stars">
                  <img loading='lazy' src={star} className="img-banner"></img>
                  <img loading='lazy' src={star} className="img-banner"></img>
                  <img loading='lazy' src={star} className="img-banner"></img>
                  <img loading='lazy' src={star} className="img-banner"></img>
                  <img loading='lazy' src={star} className="img-banner"></img>
                </div>
              </div>
            </li>
            <li className="list-rate">
              <div className="firm">
                <a className="" href="/">
                  <img src={rateThree} loading="lazy" width={80} height={12}></img>
                </a>
              </div>
              <div className="rating">
                <strong className="rating-title">Our Rate 5 of 5</strong>
                <div className="stars">
                  <img loading='lazy' src={star} className="img-banner"></img>
                  <img loading='lazy' src={star} className="img-banner"></img>
                  <img loading='lazy' src={star} className="img-banner"></img>
                  <img loading='lazy' src={star} className="img-banner"></img>
                  <img loading='lazy' src={star} className="img-banner"></img>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
