import React, { useState } from 'react';
import './Manuscript.css';

export default function App() {
  const [text, setText] = useState(`In principio creavit Deus caelum et terram. Terra autem erat inanis et vacua et tenebrae super faciem abyssi et spiritus Dei ferebatur super aquas. Dixitque Deus fiat lux et facta est lux.`);


  const getFormattedText = () => {
    const firstLetter = text.charAt(0);
    const rest = text.slice(1);
    return (
      <p className="manuscript-text">
        <span className="illuminated-letter">{firstLetter}</span>
        {rest}
      </p>
    );
  };

  const printPage = () => window.print();

  return (
    <div className="page-container">
      <header className="header">
        <h1>Welcome to the World of Illuminated Manuscripts</h1>
      </header>

      <main className="main-content">
        <div className="manuscript-container">
          <textarea
            className="input-box"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="output parchment" id="print-area">
            {getFormattedText()}
          </div>
        </div>

        <button onClick={printPage}>Print Manuscript</button>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mahen Mahindaratne | All rights reserved</p>
        <p>Designed by <a href="https://code.mahen-mahindaratne.online" target="_blank" rel="noopener noreferrer" class="underline hover:text-yellow-500">The Ghost Protocol</a></p>
      </footer>
    </div>
  );
}
