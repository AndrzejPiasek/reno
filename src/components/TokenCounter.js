import React, { useState } from 'react';

const TokenCounter = () => {
  const [text, setText] = useState('');
  const [tokenCount, setTokenCount] = useState(0);

  const countTokens = () => {
    // Funkcja do obliczania liczby tokenów w tekście
    const tokens = text.split(/[\s,]+/).length;
    setTokenCount(tokens);
  };

  return (
    <div>
      <h3>Licznik tokenów</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Wpisz tekst..."
      />
      <button onClick={countTokens}>Policz tokeny</button>
      <p>Liczba tokenów w tekście: {tokenCount}</p>
    </div>
  );
};

export default TokenCounter;
