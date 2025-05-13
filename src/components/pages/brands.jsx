import React from "react";
import images from "../theme/imagesPath";
import Btn from "../other/btn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // ✅ Add this if not already included

gsap.registerPlugin(ScrollTrigger);

const Brands = ({ btn, style }) => {
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
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#brands",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from("#brands .child-brand-title > span", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  const navigate = useNavigate();

  return (
    <section id="brands" style={style}>
      <h1 className="title text-uppercase">
        {["Brands ", "who ", "trust ", "eden"].map((word, i) => (
          <span className="parent" key={i}>
            <span
              className={`child-brand-title ${word === "eden" ? "eden-highlight" : ""
                }`}
            >
              <span>{word} </span>
            </span>
          </span>
        ))}
      </h1>



      <div className="brands-track brands-slide">
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


      {btn && <Btn onClick={() => {
        navigate("/how-it-works")
      }} rightIcon>See how eden Works</Btn>}
    </section>
  );
};

export default Brands;
