import * as React from 'react';
import ContactToUs from '../../components/ContactToUs/contactToUs';
import MainLayout from '../../components/Layout/MainLayout';

export interface IAboutProps {
}

export default function HomePage (props: IAboutProps) {
  return (
    <MainLayout>
        <ContactToUs />
    </MainLayout>
    
  );
}