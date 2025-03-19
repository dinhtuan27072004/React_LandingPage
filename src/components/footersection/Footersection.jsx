import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS của AOS
import "./Footersection.scss";

const Footersection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Khởi tạo AOS với thời gian hiệu ứng là 1 giây
  }, []);

  return (
    <div className="wrapper" data-aos="fade-up">
      <div className="wrapper__footer">
        <div className="footer__rounded" data-aos="zoom-in">
          <div className="rounded__inline">
            <div className="inline__effect">
              <div className="effect__input" data-aos="fade-right">
                <input type="text" placeholder="FULL NAME" required />
                <input type="email" placeholder="E-mail Address" required />
              </div>
              <div className="effect__message" data-aos="fade-left">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <div className="effect__button" data-aos="flip-up">
                <button type="submit">SEND MESSAGE NOW</button>
              </div>
            </div>
            <div className="inline__row">
              <div className="row__margin" data-aos="fade-down">
                More About <span>Lava</span>
              </div>
              <div className="row__left" data-aos="fade-right">
                Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo
                auctor. <br />
                Duis at finibus odio. Vivamus ut pharetra arcu, in porta metus.{" "}
                <br />
                Suspendisse blandit pulvinar ligula ut elementum.
              </div>
              <div className="row__right" data-aos="fade-left">
                If you need this contact form to send email to your inbox, you
                may <br />
                follow our contact page for more detail.
              </div>
              <div className="row__icon" data-aos="zoom-in">
                <div className="icon__facebook">
                  <svg
                    width="24px"
                    height="24px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                  >
                    <path
                      d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="icon__facebook">
                  <svg
                    width="24px"
                    height="24px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#ffffff"
                  >
                    <path
                      d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="icon__facebook">in</div>
                <div className="icon__facebook">
                  <svg
                    width="24px"
                    height="24px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#ffffff"
                  >
                    <path
                      d="M12 19.51L12.01 19.4989"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2 8C8 3.5 16 3.5 22 8"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 12C9 9 15 9 19 12"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8.5 15.5C10.7504 14.1 13.2498 14.0996 15.5001 15.5"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="icon__facebook">
                  <svg
                    width="24px"
                    height="24px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#ffffff"
                  >
                    <path
                      d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M16.6726 20.8435C15.5 14 12.5 8.00003 8.5 2.62964"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2.06653 10.8406C6.00004 11 15.2829 10.5 19.1415 5"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M21.9677 12.81C15.3438 10.8407 7.50002 14.0001 5.23145 19.3613"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__static" data-aos="fade-up">
          <div className="static__nav">
            Copyright © 2020 Lava Landing Page | Designed by TemplateMo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footersection;
