import React from 'react'
import "./info-page.css"

const StepCard = ({ stepNumber, description }) => {
  return (
    <div className="step-card">
      <h3>STEP {stepNumber}</h3>
      <p>{description}</p>
    </div>
  );
};

const InfoPage = () => {
  return (
    <>
    <header className="header">
      <h1>WELCOME TO GTM SPACE STATION</h1>
      <p>
        Embark on an Interstellar Adventure! Explore a universe of captivating
        games, earn GTM tokens, ascend the leaderboard, and reap rewards in
        GTM tokens.
      </p>
    </header>
    <section className="steps-section">
      <StepCard
        stepNumber="1"
        description="Hold more than 10,000 GTM tokens"
      />
      <StepCard stepNumber="2" description="Play games and have fun" />
      <StepCard
        stepNumber="3"
        description="Every week top 10 of the leaderboard will be rewarded"
      />
    </section>
  </>
  )
}

export default InfoPage