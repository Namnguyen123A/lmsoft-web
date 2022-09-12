import * as React from 'react';
import { DataAwards } from "./Data-award"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "./main.scss";

export interface ISlide {

}

export default function Footer(props: ISlide) {
    const renderSlides = () =>
        DataAwards.map((item, index) => {
            return (
                <div key={index}>
                    <div className="item" style={{ width: '100%', display: 'inline-block' }}>
                        <a href={item.href}>
                            <img loading="lazy" src={item.src} alt="img"></img>
                        </a>
                    </div>
                </div>
            )
        }
        );
    return (
        <div className="section mentions animate animated">
            <div className="container">
                <div className="mentions-holder">
                    <div className="text">
                        <h2 className="title-awards">Awards</h2>
                        <p>Receiving rewards always encourages our team
                            to work even harder to deliver great apps to our clients.
                        </p>
                    </div>
                    <div className="images slick-initialized slick-slider slick-dotted">
                        <div className="slick-list draggable">
                            <Slider
                                dots={true}
                                slidesToShow={3}
                                slidesToScroll={1}
                                autoplay={true}
                                autoplaySpeed={3000}
                            >
                                {renderSlides()}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
