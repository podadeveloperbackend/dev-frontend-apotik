import React from 'react';

const AboutTestimonial = () => {
   return (
      <>
         <div className="testimonials-area py-20 mt-20">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                     <div className="section-title text-center pos-rel mb-10">
                        {/* <div className="section-icon">
                           <img className="section-back-icon" src="img/section/img.png" alt=""/>
                        </div> */}
                        <div className="section-text pos-rel">
                           <h5>Testimoni</h5>
                           <h4>Kata Klien Kami Tentang Kami</h4>
                        </div>
                        {/* <div className="section-line pos-rel">
                           <img src="img/shape/img.png" alt=""/>
                        </div> */}
                     </div>
                  </div>
               </div>
               <div className="single-testi">
                  <div className="row">
                     <div className="col-xl-10 offset-xl-1 col-lg-12 col-md-12">
                        <div className="testi-box text-center pos-rel">
                           <div className="">
                              <div className="">
                              <p>
                                             Contrary to popular belief, Lorem Ipsum is not simply random
                                             text. It has roots in a piece of classical Latin literature from
                                             45 BC, making it over 2000 years old. Richard McClintock, a
                                             Latin professor at Hampden-Sydney College in Virginia, looked up
                                             one of the more obscure Latin words, consectetur, from a Lorem
                                             Ipsum passage, and going through the cites of the word in
                                             classical literature, discovered the undoubtable source.
                              </p>
                              </div>
                           </div>
                           <div className="">
                              <h5 className="">Ryan</h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutTestimonial;