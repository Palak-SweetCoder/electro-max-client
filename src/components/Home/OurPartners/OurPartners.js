import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurPartners.css';

const OurPartners = () => {
    const partnerImg = [
        { id: 1, img: 'https://i.ibb.co/dm6j0R9/headphone-1.jpg' },
        { id: 2, img: 'https://i.ibb.co/TLnKRpL/headphone-2.jpg' },
        { id: 3, img: 'https://i.ibb.co/cFZD4np/headphone-3.jpg' },
        { id: 4, img: 'https://i.ibb.co/5kWyJc4/laptop-1.jpg' },
        { id: 5, img: 'https://i.ibb.co/XYzcP90/laptop-2.jpg' },
        { id: 6, img: 'https://i.ibb.co/16nXRvV/tab-1.jpg' },
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
                            className="rounded-5"
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
