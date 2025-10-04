import React from 'react';
import { Link } from 'react-router-dom';

const ContactFormArea = () => {
   return (
      <>
         <section className="contact-form-area gray-bg py-20 mt-20">
            <div className="container">
               <div className="form-wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-8 col-lg-8">
                        <div className="section-title mb-30">
                           <h3>Masukan dari anda sangat berarti bagi kami</h3>
                        </div>
                     </div>
                  </div>
                  <div className="contact-form">
                     <form id="contact-form" action="#">
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="form-box user-icon mb-30">
                                 <input type="text" name="name" placeholder="Nama" />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box email-icon mb-30">
                                 <input type="text" name="email" placeholder="Email" />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box phone-icon mb-30">
                                 <input type="text" name="phone" placeholder="No HP" />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="form-box subject-icon mb-30">
                                 <input type="text" name="subject" placeholder="About Us" />
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="form-box message-icon mb-30">
                                 <textarea name="message" id="message" cols="30" rows="10"
                                    placeholder="Pesan Anda"></textarea>
                              </div>
                              <div className="contact-btn text-center">
                                 <Link to="/login" className="btn-primary  ml-0"><span>+</span>Kirim</Link>
                              </div>
                           </div>
                        </div>
                     </form>
                     {/* <p className="ajax-response text-center"></p> */}
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactFormArea;