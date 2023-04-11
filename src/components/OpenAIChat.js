import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const OpenAIChat = ({ sectionId }) => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');
  const [knowledgeBase, setKnowledgeBase] = useState('');

  useEffect(() => {
    const fetchKnowledgeBase = async () => {
      try {
        const response = await axios.get(`/path/to/your/json/files/${sectionId}.json`);
        setKnowledgeBase(response.data.content);
      } catch (error) {
        console.error('Błąd wczytywania danych:', error);
      }
    };

    fetchKnowledgeBase();
  }, [sectionId]);

  const handleSubmit = async () => {
    if (!knowledgeBase) {
      console.error('Baza wiedzy nie została załadowana');
      return;
    }

    try {
      console.log('Wysyłanie żądania:', inputText);

      const prompt = `Baza wiedzy: ${knowledgeBase}\n\nPytanie: ${inputText}\nOdpowiedź:`;

      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: prompt,
          max_tokens: 2048,
          n: 3,
          stop: null,
          temperature: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      console.log('Odpowiedź API:', response.data);

      const choices = response.data.choices.map((choice) => choice.text.trim());
      const formattedResponse = (
        <ul>
          {choices.map((choice) => (
            <li key={choice}>{choice}</li>
          ))}
        </ul>
      );

      setResponseText(formattedResponse);
    } catch (error) {
      console.error('Błąd:', error);
    }
  };

  return (
    <div>
      <h3>Przykład aplikacji z OpenAI</h3>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={handleSubmit}>Wyślij</button>
      <div>{responseText}</div>
    </div>
  );
};

OpenAIChat.propTypes = {
  sectionId: PropTypes.string.isRequired,
};

export default OpenAIChat;
