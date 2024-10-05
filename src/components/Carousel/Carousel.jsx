import React, { useState, useEffect } from 'react';
import './Carousel.scss'; // Make sure to create this CSS file

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Update itemsPerPage based on screen width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Swipe handlers
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  };

  const handleGesture = () => {
    if (touchEndX < touchStartX - 50) {
      nextSlide();
    }

    if (touchEndX > touchStartX + 50) {
      prevSlide();
    }
  };

  const renderDots = () => {
    let dots = [];
    for (let i = 0; i < totalPages; i++) {
      dots.push(
        <span
          key={i}
          className={`dot ${currentIndex === i ? 'active' : ''}`}
          onClick={() => handleDotClick(i)}
        ></span>
      );
    }
    return dots;
  };

  // Calculate the items to display
  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <div
          className="carousel-content"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {visibleItems.map((item, index) => (
            <div className="carousel-item" key={index}>
              {item}
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="dots-container">{renderDots()}</div>
    </div>
  );
}

export default Carousel;
