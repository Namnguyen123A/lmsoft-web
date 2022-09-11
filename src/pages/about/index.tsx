import * as React from 'react';
import About from '../../components/about';
import MainLayout from '../../components/Layout/MainLayout';

export interface IAboutProps {
}

export default function HomePage (props: IAboutProps) {
  return (
    <MainLayout>
        <About />
    </MainLayout>
    
  );
}
