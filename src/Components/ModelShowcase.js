import React, { useState } from 'react';
import './ModelShowcase.css';

const ModelShowcase = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div id={"carousel-wrapper"}>
            <div className={"block"} id="carousel-container" >
                <h3>MODEL/ENVIRONMENT SHOWCASE</h3>
                {/* Main Image */}
                <div className="carousel">
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="carousel-image"
                    />
                </div>

                {/* Carousel Navigation */}
                <button onClick={prevSlide} className="carousel-button prev-button">
                    &lt; Prev
                </button>
                <button onClick={nextSlide} className="carousel-button next-button">
                    Next &gt;
                </button>
            </div>

            {/* Thumbnail Images */}
            <div className="images">
                {images.map((image, index) => (
                    <div key={index} className="thumbnail-container">
                        <img
                            className={currentIndex === index ? "outlined-image" : "image"}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            onClick={() => setCurrentIndex(index)} // Clicking on thumbnail changes the main image
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModelShowcase;
