// CodeInfo.jsx
import React from 'react';
import codeInfo from '../data/codeInfo.json';
import './CodeInfo.scss';

const CodeInfo = () => {
  return (
    <div className="code-info">
      <h6>{codeInfo.title}</h6>
      <p>{codeInfo.description}</p>
      <p>Created: {codeInfo.created}</p>
      <p>Author: {codeInfo.author}</p>
      <p>Version: {codeInfo.version}</p>
    </div>
  );
};

export default CodeInfo;
