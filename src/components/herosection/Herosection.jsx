import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Herosection.scss";
import logo from "../../assets/download.png";
import nav from "../../assets/features-icon-2.png";
import item from "../../assets/features-icon-3.png";

const Herosection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Khởi tạo AOS với hiệu ứng 1s và chỉ chạy 1 lần
  }, []);

  return (
    <div className="container">
      <div className="container__center">
        {/* Feature 1 */}
        <div className="center__features" data-aos="fade-up">
          <div className="features__icon">
            <div className="icon__item">
              <div className="item__left">01</div>
              <div className="item__shadow">
                <div className="shadow__row">
                  <img src={logo} alt="logo" />
                </div>
                <div className="shadow__col">Trend Analysis</div>
                <div className="shadow__block">
                  Curabitur pulvinar vel odio sed <br /> sagittis. Nam maximus
                  ex <br />
                  diam, nec consectetur diam.
                </div>
                <div className="shadow__width">
                  <button className="width__nav"> Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div
          className="center__features"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="features__icon">
            <div className="icon__item">
              <div className="item__left">02</div>
              <div className="item__shadow">
                <div className="shadow__row">
                  <img src={nav} alt="logo" />
                </div>
                <div className="shadow__col">Trend Analysis</div>
                <div className="shadow__block">
                  Curabitur pulvinar vel odio sed <br /> sagittis. Nam maximus
                  ex <br />
                  diam, nec consectetur diam.
                </div>
                <div className="shadow__width">
                  <button className="width__nav"> Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div
          className="center__features"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="features__icon">
            <div className="icon__item">
              <div className="item__left">03</div>
              <div className="item__shadow">
                <div className="shadow__row">
                  <img src={item} alt="logo" />
                </div>
                <div className="shadow__col">Email Design</div>
                <div className="shadow__block">
                  Curabitur pulvinar vel odio sed <br /> sagittis. Nam maximus
                  ex <br />
                  diam, nec consectetur diam.
                </div>
                <div className="shadow__width">
                  <button className="width__nav"> More Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
