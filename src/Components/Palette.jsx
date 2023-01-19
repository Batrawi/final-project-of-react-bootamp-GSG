import React, { useState } from "react";

const colors = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
];

function Palette() {
  const [color, setColor] = useState("#ffffff");

  const handleClick = (color) => {
    setColor(color);
  };

  return (
    <div className="palette">
      <div className="color-display" style={{ backgroundColor: color }}>
        <h2>Selected color: {color}</h2>
      </div>
      <div>
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Palette;
