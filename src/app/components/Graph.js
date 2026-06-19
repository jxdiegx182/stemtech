"use client";

import { useEffect, useRef, useState } from "react";

export default function Graph() {
  const canvasRef = useRef(null);

  const [vertices, setVertices] = useState(5);
  const [radius, setRadius] = useState(150);

  useEffect(() => {
    drawGraph();
  }, [vertices, radius]);

  const drawGraph = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;

    const points = [];

    // Calcular vértices
    for (let i = 0; i < vertices; i++) {
      const angle = (2 * Math.PI * i) / vertices;

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      points.push({ x, y });

      // Dibujar punto rojo
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();
    }

    // Dibujar líneas entre todos los vértices
    ctx.strokeStyle = "white";

    for (let i = 0; i < vertices; i++) {
      for (let j = i + 1; j < vertices; j++) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold">
        Grafo Geométrico
      </h1>

      <div className="flex gap-4">
        <div>
          <label>Vértices:</label>
          <input
            type="number"
            value={vertices}
            min="3"
            onChange={(e) => setVertices(Number(e.target.value))}
            className="ml-2 p-1 text-white"
          />
        </div>

        <div>
          <label>Radio:</label>
          <input
            type="number"
            value={radius}
            min="50"
            onChange={(e) => setRadius(Number(e.target.value))}
            className="ml-2 p-1 text-white"
          />
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="border border-black-500 bg-blue-900"
      />
    </div>
  );
}