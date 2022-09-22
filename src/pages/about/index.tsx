import * as React from 'react';
import About from '../../components/about';
import Header from '../../components/Header';
import Footer2 from '../../components/Header/footer';
import MainLayout from '../../components/Layout/MainLayout';

export interface IAboutProps {
}

export default function HomePage (props: IAboutProps) {
  return (
    <div>
    <Header />
        <About />
     <Footer2 />   
    </div>
  );
}
