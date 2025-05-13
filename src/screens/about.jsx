import React, { useEffect, useRef } from "react";
import "../components/stylesheets/about.css";
import "../components/stylesheets/aboutResponsive.css";
import images from "../components/theme/imagesPath";
import Header from "../components/other/header";
import Btn from "../components/other/btn";
import { FaCirclePlay } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../components/other/footer";
import { useModal } from "../components/pages/ModalContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BiCheckCircle } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { blogPosts } from "../components/blogPostsContent";
import { useNavigate } from "react-router-dom";
import Features from "../components/pages/features";

const posts = [
  {
    image: images.post1,
    title: "Rising Energy Costs Are Disrupting UK Business",
    description:
      "British companies are now paying some of the highest industrial electricity prices in the world, 46% above the average across other International Energy Agency (IEA) countries. According to The Times (April 2024), this cost disparity is forcing many large manufacturers and energy-intensive businesses to rethink their long-term plans in the UK. ",
    link: "#",
  },
  {
    image: images.post2,
    title: "AI’s Growing Energy Demand: Why It Matters",
    description:
      "With AI infrastructure placing immense strain on energy systems, Eden helps organisations navigate procurement, grid planning, and sustainability to maintain control in a high-demand environment.",
    link: "#",
  },
  {
    image: images.post3,
    title: "The Grid Is Changing And So Must Your Strategy",
    description:
      "The UK’s £35B grid upgrade promises major improvements but brings uncertainty. Eden helps businesses manage connection delays and evolving infrastructure with proactive planning and smart procurement.",
    link: "#",
  },
  {
    image: images.post4,
    title: "Decarbonization and Net-Zero Commitments",
    description:
      "With net-zero legally binding and interim goals rising, Eden supports businesses with tailored energy strategies, infrastructure planning, and compliance to meet evolving targets without sacrificing performance.",
    link: "#",
  },
  {
    image: images.post5,
    title: "Advanced Metering Empowers Energy Efficiency",
    description:
      "With 66% of UK meters now smart, Eden helps businesses maximise value from advanced metering by integrating usage data into broader procurement and risk strategies.",
    link: "#",
  },
  {
    image: images.post6,
    title: "Cybersecurity and Energy Resilience",
    description:
      "As cyber threats rise, Eden provides strategies that integrate cybersecurity with energy planning, helping organisations maintain operational continuity and safeguard critical assets.",
    link: "#",
  },
  {
    image: images.post7,
    title: "Navigating Energy Compliance and Reporting",
    description:
      "From ESOS to RIGs updates, Eden helps businesses stay ahead of compliance requirements with expert guidance on energy reporting, procurement, and sustainability integration.",
    link: "#",
  },
];

const brands = [
  images.brand1,
  images.brand2,
  images.brand3,
  images.brand1,
  images.brand2,
  images.brand1,
  images.brand2,
  images.brand3,
  images.brand1,
  images.brand2,
];

