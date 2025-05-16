import React, { useEffect, useRef } from 'react';
import "../components/stylesheets/works.css";
import "../insights.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import images from '../components/theme/imagesPath';
import Header from '../components/other/header';
import Footer from "../components/other/footer";


const HowItWorks = () => {
    const stepRefs = useRef([]);

    useGSAP(() => {
        gsap.from(stepRefs.current, {
            y: 100,
            opacity: 0,
            stagger: 0.3,
            duration: 0.8,
            ease: "power3.out",
        });
    }, []);

    return (
        <div id="how-it-works" className='main-work'>
            <div id="insights-header">
                <img src={images.logo} alt="logo" className="logo" />
                <Header navItemStyle={{ color: "#000" }} />
            </div>


            <div className="header-bottom-space"></div>
            <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-12 mx-auto">
                            <h1 class="title text-center">How Eden Works</h1>
                            <h6 class="text-center">A Smarter, Simpler Journey to Utility Clarity and Control Built for Scale and Complexity </h6>
                        </div>

                    </div>
                </div>
            </section>


            <section class="featured-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-12">
                            <div class="custom-block custom-block-overlay">
                                <div class="d-flex flex-column h-100">
                                    <div class="custom-block-overlay-text d-flex">
                                        <div>
                                            {/* <h5 class="text-white mb-2">We are eden</h5> */}

                                            <p class="text-white long-content">At Eden, we specialise in helping medium to large organisations manage complex, high-stakes energy and utility challenges. Whether you’re juggling multi-site operations, navigating volatile energy markets, or working toward sustainability targets, we bring clarity, structure, and confidence to the process  backed by a team of experts who know what they’re doing. </p>

                                        </div>
                                    </div>
                                    <div class="section-overlay"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="timeline-section section-padding" id="section_3">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">

                        <div class="col-12 text-center">
                            <h1 class="text-white mb-4">How does it work?</h1>
                        </div>

                        <div class="col-lg-10 col-12 mx-auto">
                            <div class="timeline-container">
                                <ul class="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                                    <div class="list-progress">
                                        <div class="inner"></div>
                                    </div>

                                    <li>
                                        <h4 class="text-white mb-3">It Starts With a Conversation</h4>

                                        <p class="text-white">Every partnership begins with a call  not a pitch. We connect you with a senior member of the Eden team who takes time to understand your business, current pressures, and what you need to achieve. Whether you're responsible for a national property portfolio, high-usage production sites, or an intricate procurement setup, we speak your language and dig into the detail from day one.
                                            At this stage, we listen more than we talk  and we bring ideas, not generic solutions. </p>

                                        <div class="icon-holder">
                                            1
                                        </div>
                                    </li>

                                    <li>
                                        <h4 class="text-white mb-3">Audit &amp; Discovery  Built for Scale</h4>
                                        <p class="text-white">Next, we carry out a thorough review of your current utilities landscape. This process is designed for large, often complex organisations and includes: </p>
                                        <ul>
                                            <li className='inner-list'>Detailed analysis of supply contracts across multiple locations</li>
                                            <li className='inner-list'>Tariff structures and consumption profiles</li>
                                            <li className='inner-list'>Capacity reviews and metering accuracy</li>
                                            <li className='inner-list'>Risk exposure assessment for fixed and flexible contract strategies</li>
                                        </ul>
                                        <p class="text-white pt-3">We do the heavy lifting so your team doesn’t have to  and we flag risks, opportunities, and actions with complete transparency. </p>

                                        <div class="icon-holder">
                                            2
                                        </div>
                                    </li>

                                    <li>
                                        <h4 class="text-white mb-3">Strategy Designed Around You</h4>

                                        <p class="text-white">With the full picture in place, we build a strategic energy and utilities plan tailored to your business. This could include: </p>
                                        <ul>
                                            <li className='inner-list'>Large-scale procurement with bespoke risk profiles</li>
                                            <li className='inner-list'>Consolidated contract management for multiple sites</li>
                                            <li className='inner-list'>Full forensic invoice validation and recovery</li>
                                            <li className='inner-list'>Carbon reduction planning and Eden Infinity waste-to-energy integration</li>
                                        </ul>
                                        <p class="text-white pt-3">We present options clearly, back them with data, and make sure they reflect your business priorities, not just market conditions.</p>
                                        <div class="icon-holder">
                                            3
                                        </div>
                                    </li>

                                    <li>
                                        <h4 class="text-white mb-3">Seamless Onboarding  No Disruption </h4>
                                        <p class="text-white">Large businesses often fear the disruption of switching or restructuring energy strategies. With Eden, onboarding is structured and fully managed  we liaise with suppliers, coordinate across departments, and ensure systems, contracts, and communications are aligned.</p>
                                        <p class="text-white pt-3">Your team can stay focused on their core responsibilities while we manage the transition  with one point of contact throughout and full visibility at every stage.</p>
                                        <div class="icon-holder">
                                            4
                                        </div>
                                    </li>
                                    <li>
                                        <h4 class="text-white mb-3">True Ongoing Partnership</h4>
                                        <p class="text-white">Where others stop, we keep going. Eden is built for ongoing, hands-on support  especially in environments where complexity, change, or compliance are constant.

                                            We continue to support you with: </p>
                                        <ul>
                                            <li className='inner-list'>Market tracking and procurement timing </li>
                                            <li className='inner-list'>Contract renewals and performance reviews </li>
                                            <li className='inner-list'>Guidance on infrastructure upgrades and compliance </li>
                                            <li className='inner-list'>Expansion planning, relocations, or acquisitions</li>
                                            <li className='inner-list'>Access to waste-to-energy and carbon reduction support </li>
                                        </ul>
                                        <p class="text-white pt-3">We scale with you  and we’ve built our team to match the pace and pressure that large organisations work under. </p>
                                        <div class="icon-holder">
                                            5
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <div id="vision-about">
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



            <Footer />


        </div>
    );
};

export default HowItWorks;
