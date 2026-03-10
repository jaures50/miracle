import React from "react";
import { fabric } from "fabric";

const ShapeTool: React.FC = () => {
  const addRect = () => {
    const canvas = fabric.Canvas.instances[0];
    if (!canvas) return;

    const rect = new fabric.Rect({
      left: 50,
      top: 50,
      width: 100,
      height: 100,
      fill: "#f00",
    });
    canvas.add(rect);
    canvas.setActiveObject(rect);
  };

  return <button onClick={addRect}>Add Rectangle</button>;
};

export default ShapeTool;