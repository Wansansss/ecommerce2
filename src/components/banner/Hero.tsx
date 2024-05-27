"use client"

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import Container from "../utils/Container";
import axios from "axios";

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
  const [banner,setBanner] = useState<any>([''])

  function getBanner(){
       axios.get(process.env.NEXT_PUBLIC_API_URL+`/api/sl/v1/backoffice/banner/list`)
      .then((response) =>{
        // console.log(response)
        setBanner(response.data.data)
      }).catch((err) =>{console.log(err)});
    }
     useEffect(getBanner,[])
    //  console.log(banner)

  return (

    <div>
        <Container>
        <div className="pt-28">
        <Slider {...settings}>
          {banner?.map((item:any) => (
            <Slide
              key={item.secureId}
              img={item.fileUrl}
              title={item.fileName}
              // mainTitle={item.mainTitle}
              // price={item.price}
            />
          ))}
        </Slider>
      </div>
        </Container>
        </div>
  );
};

export default Hero;