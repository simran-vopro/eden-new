import React, { useEffect, useRef } from "react";
import Footer from "../components/other/footer";
import Btn from "../components/other/btn";
import images from "../components/theme/imagesPath";
import { useModal } from "../components/pages/ModalContext";
import Header from "../components/other/header";
import gsap from "gsap";

const Career = () => {
  const { openContactModal } = useModal();
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      const title = card.querySelector(".card-title");
      const desc = card.querySelector(".card-description");

      gsap.set(desc, { autoAlpha: 0, y: 20 });

      card.addEventListener("mouseenter", () => {
        gsap.to(title, { autoAlpha: 0, duration: 0.3 });
        gsap.to(desc, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(title, { autoAlpha: 1, duration: 0.3 });
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

      <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <h1 className="title text-center">Works for us</h1>
              <h6 className="text-center">
                Join a Team That’s Built to Make a Difference
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section pb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12">
              <div className="custom-block custom-block-overlay" style={{background: "#2f98d0"}}>
                <div className="d-flex flex-column h-100">
                  <div className="custom-block-overlay-text d-flex">
                    <div>
                      <h5 className="text-white mb-2">We are eden</h5>
                      <p className="text-white long-content">
                        At Eden, we don’t just hire people we curate a team.
                        From the beginning, our founder Mark set out to bring
                        together the most knowledgeable, committed professionals
                        in the industry. People who care about getting it right,
                        who stay informed, and who want their work to have real
                        impact for clients, the environment, and the wider
                        community.
                      </p>
                    </div>
                  </div>
                  {/* <div className="section-overlay"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <p className="long-content mb-4">
                We're growing, and that growth is only possible with the right
                people. As our client base expands, we’re looking for
                specialists who can help us maintain the high standards our
                clients expect and deserve.
              </p>
              <p className="fs-5 fw-semibold mb-2">
                We’re particularly keen to hear from:
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
                      <h5 className="card-title">Energy Consultants</h5>
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
                      <h5 className="card-title">Operations Professionals</h5>
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
                      <h5 className="card-title">Customer Support Experts</h5>
                      <p className="card-description">
                        Customer support experts who bring precision, empathy, and
                        reliability to every interaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="long-content mt-5">
                At Eden, you’ll be part of a team that shares values, not just
                skills. We support each other, challenge assumptions, and
                constantly evolve all while working towards a smarter, more
                sustainable future for utilities.
              </p>
              <p className="fs-5">
                If this sounds like you, don’t just send a CV — reach out,
                introduce yourself, and let’s have a chat. We’re always open to
                speaking with the right people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us-section container-fluid px-3 px-sm-4 px-xxl-5 py-5 mt-5">
        <div className="row align-items-center container justify-content-between">
          <div className="contact-text-section col-12 col-md-8">
            <h1 className="contact-heading mb-0 fs-4 lh-base lh-md-1.2 lh-lg-1.5">
              Speak with our team to see how Eden’s expertise can streamline
              your energy strategy, reduce waste, and support your wider
              sustainability goals.
            </h1>
          </div>

          <div className="contact-button-section col-12 col-md-4 d-flex justify-content-center mt-4 mt-md-0">
            <Btn
              rightIcon
              background={"#fff"}
              iconbackground={"#2f98d0"}
              color={"#555"}
              className="no-hover"
              style={{
                padding: "1rem 2rem",
                borderRadius: "2rem",
                fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
                minWidth: "12rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              rightIconChildren={
                <img
                  className="img-fluid"
                  style={{ width: "1.25rem", height: "1.25rem" }}
                  src={images.icon_top_white}
                  alt="contact icon"
                />
              }
              onClick={openContactModal}
            >
              <span className="text-nowrap">Contact Us</span>
            </Btn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
