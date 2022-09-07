/* eslint-disable jsx-a11y/anchor-has-content */


import { DATA_TESTIMONIALS_SECTION } from './Testimonial-section';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slide.scss"


/* eslint-disable react/style-prop-object */
export default function TestimonialsSection() {
    const renderSlides = () =>
        DATA_TESTIMONIALS_SECTION.map((item) => {
            return (
                <div>
                    <div className="item" style={{ width: '100%', display: 'inline-block' }}>
                        <div className="image-slide">
                            <div className="has-video" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                                <a href={item.href}></a>
                            </div>
                        </div>
                        <div className="info">
                            <blockquote>
                                {item.description}
                                <br></br>
                            </blockquote>
                            <div className="author-block">
                                <span className="name">{item.name}</span>
                                <span className="post">{item.post}</span>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
        );
    return (
        <div className="section relationships animate" data-background="#ffffff" data-theme="header-white">
            <div className="container">
                <div className="heading">
                    <h2 className='testimonial-h2'>Transparent Relationships Yield The <mark>Best Results</mark></h2>

                    <p>Our custom software development company is an extra force that helps to translate your ideas
                        in remarkable applications. Development services that are offered are the tools to achieve
                        your project’s goals.</p>
                </div>

                <div className="trust-us-slider slick-slider has-iframe">
                    <Slider
                        dots={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={false}
                        autoplaySpeed={3000}
                    >
                        {renderSlides()}
                    </Slider>
                </div>

                <div className="bottom">

                    <a href="https://riseapps.co/contact-us/" className="button" target="_blank" rel="noreferrer">Tell Your Story</a>
                </div>
            </div>
        </div>
    )
}


