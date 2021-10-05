import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
        <div>
        <h3 className='nameFooter'>Future Wise</h3>
        </div>
        <div className='calling'>
            <i className='fas fa-phone' id='icon'></i>
            (+88) 01912356786
        </div><br />
        <div className='info'>
        <i className='fas fa-envelope-square' id='icon'></i>
        info.futurewise@gmail.com
        </div>
         <div className='social'>
             <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
             <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><i className="fab fa-twitter"></i></a>
             <a href="https://www.google.com/"><i className="fas fa-at"></i></a>
             <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
         </div>
         <h6 >Copyright © Future Wise & IELTS coaching center 2021 All Right Reserved || powered by Nawrin Sultana</h6> 

        </div>
    );
};

export default Footer;

  