import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import stockout from "./stockout.png" ;
import trends from "./trends.png";


const ImageSlider = () => {
  // List of images
  const images = [
    stockout,
    trends
  ];
  

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to update the index every 6 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 6000ms = 6 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt="Slideshow" className="slider-image" />
    </div>
  );
};

export default ImageSlider;
