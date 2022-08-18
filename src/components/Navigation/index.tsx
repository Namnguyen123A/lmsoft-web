import * as React from 'react';
import { CgMenu } from "react-icons/cg";
import { useState } from "react";

import './style.scss'
import logo from'../../assets/LM Software-04.jpg'
export interface INavigationProps {
}

export default function Navigation (props: INavigationProps) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const HandleMenu = function () {
    setIsNavExpanded(!isNavExpanded)
  }
  console.log(isNavExpanded)
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
        
        
        <div className="button-menu" onClick = {HandleMenu}>< CgMenu/></div>
        <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/home">Cases</a></li>
          <li><a href="/home">Services</a></li>
          <li><a href="/home">Technologies</a></li>
          <li><a href="/home">Blog</a></li>
          <li><a href="/home">About Us</a></li>
        </ul>
      </div>
    </div>
    </header>
  );
}
