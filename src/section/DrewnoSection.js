//DrewnoSection.js
import React, { useState } from 'react';
import JsonSection from './JsonSection';



function DrewnoSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
<section id="Drewno" className="service">
   <img src="https://via.placeholder.com/200" alt="Drewno" />
        <h3 className="service__title">Drewno</h3>
      <p className="service__text">
        Czy masz zabytkowy przedmiot z drewna, który potrzebuje renowacji? Nasza mała pracownia konserwatorska może przywrócić mu dawne piękno i wartość.
      </p>
      <h4 className="service__subtitle">Często pracujemy z:</h4>
      <ul className="service__list">
        <li>rzeźbami drewnianymi</li>
        <li>meblami zabytkowymi</li>
        <li>ramamiobrazów</li>
<li>elementami architektury wnętrz</li>
<li>dekoracjami i zdobieniami</li>
</ul>
<h4 className="service__subtitle">Najczęstsze problemy, z którymi się zmagamy:</h4>
<ul className="service__list">
<li>Zabrudzenia i odbarwienia powierzchni</li>
<li>Uszkodzenia mechaniczne, jak pęknięcia, złamania czy ubytki</li>
<li>Atak szkodników, takich jak korniki czy pleśń</li>
<li>Zniszczenia spowodowane wilgocią czy temperaturą</li>
<li>Stare i niewłaściwe naprawy</li>
</ul>
<p className="service__text">
Nasza pracownia konserwatorska jest gotowa, aby poradzić sobie z różnymi problemami związanymi z zabytkami z drewna. Podjęcie decyzji zależy od Ciebie.
</p>
<JsonSection
  title="Naprawa drewna - FAQ"
  fileName="/jsonFile/Drewno.json"
  activeIndex={activeIndex}
  handleQuestionClick={handleQuestionClick}
/>
</section>
  );
}
export default DrewnoSection;
