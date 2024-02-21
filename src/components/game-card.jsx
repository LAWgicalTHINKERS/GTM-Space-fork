import React from "react";
import PropTypes from "prop-types";
import "./game-card.css";
import { Link } from "react-router-dom";

import { useGetBalance } from "../hooks/useGetBalance";
import { useAccount } from "wagmi";

const GameCard = ({ name, imageSrc, gameLink }) => {
  const { address } = useAccount();
  console.log(address);
  const balance = useGetBalance(address);
  console.log("Balance:", balance);
  return (
    <div className="game-card">
      <img src={imageSrc} alt={name} className="game-image" />
      <div className="game-info">
        <span className="game-name">{name}</span>
      </div>
      {balance >= 10000 ? (
        <Link to="/game">
          <button className="play-button">Play</button>
        </Link>
      ) : (
        <div className="need-tokens">
          You need atleast 10000 GTM tokens to play
        </div>
      )}
    </div>
  );
};

GameCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  gameLink: PropTypes.string.isRequired,
};

export default GameCard;
