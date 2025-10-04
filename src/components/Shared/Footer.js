import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <>
         <footer>
            <div className="footer-top bh-white footer-map pos-rel py-10">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="footer-contact-info footer-contact-info-3 mb-40">
                           <div className="footer-logo mb-35">
                               <div className='text-2xl font-bold'>
                                       <h3 to="/">Logo</h3>
                                          {/* <Link to="/"><img src="/img/logo/logo.png" alt="" /></Link> */}
                               </div>                           
                        </div>
                           <div className="footer-contact-content mb-25">
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="footer-widget mb-40">
                           <div className="footer-menu footer-menu-2">
                              <ul>
                                 <li><Link to="/#">Marketing</Link></li>
                                 <li><Link to="/#">Adsvertising</Link></li>
                                 <li><Link to="/services">Services</Link></li>
                                 <li><Link to="/shop">Shop</Link></li>
                                 <li><Link to="/about">About Us</Link></li>
                                 <li><Link to="/">Consultation</Link></li>
                                 <li><Link to="/contact">Contact</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-bottom pt-10 pb-10">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="footer-copyright footer-copyright-3 text-center">
                           <p className=''>Copyright ©2025 All rights reserved | Poda Developer Team</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;