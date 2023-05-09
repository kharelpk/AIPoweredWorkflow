// import React from 'react';
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// const CodeDisplay = ({ code }) => {
//   return (
//     <div className="code-display">
//       <SyntaxHighlighter language="python" style={dracula}>
//         {code}
//       </SyntaxHighlighter>
//     </div>
//   );
// };

// export default CodeDisplay;

// import React from 'react';
// import MonacoEditor from '@uiw/react-monacoeditor';

// const CodeDisplay = ({ code }) => {
//   return (
//     <div className="code-display">
//       <MonacoEditor
//         language="python"
//         value={code}
//         options={{
//           fontSize: 14,
//           theme: 'vs-dark',
//           readOnly: true,
//         }}
//         height="100px"
//       />
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
        <h6 className='text-[#26947a]'>Generated Code</h6>
        <button onClick={copyCodeToClipboard}>
          <FontAwesomeIcon icon={faCopy} /> Copy
        </button>
      </div>
      <div className="code-display-body">
        <MonacoEditor
          language="python"
          value={code}
          options={{
            fontSize: 14,
            theme: 'vs-dark',
            readOnly: false,
          }}
          height="55vh"
          width = "100%"
        />
      </div>
    </div>
  );
};

export default CodeDisplay;
