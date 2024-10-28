import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import mobile_img from "../assets/images/png/mobile_img.png";
import firstfroupimg from "../assets/images/png/firstfroupimg.png";
import secondfroupimg from "../assets/images/png/secondfroupimg.png";
import thirdfroupimg from "../assets/images/png/thirdfroupimg.png";
import clientiimg from "../assets/images/png/clientiimg.png";
import imgleft from "../assets/images/png/imgleft.png";
import rightimg from "../assets/images/png/rightimg.png";
import { ArrowIcon, EmailIcon, LineIcon } from "../components/icons/Icons";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import { useThem } from "../Context/Context";
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer"
    >
      <button className=" rotate-180 w-[46px] xl:w-[65px]">
        <ArrowIcon />
      </button>
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer"
    >
      <button className="w-[46px] xl:w-[65px]">
        <ArrowIcon />
      </button>
    </div>
  );
}

function Home() {
  const { sectionRefs } = useThem();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  //  ref={(el) => (sectionRefs.current[3] = el)}

  return (
    <div>
      <section className="bg-[#F3F8FA]  relative overflow-hidden">
        <img className=" absolute top-0 left-0" src={imgleft} alt="imgleft" />
        <img
          className=" absolute top-0 right-0"
          src={rightimg}
          alt="rightimg"
        />
        <div className="container  xl:max-w-[1328px] mx-auto px-3 justify-between xl:min-h-screen flex flex-col relative z-40">
          <div>
            <Navbar />
          </div>
          <div className="mt-[90px] pt_30">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h1 className="ff_promt text-[30px] lg:text-[60px]  xl:text-[90px] font-normal text-[#292727]">
                Learn Entertain Grow
              </h1>
              <p className="font-normal text-base md:text-[22px] text-[#292727]  xl:w-[70%] mx-auto mt-2 !leading-[28px]">
                Salad neque ut faucibus feugiat arcu enim augue sodales.
                Maecenas mattis elementum pretium arcu eget eget.
              </p>
              <div className="mt-5 md:mt-[35px]">
                <NavLink
                  to={"/subscriptions"}
                  className="text-base  xl:text-xl font-normal text-white bg-[#B99976] rounded-[5px] py-[10px]  px-5"
                >
                  Check our apps
                </NavLink>
              </div>
            </div>

            <div
              className=" mt-16  xl:mt-[45px] relative"
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
            >
              {/* <Slider {...settings} className="flex items-center">
                {[1, 2, 3, 4, 5].map((i, index) => (
                  <div key={index}>
                    <div className=" text-center  xl:w-[1100px] mx-auto">
                      <img
                        className="w-[80%] mx-auto  md:w-full"
                        src={mobile_img}
                        alt="mobile_img"
                      />
                    </div>
                  </div>
                ))}
              </Slider> */}
              <div className=" text-center  xl:w-[1100px] mx-auto">
                <img
                  className="w-[80%] mx-auto  md:w-full"
                  src={mobile_img}
                  alt="mobile_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /////////     Tech History      //////// */}
      <section className=" overflow-hidden">
        <div className="container  xl:max-w-[1328px] mx-auto px-3">
          <div
            className=" py-[60px] md:py-[100px]  xl:py-[150px]"
            ref={(el) => (sectionRefs.current[1] = el)}
          >
            <div className=" flex items-center justify-between gap-10 sm:gap-20 lg:gap-10 flex-wrap lg:flex-nowrap">
              <div
                className=" w-full lg:w-6/12 xl:w-6/12 text-center sm:text-start"
                data-aos="zoom-in-up"
              >
                <div className=" xl:w-[91%]">
                  <h2 className=" font-semibold text-[30px] sm:text-[35px] xl:text-[45px] ff_promt text-[#B99976]">
                    Tech History
                  </h2>
                  <p className=" text-[20px] sm:text-[28px] xl:text-[33px] font-normal text-[#292727] mt-6 xl:mt-[35px]">
                    This app presents the most popular technologies worthy of
                    learning and{" "}
                    <span className=" font-medium text-[#B99976] text-[22px] sm:text-3xl xl:text-[38px]">
                      applying on your projects.
                    </span>{" "}
                  </p>
                  <p className=" font-normal text-base sm:text-lg xl:text-xl text-[#292727] mt-5 xl:!leading-[32px]">
                    Just select the necessary filters required for your
                    necessities and choose the tool that best suits you!
                  </p>
                  <p className=" font-normal text-base sm:text-lg xl:text-xl text-[#292727] mt-5 xl:!leading-[32px]">
                    The app also plays an educational role - you will see the
                    history of releases, a short description, and other
                    information. If you already know some instruments, you will
                    probably be interested in learning about its competitors.
                  </p>
                  <p className=" font-normal text-base sm:text-lg xl:text-xl text-[#292727] mt-5 xl:!leading-[32px]">
                    We hope that this app will also help you to prepare for
                    technical interviews by refreshing your knowledge.
                  </p>
                </div>
              </div>
              <div
                className=" w-full lg:w-6/12 xl:w-5/12"
                data-aos="zoom-in-up"
              >
                <div>
                  <img width={"100%"} src={firstfroupimg} alt="firstfroupimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ///////    ML Summary      ////// */}
      <section className=" overflow-hidden">
        <div className="bg-[#B99976]">
          <div
            className=" py-[60px] md:py-[80px] container  xl:max-w-[1328px] mx-auto px-3 "
            ref={(el) => (sectionRefs.current[2] = el)}
          >
            <div className=" flex items-center justify-between gap-10 sm:gap-20 lg:gap-10 flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap">
              <div
                className=" w-full lg:w-6/12 xl:w-5/12"
                data-aos="zoom-in-left"
              >
                <div>
                  <img
                    width={"100%"}
                    src={secondfroupimg}
                    alt="secondfroupimg"
                  />
                </div>
              </div>
              <div
                className=" w-full lg:w-6/12 xl:w-6/12 text-center sm:text-start"
                data-aos="zoom-in-right"
              >
                <div className="xl:w-[91%]">
                  <h2 className=" font-semibold text-[30px] sm:text-[35px] xl:text-[45px] ff_promt text-white">
                    ML Summary
                  </h2>
                  <p className=" text-[20px] sm:text-[28px] xl:text-[33px] font-medium text-white mt-6 xl:mt-[35px]">
                    This app will help developers, data scientists, analysts,
                    engineers and other data-people{" "}
                    <span className=" font-normal  text-base sm:text-lg xl:text-xl text-white">
                      to define the appropriate algorithm for their task.
                    </span>{" "}
                  </p>

                  <p className=" font-normal text-base sm:text-lg xl:text-xl text-white mt-5 xl:!leading-[32px]">
                    The app contains most popular approaches to solve common
                    machine learning tasks - Decision trees, Regressions etc.
                    There are descriptions, pros and cons and code examples for
                    each method. Algorithms are grouped by topics -
                    classification, forecasting etc.
                  </p>
                  <p className=" font-normal text-base sm:text-lg xl:text-xl text-white mt-5 xl:!leading-[32px]">
                    It will be useful to refresh knowledge before technical
                    interview in a company, for hackathons and in the beginning
                    of new project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //////    Space Puzzle   ///////  */}
      <section className=" overflow-hidden">
        <div className="container  xl:max-w-[1328px] mx-auto px-3">
          <div className=" py-[60px] md:py-[100px]  xl:py-[150px]">
            <div className=" flex items-center justify-between gap-10 sm:gap-20 lg:gap-10 flex-wrap lg:flex-nowrap">
              <div
                className=" w-full lg:w-6/12 xl:w-6/12 text-center sm:text-start"
                data-aos="zoom-in-right"
                ref={(el) => (sectionRefs.current[3] = el)}
              >
                <div className=" xl:w-[91%]">
                  <h2 className=" font-semibold text-[30px] sm:text-[35px] xl:text-[45px] ff_promt text-[#B99976]">
                    Space Puzzle
                  </h2>
                  <p className=" text-[20px] sm:text-[28px] xl:text-[33px] font-normal text-[#292727] mt-6 xl:mt-[35px]">
                    Classical block puzzle in new pack!{" "}
                    <span className=" font-medium text-[#B99976] text-[22px] sm:text-3xl xl:text-[38px]">
                      Enjoy Music, Animations, Victories!
                    </span>{" "}
                  </p>
                  <p className=" font-normal text-base sm:text-lg xl:text-xl text-[#292727] mt-5 xl:!leading-[32px]">
                    The goal of the game is to collect blocks in vertical or
                    horizontal row. After row is completed, it disappears and
                    gives bonus points to player. Win as much bonuses as
                    possible!
                  </p>
                  <div>
                    <h4 className="font-medium mt-4 text-base sm:text-lg xl:text-xl text-[#292727]">
                      The game has 3 regimes
                    </h4>
                    <div className=" marker:text-[#B99976]">
                      <div className=" flex items-start">
                        <div>
                          <div className="h-[8px] w-[8px] bg-[#B99976] rounded-full mt-6"></div>
                        </div>
                        <p className="font-normal mt-4 text-base ps-2 sm:ps-3 sm:text-lg xl:text-xl text-[#292727]">
                          <span className="text-[#B99976]">Classic</span> - Play
                          for rest. Designed for improvement strategy skills
                        </p>
                      </div>
                      <div className=" flex items-start">
                        <div>
                          <div className="h-[8px] w-[8px] bg-[#B99976] rounded-full mt-6"></div>
                        </div>
                        <p className="font-normal mt-4 text-base ps-2 sm:ps-3 sm:text-lg xl:text-xl text-[#292727]">
                          <span className="text-[#B99976]">Timer</span> - Play
                          for fun. Best for brain speed training.
                        </p>
                      </div>
                      <div className=" flex items-start">
                        <div>
                          <div className="h-[8px] w-[8px] bg-[#B99976] rounded-full mt-6"></div>
                        </div>
                        <p className="font-normal mt-4 text-base ps-2 sm:ps-3 sm:text-lg xl:text-xl text-[#292727]">
                          <span className="text-[#B99976]">Blast</span> - Play
                          for interest. Additional difficulty for advanced
                          players!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" w-full lg:w-6/12 xl:w-5/12"
                data-aos="zoom-in-left"
              >
                <div>
                  <img width={"100%"} src={thirdfroupimg} alt="thirdfroupimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ////   client    //// */}

      <section className=" overflow-hidden">
        <div className="container  xl:max-w-[1328px] mx-auto px-3 pt-[5px] md:pt-0">
          <div className=" pb-[60px] md:pb-[100px]  xl:pb-[150px]">
            <div className=" flex items-end justify-between gap-10 flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap">
              <div className=" w-full lg:w-5/12" data-aos="zoom-out-right">
                <img
                  className=" rounded-full lg:rounded-none"
                  width={"100%"}
                  src={clientiimg}
                  alt="clientiimg"
                />
              </div>
              <div
                className=" w-full lg:w-6/12 text-center md:text-start"
                data-aos="zoom-out-left"
              >
                <div>
                  <div className=" flex justify-center md:justify-start">
                    <LineIcon />
                  </div>
                  <p className=" font-medium text-[25px] sm:text-[28px] xl:text-[35px] text-[#292727] italic my-6">
                    Study diligently, learn continuously, and entertain your
                    curiosity; for the blend of knowledge and joy is the essence
                    of a happy life
                  </p>
                  <h6 className=" font-normal text-[22px] sm:text-2xl xl:text-[32px]  ff_promt pt-2">
                    Ilia Gerasimov
                  </h6>
                  <p className=" text-base sm:text-xl ff_promt font-normal text-[#292727] opacity-65 mt-1">
                    Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" flex justify-center bg-[#B99976]">
        <p className=" flex gap-2 items-center text-white font-normal text-base md:text-[22px]  py-4">
          <span>
            {" "}
            <EmailIcon />
          </span>
          sel.pagi.comp@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Home;
