import React from "react";

export const Tile = ({ tile }) => {
  const values = Object.values(tile);
  const info = values.map((value, index) => {
    return (
      <p key={index} className={index === 0 ? "tile-title" : "tile"}>
        {value}
      </p>
    );
  });
  return <div className="tile-container">{info}</div>;
};
