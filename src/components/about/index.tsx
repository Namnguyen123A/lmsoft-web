import * as React from 'react';
import "./main.scss";
import background from '../../assets/team-photo.jpg'

import image from '../../assets/improve-img.svg'

export interface IAboutProps {
}

export default function about (props: IAboutProps) {
  return (
    <div>
      <div className="about-intro">
        <div className="photo-intro" style={{backgroundImage: `url(${background})`}}>
            <div className="container-about">
                <div className="info">
                    <h1 className="">Remote development you can trust</h1>
                    <p>Mobile and Web applications built by real in-house teams</p>
                </div>
            </div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <div className="image animate animated">
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
    </div>
    
  );
}
