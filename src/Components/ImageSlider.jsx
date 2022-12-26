import { useState } from "react";
import vectorRight from "../img/vectorRight.png"
import vectorLeft from "../img/vectorLeft.png"
import "../styles/Slide.css"

const slideStyles = {
  display: "flex",
  justifyContent: "spaceBetween",
  flexDirection: "column",
  alignItem: "center",
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: "url(" + (slides[currentIndex]) + ")",
  };
  const visualIndex = currentIndex + 1
  const totalIndex = slides.length

  if (totalIndex > 1){
    return (
      <div className="sliderStyles">
        <div style={slideStylesWidthBackground}>
            <div className="arrowBox" >
              <img className="arrowRight" src={vectorLeft} alt="fleche gauche" onClick={goToPrevious}></img>
              <img className="arrowLeft" src={vectorRight} alt="fleche droite" onClick={goToNext}></img>
            </div>
            <div className="index">
              {visualIndex}/{totalIndex}
            </div>
        </div>
      </div>
    );
  }
  else{
    return(
      <div className="sliderStyles">
        <div style={slideStylesWidthBackground}>
          <img src={slides} alt="votre logement"></img>
        </div>
      </div>
    )
  }

};

export default ImageSlider;