import React from 'react';

const LeftArrow = (props) => {
    return (
        <span className="backArrow arrow" onClick={props.goToPrevSlide}>&laquo; Previous</span>
    );
}

export default LeftArrow;