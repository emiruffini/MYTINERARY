import React, { useState} from 'react';
import '../styles/carousel.css'
import Slide from '../components/Slide'
import {useSelector} from "react-redux";
import {createSelector} from 'reselect';


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {slide: []},
  {slide: []},
  {slide: []},
  {slide:[]}
] 




const City = (data) =>{

  if (data.cities.response != undefined){
      items[0].slide = data.cities.response.slice(0,4)
      items[1].slide = data.cities.response.slice(4,8)
      items[2].slide = data.cities.response.slice(8,12)
      items[3].slide = data.cities.response.slice(12,16)
  }
  
}



const Car = (props) => {
  
  

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const selectCities = createSelector(//Funcion que acepta Redux state como argumento
    state => state.cities,
    allCities => allCities
  )
  const allCities = useSelector(selectCities)//Guardo el state global en una variable all cities
  

  if (allCities.cities.lenght != 0){

    City(allCities)//Esta funcion me divide las ciudades en 4 
    
    const slides = items.map((item) => {

      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          
        >
          {/*Llamo al componente Slide que me mostrará cuatro fotos en cada slide */}
          <Slide cities={item} />
             
          
          
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators 
        items={items} 
        activeIndex={activeIndex} 
        onClickHandler={goToIndex} 
        />
        {slides}
        <CarouselControl 
        direction="prev" 
        directionText="Previous" 
        onClickHandler={previous} 
        />
        <CarouselControl 
        direction="next" 
        directionText="Next" 
        onClickHandler={next} 
        />
      </Carousel>
    );
  }else{
    return <h1>Loading</h1>
  }
  
}

export default Car;
