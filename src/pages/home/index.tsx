import Banner from '../../components/banner';
import Collaborate from '../../components/Collaborate';
import Contact from '../../components/contact';
import DigitalInfo from '../../components/digtal/DigtalInfo';
import NoCases from '../../components/interview/Cases';
import TestimonialsSection from '../../components/interview/Transparent/TestimonialsSectionItem';
import MainLayout from '../../components/Layout/MainLayout';
import Navigation from '../../components/Navigation';
import OutWork from '../../components/OurWork/OurWork';
import Services from '../../components/services/services';
import SliderAwards from "../../components/Slide-award";
import MeetOurTeam from '../../components/team/team';
// import Banner from '../../components/banner';
export interface IHomePageProps {
}

export default function HomePage(props: IHomePageProps) {
  return (
    <MainLayout>
      <Navigation />
      <Banner />
      <div className="dropdown">
        <div className="container">
          <Services />
        </div>
        <OutWork />
        <NoCases />
        <TestimonialsSection />
        <MeetOurTeam />
        <DigitalInfo />
        <SliderAwards />
        <Collaborate />
        <Contact />
      </div>
    </MainLayout>
  );
}
