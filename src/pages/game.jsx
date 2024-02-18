import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './game.css'; 

const GamePage = ({ gameName, gameLink }) => {
  return (
    <div className="game-page-container">
      <Link to="/home" className="back-button">
        <IoIosArrowBack size={30} />
      </Link>
      <h1 className="game-title">GTM Clash of Space</h1>
      <iframe src="https://clash-of-space.netlify.app/" title={gameName} className="game-iframe" />
    </div>
  );
};

export default GamePage;
