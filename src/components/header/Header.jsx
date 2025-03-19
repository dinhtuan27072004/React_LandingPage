import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS của AOS
import "./Header.scss";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Khởi tạo AOS
  }, []);

  return (
    <div className="container">
      <div className="container__header">
        <div className="header__nav">
          <div className="nav__logo">LAVA</div>
          <div className="nav__menu">
            <div className="menu__home">Home</div>
            <div className="menu__about">About</div>
            <div className="menu__testimonials">
              <a href="testimonials__item">Drop Down</a>
            </div>
            <div className="menu__drop">Testimonials</div>
            <div className="menu__contact">Contact Us</div>
          </div>
        </div>
        <div className="header__button">
          <div className="button__card" data-aos="fade-right">
            Simple App that <br /> we
            <span className="card__title"> CREATE</span>
          </div>
          <div className="button__item" data-aos="fade-left">
            Lava <span className="item__form">HTML landing page</span> template
            is provided by
            <span className="item__form"> TemplateMo.</span> <br /> You can
            modify and use it for your commercial websites for <br /> free of
            charge. This template is last updated on 29 Oct 2019.
          </div>
          <div className="button__primary" data-aos="zoom-in">
            <button>KNOW US BETTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
