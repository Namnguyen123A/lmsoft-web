/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';

import { useState } from 'react';
import './main.css'
import Footer2 from '../Header/footer';
import Header from '../Header';
export interface IContact {
}

export default function ContactToUs(props: IContact) {

    const [age, setAge] = useState();

    const handleChange = (even: any) => {
        const value = even.target.value.replace(/\D/g, "");
        setAge(value)
    };


    return (
        <div>
        <Header />
        <div className="section-contact-us"  style={{marginTop: '50px'}}>
            <div className="container">
                <div className="contacts-us" style={{display: 'flex', alignItems: 'center'}}>
                    <div className="form-contacts-us">
                        <div className="form">
                            <form className="contacts">
                                <p>
                                    <span className="title-contact">Drop us a line</span>
                                </p>

                                <div className="form-contacts-total">
                                    {/* fullname */}
                                    <div className="form-contacts-row">
                                        <div className="form-contacts lg group">
                                            <div className="form-contacts-wrap full-name">
                                                <span className="form-full full-name">
                                                    <input required type="text" name="full-name" size={40} className="form-contacts-input-one" placeholder='Full Name*'></input>
                                                    {/* <span className="input-group">Full Name*</span> */}
                                                </span>
                                                <p></p>
                                            </div>
                                            <p></p>
                                        </div>
                                        <p></p>
                                    </div>
                                    {/* email-phonenumber */}
                                    <div className="form-contacts-row">
                                        {/* email */}
                                        <div className="form-contacts botton-valid">
                                            <div className="form-contacts-wrap email">
                                                <span className="form-full email">
                                                    <input required type="text" name="email" size={40} className="form-contacts-input" placeholder='Email*' ></input>
                                                    {/* <span className="input-group">Email*</span> */}
                                                </span>
                                                <p></p>
                                            </div>
                                            <p></p>
                                        </div>
                                        {/* phonenumber */}
                                        <div className="form-contacts botton-valid">
                                            <div className="form-contacts-wrap phone-number">
                                                <span className="form-full phone">
                                                    <input required type="text" name="phone-number" size={40} className="form-contacts-input" placeholder='Phone Number*' value={age} onChange={handleChange}></input>
                                                    {/* <span className="input-group">Phone Number*</span> */}
                                                </span>
                                                <p></p>
                                            </div>
                                            <p></p>
                                        </div>
                                        <p></p>
                                    </div>
                                    {/* tell me */}
                                    <div className="form-contacts-row">
                                        <div className="form-contacts lg group">
                                            <div className="form-contacts-wrap message">
                                                <span className="form-full message">
                                                    <input required type="text" name="comment" className="form-contacts-input-three" placeholder="Tell us about your project*" size={40}></input>
                                                    {/* <span className="input-group">Tell us about your project*</span> */}
                                                </span>
                                                <p></p>
                                            </div>
                                            <p></p>
                                        </div>
                                        <p></p>
                                    </div>
                                    {/* confir */}
                                    <div className="form-contacts-row botton">
                                        {/* checkbox */}
                                        <div className="form-contacts-col">
                                            <div>
                                                <label className="checkbox">
                                                    <span className="form-full check">
                                                        <input type="checkbox" name="fsvns" defaultChecked={true} className="form-control"></input>
                                                        <span className="confir-one">I Accept Privacy Policy</span>
                                                    </span>
                                                    <p></p>
                                                </label>
                                            </div>
                                            <div>
                                                <label className="checkbox">
                                                    <span className="form-full check">
                                                        <input type="checkbox" name="fsvns" defaultChecked={false} className="form-control"></input>
                                                        <span className="confir-one">Send me NDA</span>
                                                    </span>
                                                    <p></p>
                                                </label>
                                            </div>
                                            <p></p>
                                        </div>
                                        {/* send */}
                                        <div className="form-contacts-col">
                                            <button className="send-btn" type='submit'>
                                                <a href="/" className="submit">Send</a>
                                            </button>
                                        </div>
                                    </div>
                                    <p></p>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div className="image-contact">
                        <img src={imageContact} alt="" />
                    </div> */}
                    <div className="contact-info" style={{marginLeft: '200px', marginBottom: '50px', width: '50%'}}>
                        <h3 style={{fontSize: '46px', marginBottom: '30px'}}>
                            Or you can
                            <br />
                            contact us directly:
                        </h3>
                        <ul className="contacts-list" style={{fontSize: '24px'}}>
                            <li style={{marginBottom: '25px'}}><a href="">+84 903438731</a></li>
                            <li style={{marginBottom: '25px'}}><a href="">Leo@lmsoft.vn</a></li>
                            <h5 className="section_contact">Offices</h5>
                        </ul>
                        <div className='office-list'>
                            <div className="item">
                                        <div className="h4" style={{fontSize: '20px', marginBottom: '10px',color: 'blue'}}>Main Office</div>
                                            <address className='address-contact'> 
                                                <p>8th for Lacasta Tower,<br />
                                                Van Phu Ha Dong Urban Area
                                                <br />
                                                 </p>
                                            </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer2 />
        </div>
    );
}
