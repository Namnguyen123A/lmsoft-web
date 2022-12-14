/* eslint-disable jsx-a11y/anchor-is-valid */

import { CgMenu } from "react-icons/cg";
import { useState } from "react";

import './style.scss'
import logo from'../../assets/img/logoLm.png'
import { Link } from 'react-router-dom';
export interface INavaboutprops {
}

export default function Navigation (props: INavaboutprops) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const HandleMenu = function () {
    setIsNavExpanded(!isNavExpanded)
  }
  return (
    <header className="header transparent home"  >
      <div className="container">
        <strong className="logo">

          <Link to="/home">
            <img  alt="img" src={logo}></img>
          </Link>
        </strong>
        <ul className="add-menu">
          <li className="nav-item">
            <Link to="">Cases</Link>
          </li>

          <li className="nav-item">
            <Link to="">Services</Link>
          </li>

          <li className="nav-item">
            <Link to="/recruitment">Recruitment</Link>
          </li>

          <li className="nav-item">
            <Link to="">Technologies</Link>
          </li>

          <li className="nav-item">
            <Link to="">Blog</Link>
          </li>

          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>

        </ul>
        <li className="button-btn">
        <Link to="/contact">Contact Us</Link>
        </li>
        {/* <a href="" className="button-btn">Contact Us</a> */}
        
        
        <div className="button-menu" onClick = {HandleMenu}>< CgMenu/></div>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/home">Cases</Link></li>
          <li><Link to="/recruitment">Recruitment</Link></li>
          <li><Link to="/home">Technologies</Link></li>
          <li><Link to="/home">Blog</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
    </div>
    </header>
  );
}
