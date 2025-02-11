import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../Styles/Testimonials.css";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        company: "Tech Solutions Ltd.",
        feedback:
            "Transform your business with Consultancy Services in enhance efficiency, and achieve sustainable growth through tailored solutions",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 2,
        company: "Tech Solutions Inc.",
        feedback:
            "Our experience with this company was exceptional. The ERP solutions provided were top-notch, helping us streamline operations effectively.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials-section">
            <h2 className="testimonials-title">Testimonials</h2>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".next-btn",
                    prevEl: ".prev-btn",
                }}
                autoplay={{ delay: 5000 }}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="testimonial-card">
                            <h3 className="testimonial-company">{testimonial.company}</h3>
                            <p className="testimonial-feedback">{testimonial.feedback}</p>
                            <FaQuoteRight className="quote-icon" />
                        </div>
                        <div className="testimonial-image">
                            <img
                                src={testimonial.image}
                                alt="Client"
                            />
                        </div>
                    </SwiperSlide>
                ))}
                <button className="prev-btn">
                    <FaChevronLeft />
                </button>
                <button className="next-btn">
                    <FaChevronRight />
                </button>
            </Swiper>
        </div>
    );
};

export default Testimonials;
