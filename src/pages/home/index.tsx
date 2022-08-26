import * as React from 'react';
import Collaborate from '../../components/Collaborate';
import DigitalInfo from '../../components/digtal/DigtalInfo';
import NoCases from '../../components/interview/Cases';
import TestimonialsSection from '../../components/interview/Transparent/TestimonialsSectionItem';
import MainLayout from '../../components/Layout/MainLayout';
import OutWork from '../../components/OurWork/OurWork';
import Services from '../../components/services/services';
import MeetOurTeam from '../../components/team/team';

export interface IHomePageProps {
}

export default function HomePage (props: IHomePageProps) {
  return (
    <MainLayout>
        <div className="dropdown">
            <div className="container">
                <Services />
            </div>
                <OutWork />
                <NoCases />
                <TestimonialsSection />
                <MeetOurTeam />
                <DigitalInfo />
        </div>
    </MainLayout>
  );
}
