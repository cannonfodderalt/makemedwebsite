"use client";

import { useState } from "react";
import CarouselSlideOne from "./CarouselSlideOne";
import CarouselSlideTwo from "./CarouselSlideTwo";
import CarouselSlideThree from "./CarouselSlideThree";

const slides = [<CarouselSlideOne />, <CarouselSlideTwo />, <CarouselSlideThree />];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-[100%] overflow-hidden bg-secondary">
      <div className="flex transition-transform duration-700 eas-in-out" style={{ transform: `translateX(-${current * 100}%)`}}>

        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 h-full">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 
             bg-black/50 text-white px-4 py-2 rounded-full 
             transition-transform duration-300 
             hover:-translate-y-[60%]"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 
             bg-black/50 text-white px-4 py-2 rounded-full 
             transition-transform duration-300 
             hover:-translate-y-[60%]"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}