// src/components/ResponsiveImage.js
import React from 'react';

function ResponsiveImage({ imageName, altText, className, breakpoints }) {
  return (
    <picture>
      {breakpoints.map((breakpoint, index) => (
        <>
          <source
            key={`${index}-portrait`}
            media={`(max-width: ${breakpoint.width}px) and (orientation: portrait)`}
            type="image/webp"
            srcSet={`/img/${breakpoint.size}/portrait/${imageName}.webp`}
          />
          <source
            key={`${index}-landscape`}
            media={`(max-width: ${breakpoint.width}px) and (orientation: landscape)`}
            type="image/webp"
            srcSet={`/img/${breakpoint.size}/landscape/${imageName}.webp`}
          />
        </>
      ))}
      <source
        type="image/webp"
        srcSet={`/img/1200/landscape/${imageName}.webp`}
      />
      <img
        src={`/img/${breakpoints[breakpoints.length - 1].size}/landscape/${imageName}.png`}
        alt={altText}
        className={className}
      />
    </picture>
  );
}

export default ResponsiveImage;
