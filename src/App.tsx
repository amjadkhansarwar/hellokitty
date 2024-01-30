import React, { useState } from 'react';
import './App.css';

function App() {
  const [rotate, setRotate] = useState<boolean>(false);
  const [greeting, setGreeting] = useState<string>('');

  let recognition: SpeechRecognition | null = null;

  if ('SpeechRecognition' in window) {
    recognition = new window.SpeechRecognition();
    recognition.lang = 'en-US'; // Set language to English

    recognition.onresult = function(event) {
      const last = event.results.length - 1;
      const phrase = event.results[last][0].transcript.toLowerCase();
      console.log('You said: ', phrase);
      if (phrase.includes('hello kitty')) {
        rotateHead();
      }
    }

    recognition.onerror = function(event) {
      console.error('Speech recognition error detected: ' + event.error);
    }
  } else {
    console.log('Speech recognition not supported in this browser');
  }

  function rotateHead() {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 1000);
  }

  function startListening() {
    if (recognition) {
      recognition.start();
      console.log('Speech recognition started...');
    } else {
      console.log('Speech recognition not available');
    }
  }

  function stopListening() {
    if (recognition) {
      recognition.stop();
      console.log('Speech recognition stopped.');
    } else {
      console.log('Speech recognition not available');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div
          className={`hello-kitty ${rotate ? 'rotate' : ''}`}
          onClick={rotateHead}
        ></div>
        <input
          type="text"
          value={greeting}
          onChange={(e) => setGreeting(e.target.value)}
          placeholder="Say Hello to Kitty"
        />
        <button onClick={startListening}>Say Hello</button>
      </header>
    </div>
  );
}

export default App;
