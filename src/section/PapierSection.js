// PapierSection.js
import React, { useState } from 'react';
import JsonSection from './JsonSection';


function PapierSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
return (
<section id="Papier" className="service">
<img src="https://cdn.discordapp.com/attachments/1067919841538887706/1091752948356362240/Andy4321_Famous_Dutch_painter_Rembrandt_762054c0-87f8-44ee-9b09-2deade608a37.png" alt="Papier" />
<h3 className="service__title">Papier</h3>
<p className="service__text">
        Nie wiem co cię martwi.. Pożółta mapa, podarta księga, zniszony album. Ale jeżeli przwiodła cię tu uszkodzone:
      </p>
<h4 className="service__subtitle">Popularne przedmioty poddawane renowacji:</h4>
      <ul className="service__list">
        <li>Stare mapy</li>
        <li>Manuskrypty</li>
        <li>Iluminowane rękopisy</li>
        <li>Plakaty i afisze</li>
        <li>Albumy ze zdjęciami</li>
        <li>Wydruki sztuki</li>
      </ul>

      <h4 className="service__subtitle">I mają takie uszkodzenia jak::</h4>
      <ul className="service__list">
        <li>Żółknięcie i przebarwienia</li>
        <li>Zabrudzenia i plamy</li>
        <li>Nderwania, zaginania, ubytki</li>
        <li>Uszkodzenia przez szkodniki, takie jak owady i gryrozonogowce</li>
<li>Wodne uszkodzenia, takie jak plamy i falowanie</li>
<li>Utrata integralności papieru z powodu kwasowości</li>
<li>Utrata tuszu lub farby z powodu złego przechowywania lub starzenia się</li>
</ul>
<p className="service__text">
Kiedy zaczynam renowację księgi, zawsze zaczynam od dokładnego zbadania jej stanu, aby ustalić odpowiedni plan działania. Następnie, razem z moim zespołem, wykonujemy następujące czynności:
</p>
<h4 className="service__subtitle">1. Oczyszczanie</h4>
<p className="service__text">
Na początek delikatnie oczyszczamy powierzchnię księgi, usuwając kurz, brud oraz ewentualne plamy. Używamy do tego specjalistycznych narzędzi i substancji, aby uniknąć uszkodzeń.
</p>
<h4 className="service__subtitle">2. Naprawa uszkodzeń</h4>
<p className="service__text">
Kiedy powierzchnia jest już czysta, przechodzimy do naprawy wszelkich uszkodzeń.
</p>
  <h4 className="service__subtitle">3. Wzmocnienie i konserwacja</h4>
  <p className="service__text">
    Następnie, my wzmocnimy wszelkie osłabione miejsca na kartkach oraz naprawimy uszkodzone fragmenty oprawy. Używamy do tego materiałów, które są kompatybilne z oryginalnymi elementami księgi, tak aby zachować jej autentyczność i integralność.
  </p>
  <h4 className="service__subtitle">4. Wygładzenie kartek</h4>
  <p className="service__text">
    Jeżeli strony księgi są pogniecione lub pofałdowane, dokładnie je wygładzamy, stosując odpowiednią technikę i narzędzia. Dzięki temu odzyskują one swój pierwotny wygląd.
  </p>
  <h4 className="service__subtitle">5. Ochrona</h4>
  <p className="service__text">
    Na koniec, aby zabezpieczyć księgę przed dalszymi uszkodzeniami, stosujemy specjalistyczne metody konserwacji. Może to obejmować nałożenie warstwy ochronnej na powierzchnię strony lub zastosowanie innych środków zapobiegających degradacji materiału.
  </p>
  <p className="service__text">
    Wszystkie te etapy są przeprowadzane z najwyższą starannością i dbałością o szczegóły. Współpracujemy z konserwatorami specjalizującymi się w różnych dziedzinach, aby móc dostarczyć usług na najwyższym poziomie. Naszym celem jest przywrócenie księgi do jej pierwotnego blasku, zachowując jej wartość historyczną i artystyczną.
  </p>
  <p className="service__text">
    Dzięki naszemu doświadczeniu oraz użyciu najlepszych materiałów i technik, jesteśmy przekonani, że nasze prace konserwatorskie spełnią oczekiwania nawet najbardziej wymagających klientów.
  </p>
<JsonSection
  title="Naprawa Papieru - FAQ"
  fileName="/jsonFile/Papier.json"
  activeIndex={activeIndex}
  handleQuestionClick={handleQuestionClick}
/>
</section>
);
}

export default PapierSection;
