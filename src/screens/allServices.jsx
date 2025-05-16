import React, { useEffect, useState } from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';
import TestimonialsSection from './testimonialsSection';
import { CgArrowRight } from 'react-icons/cg';
import Features from '../components/pages/features';
import { useModal } from '../components/pages/ModalContext';
import { Accordion } from 'react-bootstrap';
import { data } from '../components/servicesContent';


export const AllServices = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [service, setService] = useState({});

    const location = useLocation();
    const { serviceContent } = location.state || {};

    useEffect(() => {
        setService(serviceContent);
    }, [serviceContent])

    const handleUpdateContent = (content) => {
        setService(content);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

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

    const { openContactModal } = useModal();

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
                        <img src={service?.img} className="img-fluid rounded" style={{
                            height: "100%",
                            objectFit: "cover"
                        }} alt="civil" />
                    </div>
                    <div className="col-md-6 ps-5">

                        <p className="dark-text title text-start title-big text-lineheight">{service?.title}</p>

                        <p className="green-text fs-5 mb-0">No assumptions. No missed details. Just clarity and value</p>


                        <div className="long-content py-4" dangerouslySetInnerHTML={{ __html: service?.longContent }} />

                        <Btn rightIcon onClick={openContactModal}>Speak to an Expert</Btn>
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
                            <p className="green-text fs-5 mb-2">Other Services</p>
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
                                spaceBetween={25}
                                slidesPerView={4}
                                slidesPerGroup={4}
                                loop={false}
                                className="sectors-slider">

                                {data.map((slide, index) => (
                                    <SwiperSlide key={index} className='slider-sector p-2'>
                                        <div className="sector-card service-card p-4 rounded align-items-start">
                                            <div className="icon-box mb-3">
                                                <img src={slide.icon} alt="icon" className="img-fluid" />
                                            </div>
                                            <h5 className="mb-2 text-start">{slide.title}</h5>
                                            <p className="long-content-medium small mb-0">{slide.content}</p>
                                            <div className="btn-bottom half-bg-hover" onClick={() => handleUpdateContent(slide)}>
                                                <div className="d-flex align-items-center justify-content-center p-2">
                                                    <p className='long-content-medium text-black small mb-0 p-0'>Find out more</p>
                                                    <CgArrowRight className='blue-text' style={{ fontSize: 20, paddingLeft: 5 }} />
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>



                    </div>

                </div>


                <div className="container">
                    <Features data={[
                        { title: 84, content: "Suppliers Engaged", img: images.feature1 },
                        { title: 67, content: "Fixed Products", img: images.feature2 },
                        { title: 97, content: "Retention", img: images.feature3 },
                        { title: 98, content: "Satisfaction", img: images.feature4 },
                    ]} />
                </div>
            </div>


            <div className="reviews">
                <div className="container">
                    <TestimonialsSection />

                </div>
            </div>



            <section id="services2" className="block--spc">
                <div className="container">
                    <div className="row justify-content-between align-items-center">

                        <div className="col-md-4">
                            <div id="services-header">
                                <p className="text-muted text-start">
                                    Smart Energy Solutions for Businesses
                                </p>

                                <h4 className="text-start">
                                    We know how to keep our
                                    clients’ energy costs low and
                                    carbon footprints small. We
                                    have created services which
                                    help them to achieve their
                                    operational objectives.
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <Accordion defaultActiveKey="0" flush>
                                {data.map((service, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={service.id}>
                                        <Accordion.Header ><h5 className='title text-start fs-4'>{service.title}</h5></Accordion.Header>
                                        <Accordion.Body>{service.content}

                                            <div className="mt-3" onClick={() => handleUpdateContent(service)}>
                                                <h5 style={{ letterSpacing: "0.5px" }} className='text-black text-link'>{service.link}</h5>
                                            </div>
                                        </Accordion.Body>

                                    </Accordion.Item>
                                ))}
                            </Accordion>

                        </div>
                    </div>
                </div>


            </section>




            <section id="why-us" className="container px-0">
                <div className="row hero-about-text">

                    <div className="col-md-6 pe-5">
                        <p className="green-text fs-5">People-Powered Excellence</p>
                        <p className="dark-text title text-start title-big text-lineheight">The Expertise Behind Eden
                        </p>


                        <p className="long-content py-4">Building Eden was never just about the
                            service; it was about the people behind
                            it. Mark has curated a team of some of
                            the best professionals in the industry,
                            each bringing deep expertise and a
                            commitment to doing things properly.
                            From client-facing energy consultants
                            to the operational team behind the
                            scenes, Eden is built on knowledge,
                            precision, and care at every level.

                        </p>

                        <Btn rightIcon onClick={openContactModal}>Speak to an Expert</Btn>
                    </div>
                    <div className="col-md-6 ps-0 pe-md-5">
                        <img src={images.about} className="img-fluid rounded" alt="civil" />
                    </div>
                </div>
            </section>


            <div className="latest-news mt-5 pt-5">
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


            <Footer />
        </div>
    )
}
