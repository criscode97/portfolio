import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Carousel.scss';

function Carousel({ items = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const touchStartXRef = useRef(0);
    const touchEndXRef = useRef(0);

    useEffect(() => {
        const updateItemsPerPage = () => {
            const w = window.innerWidth;
            if (w < 720) setItemsPerPage(1);
            else if (w < 1100) setItemsPerPage(2);
            else setItemsPerPage(3);
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

    useEffect(() => {
        if (currentIndex > totalPages - 1) setCurrentIndex(0);
    }, [currentIndex, totalPages]);

    const nextSlide = () => {
        setCurrentIndex(prev => (prev === totalPages - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    const handleDotClick = index => setCurrentIndex(index);

    const handleTouchStart = e => {
        touchStartXRef.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = e => {
        touchEndXRef.current = e.changedTouches[0].screenX;
        if (touchEndXRef.current < touchStartXRef.current - 50) nextSlide();
        if (touchEndXRef.current > touchStartXRef.current + 50) prevSlide();
    };

    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleItems = items.slice(startIndex, endIndex);

    return (
        <div className="carousel">
            <div className="carousel__wrapper">
                <button
                    className="carousel__arrow carousel__arrow--left"
                    onClick={prevSlide}
                    aria-label="Previous page"
                    disabled={totalPages <= 1}
                >
                    <FiChevronLeft />
                </button>

                <div
                    className="carousel__content"
                    style={{
                        gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {visibleItems.map((item, index) => (
                        <div className="carousel__item" key={`${currentIndex}-${index}`}>
                            {item}
                        </div>
                    ))}
                </div>

                <button
                    className="carousel__arrow carousel__arrow--right"
                    onClick={nextSlide}
                    aria-label="Next page"
                    disabled={totalPages <= 1}
                >
                    <FiChevronRight />
                </button>
            </div>

            {totalPages > 1 && (
                <div className="carousel__dots">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            className={`carousel__dot ${currentIndex === i ? 'is-active' : ''}`}
                            onClick={() => handleDotClick(i)}
                            aria-label={`Go to page ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Carousel;
