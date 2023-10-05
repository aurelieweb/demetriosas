import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';

function Layout({ children }) {
    return (
      <div className='container'>
        <div className='container__body'>

        {/*Loading Spinner*/}
        <LoadingSpinner />

        {/* Header */}
        <Header />

        {/* Banner */}
  
        {/* Contenu principal */}
        <main>{children}</main> 
  
       
        </div>

         {/* Footer */}
         <Footer />
      </div>
    );
  }
  
  export default Layout;