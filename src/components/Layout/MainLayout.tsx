import * as React from 'react';
import Footer from '../Footer';
import Contact from '../contact';
import Navigation from '../Navigation';

export default function MainLayout ({children} : any) {
  return (
    <div>
      <Navigation />
        {children}
        <Contact />
      <Footer />
    </div>
  );
}
