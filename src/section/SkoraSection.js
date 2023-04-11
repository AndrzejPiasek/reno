//SkoraSection.js
import React, { useState } from 'react';
import JsonSection from './JsonSection';


function SkoraSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
<section id="Skora" className="service">
   <img src="https://via.placeholder.com/200" alt="Skora" />
        <h3 className="service__title">Skora</h3>
        <p className="service__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed massa ut dolor egestas hendrerit. Ut efficitur sapien nec orci sodales, sed interdum mi lobortis. Vivamus eu semper ipsum.</p>
 <JsonSection
  title="Naprawa Skóry - FAQ"
  fileName="/jsonFile/Skora.json"
  activeIndex={activeIndex}
  handleQuestionClick={handleQuestionClick}
/>
</section>
  );
}
export default SkoraSection;

