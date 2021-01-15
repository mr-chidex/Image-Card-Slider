import React from 'react'
import ImageSlider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import image0 from "../images/loren-cutler-TnFMcv4Ed5Y-unsplash.jpg"
import image1 from "../images/image-1.jpg"
import image2 from "../images/image-2.jpg"
import image3 from "../images/image-3.jpg"
import image4 from "../images/amr-taha-KIIbndKm7B8-unsplash.jpg"
import image5 from "../images/49368362.jpg"
import Card from './Card'

const Slider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1730,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    }
    return (
        <div>
            <ImageSlider {...settings}>

                <Card
                    image={image5}
                    jobTitle="Back-End Dev"
                    name="Chi-Dex" />

                <Card
                    image={image4}
                    jobTitle="Front-End Dev"
                    name="Chi-Dex" />

                <Card
                    image={image3}
                    jobTitle="Full-Stack Dev"
                    name="Chi-Dex" />

                <Card
                    image={image2}
                    jobTitle="Software Dev"
                    name="Chi-Dex" />

                <Card
                    image={image1}
                    jobTitle="Data Scientist"
                    name="Chi-Dex" />

                <Card
                    image={image0}
                    jobTitle="ML-Expert"
                    name="Chi-Dex" />

            </ImageSlider>

        </div>
    )
}

export default Slider
