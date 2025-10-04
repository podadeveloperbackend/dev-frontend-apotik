import React, { useEffect } from 'react';
import { useCategoriesContext } from '../../../../context/CategoriesContext/CategoriesContext';
import { FaShopify, FaNetworkWired, FaDropbox } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const HomeServices = () => {
  const { categories, handleGetCategories } = useCategoriesContext();
  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <section className="services-area bg-gray-100 py-20 mt-30">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="section-title text-center pos-rel mb-75">
              <motion.div
                className="fade-service section-text pos-rel home_ser_title"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h4
                  variants={fadeUp}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  Lorem Ipsum
                </motion.h4>
                <motion.h2
                  variants={fadeUp}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  Why do we use it?
                </motion.h2>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Services Box */}
        <div className="row">
          <motion.div
            className="col-xl-4 col-lg-6 col-md-6 cursor-pointer"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="service-box text-center mb-30">
              <div className="service-thumb">
                <FaDropbox size={40} color="red" />
              </div>
              <div className="service-content">
                <p>
                  Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-xl-4 col-lg-6 col-md-6 cursor-pointer"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="service-box text-center mb-30">
              <div className="service-thumb">
                <FaNetworkWired size={40} color="blue" />
              </div>
              <div className="service-content">
                <p>
                  Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-xl-4 col-lg-6 col-md-6 cursor-pointer"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <div className="service-box text-center mb-30">
              <div className="service-thumb">
                <FaShopify size={40} color="orange" />
              </div>
              <div className="service-content">
                <p>
                  Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose (injected humour and the like).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
