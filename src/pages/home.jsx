import React, { useState } from 'react';
import "./home.css";
import { FaHome, FaRegChartBar, FaGamepad } from "react-icons/fa";
import GamePage from "../components/game-page.jsx";
import InfoPage from "../components/info-page.jsx";
import LeaderBoard from "../components/leaderboard.jsx";

const Home = () => {
  const [activePage, setActivePage] = useState('info');

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <div className="main-container">
        <aside className="sidebar">
          <div  onClick={() => handleClick('info')}>
            {/* <FaHome /> */}
            <img className="sidebar-icon" src="home.svg" alt="Girl in a jacket"></img>
          </div>
          <div className="sidebar-icon" onClick={() => handleClick('game')}>
            {/* <FaGamepad /> */}
            <img className="sidebar-icon" src="game.svg" alt="Girl in a jacket"></img>

          </div>
          <div className="sidebar-icon" onClick={() => handleClick('leaderboard')}>
            {/* <FaRegChartBar /> */}
            <img className="sidebar-icon" src="podium.svg" alt="Girl in a jacket"></img>

          </div>
        </aside> 
        <main>
          {activePage === 'info' && <InfoPage />}
          {activePage === 'game' && <GamePage />}
          {activePage === 'leaderboard' && <LeaderBoard />}
        </main>
      </div>
    </>
  );
};
export default Home;
