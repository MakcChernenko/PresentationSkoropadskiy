import React, { useState } from "react";
import "./App.css";
import Slide1 from "./Slides/Slide1";
import Slide2 from "./Slides/Slide2";
import Slide3 from "./Slides/Slide3";
import Slide4 from "./Slides/Slide4";
import Slide5 from "./Slides/Slide5";
import Slide6 from "./Slides/Slide6";
import Slide7 from "./Slides/Slide7";
import Slide8 from "./Slides/Slide8";
import Slide9 from "./Slides/Slide9";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <Slide1 />,
    <Slide2 />,
    <Slide3 />,
    <Slide4 />,
    <Slide5 />,
    <Slide6 />,
    <Slide7 />,
    <Slide8 />,
    <Slide9 />,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="container">
      <div
        className="swiper"
        style={{ transform: `translateX(-${currentSlide * 1024}px)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {slide}
          </div>
        ))}
      </div>
      <div className="swiper-button-div">
        <button className="slider-prev" type="button" onClick={prevSlide}>
          prev
        </button>
        <button className="slider-next" type="button" onClick={nextSlide}>
          next
        </button>
      </div>
    </div>
  );
}

export default App;
