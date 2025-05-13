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
  const flowersRef = useRef(null);

  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setShowServiceModal(true);
    // Refresh ScrollTrigger after modal opens
    setTimeout(() => ScrollTrigger.refresh(), 100);
  };

  const data = [
    {
      id: 6,
      title: "Eden Water",
      img: images.post1,
      longContent: `
      <p><strong>Water is a growing priority for many businesses and so is managing it efficiently. At Eden, we handle the tender process for water and wastewater services, ensuring supplier bids are thoroughly analysed and cost-effective.</strong></p>
      <ul>
        <li>Competitive tendering that often delivers savings of 12% or more</li>
        <li>Support with usage optimisation, efficiency, harvesting, and invoice audits</li>
        <li>Solutions that reduce costs, improve sustainability, and strengthen business continuity</li>
      </ul>
      <p>Practical support, measurable impact, and a smarter approach to water management.</p>
    `,
      content:
        "Helping to manage water smarter, securing competitive supply contracts, improving efficiency, and supporting sustainability through expert tendering, usage audits, and forward-thinking resource planning.",
    },
    {
      id: 2,
      img: images.post2,
      title: "Eden Strategy",
      content:
        "In an unpredictable energy market, manage risk intelligently with expert insight, real-time updates, and strategies built around your business, not just the market.",
      longContent: `
        <p><strong>With UK and global energy markets remaining volatile and unpredictable, effective energy management is more important than ever.</strong> At Eden, we work closely with you to:</p>
        <ul>
          <li>Understand your risk appetite and manage it at a level that suits your organisation</li>
          <li>Keep you informed of market movements, risks, and opportunities in real time</li>
          <li>Provide confidence that your risk strategy is clear, active, and aligned with your goals</li>
        </ul>
        <p>It’s not just about reacting, it’s about staying ahead.</p>
      `,
    },
    {
      id: 3,
      img: images.post3,
      title: "Eden Auditing",
      content:
        "Expertly auditing your utility bills line by line identifying errors, recovering lost credit, and giving you clear insight to plan ahead with confidence and control.",
      longContent: `<p><strong>Utility bills are often affected by complex tariffs and ever-changing regulations and errors can easily go unnoticed.</strong> At Eden, we carry out independent audits to uncover undue charges and recover any credit owed.</p>
        <ul>
          <li>Every element of your bill is re-simulated and checked for accuracy</li>
          <li>Clear, easy-to-understand reports highlight findings and recovered amounts</li>
          <li>Advanced insights available to support forward planning and cost control</li>
        </ul>
        <p>No assumptions. No missed details. Just clarity and value.</p>`,
    },
    {
      id: 4,
      img: images.post4,
      title: "Eden Procurement",
      longContent: `
      <p><strong>Energy suppliers across the UK offer a range of purchasing options each with different terms, restrictions, and levels of flexibility. Navigating them isn’t always straightforward.</strong></p>
      <p>At Eden, we:</p>
      <ul>
        <li>Ensure your supply contracts are tailored to your operational and commercial needs</li>
        <li>Negotiate directly with suppliers to secure terms that truly work for you</li>
        <li>Source electricity, gas, and water contracts that best match your business</li>
      </ul>
      <p>Straightforward advice. Smart decisions. No unnecessary complexity.</p>`,
      content:
        "Cutting through complex supply options, securing energy and water contracts that fit your needs, with expert negotiation and advice tailored to your operations, risk, and goals.",
    },
    {
      id: 5,
      img: images.post5,
      title: "Eden Analytics",
      content:
        "Delivering bespoke tailored energy reporting from daily forecasts to detailed KPI tracking giving you clear, timely insights to plan, control, and optimise your energy strategy.",
      longContent: `
        <p><strong>Clear, accurate reporting is key to understanding and managing your energy costs effectively. At Eden, we tailor reporting to suit your needs from high-level insights to detailed data.</strong></p>
        <ul>
          <li>Budget and risk reports delivered monthly, weekly, or daily to suit your planning cycle</li>
          <li>Market price intelligence that puts real-time data and trends at your fingertips</li>
          <li>Bespoke reporting on usage, wastage, and KPIs to support smarter energy decisions</li>
        </ul>
        <p>Get the right information, in the right format, at the right time.</p>
      `,
    },
    {
      id: 1,
      img: images.post6,
      title: "Eden Optimisation",
      logo: images.infinity_logo,
      content:
        "Helping your business turn waste into clean energy cutting emissions, reducing landfill, and showing the world you take sustainability seriously. Go further. Do better.",
      longContent: `
        <p><strong>Turning Waste Into Power. Turning Responsibility Into Action.</strong></p>
        <p>The world is changing fast. Businesses and consumers are more aware than ever of the need for genuine sustainability. Expectations are rising, and responsibility is no longer optional. Many organisations are making changes, Eden Infinity helps take it further.</p>
        <p>Every business creates waste. Too often, it ends up in landfill. Eden Infinity works with trusted partners to turn that waste into energy, which is then allocated back to your business account.</p>
        <p>It’s a smarter, traceable way to reduce your impact and support clean energy without disrupting how you operate.</p>
        <p>This isn’t just about having a greener footprint. It’s about showing you take sustainability seriously to your clients, your people, and the world around you.</p>
        <p>Already making progress? That’s a great start. Eden Infinity is how you go further.</p>
      `,
    },
  ];

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

        <div id="contentSection">
          <div className="slide-up">
            <img
              src={images.logo}
              alt="logo"
              className="logo slide-up-text-hero"
            />
          </div>
          <div className="slide-up">
            <h1 className="top-title slide-up-text-hero" ref={topTitleRef}>
              Your sustainable <span>utility partner</span>
            </h1>
          </div>

          <div className="slide-up">
            <p className="long-content slide-up-text-hero" ref={longContentRef}>
              Driving smarter, greener utility strategies through expert
              procurement, data-led insight, and flexible support tailored to
              your operational and sustainability goals.
            </p>
          </div>

          <div className="slide-up">
            <Btn
              className="webBtn slide-up-text-hero"
              onClick={openContactModal}
              rightIcon
            >
              Talk to an Expert
            </Btn>
          </div>
          {/* <img className="flowers" src={images.flowers} ref={flowersRef} /> */}
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
                  With over 30 years in the utilities industry, I believe in
                  honest, expert advice delivered with a personable approach,
                  focused on long-term value and sustainable solutions
                </p>
              </div>
              <img className="view" src={images.view} />
              <img className="viewBottom" src={images.viewBottom} />
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

            <div className="box-btn-2">
              <Btn rightIcon>Learn More</Btn>
            </div>
          </div>

          <img src={images.videoBg} className="overlay-img-2"></img>
          <div className="overlay-video"></div>

          {/* Special video icon overlay for index === 0 */}

          <div
            className="video-icon-2"
            onClick={() => setShowVideoModal(true)}
          >
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
              />
            </React.Fragment>
          ))}
        </div>

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
