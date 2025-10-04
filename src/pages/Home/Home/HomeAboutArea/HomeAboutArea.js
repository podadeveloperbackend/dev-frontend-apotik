import React from 'react';
import { motion } from 'framer-motion';

// Variants fadeUp
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

// Variants fadeLeft
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const HomeAboutArea = () => {
  return (
    <section className="about-area py-20">
      <div className="container">
        <motion.div
          className="flex justify-center mb-75"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h4>About us</h4>
        </motion.div>

        <div className="row items-center">
          {/* LEFT IMAGE */}
          <div className="col-xl-6 col-lg-5 about_left">
            <motion.div
              className="about-left-side pos-rel mb-30"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            >
              {/* <div className="about-front-img">
                <img src="img/about/img.jpg" alt="About" />
              </div> */}
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-xl-6 col-lg-7">
            <motion.div
              className="about-right-side pt-55 mb-30"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
            >
              <div className="about-title mb-20">
                <h3>What is Lorem Ipsum?</h3>
              </div>
              <div className="about-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s
                  with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutArea;
