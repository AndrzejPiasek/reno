//WoskSection.js
import React, { useState } from 'react';
import JsonSection from './JsonSection';



function WoskSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
<section id="Wosk" className="service">
  
 <img src="https://via.placeholder.com/200" alt="Wosk" />
      <h3 className="service__title">Wosk</h3>
      <p className="service__text">
        Czy posiadasz przedmioty wykonane z wosku, które wymagają renowacji? Nasza pracownia konserwatorska może przywrócić im dawne piękno, zachowując jednocześnie autentyczność materiału.
      </p>
      <h4 className="service__subtitle">Pracujemy z:</h4>
      <ul className="service__list">
        <li>rzeźbami woskowymi</li>
        <li>świecami ozdobnymi</li>
        <li>portretami woskowymi</li>
 <li>figurkami z wosku</li>
    <li>ozdobami i elementami wystroju wnętrz</li>
  </ul>
  <h4 className="service__subtitle">Częste problemy z woskiem:</h4>
  <ul className="service__list">
    <li>uszkodzenia mechaniczne, takie jak pęknięcia, złamania czy odkształcenia</li>
    <li>zabrudzenia i osady powierzchniowe</li>
    <li>zmiany kształtu spowodowane działaniem temperatury</li>
    <li>uszkodzenia spowodowane wilgocią</li>
    <li>ataki szkodników, takich jak owady czy pleśń</li>
    <li>uszkodzenia powstałe w wyniku niewłaściwego przechowywania lub transportu</li>
  </ul>
  <p className="service__text">
    Nasza pracownia konserwatorska posiada doświadczenie w pracy z woskiem i stosuje odpowiednie metody renowacji, aby przywrócić przedmiotom ich pierwotny wygląd. Decyzja o renowacji należy do Ciebie.
  </p>

<JsonSection
  title="Naprawa wosku - FAQ"
  fileName="/jsonFile/Wosk.json"
  activeIndex={activeIndex}
  handleQuestionClick={handleQuestionClick}
/>
</section>
  );
}
export default WoskSection;

