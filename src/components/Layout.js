import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';

function Layout({ children }) {
    return (
      <div className='container'>
        {/*Loading Spinner*/}
        <LoadingSpinner />

        <div className='container__body'>
        {/* Header */}
        <Header />
  
        {/* Contenu principal */}
        <main>{children}</main> 
  
        </div>

         {/* Footer */}
         <Footer />
      </div>
    );
  }
  
  export default Layout;