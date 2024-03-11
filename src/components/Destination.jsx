import { motion } from "framer-motion";
import "../App.css";

const Destination = () => {
  return (
    <section
      data-scroll
      data-scroll-speed="5"
      data-scroll-call="bg-light-green"
      data-scroll-repeat
      id="destination"
    >
      <div id="stick2">
        <motion.h2
          initial={{ opacity: 0 }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          whileInView={{
            opacity: 1,
          }}
          data-scroll
          data-scroll-speed="5"
          data-scroll-sticky
          data-scroll-target="#stick2"
        >
          Our Top Picks For You
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.25,
          }}
          whileInView={{
            opacity: 1,
          }}
        >
          <div data-scroll data-scroll-speed="5">
            <span>Search</span>
            <img src="/images/barcelona.webp" alt="" />
            <span>Barcelona, Spain</span>
          </div>
          <div data-scroll data-scroll-speed="2">
            <span>Search</span>
            <img src="/images/venice.webp" alt="" />
            <span>Venice, Italy</span>
          </div>

          <div data-scroll data-scroll-speed="1">
            <span>Search</span>
            <img src="/images/amsterdam.webp" alt="" />
            <span>Amsterdam, Netherland</span>
          </div>
        </motion.div>
      </div>
      <div data-scroll data-scroll-speed="5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consequat ornare ex, nec venenatis massa efficitur nec.
        </p>
        <button>Discover more</button>
      </div>
    </section>
  );
};

export default Destination;
