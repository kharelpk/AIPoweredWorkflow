// import React from 'react';
// import DeviceCard from './DeviceCard';
// import devices from '../data/devices.json';

// const Sidebar = () => {
//   return (
//     <aside className="bg-gray-[#1E1E1E] text-white w-64 sm:w-72 md:w-80 px-4 py-2 border-r border-[#D9D9D9] max-h-screen">
//       <h5 className="text-md font-bold mt-10 sticky top-0">AVAILABLE DEVICES</h5>
//       <div className="flex justify-center overflow-y-auto h-full pb-4 custom-scrollbar">
//         <div className="grid grid-cols-2 gap-2 mt-4">
//           {devices.map((device, index) => (
//             <DeviceCard key={index} title={device.title} description={device.description} />
//           ))}
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import DeviceCard from './DeviceCard';
// import devices from '../data/devices.json';
// import pm from '../assets/power_meter.svg';

// const Sidebar = ({ visible }) => {
//   return (
//     <aside className={`sidebar bg-gray-[#1E1E1E] text-white w-64 sm:w-62 md:w-60 px-4 py-2 border-r border-[#D9D9D9] max-h-screen ${visible ? 'block' : 'hidden md:block'}`}>
//       <h5 className="text-md font-bold mt-10 sticky top-0 text-[#26947a]">AVAILABLE DEVICES</h5>
//       <div className="flex justify-center overflow-y-auto h-full pb-4 custom-scrollbar card-container">
//         <div className="grid grid-cols-1 gap-2 mt-4">
//           {devices.map((device, index) => (
//             <DeviceCard key={index} title={device.title} description={device.description} info={device.info} image={pm}/>
//           ))}
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;



import React from 'react';
import DeviceCard from './DeviceCard';
import devices from '../data/devices.json';
import power_meter from '../assets/power_meter.svg';
import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';
import spectrometer from '../assets/spectrometer.svg';
import cnc from '../assets/cnc.svg';
import controller from '../assets/controller.svg';
import electronics_board from '../assets/electronics_board.svg';
import laser from '../assets/laser.svg';
import equipment from '../assets/equipment.svg';
import polarization from '../assets/polarization.svg';
import sensor from '../assets/sensor.svg';
import stages from '../assets/stages.svg';
import temperature_controller from '../assets/temperature_controller.svg';
import amplifier from '../assets/amplifier.svg';

const Sidebar = ({ visible }) => {

const imageMap = {
    'power_meter.svg': power_meter,
    'logo.svg': logo,
    'camera.svg': camera,
    'spectrometer.svg': spectrometer,
    'cnc.svg': cnc,
    'controller.svg': controller,
    'electronics_board.svg': electronics_board,
    'laser.svg': laser,
    'equipment.svg': equipment,
    'polarization.svg': polarization,
    'sensor.svg': sensor,
    'stages.svg': stages,
    'temperature_controller.svg': temperature_controller,
    'amplifier.svg': amplifier,
    };


  return (
    <div className={`sidebar${visible ? '' : ' sidebar-hidden'}`}>
    <aside className={`sidebar bg-gray-[#1E1E1E] text-white w-64 sm:w-62 md:w-60 px-4 py-2 border-r border-[#D9D9D9] max-h-screen ${visible ? 'block' : 'hidden md:block'}`}>
      <h5 className="text-md font-bold mt-10 sticky top-0 text-[#26947a]">AVAILABLE DEVICES</h5>
      <div className="flex justify-center overflow-y-auto h-full pb-4 custom-scrollbar card-container">
        <div className="grid grid-cols-1 gap-2 mt-4">
          {devices.map((device, index) => (
            <DeviceCard key={index} title={device.title} description={device.description} info={device.info} image={imageMap[device.image]}/>
          ))}
        </div>
      </div>
    </aside>
    </div>
  );
};

export default Sidebar;









