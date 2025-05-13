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

const About = () => {
  const { openContactModal } = useModal();

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
      <div id="about-header">
        <img src={images.logo} alt="logo" className="logo" />
        <Header navItemStyle={{ color: "#000" }} />
      </div>

      <section id="hero-about" className="container-fluid p-0">
        <div className="row p-0">
          <div className="col-12 col-md-6 p-0 d-flex align-items-end justify-content-start written-img">
            <img
              className="img-fluid"
              src={images.writtenImg}
              alt="written image"
            />
          </div>
          <div className="col-12 col-md-6 p-0 lines-img position-relative">
            <img className="img-fluid" src={images.lines} alt="written image" />
          </div>
        </div>

        <div className="hero-overlay"></div>
      </section>

      <section
        id="about-page-content"
        className="container-fluid p-0 section-with-animations"
      >
        <div className="row p-0">
          <div className="col-12 col-md-6 p-0 p-md-5 d-flex align-items-end mt-5">
            <div className="content-width px-4 px-md-5">
              <div className="slide-up">
                <div
                  className="title slide-up-text"
                  style={{ textAlign: "left" }}
                >
                  Eden isn’t just a company, it’s a team of specialists you
                  can’t find anywhere else.
                </div>
              </div>
              <div className="slide-up">
                <div
                  className="long-content slide-up-text"
                  style={{ textAlign: "left" }}
                >
                  Mark’s expertise has shaped Eden Utilities from the ground up,
                  embedding a consultative and sustainability-first ethos into
                  the company’s foundation.
                  <br></br>
                  <br></br>
                  He understands the growing need for trusted, future-focused
                  advisory. This mindset is central not just to Eden’s services,
                  but to every team member he brings on board, creating a
                  company united by shared values and a long-term vision for
                  smarter, greener utilities.
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="person-info">
              <img className="founder" alt="founder" src={images.founder} />
              <p className="name">Mark chipol</p>
              <p className="designation">Founder & MD</p>
            </div>

            <div id="features2">
              <div className="supplier-card">
                <div className="supplier-percentage">84%</div>
                <div className="supplier-label text-muted">
                  Supplier Engaged
                </div>
              </div>
              <div className="supplier-card">
                <div className="supplier-percentage">96%</div>
                <div className="supplier-label text-muted">Satisfaction</div>
              </div>
              <div className="supplier-card">
                <div className="supplier-percentage">65%</div>
                <div className="supplier-label text-muted">Fixed Products</div>
              </div>
             
              <div className="supplier-card ">
                <div className="supplier-percentage">97%</div>
                <div className="supplier-label text-muted">Retention</div>
              </div>
              <div className="supplier-card mb-0">
                <div className="supplier-percentage">182+</div>
                <div className="supplier-label text-muted">Happy Clients</div>
              </div>
            </div>

            <div id="features3">
              <div className="mt-5">
                <section className="slide-up">
                  <p className="title text-start text-muted slide-up-text">
                    Proven with 10K+ Results
                  </p>
                </section>
                <section className="slide-up">
                  <p className="mb-0 text-muted slide-up-text">
                    Eden Utilities has successfully completed over 1,552 tenders
                    and 652 audits. With 6,523 meters managed and 182 happy
                    customers, our growth is a testament to Mark’s strategic
                    leadership and unwavering commitment to excellence.
                  </p>
                </section>
              </div>

              <div className="mt-5">
                <section className="slide-up">
                  <p className="title text-start text-muted slide-up-text">
                    less than 10%
                  </p>
                </section>
                <section className="slide-up">
                  <p className="mb-0 text-muted slide-up-text">
                    Maintaining less than 10% audit error rate
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div id="utility-experts">
          <div className="content-width px-4 px-md-4">
            <div className="title text-start">
            Exceptional Service, Delivered by Exceptional People
            </div>
            <p className="long-content">
              Eden is built on deep expertise, precision, and care from seasoned
              consultants to our behind-the-scenes team.
            </p>
            <p className="long-content">
              See how our people can power your business.
            </p>
            <Btn rightIcon onClick={openContactModal}>
              Speak to an expert
            </Btn>
          </div>
          <div id="features">
            <div className="feature-list position-relative">
              {featuresData.map((item, idx) => (
                <div
                  key={idx}
                  className="feature-item group"
                  onMouseEnter={() => handleHoverIn(idx)}
                  onMouseLeave={() => handleHoverOut(idx)}
                >
                  <p className="feature-text">
                    {item.feature}
                    <span className="ms-3">
                      <img src={images.icon_top} alt="icon" />
                    </span>
                  </p>

                  <div
                    className="portrait-float-box"
                    ref={(el) => (boxRefs.current[idx] = el)}
                  >
                    <div className="portrait-content">
                      <p className="long-content">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <img src={images.shape} id='shape' alt="shape" /> */}
        <div id="video-section">
          {/* <img
            src={images.outer_video_image}
            alt="outer_video_image"
            className="outer-video-img"
          /> */}
          <img
            src={images.favicon_big}
            alt="inner_video_image"
            className="inner-video-img img-fluid"
          />
          {/* <div id="play-btn">
            <FaCirclePlay />
          </div> */}
          <div className="circle-overlay"></div>
        </div>
      </section>

      <div
        id="partnership"
        className="container-fluid p-0 section-with-animations"
      >
        <div className="content-width px-4 px-md-4">
          <div className="slide-up">
            <div className="title text-start slide-up-text">
              PARTNERSHIP WITH ALL CLIENTS
            </div>
          </div>

          <p className="long-content text-start mb-4">
            At Eden Utilities, partnership means more than a transaction. it's a
            shared commitment to long-term value.
            <br></br>
            <br></br>
            From the ground up, our approach has been shaped by deep expertise,
            sustainable thinking, and a consultative mindset.
          </p>
          {/* <p className="long-content text-blue pb-4">Read More..</p> */}
          <Btn rightIcon onClick={openContactModal}>
            Speak to an expert
          </Btn>
        </div>

        <div className="circle">
          <svg
            stroke="#2f98d0"
            strokeWidth="2"
            viewBox="0 0 1400 1400"
            preserveAspectRatio="none"
          >
            <path
              d="M180,1400 C-430,380 700,-250 1400,265 L1400,1400 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      <div
        id="csr"
        className="container-fluid p-0 pt-5 section-with-animations"
      >
        <div className="content-width px-4 px-md-4">
          <div>
            <div>
              <div className="title text-start">CSR Intiatives</div>
            </div>
            <p className="long-content text-start mb-5">
              At Eden, responsibility isn’t a statement, it’s a standard.
              <br></br>
              <br></br> We believe business has a responsibility to do more than
              deliver results. It should also leave a positive mark on the
              environment and the communities it touches.
            </p>

            <div className="d-flex g-2 csr-features">
              <div className="feature d-flex">
                <img
                  src={images.secure}
                  className="security-icon"
                  alt="security policy icon"
                />
                <div>
                  <h5 className="text-start m-0 mb-2">Social Responsibility</h5>
                  <p className="long-content-medium">
                    Corporate Social Responsibility is woven into the way we
                    think and operate. From supporting carbon reduction and
                    sustainable utility practices to contributing time and
                    expertise
                  </p>
                </div>
              </div>
              <div className="feature d-flex">
                <img
                  src={images.secure}
                  className="security-icon"
                  alt="security policy icon"
                />
                <div>
                  <h5 className="text-start m-0 mb-2">Environmental Impact</h5>
                  <p className="long-content-medium">
                    We’re conscious of the environmental impact of every
                    decision we make, and we’re just as committed to doing good
                    on a local level.
                  </p>
                </div>
              </div>
            </div>
            {/* <p className="long-content text-end text-blue pb-4 pe-5">
              Read More..
            </p> */}
          </div>
          <div>
            <div className="title title2 text-start">
            Business With  <br></br>A Conscience
            </div>
          </div>
        </div>

        <img src={images.leaf2} className="leaf2" alt="security policy icon" />

        <div className="circle">
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

      <div id="posts" className="container-fluid px-5">
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
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="posts-swiper"
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="post-card p-3 bg-white h-100">
                <img src={post.image} alt={post.title} className="w-100 mb-3" />
                <h6 className="my-3">{post.title}</h6>
                <p className="post-description">{post.description}</p>
                <div className="text-end">
                  {/* <a href={post.link}>Read More...</a> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Btn rightIcon onClick={openContactModal}>
          Speak to an expert
        </Btn>
      </div>

      <div id="vision">
        <img src={images.tree} className="tree" alt="tree" />
        <div className="outer-box">
          <div className="inner-box">
            <div className="vision-card p-3">
              <div className="d-flex">
                <div className="before-promise"></div>
                <div className="mb-3">
                  <h2 className="mb-0">The Eden Promise</h2>
                  <p className="v-description">
                    We promise to deliver trusted advice, reduce environmental
                    impact, support communities, and bring together experts who
                    care all to create better outcomes for our clients and the
                    world around us.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={images.person} className="person" alt="person" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
