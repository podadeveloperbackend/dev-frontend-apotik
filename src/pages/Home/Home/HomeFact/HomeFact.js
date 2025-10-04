import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Variants fadeUp
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HomeFact = () => {
  return (
    <section className="fact-area pos-rel bg-gray-100 py-20 mt-20">
      {/* Title */}
      <div className="container section-title pos-rel mb-40">
        <motion.div
          className="section-text flex justify-center section-text-white pos-rel"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h3
            className=""
            variants={fadeUp}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            We are always here for you.
          </motion.h3>
        </motion.div>
      </div>

      {/* Facts */}
      <div className="container">
        <div className="row">
          <motion.div
            className="col-md-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="single-satisfied text-center mb-30">
              <h2>500+</h2>
              <h5>
                <i className="fas fa-user"></i> Users
              </h5>
              <p>More than 500 users are using our services.</p>
            </div>
          </motion.div>

          <motion.div
            className="col-md-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          >
            <div className="single-satisfied text-center mb-30">
              <h2>300+</h2>
              <h5>
                <i className="far fa-thumbs-up"></i> Customer satisfaction
              </h5>
              <p>More than 300 patients feel satisfied with our services.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeFact;
