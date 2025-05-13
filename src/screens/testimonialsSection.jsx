import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import images from "../components/theme/imagesPath";

export default function TestimonialsSection() {
  return (
    <div className="container-fluid p-md-5 my-5 my-md-0" id="testimonials">
      <div className="row align-items-center">
        {/* Left Side - Content */}
        <div className="col-md-6 col-lg-4 left-side">
          <h1 className="fw-bold mb-5">
          What our clients say...
          </h1>
          <p className="text-black">
          We’re more than just a service provider. We’re a partner in every step. Don’t just take our word for it; hear directly from the businesses we’ve supported.
          </p>

          <img src={images.grass} alt="grass" className="img-fluid" />
        </div>

        {/* Right Side - Testimonial Card */}
        <div className="col-md-6 col-lg-8 d-flex justify-content-center align-items-center position-relative">
          <div id="circular">
            <img
              src={images.infinity_logo_transparent}
              alt="infinity_logo_transparent"
              id="infinity-logo-transparent"
            />
            <div className="py-5 px-4 px-md-2 py-md-4 position-absolute testimonial1">
              {/* User Image */}
              <img
                src={images.review1} // replace with your testimonial image
                alt="User"
                className="rounded-circle mb-4"
              />

              {/* Testimonial Text */}
              <p className="text-white mb-4">
                "I found Eden Utilities to be very professional and helpful.
                They fully analysed each supplier offer provided to them on our
                behalf, and clearly explained through all the options available
                to us, meaning our workload and decision making was made much
                easier. They were also able to obtain prices, for both our
                electricity and gas contracts, that we could not have gained
                directly via an energy supplier, and provided the Chamber with
                some significant savings on our energy spend. I can highly
                recommend working with them."
              </p>

              {/* User Name and Role */}
              <h5 className="fw-bold text-white mb-0">Alison Watson</h5>
              <small className="text-white">
                Operations Manager, <br></br>Sussex Chamber of Commerce
              </small>
            </div>
            <div className="px-3 py-5 py-md-3 position-absolute testimonial2">
              {/* User Image */}
              <img
                src={images.review2} // replace with your testimonial image
                alt="User"
                className="rounded-circle mb-4"
              />

              {/* Testimonial Text */}
              <p className="text-muted mb-4">
                "During the time that Biffa Waste Services has been working
                closely with them, Eden Utilities has helped Biffa gain
                significant savings, through the introduction of their knowledge
                and specialist understanding of the energy industry, energy
                supplies and our business. I have been very impressed by the
                professionalism and ethics of Eden Utilities. Their experience
                and expertise is exceptional, and I would not hesitate in
                recommending them to any other company."
              </p>

              {/* User Name and Role */}
              <h5 className="fw-bold text-dark mb-0">Mark Robson </h5>
              <small className="text-muted">
                Head of Procurement, <br></br>Biffa Waste Services
              </small>
            </div>
            <div className="px-2 py-3 py-md-3 position-absolute testimonial3">
              {/* User Image */}
              <img
                src={images.review3} // replace with your testimonial image
                alt="User"
                className="rounded-circle mb-4"
              />

              {/* Testimonial Text */}
              <p className="text-muted mb-4">
                "Eden Utilities showed me a fully transparent and fair offer. It
                gained us considerable savings on both our Power and Gas. They
                were very professional and attentive to this business’s
                particular requirements and I will certainly be working with
                them again, the next time my contracts need looking at. I can't
                recommend them highly enough!"
              </p>

              {/* User Name and Role */}
              <h5 className="fw-bold text-dark mb-0">Sarah Kent</h5>
              <small className="text-muted">
                Owner & Director, <br></br>Treasure Chest Softplay Centre
              </small>
            </div>
            {/* <div className="px-2 py-3 py-md-3 position-absolute testimonial4">
              <img
                src={images.profile2}
                alt="User"
                className="rounded-circle mb-4"
              />

              <p className="text-muted mb-4">
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book."
              </p>

              <h5 className="fw-bold text-dark mb-0">Liza Williams</h5>
              <small className="text-muted">CMO</small>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
