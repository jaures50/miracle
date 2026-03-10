import React from "react";
import { useFabricCanvas } from "./hooks/useFabricCanvas";

const FabricCanvas: React.FC = () => {
  const { canvasRef } = useFabricCanvas();

  return <canvas ref={canvasRef} className="fabric-canvas" />;
};

export default FabricCanvas;