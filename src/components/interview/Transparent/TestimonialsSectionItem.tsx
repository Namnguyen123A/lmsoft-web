/* eslint-disable jsx-a11y/anchor-has-content */


import { DATA_TESTIMONIALS_SECTION } from './Testimonial-section';
import TestimonialsSectionItem from './TestimonialsSection';


/* eslint-disable react/style-prop-object */
export default function TestimonialsSection() {
    return (
        <div className="section relationships animate" data-background="#ffffff" data-theme="header-white">
            <div className="container">
                <div className="heading">
                    <h2 className='testimonial-h2'>Transparent Relationships Yield The <mark>Best Results</mark></h2>

                    <p>Our custom software development company is an extra force that helps to translate your ideas
                        in remarkable applications. Development services that are offered are the tools to achieve
                        your project’s goals.</p>
                </div>

                <div className="trust-us-slider has-iframe">
                    {
                        DATA_TESTIMONIALS_SECTION?.map((item:any, index:any) => {
                            return <TestimonialsSectionItem key={index} item={item} />
                        })
                    }
                </div>

                <div className="bottom">

                    <a href="https://riseapps.co/contact-us/" className="button" target="_blank" rel="noreferrer">Tell Your Story</a>
                </div>
            </div>
        </div>
    )
}