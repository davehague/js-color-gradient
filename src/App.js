import React from "react";
import Gradient from "javascript-color-gradient";
import "./styles.css";

export default function App() {
  const colorArr = new Gradient()
    .setColorGradient("#FFFFFF", "#ba0c2f")
    .setMidpoint(12)
    .getColors();

  const colorArr2 = new Gradient()
    .setColorGradient("#ba0c2f", "#000000")
    .setMidpoint(4)
    .getColors();

  return (
    <div className="App">
      <div className="App">
        {colorArr.map((color) => {
          return (
            <button
              className="button"
              style={{ backgroundColor: color }}
              key={color}
            />
          );
        })}
      </div>

      {colorArr.map((color) => (
        <div>{color}</div>
      ))}

      <div className="App">
        {colorArr2.map((color) => {
          return (
            <button
              className="button"
              style={{ backgroundColor: color }}
              key={color}
            />
          );
        })}
      </div>

      {colorArr2.map((color) => (
        <div>{color}</div>
      ))}
    </div>
  );
}
