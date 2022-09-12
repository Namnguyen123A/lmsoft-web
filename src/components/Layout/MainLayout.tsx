import * as React from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';

export default function MainLayout ({children} : any) {
  return (
    <div>
      <Navigation />
        {children}
      <Footer />
    </div>
  );
}
