import { motion } from "framer-motion";
import "../App.css";

const Services = () => {
  return (
    <section
      data-scroll
      data-scroll-speed="5"
      data-scroll-call="bg-light-blue"
      data-scroll-repeat
      id="services"
    >
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        transition={{
          type: "spring",
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        Services
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.25,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        Our Best Facilities For You
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        consequat ornare ex, nec venenatis massa efficitur nec.
      </motion.p>

      <div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <h3>Free cancelation</h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.5,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <h3>Price guarantee</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.75,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <h3>Safe booking</h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