const About = () => {
  const { openContactModal } = useModal();
  const navigate = useNavigate();

  const featuresData = [
    {
      feature: "Expert-led, People-first",
      description:
        "We’ve curated a team of experienced professionals who genuinely know their field from energy consultants to operational support, delivering clarity, care, and consistency",
    },
    {
      feature: "Sustainability at the Core",
      description:
        "Our approach is built around helping businesses operate more responsibly, reduce waste, and embrace long-term, practical sustainability, not just box-ticking.",
    },
    {
      feature: "Smarter Energy Strategies",
      description:
        "We provide tailored solutions for procurement, risk management, and cost control, helping organisations stay ahead in a complex, fast-moving market.",
    },
    {
      feature: "Independent and Transparent",
      description:
        "We act in your best interests, not the suppliers’. Our advice is unbiased, our reporting is clear, and our audits are rigorous.",
    },
    {
      feature: "Carbon-Aware and Future-Ready",
      description:
        "Whether you’re just starting your carbon journey or working towards net zero, we help map, measure, and manage your environmental impact with purpose and accuracy.",
    },
    {
      feature: "Flexible Support That Fits You",
      description:
        "From multi-site corporates to growing organisations, we scale our services to suit your needs. We are offering the right level of insight, support, and strategy at every stage.",
    },
  ];

  // 1. Refs to each portrait box
  const boxRefs = useRef([]);
  // 2. Timelines per box
  const timelines = useRef([]);

  useEffect(() => {
    boxRefs.current.forEach((box, i) => {
      // start every box hidden + shifted down
      gsap.set(box, { opacity: 0, y: 20, pointerEvents: "none" });
      // build the show-then-hide timeline
      timelines.current[i] = gsap.timeline({ paused: true }).to(box, {
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
          delay: i * 0.2,
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

  return (
    <div id="aboutPage">
      <div id="insights-header">
        <img src={images.logo} alt="logo" className="logo" />
        <Header navItemStyle={{ color: "#000" }} />
      </div>
      <div className="hero-overlay"></div>

      <section id="hero-about" className="container-fluid">
        <div className="row hero-about-text ps-2 ps-md-5">
          <div className="col-md-5 pe-md-0">
            <div className="mt-2 mt-md-5">
              <h1 className="fw-bold text-capitalize mb-4 title-breadcrump">About us...</h1>
            </div>
            <div>
              <p className="green-text fs-5">Eden isn’t just a company</p>
              <p className="dark-text fs-1 text-lineheight">We are a team of specialists you
                can’t find anywhere else.
              </p>
              <p className="long-content">At Eden Utilities, Mark’s expertise has shaped Eden Utilities
                from the ground up, embedding a consultative and
                sustainability-first ethos into the company’s foundation.</p>

              <p className="long-content">He understands the growing need for trusted, futurefocused advisory. This mindset is central not just to Eden’s
                services, but to every team member he brings on board,
                creating a company united by shared values and a longterm vision for smarter, greener utilities.</p>

              <p className="text-black dark-text fs-3 text-lineheight py-2">Exceptional Service, Delivered by<br></br>
                Exceptional People</p>

              <div className="row">

                <div className="col-md-6">
                  <div>
                    <div className="d-flex align-items-center">
                      <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 5.5V17.5M14 9C14 7.62 12.657 6.5 11 6.5C9.343 6.5 8 7.62 8 9C8 10.38 9.343 11.5 11 11.5C12.657 11.5 14 12.62 14 14C14 15.38 12.657 16.5 11 16.5C9.343 16.5 8 15.38 8 14" stroke="#2F98D0" strokeWidth="1.5" stroke-linecap="round" />
                        <path d="M6 2.40491C7.51945 1.48167 9.24448 0.996975 11 1.00001C16.523 1.00001 21 5.70086 21 11.5C21 17.2992 16.523 22 11 22C5.477 22 1 17.2992 1 11.5C1 9.58796 1.487 7.79351 2.338 6.25001" stroke="#2F98D0" strokeWidth="1.5" stroke-linecap="round" />
                      </svg>
                      <p className="green-text fs-4 mb-0 ps-2">Get the best deal</p>
                    </div>

                    <p className="long-content">To lead the way in innovative
                      utility solutions that empower
                      businesses and protect the
                      environment</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <div className="d-flex align-items-center">
                      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.417 13.7132C22.368 8.70316 21.301 3.73516 18.463 1.99416C15.781 0.34916 13.44 1.01216 12.034 2.06816L11 2.84216M18.417 13.7132C17.469 14.9162 16.232 16.1202 14.66 17.2832C13.115 18.4282 12.342 19.0002 11 19.0002C9.65798 19.0002 8.88598 18.4282 7.33998 17.2832C-0.778019 11.2752 0.0179811 4.15316 3.53698 1.99416C6.21898 0.34916 8.55998 1.01216 9.96598 2.06816L11 2.84216M18.417 13.7132L12.892 7.44516C12.7823 7.32114 12.6322 7.24002 12.4683 7.21622C12.3044 7.19242 12.1374 7.22748 11.997 7.31516L9.81098 8.68116C9.38229 8.95236 8.86534 9.04728 8.36827 8.94604C7.87121 8.8448 7.43255 8.55526 7.14408 8.138C6.85562 7.72074 6.73969 7.20808 6.82056 6.7073C6.90143 6.20652 7.17283 5.75641 7.57798 5.45116L11 2.84216" stroke="#2F98D0" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p className="green-text fs-4 mb-0 ps-2">Get the best service</p>
                    </div>

                    <p className="long-content">To deliver sustainable and
                      reliable solutions that drive
                      positive change for businesses
                      and the environment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 p-0">
            <div className="w-100 h-100 p-0 d-flex flex-column justify-content-end">
              <div className="row w-100 mb-5 justify-content-center position-relative m-0">
                <div className="col-md-1">

                </div>
                <div className="col-md-4">
                  <div className="team-outer-wrapper">
                    <div class="image-wrapper circle-img-green">
                      <img src={images.profile2} alt="Profile" />
                    </div>
                    <p className="name">Emma</p>
                    <p className="designation">CMO</p>
                  </div>
                </div>

                <div className="col-md-7 about-line-wrapper p-0">
                  <div class="wrapper">
                    <div className="team-outer-wrapper">
                      <div class="image-wrapper">
                        <img src={images.profile2} alt="Profile" />
                      </div>
                      <p className="name">Mike</p>
                      <p className="designation">SENIOR ANALYTICS</p>
                    </div>

                    <div class="stripes">
                      <div class="stripe"></div>
                      <div class="stripe"></div>
                      <div class="stripe"></div>
                      <div class="stripe"></div>
                      <div class="stripe"></div>
                      <div class="stripe"></div>
                      <div class="stripe"></div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row w-100 m-0 justify-content-end position-relative">
                <div className="col-md-2">

                </div>
                <div className="col-md-4">
                  <div className="team-outer-wrapper">
                    <div class="image-wrapper">
                      <img src={images.profile2} alt="Profile" />
                    </div>
                    <p className="name">Emma</p>
                    <p className="designation">CMO</p>
                  </div>
                </div>

                <div className="col-md-5 about-line-wrapper p-0">
                  <div class="wrapper">

                    <div className="team-outer-wrapper">
                      <div class="image-wrapper circle-img-green">
                        <img src={images.profile2} alt="Profile" />
                      </div>
                      <p className="name">Mike</p>
                      <p className="designation">SENIOR ANALYTICS</p>
                    </div>
                    <div class="stripes">
                      <div class="stripe"></div>
                      <div class="stripe"></div>
                      <div class="stripe"></div>
                      <div class="stripe"></div>
                      <div class="stripe"></div>
                      <div class="stripe"></div>
                      <div class="stripe"></div>
                    </div>
                  </div>

                </div>
              </div>

              {/* <div className="dotted-outer">

              </div> */}
            </div>
          </div>
        </div>

      </section>

      <section id="why-us" className="container-fluid">
        <div className="row hero-about-text px-2 px-md-5">
          <div className="col-md-6 pe-md-5">
            <img src={images.civil} className="img-fluid rounded" alt="civil" />
          </div>
          <div className="col-md-6 ps-5">
            <p className="green-text fs-5 mb-0">Why Clients Love Our Solutions</p>
            <p className="dark-text title text-start title-big text-lineheight">Delivering results with cutting-edge technology and proven expertise</p>
            <p className="long-content pt-3">At Eden Utilities, we combine decades of expertise with innovative technology to deliver exceptional utility management solutions. Our personalized approach ensures that each client receives strategies tailored to their unique needs, helping them save costs, optimize energy usage, and achieve sustainability goals. From seamless renewable energy implementation to detailed energy audits, we empower businesses to thrive while contributing to a greener future.

              <br></br> <br></br>Trusted by over <b>10K+ satisfied clients</b>, our commitment to excellence and long-lasting partnerships is at the core of what we do.</p></div>
        </div>
      </section>

      <div
        id="partnership"
        className="container-fluid p-0 section-with-animations"
      >
        <div className="content-width">
          <div className="slide-up">
            <img src={images.infinity_logo} alt="" className="img-fluid w-50" />
            <p className="blue-text fs-5 mb-2">Discover Eden – The Future of Utility & Infinity Solutions</p>
            <p className="dark-text title-big-medium text-lineheight">Revolutionizing Utility & Infinity Solutions
            </p>
          </div>

          <p className="long-content text-start mb-4">
            Eden empowers businesses and individuals with cutting-edge utility management and innovative infinity solutions. From efficient resource procurement to advanced metering and automation, Eden Utility ensures seamless operations, while Eden Infinity unlocks next-gen solutions tailored for sustainable growth.
          </p>


          <div className="about-services">

            <div className="services d-flex align-items-center justify-content-between mt-3">
              <div className="service-item">

                <div className="service-img">
                  <img src={images.s1} alt="" className="img-fluid" />
                </div>

                <p>Eden optimisation</p>
              </div>
              <div className="service-item">
                <div className="service-img">
                  <img src={images.s2} alt="" className="img-fluid" />
                </div>
                <p>Eden Strategy</p>
              </div>
              <div className="service-item">
                <div className="service-img">
                  <img src={images.s3} alt="" className="img-fluid" />
                </div>
                <p>Eden Procurement</p>
              </div>
              <div className="service-item">
                <div className="service-img">
                  <img src={images.s4} alt="" className="img-fluid" />
                </div>
                <p>Eden Water</p>
              </div>
              <div className="service-item">
                <div className="service-img">
                  <img src={images.s5} alt="" className="img-fluid" />
                </div>
                <p>Eden Analytics</p>
              </div>
              <div className="service-item">
                <div className="service-img">
                  <img src={images.s6} alt="" className="img-fluid" />
                </div>
                <p>Eden Auditing</p>
              </div>
            </div>
            <p className="mb-5 mt-3" style={{ color: "#8d8d8d" }}>Converting waste into renewable energy, helping businesses reduce their carbon footprint.</p>
            <Btn rightIcon onClick={openContactModal}>
              Speak to an expert
            </Btn>


          </div>



        </div>

        <div className="circle">
          <img src={images.infinity_logo_transparent} alt="" className="img-fluid infinity-about" />
          <svg
            stroke="#2f98d0"
            strokeWidth="2"
            viewBox="0 0 1400 1400"
            preserveAspectRatio="none"
          >
            <path
              d="M180,1400 C-430,380 700,-250 1400,200 L1400,1400 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      <div
        id="csr"
        className="container-fluid p-0 pt-5 section-with-animations position-relative">

        <div className="clients">
          <Swiper
            slidesPerView="auto"
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            grabCursor={false}
            modules={[Autoplay]}
            spaceBetween={10}
            // pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="posts-swiper"
          >
            {brands.map((logo, index) => (
              <SwiperSlide key={index}>
                <>
                  <img
                    src={logo}
                    alt={`Brand ${index}`}
                    key={index}
                    className="brand-logo"
                  />
                </>
                {/* <div className="post-card p-3 bg-white h-100">
                <img src={post.image} alt={post.title} className="w-100 mb-3" />
                <h6 className="my-3">{post.title}</h6>
                <p className="post-description">{post.description}</p>
                <div className="text-end">

                </div>
              </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="content-width px-4 px-md-4">
          <div>
            <div>
              <p className="dark-text title-big-medium text-lineheight">Driving a Sustainable Future
              </p>
            </div>

            <p className="long-content text-start mb-4">
              Eden Infinity transforms the way businesses operate by combining cutting-edge technology with streamlined efficiency. Designed to adapt to organizations of all sizes, it enhances performance, optimizes resources, and supports sustainable growth. More than just a platform, Eden Infinity empowers innovation and drives lasting impact.
            </p>

            <div className="d-flex flex-column g-3 csr-features">
              <p className="text-black dark-text fs-4 text-lineheight py-2">Key Features</p>

              <div>
                <div className="d-flex align-items-center">
                  <BsFillCheckCircleFill className="blue-text fs-5" />
                  <p className="green-text fs-4 mb-0 ps-2">Advanced Analytics</p>
                </div>

                <p className="long-content fst-italic">Gain real-time insights to make smarter decisions.

                </p>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <BsFillCheckCircleFill className="blue-text fs-5" />
                  <p className="green-text fs-4 mb-0 ps-2">Sustainable Design</p>
                </div>

                <p className="long-content fst-italic">Engineered with sustainability in mind, reducing environmental impact.</p>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <BsFillCheckCircleFill className="blue-text fs-5" />
                  <p className="green-text fs-4 mb-0 ps-2">Scalable Solutions</p>
                </div>

                <p className="long-content fst-italic">Customizable for businesses of all sizes, from startups to global corporations.</p>
              </div>

            </div>

          </div>

        </div>

        <div className="circle">
          <div className="position-absolute" style={{ zIndex: 999,bottom:"6vw",width:"80%" }}>
            <p className="green-text fs-5 mb-2 text-center">Our Clients</p>
            <p className="dark-text title-big-medium text-lineheight text-center">Those Who Trust Us</p>
          </div>
          <svg
            stroke="#2f98d0"
            strokeWidth="20"
            viewBox="0 0 20000 20000"
            preserveAspectRatio="none"
          >
            <path
              d="M2500,20000 C-6200,6000 10000,-5000 20000,4000 L20000,20000 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      <section id="why-us" className="container-fluid why-us-bottom">
        <div className="row hero-about-text px-2 px-md-5">
          <div className="col-md-6 pe-md-5">
            <img src={images.civil2} className="img-fluid rounded" alt="civil" />
          </div>
          <div className="col-md-6 ps-5 d-flex flex-column justify-content-between">

            <div>
              <p className="green-text fs-5 mb-0">The Eden Advantage</p>
              <p className="dark-text title text-start title-big text-lineheight">Why Choose Eden Utilities?</p>
              <p className="long-content pt-3">At Eden Utilities, we pride ourselves on the strength of our exceptional team of experts who bring unparalleled knowledge and dedication to every project. Our team is comprised of seasoned professionals with extensive experience in the utilities sector, committed to delivering solutions that are both innovative and reliable. From strategising efficient systems to resolving complex challenges, their expertise ensures that every client's unique needs are met with precision and care. With a focus on collaboration, attention to detail, and a forward-thinking approach, our team consistently goes above and beyond to achieve outstanding results. When you choose Eden Utilities, you're partnering with a team that values excellence and works tirelessly to provide industry-leading services.</p>
            </div>
            <Btn rightIcon onClick={openContactModal}>
              Speak to an expert
            </Btn>

          </div>


        </div>
      </section>

      <div id="vision-about mb-5">
        <div className="tree-wrapper">
          <img src={images.tree} className="tree" alt="tree" />
        </div>

        <div className="outer-box">
          <div className="inner-box">
            <div className="vision-card p-3">
              <div className="d-flex">
                <div className="before-promise"></div>
                <div className="mb-3">
                  <h2 className="mb-0">The Eden Promise</h2>
                  <p className="long-content text-dark pt-0">
                    We promise to deliver trusted advice, reduce environmental
                    impact, support communities, and bring together experts who
                    care all to create better outcomes for our clients and the
                    world around us.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={images.person} className="person" alt="person" />
        </div>
      </div>


      <div className="full-img-container rounded mx-5">
        <div className="col-md-5 p-5 d-flex flex-column justify-content-center h-100">
          <p className="text-white fs-5 mb-2">Ready to Tranform Your Utilities?</p>
          <p className="text-white dark-text text-start title-big text-lineheight">Looking to transform your business? Partner with us today!
          </p>
          <Btn rightIcon onClick={openContactModal}>
            Speak to an expert
          </Btn>
        </div>

      </div>


      <div className="latest-news">
        <p className="dark-text text-center title-big title text-lineheight pb-5">Latest news & updates
        </p>

        <div className="news container">
          {/* top blogs posts */}
          <div className="row g-4 mb-5">
            {/* First Row: One large, two small */}
            <div className="col-lg-7">
              <div
                className="position-relative text-white blog-grid-item-lg"
                style={{ height: "100%" }}
              >
                <img
                  src={blogPosts[0].image}
                  alt=""
                  className="img-fluid w-100 h-100 object-fit-cover"
                  style={{ filter: "brightness(0.4)" }}
                />
                <div className="position-absolute top-0 start-0 p-4">
                  <small className="badge text-white tag-date-style p-0">
                    {blogPosts[0].tag} <span className="dot">•</span>
                    {blogPosts[0].date}
                  </small>
                </div>
                <div className="position-absolute bottom-0 p-4">
                  <h4 className="blog-grid-title">{blogPosts[0].title}</h4>
                  <p>{blogPosts[0].content}</p>
                  <div
                    onClick={() => {
                      navigate("/insight-details", {
                        state: { post: blogPosts[0] },
                      });
                    }}
                    className="text-link"
                  >
                    {blogPosts[0].title}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row g-4">
                {[blogPosts[1], blogPosts[2]].map((post) => (
                  <div className="col-12" key={post.id}>
                    <div
                      className="position-relative text-white blog-grid-item"
                      style={{ height: "100%" }}
                    >
                      <img
                        src={post.image}
                        alt=""
                        className="img-fluid w-100 h-100 object-fit-cover"
                        style={{ filter: "brightness(0.4)" }}
                      />
                      <div className="position-absolute top-0 start-0 p-3">
                        <small className="badge text-white tag-date-style p-0">
                          {post.tag} <span className="dot">•</span>
                          {post.date}
                        </small>
                      </div>
                      <div className="position-absolute bottom-0 p-3">
                        <h4 className="blog-grid-title">{post.title}</h4>
                        <div
                          onClick={() => {
                            navigate("/insight-details", {
                              state: { post },
                            });
                          }}
                          className="text-link"
                        >
                          {post.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row: Three equally spaced */}
            {[blogPosts[3], blogPosts[4], blogPosts[5]].map((post) => (
              <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                <div
                  className="position-relative text-white blog-grid-item"
                  style={{ height: "100%" }}
                >
                  <img
                    src={post.image}
                    alt=""
                    className="img-fluid w-100 h-100 object-fit-cover"
                    style={{ filter: "brightness(0.4)" }}
                  />
                  <div className="position-absolute top-0 start-0 p-3">
                    <small className="badge text-white tag-date-style p-0">
                      {post.tag} <span className="dot">•</span>
                      {post.date}
                    </small>
                  </div>
                  <div className="position-absolute bottom-0 p-3">
                    <h4 className="blog-grid-title">{post.title}</h4>
                    <div
                      onClick={() => {
                        navigate("/insight-details", {
                          state: { post },
                        });
                      }}
                      className="text-link">
                      {post.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <Features backgroundColor={"#fff0"} gap={"0px"} titleColor={"#2f98d0"} textColor={"#343a40"} borderRadius={"0px"} height={"100px"} alignItems={"center"} style={{
        padding: "3rem 0",
        overflow: "hidden",
        background: " #f0faff"
      }} />

      <Footer />
    </div>
  );
};

export default About;
