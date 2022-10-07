import * as React from 'react';
import About from '../../components/about';
import MainLayout from '../../components/Layout/MainLayout';
import NavigationAbout from '../../components/NavigationAbout';

export interface IAboutProps {
}

export default function HomePage(props: IAboutProps) {
  return (
    <MainLayout>
      <NavigationAbout />
      <About />
    </MainLayout>

  );
}
