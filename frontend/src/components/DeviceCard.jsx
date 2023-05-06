import React from 'react';

const DeviceCard = ({ title, description }) => {
  return (
    <div className="bg-[#202124] text-white w-24 h-24 p-2 m-2 rounded border border-white">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-xs mt-2 truncate group-hover:whitespace-normal group-hover:text-xs">
        {description}
      </p>
    </div>
  );
};

export default DeviceCard;
