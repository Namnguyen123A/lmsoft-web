// <<<<<<< HEAD
/* eslint-disable jsx-a11y/anchor-is-valid */
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

                    <a href="#" className="button orange" target="_blank" rel="noreferrer">Let’s Talk</a>
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
// =======
// import * as React from 'react';
// import "./style.scss";
// import mainIntro from "../../assets/img-5.jpg"
// import rateOne from "../../assets/rate-01.png"
// import rateTwo from "../../assets/rate-02.png"
// import rateThree from "../../assets/rate-03.png"
// import star from "../../assets/star.png"
// export interface IBannerprops {
// }

// export default function Banner(props: IBannerprops) {
//   return (
//     <main className="banner">
//       <div className="main-intro has-video">
//         <div className="main-video">
//           <video preload="yes" >
//             <source src="" type="video/mp4" />
//           </video>
//         </div>
//         <div className="container">
//           <div className="short-infor">
//             <a href="https://www.youtube.com/embed/Grl7hVbbDbg?autoplay=1&loop=1&autopause=0" className="play-video"></a>
//             <strong className="h1">Create. Grow. Beat. Repeat.</strong>
//             <h1>Product development teams for startups and SMBs</h1>
//             <a href="/" className="button orange">Let's talk</a>
//           </div>
//           <div className="rate-infor">
//             <ul>
//               <li className="">
//                 <div className="firm">
//                   <a className="" href="/">
//                     <img src={rateOne} loading="lazy" width={31} height={22}></img>
//                   </a>
//                 </div>
//                 <div className="rating">
//                   <strong className="rating-title">Top Rated Status</strong>
//                   <div className="stars">
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                   </div>
//                 </div>
//               </li>
//               <li className="">
//                 <div className="firm">
//                   <a className="" href="/">
//                     <img src={rateTwo} loading="lazy" width={54} height={22}></img>
//                   </a>
//                 </div>
//                 <div className="rating">
//                   <strong className="rating-title">Our Rate 5 of 5</strong>
//                   <div className="stars">
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                   </div>
//                 </div>
//               </li>
//               <li className="">
//                 <div className="firm">
//                   <a className="" href="/">
//                     <img src={rateThree} loading="lazy" width={80} height={12}></img>
//                   </a>
//                 </div>
//                 <div className="rating">
//                   <strong className="rating-title">Our Rate 5 of 5</strong>
//                   <div className="stars">
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                     <img loading='lazy' src={star} className="img-banner"></img>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }
// >>>>>>> 57588502eb3e81ae6397ec9243e3d228e39f46ca
