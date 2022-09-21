
import '../../global.css';
import './main.scss'
import { DATA_DIGITAL_INFO, DATA_FEATURES_INFO } from './digtal-info';
import DigitalInfoItem from './DigtalInfoItem';
import FeaturesInfoItem from './features';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function DigitalInfo () {
    return (
        <div className="section digital-info animate odometer-wrap home" data-background="#ffffff"
                data-theme="header-white">
                <div className="container">
                    <h2>Road so far</h2>

                    <ul className="digital-info-list odometer">
                        {
                            DATA_DIGITAL_INFO?.map((item, index) => {
                                return <DigitalInfoItem key={index} item={item} />
                            })
                        }
                    </ul>

                    <div className="features-info-list collapse-parent">
                        <ul className="collapse-list">
                            {
                                DATA_FEATURES_INFO?.map((item, index) => {
                                    return <FeaturesInfoItem key={index} item={item} />
                                })
                            }
                        </ul>

                        {/* <div className="show-more">
                            <a href="#">
                                <span>Show more</span>
                                <ShowMore />
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
    )
}