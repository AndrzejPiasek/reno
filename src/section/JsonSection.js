import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function JsonSection({ title, fileName, activeIndex, handleQuestionClick }) {
  // Utwórz lokalny stan dla przechowywania danych z pliku JSON
  const [faqData, setFaqData] = useState([]);

  // Użyj efektu, aby pobrać dane z pliku JSON po załadowaniu komponentu
  useEffect(() => {
    // Utwórz funkcję asynchroniczną, aby pobrać dane z pliku JSON
    const fetchData = async () => {
      try {
        // Pobierz ścieżkę do folderu publicznego
        const publicPath = process.env.PUBLIC_URL || '';

        // Wykonaj żądanie fetch do pliku JSON
        const response = await fetch(`${publicPath}${fileName}`);

        // Przekształć odpowiedź w obiekt JSON
        const data = await response.json();

        // Zaktualizuj stan komponentu za pomocą pobranych danych
        setFaqData(data);
      } catch (error) {
        // Wyświetl błąd, jeśli wystąpił problem z pobieraniem danych
        console.error('Error fetching JSON data:', error);
      }
    };

    // Wywołaj funkcję fetchData
    fetchData();
  }, [fileName]);

  // Renderuj sekcję z danymi z pliku JSON
  return (
    <section className="faq">
      {/* Wyświetl tytuł sekcji */}
      <h2>{title}</h2>

      {/* Mapuj dane z pliku JSON do elementów JSX */}
      {faqData.map((item, index) => (
        <div key={index} className="faq__item">
          {/* Wyświetl pytanie z pliku JSON i obsłuż kliknięcie */}
          <h3 className="faq__question" onClick={() => handleQuestionClick(index)}>
            {item.question}
          </h3>

          {/* Wyświetl odpowiedź z pliku JSON, jeśli element jest aktywny */}
          {activeIndex === index && (
            <p className="faq__answer">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}

// Zdefiniuj właściwości dla komponentu
JsonSection.propTypes = {
  title: PropTypes.string,
  fileName: PropTypes.string.isRequired,
  activeIndex: PropTypes.number,
  handleQuestionClick: PropTypes.func.isRequired,
};

export default JsonSection;
