import { motion } from "framer-motion";
import "../App.css";

const Discount = () => {
  return (
    <section data-scroll data-scroll-call="bg-white" data-scroll-repeat>
              <h2
                data-scroll
                data-scroll-speed="5"
                data-scroll-direction="horizontal"
              >
                Claim Exciting Discounts For New Costumers
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                transition={{
                  type: "spring",
                  duration: 2,
                  delay: 0.25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
              >
                Book a room today and claim discounts designed just for our new
                costumers. Don't miss out on our special offers!
              </motion.p>
              <motion.button
                className="link"
                initial={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  duration: 2,
                  delay: 0.75,
                }}
                whileInView={{
                  opacity: 1,
                }}
              >
                <span className="mask">
                  <div className="link-container">
                    <span className="link-title1 title">Book Now</span>
                    <span className="link-title2 title">Book Now</span>
                  </div>
                </span>
              </motion.button>
            </section>
  )
}

export default Discount