import Footer from '../../components/Shared/Footer';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import AboutAppoinment from './AboutAppoinment/AboutAppoinment';
import AboutArea from './AboutArea/AboutArea';
import AboutCounter from './AboutCounter/AboutCounter';
import AboutTestimonial from './AboutTestimonial/AboutTestimonial';

const AboutUs = () => {
   return (
      <>
         <AboutArea/>
         <AboutCounter/>
         <AboutAppoinment/>
         <Footer/>
      </>
   );
};

export default AboutUs;