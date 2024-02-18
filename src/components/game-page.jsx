import React from "react";
import GameCard from "../components/game-card";
import "./game-page.css";

const GamePage = () => {
  const games = [
    {
      name: "GTM Clash of Space",
      imageSrc:
        "https://howlongtobeat.com/games/63256_Space_Clash_The_Last_Frontier.jpg?width=760",
      gameLink: "https://clash-of-space.netlify.app/",
    },
  ];

  return (
    <div className="game-page">
      {games.map((game, index) => (
        <GameCard
          key={index}
          name={game.name}
          imageSrc={game.imageSrc}
          gameLink={game.gameLink}
        />
      ))}
    </div>
  );
};

export default GamePage;
