import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    img: require('../images/hero.jpg'),
    altText: 'imgHero',
    caption: 'MYTINERARY',
    caption2: 'find your perfect trip'
  },
  {
    img: require('../images/hero1.jpg'),
    altText: 'imgHero1',
    caption: 'MYTINERARY',
    caption2: 'designed for insiders..'
  },
  {
    img: require('../images/hero2.jpg'),
    altText: 'imgHero2',
    caption: 'MYTINERARY',
    caption2: '..who know and love their cities'
  }
];

const Hero = (props) => {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img  className="imgSize d-block w-10" src={item.img} alt={item.altText} />
        
        <CarouselCaption captionText={item.caption2} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
   <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Hero;
