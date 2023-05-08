// import React from 'react';

// const DeviceCard = ({ title, description }) => {
//   return (
//     <div className="bg-[#202124] text-white w-24 h-24 p-2 m-2 rounded border border-[#26947a]">
//       <h3 className="text-lg font-bold">{title}</h3>
//       <p className="text-xs mt-2 truncate group-hover:whitespace-normal group-hover:text-xs">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default DeviceCard;

import React from 'react';

const DeviceCard = ({ title, description, info }) => {
  return (
    <div className="relative group">
      <div className="bg-[#202124] text-white w-54 h-20 p-2 m-2 rounded border border-[#26947a] cursor-pointer">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-xs mt-2 truncate group-hover:whitespace-normal group-hover:text-xs">
          {description}
        </p>
      </div>
      {/* <span className="hidden group-hover:block absolute z-10 top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 text-sm text-white bg-black rounded-md shadow-lg opacity-90 whitespace-nowrap">
        {info}
      </span> */}
    </div>
  );
};

export default DeviceCard;

