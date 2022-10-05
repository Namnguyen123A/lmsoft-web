import * as React from 'react';
import { Slide } from 'react-slideshow-image';
import Banner from '../../components/banner';
import Collaborate from '../../components/Collaborate';
import SliderAwards from "../../components/Slide-award"
import Contact from '../../components/contact';
import DigitalInfo from '../../components/digtal/DigtalInfo';
import NoCases from '../../components/interview/Cases';
import TestimonialsSection from '../../components/interview/Transparent/TestimonialsSectionItem';
import MainLayout from '../../components/Layout/MainLayout';
import OutWork from '../../components/OurWork/OurWork';
import Services from '../../components/services/services';
import MeetOurTeam from '../../components/team/team';
// import Banner from '../../components/banner';
export interface IHomePageProps {
}

export default function HomePage(props: IHomePageProps) {
  return (
    <MainLayout>
      <Banner />
      <div className="dropdown">
        <div className="container">
          <Services />
        </div>
        <OutWork />
        <NoCases />
        {/* <TestimonialsSection /> */}
        <MeetOurTeam />
        <DigitalInfo />
        <SliderAwards />
        <Collaborate />
        <Contact />
      </div>
    </MainLayout>
  );
}
