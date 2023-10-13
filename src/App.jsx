import "./app.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { MdFreeCancellation } from "react-icons/md";
import { FaTwitter, FaFacebook, FaInstagram, FaSearch } from "react-icons/fa";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
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
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Services</a>
            <a href="">Destination</a>
          </div>

          <div className="desktop-nav-btns">
            <button>
              <FaSearch />
            </button>
            <button>Book</button>
          </div>
        </nav>

        <div className="content">
          <div>
            <div>
              <span>200+</span>
              <span>Happy costumers</span>
            </div>

            <div>
              <span>1K+</span>
              <span>Property options</span>
            </div>
          </div>

          <div>
            <p>
              We are available for your awesome projects! Affordable and
              satisfaction guaranteed. Just shoot us an email
            </p>

            <h1>Discover Extraordinary Comfort in Hotels</h1>
          </div>

          <div>
            <div>
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
            </div>
          </div>

          <div>
            <div>
              <div>
                <h2>Our most booked hotel</h2>
                <p>Lisbon, Portugal</p>
                <span>$500/</span>
                <span>cost</span>
              </div>
              <img src="/public/images/lisbon.jpg" alt="" />
            </div>

            <div>
              <h2>Discover our services</h2>
              <div>
                <p>Travel Plan</p>
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
              </div>

              <div>
                <p>Bar & Drink</p>
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
              </div>
            </div>

            <div>
              <div>
                <span>200+</span>
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
        <section>
          <div>
            <span>About Us</span>
            <h2>Unlock The Art of Sophisticated Stays</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consequat ornare ex, nec venenatis massa efficitur nec. Vestibulum
              ut sem ultrices, elementum tellus at, convallis est. Vivamus
              posuere, dui ac ultrices fermentum, ligula massa porta dui,
              feugiat molestie turpis libero eu dolor. Donec aliquam libero
              dolor, a bibendum massa convallis quis.
            </p>
          </div>
          <div>
            <img src="/public/images/about-1.jpg" alt="" />
            <img src="/public/images/about-2.jpg" alt="" />
          </div>
        </section>

        <section>
          <span>Services</span>
          <h2>Our Best Facilities For You</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consequat ornare ex, nec venenatis massa efficitur nec.
          </p>

          <div>
            <div>
              <div>
                <MdFreeCancellation />
              </div>
              <div>
                <h3>Free cancelation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div>
              <div>
                <MdFreeCancellation />
              </div>
              <div>
                <h3>Free cancelation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div>
              <div>
                <MdFreeCancellation />
              </div>
              <div>
                <h3>Free cancelation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Our Top Picks For You</h2>
          <div>
            <div>
              <div>
                <span>Search</span>
                <img src="/public/images/barcelona.jpg" alt="" />
                <span>Barcelona, Spain</span>
              </div>
              <div>
                <span>Search</span>
                <img src="/public/images/venice.jpg" alt="" />
                <span>Venice, Italy</span>
              </div>

              <div>
                <span>Search</span>
                <img src="/public/images/amsterdam.jpg" alt="" />
                <span>Amsterdam, Netherland</span>
              </div>
            </div>
            <h2>Our Top Picks For You</h2>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consequat ornare ex, nec venenatis massa efficitur nec.
            </p>
            <button>Discover more</button>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div>
            <span>Booking.</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consequat ornare ex, nec venenatis massa efficitur nec.
            </p>
          </div>
          <div>
            <span>Navigation</span>
            <div>
              <a href="">Home</a>
              <a href="">About Us</a>
              <a href="">Services</a>
              <a href="">Destination</a>
            </div>
          </div>

          <div>
            <span>Contact Us</span>
            <div>
              <a href="">+123 456 789</a>
              <a href="">info@booking.com</a>
              <a href="">booking.com</a>
            </div>
          </div>
        </div>

        <div>
          <span>All Rights Reserved</span>
          <div>
            <FaTwitter className="icon" />
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
