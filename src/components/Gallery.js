import React from 'react';
// const imageNames = [
//   "Image1.webP",
//   "Image2.webP",
//   "Image3.webP",
// ];
function Gallery() {
  return (
   <section className="gallery">
  <div className="gallery__content">
    {/* 
    {imageNames.map((imageName, index) => (
        <div key={index} className="gallery__item">
          <picture>
            <source media="(max-width: 480px)" srcSet={`img/300/${imageName}`} />
            <source media="(max-width: 768px)" srcSet={`img/600/${imageName}`} />
            <source media="(max-width: 1200px)" srcSet={`img/900/${imageName}`} />
            <img src={`img/1200/${imageName}`} alt={`Obraz ${index + 1}`} className="gallery__image" />
          </picture>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
Teraz, gdy dodasz nowy obrazek do galerii, wystarczy dodać nazwę pliku do tablicy imageNames, a obraz zostanie automatycznie dodany do galerii.

    */}
  </div>
</section>
  );
}

export default Gallery;
