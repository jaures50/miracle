import React from "react";
import { fabric } from "fabric";

const ImageTool: React.FC = () => {
  const addImage = () => {
    const canvas = fabric.Canvas.instances[0];
    if (!canvas) return;

    const url = prompt("Enter image URL:");
    if (!url) return;

    fabric.Image.fromURL(url, (img: { set: (arg0: { left: number; top: number; scaleX: number; scaleY: number; }) => void; }) => {
      img.set({ left: 100, top: 100, scaleX: 0.5, scaleY: 0.5 });
      canvas.add(img);
      canvas.setActiveObject(img);
    });
  };

  return <button onClick={addImage}>Add Image</button>;
};

export default ImageTool;