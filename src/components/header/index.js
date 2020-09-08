import React from "react";

function Header(props) {
  return (
    <div className="headerWrapper">
      <div className="headerText">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default Header;
