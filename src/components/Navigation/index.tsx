import * as React from 'react';

import './style.scss'
import logo from'../../assets/LM Software-04.jpg'
export interface INavigationProps {
}

export default function Navigation (props: INavigationProps) {
  return (
    <header className="header transparent home" style={{backgroundColor: "transparent ; right: 0px"}}>
      <div className="container">
        <strong className="logo">
          <a href="">
            <img src={logo}></img>
          </a>
        </strong>
        <ul className="add-menu">
          <li className="nav-item">
            <a href="">Cases</a>
          </li>

          <li className="nav-item">
            <a href="">Services</a>
          </li>

          <li className="nav-item">
            <a href="">Industries</a>
          </li>

          <li className="nav-item">
            <a href="">Technologies</a>
          </li>

          <li className="nav-item">
            <a href="">Blog</a>
          </li>

          <li className="nav-item">
            <a href="">About Us</a>
          </li>

        </ul>
        <a href="" className="button-btn">Contact Us</a>
      </div>
    </header>
  );
}
