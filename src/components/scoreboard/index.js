import React from "react";

function Scoreboard(props) {
  return (
    <div className="scoreboard">
      <div className="scoreboardHighScore">
        <span className="scoreboardEmph">High Score:</span> {props.highScore}
      </div>
      <div className="scoreboardCurrentScore">
        <span className="scoreboardEmph"> Current Score:</span>{" "}
        {props.currentScore}
      </div>
    </div>
  );
}

export default Scoreboard;
