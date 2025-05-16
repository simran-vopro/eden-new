import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import images from '../theme/imagesPath';

const Features = ({ style, backgroundColor, titleColor, textColor, borderRadius, gap, height, alignItems, data }) => {
    const featuresData = data ? data : [
        { title: 84, content: "Suppliers Engaged", img: images.feature1 },
        { title: 67, content: "Fixed Products", img: images.feature2 },
        { title: 97, content: "Retention", img: images.feature3 },
        { title: 98, content: "Satisfaction", img: images.feature4 },
        { title: 84, content: "Suppliers Engaged", img: images.feature1 },
        { title: 67, content: "Fixed Products", img: images.feature2 },
        { title: 97, content: "Retention", img: images.feature3 },
        { title: 98, content: "Satisfaction", img: images.feature4 },
    ];

    return (
        <section id="features" style={style}>
            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={20}
                loop={true}
                speed={3000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                grabCursor={false}
            >
                {featuresData.map((feature, index) => (
                    <SwiperSlide key={index} style={{ width: 'auto' }}>
                        <div
                            className="supplier-card"
                            style={{ backgroundImage: backgroundColor ? null : `url(${feature.img})`, backgroundColor: backgroundColor, borderRadius: borderRadius, gap: gap, height: height, alignItems: alignItems }}
                        >
                            {!backgroundColor && <div className="overlay"></div>}

                            <div className="supplier-percentage" style={{
                                color: titleColor || "#fff"
                            }}>{feature.title}%</div>
                            <div className="supplier-label" style={{ color: textColor || "#fff" }}>{feature.content}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Features;
