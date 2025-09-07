"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trends Items",
      mainTitle: "Men's LATEST FASHION",
      price: "$20",
    },
    {
      id: 1,
      img: "/banner-1.jpg",
      title: "Trends Items",
      mainTitle: "Men's LATEST FASHION",
      price: "$25",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => {
            return (
              <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
