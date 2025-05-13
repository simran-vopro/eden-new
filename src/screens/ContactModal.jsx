import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaPaperPlane, FaTimes } from "react-icons/fa";
import "../components/stylesheets/contact.css";
import images from "../components/theme/imagesPath";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsClock } from "react-icons/bs";
import { BiArrowBack, BiCalendar, BiVideoRecording } from "react-icons/bi";
import { RiGlobalLine } from "react-icons/ri";
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { setHours, setMinutes } from "date-fns";
import Btn from "../components/other/btn";


const ContactModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [errorMsz, setErrorMsz] = useState("");
  const [loading, setLoading] = useState(false);


  const [selectedTime, setSelectedTime] = useState(false);

  useEffect(() => {
    console.log("selectedDate ==> ", selectedDate);
    console.log("selectedTime ==> ", selectedTime);
    if (selectedDate) {
      setSelectedTime(true);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (errorMsz) {
      setTimeout(() => {
        setErrorMsz("");
      }, 3000); // 3 seconds might be better UX
    }
  }, [errorMsz]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    platform: '',
    company: '',
  });

  const steps = [
    { title: "Step 1", content: "Enter your name" },
    { title: "Step 2", content: "Enter your email" },
    { title: "Step 3", content: "Write your message" },
    { title: "Step 4", content: "Review & Submit" },
  ];

  const options = [
    "Billing & Payments",
    "Switching Energy Suppliers",
    "Energy Efficiency Advice",
    "Renewable Energy Options",
    "Account Management",
    "Other..",
  ];

  const [step, setStep] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = () => {
    setLoading(true);

    if (!formData.name || !formData.email) {
      setErrorMsz("Name and Email are required.");
      setLoading(false);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsz("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!formData.phone) {
      setErrorMsz("Please enter your phone number.");
      setLoading(false);
      return;
    }

    // Phone format validation (simple international or 10-digit pattern)
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMsz("Please enter a valid phone number.");
      setLoading(false);
      return;
    }

    if (!formData.platform) {
      setErrorMsz("Please choose at least one meeting platform.");
      setLoading(false);
      return;
    }

    if (!formData.message) {
      setErrorMsz("Please enter your message.");
      setLoading(false);
      return;
    }


    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: selectedService,
      platform: formData.platform,
      dateTime: selectedDate?.toString(),
      message: formData.message
    };

    console.log("templateParams ==. ", templateParams);

    const service_id = "service_6qj4s5c";
    const template_id = "template_hvg7zck";
    const publicKey = "vq0tMKSUl4aS9D3hH"

    emailjs.send(service_id, template_id, templateParams, {
      publicKey: publicKey,
    })
      .then(response => {
        console.log("SUCCESS!", response.status, response.text);
        nextStep(); // Proceed to confirmation
        setLoading(false);
      })
      .catch(error => {
        console.error("FAILED...", error);
        setLoading(false);
      });
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
    setSelectedTime(false);
    setSelectedDate(null)
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("custom-backdrop")) {
      onClose();
      setStep(0);
    }
  };


  return createPortal(
    <div
      className="modal fade show contact-backdrop p-0 p-md-3"
      onClick={handleBackdropClick}
      style={{
        zIndex: 1050,
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-fullscreen"
        style={{
          width: "60%",
          maxWidth: "100%",
        }}
      >
        <div className="modal-content shadow rounded-4 modal-blur">
          <div className="d-flex justify-content-between">
            <div className="model-header-title-width">
              <h1 className="top-title">
                Speak with an <span>eden expert</span>!
              </h1>
              <p className="long-content-medium text-muted">
                We'll listen to your challenges and goals, show you the content
                and features you might need, and see if Eden is the right
                solution for your organization!
              </p>
            </div>

            <FaTimes
              className="text-dark fs-5 cursor-pointer"
              onClick={() => {
                onClose();
                setSelectedService("");
                setSelectedDate(null);
                setSelectedTime(false);
                setStep(0);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                  platform: '',
                });
              }}
              style={{ cursor: "pointer", marginLeft: "1rem" }}
            />
          </div>

          <div className="modal-body">
            {step === 0 ? (
              <div className="d-flex flex-column gap-2 bg-light form-height-modal">
                <div className="connect p-3">
                  <div>
                    <p className="text-muted">Eden Specialist</p>
                    <p className="box-title" style={{ textTransform: 'none' }}>
                      What can we help you with today?
                    </p>
                  </div>
                </div>
                {options.map((option) => {
                  return (
                    <label key={option} className="image-checkbox-label">
                      <input
                        type="radio"
                        name="service"
                        checked={selectedService === option}
                        onChange={() => {
                          setSelectedService(option);
                          setTimeout(() => nextStep(), 300);
                        }}
                      />
                      <div
                        className={`checkbox-image ${selectedService === option ? "checked" : ""
                          }`}
                      ></div>
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            ) : step === 1 ? (
              <div className="bg-light row border m-0 form-height-modal">
                <div className="col-md-1 d-flex align-items-center justify-content-center">



                  <button
                    onClick={prevStep}
                    className="btn-back"
                  >
                    <BiArrowBack size={20} color="#fff" />
                  </button>
                  <div className="text-vertical-box">
                    <img src={images.checked} alt="Checked" />
                    <p className="long-content vertical-text">
                      {selectedService}
                    </p>
                  </div>
                </div>

                <div className="col-md-4 border connect p-3">
                  <div>
                    <p className="text-muted">Eden Expert</p>
                    <p className="box-title">Let’s connect!</p>
                    <div className="contactTime d-flex align-items-center my-3">
                      <BsClock className="clockIcon" />
                      <p className="contact-time-text mb-0 ms-2">1 hour</p>
                    </div>
                    <p className="long-content">
                      Schedule a call with an Eden expert for clear, practical guidance, no jargon, just honest answers tailored to your energy needs.
                    </p>
                  </div>
                </div>
                <div className="col-md-7 border p-1 p-md-3 pb-md-0">
                  <p className="contact-time-text text-black mb-4 ms-2">
                    Select date & Time
                  </p>

                  {
                    selectedTime ? <DatePicker
                      selected={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date);
                        if (date && date.getHours() >= 10 && date.getHours() <= 16) {
                          setTimeout(() => nextStep(), 300);
                        }
                      }}
                      showTimeSelect
                      timeIntervals={60}
                      inline
                      dateFormat="Pp"
                      minTime={setHours(setMinutes(new Date(), 0), 9)} // 10:00 AM
                      maxTime={setHours(setMinutes(new Date(), 0), 16)} // 4:00 PM
                      filterTime={(time) => {
                        // Allow times from 10:00 AM to 4:00 PM in 1-hour intervals
                        return time.getHours() >= 10 && time.getHours() <= 16 && time.getMinutes() === 0;
                      }}
                      calendarClassName="custom-datepicker"
                      filterDate={(date) => {
                        const day = date.getDay();
                        return day !== 0 && day !== 6;
                      }}
                    /> : <>
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => {
                          setSelectedDate(date);
                          if (date && date.getHours() >= 10 && date.getHours() <= 16) {
                            setTimeout(() => nextStep(), 300);
                          }
                        }}

                        timeIntervals={60}
                        inline
                        dateFormat="Pp"
                        minTime={setHours(setMinutes(new Date(), 0), 9)} // 10:00 AM
                        maxTime={setHours(setMinutes(new Date(), 0), 16)} // 4:00 PM
                        filterTime={(time) => {
                          // Allow times from 10:00 AM to 4:00 PM in 1-hour intervals
                          return time.getHours() >= 10 && time.getHours() <= 16 && time.getMinutes() === 0;
                        }}
                        calendarClassName="custom-datepicker"
                        filterDate={(date) => {
                          const day = date.getDay();
                          return day !== 0 && day !== 6;
                        }}
                      />
                    </>
                  }


                </div>
              </div>
            ) : step === 2 ? (
              <div className="bg-light row border m-0 form-height-modal">
                <div className="col-md-4 border-end connect">
                  <div className="p-2 p-md-4">
                    <button
                      onClick={prevStep}
                      className="btn-back position-relative"
                      style={{ top: 0 }}
                    >
                      <BiArrowBack size={20} color="#fff" />
                    </button>

                    <p className="text-muted mt-3">Eden Expert</p>
                    <p className="box-title">Let’s connect!</p>
                    <div id="contact-selected-slot-details">
                      <div className="contactTime d-flex align-items-center mt-3 mb-2">
                        <BsClock className="clockIcon" />
                        <p className="contact-time-text mb-0 ms-2">1 hour</p>
                      </div>
                      <div className="contactTime d-flex align-items-center mb-2">
                        <BiCalendar className="calendarIcon" />
                        <p className="contact-time-text mb-0 ms-2">
                          {selectedDate ? `${selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${new Date(selectedDate.getTime() + 60 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, ${selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}` : "Select a time"}

                        </p>
                      </div>
                      <div className="contactTime d-flex align-items-center mb-3">
                        <RiGlobalLine className="globalIcon" />
                        <p className="contact-time-text mb-0 ms-2">
                          Abs, London, UK
                        </p>
                      </div>
                    </div>

                    <p className="long-content text-muted">Great,</p>
                    <p className="long-content text-muted">
                      We’ve got an Eden Expert available at your chosen time.
                      <br></br>       <br></br>
                      Let us know what you’d like to discuss, and we’ll make sure the right specialist with the right experience joins your call.
                      <br></br>       <br></br>
                      With a depth of expertise across every area of utilities and sustainability, we’re here to make the journey simple, clear, and tailored to you.
                    </p>
                    {/* <p className="long-content text-muted">
                      This means you'll get:
                    </p> */}
                  </div>
                </div>
                <div className="col-md-8 p-2 p-md-4 pb-md-0">
                  <p className="contact-time-text text-black mb-4">
                    Enter Details
                  </p>

                  <form className="row g-4">
                    {/* Name */}
                    <div className="col-md-6 input-box">
                      <label className="form-label text-dark">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* company Name */}
                    <div className="col-md-6 input-box">
                      <label className="form-label text-dark">Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6 input-box">
                      <label className="form-label text-dark">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />


                    </div>

                    {/* Contact Number */}
                    <div className="col-md-6 input-box">
                      <label className="form-label text-dark">
                        Contact Number
                      </label>
                      <PhoneInput
                        country={'us'}
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e })}
                      />
                    </div>

                    {/* Preferred Meeting Platform */}
                    <div className="col-md-12 input-box">
                      <label className="form-label text-dark">
                        Preferred Meeting Platform
                      </label>
                      <div className="d-flex flex-wrap gap-3">
                        {[{ name: "Zoom", logo: images.zoom },
                        { name: "Google Meet", logo: images.g_meet },
                        { name: "Microsoft Teams", logo: images.teams },
                        { name: "Phone Call", logo: images.call }].map((method) => (
                          <label key={method.name} className="form-check d-flex align-items-center gap-2">
                            <input
                              type="radio"
                              name="platform"
                              className="form-check-input"
                              checked={formData.platform === method.name}
                              onChange={() => setFormData({ ...formData, platform: method.name })}
                            />
                            <img src={method.logo} alt={method.name} style={{ width: "20px", height: "20px" }} />
                            <span className="form-check-label">{method.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="col-md-12 input-box">
                      <label className="form-label text-dark">
                        Plase share{" "}
                      </label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Write your message or details here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>


                    <p className="text-danger">{errorMsz}</p>
                  </form>

                  <Btn disabled={loading ? true : false} onClick={handleSubmit}>{loading ? "Scheduling..." : "Schedule Event"}</Btn>

                </div>
              </div>
            ) : (
              <>
                <div className="bg-light row border m-0 form-height-modal">
                  <div className="col-md-12 p-4 pb-0">
                    <div className="d-flex align-items-center pb-3 pb-md-0 justify-content-center">
                      <img src={images.checked} alt="Checked" />
                      <p className="top-title ms-1 ms-md-2 text-center">
                        You are scheduled
                      </p>
                    </div>

                    <p className="long-content text-black text-center">
                      A calendar invitation has been sent to your email address.
                    </p>
                    <div className=" d-flex align-items-center justify-content-center">
                      <div className="success-messege border rounded px-3 py-1">
                        <p className="text-muted">Eden Expert</p>
                        <p className="box-title">Let’s connect!</p>
                        <div id="contact-selected-slot-details">
                          <div className="contactTime d-flex align-items-center mt-3 mb-2">
                            <BsClock className="clockIcon2" />
                            <p className="contact-time-text mb-0 ms-2">
                              1 hour
                            </p>
                          </div>
                          <div className="contactTime d-flex align-items-center mb-2">
                            <BiCalendar className="calendarIcon2" />
                            <p className="contact-time-text mb-0 ms-2">
                              {selectedDate ? `${selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${new Date(selectedDate.getTime() + 60 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, ${selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}` : "Select a time"}
                            </p>
                          </div>
                          <div className="contactTime d-flex align-items-center mb-2">
                            <RiGlobalLine className="globalIcon2" />
                            <p className="contact-time-text mb-0 ms-2">
                              Abs, London, UK
                            </p>
                          </div>
                          <div className="contactTime d-flex align-items-center mb-2">
                            <BiVideoRecording className="videoIcon2" />
                            <p className="contact-time-text mb-0 ms-2">
                              {selectedService}
                            </p>
                          </div>
                          <div className="contactTime d-flex align-items-center mb-3">
                            <BiVideoRecording className="videoIcon2" />
                            <p className="contact-time-text mb-0 ms-2">
                              {formData.platform}
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                    <p className="long-content text-black text-center">
                      Join our newsletter
                    </p>

                    <div className="d-flex align-items-center justify-content-center">
                      <div
                        className="position-relative w-100 newsletter"
                        style={{ maxWidth: "400px" }}
                      >
                        <input
                          type="text"
                          className="form-control  pe-5"
                          placeholder="Your Email"
                        />
                        <FaPaperPlane className="position-absolute newsletterIcon" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="d-flex justify-content-between px-4 py-3">

            {step === steps.length - 1 && (
              <button className="btn btn-success" onClick={() => {
                setSelectedService("");
                setSelectedDate(null);
                setSelectedTime(false);
                setStep(0);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                  platform: '',
                });
                onClose();
              }}>
                Done
              </button>
            )}
          </div>
        </div>
      </div>
    </div >,
    document.body
  );
};

export default ContactModal;
