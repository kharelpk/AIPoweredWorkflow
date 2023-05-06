import "./home.scss";
import React from 'react';
import TopBar from '../../components/TopBar.jsx';
import Sidebar from '../../components/SideBar.jsx';


const Home = () => {
  return (
    <div className="home">
      <TopBar />
      <div className="homeContainer">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;