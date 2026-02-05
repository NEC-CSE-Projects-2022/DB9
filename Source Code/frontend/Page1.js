import React, { useState } from 'react';
import axios from 'axios';
import './Page1.css'; // We will create this CSS file next

function Page1() {
  const [inputText, setInputText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCorrectGrammar = async () => {
    if (!inputText) return;
    
    setIsLoading(true);
    setError('');
    setCorrectedText('');

    try {
      // Call your NEW Flask API on port 8000
      const response = await axios.post('http://localhost:8000/correct-grammar', {
        text: inputText
      });
      
      setCorrectedText(response.data.correction);

    } catch (err) {
      setError('Could not connect to the AI server. Is it running?');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-content">
      <h1>Grammar Correction Tool</h1>
      <p>Enter your text below to get AI-powered corrections.</p>
      
      <div className="grammar-container">
        <textarea
          className="grammar-textarea"
          placeholder="Enter text to correct..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        
        <button 
          className="grammar-button" 
          onClick={handleCorrectGrammar} 
          disabled={isLoading}
        >
          {isLoading ? 'Correcting...' : 'Correct Grammar'}
        </button>
        
        {error && <p className="grammar-error">{error}</p>}
        
        {correctedText && (
          <div className="grammar-result">
            <h3>Corrected Text:</h3>
            <p>{correctedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page1;