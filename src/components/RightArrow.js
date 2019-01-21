import React from 'react';

const RightArrow = (props) => {
    return (
        <span className="nextArrow arrow" onClick={props.goToNextSlide}> Next &raquo;</span> 
        
    );
}

export default RightArrow;