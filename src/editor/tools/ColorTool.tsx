import React from "react";
import { fabric } from "fabric";

const ColorTool: React.FC = () => {
  const changeColor = () => {
    const color = prompt("Enter color (name or hex):");
    const canvas = fabric.Canvas.instances[0];
    if (!canvas) return;

    const activeObj = canvas.getActiveObject();
    if (activeObj) {
      activeObj.set("fill", color);
      canvas.renderAll();
    }
  };

  return <button onClick={changeColor}>Change Color</button>;
};

export default ColorTool;