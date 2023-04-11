//PorcelanaSection.js
import React, { useState } from 'react';
import JsonSection from './JsonSection';



function PorcelanaSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
<section id="Porcelana" className="service">
   <img src="https://via.placeholder.com/200" alt="Porcelana" />
        <h3 className="service__title">Porcelana</h3>
        <p className="service__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed massa ut dolor egestas hendrerit. Ut efficitur sapien nec orci sodales, sed interdum mi lobortis. Vivamus eu semper ipsum.</p>

<JsonSection
  title="Naprawa Porcelany - FAQ"
  fileName="/jsonFile/Porcelana.json"
  activeIndex={activeIndex}
  handleQuestionClick={handleQuestionClick}
/>
</section>
  );
}
export default PorcelanaSection;

