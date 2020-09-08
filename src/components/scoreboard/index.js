import React from "react";

function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <div className="scoreboardHeader">
        <h1>{props.title}</h1>
      </div>
      <div className="scoreboardScore">
        <div className="scoreboardHighScore">High Score: {props.highScore}</div>
        <div className="scoreboardCurrentScore">
          Current Score: {props.currentScore}
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
