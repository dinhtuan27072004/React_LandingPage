import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS của AOS
import "./Featuressection.scss";
import logo from "../../assets/left-image.png";
import nav from "../../assets/about-icon-01.png";

const Featuressection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Khởi tạo AOS với thời gian 1 giây
  }, []);

  return (
    <div className="container">
      <div className="container__primary" data-aos="fade-up">
        <div className="primary__fixed">
          <div className="fixed__img" data-aos="fade-right">
            <img src={logo} alt="" />
          </div>
          <div className="fixed__secondary">
            <div className="secondary__top" data-aos="fade-left">
              <div className="top__muted">
                <img src={nav} alt="" />
              </div>
              <div className="top__hidden">
                <div className="hidden__left">Vestibulum pulvinar rhoncus</div>
                <div className="hidden__right">
                  Please do not redistribute this template ZIP file for a <br />
                  download purpose. You may <span>contact</span> us for
                  additional <br /> licensing of our template or to get a PSD
                  file.
                </div>
              </div>
            </div>
            <div
              className="secondary__top"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="top__muted">
                <img src={nav} alt="" />
              </div>
              <div className="top__hidden">
                <div className="hidden__left">Sed blandit quam in velit</div>
                <div className="hidden__right">
                  You can <span>download Lava Template</span> from our website.{" "}
                  <br /> Duis viverra, ipsum et scelerisque placerat, orci{" "}
                  <br /> magna consequat ligula.
                </div>
              </div>
            </div>
            <div
              className="secondary__top"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="top__muted">
                <img src={nav} alt="" />
              </div>
              <div className="top__hidden">
                <div className="hidden__left">Aenean faucibus venenatis</div>
                <div className="hidden__right">
                  Phasellus in imperdiet felis, eget vestibulum nulla. <br />{" "}
                  Aliquam nec dui nec augue maximus porta. Curabitur <br />{" "}
                  tristique lacus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuressection;
