/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import ServicesItem from "./services-item";
import { DATA_SERVICES } from "./services-tab";
import "../../global.css";
export interface IServicesProps {}

export default function Services(props: IServicesProps) {
  return (
    <div className="container">
      <div className="tabs-holder">
        <div className="tabs-nav">
          <ul style={{display: 'flex'}}>
            <li className="active">
              <a href="javascript:void(0)">Services</a>
            </li>
            <li>
              <a href="javascript:void(0)">Technologies</a>
            </li>
            <li>
              <a href="javascript:void(0)">Niches</a>
            </li>
          </ul>

          <div className="tabs-content" style={{display: 'flex'}}>
            <div className="tabs-active">
              <div className="tab-title">We build successful, long-lasting, profitable products for our clients and can help you with your projects </div>
            </div>
              <div className="tabs-info">
                <div className="services-info">
                <div className="services-info-list collapse-list">
                                    {
                                        DATA_SERVICES.map((item, index) => {
                                            return <ServicesItem key={index} item={item} />
                                        })
                                    }
                                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
