import "./Featuressection.scss";
import logo from "../../assets/left-image.png";
import nav from "../../assets/about-icon-01.png";

const Featuressection = () => {
  return (
    <div className="container">
      <div className="container__primary">
        <div className="primary__fixed">
          <div className="fixed__img">
            <img src={logo} alt="" />
          </div>
          <div className="fixed__secondary">
            <div className="secondary__top">
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
            <div className="secondary__top">
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
            <div className="secondary__top">
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
            {/* <div className="secondary__border">
             
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuressection;
