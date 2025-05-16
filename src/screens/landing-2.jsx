import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Btn from "../components/other/btn";
import Header from "../components/other/header";
import images from "../components/theme/imagesPath";
import Footer from "../components/other/footer";
import Features from "../components/pages/features";
import Brands from "../components/pages/brands";
import { useModal } from "../components/pages/ModalContext";
import SearchBar from "./searchBar";
import ExpandableServicesBox from "../components/pages/expandableBox";
import useFitText from "../hooks/useFit";
import { useNavigate } from "react-router-dom";
import { data } from "../components/servicesContent";

gsap.registerPlugin(ScrollTrigger, CSSPlugin);
ScrollTrigger.config({
  invalidateOnRefresh: true,
});

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  const infinityLogoRef = useRef(null);
  const infinityAboutLogoRef = useRef(null);

  const topTitleRef = useRef(null);
  const longContentRef = useRef(null);


  const slider = useRef();

  // const animateSlideUpOnScroll = (triggerElement) => {
  //   const elements = triggerElement.querySelectorAll(".slide-up-text");

  //   elements.forEach((el, i) => {
  //     gsap.fromTo(
  //       el,
  //       { transform: "translateY(100%)", opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.2,
  //         // ease: "power3.out",
  //         // delay: i * 0.2,
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top 80%",
  //           toggleActions: "play none none reverse", // optional reverse
  //         },
  //       }
  //     );
  //   });
  // };

  // useGSAP(() => {
  //   const sections = document.querySelectorAll(".section-with-animations");

  //   sections.forEach((section) => {
  //     animateSlideUpOnScroll(section);
  //   });
  // }, []);

  // Shared rotation function
  const animateInfinityLogo = (elementRef, triggerRef) => {
    if (!elementRef?.current || !triggerRef?.current) return;

    gsap.to(elementRef.current, {
      rotation: 360,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  };

  //hero section animation
  useGSAP(() => {
    const slideUpElements = gsap.utils.toArray(".slide-up-text-hero");

    const tl = gsap.timeline({
      delay: 4,
    });

    tl.fromTo(
      slideUpElements,
      { transform: "translateY(100%)", opacity: 0 }, // Using yPercent to control the movement
      {
        transform: "translateY(0%)",
        opacity: 1,
        duration: 0.6, // Adjusted duration for smoother transition
        ease: "power4.out", // Smoother easing for less bounce
      }
    );

    // Keep your infinity logo animation
    animateInfinityLogo(infinityLogoRef, heroRef);
  }, []);

  //about section animation
  useGSAP(
    () => {
      if (!infinityAboutLogoRef.current || !aboutRef.current) return;

      // Rotation animation for infinity logo on scroll
      animateInfinityLogo(infinityAboutLogoRef, aboutRef);
    },
    { dependencies: [infinityAboutLogoRef, aboutRef] }
  );

  const [showVideoModal, setShowVideoModal] = useState(false);

  //leaf animation
  const leafRef = useRef(null);
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!leafRef.current || !circleRef.current) return;

    const leaf = leafRef.current;
    const circle = circleRef.current;

    const { left, top, width, height } = leaf.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    // Move glowing circle to cursor position
    circle.style.left = `${mouseX}px`;
    circle.style.top = `${mouseY}px`;
    circle.style.opacity = 1;

    // Calculate fast rotation
    const rotateX = (mouseY / height - 0.5) * 60;
    const rotateY = (mouseX / width - 0.5) * -60;

    // Animate with GSAP
    gsap.to(leaf, {
      rotateX,
      rotateY,
      duration: 0.2,
      ease: "power3.out",
      transformPerspective: 800,
      transformOrigin: "center center",
    });
  };

  const handleMouseLeave = () => {
    if (!leafRef.current || !circleRef.current) return;

    // Reset rotation and hide circle
    gsap.to(leafRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    circleRef.current.style.opacity = 0;
  };

  useEffect(() => {
    const leaf = leafRef.current;
    if (!leaf) return;

    leaf.addEventListener("mousemove", handleMouseMove);
    leaf.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      leaf.removeEventListener("mousemove", handleMouseMove);
      leaf.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const { openContactModal } = useModal();

  const contentSectionRef = useRef();

  // useEffect(() => {
  //   const resizeText = () => {
  //     const el = topTitleRef.current;
  //     const container = contentSectionRef.current;
  //     if (!el || !container) return;

  //     let fontSize = 100; // start big
  //     el.style.fontSize = fontSize + "px";

  //     // Shrink until it fits
  //     while (el.scrollWidth > container.clientWidth && fontSize > 1) {
  //       fontSize -= 1;
  //       el.style.fontSize = fontSize + "px";
  //     }
  //   };

  //   resizeText();
  //   window.addEventListener("resize", resizeText);
  //   return () => window.removeEventListener("resize", resizeText);
  // }, []);

  useFitText(topTitleRef, topTitleRef, 100, 10, 0.1, 15);

  const navigate = useNavigate();

  return (
    <>
      <div id="header-outer">
        <Header />
      </div>

      <section id="hero" ref={heroRef}>
        <img
          src={images.infinity_logo_transparent}
          alt="infinity_logo_transparent"
          id="infinity-logo-transparent"
          ref={infinityLogoRef}
        />

        <div id="contentSection" ref={contentSectionRef}>
          <img
            src={images.logo}
            alt="logo"
            className="logo"
          />
          <h1 className="top-title" ref={topTitleRef}>
            Your sustainable <span>utility partner</span>
          </h1>
          <p className="long-content" ref={longContentRef}>
            Driving smarter, greener utility strategies through expert
            procurement, data-led insight, and flexible support tailored to
            your operational and sustainability goals. Turning waste into power, turning responsibility into action.
          </p>

          <Btn
            className="webBtn"
            onClick={openContactModal}
            rightIcon>
            Talk to an Expert
          </Btn>

        </div>
      </section>

      <SearchBar />

      <div className="leaf" ref={leafRef}>
        <img alt="leaf" src={images.leaf} />
        <div className="glowing-circle" ref={circleRef}></div>{" "}
        {/* Glowing circle element */}
      </div>

      <section id="about" ref={aboutRef} className="section-with-animations">
        <div id="about-row">
          <div id="about-left">
            <div id="contentSectionAbout">
              <div className="slide-up">
                <div id="about-title" className="slide-up-text">
                  The mind{" "}
                  <span>
                    <img
                      src={images.infinity}
                      alt="infinity"
                      id="infinity-about"
                    />
                  </span>{" "}
                  <span id="behind">Behind</span> <span id="eden">eden</span>
                </div>
              </div>
              <div className="slide-up">
                <p className="long-content slide-up-text">
                  Mark’s expertise has shaped Eden Utilities from the ground up,
                  embedding a consultative and sustainability-first ethos into
                  the company’s foundation. Deeply aware of the changing energy
                  landscape, he understands the growing need for trusted,
                  future-focused advisory.
                  <br></br>
                  <br></br>
                  This mindset is central not just to Eden’s services, but to
                  every team member he brings on board creating a company united
                  by shared values and a long-term vision for smarter, greener
                  utilities.
                </p>
              </div>
            </div>
          </div>
          <div id="about-right">
            <div className="person-about-business">
              <div className="slide-up">
                <p className="long-content-medium slide-up-text">
                  <span><img className="view" src={images.view} /></span>
                  With over 30 years in the utilities industry, I believe in
                  honest, expert advice delivered with a personable approach,
                  focused on long-term value and sustainable solutions...<span><img className="viewBottom" src={images.viewBottom} /></span>
                </p>
              </div>


            </div>
            <div className="person-info">
              <img className="founder" alt="founder" src={images.founder} />
              <div className="slide-up">
                <p className="name slide-up-text">Mark chipol</p>
              </div>
              <div className="slide-up">
                <p className="designation slide-up-text">Founder & MD</p>
              </div>
            </div>
          </div>
          <img
            src={images.infinity_logo_transparent}
            alt="infinity_logo_transparent"
            id="infinity-logo-transparent-about"
            ref={infinityAboutLogoRef}
          />
        </div>

        <div id="about-bottom-tabs">
          <div className="person-info">
            <img
              className="person-image"
              alt='person-image"'
              src={images.person1}
            />
            <p className="name">ANDY</p>
          </div>
          <div className="person-info-round">
            <img
              className="person-image"
              alt='person-image"'
              src={images.person2}
            />
            <p className="name">Cathrine</p>
          </div>
          <div className="person-info">
            <img
              className="person-image"
              alt='person-image"'
              src={images.person3}
            />
            <p className="name">sIMON</p>
          </div>
          <div className="person-info-round">
            <img
              className="person-image"
              alt='person-image"'
              src={images.person4}
            />
            <p className="name">MIKE</p>
          </div>
        </div>
      </section>

      <Brands btn />

      <section className="eden-service position-relative block--spc">
        <img src={images.infinity_logo} alt="logo" className="logo eden-service-logo" />
        <div className="p-md-3 video-section position-relative overflow-hidden">
          <div className="box-content-2">
            <div>
              {" "}
              <div className="title-row">
                <h3 className="box-title-2">
                  Converting Your Waste into Energy
                </h3>
              </div>
              <p
                className="long-content"
                style={{
                  color: "#828282",
                }}
              >
                The world is changing fast. Businesses and consumers are more
                aware than ever of the need for genuine sustainability.
                Expectations are rising, and responsibility is no longer
                optional. Many organisations are making changes Eden Infinity
                helps take it further.
              </p>
            </div>

            <div className="box-btn-2 mb-5">
              <Btn rightIcon onClick={() => {
                navigate("/eden-infinity")
              }}>Learn More</Btn>
            </div>
          </div>

          <img src={images.videoBg} className="overlay-img-2"></img>
          <div className="overlay-video"></div>

          {/* Special video icon overlay for index === 0 */}

          <div
            className="video-icon-2"
            onClick={() => setShowVideoModal(true)}>
            <img src={images.videoIconBg} className="img-fluid"></img>
          </div>
        </div>
      </section>


      <section id="services" ref={slider} className="section-with-animations">
        <div id="services-header">
          <div className="slide-up">
            <p className="long-content-medium slide-up-text">
              Smart Energy Solutions for Businesses
            </p>
          </div>

          <div className="slide-up">
            <div className="title slide-up-text">
              Optimise Costs & Efficiency
              <br />
              with Our Expert Services
            </div>
          </div>

          <img
            alt="side-leaves"
            className="side-leaves"
            src={images.side_leaves}
          />
        </div>

        {/* <div className="box-row">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <ExpandableServicesBox
                key={index}
                index={index}
                title={item.title}
                content={item.content}
                description={item.longContent}
                infinity_logo={item.logo}
                isActive={activeIndex === index}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                activeIndex={activeIndex}
                totalItems={data.length}
                shouldShrink={activeIndex !== null}
              />
            </React.Fragment>
          ))}
        </div> */}

        <div className="box-row">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <ExpandableServicesBox
                key={index}
                index={index}
                title={item.title}
                content={item.content}
                description={item.longContent}
                infinity_logo={item.logo}
                isActive={activeIndex === index}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                activeIndex={activeIndex}
                totalItems={data.length}
                shouldShrink={activeIndex !== null}
                backgroundImage={item.img}
                service={item}
              />
            </React.Fragment>
          ))}
        </div>
      </section>

      {showVideoModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="modal-dialog modal-fullscreen"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="modal-content modal-centered border-0"
              style={{ backgroundColor: "#000000c4" }}
            >
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn-close btn-close-white bg-light ms-auto me-5"
                  onClick={() => setShowVideoModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex justify-content-center align-items-center p-0">
                <video
                  controls={false}
                  autoPlay
                  className="w-100 h-auto rounded"
                  style={{ maxHeight: "70vh" }}
                >
                  <source src={images.about_video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}

      <div id="contact">
        <h1 className="edenText-title">
          <span className="w-wrapper">
            <span className="w-letter">S</span>m
            <span className="a-wrapper">
              <span className="a-letter">a</span>rt
            </span>{" "}
            Utility{" "}
            <span>
              <img
                src={images.contact}
                alt="decorative"
                className="decorative-image"
              />
            </span>
          </span>
        </h1>

        <div className="solution-text">
          <Btn onClick={openContactModal} rightIcon padding="0 2rem">
            Talk to An expert
          </Btn>
          <h1 className="edenText-title">solutions for</h1>
        </div>

        <h1 className="edenText-title">Sustainable Growth.</h1>
        <img alt="dotted-image" className="dotted" src={images.dotted} />
        <img
          alt="side-leaves"
          className="side-leaves2"
          src={images.side_leaves2}
        />
      </div>

      <Features />
      <Footer />
    </>
  );
};

export default LandingPage;
