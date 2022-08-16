import * as React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import Services from '../../components/services/services';

export interface IHomePageProps {
}

export default function HomePage (props: IHomePageProps) {
  return (
    <MainLayout>
        <div className="dropdown">
            <div className="container">
                <Services />
            </div>
        </div>
    </MainLayout>
  );
}
