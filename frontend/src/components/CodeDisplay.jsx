// import React from 'react';
// import MonacoEditor from '@uiw/react-monacoeditor';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCopy } from '@fortawesome/free-solid-svg-icons';
// import './CodeDisplay.scss';

// const CodeDisplay = ({ code }) => {
//   const copyCodeToClipboard = () => {
//     navigator.clipboard.writeText(code);
//   };

//   return (
//     <div className="code-display">
//       <div className="code-display-header">
//         <h6 className='text-[#26947a]'>Generated Code</h6>
//         <button onClick={copyCodeToClipboard}>
//           <FontAwesomeIcon icon={faCopy} /> Copy
//         </button>
//       </div>
//       <div className="code-display-body">
//         <MonacoEditor
//           language="python"
//           value={code}
//           options={{
//             fontSize: 14,
//             theme: 'vs-dark',
//             readOnly: false,
//           }}
//           height="55vh" 
//           width = "100%"
//         />
//       </div>
//     </div>
//   );
// };

// export default CodeDisplay;


import React from 'react';
import MonacoEditor from '@uiw/react-monacoeditor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import './CodeDisplay.scss';

const CodeDisplay = ({ code }) => {
  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="code-display">
      <div className="code-display-header">
        <h6 className='text-[#26947A]'>GENERATED CODE</h6>
        <button onClick={copyCodeToClipboard}>
          <FontAwesomeIcon icon={faCopy} /> Copy
        </button>
      </div>
      <div className="code-display-body">
      <div className="monaco-container">
            <MonacoEditor
            language="python"
            value={code}
            options={{
                fontSize: 14,
                theme: 'vs-dark',
                readOnly: false,
            }}
            height="50vh"
            width="100%"
            />
  </div>
      </div>
    </div>
  );
};

export default CodeDisplay;
