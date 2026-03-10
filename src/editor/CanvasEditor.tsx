import React from "react";
import TextTool from "./tools/TextTool";
import "../styles/editor.css";
import ShapeTool from "./tools/ShapeTool";
import FabricCanvas from "./FabricCanvas";
import ColorTool from "./tools/ColorTool";
import ImageTool from "./tools/ImageTool";

const CanvasEditor: React.FC = () => {
  return (
    <div className="canvas-editor">
      <div className="toolbar">
        <TextTool />
        <ImageTool />
        <ColorTool />
        <ShapeTool />
      </div>
      <FabricCanvas />
    </div>
  );
};

export default CanvasEditor;