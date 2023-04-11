//GipsSection.js
import React, { useState } from 'react';
import JsonSection from './JsonSection';



function GipsSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
<section id="Gips" className="service">
   <img src="https://via.placeholder.com/200" alt="Gips" />
      <h3 className="service__title">Gips</h3>
      <p className="service__text">
        Jeśli posiadasz zabytkowe przedmioty wykonane z gipsu, możemy przywrócić im dawne piękno i wartość. Nasza pracownia konserwatorska dba o to, aby każda renowacja była przeprowadzona z najwyższą precyzją i starannością.
      </p>
      <h4 className="service__subtitle">Pracujemy z:</h4>
      <ul className="service__list">
        <li>rzeźbami gipsowymi</li>
        <li>ozdobami ścian i sufitów</li>
        <li>detalami architektonicznymi</li>

    <li>ramami obrazów</li>
    <li>elementami wystroju wnętrz</li>
  </ul>
  <h4 className="service__subtitle">Częste problemy z gipsem:</h4>
  <ul className="service__list">
    <li>uszkodzenia mechaniczne, takie jak pęknięcia, złamania czy ukruszenia</li>
    <li>zabrudzenia i osady powierzchniowe</li>
    <li>złuszczenia i odbarwienia warstwy malarskiej</li>
    <li>uszkodzenia spowodowane wilgocią</li>
    <li>ataki szkodników, takich jak owady czy pleśń</li>
    <li>uszkodzenia powstałe w wyniku niewłaściwego przechowywania lub transportu</li>
  </ul>
  <p className="service__text">
    Zajmujemy się renowacją różnorodnych przedmiotów wykonanych z gipsu, z dbałością o zachowanie oryginalnych detali i właściwości materiałowych. Decyzja o renowacji należy do Ciebie.
  </p>

  <JsonSection
    title="Naprawa przedmiotów z gipsu - FAQ"
    fileName="/jsonFile/Gips.json"
    activeIndex={activeIndex}
    handleQuestionClick={handleQuestionClick}
  />
</section>

  );
}
export default GipsSection;

