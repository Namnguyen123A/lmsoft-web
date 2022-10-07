/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { CgMenu } from "react-icons/cg";
import { useState, useEffect } from "react";

import './style.scss'
import logo from'../../assets/img/logoLm.png'
import { Link } from 'react-router-dom';
export interface INavigationProps {
}

export default function Navigation (props: INavigationProps) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const HandleMenu = function () {
    setIsNavExpanded(!isNavExpanded)
  }
  const [navColor, setnavColor] = useState("#transparent");
  const [fontColor, setfontColor] = useState("#ffffff");
  const [logoColor, setlogoColor] = useState("");
  const listenScrollEvent = () => {
    if (window.scrollY >= 0 && window.scrollY < 80) {
      return (
        setnavColor("#transparent"),
        setfontColor("#ffffff")
      )
    }
    if (window.scrollY > 80 && window.scrollY <= 880) {
      return setnavColor("#434eea");
    }
    if (window.scrollY > 880 && window.scrollY <= 1740) {
      return (
        setnavColor("#ffffff"),
        setfontColor("#030309"),
        setlogoColor("#434eea")  
      )
    }
    if (window.scrollY > 1740 && window.scrollY <= 2535) {
      return (
        
        setnavColor("#2bb7c4"),
        setfontColor("#ffffff")
      )
    }
    if (window.scrollY > 2535 && window.scrollY <= 3435) {
      return setnavColor("#414756")
    }
    if (window.scrollY > 3435 && window.scrollY <= 4445) {
      return setnavColor("#1e73be")
    }
    if (window.scrollY > 4445) {
      return (
        
        setnavColor("#ffffff"),
        setfontColor("#030309"),
        setlogoColor("#434eea") 
        )

    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <header className="header transparent home" style={{backgroundColor: navColor}} >
      <div className="container">
        <strong className="logo">

          <Link  to="/home">
            <img style={{backgroundColor: logoColor}} src={logo} alt="img"></img>
          </Link>
        </strong>
        <ul className="add-menu">
          <li className="nav-item">
            <Link style={{color: fontColor}} to="">Cases</Link>
          </li>

          <li className="nav-item">
            <Link style={{color: fontColor}} to="">Services</Link>
          </li>

          <li className="nav-item">
            <Link style={{color: fontColor}} to="/recruitment">Recruitment</Link>
          </li>

          <li className="nav-item">
            <Link style={{color: fontColor}} to="">Technologies</Link>
          </li>

          <li className="nav-item">
            <Link style={{color: fontColor}} to="">Blog</Link>
          </li>

          <li className="nav-item">
            <Link style={{color: fontColor}} to="/about">About Us</Link>
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
