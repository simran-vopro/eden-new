import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import Btn from "../components/other/btn";
import Header from "../components/other/header";
import images from "../components/theme/imagesPath";
import Footer from "../components/other/footer";
import Features from "../components/pages/features";
import Brands from "../components/pages/brands";
import "../responsive.css";
import { useModal } from "../components/pages/ModalContext";
import SearchBar from "./searchBar";
import { FaPlayCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger, CSSPlugin);
ScrollTrigger.config({
  invalidateOnRefresh: true
});

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
      id: 1,
      title: "Eden Infinity",
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
      `
    },
    {
      id: 2,
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
      `
    },
    {
      id: 3,
      title: "Eden Auditing",
      content:
        "Expertly auditing your utility bills line by line identifying errors, recovering lost credit, and giving you clear insight to plan ahead with confidence and control.",
      longContent: `<p><strong>Utility bills are often affected by complex tariffs and ever-changing regulations and errors can easily go unnoticed.</strong> At Eden, we carry out independent audits to uncover undue charges and recover any credit owed.</p>
        <ul>
          <li>Every element of your bill is re-simulated and checked for accuracy</li>
          <li>Clear, easy-to-understand reports highlight findings and recovered amounts</li>
          <li>Advanced insights available to support forward planning and cost control</li>
        </ul>
        <p>No assumptions. No missed details. Just clarity and value.</p>` ,
    },
    {
      id: 4,
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
      `
    },
    {
      id: 6,
      title: "Eden Water",
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
  ];

  const slider = useRef();

  const animateSlideUpOnScroll = (triggerElement) => {
    const elements = triggerElement.querySelectorAll(".slide-up-text");

    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          // delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse", // optional reverse
          },
        }
      );
    });
  };

  useGSAP(() => {
    const sections = document.querySelectorAll(".section-with-animations");

    sections.forEach((section) => {
      animateSlideUpOnScroll(section);
    });
  }, []);

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

    // Create the GSAP timeline
    const tl = gsap.timeline({
      delay: 4, // Start the entire timeline after 3 seconds
    });

    // Slide-up animation with stagger
    tl.fromTo(
      slideUpElements,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );

    // Rotation animation for infinity logo on scroll
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


  let screenWidth = window.innerWidth;
  // sevices section animation
  useGSAP(() => {
    let scrollStartValue = "top";

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".expandable-box");
      const panelWidth = panels[0].getBoundingClientRect().width;

      if (screenWidth >= 769) {
        // Desktop Animation (your current pinned scroll animation)
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: slider.current,
            start: scrollStartValue,
            end: "+=" + panels.length * panelWidth,
            scrub: 1,
            pin: true,
            endTrigger: "#contact",
            onLeave: () => {
              document.getElementById("services-header")?.classList.add("scroll-ended");
            },
            onEnterBack: () => {
              document.getElementById("services-header")?.classList.remove("scroll-ended");
            },
          },
        });

        panels.forEach((panel, i) => {
          const tl = gsap.timeline();
          const content = panel.querySelector(".box-content");

          // Animate panel shrink
          tl.to(panel, {
            flexBasis: "15%",
            backgroundImage: "none",
            duration: 1,
            ease: "power1.inOut",
          }, 0);

          // Animate content width to 100% inside the shrinking panel
          tl.to(content, {
            ease: "power1.inOut",
            duration: 1,
            delay: 1,
            opacity: 0
          }, 0); // Start at same time

          tl.to(".video-icon", {
            ease: "power1.inOut",
            duration: 1,
            delay: 0.1,
            opacity: 0
          }, 0);


          tl.to(".overlay-img", {
            ease: "power1.inOut",
            duration: 1,
            delay: 0.1,
            opacity: 0
          }, 0);

          timeline.add(tl, i);
        });

      } else {
        // Mobile & Tablet Animation (different simple scroll animation)
        panels.forEach((panel) => {
          gsap.from(panel, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }
    }, slider);

    return () => ctx.revert();
  }, [screenWidth]);


  const [showVideoModal, setShowVideoModal] = useState(false);
  const ExpandableServicesBox = ({ index, title, content, onPlayVideo, onLearnMore, infinity_logo, description }) => {
    const boxRef = useRef();
    const contentRef = useRef();
    const titleRef = useRef();
    const boxBgColors = ["#fafafa", "#8DC74B", "#2F98D0"];

    // 1. Refs to each portrait box
    const boxRefs = useRef([]);
    // 2. Timelines per box
    const timelines = useRef([]);

    useEffect(() => {
      boxRefs.current.forEach((box, i) => {
        // start every box hidden + shifted down
        gsap.set(box, { opacity: 0, y: 20, pointerEvents: "none" });
        // build the show-then-hide timeline
        timelines.current[i] = gsap
          .timeline({ paused: true })
          .to(box, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
            pointerEvents: "auto",
          });
      });
      // cleanup if unmount
      return () => timelines.current.forEach((tl) => tl.kill());
    }, []);


    const handleHoverIn = (i) => {
      timelines.current[i].play();
    };

    const handleHoverOut = (i) => {
      timelines.current[i].reverse();
    };


    const isFirstBox = index === 0;
    return (
      <div
        ref={boxRef}
        className="expandable-box relative overflow-hidden"
        style={{
          backgroundColor: boxBgColors[index % boxBgColors.length],
          backgroundSize: "cover",
          backgroundPosition: "center",
          color:
            boxBgColors[index % boxBgColors.length] === "#fafafa" ? "#000" : "#fff",
          flexShrink: 0,
        }}
      >
        <div className="title-row">
          {
            isFirstBox ? <img src={infinity_logo} alt="logo" className="logo slide-up-text" /> : <h3
              ref={titleRef}
              className="box-title">
              {title}
            </h3>
          }

          <div
            className="index-badge"
            style={{
              backgroundColor:
                boxBgColors[index % boxBgColors.length] === "#fafafa"
                  ? "#2F98D0"
                  : "#fff",
              color:
                boxBgColors[index % boxBgColors.length] === "#fafafa"
                  ? "#fff"
                  : "#000",
            }}
          >
            {index < 10 ? `0${index + 1}` : index + 1}
          </div>
        </div>

        <div ref={contentRef} className="box-content">
          <p
            className="long-content"
            style={{
              color:
                boxBgColors[index % boxBgColors.length] === "#fafafa"
                  ? "#828282"
                  : "#fff",
            }}
          >
            {content}
          </p>

          {/* <div className="box-btn">
            <Btn
              onMouseEnter={() => handleHoverIn(index)}
              onMouseLeave={() => handleHoverOut(index)}
              onClick={onLearnMore}
              rightIconChildren={boxBgColors[index % boxBgColors.length] === "#fafafa" ? <img src={images.icon_top} className="icon-top" alt="icon" /> :
                <img src={images.icon_top_white} className="icon-top" alt="icon" />
              }
              iconbackground={
                boxBgColors[index % boxBgColors.length] === "#8DC74B"
                  ? "#8DC74B"
                  : boxBgColors[index % boxBgColors.length] === "#2F98D0"
                    ? "#2F98D0"
                    : "#fff"
              }
              color={
                boxBgColors[index % boxBgColors.length] === "#8DC74B"
                  ? "#8DC74B"
                  : boxBgColors[index % boxBgColors.length] === "#2F98D0"
                    ? "#2F98D0"
                    : "#fff"
              }
              background={
                boxBgColors[index % boxBgColors.length] === "#fafafa"
                  ? "linear-gradient(86.2deg, #2F98D0 8.59%, #47ADE3 89.8%)"
                  : "linear-gradient(86.2deg,#ffffff 8.59%, #ffffff 89.8%)"
              }
              rightIcon
            >
              Learn More
            </Btn>
          </div> */}



        </div>


        {
          isFirstBox && <img src={images.videoBg} className="overlay-img"></img>
        }

        {
          isFirstBox && <div className="overlay-video"></div>
        }


        <div
          className="portrait-float-box-service"
          ref={(el) => (boxRefs.current[index] = el)}
        >
          <div className="portrait-content-service">
            <div
              className="modal-body"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>


        {/* Special video icon overlay for index === 0 */}
        {isFirstBox && (
          <div
            className="video-icon"
          // onClick={onPlayVideo}
          >
            <FaPlayCircle />
          </div>
        )}

        <img src={images.pattern} alt="pattern" id="pattern" />
      </div>
    );
  };

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



  const handleCloseModal = () => {
    setShowServiceModal(false);
    // Refresh ScrollTrigger after modal closes
    setTimeout(() => ScrollTrigger.refresh(), 100);
  };



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
            <img src={images.logo} alt="logo" className="logo slide-up-text-hero" />
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
            <Btn className="webBtn slide-up-text-hero" onClick={openContactModal} rightIcon>
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
                  Mark’s expertise has shaped Eden Utilities from the ground up, embedding a consultative and sustainability-first ethos into the company’s foundation. Deeply aware of the changing energy landscape, he understands the growing need for trusted, future-focused advisory.
                  <br></br>
                  <br></br>
                  This mindset is central not just to Eden’s services, but to every team member he brings on board creating a company united by shared values and a long-term vision for smarter, greener utilities.
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

        <div className="box-row" >
          {data.map((item, index) => (
            <>
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
                onPlayVideo={() => setShowVideoModal(true)}
                onLearnMore={() => handleLearnMore(item)}
              />

            </>
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
            <div className="modal-content modal-centered border-0" style={{ backgroundColor: "#000000c4" }}>
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn-close btn-close-white ms-auto"
                  onClick={() => setShowVideoModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex justify-content-center align-items-center p-0">
                <video
                  controls
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
