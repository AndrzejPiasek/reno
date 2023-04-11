//PlastikSection.js
import React, { useState } from 'react';
import JsonSection from './JsonSection';


function PlastikSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
 <section id="Plastik" className="service">
      <img src="https://via.placeholder.com/200" alt="Plastik" />
      <h3 className="service__title">Plastik</h3>
      <p className="service__text">
        Czy Twój przedmiot z plastiku potrzebuje renowacji? Pozwól nam przywrócić mu dawny blask i wartość...
      </p>
      <h4 className="service__subtitle">Najczęściej konserwowane przedmioty z plastiku to:</h4>
      <ul className="service__list">
        <li>Figurki</li>
        <li>Zabawki</li>
        <li>Maskotki</li>
        <li>Plakaty</li>
        <li>Obudowy</li>
        <li>Ekspozycje muzealne</li>
        <li>Modele</li>
      </ul>
      <h4 className="service__subtitle">Problemy, z którymi się mierzymy:</h4>
      <ul className="service__list">
        <li>Złamania i pęknięcia</li>
        <li>Znaczne utlenienie</li>
        <li>Zniszczenia mechaniczne, takie jak rysy i otarcia</li>
        <li>Problemy z przyleganiem warstw</li>
        <li>Blaknięcie i zmiana koloru</li>
        <li>Problemy z stabilnością struktury</li>
        <li>Atak szkodników, takich jak owady i gryzonie</li>
      </ul>
      <p className="service__text">
        Bez względu na to, jakie problemy występują, nasi specjaliści zawsze podejmą się wyzwania i zrobią wszystko, aby przywrócić Twój przedmiot do pierwotnego stanu. Skontaktuj się z nami, aby uzyskać więcej informacji na temat naszych usług renowacji przedmiotów z plastiku.
      </p>
      <JsonSection
        title="Renowacja przedmiotów z plastiku - FAQ"
        fileName="/jsonFile/Plastik.json"
        activeIndex={activeIndex}
        handleQuestionClick={handleQuestionClick}
      />
    </section>
  );
}
export default PlastikSection;

