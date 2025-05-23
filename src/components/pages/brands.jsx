import images from "../theme/imagesPath";
import Btn from "../other/btn";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // ✅ Add this if not already included
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Brands = ({ btn, style, hideTitle }) => {
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
  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#brands",
  //       start: "top 80%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });

  //   tl.from("#brands .child-brand-title > span", {
  //     x: 100,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: 0.2,
  //     ease: "power3.out",
  //   });
  // }, []);

  const btnLineLeft = useRef();
  const btnLineRight = useRef();
  const btnRightBorderLine = useRef();
  const btnLeftBorderLine = useRef();

  useGSAP(() => {
    // Initial state
    gsap.set(btnLineLeft.current, { transformOrigin: "left center", scaleX: 0 });
    gsap.set(btnLineRight.current, { transformOrigin: "right center", scaleX: 0 });

    gsap.set(btnLeftBorderLine.current, {
      clipPath: "inset(100% 0% 0% 100%)",
      opacity: 1
    });

    gsap.set(btnRightBorderLine.current, {
      clipPath: "inset(0% 100% 100% 0%)",
      opacity: 1
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#btn-highlighted-section",
        start: "top 40%",
        toggleActions: "play none none none",
        markers: false,
        scrub: true
      }
    });

    // Step 1: Animate lines inward toward center
    tl.to([btnLineLeft.current, btnLineRight.current], {
      scaleX: 1,
      duration: 1,
      ease: "power2.out"
    });

    // Step 2: Animate left border AFTER lines complete
    tl.to(btnLeftBorderLine.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      ease: "power2.out"
    });

    // Step 3: Animate right border simultaneously with left border
    tl.to(btnRightBorderLine.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1,
      ease: "power2.out"
    }, "<"); // still same time as left border


    // 4. Switch transform origins to prepare for shrink
    tl.set(btnLineLeft.current, { transformOrigin: "right center" });
    tl.set(btnLineRight.current, { transformOrigin: "left center" });
    tl.to([btnLineLeft.current, btnLineRight.current], {
      scaleX: 0,
      duration: 1,
      ease: "power2.in"
    });

  }, []);



  const navigate = useNavigate();

  return (
    <section id="brands" style={style}>
      {hideTitle ? "" : <h1 className="title text-uppercase">
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
      </h1>}




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

            </SwiperSlide>
          ))}
        </Swiper>
      </div>




      {btn &&
        <div id="btn-highlighted-section" className="d-flex align-items-center w-100">
          <div
            ref={btnLineLeft}
            style={{
              flex: 1,
              height: 3,
              backgroundColor: "#2f98d0",
              transformOrigin: "left center"
            }}
          ></div>

          <div style={{ position: "relative", display: "inline-block" }}>

            {/* Animated left to top border overlay */}
            <div
              ref={btnLeftBorderLine}
              style={{
                border: "3px solid rgb(117, 207, 255)", // left-top border color
                borderRadius: "3rem",
                clipPath: "inset(100% 100% 100% 100%)",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none",
                zIndex: 1
              }}
            />

            {/* Animated right to bottom border overlay */}
            <div
              ref={btnRightBorderLine}
              style={{
                border: "3px solid rgb(117, 207, 255)", // right-bottom border color
                borderRadius: "3rem",
                clipPath: "inset(100% 100% 100% 100%)",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none",
                zIndex: 1
              }}
            />
            {/* Actual button */}
            <Btn onClick={() => navigate("/how-it-works")} rightIcon>
              See how Eden Works
            </Btn>
          </div>


          <div
            ref={btnLineRight}
            style={{
              flex: 1,
              height: 3,
              backgroundColor: "#2f98d0",
              transformOrigin: "right center"
            }}
          ></div>
        </div>
      }
    </section >
  );
};

export default Brands;
