/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-has-content */

import "./style.scss";
import { DATA_RATE_INFO } from './banner-info';
import RateInfoItem from './bannerInfo';

/* eslint-disable jsx-a11y/img-redundant-alt */
export default function Banner(props:any) {
    return (
        <div className="section main-intro has-video"
            style={{ backgroundImage: `url(""assets/svg/mainIntro.png)` }}
            data-background="#434eea" data-theme="header-dark">
            <div className="main-video">
                <video preload="yes" muted autoPlay loop playsInline
                    poster="https://riseapps.co/wp-content/uploads/2020/07/img-5.jpg"
                    >
                    <source src="https://riseapps.co/wp-content/uploads/2020/03/promo-short-mute-compressed.mp4"
                        type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <div className="short-info">
                    <a href="https://www.youtube.com/embed/Grl7hVbbDbg?autoplay=1&amp;loop=1&amp;autopause=0"
                        className="play-video"></a>

                    <strong className="h1">Create. Grow. Beat. Repeat.</strong>
                    <h1>Product development teams for startups and SMBs</h1>

                    <a href="https://riseapps.co/contact-us/" className="button orange" target="_blank" rel="noreferrer">Let’s Talk</a>
                </div>
                <div className="rate-info">
                    <ul>
                        {
                            DATA_RATE_INFO.map((rateInfoItem:any, index:any) => {
                                return <RateInfoItem key={index} rateInfoItem={rateInfoItem} index={index} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}