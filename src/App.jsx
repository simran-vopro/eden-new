import React, { useEffect, useLayoutEffect, useRef } from "react";
// import Lenis from "lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";
import "./responsive.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Insights from "./screens/insights";
import { ModalProvider, useModal } from "./components/pages/ModalContext";
import ContactModal from "./screens/ContactModal";
import About from "./screens/about";
import HowItWorks from "./screens/howItWorks";
import InsightsDetails from "./screens/insights-details";
import 'bootstrap-icons/font/bootstrap-icons.css';
import LandingPage2 from "./screens/landing-2";
import Career from "./screens/career";
import EdenInfinity from "./screens/edenInfinity";
import { AllServices } from "./screens/allServices";


// const ScrollManager = ({ children }) => {
//   const lenisRef = useRef(null);
//   const location = useLocation();

//   useEffect(() => {
//     const lenis = new Lenis({
//       lerp: 0.1,
//       smooth: true,
//       direction: "vertical",
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     lenisRef.current = lenis;

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   useEffect(() => {
//     // After route change, scroll to top
//     lenisRef.current?.scrollTo(0, { immediate: true });
//   }, [location.pathname]);

//   return <>{children}</>;
// };

// Separate wrapper to access context inside modal




const ContactModalWrapper = () => {
  const { closeContactModal, isContactModalOpen, service, goToStep } = useModal();
  // const { isContactModalOpen, closeContactModal, service, goToStep } = useModal();

  return (
    <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} service={service} goToStep={goToStep} />
  );
};

const RouteTransition = () => {
  const location = useLocation();


  useLayoutEffect(() => {
    const revealToSpan = () => {
      console.log("location.pathname  revealToSpan==> ", location.pathname)
      document.querySelectorAll(".reveal").forEach((ele) => {
        // ❗ Skip if already wrapped
        if (ele.querySelector(".parent")) return;

        // Create 2 spans
        const parent = document.createElement("span");
        const child = document.createElement("span");
        parent.classList.add("parent");
        child.classList.add("child");

        // Move the content inside the child
        child.innerHTML = ele.innerHTML;
        parent.appendChild(child);

        // Replace the content of ele
        ele.innerHTML = "";
        ele.appendChild(parent);
      });
    };
    revealToSpan();
  }, [location.key]);


  useGSAP(() => {
    console.log("location.pathname ==> ", location.pathname)

    const tl = gsap.timeline();
    tl.from(".child span", {
      x: 100,
      duration: 1,
      stagger: 0.2,
      ease: "Power3.easeInOut",
      opacity: 0,
    })
      .to(".parent .child", {
        y: "-100%",
        duration: 1,
        ease: "Circ.easeInOut",
      })
      .to("#fs-loader", {
        height: 0,
        duration: 1,
        ease: "Circ.easeInOut",
      })
      .to("#bg-layer", {
        height: "100%",
        duration: 1,
        delay: -1,
        ease: "Circ.easeInOut",
      })
      .to("#main-loader", {
        height: "0",
        duration: 1,
        ease: "Circ.easeInOut",
      });
  }, [location.key]); //👈 Triggers on every route change

  return null;
};



const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
};

const App = () => {

  return (
    <>
      <div id="main-loader">
        <div id="fs-loader">
          {/* <div id="loader-top-heading">
            <h5 className="reveal">You Don’t Choose Eden for the Logo  </h5>
            <h5 className="reveal">&copy; You Choose It for the People</h5>
          </div> */}
          <h1 className="reveal">

            <span>Common</span> <span>Sense</span> <span>in</span> <br></br><span>a</span> <span>Complex</span> <span>Market</span>
          </h1>
        </div>

        <div id="bg-layer"></div>
      </div>
      <ModalProvider>
        <Router forceRefresh={true}>

          <ScrollToTop />
          {/* 👇 Route animation trigger */}
          <RouteTransition />
          <Routes>
            <Route path="/" element={<LandingPage2 />} />

            <Route path="/insights" element={<Insights />} />
            <Route path="/insight-details" element={<InsightsDetails />} />

            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/work-for-us" element={<Career />} />
            <Route path="/eden-infinity" element={<EdenInfinity />} />
              <Route path="/services" element={<AllServices />} />

          </Routes>
        </Router>

        {/* Render once globally */}
        <ContactModalWrapper />
      </ModalProvider>
    </>
  );
};

export default App;
