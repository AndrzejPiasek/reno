import React, { useState } from 'react';
import { renderToString } from 'react-dom/server';
import MyComponent from './Services.js'; // ścieżka do pliku z komponentem

const StaticHtmlGenerator = () => {
  const [staticHtml, setStaticHtml] = useState('');

  const generateStaticHtml = () => {
    const result = renderToString(<MyComponent />);
    setStaticHtml(result);
  };

  return (
    <div>
      <button onClick={generateStaticHtml}>Generuj statyczny HTML</button>
      <pre>{staticHtml}</pre>
    </div>
  );
};

export default StaticHtmlGenerator;
