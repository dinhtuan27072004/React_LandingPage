import { useState, useEffect } from "react";
import "./Testimonialssection.scss";
import img from "../../assets/testimonial-author-1.png";

const testimonials = [
  {
    name: "George Tasa",
    stars: "★★★",
    review:
      "Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec quam dolor, congue a fringilla sed, maximus et urna.",
    role: "System Admin",
    img: img,
  },
  {
    name: "Martino Tino",
    stars: "★★★★★",
    review:
      "Morbi non mi luctus felis molestie scelerisque. In ac libero viverra, placerat est interdum, rhoncus leo.",
    role: "Web Analyst",
    img: img,
  },
  {
    name: "Sir James",
    stars: "★★★★",
    review:
      "Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec quam dolor, congue a fringilla sed, maximus et urna.",
    role: "New Villager",
    img: img,
  },
  {
    name: "Jonathan Smart",
    stars: "★★★★★",
    review:
      "Nullam hendrerit, elit a semper pharetra, ipsum nibh tristique tortor, in tempus urna elit in mauris.",
    role: "Besta CTO",
    img: img,
  },
];

const extendedTestimonials = [
  ...testimonials,
  testimonials[0],
  testimonials[1],
];

const Testimonialssection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleNext = () => {
    if (currentIndex >= testimonials.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(2);
      }, 50);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 2);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(testimonials.length - 2);
      }, 50);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 2);
    }
  };

  return (
    <div className="container">
      <div className="container__none">
        <div className="none__rounded">
          <div className="rounded__static">
            What They Think <span>About Us</span>
          </div>
          <div className="rounded__fixed">
            Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod
            purus non, convallis odio. Donec vitae magna ornare, pellentesque ex
            vitae, aliquet urna.
          </div>
        </div>

        <div className="none__weight">
          <div className="weight__border">
            <div
              className="border__container"
              style={{
                transform: `translateX(-${(currentIndex / 2) * 100}%)`,
                transition: isTransitioning
                  ? "transform 0.5s ease-in-out"
                  : "none",
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div className="border__opacity" key={index}>
                  <div className="opacity__img">
                    <img src={testimonial.img} alt={testimonial.name} />
                  </div>
                  <div className="opacity__review">
                    <div className="review__top">
                      <div className="top__grid">{testimonial.stars} </div>
                      <div className="top__flex">{testimonial.name}</div>
                      <div className="top__block">"{testimonial.review}"</div>
                      <div className="top__fixed">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="weight__button">
            <div className="button__nav">
              <button className="nav__left" onClick={handlePrev}>
                &#8249;
              </button>
            </div>
            <div className="button__item">
              <button className="item__right" onClick={handleNext}>
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonialssection;
