import React from "react";

function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <div className="scoreboardHeader">
        <h1>{props.title}</h1>
      </div>
      <div className="scoreboardHighScore">High Score: {props.topScore}</div>
      <div className="scoreboardCurrentScore">
        Current Score: {props.currentScore}
      </div>
    </div>
  );
}

export default Scoreboard;
