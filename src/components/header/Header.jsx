import "./Header.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="container__header">
        <div className="header__nav">
          <div className="nav__logo">LAVA</div>
          <div className="nav__menu">
            <div className="menu__home">Home</div>
            <div className="menu__about">About</div>
            <div className="menu__testimonials">
              <a href="testimonials__item"> Drop Down</a>
              {/* <li>About Us</li>
              <li>FEATURES</li>
              <li>FAQ'S</li>
              <li>BLOG</li> */}
            </div>
            <div className="menu__drop">Testimonials</div>
            <div className="menu__contact">Contact Us</div>
          </div>
        </div>
        <div className="header__button">
          <div className="button__card">
            Simple App that <br /> we
            <span className="card__title">CREATE</span>
          </div>
          <div className="button__item">
            Lava <span className="item__form">HTML landing page</span> template
            is provided by
            <span className="item__form">TemplateMo.</span> <br /> You can
            modify and use it for your commercial websites for <br /> free of
            charge. This template is last updated on 29 Oct 2019.
          </div>
          <div className="button__primary">
            <button>KNOW US BETTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
