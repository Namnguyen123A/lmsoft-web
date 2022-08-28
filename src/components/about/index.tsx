import * as React from 'react';
import "react-slideshow-image/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.scss";
import { dataSlide } from "./data"
import Slider from "react-slick";
import background from '../../assets/team-photo.jpg';
import talk from '../../assets/1-4-1024x757.png';
import workone from '../../assets/2-3.png';
import worktwo from '../../assets/3-4.png';
import workthree from '../../assets/4-4.png';
import workfour from '../../assets/5-3-1024x757.png';
import workfive from '../../assets/6-3.png';
import worksix from '../../assets/7-4-1024x757.png';
import workseven from '../../assets/8-3.png';
import workeight from '../../assets/10-copy.png';
import worknine from '../../assets/10-copy-2.png';
import workten from '../../assets/10.png';
import workelevent from '../../assets/9-5-1024x757.png';
import worktwelve from '../../assets/12.png';
import peopleone from '../../assets/team-01.jpg';
import peopletwo from '../../assets/team-02.jpg';
import peoplethree from '../../assets/team-03.jpg';
import peoplefour from '../../assets/team-08.jpg';
import logoReview from '../../assets/review-logo.png'
import image from '../../assets/improve-img.svg';


export interface IAboutProps {
}

export default function about(props: IAboutProps) {
  const renderSlides = () =>
    dataSlide.map((item) => (
      <div className="testimonials-slider">
        <div className="avatar-holder">
          <div className="avatar" style={{ backgroundImage: `url(${item.src})` }}></div>
        </div>
        <blockquote>
          <p>{item.title}</p>
          <a href='/' className="full-review">
            <img loading='lazy' src={logoReview}></img>
            Full Review
          </a>
        </blockquote>
        <div className="author-details">
          <cite>{item.name}</cite>
          <span className="post">Ruggengraat co-founder1</span>
        </div>
      </div>
    ));

  return (
    <div>
      {/* banner */}
      <div className="about-intro">
        <div className="photo-intro" style={{ backgroundImage: `url(${background})` }}>
          <div className="container-about">
            <div className="info-about">
              <h1 className="">Remote development you can trust</h1>
              <p>Mobile and Web applications built by real in-house teams</p>
            </div>
          </div>
        </div>
      </div>
      {/* features */}
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
      {/* our way */}
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
                  <div className="images talk" style={{ backgroundImage: `url(${talk})` }}></div>
                </div>
              </div>
              <div className="images-holder-button animate animated">
                <div className="images-one talk" style={{ backgroundImage: `url(${workone})` }}></div>
                <div className="images-two" style={{ backgroundImage: `url(${worktwo})` }}></div>
                <div className="images-three" style={{ backgroundImage: `url(${workthree})` }}></div>
              </div>
            </div>
            {/* center */}
            <div className="photo-box inverse">
              <div className="top-block">
                <div className="decription-2 animate animated">
                  <strong className="h2 heading">Rest when it's needed</strong>
                  <p>We persistently work on our office to make it feel like home. Ping-pong, charades, football, parties, or just regular lunches together help us clear the mind after a hard task and get energized for future challenges.</p>
                </div>
                <div className="images-holder animate animated">
                  <div className="images talk" style={{ backgroundImage: `url(${workfour})` }}></div>
                </div>
              </div>

              <div className="images-holder-button animate animated">
                <div className="images-five talk" style={{ backgroundImage: `url(${workfive})` }}></div>
                <div className="images-six" style={{ backgroundImage: `url(${worksix})` }}></div>
                <div className="images-seven" style={{ backgroundImage: `url(${workseven})` }}></div>
              </div>

            </div>
            {/* bottom */}
            <div className="photo-box">
              <div className="top-block">
                <div className="decription animate animated">
                  <strong className="h2 heading">Grow because you want to</strong>
                  <p>We always take unique and innovative projects. High standards and inspiring goals encourage everyone on the team to pursue excellence.</p>
                </div>
                <div className="images-holder-a animate animated">
                  <div className="images-a talk" style={{ backgroundImage: `url(${workeight})` }}></div>
                  <div className="images-b talk" style={{ backgroundImage: `url(${worknine})` }}></div>
                </div>
              </div>
              <div className="images-holder-button animate animated">
                <div className="images-ten talk" style={{ backgroundImage: `url(${workten})` }}></div>
                <div className="images-elevent" style={{ backgroundImage: `url(${workelevent})` }}></div>
                <div className="images-twelve" style={{ backgroundImage: `url(${worktwelve})` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team */}
      <div className="our-team">
        <div className="container">
          <h2 className="animate animated">Key Riseappers</h2>
          <ul>
            <li className="animate animated">
              <div className="item-people">
                <img src={peopleone}></img>
                <div className="infomation-people">
                  <strong>Vladen</strong>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </li>
            <li className="animate animated">
              <div className="item-people">
                <img src={peopletwo}></img>
                <div className="infomation-people">
                  <strong>Irina</strong>
                  <span>Human Resources Director</span>
                </div>
              </div>
            </li>
            <li className="animate animated">
              <div className="item-people">
                <img src={peoplethree}></img>
                <div className="infomation-people">
                  <strong>Dmitri</strong>
                  <span>Software Team Leader</span>
                </div>
              </div>
            </li>
            <li className="animate animated">
              <div className="item-people">
                <img src={peoplefour}></img>
                <div className="infomation-people">
                  <strong>Alex</strong>
                  <span>Design Team Leader</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* slide */}
      <div className="testimonials-holder">
        <div className="container">
          <div className="testimonials">
            <Slider
              dots={false}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={false}
              autoplaySpeed={3000}
            >
              {renderSlides()}
            </Slider>
            <a href='/' className="button animate animated">Start My Project</a>
          </div>
        </div>
      </div>
    </div>


  );
}
