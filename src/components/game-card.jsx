import React from 'react';
import PropTypes from 'prop-types';
import './game-card.css'; 
import { Link } from 'react-router-dom';
const GameCard = ({ name, imageSrc, gameLink }) => {
  return (
    <Link to="/game">
    <div className="game-card">
      <a href={gameLink} target="_blank" rel="noopener noreferrer">
        <img src={imageSrc} alt={name} className="game-image" />
        <div className="game-info">
          <span className="game-name">{name}</span>
        </div>
      </a>
    </div>
    </Link>
  );
};

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  gameLink: PropTypes.string.isRequired,
};

export default GameCard;
