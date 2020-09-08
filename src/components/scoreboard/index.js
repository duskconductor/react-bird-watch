import React from "react";

function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <div className="scoreboardHeader">Logo</div>
      <div className="scoreboardHighScore">High Score: {props.topScore}</div>
      <div className="scoreboardCurrentScore">
        Current Score: {props.currentScore}
      </div>
    </div>
  );
}

export default Scoreboard;
