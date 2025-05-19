import React, { useState } from "react";
import Header from "../components/other/header";
import images from "../components/theme/imagesPath";
import Footer from "../components/other/footer";
import Btn from "../components/other/btn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import Brands from "../components/pages/brands";
import { blogPosts } from "../components/blogPostsContent";
import SectorGrid from "../components/pages/sectorGrid";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useModal } from "../components/pages/ModalContext";

const EdenInfinity = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const slides = [
    {
      title: "Hospitality",
      description:
        "Optimize energy efficiency in hotels and restaurants while maintaining guest comfort.",
      icon: images.icon1,
    },
    {
      title: "Breweries",
      description:
        "Improve sustainability in brewing with smart energy and water management.",
      icon: images.icon2,
    },
    {
      title: "Corporate",
      description:
        "Reduce operational costs with intelligent energy solutions for offices and retail spaces.",
      icon: images.icon3,
    },
    {
      title: "Real Estate",
      description:
        "Support smart, sustainable housing developments with advanced energy management.",
      icon: images.icon4,
    },
    {
      title: "Hospitality",
      description:
        "Optimize energy efficiency in hotels and restaurants while maintaining guest comfort.",
      icon: images.icon1,
    },
    {
      title: "Breweries",
      description:
        "Improve sustainability in brewing with smart energy and water management.",
      icon: images.icon2,
    },
    {
      title: "Corporate",
      description:
        "Reduce operational costs with intelligent energy solutions for offices and retail spaces.",
      icon: images.icon3,
    },
    {
      title: "Real Estate",
      description:
        "Support smart, sustainable housing developments with advanced energy management.",
      icon: images.icon4,
    },
  ];

  const reviews = [
    {
      title: "- Alison Watson, Operations Manager",
      description: `Eden Utilities were professional and clear, simplifying our energy decisions and securing better rates than we could on our own. Highly recommended.`,
      img: images.review1,
    },
    {
      title: "- Mark Robson, Head of Procurement",
      description: `Eden Utilities helped Biffa achieve major savings through their deep energy expertise. Their professionalism and insight are outstanding.`,
      img: images.review2,
    },
    {
      title: "- Mark Robson, Head of Procurement",
      description: `Thanks to Eden Utilities’ knowledge and integrity, we’ve seen great results. I confidently recommend them to any business.`,
      img: images.review3,
    },
  ];

  const { openContactModal } = useModal();

  const navigate = useNavigate();

  useGSAP(() => {
    gsap.fromTo(
      ".clouds",
      { x: "-100%", opacity: 0 }, // starting state
      { x: "0%", opacity: 1, duration: 1, delay: 0.2 } // ending state
    );
    gsap.fromTo(
      ".cloud",
      { x: "100%", opacity: 0 }, // starting state
      { x: "0%", opacity: 1, duration: 1, delay: 0.2 } // ending state
    );
  }, []);

  return (
    <div id="insights">
      <div id="insights-header">
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img src={images.logo} alt="logo" className="logo" />
        </div>{" "}
        <Header navItemStyle={{ color: "#000" }} />
      </div>

      <div className="header-bottom-space"></div>

      <div className="infinity-video-section">
        <div className="top-hero container">
          <img src={images.clouds} alt="logo" className="clouds img-fluid" />
          <img
            src={images.infinity_logo}
            alt="logo"
            className="infinity-logo img-fluid"
          />
          <img src={images.cloud} alt="logo" className="cloud img-fluid" />
        </div>

        <div className="container d-flex flex-column align-items-md-center justify-content-center">
          <p className="blue-text fs-md-5 mb-2">
            Discover Eden – The Future of Utility & Infinity Solutions
          </p>
          <p className="dark-text title-big-medium text-lineheight">
            Transforming Energy Solutions
          </p>

          <p className="long-content text-left text-md-center m-0">
            The World is changing, Business and Consumers are becoming more
            aware about the importance of being “Sustainable”. This can be
            difficult and expensive, but there is a growing expectation that
            “Business” also does something to help the planet. Several
            organizations are already taking this onboard and are trying their
            best to deploy a more environmentally friendly policy. If this is
            already happening in your business, then great, but now you could do
            more.
          </p>
        </div>

        <div className="video-section video-section-eden container">
          <div className="video-icon-2" onClick={() => setShowVideoModal(true)}>
            <img src={images.videoIconBg} className="img-fluid"></img>
          </div>
        </div>

        <div className="row container">
          <div className="col-md-4">
            <din className="card-top">
              <div className="top-card-icon">
                <img src={images.delete_icon} className="img-fluid"></img>
              </div>
              <p className="long-content text-center">
                All organisations produce waste, this is collected and taken to
                landfill with a potential impact on the environment.
              </p>
            </din>
          </div>
          <div className="col-md-4">
            <din className="card-top">
              <div className="top-card-icon">
                <img src={images.bus_icon} className="img-fluid"></img>
              </div>
              <p className="long-content text-center">
                Eden works with its partners to generate power from this waste
                and ensure that this power is allocated to your business
                account.
              </p>
            </din>
          </div>
          <div className="col-md-4">
            <din className="card-top">
              <div className="top-card-icon">
                <img src={images.files_icon} className="img-fluid"></img>
              </div>
              <p className="long-content text-center">
                This allows your organisation to support the generation of your
                own power, EDEN Infinity provides you with a greener footprint
                on this planet.
              </p>
            </din>
          </div>
        </div>

        <div className="section-space">
          <Btn onClick={openContactModal}>Transform your buisness today</Btn>
        </div>

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
                    className="btn-close btn-close-white bg-light ms-auto me-0 me-md-5"
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
      </div>

      <div className="sectors">
        <div className="container chat-section">
          <p className="green-text fs-md-5 mb-2">Industries We Serve</p>
          <p className="dark-text title text-start text-normal title-big-medium mb-0">
            Tailored Solutions for<br></br>
            Diverse Sectors
          </p>
        </div>

        <div className="container top-sectors">
          <div className="row">
            <div className="col-md-2 d-flex justify-content-center p-0">
              <div className="flower-features">
                <div className="feature-box-outer">
                  <div className="feature-box top-left-radius">
                    <img
                      src={images.heart}
                      alt="feature-box-icon"
                      className="feature-box-icon"
                    />
                    <p>Save Effort</p>
                  </div>
                  <div className="feature-box feature-box-green top-right-radius">
                    <img
                      src={images.time}
                      alt="feature-box-icon"
                      className="feature-box-icon"
                    />
                    <p>Save Time</p>
                  </div>
                  <div className="feature-box feature-box-green bottom-left-radius">
                    <img
                      src={images.check}
                      alt="feature-box-icon"
                      className="feature-box-icon"
                    />
                    <p>Fully Transparent</p>
                  </div>
                  <div className="feature-box bottom-right-radius">
                    <img
                      src={images.money}
                      alt="feature-box-icon"
                      className="feature-box-icon"
                    />
                    <p>Some Money</p>
                  </div>
                </div>

                <div className="infinity-center">
                  <img
                    src={images.infinity_logo_transparent}
                    alt="feature-box-icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-10 p-0 position-relative">
              <div className="sector-swiper-outer row align-items-center">
                <div className="col-md-2">
                  <div className="swiper-button-prev slider-icon d-none d-md-block">
                    <BiChevronLeftCircle />
                  </div>
                </div>

                <div class="col-md-8 p-4 p-md-0">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={4}
                    slidesPerGroup={4}
                    loop={false}
                    className="sectors-slider"
                  >
                    {slides.map((slide, index) => (
                      <SwiperSlide key={index} className="slider-sector">
                        <div
                          onClick={() =>
                            openContactModal({
                              service: slide.title,
                              step: 1,
                            })
                          }
                          style={{
                            cursor: "pointer",
                            backgroundColor:
                              Math.floor(index / 2) % 2 === 1 && index % 2 === 0
                                ? "#2f98d0"
                                : "#4b6984",
                          }}
                          className="slider-sector-item"
                        >
                          <div className="infinity-center position-relative mb-3">
                            <img src={slide.icon} alt="feature-box-icon" />
                          </div>
                          <h5 className="font-semibold mb-2">{slide.title}</h5>
                          <p className="long-content-medium text-white">
                            {slide.description}
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="col-md-2">
                  <div className="swiper-button-next slider-icon d-none d-md-block">
                    <BiChevronRightCircle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews container">
        <div className="row">
          <div className="col-md-2 p-0">
            <img
              src={images.infinity_logo_transparent}
              className="infinity-logo-circular"
              alt="feature-box-icon"
            />
          </div>
          <div className="col-md-10 p-0 position-relative">
            <div className="row align-items-center">
              <div className="col-md-1"></div>

              <div className="col-md-10 p-0">
                <div className="container">
                  <div className="desktop-review-slider">
                    <p className="dark-text blue-text text-center title text-start text-normal title-big-medium mb-0">
                      Client Testimonials
                    </p>
                    <p className="long-content text-dark text-center mb-5">
                      Boost your product and service's credibility by<br></br>
                      adding testimonials from your clients.
                    </p>
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }}
                      pagination={{ clickable: true }}
                      spaceBetween={20}
                      slidesPerView={3}
                      slidesPerGroup={3}
                      loop={false}
                      className="reviews-slider"
                    >
                      {reviews.map((slide, index) => (
                        <SwiperSlide key={index} className="slider-review">
                          <div
                            style={{
                              marginTop: index === 1 ? "50%" : 0,
                            }}
                            className="slider-review-item"
                          >
                            <img src={slide.img} alt="User" className="mb-3" />
                            <p className="long-content-medium text-dark text-center">
                              {slide.description}
                            </p>
                            <h5 className="long-content-medium font-semibold text-center  blue-text mt-2">
                              {slide.title}
                            </h5>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className="mobile-review-slider">
                    <p className="dark-text blue-text text-center title text-start text-normal title-big-medium mb-0">
                      Client Testimonials
                    </p>
                    <p className="long-content text-dark text-center mb-5">
                      Boost your product and service's credibility by
                      adding testimonials from your clients.
                    </p>
                    <Swiper
                      modules={[Navigation, Pagination]}
                      navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }}
                      pagination={{ clickable: true }}
                      spaceBetween={20}
                      slidesPerView={1}
                      slidesPerGroup={1}
                      loop={false}
                      className="reviews-slider"
                    >
                      {reviews.map((slide, index) => (
                        <SwiperSlide key={index} className="slider-review">
                          <div className="slider-review-item">
                            <img src={slide.img} alt="User" className="mb-3" />
                            <p className="long-content-medium text-dark text-center">
                              {slide.description}
                            </p>
                            <h5 className="long-content-medium font-semibold text-center  blue-text mt-2">
                              {slide.title}
                            </h5>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>

              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="eden-brands container">
        <Brands />
      </div>

      <section id="why-us" className="container px-0">
        <div className="row hero-about-text">
          <div className="col-md-6 ps-0 pe-md-5">
            <img src={images.about} className="img-fluid rounded" alt="civil" />
          </div>
          <div className="col-md-6 p-4 ps-md-5">
            <p className="green-text fs-md-5 mb-0">About Our Client</p>
            <p className="dark-text title text-start title-big text-lineheight">
              From SMEs to Industry Leaders, We've Got You Covered
            </p>
            <p className="long-content py-4">
              Eden Utilities is proud to work alongside a number of key clients,
              ranging from smaller SME businesses, all the way through to very
              large energy consumers. Our aim is to deliver an open, honest, and
              fully transparent approach at all times. We treat each client we
              work with as a partner and look to create solid, long-term
              relationships built on trust
            </p>
            <Btn onClick={openContactModal} rightIcon>
              Speak to an Expert
            </Btn>
          </div>
        </div>
      </section>

      <div className="feature-sectors">
        <SectorGrid />
      </div>

      <div className="latest-news">
        <p className="dark-text text-center title-big title text-lineheight pb-5">
          Latest news & updates
        </p>

        <div className="news container">
          {/* top blogs posts */}
          <div className="row g-4 mb-5">
            {/* First Row: One large, two small */}
            <div className="col-lg-7">
              <div
                onClick={() => {
                  navigate("/insight-details", {
                    state: { post: blogPosts[0] },
                  });
                }}
                className="position-relative text-white blog-grid-item-lg"
                style={{ height: "100%", cursor: "pointer" }}
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
                <div className="position-absolute bottom-0 p-2 p-md-4">
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
                      onClick={() => {
                        navigate("/insight-details", {
                          state: { post },
                        });
                      }}
                      className="position-relative text-white blog-grid-item"
                      style={{ height: "100%", cursor: "pointer" }}
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
                      <div className="position-absolute bottom-0 p-2 p-md-3">
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
                  onClick={() => {
                    navigate("/insight-details", {
                      state: { post },
                    });
                  }}
                  className="position-relative text-white blog-grid-item"
                  style={{ height: "100%", cursor: "pointer" }}
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
                  <div className="position-absolute bottom-0 p-2 p-md-3">
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
      </div>

      <Footer />
    </div>
  );
};

export default EdenInfinity;
