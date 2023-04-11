// /src/components/Hero.js
import React from 'react';

const nazwaImg ="hero.webP";

function Hero() {
  return (
    <section className="hero">
      
      <picture>
        <source media="(max-width: 480px)" srcSet={`/img/300/${nazwaImg}`} />
        <source media="(max-width: 768px)" srcSet={`/img/600/${nazwaImg}`} />
        <source media="(max-width: 1200px)" srcSet={`/img/900/${nazwaImg}`} />
        <img src={`/img/1200/${nazwaImg}`} alt="Tło" className="hero__image" />
      </picture>
      <div className="hero__content">
        <h1 className="hero__heading">Najlepsze rękodzieła dla Twojego domu</h1>
        <p className="hero__text">
          Nasza oferta zawiera szeroki wybór unikalnych i pięknych wyrobów rzemieślniczych, które będą ozdobą Twojego domu.
        </p>
        <button className="btn-primary">Zobacz ofertę</button>
      </div>
    </section>
  );
}

export default Hero;
