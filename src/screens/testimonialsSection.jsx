import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import images from "../components/theme/imagesPath";

export default function TestimonialsSection() {
  return (
    <div className="py-md-5 my-5 my-md-0" id="testimonials">
      <div className="row">
        {/* Left Side - Content */}
        <div className="col-md-6 col-lg-4 p-0">
          <p className="dark-text title text-start title-big text-lineheight">WHAT THEY SAY ABOUT US...</p>
          <p className="text-black">
            We won't just be executors. We'll be your
            partners, we promise. If you're not convinced,
            check out our verified testimonials from around
            the world about working with us.
          </p>

          <img src={images.grass} alt="grass" className="img-fluid grass" />
        </div>

        {/* Right Side - Testimonial Card */}
        <div className="col-md-6  col-lg-8 d-flex justify-content-center align-items-center position-relative p-0" style={{ height: 680 }}>

          <img
            src={images.infinity_logo_transparent}
            alt="infinity_logo_transparent"
            id="infinity-logo-transparent"
            className="infinity-logo-transparent-review"
          />

          <div className="py-5 px-4 px-md-2 py-md-4 position-absolute testimonial1">

            <img
              src={images.review1}
              alt="User"
              className="rounded-circle mb-4"
            />


            <p className="text-white mb-4">
              "I found Eden Utilities to be very professional and helpful.
              They fully analysed each supplier offer provided to them on our
              behalf, and clearly explained through all the options available
              to us, meaning our workload and decision making was made much
              easier."
            </p>


            <h5 className="fw-bold text-white mb-0">Alison Watson</h5>
            <small className="text-white">
              Operations Manager, <br></br>Sussex Chamber of Commerce
            </small>
          </div>



          <div className="px-3 py-5 py-md-3 position-absolute testimonial2">

            <img
              src={images.review2}
              alt="User"
              className="rounded-circle mb-4"
            />


            <p className="text-muted mb-4">
              "During the time that Biffa Waste Services has been working
              closely with them, Eden Utilities has helped Biffa gain
              significant savings, through the introduction of their knowledge
              and specialist understanding of the energy industry, energy
              supplies and our business."
            </p>


            <h5 className="fw-bold text-dark mb-0">Mark Robson </h5>

          </div>


          <div className="px-2 py-3 py-md-3 position-absolute testimonial3">

            <img
              src={images.review3}
              alt="User"
              className="rounded-circle mb-4"
            />


            <p className="text-muted mb-4">
              "Eden Utilities showed me a fully transparent and fair offer. It
              gained us considerable savings on both our Power and Gas. They
              were very professional and attentive to this business’s
              particular requirements and I can't
              recommend them highly enough!"
            </p>


            <h5 className="fw-bold text-dark mb-0">Sarah Kent</h5>

          </div>


        </div>
      </div>
    </div>
  );
}
