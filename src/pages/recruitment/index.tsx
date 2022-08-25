import * as React from 'react';
import './Recruitment.scss';
import {ReactComponent as Magnifying} from '../../assets/magnifying-glass-solid.svg';
import {ReactComponent as Arrowright} from '../../assets/arrow-right-solid.svg';
import {ReactComponent as Arrowleft} from '../../assets/arrow-left-solid.svg';
import {ReactComponent as Location} from '../../assets/location-pin-solid.svg'
import {ReactComponent as Calendar} from '../../assets/calendar-solid.svg';
import {ReactComponent as Dollar} from '../../assets/dollar-sign-solid.svg';

export interface IRecruitmentProps {
}

export default function Recruitment (props: IRecruitmentProps) {

  const listItems = [
    {
      id: 1,
      title: 'TUYỂN DỤNG FONTEND VUEJS',
      location: 'Vietnam',
      date: '13/09/2022',
      cost: 'Up to 1500 USD',

    }
  ];
  return (
    <div className='recuitment__container'>
      <div className="heading__box">
        <h1>Lmsoft RECRUITMENT</h1>
      </div>

      <div className="search__jobs">
        <p className="search__jobs-title">Search for jobs</p>
        <div className="search__jobs-action">
          <input type="text" className="search__jobs-input" placeholder="Search Keywords"/>
          <select name="" id="" className="select__level">
            <option value="0">Level</option>
          </select>
          <select name="" id="" className="select__location">
            <option value="0">Location</option>
          </select>
          <div className="search__jobs-btn">
            <Magnifying style={{ width: 16 } } className="search-icon"/>
          </div>
        </div>
      </div>
      
      <div className="hiring__title">
        <p className="hiring-jobs">HIRING JOBS</p>
      </div>


      <div className="hiring__jobs-container">
        
        {
          listItems.map((item) => 
          <div key={item.id} className="infor__hiring-all">
            <p className="hiring_heading">{item.title}</p>
            <div className="hiring__infor">
              <p className="location"><Location style={{width: 14}}/> {item.location}</p>
              <p className="date"><Calendar style={{width: 14}}/> {item.date}</p>
              <p className="cost"><Dollar style={{width: 12}}/> {item.cost}</p>
            </div>

          </div>)
              
        }
        
        <div className="uplly">APPLY NOW</div>
      </div>

      <div className="arrow">
        <div className="arrow-left">
          <Arrowleft style={{width:16}}/>
        </div>
        <div className="arrow-1">
          <p className="one">1</p>
        </div>
        <div className="arrow-right">
          <Arrowright style={{width:16}}/>
        </div>
      </div>
    </div>
  );
}
