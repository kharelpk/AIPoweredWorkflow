import React from 'react';
import DeviceCard from './DeviceCard';
import devices from '../data/devices.json';

const Sidebar = () => {
  return (
    <aside className="bg-gray-[#202124] text-white w-64 sm:w-72 md:w-80 px-4 py-2 border-r border-[#D9D9D9] max-h-screen">
      <h5 className="text-md font-bold mt-10 sticky top-0">AVAILABLE DEVICES</h5>
      <div className="flex justify-center overflow-y-auto h-full pb-4 custom-scrollbar">
        <div className="grid grid-cols-2 gap-2 mt-4">
          {devices.map((device, index) => (
            <DeviceCard key={index} title={device.title} description={device.description} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
