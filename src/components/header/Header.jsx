import React from "react";

const Header = (props) => {
  return (
    <header className="container no-padding">
      <div className="title">
        <img
          src="./img/main.png"
          alt="Nature"
          className="responsive"
          width="1280"
          height="800"
        />
        <div className="texto">
          <h1>LOREM IPSUM</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        <div className="setinha">
            <div className="svg"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
