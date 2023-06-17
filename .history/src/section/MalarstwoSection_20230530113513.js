import React, { useState } from 'react';
import JsonSection from './JsonSection';// Upewnij się, że importujesz App.scss tutaj

function MalarstwoSection() {
  const [activeIndex, setActiveIndex] = useState(-1); // -1 oznacza, że żaden element nie jest aktywny


  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);//
  };
  return (
    <section id="Malarstwo" className="service container">
      <img src="https://cdn.discordapp.com/attachments/1067919841538887706/1091748245371355206/Andy4321_Famous_Dutch_painter_Rembrandt_Renowned_for_portraits__4211e29b-6c36-41c9-846f-0d0e14e2cfaf.png" alt="Malarstwo" />
      <h3 className="service__title">Malarstwo</h3>
      <p className="service__text">
        Czy Twój obraz potrzebuje renowacji? fachowej ręki? Może jedno nasze "dotknięcie" przywróci mu piękno i blask, doda wartości...
      </p>
      <h4 className="service__subtitle">Jeżeli masz:</h4>
      <ul className="service__list">
        <li>Obraz olejny</li>
        <li>Akwarelę</li>
        <li>Pastelę</li>
        <li>Gwasz</li>
        <li>Temperę</li>
        <li>Fresk</li>
        <li>Kolaż</li>
      </ul>
      <h4 className="service__subtitle">Twój problem to:</h4>
      <ul className="service__list">
        <li>Zabrudzenie i zacieki powierzchni</li>
        <li>Uszkodzenia mechaniczne, takie jak przecięcia, rozdarcia i dziury</li>
        <li>Odklejanie się warstwy malarskiej od podłoża</li>
        <li>Pęknięcia i złuszczenia farby</li>
        <li>Odbarwienia i blaknięcie pigmentów</li>
        <li>Zniszczenia ramy obrazu</li>
        <li>Naprężenia i deformacje płótna</li>
        <li>Atak szkodników, takich jak owady i pleśń</li>
        <li>Zmiany kształtu i struktury podłoża spowodowane wilgotnością</li>
        <li>Uszkodzenia powstałe w wyniku niewłaściwego przechowywania lub transportu</li>
      </ul>
      <p className="service__text">
        Jesteśmy przygotowani, aby poradzić sobie z różnymi rodzajami uszkodzeń. Zdecyduj...
      </p>

      <JsonSection
  title="Naprawa malarstwa - FAQ"
  fileName="/jsonFile/Malarstwo.json"
  activeIndex={activeIndex}
  handleQuestionClick={handleQuestionClick}
/>



    </section>
  );
}

export default MalarstwoSection;
