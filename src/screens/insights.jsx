import React, { useState } from "react";
import Header from "../components/other/header";
import Footer from "../components/other/footer";
import Brands from "../components/pages/brands";
import { FaShareAlt, FaFacebookF, FaTwitter } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "../insights.css";
import images from "../components/theme/imagesPath";
import Btn from "../components/other/btn";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { useModal } from "../components/pages/ModalContext";
import { blogPosts } from "../components/blogPostsContent";


const SideblogPosts = [
  {
    id: 1,
    title:
      "Rising Energy Costs - “When Energy Becomes a Boardroom Issue: How to Protect Growth in a Volatile Market” ",
    content:
      "Meeting global hydrogen demand requires innovative zero-carbon processes and sustainable market strategies.",
    image: images.post1,
  },
  {
    id: 2,
    title:
      "Electricity Demand from AI & Data Centres - “AI’s Hidden Cost: Why the Smart Revolution Needs Smarter Energy Strategy”",
    content:
      "Exploring the expanding opportunities and challenges in renewable energy industries worldwide.",
    image: images.post2,
  },
  {
    id: 3,
    title:
      "Grid Modernisation & Infrastructure Investment - “The Great Grid Shift: What Businesses Must Know About the UK's Energy Overhaul” ",
    content:
      "Technology-driven smart cities are reshaping urban landscapes with AI and IoT solutions.",
    image: images.post3,
  },
  {
    id: 4,
    title:
      "Decarbonisation & Net-Zero Commitments  - “The Race to Net Zero: Turning Policy into Practical Progress for Your Business”",
    content:
      "New eco-friendly construction techniques are helping reduce the carbon footprint of cities.",
    image: images.post4,
  },
  {
    id: 5,
    title:
      "Advanced Metering & Energy Management - “From Data to Decisions: How Smart Metering Transforms Business Energy Use” ",
    content:
      "Hydrogen energy is becoming a leading solution in the pursuit of zero-emission transportation.",
    image: images.post5,
  },
  {
    id: 6,
    title:
      "Cybersecurity & Resilience - “More Than a Power Cut: Building Cyber-Resilient Energy Systems”",
    content:
      "Artificial intelligence continues to transform industries from healthcare to automotive sectors rapidly.",
    image: images.post3,
  },
  {
    id: 7,
    title:
      "Regulatory Compliance & Reporting - “Keeping Up with Compliance: How to Stay Ahead in an Evolving Regulatory Landscape” ",
    content:
      "Businesses worldwide are adapting their strategies to address urgent climate change realities.",
    image: images.post4,
  },
];

const SideblogPostsHighlights = [
  {
    id: 1,
    title: "Eden Utilities Becomes Back-of-Shirt Partner for Crawley Town FC",
    content:
      "Eden Utilities has expanded its partnership with Crawley Town Football Club by becoming the new back-of-shirt sponsor. This collaboration underscores Eden's commitment to supporting local sports and community initiatives. Source: Crawley Town FC, July 2024.",
    image: images.h1,
    tag: "Partnership",
    date: "July 2024",
    tagColor: "bg-primary", // Directly adding color
  },
  {
    id: 2,
    title: "Eden Utilities Partners with Manor Royal Business District",
    content:
      "Eden Utilities has announced a landmark partnership with the Manor Royal Business Improvement District (BID). This collaboration aims to provide businesses within the district with energy cost risk management services and promote sustainable energy solutions. Source: Eleven Sports Media.",
    image: images.h2,
    tag: "Business",
    date: "June 2024",
    tagColor: "bg-success", // Directly adding color
  },
  {
    id: 3,
    title: "Eden Utilities Empowers Businesses to Turn Waste into Electricity",
    content:
      "Through its Eden Infinity initiative, Eden Utilities is helping organisations convert waste into electricity, thereby reducing environmental impact and promoting sustainability. Source: Eleven Sports Media.",
    image: images.h3,
    tag: "Sustainability",
    date: "May 2024",
    tagColor: "bg-warning", // Directly adding color
  },
  {
    id: 4,
    title: "Eden Utilities Supports The Olive Tree Cancer Support Centre",
    content:
      "Eden Utilities has demonstrated its commitment to community support by contributing £577.49 to The Olive Tree Cancer Support Centre. This donation was raised through the auctioning of signed Crawley Town FC training tops. Source: Olive Tree Cancer Support Centre.",
    image: images.h4,
    tag: "Charity",
    date: "April 2024",
    tagColor: "bg-danger", // Directly adding color
  },
];

