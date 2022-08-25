import * as React from 'react';
import "./main.scss";
import imageContact from "../../assets/268410702_126450523171485_6358762214526324696_n-removebg-preview.png"
export interface IContact {
}

export default function contact (props: IContact) {
  return (
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
                                            <input type="text" name="full-name" size={40} className="form-contacts-input-one"></input>
                                            <span className="input-group">Full Name*</span>
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
                                            <input type="text" name="email" size={40} className="form-contacts-input"></input>
                                            <span className="input-group">Email*</span>
                                        </span>
                                        <p></p>
                                    </div>
                                    <p></p>
                                </div>
                                {/* phonenumber */}
                                <div className="form-contacts botton-valid">
                                    <div className="form-contacts-wrap phone-number">
                                        <span className="form-full phone">
                                            <input type="text" name="phone-number" size={40} className="form-contacts-input"></input>
                                            <span className="input-group">Phone Number*</span>
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
                                            <input type="text" name="comment" className="form-contacts-input-three" size={40}></input>
                                            <span className="input-group">Tell us about your project*</span>
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
                                    <a href="/" className="send-btn">Send</a>
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
  );
}
