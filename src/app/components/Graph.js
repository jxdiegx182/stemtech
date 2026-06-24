"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function Graph() {
  const canvasRef = useRef(null);

  const [vertices, setVertices] = useState(9);
  const [radius, setRadius] = useState(100);

  const drawGraph = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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

      // Dibujar punto azul
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "blue";
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
  }, [vertices, radius]);

  useEffect(() => {
    drawGraph();
  }, [drawGraph]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-1 p-1 bg-zinc-50 min-h-24 text-black dark:bg-black dark:text-zinc-50">

      <h1 className="text-2xl font-bold">
        Grafo Geométrico
      </h1>

      <div className="flex gap-1">
        <div>
          <label>Vértices:</label>
          <input
            type="number"
            value={vertices}
            min="3"
            onChange={(e) => setVertices(Number(e.target.value))}
            className="ml-2 p-1 text-black bg-zinc-50 dark:bg-black"
          />
        </div>

        <div>
          <label>Radio:</label>
          <input
            type="number"
            value={radius}
            min="50"
            onChange={(e) => setRadius(Number(e.target.value))}
            className="ml-2 p-1 text-black bg-zinc-50 dark:bg-black"
          />
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="border border-black-900 bg-zinc-500 mt-1"
      />
    </div>
  );
}