const Insights = () => {
  const { openContactModal } = useModal();
  const navigate = useNavigate();

  const [activeTag, setActiveTag] = useState("All");

  // Collect all unique tags from blogPosts
  const tags = [
    "All",
    ...Array.from(new Set(blogPosts.map((p) => p.tag).filter(Boolean))),
  ];

  console.log("tags ==> ", tags);

  // Filter posts based on active tag
  const filteredPosts =
    activeTag === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.tag === activeTag);

  console.log("filteredPosts ==> ", filteredPosts);

  return (
    <div id="insights">
      <div id="insights-header">
        <img src={images.logo} alt="logo" className="logo" />
        <Header navItemStyle={{ color: "#000" }} />
      </div>

      <div className="container-fluid p-md-5 mb-5">
        <div className="row py-5 py-sm-0">
          {/* Left Side - Blogs */}
          <div className="col-lg-8">

            <div>
              <h1 className="fw-bold text-capitalize mb-4 title-breadcrump">Insights</h1>
              <p className="long-content text-dark fs-5 mb-4">
                Keep up with the latest company updates, opinion pieces, and news from
                the world of business energy.
              </p>
            </div>

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
                        className="text-link"
                      >
                        {post.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="d-flex flex-wrap gap-4 my-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`cursor-pointer fs-4 ${activeTag === tag ? "fw-bold text-black" : "text-muted"
                    }`}
                  style={{ cursor: "pointer" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Grid of Filtered Posts */}
            <div className="row g-4">
              {filteredPosts.map((post) => (
                <div className="col-lg-4 mb-4" key={post.id}>
                  <div className="blog-card h-100 border shadow-sm rounded overflow-hidden bg-white">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="img-fluid w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />

                    <div className="d-flex justify-content-between align-items-center p-3 text-muted small">
                      <small
                        className={`badge ${post.tagColor} tag-date-style p-1 me-2`}
                      >
                        {post.tag}
                      </small>
                      <span>
                        {post.date}
                        {/* <span className="dot mx-1">•</span>{" "}
                        {post.author} */}
                      </span>
                    </div>

                    <div className="px-3 pb-3">
                      <h5 className="fw-bold text-dark">{post.title}</h5>
                      <p className="text-muted small">{post.sub_title}</p>
                      <div
                        onClick={() => {
                          navigate("/insight-details", { state: { post } });
                        }}
                        className="text-dark text-link text-decoration-underline fw-semibold"
                      >
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Blog List */}
          <div className="col-lg-4 px-md-5 px-lg-2 sideBar">
            {/* Clean Energy Section */}
            <section className="cleanEnergy mb-4">
              <h4 className="mb-4 mx-5 mx-lg-3 text-black">Highlights</h4>
              <div className="border border-gray-300 rounded p-3 mx-5 mx-lg-3">
                {SideblogPostsHighlights?.map((post) => (
                  <div className="mb-4" key={post.id}>
                    <div className="blog-card h-100 border shadow-sm rounded overflow-hidden bg-white">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="img-fluid w-100"
                        style={{ objectFit: "cover" }}
                      />

                      <div className="d-flex justify-content-between align-items-center p-3 text-muted small">
                        <small
                          className={`badge ${post.tagColor} tag-date-style p-1 me-2`}
                        >
                          {post.tag}
                        </small>
                        <span>{post.date}</span>
                      </div>

                      <div className="px-3 pb-3">
                        <h5 className="fw-bold text-dark">{post.title}</h5>
                        <p className="text-muted small">{post.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Clean Energy Section */}
            {/* <section className="cleanEnergy">
              <h4 className="mb-4 mx-5 mx-lg-3">Clean Energy</h4>
              <div className="border border-gray-300 rounded p-3 mx-5 mx-lg-3">
                {SideblogPosts?.map((post) => (
                  <div key={post.id} className="d-flex mb-4">
                    <div className="flex-grow-1 pe-3">
                      <p className="mb-0">{post.title}</p>
                    </div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-small-image"
                    />
                  </div>
                ))}
              </div>
            </section> */}
          </div>
        </div>
      </div>

      {/* <TestimonialsSection /> */}

      <section className="contact-us-section container-fluid px-3 px-sm-4 px-xxl-5">
        <div className="row align-items-center justify-content-between">
          <div className="contact-text-section col-12 col-md-8">
            <h1 className="contact-heading mb-0 fs-2 lh-base lh-md-1.2 lh-lg-1.5">
              Speak with our team to see how Eden’s expertise can streamline
              your energy strategy, reduce waste, and support your wider
              sustainability goals.
            </h1>
          </div>

          <div className="contact-button-section col-12 col-md-4 d-flex justify-content-center">
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

      {/* <Brands style={{ padding: "15rem 0 0" }} /> */}
      <Footer />
    </div>
  );
};

export default Insights;
