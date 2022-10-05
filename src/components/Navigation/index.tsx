/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { CgMenu } from "react-icons/cg";
import { useState } from "react";

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
  const [header, setHeader] = useState("header3");
  
  const listenScrollEvent = (event:any) => {
    if (window.scrollY < 40) {
      return setHeader("header3");
    } else if (window.scrollY > 40) {
      return setHeader("header");
    } else if (window.scrollY > 600) {
      return setHeader("header2");
    }
  };
  const scrollSlides = (event:any) => {
    if (window.scrollY > 1800) {
      return setHeader("header4");
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollSlides4 = (event:any) => {
    if (window.scrollY > 4000) {
      return setHeader("header4");
    }
  };
  const listenScrollEvents = (event:any) => {
    if (window.scrollY > 2600) {
      return setHeader("header2");
    }
  };
  const scrollSlides3 = (event:any) => {
    if (window.scrollY > 3400) {
      return setHeader("header5");
    }
  };
  const scrollSlides6 = (event:any) => {
    if (window.scrollY > 4200) {
      return setHeader("header6");
    }
  };
  //useEffect
    React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", scrollSlides);

    return () => window.removeEventListener("scroll", scrollSlides);
  }, []);
  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvents);

    return () => window.removeEventListener("scroll", listenScrollEvents);
  }, []);
  React.useEffect(() => {
    window.addEventListener("scroll", scrollSlides3);

    return () => window.removeEventListener("scroll", scrollSlides3);
  }, []);
  React.useEffect(() => {
    window.addEventListener("scroll", scrollSlides6);

    return () => window.removeEventListener("scroll", scrollSlides6);
  }, []);
  //end useEffect
  return (
    <header className="header transparent home" >
      <div className={header}>
      <div className="container">
        <strong className="logo">

          <Link to="/home">
            <img src={logo}></img>
          </Link>
        </strong>
        <ul className="add-menu">
          <li className="nav-item">
            <a href="">Cases</a>
          </li>

          <li className="nav-item">
            <a href="">Services</a>
          </li>

          <li className="nav-item">
            <Link to="/recruitment">Recruitment</Link>
          </li>

          <li className="nav-item">
            <a href="">Technologies</a>
          </li>

          <li className="nav-item">
            <a href="">Blog</a>
          </li>
{/* 
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li> */}

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
          {/* <li><Link to="/about">About Us</Link></li> */}
        </ul>
      </div>
    </div>
    </div>
    </header>
  );
}
