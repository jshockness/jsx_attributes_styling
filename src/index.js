import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200/";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My Favorite Foods
    </h1>
    <div>
      <img alt="random" src={img + "?grayscale"} />
      <img
        className="food-img"
        alt="bacon"
        src="https://photos.bigoven.com/recipe/hero/turkey-bacon-2.jpg"
      />
      <img
        className="food-img"
        alt="ham"
        src="https://assets.bonappetit.com/photos/5bec6526228fb61462ca7457/16:9/w_3334,h_1875,c_limit/pineapple-glazed-ham.jpg"
      />
      <img
        className="food-img"
        alt="ramen"
        src="https://assets.bonappetit.com/photos/5e3c7a3c866b940008106763/6:9/w_2320,h_3480,c_limit/HLY-Veggie-Ramen-16x9.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
