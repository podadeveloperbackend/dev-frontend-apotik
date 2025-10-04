import React from 'react';
import AboutSingleCounter from '../../../components/AboutSingleCounter/AboutSingleCounter';

const AboutCounter = () => {
   return (
      <>
         <section className="counter-wraper py-20 mt-20">
            <div className="container">
               <div className="row">
                  <AboutSingleCounter icon="1" counter="100" title="Lorem Ipsum" />
                  <AboutSingleCounter icon="2" counter="200" title="Lorem Ipsum" />
                  <AboutSingleCounter icon="3" counter="300" title="Lorem Ipsum" />
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutCounter;