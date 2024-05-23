"use client"

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import Container from "../utils/Container";

const Hero = () => {
  var settings:any = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows:false,
  };

  const slideData = [
    {
      id: 0,
      img: "/assets/img/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "SUMMER SALE! GET 50% OFF",
      price: "Rp 200.000",
      priority: true
    },
    {
      id: 1,
      img: "/assets/img/banner-2.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN ACCESSORIES",
      price: "Rp 350.000",
    },
    {
      id: 2,
      img: "/assets/img/banner-03.jpg",
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "Rp.270.000",
    },
  ];

  return (
    <div>
        <Container>
        <div className="pt-28">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
        </Container>
        </div>
  );
};

export default Hero;