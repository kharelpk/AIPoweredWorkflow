

import "./home.scss";
import React, { useState } from 'react';
import TopBar from '../../components/TopBar.jsx';
import Sidebar from '../../components/SideBar.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import InputBar from '../../components/InputBar.jsx';
import pythonCodeData from '../../data/pythonCode.json';
import CodeDisplay from '../../components/CodeDisplay.jsx';
import CodeInfo from '../../components/CodeInfo.jsx';

const Home = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [pythonCode, setPythonCode] = useState('');
  const [displayCode, setDisplayCode] = useState(false);

  const handleBurgerMenuClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="home">
      <TopBar onBurgerMenuClick={handleBurgerMenuClick} />
      <div className="homeContainer">
        <Sidebar visible={sidebarVisible} />
        <Layout>
          <h5 className="text-md font-bold mt-10 sticky top-0 text-white">
            GENERATE AUTOMATION WORKFLOW
          </h5>
          <InputBar className="mt-25" onSend={(text) => {
                setPythonCode(pythonCodeData.code);
                setDisplayCode(true);
                }} />
          <div className="content">
            {displayCode && (
              <div className="code-section grid grid-cols-1 md:grid-cols-2 mt-4 w-full h-[calc(100%-3rem)] gap-4">
                <div className="col-span-1 md:flex-1 overflow-y-auto">
                  <CodeInfo />
                </div>
                <div className="col-span-1 md:flex-1">
                  <CodeDisplay code={pythonCode} />
                </div>
              </div>
            )}
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Home;
