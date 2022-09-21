/* eslint-disable jsx-a11y/anchor-has-content */


import { DATA_TESTIMONIALS_SECTION } from './Testimonial-section';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slide.scss"


/* eslint-disable react/style-prop-object */
export default function TestimonialsSection() {
    const settings = {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1,
            },
          },
        ],
      };
    const renderSlides = () =>
        DATA_TESTIMONIALS_SECTION.map((item) => {
            return (
                <div>
                    <div className="image">
                        <div className="has-video" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                            <a href={item.href} className="play-video"></a>
                        </div>

                        <div className="info">
                            <blockquote>{item.description}</blockquote>
                            <div className="author-block">
                                <span>{item.name}</span>
                                <span>{item.post}</span>
                            </div>
                        </div>
                    </div>

                    {/* <div className="info">
                            <blockquote>{item.description}</blockquote>
                            <div className="author-block">
                                <span>{item.name}</span>
                                <span>{item.post}</span>
                            </div>
                        </div> */}

                </div>
            )
        });
    return (
        <div className="sections relationships animate animated">
            <div className="container">
                {/* top */}
                <div className="heading">
                    <h2>Transparent Relationships Yield The Best Results</h2>
                    <p>Our custom software development company is an extra force that helps to
                        translate your ideas in remarkable applications. Development services that are
                        offered are the tools to achieve your project’s goals.
                    </p>
                </div>
                {/* slide */}
                <div className="trust-us-slider has-iframe slick-slider slick-initialized slick-dotted">
                    <Slider {...settings}
                        // dots={true}
                        // slidesToShow={1}
                        // slidesToScroll={1}
                        // autoplay={false}
                        // autoplaySpeed={3000}
                    >
                        {renderSlides()}
                    </Slider>
                </div>
                {/* botton */}
                <div className="bottom">
                    <a href='/' className="button">Tell Your Story</a>
                </div>
            </div>
        </div>
    )
}


