// import React from 'react';
// import './CodeInfo.scss';

// const CodeInfo = ({info}) => {
//   return (
//     <div className="code-info">
//     <h4>Information</h4>
//     {info}
//   </div>
//   );
// };

// export default CodeInfo;


import React from 'react';
import './CodeInfo.scss';

const CodeInfo = ({ info }) => {
  const regex = /(?<assumptions>^Assumptions:[\s\S]*?(?=Explanation))|(?<explanation>^Explanation:[\s\S]*?(?=Note))|(?<note>^Note:[\s\S]*)/gm;
  const sections = Array.from(info.matchAll(regex), m => ({
    assumptions: m.groups.assumptions,
    explanation: m.groups.explanation,
    note: m.groups.note,
  }));

  const renderSection = (title, content) => (
    <div className="info-section">
      <h3 className="text-[#26947a]">{title}</h3>
      <pre>{content}</pre>
    </div>
  );

  return (
    <div className="code-info">
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          {section.assumptions && renderSection('Assumptions', section.assumptions.replace(/^Assumptions:/, '').trim())}
          {section.explanation && renderSection('Explanation', section.explanation.replace(/^Explanation:/, '').trim())}
          {section.note && renderSection('Note', section.note.replace(/^Note:/, '').trim())}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CodeInfo;


// import React from 'react';
// import './CodeInfo.scss';

// const CodeInfo = ({info}) => {
//   return (
//     <div className="code-info">
//       <div dangerouslySetInnerHTML={{ __html: info }} />
//     </div>
//   );
// };

// export default CodeInfo;
