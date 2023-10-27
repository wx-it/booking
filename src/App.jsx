import "./app.css";
import Hamburger from "hamburger-react";
import { useState, useEffect, useRef } from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaSearch } from "react-icons/fa";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { animated, useSpring } from "@react-spring/web";
import About from "./components/About";
import Services from "./components/Services";
import Destination from "./components/Destination";
import Discount from "./components/Discount";

function App() {
  const [open, setOpen] = useState(false);

  const containerRef = useRef();

  useEffect(() => {
    const scroller = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    scroller.on("call", (value, way) => {
      if (way === "enter") {
        switch (value) {
          case "bg-white":
            document.querySelector("body").style.backgroundColor = "#ffff";
            break;
          case "bg-light-blue":
            document.querySelector("body").style.backgroundColor = "#F6FFFC";
            break;
          case "bg-light-green":
            document.querySelector("body").style.backgroundColor = "#F1FFF4";
            break;
          case "colorBlack":
            document.querySelector("body").style.backgroundColor = "#ffff";
            break;
        }
      }
    });
  }, []);

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: 200 },
    config: { duration: 2000 }, // Duration in milliseconds
  });

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        inertia: 0.8,
        getDirection: true,
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
      onLocationChange={(scroll) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      } // If you want to reset the scroll position to 0 for example
      onUpdate={() => console.log("Updated, but not on location change!")} // Will trigger on
    >
      <main data-scroll-container ref={containerRef}>
        <div data-scroll-section>
          <header>
            <motion.nav
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 3,
                stiffness: 50,
                restDelta: 0.001,
              }}
            >
              <span>Booking.</span>
              <button className="hamburger">
                <Hamburger
                  size={20}
                  hideOutline={false}
                  onToggle={(toggled) => {
                    if (toggled) {
                      setOpen(true);
                    } else {
                      setOpen(false);
                    }
                  }}
                />
              </button>
              {open && (
                <div className="mobile-links">
                  <a href="">Home</a>
                  <a href="">About Us</a>
                  <a href="">Services</a>
                  <a href="">Destination</a>
                </div>
              )}

              <div className="desktop-links">
                <a href="" className="link">
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">Home</span>
                      <span className="link-title2 title">Home</span>
                    </div>
                  </span>
                </a>
                <a href="#about" className="link">
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">About Us</span>
                      <span className="link-title2 title">About Us</span>
                    </div>
                  </span>
                </a>
                <a href="#services" className="link">
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">Services</span>
                      <span className="link-title2 title">Services</span>
                    </div>
                  </span>
                </a>
                <a href="#destination" className="link">
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">Destination</span>
                      <span className="link-title2 title">Destination</span>
                    </div>
                  </span>
                </a>
              </div>

              <div className="desktop-nav-btns">
                <button>
                  <FaSearch />
                </button>
                <button className="link">
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">Book</span>
                      <span className="link-title2 title">Book</span>
                    </div>
                  </span>
                </button>
              </div>
            </motion.nav>

            <div className="content">
              <div>
                <div data-scroll data-scroll-speed="5" data-scroll-delay="0.04">
                  <animated.span>
                    {number.interpolate((num) => `${Math.floor(num)}+`)}
                  </animated.span>
                  <span>Happy costumers</span>
                </div>

                <div data-scroll data-scroll-speed="5" data-scroll-delay="0.08">
                  <span>1K+</span>
                  <span>Property options</span>
                </div>
              </div>

              <div>
                <motion.p
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    damping: 3,
                    stiffness: 50,
                    restDelta: 0.001,
                    delay: 1,
                  }}
                  data-scroll
                  data-scroll-speed="3"
                  data-scroll-position="top"
                >
                  We're here 24/7 for all your booking needs! Reliable and
                  satisfaction assured. Reach out via email anytime
                </motion.p>

                <motion.h1
                  data-scroll
                  data-scroll-speed="2"
                  initial={{ opacity: 0, y: 200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    damping: 3,
                    stiffness: 50,
                    restDelta: 0.001,
                    delay: 1.5,
                  }}
                >
                  Discover Extraordinary Comfort in Hotels
                </motion.h1>
              </div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  damping: 3,
                  stiffness: 50,
                  restDelta: 0.001,
                  delay: 2,
                }}
              >
                <motion.div whileHover={{ scale: 1.05, border: "none" }}>
                  <div>
                    <span>Book your stay</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                    >
                      <path
                        d="M1.65947 0.248271C1.2443 -0.115946 0.612487 -0.0746404 0.248271 0.340528C-0.115946 0.755697 -0.0746404 1.38751 0.340528 1.75173L1.65947 0.248271ZM16.0998 15.1873C16.6509 15.1513 17.0685 14.6753 17.0325 14.1242L16.4453 5.14337C16.4093 4.59226 15.9333 4.17471 15.3822 4.21074C14.8311 4.24677 14.4136 4.72273 14.4496 5.27384L14.9715 13.2568L6.98852 13.7787C6.43741 13.8147 6.01986 14.2907 6.05589 14.8418C6.09192 15.3929 6.56789 15.8105 7.11899 15.7744L16.0998 15.1873ZM0.340528 1.75173L15.3751 14.9412L16.6941 13.4377L1.65947 0.248271L0.340528 1.75173Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              <div>
                <motion.div
                  data-scroll
                  data-scroll-speed="2"
                  data-scroll-position="top"
                  data-scroll-direction="vertical"
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    damping: 3,
                    stiffness: 50,
                    restDelta: 0.001,
                    delay: 2.5,
                  }}
                >
                  <div>
                    <h2>Our most booked hotel</h2>
                    <p>Lisbon, Portugal</p>
                    <span>$500/</span>
                    <span>cost</span>
                  </div>
                  <img src="/public/images/lisbon.jpg" alt="" />
                </motion.div>

                <motion.div
                  data-scroll
                  data-scroll-speed="2"
                  data-scroll-position="top"
                  data-scroll-direction="vertical"
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    damping: 3,
                    stiffness: 50,
                    restDelta: 0.001,
                    delay: 3,
                  }}
                >
                  <h2>Discover our services</h2>
                  <motion.div
                    initial={{ y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      damping: 3,
                      stiffness: 50,
                      restDelta: 0.001,

                      delay: 3.5,
                    }}
                  >
                    <p>Free cancelation</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="15"
                      viewBox="0 0 32 15"
                      fill="none"
                    >
                      <path
                        d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM31.7071 8.20711C32.0976 7.81658 32.0976 7.18342 31.7071 6.79289L25.3431 0.428932C24.9526 0.0384078 24.3195 0.0384078 23.9289 0.428932C23.5384 0.819457 23.5384 1.45262 23.9289 1.84315L29.5858 7.5L23.9289 13.1569C23.5384 13.5474 23.5384 14.1805 23.9289 14.5711C24.3195 14.9616 24.9526 14.9616 25.3431 14.5711L31.7071 8.20711ZM1 8.5H31V6.5H1V8.5Z"
                        fill="black"
                      />
                    </svg>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: "spring",
                      damping: 3,
                      stiffness: 50,
                      restDelta: 0.001,
                      delay: 4,
                    }}
                  >
                    <p>Price guarantee</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="15"
                      viewBox="0 0 32 15"
                      fill="none"
                    >
                      <path
                        d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM31.7071 8.20711C32.0976 7.81658 32.0976 7.18342 31.7071 6.79289L25.3431 0.428932C24.9526 0.0384078 24.3195 0.0384078 23.9289 0.428932C23.5384 0.819457 23.5384 1.45262 23.9289 1.84315L29.5858 7.5L23.9289 13.1569C23.5384 13.5474 23.5384 14.1805 23.9289 14.5711C24.3195 14.9616 24.9526 14.9616 25.3431 14.5711L31.7071 8.20711ZM1 8.5H31V6.5H1V8.5Z"
                        fill="black"
                      />
                    </svg>
                  </motion.div>
                </motion.div>

                <div>
                  <div>
                    <animated.span>
                      {number.interpolate((num) => `${Math.floor(num)}+`)}
                    </animated.span>
                    <span>Happy costumers</span>
                  </div>

                  <div>
                    <span>1K+</span>
                    <span>Property options</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main>
            <About />

            <Services />

            <Destination />

            <Discount />
          </main>

          <footer data-scroll>
            <div>
              <span>Booking.</span>
              <div>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Services</a>
                <a href="">Destination</a>
              </div>

              <div>
                <FaTwitter className="icon" />
                <FaFacebook className="icon" />
                <FaInstagram className="icon" />
              </div>
            </div>
            <span data-scroll data-scroll-speed="5">
              BOOKING
            </span>
            <img src="/public/images/footer.jpg" alt="" />
          </footer>
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
