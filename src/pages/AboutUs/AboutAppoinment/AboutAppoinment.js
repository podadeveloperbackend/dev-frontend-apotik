import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerList = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AboutAppoinment = () => {
  return (
    <section
      className="appoinment-section py-20 mt-20 mb-20"
      data-background="img/bg/appointment.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <motion.div
              className="appoinment-box white"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.3 }}
            >
              <motion.div className="appoinment-content" variants={fadeUp}>
                <span className="small-text">About Us</span>
              </motion.div>

              <motion.h3 variants={fadeUp}>
                "Contrary to popular belief, Lorem Ipsum is not simply random
                text."
              </motion.h3>

              <motion.p variants={fadeUp}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </motion.p>

              {/* List dengan stagger */}
              <motion.ul
                className="professinals-list pt-20"
                variants={staggerList}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.li variants={listItem}>
                  <i className="fa fa-check"></i>
                  The standard Lorem Ipsum passage.
                </motion.li>
                <motion.li variants={listItem}>
                  <i className="fa fa-check"></i>
                  accessibility.
                </motion.li>
                <motion.li variants={listItem}>
                  <i className="fa fa-check"></i>
                  Consultation.
                </motion.li>
              </motion.ul>

              <motion.div variants={fadeUp}>
                <Link to="/login" className="btn-primary mt-40">
                  Consultation Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAppoinment;
