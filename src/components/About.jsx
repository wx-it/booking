import { motion } from "framer-motion";
import "../App.css";

const About = () => {
  return (
    <section
      id="about"
      data-scroll
      data-scroll-speed="5"
      data-scroll-call="bg-white"
      data-scroll-repeat
    >
      <span
        data-scroll
        data-scroll-speed="5"
        data-scroll-sticky
        data-scroll-target="#about"
      >
        About Us
      </span>
      <div>
        <h2>Unlock The Art of Sophisticated Stays</h2>
        <div>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            transition={{
              type: "spring",
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
          >
            Welcome to our premier hotel booking agency
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 0.5,
            }}
            viewport={{
              once: true,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
          >
            connecting you to top-notch accommodations worldwide
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 1,
            }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
          >
            With a vast array of choices, from luxury resorts to cozy inns,
            you're sure to find the perfect stay for your travels.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 1.5,
            }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
          ></motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 1.75,
            }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
          >
            Our easy-to-use platform simplifies the booking process, making it a
            breeze to secure your ideal room
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            transition={{
              type: "spring",
              duration: 1,
              delay: 2,
            }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
          >
            Experience stress-free planning and embark on memorable journeys.
            Your comfort and convenience are our top priorities
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default About;
