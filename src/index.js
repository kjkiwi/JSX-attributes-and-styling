import React from "react";
import ReactDOM from "react-dom";

const imgRandom = "https://picsum.photos/100";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img src={imgRandom + "?grayscale"}></img>
    </div>
  </div>,
  document.getElementById("root")
);
