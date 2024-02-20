import React, { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import {addUserScore} from "../hooks/setScore.js";
import "./game.css";

const GamePage = ({ gameName, gameLink }) => {

  useEffect(() => {
    const handleMessage = (event) => {
      // Check if the message is from the iframe
      // if (event.source !== window) return;
      console.log("INITIALISED");
      // Check if the message contains score data
      // console.log("Received score from iframe:", event.data.score);
      const scoreData = event.data.score;
      if (scoreData !== undefined) {
        // Log the received score
        console.log("Received score from iframe:", scoreData);
        if(scoreData>0){
          addUserScore("test","testuser",scoreData)
        }
      } else {
        console.log("Received message from iframe:", event.data); // Log the entire message for debugging
      }
    };

    // Add event listener to listen for messages from the iframe
    window.addEventListener('message', handleMessage);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  return (
    <div className="game-page-container">
      <Link to="/home" className="back-button">
        <IoIosArrowBack size={30} />
      </Link>
      <h1 className="game-title">GTM Clash of Space</h1>
      <iframe className='game-iframe' title="Game" src="http://localhost:8000/"/>
    </div>
    
  );
};

export default GamePage;
