import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurPartners.css';

const OurPartners = () => {
    const partnerImg = [
        { id: 1, img: 'https://i.ibb.co/2j6pJzR/apple-logo.png' },
        { id: 2, img: 'https://i.ibb.co/jbwNKKf/alphabet-logo.png' },
        { id: 3, img: 'https://i.ibb.co/9v0hBD0/intel-logo.png' },
        { id: 4, img: 'https://i.ibb.co/L8wBjm8/Accenture-logo.png' },
        { id: 5, img: 'https://i.ibb.co/BsTVPqt/meta-logo.png' },
        { id: 6, img: 'https://i.ibb.co/L9WXbPB/spark-logo.png' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <h2 className="fw-semibold text-center mt-5 items-header">
                OUR PARTNERS
            </h2>
            <div className="y-line mx-auto"></div>
            <Slider
                className="carousel-container w-75 mx-auto mt-5 mb-5"
                {...settings}
            >
                {partnerImg.map((img) => (
                    <div
                        className="d-flex justify-content-center p-3"
                        key={img.id}
                    >
                        <img
                            className="rounded-5 shadow-sm"
                            width={280}
                            src={img.img}
                            alt=""
                        />
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default OurPartners;
