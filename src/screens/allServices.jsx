import React, { useState } from 'react';
import Header from '../components/other/header';
import images from '../components/theme/imagesPath';
import Footer from '../components/other/footer';
import Btn from '../components/other/btn';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';
import Brands from '../components/pages/brands';
import { blogPosts } from '../components/blogPostsContent';
import SectorGrid from '../components/pages/sectorGrid';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import TestimonialsSection from './testimonialsSection';


export const AllServices = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);

    const slides = [
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
                <img src={images.logo} alt="logo" className="logo" />
                <Header navItemStyle={{ color: "#000" }} />
            </div>

            <div className="header-bottom-space"></div>

            <section id="why-us" className="container px-0">
                <div className="row hero-about-text">
                    <div className="col-md-6 ps-0 pe-md-5">
                        <img src={images.about} className="img-fluid rounded" alt="civil" />
                    </div>
                    <div className="col-md-6 ps-5">

                        <p className="dark-text title text-start title-big text-lineheight">Eden Auditing</p>

                        <p className="green-text fs-5 mb-0">No assumptions. No missed details. Just clarity and value</p>
                        <p className="long-content py-4">Utility bills are often affected by complex tariffs
                            and ever-changing regulations — and errors
                            can easily go unnoticed. At Eden, we carry out
                            independent audits to uncover undue charges
                            and recover any credit owed.
                        </p>
                        <ul className='mb-5'>
                            <li className='long-content m-0 p-0'>Every element of your bill is re-simulated and
                                checked for accuracy.</li>
                            <li className='long-content m-0 p-0'>Clear, easy-to-understand reports highlight
                                findings and recovered amounts</li>
                            <li className='long-content m-0 p-0'>Advanced insights available to supportforward planning and cost control
                            </li>
                        </ul>
                        <Btn rightIcon>Speak to an Expert</Btn>
                    </div>
                </div>
            </section>


            <div className='eden-brands' style={{ marginTop: "5rem" }}>
                <Brands hideTitle />
            </div>



            <div className='infinity-video-section'>

                <div className='video-section container position-relative'>
                    <div className='container d-flex flex-column align-items-center justify-content-center' style={{ zIndex: "999" }}>
                        <p className="text-white fs-5 mb-2">What we do</p>

                        <p className="long-content text-center text-white m-0 w-50">Driving smarter, greener utility strategies through expert
                            procurement, data-led insight, and flexible support tailored to your
                            operational and sustainability goals. up in the landfill. Eden Infinity
                            works with trusted partners to turn that waste into energy, which is
                            then allocated back to your business account.</p>

                        <div className="video-icon-2 position-relative" onClick={() => setShowVideoModal(true)} >
                            <img src={images.videoIconBg} className="img-fluid"></img>
                        </div>
                    </div>



                    <div className='overlay'></div>
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

            </div>

            <div className='sectors'>
                <div className="container chat-section">

                    <div className="row p-0 align-items-center">
                        <div className="col-md-6">
                            <p className="green-text fs-5 mb-2">No assumptions. No missed details. Just clarity and value</p>
                            <p className="dark-text  text-start text-normal fs-2 mb-0">At Eden, we offer a range of services that<br></br>
                                will support and improve your business’s<br></br>
                                energy strategy.</p>
                        </div>

                        <div className="col-md-6">
                            <div className='row align-items-center justify-content-center mt-5'>
                                <div className="col-md-2">
                                    <div className="swiper-button-prev slider-icon">
                                        <BiChevronLeftCircle />
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="swiper-button-next slider-icon">
                                        <BiChevronRightCircle />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container top-sectors services-slider position-relative">

                    <div className="sector-swiper-outer row align-items-center">
                        <div className="col-md-12 p-0">
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
                                className="sectors-slider">

                                {slides.map((slide, index) => (
                                    <SwiperSlide key={index} className='slider-sector p-2'>
                                        <div className="sector-card text-center p-4 rounded">
                                            <div className="icon-box mb-3">
                                                <img src={slide.img} alt="icon" className="img-fluid" />
                                            </div>
                                            <h5 className="mb-2">{slide.title}</h5>
                                            <p className="long-content-medium small mb-0">{slide.content}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>



                    </div>

                </div>
            </div>


            <div className="reviews">

                <div className="row">
                    <div className="col-md-2 p-0">
                        <img src={images.infinity_logo_transparent} className='infinity-logo-circular' alt="feature-box-icon" />
                    </div>
                    <div className="col-md-10 p-0 position-relative">
                        <div className="row align-items-center">

                            <div className="col-md-1">

                            </div>

                            <div className="col-md-10 p-0">
                                <div className="container">
                                    <p className="dark-text blue-text text-center title text-start text-normal title-big-medium mb-0">Client Testimonials</p>
                                    <p className="long-content text-dark text-center mb-5">Boost your product and service's credibility by<br></br>adding testimonials from your clients.</p>

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
                                        className="reviews-slider">

                                        {reviews.map((slide, index) => (
                                            <SwiperSlide key={index} className='slider-review'>
                                                <div style={{ marginTop: index === 1 ? "50%" : 0 }} className="slider-review-item">
                                                    <img src={slide.img} alt="User" className='mb-3' />
                                                    <p className="long-content-medium text-dark text-center">{slide.description}</p>
                                                    <h5 className="long-content-medium font-semibold text-center  blue-text mt-2">{slide.title}</h5>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                </div>

                            </div>

                            <div className="col-md-1">

                            </div>

                        </div>
                    </div>
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




            <Footer />
        </div>
    )
}
