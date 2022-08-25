import * as React from 'react';
import "./main.scss";
import background from '../../assets/team-photo.jpg';
import talk from '../../assets/1-4-1024x757.png';
import workone from '../../assets/2-3.png';
import worktwo from '../../assets/3-4.png';
import workthree from '../../assets/4-4.png';

import image from '../../assets/improve-img.svg';

export interface IAboutProps {
}

export default function about (props: IAboutProps) {
  return (
    <div>
      <div className="about-intro">
        <div className="photo-intro" style={{backgroundImage: `url(${background})`}}>
            <div className="container-about">
                <div className="info-about">
                    <h1 className="">Remote development you can trust</h1>
                    <p>Mobile and Web applications built by real in-house teams</p>
                </div>
            </div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <div className="images animate animated">
            <img src={image} className="boy girl"></img>
          </div>
          <strong className="h2 animate animated">We strive to improve</strong>
          <ul className="features-list animate animated">
            <li className="">
              <h3>The Word</h3>
              <p>Our apps make life easier</p>
            </li>
            <li className="">
              <h3>The Word</h3>
              <p>Our apps make life easier</p>
            </li>
            <li className="">
              <h3>The Word</h3>
              <p>Our apps make life easier</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="our-way">
        <div className="container">
          <h2 className="animate animated">Our way</h2>
          <div className="photos-box-wrap">
            {/* top */}
            <div className="photo-box">
              <div className="top-block">
                <div className="decription animate animated">
                  <strong className="h2 heading">Work when it's efficient</strong>
                  <p>Agile management gives us flexible schedules and allows us to work with maximum productivity. We always stay on top of deadlines, and we do it with joy.</p>
                </div>
                <div className="images-holder animate animated">
                  <div className="images talk" style={{backgroundImage: `url(${talk})`}}></div>
                </div>
                {/* <div className="images-holder-botton animate animated">
                  <div className="images-one talk" style={{backgroundImage: `url(${workone})`}}></div>
                  <div className="images-two" style={{backgroundImage: `url(${worktwo})`}}></div>
                  <div className="images-three" style={{backgroundImage: `url(${workthree})`}}></div>
                </div> */}
              </div>

                <div className="images-holder-button animate animated">
                  <div className="images-one talk" style={{backgroundImage: `url(${workone})`}}></div>
                  <div className="images-two" style={{backgroundImage: `url(${worktwo})`}}></div>
                  <div className="images-three" style={{backgroundImage: `url(${workthree})`}}></div>
                </div>
              
            </div>
            {/* center */}
            <div className="photo-box inverse"></div>
            {/* bottom */}
            <div className="photo-box"></div>
          </div>
        </div>
      </div>

    </div>
    
    
  );
}
