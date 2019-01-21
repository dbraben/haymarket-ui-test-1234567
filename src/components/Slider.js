import React from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

class Slider extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        images: [
          "assets/images/gallery-slide-1.jpg",
          "assets/images/gallery-slide-2.jpg",
          "assets/images/gallery-slide-3.jpg"
        ],
        currentIndex: 0,
        translateValue: 0
      }
    }
  
    goToPrevSlide = () => {
      if(this.state.currentIndex === 0)
        return;
        
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }
  
    goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if(this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      
      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
  
    slideWidth = () => {
       return document.querySelector('.slide').clientWidth
    }
  
    render() {
      return (
      <figure>
      <div className="row slider-nav__grey">
        
        <div className="offset-8 col-4 text-right">
            <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                {` ${this.state.currentIndex + 1} of ${this.state.images.length} `}
            <RightArrow goToNextSlide={this.goToNextSlide} />         
        </div>
      </div>
        <div className="slider row">

            <div className="slider-wrapper"
            style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: 'transform ease-out 0.45s'
            }}>
                {
                this.state.images.map((image, i) => (
                    <Slide key={i} image={image} />
                ))
                }
            </div>
        </div>
        <figcaption>Et harum quidem rerum facilis est et expedita distinctio.</figcaption>
          </figure>
      );
    }
  }

  export default Slider;