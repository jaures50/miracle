import React from "react";
import { fabric } from "fabric";

const TextTool: React.FC = () => {
  const addText = () => {
    const canvas = fabric.Canvas.instances[0];
    if (!canvas) return;

    const text = new fabric.Textbox("New text", {
      left: 50,
      top: 50,
      fontSize: 24,
      fill: "#000",
    });
    canvas.add(text);
    canvas.setActiveObject(text);
  };

  return <button onClick={addText}>Add Text</button>;
};

export default TextTool;