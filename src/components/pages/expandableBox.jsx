import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Btn from "../other/btn";
import images from "../theme/imagesPath";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

const ExpandableServicesBox = ({
  index,
  title,
  content,
  description,
  isActive,
  activeIndex,
  onClick,
  backgroundImage,
  service,
}) => {
  const boxRef = useRef();
  const contentRef = useRef();
  const titleRef = useRef();
  const boxBgColors = ["#fafafa", "#8DC74B", "#2F98D0"];
  const badgeRef = useRef();

  const shouldHide = activeIndex !== null && index > activeIndex;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // keep isMobile up to date
  useEffect(() => {
    const mm = window.matchMedia("(max-width: 600px)");
    const onChange = (e) => setIsMobile(e.matches);
    mm.addEventListener("change", onChange);
    return () => mm.removeEventListener("change", onChange);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.2 }, // shortened default duration
    });

    const backgroundImageOpacity = isActive && backgroundImage ? 1 : 0;

    if (isActive) {
      // active box
      tl.to(badgeRef.current, { opacity: 0, duration: 0.1 })
        .to(boxRef.current, {
          flexBasis: "100%",
          padding: "20px",
          duration: 0.25,
        })
        .to(
          titleRef.current,
          {
            rotate: 0,
            x: 0,
            y: 0,
            top: "1rem",
            left: "1.5rem",
            width: "fit-content",
            position: "absolute",
            duration: 0.25, // title animation synchronized with box expansion
          },
          "<" // start this at the same time as the box expansion
        )
        .fromTo(
          contentRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.3 },
          "+=0.3" // slight delay after box expands
        )
        .to(badgeRef.current, {
          display: "flex",
          opacity: 1,
          rotate: "180deg",
          duration: 0.2,
        });
      // .to(document.querySelector(".expandable-box-2"), {
      //   backgroundColor: "transparent",
      //   opacity: backgroundImageOpacity,
      //   duration: 0.25,
      // });
    } else if (shouldHide && !isMobile) {
      // right side boxes
      tl.to(badgeRef.current, { opacity: 0, duration: 0.1 })
        .to(contentRef.current, { opacity: 0, x: -20, duration: 0.2 }) // fade out left
        .to(boxRef.current, {
          flexBasis: "0%",
          opacity: 0,
          duration: 0.2,
          padding: 0,
        })
        .to(
          titleRef.current,
          {
            rotate: -90,
            x: "10%",
            y: 0,
            left: 0,
            top: "65%",
            duration: 0.25, // title shrinking synchronized with box
          },
          "<" // synchronize title with box shrinking
        )
        .set(badgeRef.current, { display: "none" });
      // .to(document.querySelector(".expandable-box-2"), {
      //   backgroundColor: "transparent",
      //   opacity: 0,
      //   duration: 0.25,
      // });
    } else if (activeIndex !== null && index < activeIndex && !isMobile) {
      // left side boxes
      tl.to(badgeRef.current, { opacity: 0, duration: 0.1 })
        .to(contentRef.current, { opacity: 0, x: -20, duration: 0.2 }) // fade out left
        .to(boxRef.current, {
          flexBasis: "10%",
          padding: "10px",
          duration: 0.2,
        })
        .to(contentRef.current, { opacity: 0 }, 0)
        .to(
          titleRef.current,
          {
            rotate: -90,
            x: "10%",
            y: 0,
            left: 0,
            top: "65%",
            duration: 0.2, // title shrinking synchronized with box
          },
          "<" // synchronize title with box shrinking
        )
        .set(badgeRef.current, { display: "none" });
      // .to(document.querySelector(".expandable-box-2"), {
      //   backgroundColor: "transparent",
      //   opacity: 0,
      //   duration: 0.25,
      // });
    } else {
      // default box
      tl.to(badgeRef.current, { opacity: 0, duration: 0.1 })
        .to(contentRef.current, { opacity: 0, x: -20, duration: 0.1 })
        .to(contentRef.current, { opacity: 0, duration: 0.1 })
        .to(boxRef.current, {
          flexBasis: "15.5%",
          padding: "20px",
          opacity: 1,
          duration: 0.25,
        })
        .to(
          titleRef.current,
          {
            rotate: -90,
            x: "10%",
            y: isMobile ? "100%" : 0,
            left: 0,
            top: isMobile ? "90%" : "65%",
            duration: 0.25,
            width: isMobile ? "250px" : "300px",
          },
          "<"
        )
        .to(badgeRef.current, {
          display: "flex",
          opacity: 1,
          rotate: "0deg",
          duration: 0.2,
        });
      // .to(document.querySelector(".expandable-box-2"), {
      //   backgroundColor: "transparent",
      //   opacity: backgroundImageOpacity,
      //   duration: 0.25,
      // });
    }
  }, [isActive, shouldHide, activeIndex, index, isMobile]);

  const backgroundStyle =
    isActive && backgroundImage
      ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
      }
      : {
        backgroundColor: boxBgColors[index % boxBgColors.length],
        color:
          boxBgColors[index % boxBgColors.length] === "#fafafa"
            ? "#000"
            : "#fff",
      };

  const navigate = useNavigate();

  return (
    <div
      ref={boxRef}
      className="expandable-box-2 relative overflow-hidden"
      onClick={onClick}
      style={{
        ...backgroundStyle,
      }}
    >
      {backgroundImage && isActive && (
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Add an overlay for darkening the background image
          }}
        />
      )}
      <div style={{ zIndex: 1 }}>
        <h3 ref={titleRef} className="box-title-service">
          {title}
        </h3>
      </div>

      <div
        ref={badgeRef}
        className="index-badge-service"
        style={{
          backgroundColor:
            boxBgColors[index % boxBgColors.length] === "#fafafa"
              ? "#2F98D0"
              : "#fff",
          color:
            boxBgColors[index % boxBgColors.length] === "#fafafa"
              ? "#fff"
              : "#000",
        }}
      >
        {boxBgColors[index % boxBgColors.length] === "#fafafa" ? (
          <img src={images.icon_top_white} className="icon-top" alt="icon" />
        ) : (
          <img src={images.icon_top} className="icon-top" alt="icon" />
        )}
      </div>

      <div
        ref={contentRef}
        className="box-content-service"
        style={{ opacity: 0, zIndex: 1 }}
      >
        <p
          className="mb-3"
          style={{
            color: backgroundImage
              ? "#fff"
              : boxBgColors[index % boxBgColors.length] === "#fafafa"
                ? "#828282"
                : "#fff",
          }}
        >
          {content}
        </p>

        <div className="box-btn">
          <Btn
            onClick={() =>

              navigate("/services", {
                state: { serviceContent: service },
              })
            }
            rightIconChildren={
              boxBgColors[index % boxBgColors.length] === "#fafafa" ? (
                <img src={images.icon_top} className="icon-top" alt="icon" />
              ) : (
                <img
                  src={images.icon_top_white}
                  className="icon-top"
                  alt="icon"
                />
              )
            }
            iconbackground={
              boxBgColors[index % boxBgColors.length] === "#8DC74B"
                ? "#8DC74B"
                : boxBgColors[index % boxBgColors.length] === "#2F98D0"
                  ? "#2F98D0"
                  : "#fff"
            }
            color={
              boxBgColors[index % boxBgColors.length] === "#8DC74B"
                ? "#8DC74B"
                : boxBgColors[index % boxBgColors.length] === "#2F98D0"
                  ? "#2F98D0"
                  : "#fff"
            }
            background={
              boxBgColors[index % boxBgColors.length] === "#fafafa"
                ? "linear-gradient(86.2deg, #2F98D0 8.59%, #47ADE3 89.8%)"
                : "linear-gradient(86.2deg,#ffffff 8.59%, #ffffff 89.8%)"
            }
            rightIcon
          >
            Learn More
          </Btn>
        </div>
      </div>

      <img src={images.pattern} alt="pattern" id="pattern" />
    </div>
  );
};

export default ExpandableServicesBox;
