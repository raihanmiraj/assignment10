import React from 'react';
 
import Header from './Header/Header';
 
import { Outlet } from 'react-router-dom';
import Slider from './Slider/Slider';
import Footer from './Footer/Footer';
import ContactForm from '../Component/ContactForm/ContactForm';
 
 

const Layout = () => {
    return (
        <>
       
        <Slider> 
               <Header/> 
        
        </Slider>
     
 
<Outlet/>



 


       <Footer/>
   
 
        </>
    );
}

export default Layout;
