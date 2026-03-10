import { useEffect, useRef } from "react";
import { fabric } from "fabric";

export const useFabricCanvas = (width = 800, height = 600) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      fabricRef.current = new fabric.Canvas(canvasRef.current, {
        width,
        height,
        backgroundColor: "#fff",
      });
    }

    return () => {
      fabricRef.current?.dispose();
    };
  }, [width, height]);

  return { canvasRef, fabricRef };
};