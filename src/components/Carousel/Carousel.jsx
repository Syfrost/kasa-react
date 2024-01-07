import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './carousel.scss';

const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = pictures.length;

    // eslint-disable-next-line react/prop-types
    const ArrowSvg = ({ direction }) => (
        <svg
            width="48" height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: direction === 'right' ? 'rotate(180deg)' : '' }}
        >
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
        </svg>
    );

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalImages - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    return (
        <div className={'carousel'}>
            {totalImages > 1 && <button className={`carousel__arrow carousel__arrow--left`} onClick={goToPrevious}><ArrowSvg direction="left" /></button>}
            <img className={'carousel__img'} src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            {totalImages > 1 && <button className={`carousel__arrow carousel__arrow--right`} onClick={goToNext}><ArrowSvg direction="right" /></button>}
            {totalImages > 1 && <p className={`carousel__counter`}>{`${currentIndex + 1}/${totalImages}`}</p>}
        </div>
    );
};

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;

