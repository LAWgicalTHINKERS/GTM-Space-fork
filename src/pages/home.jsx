import React, { useState } from "react";
import "./home.css";
import Header from "../components/Header.jsx";
import GamePage from "../components/game-page.jsx";
import InfoPage from "../components/info-page.jsx";
import LeaderBoard from "../components/leaderboard.jsx";

const Home = () => {
  const [activePage, setActivePage] = useState("info");

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <aside className="sidebar">
          <div className="icon-box" onClick={() => handleClick("info")}>
            <div className={activePage === "info" ? "side-line" : ""}></div>
            <img
              className={
                activePage === "info" ? "sidebar-icon-clicked" : "sidebar-icon"
              }
              src={
                activePage === "info" ? "home-icon-black.svg" : "home-icon.svg"
              }
              alt="Girl in a jacket"
            ></img>
          </div>
          <div className="icon-box" onClick={() => handleClick("game")}>
            <div className={activePage === "game" ? "side-line" : ""}></div>
            <img
              className={
                activePage === "game" ? "sidebar-icon-clicked" : "sidebar-icon"
              }
              src={
                activePage === "game" ? "gamebar-black.svg" : "gamebar.svg"
              }
              alt="Girl in a jacket"
            ></img>
          </div>
          <div className="icon-box" onClick={() => handleClick("leaderboard")}>
            <div
              className={activePage === "leaderboard" ? "side-line" : ""}
            ></div>
            <img
              className={
                activePage === "leaderboard"
                  ? "sidebar-icon-clicked"
                  : "sidebar-icon"
              }
              src={
                activePage === "leaderboard"
                  ? "leaderboard-black.svg" : "leaderboard.svg" }
              alt="Girl in a jacket"
            ></img>
          </div>
        </aside>
        <main className="right-box">
          {activePage === "info" && <InfoPage />}
          {activePage === "game" && <GamePage />}
          {activePage === "leaderboard" && <LeaderBoard />}
        </main>
      </div>
    </>
  );
};
export default Home;
