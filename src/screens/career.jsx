import React, { useEffect, useRef } from "react";
import Footer from "../components/other/footer";
import Btn from "../components/other/btn";
import images from "../components/theme/imagesPath";
import { useModal } from "../components/pages/ModalContext";
import Header from "../components/other/header";
import gsap from "gsap";
import { blogPosts } from "../components/blogPostsContent";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const { openContactModal } = useModal();
  const cardRefs = useRef([]);

  const navigate = useNavigate();

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      const title = card.querySelector(".card-title");
      const desc = card.querySelector(".card-description");

      gsap.set(desc, { autoAlpha: 0, y: 20 });

      card.addEventListener("mouseenter", () => {
        gsap.to(title, { autoAlpha: 0, duration: 0.3 });
        gsap.to(desc, {
          autoAlpha: 1,
          y: -20,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(title, { autoAlpha: 1, duration: 0.3, transform: "translateY(20px)" });
        gsap.to(desc, {
          autoAlpha: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });
  }, []);

  const cardStyle = (img) => ({
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "1rem",
    minHeight: "250px",
    padding: "2rem",
    position: "relative",
    color: "#fff",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  });

  const overlayStyle = {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
  };

  return (
    <div id="insights">
      <div id="insights-header">
        <img src={images.logo} alt="logo" className="logo" />
        <Header navItemStyle={{ color: "#000" }} />
      </div>


      <div className="header-bottom-space"></div>

      <div className="mt-2 mt-md-5">
        <p className="green-text fs-5 text-center">WORKS FOR US</p>
        <h1 className="fw-bold text-center text-normal mb-4 title-breadcrump">Join a Team That’s<br></br>
          Built to Make a<br></br> Difference</h1>
      </div>


      <section id="why-us" className="container p-0 pt-5 mt-5">
        <div className="row hero-about-text">
          <div className="col-md-6 px-5 d-flex flex-column justify-content-between">
            <div>
              <p className="fw-bold text-normal mb-4 title-breadcrump mb-5">At <div className="eden-highlight green-text">eden.</div>

                {/* <br></br>We Build More Than <br></br>a Team */}</p>

              <p className="long-content fs-5 pt-5 pe-5">We don’t just hire people, we curate a
                team. From the beginning, our founder
                Mark set out to bring together the most
                knowledgeable, committed professionals
                in the industry. People who care about
                getting it right, who stay informed, and
                who want their work to have real impact
                for clients, the environment, and the
                wider community.</p>
            </div>
          </div>
          <div className="col-md-6 ps-0 pe-md-5">
            <img src={images.career1} className="img-fluid rounded" alt="civil" />
          </div>
        </div>
      </section>

      <div className="section-bottom container">
        <p className="long-content fs-5 text-white text-center">
          We're growing, and that growth is only possible with the right
          people. As our client base expands, we’re looking for
          specialists who can help us maintain the high standards our
          clients <br></br>expect and deserve.
        </p>
      </div>


      <section className="career-content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">

              <p className="dark-text text-center title-big title text-lineheight pb-5"> We’re particularly keen to hear from
              </p>
              <div className="row text-center gy-4 my-3">
                <div className="col-12 col-md-4">
                  <div
                    className="career-card card-1"
                    ref={(el) => (cardRefs.current[0] = el)}
                    style={cardStyle(images.post1)}
                  >
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                      <h5 className="card-title fs-2">Energy<br></br>Consultants</h5>
                      <p className="card-description">
                        Energy consultants with experience supporting large-scale
                        energy users and complex portfolios
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div
                    className="career-card card-2"
                    ref={(el) => (cardRefs.current[1] = el)}
                    style={cardStyle(images.post2)}
                  >
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                      <h5 className="card-title fs-2">Operations<br></br>Professionals</h5>
                      <p className="card-description">
                        Operations professionals who thrive behind the scenes,
                        ensuring smooth service delivery
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div
                    className="career-card card-3"
                    ref={(el) => (cardRefs.current[2] = el)}
                    style={cardStyle(images.post7)}
                  >
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                      <h5 className="card-title fs-2">Customer<br></br>Support Experts</h5>
                      <p className="card-description">
                        Customer support experts who bring precision, empathy, and
                        reliability to every interaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="why-us" className="container p-0 pt-5 mt-5">
        <div className="row hero-about-text">
          <div className="col-md-6 px-5 d-flex flex-column justify-content-between">
            <div>
              <p className="fw-bold text-normal mb-4 title-breadcrump mb-5">At <div className="eden-highlight green-blue">eden.</div></p>
              <p className="long-content fs-5 pt-5 pe-5">
                You’ll be part of a team that shares
                values, not just skills. We support
                each other, challenge assumptions,
                and constantly evolve all while
                working towards a smarter, more
                sustainable future for utilities.
              </p>
            </div>

            <p className="fs-custom-xl green-text">IF THIS</p>
          </div>
          <div className="col-md-6 ps-0 pe-md-5">
            <img src={images.career2} className="img-fluid rounded" alt="civil" />
          </div>
        </div>
      </section>

      <div className="container position-relative d-flex justify-content-center mt-3">
        <div className="star1-outer">
          <img src={images.star1} className="img-fluid star" alt="star1" />
        </div>
        <p className="fs-custom-xl text-center text-black">SOUNDS</p>
        <div className="star2-outer">
          <img src={images.star2} className="img-fluid star" alt="star1" />
        </div>
      </div>

      <div className="container">
        <p className="fs-custom-xl text-end blue-text">LIKE YOU</p>
      </div>



      <div className="container py-5 chat-section">
        <p className="dark-text title text-start title-big-medium mb-0">Don’t just send a CV</p>
        <p className="long-content">Reach out, introduce yourself, and let’s have a chat.<br></br>
          We’re always open to speaking with the right people</p>

        <Btn>Reach Out</Btn>

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
      <Footer />
    </div>
  );
};

export default Career;
