import React from "react";
import { motion } from "framer-motion";

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const ContactArea = () => {
  return (
    <motion.section
      className="contact-area py-20"
      data-background="assets/img/bg/bg-map.png"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerParent}
    >
      <div className="container">
        <div className="row">
          {/* Email */}
          <motion.div
            className="col-xl-4 col-lg-4 col-md-4"
            variants={fadeUp}
          >
            <div className="contact text-center mb-30">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>podadeveloperteam@gmail.com</p>
            </div>
          </motion.div>

          {/* Visit */}
          <motion.div
            className="col-xl-4 col-lg-4 col-md-4"
            variants={fadeUp}
          >
            <div className="contact text-center mb-30">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Visit</h3>
              <p>Kota Medan, Sumatera Utara</p>
            </div>
          </motion.div>

          {/* Telp */}
          <motion.div
            className="col-xl-4 col-lg-4 col-md-4"
            variants={fadeUp}
          >
            <div className="contact text-center mb-30">
              <i className="fas fa-phone"></i>
              <h3>Telp</h3>
              <p>+6285371936189</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactArea;
