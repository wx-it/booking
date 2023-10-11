import "./app.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { MdFreeCancellation } from "react-icons/md";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <span>Booking.</span>
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
          {open && (
            <div className="mobile-links">
              <a href="">Home</a>
              <a href="">About Us</a>
              <a href="">Services</a>
              <a href="">Destination</a>
            </div>
          )}
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
{/* 
          <div>
            <div>
              <h2>Our most booked hotel</h2>
              <p>Lisbon, Portugal</p>
              <span>$500/</span>
              <span>cost</span>
            </div>
            <img src="/public/images/lisbon.jpg" alt="" />
          </div> */}

          {/* <div>
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
          </div> */}
        </div>
      </header>

      <main>
        <section>
          <span>About Us</span>
          <h2>Unlock The Art of Sophisticated Stays</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consequat ornare ex, nec venenatis massa efficitur nec. Vestibulum
            ut sem ultrices, elementum tellus at, convallis est. Vivamus
            posuere, dui ac ultrices fermentum, ligula massa porta dui, feugiat
            molestie turpis libero eu dolor. Donec aliquam libero dolor, a
            bibendum massa convallis quis.
          </p>
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
      </main>
    </>
  );
}

export default App;
