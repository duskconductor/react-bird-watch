import React from "react";
import Scoreboard from "../scoreboard";

function Header(props) {
  return (
    <div className="headerWrapper">
      <Scoreboard
        title={props.title}
        highScore={props.highScore}
        currentScore={props.currentScore}
      />
      <div className="subheadWrapper">
        <p>Instructions on how to play</p>
      </div>
    </div>
  );
}

export default Header;
