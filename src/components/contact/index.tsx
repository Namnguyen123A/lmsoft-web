import * as React from 'react';

import "./main.scss";
import imageContact from "../../assets/contact.png"
import { useState } from 'react';
export interface IContact {
}

<<<<<<< HEAD
export default function Contact (props: IContact) {
  return (
    <div className="section contact-us" style={{background: '#f4f7fe'}}>
    <div className="container">
        <div className="contacts-us">
            <div className="form-contacts-us">
                <div className="form">
                    <form className="contacts">
                        <p>
                            <span className="title-contact">Drop us a line</span>
                        </p>
=======
export default function Contact(props: IContact) {
>>>>>>> 57588502eb3e81ae6397ec9243e3d228e39f46ca

    const [age, setAge] = useState();

    const handleChange = (even: any) => {
        const value = even.target.value.replace(/\D/g, "");
        setAge(value)
    };


    return (
        <div className="section-contact-us">
            <div className="container">
                <div className="contacts-us">
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
                    <div className="image-contact">
                        <img src={imageContact} alt="" />
                    </div>
                </div>
            </div>
        </div>
<<<<<<< HEAD
    </div>
    </div>
  );
=======

    );
>>>>>>> 57588502eb3e81ae6397ec9243e3d228e39f46ca
}
