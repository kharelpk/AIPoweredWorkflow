import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './InputBar.scss';

const InputBar = ({onSend, onFocus}) => {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    console.log('sent');
    console.log(inputText)
    // onSend(inputText);

    if (inputText.trim()) {
        onSend(inputText);
        setInputText('');
      }
  };

  

  return (
    <div className="input-bar">
      <textarea
        className="input-area"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onFocus={onFocus}
        placeholder="Type your text here..."
      />
      <button className="send-button" onClick={handleSend}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

export default InputBar;
