//SzkloSection.js
import React, { useState } from 'react';
import JsonSection from './JsonSection';



function SzkloSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
 <section id="Szklo" className="service">
      <img src="https://via.placeholder.com/200" alt="Szkło" />
      <h3 className="service__title">Szkło</h3>
      <p className="service__text">
        Czy posiadasz zabytkowy przedmiot ze szkła, który wymaga renowacji? Nasza mała pracownia konserwatorska może przywrócić mu dawne piękno i wartość.
      </p>
      <h4 className="service__subtitle">Często pracujemy z:</h4>
      <ul className="service__list">
    <li>witrażami</li>
    <li>lustrami</li>
    <li>oszkłem artystycznym</li>
    <li>szklanymi rzeźbami</li>
    <li>szkłem kryształowym</li>
    <li>karafkami</li>
    <li>kieliszkami</li>
  </ul>
  <h4 className="service__subtitle">Najczęściej napotykane problemy:</h4>
  <ul className="service__list">
    <li>Pęknięcia i złamania</li>
    <li>Ubytki i uszkodzenia krawędzi</li>
    <li>Zanieczyszczenia i zabrudzenia powierzchni</li>
    <li>Osady i nakładające się warstwy brudu</li>
    <li>Wyszczerbienia i ukruszenia</li>
    <li>Blaknięcie i utrata kolorów</li>
    <li>Zniszczenia spowodowane przez czynniki atmosferyczne</li>
  </ul>
  <p className="service__text">
    Nasza pracownia konserwatorska jest przygotowana, aby poradzić sobie z różnymi problemami związanymi z zabytkowymi przedmiotami ze szkła. Decyzja o renowacji należy do Ciebie.
  </p>

  <JsonSection
    title="Naprawa przedmiotów ze szkła - FAQ"
    fileName="/jsonFile/szklo.json"
    activeIndex={activeIndex}
    handleQuestionClick={handleQuestionClick}
  />
</section>

  );
}
export default SzkloSection;

