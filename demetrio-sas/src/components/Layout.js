import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';

function Layout({ children }) {
    return (
      <div className='container'>
        <div className='container__body'>
        {/* Header */}
        <Header />

        {/* Banner */}
        <Banner />
  
        {/* Contenu principal 
        <main>{children}</main> */}
  
       
        </div>
        
         {/* Footer */}
         <Footer />
      </div>
    );
  }
  
  export default Layout;