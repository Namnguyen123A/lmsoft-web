/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable react/style-prop-object */
import React from "react";
import { DATA_NICHES, DATA_SERVICES, DATA_TECHNOLOGIES } from "./services-tab";
import ServicesItem from "./services-item";
import TechnologyItem from "./technologi";
import NicheItem from "./nicheItem";

export default function ServicesTabs() {

    return (
        <div className="section services-tabs animate" data-background="#ffffff" data-theme="header-white">
            <div className="container">
                <div className="tabs--holder">
                    <ul className="tabs-nav">
                        <li id="defaultOpen" className="active"><a href="javascript:void(0)">Services</a></li>
                        <li><a href="javascript:void(0)">Technologies</a></li>
                        <li><a href="javascript:void(0)">Niches</a></li>
                    </ul>
                    <div className="tabscontent">
                        <div className="tab active">
                            <div className="tab-title">We build successful, long-lasting, profitable products for our
                                clients and can help you with your projects </div>
                            <div className="tab-info collapse-parent">
                                <div className="services-info-list collapse-list">
                                    {
                                        DATA_SERVICES.map((item, index) => {
                                            return <ServicesItem key={index} item={item} />
                                        })
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="tab">
                            <div className="tab-title">We use only proven and reliable technologies to ensure your app
                                will perform seamlessly. </div>
                            <div className="tab-info collapse-parent">
                                <div className="services-info-list collapse-list">
                                    {
                                        DATA_TECHNOLOGIES?.map((item, index) => {
                                            return <TechnologyItem key={index} item={item} />
                                        })
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="tab">
                            <div className="tab-title">Our team has already gained experience helping various business
                                sectors, now we are ready to help you. </div>
                            <div className="tab-info collapse-parent">
                                <div className="services-info-list collapse-list">
                                    {
                                        DATA_NICHES?.map((item, index) => {
                                            return <NicheItem key={index} item={item} />
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}